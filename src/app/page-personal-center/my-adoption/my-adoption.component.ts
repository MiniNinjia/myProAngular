import {Component, OnInit} from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {UserInfoService} from '../../services/userInfo.service';
@Component({
  selector: 'app-my-adoption',
  templateUrl: './my-adoption.component.html',
  styleUrls: ['./my-adoption.component.css']
})
export class MyAdoptionComponent implements OnInit {
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
      that.uis.getAdoptionList(that.user.uid, function (result) {
        if (result._body !== 'err') {
          //console.log(JSON.parse(result._body));
          that.data = JSON.parse(result._body);
        }
      });
    }
  }

}
