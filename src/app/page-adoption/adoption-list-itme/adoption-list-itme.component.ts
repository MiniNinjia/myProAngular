import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption-list-itme',
  templateUrl: './adoption-list-itme.component.html',
  styleUrls: ['./adoption-list-itme.component.css']
})
export class AdoptionListItmeComponent implements OnInit {
  cit:any;
  pla=true ;
  choose:any;
  provence:any;
  constructor() { }
     data:any;
  cindex:any;
  ngOnInit() {
    this.data=this.pet[0].pett;
    this.cit=this.place[0].city;
    this.provence =this.place [0];
    this.choose='全国';
    scrollTo(0,0);
    let that=this;
    document.body.onclick=function(e){
      if(e.target!=document.getElementById('_area')){
        that.pla=true;
      }
    }
  }
pet=[
  {
    nav:'其他',
    pett:[
    {
      'id':1,
      'uname':'other',
      'uimg':'../../../../assets/images/dog.png',
      'fristname':'日本',
      'img':'../../../../../assets/images/dog.png',
      'introduce':'健康没毛病,第一针疫苗打完，洗过澡了，指甲剪了，希望你好好对他负责',
      'date':'2017-4-5',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短',
      'commentcount':'1232',
      'browse':300,
      'isCollect':true

    },
    {
      'id':1,
      'uname':'张三dog2',

      'uimg':'../../../../assets/images/qqq.jpg',
      'fristname':'日本',
      'img':'../../../../assets/images/adoption/qqq.jpg',
      'introduce':'健康没毛病,第一针疫苗打完，洗过澡了，指甲剪了，希望你好好对他负责',
      'date':'2017-4-5',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短',
      'commentcount':'12',
      'browse':300,
      'isCollect':true
    },
    {
      'id':1,
      'uname':'张三dog3',

      'uimg':'../../../../assets/images/dog.png',
      'fristname':'日本',
      'img':'../../../../assets/images/adoption/www.jpg',
      'introduce':'健康没毛病,第一针疫苗打完，洗过澡了，指甲剪了，希望你好好对他负责',
      'date':'2017-4-5',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短',
      'commentcount':'1232',
      'browse':300,
      'isCollect':true
    },]

  },
  {
    nav:'yu',
    pett:[
      {
        'id':1,
        'uname':'fish',
        'uimg':'../../../../assets/images/dog.png',
        'fristname':'日本',
        'img':'../../../../../assets/images/dog.png',
        'introduce':'健康没毛病,第一针疫苗打完，洗过澡了，指甲剪了，希望你好好对他负责',
        'date':'2017-4-5',
        'name':'shabi',
        'Ename':'sha',
        'form':'柯基',
        'special':'腿短',
        'commentcount':'1232',
        'browse':300,
        'isCollect':true

      },
      {
        'id':1,
        'uname':'张三dog2',

        'uimg':'../../../../assets/images/qqq.jpg',
        'fristname':'日本',
        'img':'../../../../assets/images/adoption/qqq.jpg',
        'introduce':'健康没毛病,第一针疫苗打完，洗过澡了，指甲剪了，希望你好好对他负责',
        'date':'2017-4-5',
        'name':'shabi',
        'Ename':'sha',
        'form':'柯基',
        'special':'腿短',
        'commentcount':'12',
        'browse':300,
        'isCollect':true
      },
      {
        'id':1,
        'uname':'张三dog3',

        'uimg':'../../../../assets/images/dog.png',
        'fristname':'日本',
        'img':'../../../../assets/images/adoption/www.jpg',
        'introduce':'健康没毛病,第一针疫苗打完，洗过澡了，指甲剪了，希望你好好对他负责',
        'date':'2017-4-5',
        'name':'shabi',
        'Ename':'sha',
        'form':'柯基',
        'special':'腿短',
        'commentcount':'1232',
        'browse':300,
        'isCollect':true
      },]

  },
];

    place=[
    {
      provence:'四川',
      city:['宜宾市','广安市','达州市','雅安市','巴中市','资阳市']
    },
    {
      provence:'四川1',
      city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
    },
      {
        provence:'四川1',
        city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
      },
      {
        provence:'四川1',
        city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
      },
      {
        provence:'四川1',
        city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
      },   {
        provence:'四川1',
        city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
      },   {
        provence:'四川1',
        city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
      },   {
        provence:'四川1',
        city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
      },   {
        provence:'四川1',
        city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
      },





    {
      provence:'四川2',
      city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
    }
  ];

  exchange(i:any){
    this.data[i].isCollect=!this.data[i].isCollect;
  }

  showaa(i:any){
    this.data=this.pet[i].pett;
    this.cindex=i;

  }
//省
pro(e,i:any) {
  this.cit = this.place[i].city;

  e.stopPropagation();
}
  //全国显示
  placee(){
    this.pla=!this.pla;
  }

  citye(j){
    console.log(j);
    this.choose=this.cit[j]
    this.pla=!this.pla;
    console.log(this.pla);
  }




}
