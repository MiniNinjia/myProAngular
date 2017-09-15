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

  datas = [
    {
      items: [{
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }]
    }, {
      items: [{
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }]
    }, {
      items: [{
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }]
    }, {
      items: [{
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }]
    }, {
      items: [{
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }, {
        'id': 1
      }]
    },
  ]
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
