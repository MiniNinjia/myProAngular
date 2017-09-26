import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap}from'@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-adoption-details',
  templateUrl: './adoption-details.component.html',
  styleUrls: ['./adoption-details.component.css'],
})
export class AdoptionDetailsComponent implements OnInit {
  petId: string;
  contan = 'detail';
  imgnow: any;
  time: any;
  currentPic = 0;
  now = 0;
  next: any;

  //领养申请数据
  buyuser:any;
  buytel:any;
  radi:any;
  buyaddres:any;
  reason:any;
  applyData={
    'petid':1,
    'buser':null ,
    'btel':null,
    'radi':null,
    'baddres':null,
    'breason':null,
  };


  data = {
    'carousel': [
      {
        'img': '../../../assets/images/dog1.png'
      },
      {
        'img': '../../../assets/images/adv1.png'
      },
      {
        'img': '../../../assets/images/dog1.png'
      },
      {
        'img': '../../../assets/images/adv1.png'
      },
    ],
    'details': [
      {
        'petid':1,
        'title': '超极品柴犬宝宝 血统好 签订协议',
        'popularity': 433,
        'host': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑',
        'breed': '萨摩耶',
        'sex': '公',
        'vaccine': '三针疫苗',
        'age': '三个月',
        'worm': '已驱虫',
        'video': '可视频看狗狗',
        'validity': '信息有效',
        'contact': '王先生',
        'location': '苏州吴中区',
        'tel': 1887098907,
        'weixin': 84784989,
        'QQ': 98479759
      },

    ]
  };

  recommend = [
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },
    {
      'id': 1,
      'pimg': '../../../assets/images/dog1.png',
      'uimg': '../../../assets/images/skill-t1.jpg',
      'uname': 'tom',
      'kind': '萨摩耶',
      'date': '2017-3-4',
      'word': '胡凯彬爱吃，爱玩，爱睡觉，超级懒，超级丑'
    },

  ];

  menunow = 0;
     aa=false ;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.petId = this.route.snapshot.paramMap.get('petid');
    this.imgnow = this.data.carousel[0].img;
    this.go();
   scrollTo(0,0);
  }

  change(i: any, j: any) {
    this.menunow = i;
    this.contan = j;
  }

  id = 0;

  carousel(i: any) {
    clearInterval(this.time);
    this.id = i;
    this.go()
  }
  go() {
    this.time = setInterval(() => {
      this.carousel(this.id === 3 ? 0 : this.id + 1);
    }, 3000);
  }
  buy(){
    this.aa=!this.aa;

  }

  checke(give:any){
    if(give==1){
      this.radi='赠送';
    }else {
      this.radi='领养';
    }
    console.log(this.radi);
  }
  apply(){
    this.applyData={
      'petid':1,
      'buser':this.buyuser ,
      'btel':this.buytel ,
      'radi':this.radi,
      'baddres':this.buyaddres ,
      'breason':this.reason,
    };
    this.aa=!this.aa;
  }

}
