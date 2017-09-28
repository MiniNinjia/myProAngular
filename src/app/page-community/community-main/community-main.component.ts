import {Component, OnInit} from '@angular/core';
import {CommunityService} from '../../services/community.service';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-community-main',
  templateUrl: './community-main.component.html',
  styleUrls: ['./community-main.component.css']
})
export class CommunityMainComponent implements OnInit {
  pageNumber = 1;//默认第一页
  sort = 'default'; //排序方式
  list_data: any;
  pageList: any;
  postData: any;
  _uploadUrl: any;
  _unheadimg: any;

  writestate = false;
  writecontent = {
    title: null,
    content: null,
    uid: null,
    time: null
  };

  aa = false;

  constructor(private glo: GlobalPropertyService,
              private cs: CommunityService,
              private _cookieService: CookieService,
              private sanitizer: DomSanitizer) {
    this.postData = {
      uid: null,
      pageNumber: this.pageNumber,
      sort: this.sort,
      pageSize: 5,
    };
    if (this._cookieService.get('user')) {
      this.postData.uid = JSON.parse(this._cookieService.get('user')).uid;
    }
    this._uploadUrl = glo.uploadUrl;
    this._unheadimg = 'upload/headimg/default.jpg';
  }

  changeSort(sort: string) {//修改排序方式
    this.postData.sort = sort;
    this.sort = sort;
    this.loaddata();
    this.changePageList();
  }//修改排序方式
  changePageList() {//修改pagelist数组
    this.pageList = [];
    if (this.list_data.totalPage <= 7) {
      for (let i = 1; i <= this.list_data.totalPage; i++) {
        this.pageList.push(i);
      }
    } else if (this.pageNumber < 4) {
      this.pageList = [1, 2, 3, 4, 5, 6, 7];
    } else if (this.pageNumber >= 4 && this.pageNumber + 3 <= this.list_data.totalPage) {
      this.pageList = [
        this.pageNumber - 3,
        this.pageNumber - 2,
        this.pageNumber - 1,
        this.pageNumber,
        this.pageNumber + 1,
        this.pageNumber + 2,
        this.pageNumber + 3,
      ];
    } else {
      for (let i = this.list_data.totalPage - 6; i <= this.list_data.totalPage; i++) {
        this.pageList.push(i);
      }
    }
  }//修改pagelist数组
  changePageNumber(j: any) { //修改当前页面
    if (j > 0 && j <= this.list_data.totalPage) {
      this.pageNumber = j;
      this.loaddata();
      this.changePageList();
    }
  }//修改当前页面
  ngOnInit() {
    const that = this;
    this.cs.getCommunityPageCount(function (result) {
      if (result._body !== 'err') {
        that.list_data = {
          totalPage: Math.ceil(JSON.parse(result._body).count / 5),
          pageNow: that.pageNumber,
          article: []
        };
        that.changePageList();
      }
    });
    that.loaddata();
  }

  write() {
    if (this.postData.uid) {
      this.writestate = !this.writestate;
      this.writecontent.uid = this.postData.uid;
    } else {
      alert('未登录');
    }
  }

  submit() {
    const that = this;
    this.writecontent.time = new Date().getTime();
    this.cs.addcommunity(this.writecontent, function (result) {
      if (result._body !== 'err') {
        // that.list_data.article = JSON.parse(result._body);
      }
      that.write();
      that.loaddata();
    });
  }


  froalaContent(event) {
    this.writecontent.content = event;
    console.log(this.writecontent.content);
  }

  //举报模态框
  jubao() {
    this.aa = !this.aa;
    console.log(this.aa + '举报');
  }

  receive(mes: boolean) {
    this.aa = !mes;
    console.log(this.aa + 're');
  }

  loaddata() {
    const that = this;
    this.postData.pageNumber = this.pageNumber;
    this.cs.getCommunityList(this.postData, function (result) {
      if (result._body !== 'err') {
        that.list_data.article = JSON.parse(result._body);
        that.list_data.article.forEach(function (item, index) {
          that.list_data.article[index].content = that.sanitizer.bypassSecurityTrustHtml(item.content);
        });
      }
    });
  }

  collect(i: any) {
    const that = this;
    if (that.postData.uid) {
      const postdata = {
        uid: that.postData.uid,
        state: that.list_data.article[i].collectstate,
        cid: that.list_data.article[i].communityID
      };
      that.cs.collect(postdata, function (result) {
        if (result._body !== 'err') {
          that.list_data.article[i].collectstate = !that.list_data.article[i].collectstate;
        } else {
          alert('点赞失败！');
        }
      });
    } else {
      alert('未登陆');
    }
  }
}
