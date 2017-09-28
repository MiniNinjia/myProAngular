import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {

  constructor() {
  }

  data: any;

  ngOnInit() {
    this.data = this.all;
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
