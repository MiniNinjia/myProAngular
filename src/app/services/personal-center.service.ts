import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GlobalPropertyService} from './global-property.service';
@Injectable()
export class PersonalCenterService {

  constructor(private http: Http,
              private glo: GlobalPropertyService) {
  }

  _url = this.glo.serverUrl;


  getpersonalPublish(postdata: any, callback) {
    this.http.post(this._url + '/personal/publish', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  };


  getpersonalAdoption(postdata: any, callback) {
    this.http.post(this._url + '/personal/adoption', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  };


  getpersonalDiary(postdata: any, callback) {
    this.http.post(this._url + '/personal/diary', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  };


  getpersonalCommunity(postdata: any, callback) {
    this.http.post(this._url + '/personal/community', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  };


  getpersonalData(postdata: any, callback) {
    this.http.post(this._url + '/personal/data', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  };



}
