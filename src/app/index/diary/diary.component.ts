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
        'id': 'index_diary1.png'
      }, {
        'id': 'index_diary2.png'
      }, {
        'id': 'index_diary3.png'
      }]
    }, {
      items: [{
        'id': 'index_diary4.png'
      }, {
        'id': 'index_diary5.png'
      }, {
        'id': 'index_diary6.png'
      }]
    }, {
      items: [{
        'id': 'index_diary7.png'
      }, {
        'id': 'index_diary8.png'
      }, {
        'id': 'index_diary9.png'
      }]
    }, {
      items: [{
        'id': 'index_diary10.png'
      }, {
        'id': 'index_diary11.png'
      }, {
        'id': 'index_diary12.png'
      }]
    }, {
      items: [{
        'id': 'index_diary13.png'
      }, {
        'id': 'index_diary14.png'
      }, {
        'id': 'index_diary15.png'
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
