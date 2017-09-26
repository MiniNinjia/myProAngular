import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-page-report',
  templateUrl: './page-report.component.html',
  styleUrls: ['./page-report.component.css']
})
export class PageReportComponent implements OnInit {
  quxiao=true;
  morereason:any;
  reasons:any;
  reason={
    'uid':null,
    'res':null,
    'more':null,
  }
  constructor() { }

  ngOnInit() {
  }
  buy(){
this.quxiao=!this.quxiao
  }


  apply(){
    this.quxiao=!this.quxiao;
    this.reason={
      'uid':1,
      'res':this.reasons ,
      'more':this.morereason,
    }
    console.log(this.reason);
  }

}
