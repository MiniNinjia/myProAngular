import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-personal-center',
  templateUrl: './page-personal-center.component.html',
  styleUrls: ['./page-personal-center.component.css']
})
export class PagePersonalCenterComponent implements OnInit {

  constructor() {
  }

  selectIndex = 1;

  changeIndex(index: any) {
    this.selectIndex = index;
  }

  ngOnInit() {
  }

}
