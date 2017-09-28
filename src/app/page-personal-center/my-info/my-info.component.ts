import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <--- JavaScript import from Angular
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {UserInfoService} from '../../services/userInfo.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
  user: any;
  infoData: any;
  inof = {
    'users': null,
    'sex': null,
    'addres': null,
    'tel': null,
  };

  del = false;
  users: any;
  sex: any;
  addres: any;
  mytel: any;

  constructor(private _cookieService: CookieService,
              private glo: GlobalPropertyService,
              private uis: UserInfoService) {
    this.addres = this.inof.addres;
    this.users = this.inof.users;
    this.sex = this.inof.sex;
    this.mytel = this.inof.tel;
  }

  ngOnInit() {
    this.loadinfo();
  }

  revamp() {
    this.del = !this.del;
  }

  revamp2() {
    this.del = !this.del;
    this.commitChange();
  }

  revamp3() {
    const that = this;
    this.del = !this.del;
    this.inof = {
      'users': that.infoData.nickname,
      'sex': that.infoData.sex === 0 ? '女' : '男',
      'addres': that.infoData.city,
      'tel': that.infoData.telphone,
    };
  }

  commitChange() {
    this.user = this._cookieService.getObject('user');
    const that = this;
    if (that.user) {
      const data = {
        'uid': that.user.uid,
        'users': that.inof.users,
        'sex': that.inof.sex === '男' ? 1 : 0,
        'addres': that.inof.addres,
        'tel': that.inof.tel,
      };
      that.uis.commitChange(data, function (result) {
        if (result._body !== 'err') {
          that.loadinfo();
        }
      });
    }
  }

  loadinfo() {
    this.user = this._cookieService.getObject('user');
    const that = this;
    if (that.user) {
      that.uis.getinfo(that.user.uid, function (result) {
        if (result._body !== 'err') {
          that.infoData = JSON.parse(result._body)[0];
          that.inof = {
            'users': that.infoData.nickname,
            'sex': that.infoData.sex === 0 ? '女' : '男',
            'addres': that.infoData.city,
            'tel': that.infoData.telphone,
          };
        }
      });
    }
  }
}
