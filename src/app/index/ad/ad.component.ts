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
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css'],
  animations: [trigger('flyInOut', [
    state('in', style({
      opacity: 1,
      zIndex: 50
    })),
    state('left', style({
      opacity: 0,
      zIndex: 1
    })),
    state('right', style({
      opacity: 0,
      zIndex: 1
    })),
    transition('void => *', animate(1)),
    transition('* => void', animate(1)),
    //
    // transition('* => left', [
    //   animate(1000, keyframes([
    //     style({width: '*', transform: 'translateX(0)', offset: 0}),
    //     style({width: '*', transform: 'translateX(-99%)', offset: 0.99}),
    //     style({width: '0', transform: 'translateX(-100%)', offset: 1})
    //   ]))]),
    // transition('left => *', [
    //   animate(1000, keyframes([
    //     style({width: '*', transform: 'translateX(-100%)', offset: 0}),
    //     style({width: '*', transform: 'translateX(-99%)', offset: 0.01}),
    //     style({width: '*', transform: 'translateX(0%)', offset: 1})
    //   ]))]),
    // transition('* => right', [
    //   animate(1000, keyframes([
    //     style({width: '*', transform: 'translateX(0)', offset: 0}),
    //     style({width: '*', transform: 'translateX(99%)', offset: 0.99}),
    //     style({width: '0', transform: 'translateX(100%)', offset: 1})
    //   ]))]),
    // transition('right => *', [
    //   animate(1000, keyframes([
    //     style({width: '*', transform: 'translateX(-100%)', offset: 0}),
    //     style({width: '*', transform: 'translateX(-99%)', offset: 0.99}),
    //     style({width: '*', transform: 'translateX(0%)', offset: 1})
    //   ]))]),
    transition('* => *', animate(1000)),
  ])
  ]
})
export class AdComponent implements OnInit {
  items = [
    {
      'id': 0,
      'img': 'adv.png',
      'url': 'www.baidu.com',
      'state': 'in'
    },
    {
      'id': 1,
      'img': 'adv1.png',
      'url': 'www.baidu.com',
      'state': 'left'
    },
    {
      'id': 2,
      'img': 'adv2.png',
      'url': 'www.baidu.com',
      'state': 'left'
    }
  ];
  currentPic = 0;
  now = 0;
  next: any;
  time: any;

  constructor() {
    this.go();
  }

  go() {
    this.time = setInterval(() => {
      this.toRight();
      console.log(this.now);
    }, 3000);
  }

  nextItem() {
    if (this.time) {
      clearInterval(this.time);
    }
    if (this.now < this.next) {
      this.items[this.now].state = 'right';
      this.items[this.next].state = 'in';
    } else {
      this.items[this.now].state = 'left';
      this.items[this.next].state = 'in';
    }
    this.go();
  }

  toLeft() {
    this.now = this.currentPic;
    this.currentPic = (this.currentPic === 0 ? 2 : this.currentPic - 1);
    this.next = this.currentPic;
    this.nextItem();
  }

  toRight() {
    this.now = this.currentPic;
    this.currentPic = (this.currentPic === 2 ? 0 : this.currentPic + 1);
    this.next = this.currentPic;
    this.nextItem();
  }

  ngOnInit() {
  }

}
