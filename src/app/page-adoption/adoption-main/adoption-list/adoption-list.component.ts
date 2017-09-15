import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {

  constructor() { }
  data:any;
  ngOnInit() {
    this.data=this.all;
  }

 all=[
    {
      'id':1,
      'user':'1111111111111日本',
      'img':'../../../../assets/images/dog1.png',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'all腿短1111'
    },
    {
      'id':2,
      'img':'../../../../assets/images/dog1.png',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短'
    },
    {
      'id':3,
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短',
      'img':'../../../../assets/images/dog1.png'
    }, {
      'id':4,
      'img':'../../../../assets/images/dog1.png',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短'
    },
    {
      'id':5,
      'img':'../../../../assets/images/dog1.png',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短'
    },
    {
      'id':6,
      'img':'../../../../assets/images/dog1.png',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短'
    },
    {
      'id':7,
      'img':'../../../../assets/images/dog1.png',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短'
    },
    {
      'id':8,
      'img':'../../../../assets/images/dog1.png',
      'name':'shabi',
      'Ename':'sha',
      'form':'柯基',
      'special':'腿短'
    }
  ]


}
