import {Component, OnInit} from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../services/global-property.service';
import {UserInfoService} from '../services/userInfo.service';
import {CommunityService} from '../services/community.service';
import {AdoptionService} from '../services/adoption.service';
@Component({
  selector: 'app-page-personal-center',
  templateUrl: './page-personal-center.component.html',
  styleUrls: ['./page-personal-center.component.css']
})
export class PagePersonalCenterComponent implements OnInit {
  user: any;
  selectIndex = 1;
  headimg = 'upload/headimg/default.jpg';
  _uploadUrl: any;
  nickname: any;
  _url = this.glo.serverUrl;
  introduce: '暂无介绍';
  userinfo: any;


  myCollect: any;


  constructor(private _cookieService: CookieService,
              private glo: GlobalPropertyService,
              private uis: UserInfoService,
              private cs: CommunityService,
              private as: AdoptionService) {
  }


  changeIndex(index: any) {
    this.selectIndex = index;
  }

  ngOnInit() {
    this.user = this._cookieService.getObject('user');
    this._uploadUrl = this.glo.uploadUrl;
    const that = this;
    if (this.user) {
      that.nickname = that.user.nickname;
      that.uis.getheadimg(that.user.uid, function (result) {
        if (result._body !== 'err') {
          that.headimg = JSON.parse(result._body)[0].headimg;
        }
      });
      this.uis.getinfo(that.user.uid, function (result) {
        if (result._body !== 'err') {
          that.userinfo = JSON.parse(result._body)[0];
          that.introduce = that.userinfo.introduce ? that.userinfo.introduce : '暂无介绍';
        }
      });
      //我的收藏
      this.uis.getpersonalCollect(that.user.uid, function (result) {
        if (result._body !== 'err') {
          that.myCollect = JSON.parse(result._body);
        }
      });
    }
    scrollTo(0, 0);
  }

  dodelcollect(type, id) {
    if (type === 'community') {
      const __myData = {
        uid: this.user.uid,
        state: 1,
        cid: id
      };
      const that = this;
      this.cs.collect(__myData, function (result) {
        if (result._body !== 'err') {
          that.uis.getpersonalCollect(that.user.uid, function (result1) {
            if (result._body !== 'err') {
              that.myCollect = JSON.parse(result1._body);
            }
          });
        }
      });
    } else if (type === 'adoption') {
      const __myData = {
        uid: this.user.uid,
        state: 1,
        cid: id
      };
      const that = this;
      this.as.collect(__myData, function (result) {
        if (result._body !== 'err') {
          that.uis.getpersonalCollect(that.user.uid, function (result1) {
            if (result._body !== 'err') {
              that.myCollect = JSON.parse(result1._body);
            }
          });
        }
      });
    } else if (type === 'diary') {

    }
  }
}
