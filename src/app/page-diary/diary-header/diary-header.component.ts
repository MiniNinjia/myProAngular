import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-header',
  templateUrl: './diary-header.component.html',
  styleUrls: ['./diary-header.component.css']
})
export class DiaryHeaderComponent implements OnInit {

  constructor() { }
  data=[
  {
    'headimg':'111.jpg',
    'UserName':'vfth',
    'backimag':'2.png',
    'words':'沙皮狗的散热机制跟人不一样，排热速率也不如人，它们没有汗腺，除了微微的从沙皮狗的脚掌流汗。',
  },
  {
    'headimg':'222.jpg',
    'UserName':'ccxds',
    'backimag':'pic.2.jpg',
    'words':'德国牧羊犬本身就属于工作犬，需要进行社会化训练和行为训练，但有的德牧很不好训练，这也就给我们的训练提高了难度',
  },
  {
    'headimg':'111.jpg',
    'UserName':'Himi洪鸣',
    'backimag':'pic.3.jpg',
    'words':'萨摩耶是非常适合家养的中大型犬之一，它性格温顺，长相漂亮，又对孩子及老人十分宽容，因此十分受到欢迎。',
  },
  {
    'headimg':'222.jpg',
    'UserName':'cvfds',
    'backimag':'2.png',
    'words':'比利时马犬是非常优秀的工作犬，现在很多国家和地区作为警犬协助工作，甚至大有超过德国牧羊犬之势。',
  },
  {
    'headimg':'111.jpg',
    'UserName':'jhgjhj',
    'backimag':'2.png',
    'words':'因为血统、产地等因素，秋田犬分为两个品种，分别为日系秋田犬和美系秋田犬，品种不同价格也有所不同。',
  }
]
  id = 0;
  changeId( i: any ) {
    this.id = i;
  }
  ngOnInit() {
  }

}
