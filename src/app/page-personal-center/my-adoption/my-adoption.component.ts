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
  data: any;

  constructor(private _cookieService: CookieService,
              private glo: GlobalPropertyService,
              private uis: UserInfoService) {
  }

  ngOnInit() {
    this.user = this._cookieService.getObject('user');

  }

}
