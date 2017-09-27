import {Component, OnInit, DoCheck, Input} from '@angular/core';
import {GlobalPropertyService} from '../../services/global-property.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css']
})
export class SearchAllComponent implements OnInit, DoCheck {
  @Input() data = {
    all: [],
    diary: [],
    info: [],
    community: []
  };
  _uploadUrl = this.glo.uploadUrl;


  list_data = {
    totalPage: 0,
  };
  @Input() page = {
    pagesize: 10,
    pagenumber: 1
  };

  constructor(private glo: GlobalPropertyService) {

  }

  changepage(page: any) {
    this.page.pagenumber = page;
  }

  ngDoCheck() {
    const that = this;
    if (that.data.all.length > 0) {
      that.list_data.totalPage = Math.ceil(that.data.all.length / that.page.pagesize);
    }
  }

  ngOnInit() {

  }
}
