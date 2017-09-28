import {Component, OnInit, Input} from '@angular/core';
import {AdoptionService} from '../../../services/adoption.service';
import {GlobalPropertyService} from '../../../services/global-property.service';

@Component({
  selector: 'app-pet-messagenote',
  templateUrl: './pet-messagenote.component.html',
  styleUrls: ['./pet-messagenote.component.css']
})
export class PetMessagenoteComponent implements OnInit {
  @Input() petid: any;
  message = [];
  _uploadUrl: any;

  constructor(private as: AdoptionService,
              private glo: GlobalPropertyService) {

  }

  ngOnInit() {
    this._uploadUrl = this.glo.uploadUrl;
    const that = this;
    const data = {
      petid: that.petid
    }
    that.as.getreview(data, function (result) {
      if (result._body !== 'err') {
        that.message = JSON.parse(result._body);
        console.log(that.message);
      }
    });
  }
}
