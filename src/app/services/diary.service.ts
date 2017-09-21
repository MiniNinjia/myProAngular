import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalPropertyService} from './global-property.service';
@Injectable()
export class DiaryService {

  constructor(private http: Http,
              private glo: GlobalPropertyService) {
  }

  _url = this.glo.serverUrl;

  getdiaryList(postdata: any, callback) {
    this.http.post(this._url + '/diary', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  };

  getdiaryPageCount(callback) {
    this.http.get(this._url + '/diary/getdiaryPageCount').subscribe(
      function (result) {
        callback(result);
      }
    );
  };
  getdiaryBanner(callback) {
    this.http.get(this._url + '/diary/getdiaryBanner').subscribe(
      function (result) {
        callback(result);
      }
    );
  }
}
