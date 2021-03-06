import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {UserInfoService} from '../../services/userInfo.service';
@Component({
  selector: 'app-my-publish',
  templateUrl: './my-publish.component.html',
  styleUrls: ['./my-publish.component.css']
})
export class MyPublishComponent implements OnInit {
  user: any;
  data = [];
  _uploadUrl = this.glo.uploadUrl;

  constructor(private _cookieService: CookieService,
              private glo: GlobalPropertyService,
              private uis: UserInfoService) {
  }


  ngOnInit() {
    this.user = this._cookieService.getObject('user');
    const that = this;
    if (that.user) {
      that.uis.getPublishList(that.user.uid, function (result) {
        if (result._body !== 'err') {
          that.data = JSON.parse(result._body);
        }
      });
    }
  }

}
