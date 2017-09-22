import {Component, OnInit} from '@angular/core';
import {GlobalPropertyService} from '../../../services/global-property.service';
import {DiaryService} from '../../../services/diary.service';
import {CookieService} from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-diary-details',
  templateUrl: './diary-details.component.html',
  styleUrls: ['./diary-details.component.css']
})

export class DiaryDetailsComponent implements OnInit {
  list_data: any;
  _uploadUrl: any;
  postData: any;
  pageList: any;
  pageNumber = 1;//默认第一页
  sort = 'default1'; //排序方式
  constructor(private glo: GlobalPropertyService,
              private ds: DiaryService,
              private _cookieService: CookieService) {
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
  }

  changeSort(sort: string) {//修改排序方式
    this.sort = sort;
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
    this.ds.getdiaryPageCount(function (result) {
      if (result._body !== 'err') {
        that.list_data = {
          totalPage: Math.ceil(JSON.parse(result._body).count / 5),
          pageNow: that.pageNumber,
          diary: []
        };
        that.changePageList();
      }
    });
    this.loaddata();
  }

  loaddata() {
    const that = this;
    this.postData.pageNumber = this.pageNumber;
    this.ds.getdiaryList(this.postData, function (result) {
      if (result._body !== 'err') {
        that.list_data.diary = JSON.parse(result._body);
      }
    });
  }

  change(i: any) {
    this.list_data.diary[i].isCollect = !this.list_data.diary[i].isCollect;
  }
}
