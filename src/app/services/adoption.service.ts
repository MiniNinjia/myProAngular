import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalPropertyService} from './global-property.service';
@Injectable()
export class AdoptionService {

  constructor(private http: Http,
              private glo: GlobalPropertyService) {
  }

  _url = this.glo.serverUrl;
  uploadUrl = this.glo.uploadUrl;

  getIndexList(callback) {
    this.http.get(this._url + '/adoption/indexlist').subscribe(
      function (result) {
        callback(result);
      }
    );
  }
  getpetbanner(callback) {
    this.http.get(this._url + '/adoption/getpetbanner').subscribe(
      function (result) {
        callback(result);
      }
    );
  }
  getcity(callback) {
    this.http.get(this._url + '/adoption/getcity').subscribe(
      function (result) {
        callback(result);
      }
    );
  }
  getpetdetail(postData, callback) {
    this.http.post(this._url + '/adoption/getpetdetail', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getlist(postData, callback) {
    this.http.post(this._url + '/adoption/getlist', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }
  checkadopt(postData, callback) {
    this.http.post(this._url + '/adoption/checkadopt', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  collect(postData, callback) {
    this.http.post(this._url + '/adoption/collect', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }
  getreview(postData, callback) {
    this.http.post(this._url + '/adoption/getreview', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }
}
