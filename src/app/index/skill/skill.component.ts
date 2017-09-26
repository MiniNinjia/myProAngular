import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  // animations: [trigger('change', [
  //   state('1', style({
  //     left: 0
  //   })),
  //   state('2', style({
  //     left: '-1200px'
  //   })),
  //   state('3', style({
  //     left: '-2400px'
  //   })),
  //   state('4', style({
  //     left: '-3600px'
  //   })),
  //   state('5', style({
  //     left: '-4800px'
  //   })),
  //   transition('void => *', animate(1)),
  //   transition('* => void', animate(1)),
  //   transition('* => *', animate(1000)),
  // ])
  // ]
})
export class SkillComponent implements OnInit {

  constructor() {
    // this.go();
  }

  datas = [[
    {
      'imag':'哈士奇.jpg',
      'middlewords':' 哈士奇能不能吃海鲜？',
    },
    {
      'imag':'狗1.jpg',
      'middlewords':' 狗狗饲养需要注意的问题？',
    },
    {
      'imag':'罗福梗犬.jpg',
      'middlewords':' 罗福梗犬好养吗 罗福梗犬还是比较好养',
    },
    {
      'imag':'圣伯纳.jpg',
      'middlewords':'圣伯纳犬的食量 圣伯纳犬好养但是食量',
    },
    {
      'imag':'贵宾幼犬1.jpg',
      'middlewords':' 如何挑选一只好的纯种贵宾幼犬',
    },
    {
      'imag':'哈士奇2.jpg',
      'middlewords':'宠物狗哈士奇的饲养方法',
    },
    {
      'imag':'苏牧1.jpg',
      'middlewords':'苏格兰牧羊犬眼屎多怎么回事？',
    },
    {
      'imag':'苏牧2.jpg',
      'middlewords':' 苏格兰牧羊犬得了细小怎么办？',
    },
  ]]
  // time: any;
  // state = 1;
  //
  // change(i: any) {
  //   this.time = null;
  //   this.state = i;
  //   this.go();
  // }
  //
  // go() {
  //   this.time = setInterval(() => {
  //     this.state = (this.state === 5 ? 1 : this.state + 1);
  //   }, 3000);
  // }

  ngOnInit() {
  }

}
