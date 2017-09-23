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
        transform: 'translateY(5%)'
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
    this.showpet[i].state = (this.showpet[i].state === 'show' ? 'hide' : 'show')
  }

  constructor() {
  }

  ngOnInit() {
  }

  showpet = [
    {
      'id': 1,
      'img': '../../../../assets/images/adoption/adoption3.jpg',
      'width': '389',
      'height': '200',
      'title': '我和我的朋友',
      'word': '画面如同童话般温馨。谁是王子，谁是公主，谁又是七个小矮人呢?',
      'state': 'hide'
    },
    {
      'id': 2,
      'img': '../../../../assets/images/adoption/adoption8.jpg',
      'width': '192',
      'height': '200',
      'title': '猫猫美照',
      'word': '拍照不仅只有美女喜欢，美猫猫对此也是情有独钟的哦! 今天的主人公是来自芬兰的保利，它喜欢晒太阳、奔跑玩耍、也喜欢吃',
      'state': 'hide'
    },
    {
      'id': 3,
      'img': '../../../../assets/images/adoption/adoption9.jpg',
      'width': '192',
      'height': '405',
      'title': '求一个萌萌哒的主人',
      'word': '找一个爱玩爱吃，爱我，爱家的主子',
      'state': 'hide'
    },
    {
      'id': 4,
      'img': '../../../../assets/images/adoption/adoption2.jpg',
      'width': '389',
      'height': '200',
      'title': '给我们一个家',
      'word': '我们不吵不闹，安安静静，想有一个家，带我走好吗？',
      'state': 'hide'
    },
    {
      'id': 5,
      'img': '../../../../assets/images/adoption/adoption7.jpg',
      'width': '192',
      'height': '200',
      'title': '抱抱我',
      'word': '在许多我们看不见的角落，有许多流浪的动物等待我们的救援，而流浪狗又是其中的大宗。在被捕狗大队捕获后，要是一直没...',
      'state': 'hide'
    },
    {
      'id': 6,
      'img': '../../../../assets/images/adoption/adoption4.jpg',
      'width': '192',
      'height': '200',
      'title': '家有萌宠',
      'word': '宠友们接住了!看到汪星人这么灿烂的笑容，你的心情还会不好吗?...',
      'state': 'hide'
    },
    {
      'id': 7,
      'img': '../../../../assets/images/adoption/adoption10.jpg',
      'width': '192',
      'height': '405',
      'title': '求抱走',
      'word': '',
      'state': 'hide'
    },
    {
      'id': 8,
      'img': '../../../../assets/images/adoption/adoption5.jpg',
      'width': '192',
      'height': '200',
      'title': '函馆山',
      'word': '你好，Wagglers!我的名字是Dudeman王子。我休息一会从我的百忙之中在好莱坞的摇摆办公室拜访我的朋友在旧金山。事实上...',
      'state': 'hide'
    },
    {
      'id': 9,
      'img': '../../../../assets/images/adoption/adoption6.jpg',
      'width': '192',
      'height': '200',
      'title': '找主人',
      'word': '找找找主人，求带走！！',
      'state': 'hide'
    },
    {
      'id': 10,
      'img': '../../../../assets/images/adoption/adoption1.jpg',
      'width': '389',
      'height': '200',
      'title': '二哈的旅程',
      'word': '在野外欢快的奔跑，被主人拍下了美好的画面，留作一生中最美好的回忆! 金毛...',
      'state': 'hide'
    },
  ]

}
