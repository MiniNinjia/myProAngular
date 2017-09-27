import {Component, OnInit, Input, DoCheck} from '@angular/core';
import {GlobalPropertyService} from '../../services/global-property.service';

@Component({
  selector: 'app-search-pet',
  templateUrl: './search-pet.component.html',
  styleUrls: ['./search-pet.component.css']
})
export class SearchPetComponent implements DoCheck, OnInit {
  @Input() data = {
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
    if (that.data.info.length > 0) {
      that.list_data.totalPage = Math.ceil(that.data.info.length / that.page.pagesize);
    }
  }

  ngOnInit() {
  }


}
