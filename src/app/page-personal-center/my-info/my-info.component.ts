import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  inof={
    'id':1,
    'user':'张三',
    'sex':'女',
    'addres':'天堂街88888号',
    'tel':158759795,
    'age':34,
  };

  del=false;
  user:any;
  sex:any;
  addres:any;
  tel:any;
  age:any;

  constructor() {
    this.addres=this.inof.addres;
    this.age =this.inof.age;
    this.user=this.inof.user;
    this.sex=this.inof.sex;
    this.tel=this.inof.tel;

  }

  ngOnInit() {

  }
  revamp(){
     this.del=!this.del;
  }
  revamp2(){
    this.del=!this.del;
    this. inof={
      'id':1,
      'user':this.inof.user,
      'sex':this.inof.sex,
      'addres':this.inof.addres,
      'tel':this.inof.tel,
      'age':this.inof.age,
    };
  }

}
