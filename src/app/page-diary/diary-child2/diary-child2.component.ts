import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-child2',
  templateUrl: './diary-child2.component.html',
  styleUrls: ['./diary-child2.component.css']
})
export class DiaryChild2Component implements OnInit {
  data = [ {
    'petname' : 'lily',
    'type': '贵宾',
    'year': '2017年9月22日',
    'weekday': '星期五',
    'time': '10:45',
    'username': '乔乔',
    'headimag': '头像3.jpg',
    'imgSrc' : '1.png'
  },
  ]

  constructor() { }

  ngOnInit() {
  }
}
