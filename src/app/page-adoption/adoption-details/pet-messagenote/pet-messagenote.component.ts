import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-messagenote',
  templateUrl: './pet-messagenote.component.html',
  styleUrls: ['./pet-messagenote.component.css']
})
export class PetMessagenoteComponent implements OnInit {
message=[
  {
    'id':1,
    'uname':'tom',
    'uimg':'../../../../assets/images/dog1.png',
    'mes':'之后在加快覅偶v分红我后覅饿哦if后以后',
  'data':'201745',
    'isCollect': true,
    'number':33334
  },
  {
    'id':1,
    'uname':'tom',
    'uimg':'../../../../assets/images/dog1.png',
    'mes':'之后在加快覅偶v分红我后覅饿哦if后以后',
    'data':'201745',
    'isCollect': true,
    'number':33334
  },
  {
    'id':1,
    'uname':'tom',
    'uimg':'../../../../assets/images/dog1.png',
    'mes':'之后在加快覅偶v分红我后覅饿哦if后以后',
    'data':'201745',
    'isCollect': true,
    'number':33334
  },
];

  constructor() { }

  ngOnInit() {
  }
  exchange(i:any){
  this.message[i].isCollect=!this.message[i].isCollect;
}

}
