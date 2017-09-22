import {Component, OnInit} from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../services/global-property.service';
import {UserInfoService} from '../services/userInfo.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  userInfo: any;
  _url = this.glo.serverUrl;
  _flag = true;

  constructor(private _cookieService: CookieService,
              private glo: GlobalPropertyService,
              private uis: UserInfoService) {
  }

  ngOnInit() {
    this.userInfo = this._cookieService.getObject('user');
    const that = this;
    if (this.userInfo) {
      this.uis.checkInfo(this.userInfo, function (data) {
        if (data._body === 'false') {
          that._flag = false;
          setTimeout(function () {
            window.location.href = that._url + '/users/login';
          }, 3000);
        }
      });
    } else {
      that._flag = false;
      setTimeout(function () {
        window.location.href = that._url + '/users/login';
      }, 3000);
    }
  }
}
