import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-publish',
  templateUrl: './page-publish.component.html',
  styleUrls: ['./page-publish.component.css']
})
export class PagePublishComponent implements OnInit {
  froalaContent(event) {
    console.log(event)
    console.log('11111');
  }


  data=[
    {
      provence:'四川',
      city:['宜宾市','广安市','达州市','雅安市','巴中市','资阳市']
    },
    {
      provence:'四川1',
      city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
    },
    {
      provence:'四川2',
      city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
    }
  ];

   cit:any;
  constructor() { }

  ngOnInit() {
  }
  pro(event:any){
    //console.log(event.target.value)
  this.cit=this.data[event.target.value].city;
    //console.log(this.cit);
  }

}
