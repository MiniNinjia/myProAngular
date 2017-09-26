import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GlobalPropertyService} from './global-property.service';
@Injectable()
export class SkillService {

  constructor(private http: Http,
              private glo: GlobalPropertyService) { }

  _url = this.glo.serverUrl;
  getskillMain(postdata: any, callback) {
    this.http.post(this._url + '/skill/main', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  }
  getskillDetails(postdata: any, callback) {
    this.http.post(this._url + '/skill/details', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  }



}
