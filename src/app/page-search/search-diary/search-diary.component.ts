import {Component, OnInit, DoCheck, Input} from '@angular/core';
import {GlobalPropertyService} from '../../services/global-property.service';

@Component({
  selector: 'app-search-diary',
  templateUrl: './search-diary.component.html',
  styleUrls: ['./search-diary.component.css']
})
export class SearchDiaryComponent implements DoCheck, OnInit {
  @Input() data = {
    all: [],
    info: [],
    diary: [],
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
    if (that.data.diary.length > 0) {
      that.list_data.totalPage = Math.ceil(that.data.diary.length / that.page.pagesize);
    }
  }

  ngOnInit() {
  }

}
