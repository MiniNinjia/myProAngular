import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-page-report',
  templateUrl: './page-report.component.html',
  styleUrls: ['./page-report.component.css'],
})
export class PageReportComponent implements OnInit {
  @Input() Sitem: any;
  @Output() TOparent: EventEmitter<boolean> = new EventEmitter();
  quxiao = true;
  morereason: any;
  reasons: any;
  reason = {
    'uid': null,
    'res': null,
    'more': null,
  };


  constructor() {
  }

  ngOnInit() {
  }

  buy() {
    this.TOparent.emit(this.Sitem);
    this.quxiao = !this.quxiao;
    this.Sitem = !this.Sitem;
  }


  apply() {
    this.TOparent.emit(this.Sitem);
    this.quxiao = !this.quxiao;
    this.Sitem = !this.Sitem;
    this.reason = {
      'uid': 1,
      'res': this.reasons,
      'more': this.morereason,
    };
  }
}
