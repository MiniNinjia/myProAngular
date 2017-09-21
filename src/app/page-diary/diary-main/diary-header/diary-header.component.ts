import {Component, OnInit} from '@angular/core';
import {GlobalPropertyService} from '../../../services/global-property.service';
import {DiaryService} from '../../../services/diary.service';

@Component({
  selector: 'app-diary-header',
  templateUrl: './diary-header.component.html',
  styleUrls: ['./diary-header.component.css']
})
export class DiaryHeaderComponent implements OnInit {
  _uploadUrl: any;
  data: any;
  id: any;
  time: any;

  constructor(private glo: GlobalPropertyService,
              private ds: DiaryService) {
  }

  changeId(i: any) {
    clearInterval(this.time);
    this.id = i;
    this.go();
  }

  go() {
    const that = this;
    this.time = setInterval(() => {
      that.id = (that.id + 1) % 5;
    }, 3000);
  }

  ngOnInit() {
    this._uploadUrl = this.glo.uploadUrl;
    const that = this;
    this.ds.getdiaryBanner(function (result) {
      if (result._body !== 'err') {
        that.id = 0;
        that.data = JSON.parse(result._body);
        that.go();
      }
    });
  }
}
