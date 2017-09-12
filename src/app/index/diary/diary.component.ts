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
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }]
    }, {
      items: [{
        'id': 2
      }, {
        'id': 2
      }, {
        'id': 2
      }]
    }, {
      items: [{
        'id': 3
      }, {
        'id': 3
      }, {
        'id': 3
      }]
    }, {
      items: [{
        'id': 4
      }, {
        'id': 4
      }, {
        'id': 4
      }]
    }, {
      items: [{
        'id': 5
      }, {
        'id': 5
      }, {
        'id': 5
      }]
    },
  ]

  change(i: any) {
    this.state = i;
  }

  go() {
    this.time = setInterval(() => {
      this.change(this.state === 5 ? 1 : this.state + 1);
    }, 3000);
  }

  ngOnInit() {
  }

}
