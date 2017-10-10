import {Component, OnInit} from '@angular/core';
import {AdoptionService} from '../../services/adoption.service';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {GlobalPropertyService} from '../../services/global-property.service';
@Component({
  selector: 'app-adoption-list-itme',
  templateUrl: './adoption-list-itme.component.html',
  styleUrls: ['./adoption-list-itme.component.css']
})
export class AdoptionListItmeComponent implements OnInit {
  cit: any;
  pla = true;
  choose: any;
  provence: any;
  _uploadUrl: any;
  postData = {
    uid: null
  };

  constructor(private as: AdoptionService,
              private _cookieService: CookieService,
              private glo: GlobalPropertyService) {
  }

  data: any;
  cindex: any;
  pet = [
    {
      nav: '其他',
      pett: [
        {
          'id': 1,
          'uname': 'other',
          'uimg': '../../../../assets/images/dog.png',
          'fristname': '日本',
          'img': '../../../../../assets/images/dog.png',
          'introduce': '健康没毛病,第一针疫苗打完，洗过澡了，指甲剪了，希望你好好对他负责',
          'date': '2017-4-5',
          'name': 'shabi',
          'Ename': 'sha',
          'form': '柯基',
          'special': '腿短',
          'commentcount': '1232',
          'browse': 300,
          'isCollect': true

        },
      ]
    }
  ]
  place = [
    {
      provence: null,
      city: []
    },
  ];

  ngOnInit() {
    this._uploadUrl = this.glo.uploadUrl;
    const that = this;
    if (this._cookieService.get('user')) {
      this.postData.uid = JSON.parse(this._cookieService.get('user')).uid;
    }
    this.as.getcity(function (result) {
      if (result._body !== 'err') {
        that.place = JSON.parse(result._body);
        that.cit = that.place[0].city;
        that.provence = that.place;
        that.choose = that.place[0].city[0];
      }
    });
    this.as.getlist(this.postData, function (result) {
      if (result._body !== 'err') {
        that.pet[0].pett = JSON.parse(result._body);
        that.data = that.pet[0].pett;
      }
    });

    scrollTo(0, 0);
    document.body.onclick = function (e) {
      if (e.target !== document.getElementById('_area')) {
        that.pla = true;
      }
    };
  }


  exchange(i: any) {
    const that = this;
    if (that.postData.uid) {
      const postdata = {
        uid: that.postData.uid,
        state: that.data[i].collectstate,
        petid: that.data[i].petId
      };
      that.as.collect(postdata, function (result) {
        if (result._body !== 'err') {
          that.data[i].collectstate = !that.data[i].collectstate;
        } else {
          alert('点赞失败！');
        }
      });
    } else {
      alert('未登陆');
    }
  }

  showaa(i: any) {
    this.data = this.pet[i].pett;
    this.cindex = i;
  }

//省
  pro(e, i: any) {
    this.cit = this.place[i].city;
    e.stopPropagation();
  }

//全国显示
  placee() {
    this.pla = !this.pla;
  }

  citye(j) {
    this.choose = this.cit[j];
    this.pla = !this.pla;
  }
  gotop(){
    scrollTo(0, 0);
  }

}
