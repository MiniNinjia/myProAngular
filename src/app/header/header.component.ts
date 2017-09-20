import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {LocalStorage} from '../app.local.storage';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../services/global-property.service';
import {UserInfoService} from '../services/userInfo.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  animations: [
    trigger('searchBox', [ //搜索框显示隐藏动画
      state('show', style({
        height: '50px'
      })),
      state('hide', style({
        height: '0px',
      })),
      transition('* => show', animate('500ms ease-in')),
      transition('* => hide', animate('500ms ease-out'))
    ]),
    trigger('searchBtn', [ //搜索按钮显示隐藏动画
      state('show', style({
        opacity: '1'
      })),
      state('hide', style({
        opacity: '0'
      })),
      transition('* => show', animate('500ms ease-in')),
      transition('* => hide', animate('500ms ease-out'))
    ]),
    trigger('userInfo', [//用户信息下拉框显示隐藏动画
      state('show', style({
        height: '130px'
      })),
      state('hide', style({
        height: '0'
      })),
      transition('* => show', animate('600ms ease-in')),
      transition('* => hide', animate('600ms ease-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  state = 'show';
  boxState = 'hide';
  userInfoState = 'hide';
  userInfo: any;
  _url = this.glo.serverUrl;

  toggleState() {
    this.state = (this.state === 'show' ? 'hide' : 'show');
    this.boxState = (this.boxState === 'show' ? 'hide' : 'show');
  }

  toggleUserInfoState() {
    this.userInfoState = (this.userInfoState === 'show' ? 'hide' : 'show');
  }

  constructor(private route: ActivatedRoute,
              private ls: LocalStorage,
              private _cookieService: CookieService,
              private glo: GlobalPropertyService,
              private http: Http,
              private uis: UserInfoService) {
  }


  ngOnInit() {
    this.userInfo = this._cookieService.getObject('user');
    console.log(this.userInfo.nickname);
    // if (this.userInfo) {
    //   this.userInfo = this._cookieService.getObject('user');
    //   this.uis.checkInfo(this.userInfo, function (data) {
    //     alert(data._body);
    //     if (data._body === 'false') {
    //
    //     }
    //   });
    // }
  }
}
