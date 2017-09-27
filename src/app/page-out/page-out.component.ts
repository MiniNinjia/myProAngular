import {Component, OnInit, Input, DoCheck, Output, OnChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-page-out',
  templateUrl: './page-out.component.html',
  styleUrls: ['./page-out.component.css']
})
export class PageOutComponent implements OnInit, DoCheck, OnChanges {
  pageList: any;
  pageNumber = 1;//默认第一页
  @Output() page = new EventEmitter<any>();
  @Input() list_data = {
    'totalPage': 0,
  };

  constructor() {

  }

  changePageList() {//修改pagelist数组
    this.pageList = [];
    if (this.list_data.totalPage <= 7) {
      for (let i = 1; i <= this.list_data.totalPage; i++) {
        this.pageList.push(i);
      }
    } else if (this.pageNumber < 4) {
      this.pageList = [1, 2, 3, 4, 5, 6, 7];
    } else if (this.pageNumber >= 4 && this.pageNumber + 3 <= this.list_data.totalPage) {
      this.pageList = [
        this.pageNumber - 3,
        this.pageNumber - 2,
        this.pageNumber - 1,
        this.pageNumber,
        this.pageNumber + 1,
        this.pageNumber + 2,
        this.pageNumber + 3,
      ];
    } else {
      for (let i = this.list_data.totalPage - 6; i <= this.list_data.totalPage; i++) {
        this.pageList.push(i);
      }
    }
  }//修改pagelist数组
  changePageNumber(j: any) { //修改当前页面
    if (j > 0 && j <= this.list_data.totalPage) {
      this.pageNumber = j;
      this.page.emit(j);
      this.changePageList();
    }
  }//修改当前页面
  ngOnInit() {
  }

  ngOnChanges() {

  }

  ngDoCheck() {
    this.changePageList();
  }
}
