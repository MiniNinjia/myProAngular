import {Component, OnInit} from '@angular/core';
import {GlobalPropertyService} from '../../services/global-property.service';
import {AdvsService} from '../../services/advs.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css'],
  animations: [trigger('flyInOut', [
    state('in', style({
      opacity: 1,
      zIndex: 50
    })),
    state('left', style({
      opacity: 0,
      zIndex: 1
    })),
    state('right', style({
      opacity: 0,
      zIndex: 1
    })),
    transition('void => *', animate(1)),
    transition('* => void', animate(1)),
    transition('* => *', animate(1000)),
  ])]
})
export class AdComponent implements OnInit {
  items: any;
  currentPic = 0;
  time: any;
  _uploadUrl: string;

  constructor(private glo: GlobalPropertyService,
              private as: AdvsService) {
    this._uploadUrl = glo.uploadUrl;
    const that = this;
    this.as.getAdv({'position': 'index'}, function (result) {
      if (result !== 'err') {
        that.items = JSON.parse(result._body);
        that.go();
      }
    });
  }

  go() {
    const that = this;
    this.time = setInterval(() => {
      that.currentPic = (that.currentPic + 1) % that.items.length;
      console.log(that.currentPic);
    }, 3000);
  }

  changebanner(id) {
    clearInterval(this.time);
    this.currentPic = id;
    console.log(id);
    this.go();
  }

  ngOnInit() {

  }

}
