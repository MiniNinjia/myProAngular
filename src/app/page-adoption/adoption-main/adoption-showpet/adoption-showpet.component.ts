import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
//导入动画
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';


@Component({
  selector: 'app-adoption-showpet',
  templateUrl: './adoption-showpet.component.html',
  styleUrls: ['./adoption-showpet.component.css'],
  animations: [
    trigger('divState', [ //div块出现
      state('show', style({
  transform:'translateY(5%)'

      })),
      state('hide', style({
        height: '0px',
      })),
      transition('void => *', animate('0ms')),
      transition('* => show', animate('500ms ease-in')),
      transition('* => hide', animate('500ms ease-out'))
    ])]
})
export class AdoptionShowpetComponent implements OnInit {
  state = 'hide';
  toggleState(i:any) {
    this.showpet[i].state=(this.showpet[i].state === 'show' ? 'hide' : 'show')
  }
  constructor() { }

  ngOnInit() {
  }
  showpet=[
    {
      'id':1,
      'img':'https://pic.qyer.com/public/place/theme/2017/05/16/14949009371528/388x200',
      'width':'389',
      'height':'200',
      'title':'洛克菲勒观景台',
      'word':'这里是欣，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿',
      'state':'hide'
    },
    {
      'id':2,
      'img':'https://pic.qyer.com/public/place/theme/2017/05/16/14949010333542/200x192',
      'width':'192',
      'height':'200',
      'title':'函馆山',
      'word':'函馆的夜景，世界三大夜景之一是来到函馆不得不看的城市景观。',
      'state':'hide'
    },
    {
      'id':3,
      'img':'https://pic.qyer.com/public/place/theme/2017/05/16/14949014552598/192x405',
      'width':'192',
      'height':'405',
      'title':'凯瑞公园',
      'word':'凯瑞公园是拍摄西雅图景色的最佳地点艾略特湾，还是远处的雷尼尔山，都一览无遗。',
      'state':'hide'
    },
    {
      'id':4,
      'img':'https://pic.qyer.com/public/place/theme/2017/05/16/14949015685149/388x200',
      'width':'389',
      'height':'200',
      'title':'函馆山',
      'word':'函馆的夜景，世界三大夜景之一，号称米其林三星级的夜景，是来到函馆不得不看的城市景观。',
      'state':'hide'
    },
    {
      'id':5,
      'img':'https://pic.qyer.com/public/place/theme/2017/05/16/14949022401522/200x192',
      'width':'192',
      'height':'200',
      'title':'函馆山',
      'word':'函馆的夜景，世界三大夜景之一，号称米其林三星级的夜景，是来到函馆不得不看的城市景观。',
      'state':'hide'
    },
    {
      'id':6,
      'img':' https://pic.qyer.com/public/place/theme/2017/05/16/14949023079209/200x192',
      'width':'192',
      'height':'200',
      'title':'函馆山',
      'word':'函馆的夜景，世界三大夜景之一，号称米其林三星级的夜景，是来到函馆不得不看的城市景观。',
      'state':'hide'
    },
    {
      'id':7,
      'img':'https://pic.qyer.com/public/place/theme/2017/05/16/14949011087056/192x405',
      'width':'192',
      'height':'405',
      'title':'函馆山',
      'word':'函馆的夜景，世界三大夜景之一，号称米其林三星级的夜景，是来到函馆不得不看的城市景观。',
      'state':'hide'
    },
    {
      'id':8,
      'img':'../../../../assets/images/dog1.png',
      'width':'192',
      'height':'200',
      'title':'函馆山',
      'word':'函馆的夜景，世界三大夜景之一，号称米其林三星级的夜景，是来到函馆不得不看的城市景观。',
      'state':'hide'
    },
    {
      'id':9,
      'img':'https://pic.qyer.com/public/place/theme/2017/05/16/14949021696741/200x192',
      'width':'192',
      'height':'200',
      'title':'函馆山',
      'word':'https://pic.qyer.com/public/place/theme/2017/05/16/14949021696741/200x192。',
      'state':'hide'
    },
    {
      'id':10,
      'img':'https://pic.qyer.com/public/place/theme/2017/05/16/14949023816783/388x200',
      'width':'389',
      'height':'200',
      'title':'函馆山',
      'word':'函馆的夜景，世界三大夜景之一，号称米其林三星级的夜景，是来到函馆不得不看的城市景观。',
      'state':'hide'
    },
  ]

}
