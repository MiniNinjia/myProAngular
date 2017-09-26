import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {UserInfoService} from '../../services/userInfo.service';
@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.css']
})
export class MyMessageComponent implements OnInit {
  user: any;
  messagedata = [];
  _uploadUrl = this.glo.uploadUrl;
buyinfo=[
  {
  'id': 1,
    'title':'超极品柴犬宝宝 血统好 签订协议',
    'pimg':'../../assets/images/adv.png',
  'user': '张三',
  'reason': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑',
  'addres': '天堂街88888号',
  'tel': 158759795,
  'exp': '是',

}
]

  //姓名：<
  //电话：<
  //地址：<
  //是否养过
  //申请理由
  constructor(private _cookieService: CookieService,
              private glo: GlobalPropertyService,
              private uis: UserInfoService) {
  }




    ngOnInit() {
      this.user = this._cookieService.getObject('user');
      const that = this;
      if (that.user) {
        that.uis.getMessageList(that.user.uid, function (result) {
          if (result._body !== 'err') {
            that.messagedata = JSON.parse(result._body);
          }
        });
      }
    }



}
