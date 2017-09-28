import {Component, OnInit} from '@angular/core';
import {AdoptionService} from '../../../services/adoption.service'
import {GlobalPropertyService} from '../../../services/global-property.service'
@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {

  constructor(private as: AdoptionService,
              private glo: GlobalPropertyService) {
  }

  _uploadUrl = this.glo.uploadUrl;
  data: any;

  ngOnInit() {
    const that = this;
    this.as.getpetbanner(function (result) {
      if (result._body !== 'err') {
        that.data = JSON.parse(result._body);
        console.log(that.data)
      }
    })
    //this.data = this.all;
  }

  all = [
    {
      'id': 1,
      'user': '[ 萨摩耶 ] · 4个月 · 大型犬 · 母狗 · 呆萌',
      'img': '../../../../assets/images/325x240.jpg',
      'Ename': '用户名',
      'area': '上海',
    },
    {
      'id': 1,
      'user': '[ 萨摩耶 ] · 4个月 · 大型犬 · 母狗 · 呆萌',
      'img': '../../../../assets/images/325x240.jpg',
      'Ename': '用户名',
      'area': '上海',
    },
    {
      'id': 1,
      'user': '[ 萨摩耶 ] · 4个月 · 大型犬 · 母狗 · 呆萌',
      'img': '../../../../assets/images/325x240.jpg',
      'Ename': '用户名',
      'area': '上海',
    },
    {
      'id': 1,
      'user': '[ 萨摩耶 ] · 4个月 · 大型犬 · 母狗 · 呆萌',
      'img': '../../../../assets/images/325x240.jpg',
      'Ename': '用户名',
      'area': '上海',
    },
    {
      'id': 1,
      'user': '[ 萨摩耶 ] · 4个月 · 大型犬 · 母狗 · 呆萌',
      'img': '../../../../assets/images/325x240.jpg',
      'Ename': '用户名',
      'area': '上海',
    },
    {
      'id': 1,
      'user': '[ 萨摩耶 ] · 4个月 · 大型犬 · 母狗 · 呆萌',
      'img': '../../../../assets/images/325x240.jpg',
      'Ename': '用户名',
      'area': '上海',
    },
  ]


}
