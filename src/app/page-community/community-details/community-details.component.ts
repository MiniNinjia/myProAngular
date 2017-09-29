import {Component, OnChanges, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CommunityService} from '../../services/community.service';
import {UserInfoService} from '../../services/userInfo.service';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.component.html',
  styleUrls: ['./community-details.component.css']
})
export class CommunityDetailsComponent implements OnInit, OnChanges {
  showAllFlag = false;
  article: any;
  articleId: string;
  postData: any;
  _uploadUrl: any;
  pageNumber = 1;//默认第一页
  pageList = [1, 2, 3, 4, 5, 6, 7];
  list_data = {
    totalPage: 20,
    pageNow: 1
  };
  reviewData: any;
  reviewstate = false;
  rereview = '';

  login = false;
  timmer: any;

  aa = false;


  constructor(private route: ActivatedRoute,
              private glo: GlobalPropertyService,
              private cs: CommunityService,
              private _cookieService: CookieService,
              private uis: UserInfoService,
              private sanitizer: DomSanitizer) {
    this.postData = {
      uid: null,
      cid: null,
      pageNumber: this.pageNumber,
      pageSize: 10,
    };
    if (this._cookieService.get('user')) {
      this.postData.uid = JSON.parse(this._cookieService.get('user')).uid;
    }
    this._uploadUrl = glo.uploadUrl;
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
      this.postData.pageNumber = this.pageNumber;
      this.changePageList();
      this.loadReview();
    }
  }//修改当前页面

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('article');
    this.postData.cid = this.articleId;
    this.loadDetail();
    this.loadReviewCount();
    this.loadReview();
    scrollTo(0, 0);
  };

  ngOnChanges() {
    this.receive(this.aa);
  }

  showall() {
    this.showAllFlag = !this.showAllFlag;
  }


  loadDetail() {
    const that = this;
    this.cs.getCommunityDetail(this.postData, function (result) {
      if (result._body !== 'err') {
        that.article = JSON.parse(result._body);
        that.article.content = that.sanitizer.bypassSecurityTrustHtml(that.article.content);
      }
    });
  }

  loadReviewCount() {
    const that = this;
    this.cs.getCommunityReviewCount(this.postData, function (result) {
      if (result._body !== 'err') {
        that.list_data.totalPage = Math.ceil(JSON.parse(result._body).reviewcount / 10);
        that.changePageList();
      }
    });
  }

  loadReview() {
    const that = this;
    this.cs.getCommunityReview(this.postData, function (result) {
      if (result._body !== 'err') {
        that.reviewData = JSON.parse(result._body);
      }
    });
  }

  reviewshow(i, j) {//评论开关方法
    let reviewinfo = null;
    if (i >= 0) {
      reviewinfo = j >= 0 ? this.reviewData[i].childReview[j] : this.reviewData[i];
      reviewinfo.reviewstate = !reviewinfo.reviewstate;
    } else {
      this.reviewstate = !this.reviewstate;
    }
  }

  review(i, j) {//评论方法
    let reviewinfo = null;
    const that = this;
    if (i >= 0) {
      reviewinfo = j >= 0 ? this.reviewData[i].childReview[j] : this.reviewData[i];
      reviewinfo.reviewstate = !reviewinfo.reviewstate;
    } else {
      reviewinfo = {
        reviewID: 0,
        communityID: that.postData.cid,
        rereview: that.rereview
      }
      this.reviewstate = !this.reviewstate;
    }
    if (that.postData.uid) {
      const _data = {
        uid: that.postData.uid,
        fatherID: reviewinfo.reviewID,
        communityID: reviewinfo.communityID,
        time: new Date().getTime(),
        content: reviewinfo.rereview,
      };
      if (reviewinfo.rereview.length >= 0) {
        this.cs.CommunityReviewAdd(_data, function (result) {
          if (result._body !== 'err') {
            that.loadReview();
          }
        });
      }
    } else {
      this.login = true;
      this.timmer = setTimeout(() => {
        this.login = false //检测变化
      }, 3000);
    }
  }

  reviewlike(i, j) {//点赞评论
    let reviewlike = null;
    const that = this;
    reviewlike = j >= 0 ? this.reviewData[i].childReview[j] : this.reviewData[i];
    if (that.postData.uid) {
      this.cs.CommunityReviewLike(
        {
          uid: that.postData.uid,
          reviewID: reviewlike.reviewID,
          likestate: !reviewlike.likestate
        }, function (result) {
          if (result._body !== 'err') {
            reviewlike.likecount = reviewlike.likestate ? reviewlike.likecount - 1 : reviewlike.likecount + 1;
            reviewlike.likestate = !reviewlike.likestate;
          }
        });
    } else {
      this.login = true;
      this.timmer = setTimeout(() => {
        this.login = false //检测变化
      }, 3000);
    }
  }

  collect() {
    const that = this;
    if (that.postData.uid) {
      const postdata = {
        uid: that.postData.uid,
        state: that.article.colloctstate,
        cid: that.article.communityID,
      };
      that.cs.collect(postdata, function (result) {
        if (result._body !== 'err') {
          that.article.colloctstate = !that.article.colloctstate;
        } else {
          alert('点赞失败！');
        }
      });
    } else {
      this.login = true;
      this.timmer = setTimeout(() => {
        this.login = false //检测变化
      }, 3000);
    }
  }
}
