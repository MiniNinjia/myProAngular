import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-backstage',
  templateUrl: './page-backstage.component.html',
  styleUrls: ['./page-backstage.component.css']
})
export class PageBackstageComponent implements OnInit {
datas = [
  {
    'name' : '首页',
    'kind' : '轮播'
  },
  {
    'name' : '领养中心',
    'kind' : '领养中心8张图'
  },
  {
    'name' : '领养日志',
    'kind' : '领养日志15张图'
  },
  {
    'name' : '养宠技巧',
    'kind' : '养宠技巧8张图'
  },
  {
    'name' : '社区中心',
  },
  {
    'name' : '发布宠物',
  },
]
  constructor() { }

  ngOnInit() {
  }

}
