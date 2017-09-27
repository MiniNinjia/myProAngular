import {Component, OnInit, Input} from '@angular/core';
import {SearchService} from '../services/search.service';
@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent implements OnInit {
  menu = 0;
  data = {
    all: [],
    diary: [],
    info: [],
    community: []
  };
  @Input() searchText: any;
  _searchText: any;

  constructor(private ss: SearchService) {

  }

  ngOnInit() {
    // this._search('狗');
  }

  change(i: any) {
    this.menu = i;
  }

  Search() {
    const that = this;
    that.ss.search(this.searchText, function (result) {
      if (result._body !== 'err') {
        that.data = JSON.parse(result._body);
      }
    });
    that._searchText = that.searchText;
  }


  _search(str: string) {
    this.searchText = str;
    this.Search();
  }
}
