import {Component, OnInit, Output, Input, EventEmitter, OnChanges} from '@angular/core';
import {LocalStorage} from '../../app.local.storage';
import {isUndefined} from "util";
@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit, OnChanges {
  history = {
    history: []
  };

  constructor(private ls: LocalStorage) {

  }

  @Input() text: any;
  @Output() _search = new EventEmitter<string>();

  ngOnInit() {
    const pp = this.ls.getObject('history');
    if (pp.history) {//有history
      this.history = pp;
    }
  }

  Search(str) {
    this._search.emit(str);
  }

  claer() {
    this.ls.remove('history');
    this.history = {
      history: []
    };
  }

  ngOnChanges() {
    if (this.text) {
      const data = {
        name: this.text
      };
      const pp = this.ls.getObject('history');
      if (pp.history) {//有history
        this.history = pp;
      }
      this.history.history.unshift(data);
      this.ls.set('history', JSON.stringify(this.history));
    }
  }
}
