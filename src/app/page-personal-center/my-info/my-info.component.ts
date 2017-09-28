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
    'id': 1,
    'users': '张三',
    'sex': '女',
    'addres': '天堂街88888号',
    'tel': 158759795,
    'age': 34,
  };

  del = false;
  users: any;
  sex: any;
  addres: any;
  mytel: any;
  age: any;

  constructor(private _cookieService: CookieService,
              private glo: GlobalPropertyService,
              private uis: UserInfoService) {
    this.addres = this.inof.addres;
    this.age = this.inof.age;
    this.users = this.inof.users;
    this.sex = this.inof.sex;
    this.mytel = this.inof.tel;


  }

  ngOnInit() {
    this.user = this._cookieService.getObject('user');
    const that = this;
    if (that.user) {
      that.uis.getinfo(that.user.uid, function (result) {
        if (result._body !== 'err') {
          that.infoData = JSON.parse(result._body);
        }
      });
    }

  }

  revamp() {
    this.del = !this.del;
  }

  revamp2() {
    this.del = !this.del;
    this.inof = {
      'id': 1,
      'users': this.user,
      'sex': this.sex,
      'addres': this.addres,
      'tel': this.mytel,
      'age': this.age,
    };
  }

  revamp3() {
    this.del = !this.del;
    this.inof = {
      'id': 1,
      'users': '张三',
      'sex': '女',
      'addres': '天堂街88888号',
      'tel': 158759795,
      'age': 34,
    };
  }
}
