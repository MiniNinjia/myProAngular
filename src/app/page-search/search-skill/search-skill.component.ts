import {Component, OnInit, Input, DoCheck} from '@angular/core';
import {GlobalPropertyService} from '../../services/global-property.service';

@Component({
  selector: 'app-search-skill',
  templateUrl: './search-skill.component.html',
  styleUrls: ['./search-skill.component.css']
})
export class SearchSkillComponent implements DoCheck, OnInit {
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
    if (that.data.community.length > 0) {
      that.list_data.totalPage = Math.ceil(that.data.community.length / that.page.pagesize);
    }
  }


  ngOnInit() {
  }

}
