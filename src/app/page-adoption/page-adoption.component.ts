import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-adoption',
  templateUrl: './page-adoption.component.html',
  styleUrls: ['./page-adoption.component.css']
})
export class PageAdoptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scrollTo(0,0);
  }

}
