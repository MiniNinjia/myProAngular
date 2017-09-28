import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AdoptionService} from '../../services/adoption.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {CookieService} from 'angular2-cookie/services/cookies.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-adoption-details',
  templateUrl: './adoption-details.component.html',
  styleUrls: ['./adoption-details.component.css'],
})
export class AdoptionDetailsComponent implements OnInit {
  petId: string;
  contan = 'detail';
  imgnow: any;
  time: any;
  currentPic = 0;
  now = 0;
  next: any;
  adoptstate: any;
  _uploadUrl: any;
  __myData: any;

  //领养申请数据
  buyuser: any;
  buytel: any;
  radi: any;
  buyaddres: any;
  reason: any;
  applyData = {
    'petid': 1,
    'buser': null,
    'btel': null,
    'radi': null,
    'baddres': null,
    'breason': null,
  };


  data = {
    'carousel': [],
    'details': {
      petId: null,
      collectstate: null
    },
  };

  recommend = [
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },

  ];

  menunow = 0;
  aa = false;
  id = 0;

  constructor(private route: ActivatedRoute,
              private as: AdoptionService,
              private _cookieService: CookieService,
              private glo: GlobalPropertyService) {
  }

  ngOnInit() {
    this._uploadUrl = this.glo.uploadUrl;
    this.petId = this.route.snapshot.paramMap.get('petid');
    const that = this;
    that.__myData = {
      uid: null,
      petid: this.petId
    }
    if (this._cookieService.get('user')) {
      that.__myData.uid = JSON.parse(this._cookieService.get('user')).uid;
    }
    this.as.getpetdetail(that.__myData, function (result) {
      if (result._body !== 'err') {
        that.data.details = (JSON.parse(result._body)[0]);
        if ((JSON.parse(result._body)[0]).imgs) {
          that.data.carousel = JSON.parse((JSON.parse(result._body)[0]).imgs);
          that.imgnow = that.data.carousel[0].img;
          that.go();
        }
      }
    });
    this.as.checkadopt(that.__myData, function (result) {
      if (result._body !== 'err') {
        that.adoptstate = JSON.parse(result._body)[0].adoptstate;
      }
    });


    scrollTo(0, 0);
  }

  change(i: any, j: any) {
    this.menunow = i;
    this.contan = j;
  }

  collect() {
    const that = this;
    if (that.__myData.uid) {
      const postdata = {
        uid: that.__myData.uid,
        state: that.data.details.collectstate,
        petid: that.data.details.petId
      };
      that.as.collect(postdata, function (result) {
        if (result._body !== 'err') {
          that.data.details.collectstate = !that.data.details.collectstate;
        } else {
          alert('点赞失败！');
        }
      });
    } else {
      alert('未登陆');
    }
  }

  carousel(i: any) {
    clearInterval(this.time);
    this.id = i;
    this.go();
  }

  go() {
    this.time = setInterval(() => {
      this.carousel(this.id === 3 ? 0 : this.id + 1);
    }, 3000);
  }

  buy() {
    this.aa = !this.aa;
  }

  checke(give: any) {
    if (give === 1) {
      this.radi = '赠送';
    } else {
      this.radi = '领养';
    }
    console.log(this.radi);
  }

  apply() {
    this.applyData = {
      'petid': 1,
      'buser': this.buyuser,
      'btel': this.buytel,
      'radi': this.radi,
      'baddres': this.buyaddres,
      'breason': this.reason,
    };
    this.aa = !this.aa;
  }

}
