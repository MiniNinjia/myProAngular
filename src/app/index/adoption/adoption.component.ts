import {Component, OnInit} from '@angular/core';
import {AdoptionService} from '../../services/adoption.service';
@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {
  _uploadUrl: string;
  datas: any;

  constructor(private ads: AdoptionService) {
    const that = this;
    this.ads.getIndexList(function (result) {
      if (result !== 'err') {
        that.datas = JSON.parse(result._body);
        console.log(that.datas);
      }
    });
    this._uploadUrl = this.ads.uploadUrl;
  }


  ngOnInit() {
  }

}
