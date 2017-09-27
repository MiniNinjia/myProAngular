import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {UserInfoService} from '../../services/userInfo.service';
@Component({
  selector: 'app-my-community',
  templateUrl: './my-community.component.html',
  styleUrls: ['./my-community.component.css']
})
export class MyCommunityComponent implements OnInit {
  user: any;
  communitydata = [];
  _uploadUrl = this.glo.uploadUrl;
  constructor(private _cookieService: CookieService,
              private glo: GlobalPropertyService,
              private uis: UserInfoService) {



  }

  ngOnInit() {
    this.user = this._cookieService.getObject('user');
    const that = this;
    if (that.user) {
      that.uis.getCommunitylist(that.user.uid, function (result) {
        if (result._body !== 'err') {
          that.communitydata = JSON.parse(result._body);
        }
      });
    }


  }

}
