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
      'day': 'D5',
      'del': true,
    },
    {
      'headImag': '头像.jpg',
      'username': '用户名',
      'date': '2017-10-04',
      'time': '10:31',
      'readtimes': '533',
      'date2': '10.4',
      'info': '1.狗狗长大真的会变成灰色吗？ 2.怎么样判断狗狗是真的健康呢？',
      'count': '182',
      'day': 'D4',
      'del': true,
    },
    {
      'headImag': '头像.jpg',
      'username': '用户名',
      'date': '2017-10-03',
      'time': '10:31',
      'readtimes': '533',
      'date2': '10.3',
      'info': '昨天刚入手一只贵宾宝宝，店主说是小型贵宾， 长大也只有五六斤那么大，是个MM， 我感觉狗狗感觉好小好脆弱，',
      'count': '182',
      'day': 'D3',
      'del': true,
    },
    {
      'headImag': '头像.jpg',
      'username': '用户名',
      'date': '2017-10-02',
      'time': '10:31',
      'readtimes': '533',
      'date2': '10.2',
      'info': '刚领养的80天小比熊总是感冒 家里空调电扇都不敢开了  可还是感冒咳嗽了',
      'count': '182',
      'day': 'D2',
      'del': true,
    },
    {
      'headImag': '头像.jpg',
      'username': '用户名',
      'date': '2017-10-01',
      'time': '10:31',
      'readtimes': '533',
      'date2': '10.1',
      'info': '狗和人的肠胃消化系统是不一样的，人吃的饭菜对狗实际是没有营养的，特别是剩饭剩菜，',
      'count': '182',
      'day': 'D1',
      'del': true ,
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
        '上个星期叮叮拉稀没精神，在医院被查出有冠状，一天打了三针，打了三天，医生也开了药，' +
        '现在基本都正常了，只是便便还有些软，求有经验的萌主告诉下，什么时候能洗澡，还有可以打疫苗了吗？',
        'date2': '10.5',
        'count': '182',
        'day': 'D5',
        'del': true,
      },
      {
        'headImag': '头像.jpg',
        'username': '用户名',
        'date': '2017-10-04',
        'time': '10:31',
        'readtimes': '533',
        'date2': '10.4',
        'info': ' 1.狗狗长大真的会变成灰色吗？ 2.怎么样判断狗狗是真的健康呢？' +
        ' 3.狗宝宝这个价格大家觉得合适吗？ 4.关于养好幼犬的特别要注意事项有哪些呢？' ,
        'count': '182',
        'day': 'D4',
        'del': true,
      },
      {
        'headImag': '头像.jpg',
        'username': '用户名',
        'date': '2017-10-03',
        'time': '10:31',
        'readtimes': '533',
        'date2': '10.3',
        'info': '昨天刚入手一只贵宾宝宝，店主说是小型贵宾， 长大也只有五六斤那么大，是个MM， 我感觉狗狗感觉好小好脆弱，' +
        ' 暂时还是黑色，只有嘴巴一上一点点灰色，店家说长大会变成灰色， 狗狗是3000元，加一些吃的奶粉狗粮什么的一起3800元，' +
        '眼睛下面总是有点湿湿的， 有眼屎，昨天晚上擦干净后今天早上又有.',
        'count': '182',
        'day': 'D3',
        'del': true,
      },
      {
        'headImag': '头像.jpg',
        'username': '用户名',
        'date': '2017-10-02',
        'time': '10:31',
        'readtimes': '533',
        'date2': '10.2',
        'info': '刚领养的80天小比熊总是感冒 家里空调电扇都不敢开了  可还是感冒咳嗽了 ' +
        '前两天去宠物医院有两个狗狗是细小和犬瘟  也不敢抱我家狗狗去看病了 医生给了护彤和阿莫西林感觉效果不是太好',
        'count': '182',
        'day': 'D2',
        'del': true,
      },
      {
        'headImag': '头像.jpg',
        'username': '用户名',
        'date': '2017-10-01',
        'time': '10:31',
        'readtimes': '533',
        'date2': '10.1',
        'info': '狗和人的肠胃消化系统是不一样的，人吃的饭菜对狗实际是没有营养的，特别是剩饭剩菜，' +
        '而且人吃的饭菜里面盐份过高，对狗是一种伤害，也会造成毛色干枯。不要喂狗吃熟的骨头，会大便干结，' +
        '拉石头粑粑，还容易划伤肠子引起出血或大出血死亡。',
        'count': '182',
        'day': 'D1',
        'del': true,
      },
    ];
    this.xiangqing = data;
    this.xiangqing[i].del = !this.xiangqing[i].del;
    // this.del[i] = !this.del[i];
  }
  // shou(j: any) {
  //   this.xiangqing = this. xiangqing;
  //   this.del = !this.del;
  // }
}

