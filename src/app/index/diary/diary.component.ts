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
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
  animations: [trigger('change', [
    state('1', style({
      left: 0
    })),
    state('2', style({
      left: '-1200px'
    })),
    state('3', style({
      left: '-2400px'
    })),
    state('4', style({
      left: '-3600px'
    })),
    state('5', style({
      left: '-4800px'
    })),
    transition('void => *', animate(1)),
    transition('* => void', animate(1)),
    transition('* => *', animate(1000)),
  ])
  ]
})
export class DiaryComponent implements OnInit {

  constructor() {
    this.go();
  }

  time: any;
  state = 1;
  datas = [
    {
      items: [{
        'id': '日志1.png'
      }, {
        'id': '日志2.png'
      }, {
        'id': '日志3.png'
      }]
    }, {
      items: [{
        'id': '日志1.png'
      }, {
        'id': '日志2.png'
      }, {
        'id': '日志3.png'
      }]
    }, {
      items: [{
        'id': '日志1.png'
      }, {
        'id': '日志2.png'
      }, {
        'id': '日志3.png'
      }]
    }, {
      items: [{
        'id': '日志1.png'
      }, {
        'id': '日志2.png'
      }, {
        'id': '日志3.png'
      }]
    }, {
      items: [{
        'id': '日志1.png'
      }, {
        'id': '日志2.png'
      }, {
        'id': '日志3.png'
      }]
    },
  ]

  change(i: any) {
    clearInterval(this.time);
    this.state = i;
    this.go();
  }

  go() {
    this.time = setInterval(() => {
      this.state = (this.state === 5 ? 1 : this.state + 1);
    }, 3000);
  }

  ngOnInit() {
  }

}
