import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diary-child',
  templateUrl: './diary-child.component.html',
  styleUrls: ['./diary-child.component.css']
})
export class DiaryChildComponent implements OnInit {
  xiangqing = [
    {
      'headImag': '头像.jpg',
      'username': '用户名',
      'date': '2017-10-05',
      'time': '10:31',
      'readtimes': '533',
      'date2': '10.5',
      'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
      'count': '182',
    },
    {
      'headImag': '头像.jpg',
      'username': '用户名',
      'date': '2017-10-04',
      'time': '10:31',
      'readtimes': '533',
      'date2': '10.4',
      'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
      'count': '182',
    },
    {
      'headImag': '头像.jpg',
      'username': '用户名',
      'date': '2017-10-03',
      'time': '10:31',
      'readtimes': '533',
      'date2': '10.3',
      'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
      'count': '182',
    },
    {
      'headImag': '头像.jpg',
      'username': '用户名',
      'date': '2017-10-02',
      'time': '10:31',
      'readtimes': '533',
      'date2': '10.2',
      'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
      'count': '182',
    },
    {
      'headImag': '头像.jpg',
      'username': '用户名',
      'date': '2017-10-01',
      'time': '10:31',
      'readtimes': '533',
      'date2': '10.1',
      'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
      'count': '182',
    },
  ];
  det: any;
  del = true;
  constructor() {

  }

  ngOnInit() {

  }

  showall(i: any) {
    const data = [
      {
        'headImag': '头像.jpg',
        'username': '用户名',
        'date': '2017-10-05',
        'time': '10:31',
        'readtimes': '533',
        'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，' +
        '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，' +
        '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
        'date2': '10.5',
        'count': '182',
      },
      {
        'headImag': '头像.jpg',
        'username': '用户名',
        'date': '2017-10-04',
        'time': '10:31',
        'readtimes': '533',
        'date2': '10.4',
        'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
        'count': '182',
      },
      {
        'headImag': '头像.jpg',
        'username': '用户名',
        'date': '2017-10-03',
        'time': '10:31',
        'readtimes': '533',
        'date2': '10.3',
        'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
        'count': '182',
      },
      {
        'headImag': '头像.jpg',
        'username': '用户名',
        'date': '2017-10-02',
        'time': '10:31',
        'readtimes': '533',
        'date2': '10.2',
        'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
        'count': '182',
      },
      {
        'headImag': '头像.jpg',
        'username': '用户名',
        'date': '2017-10-01',
        'time': '10:31',
        'readtimes': '533',
        'date2': '10.1',
        'info': '昨天去打针，说偏瘦，怎么补啊？感觉吃狗粮没用啊，吃的是天然粮，一天四次，',
        'count': '182',
      },
    ];
    this.xiangqing = data;
    this.del = !this.del;
  }
  // shou(j: any) {
  //   this.xiangqing = this. xiangqing;
  //   this.del = !this.del;
  // }
}

