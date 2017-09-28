import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {GlobalPropertyService} from './global-property.service';
@Injectable()
export class UserInfoService {
  constructor(private http: Http,
              private glo: GlobalPropertyService) {
  }

  _url = this.glo.serverUrl;

  checkInfo(data: any, callback) {
    this.http.post(this._url + '/users/check', data).subscribe(
      function (result) {
        callback(result);
      }
    );
    return null;
  }

  getheadimg(uid, callback) {
    const params = new URLSearchParams();
    params.set('uid', uid);
    this.http.get(this._url + '/personal/getheadimg', {search: params}).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getinfo(uid, callback) {
    const params = new URLSearchParams();
    params.set('uid', uid);
    this.http.get(this._url + '/personal/getinfo', {search: params}).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getAdoptionList(uid, callback) {
    const params = new URLSearchParams();
    params.set('uid', uid);
    this.http.get(this._url + '/personal/getAdoptionList', {search: params}).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getPublishList(uid, callback) {
    const params = new URLSearchParams();
    params.set('uid', uid);
    this.http.get(this._url + '/personal/getPublishList', {search: params}).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getDiaryList(uid, callback) {
    const params = new URLSearchParams();
    params.set('uid', uid);
    this.http.get(this._url + '/personal/getDiaryList', {search: params}).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getCommunitylist(uid, callback) {
    const params = new URLSearchParams();
    params.set('uid', uid);
    this.http.get(this._url + '/personal/getCommunitylist', {search: params}).subscribe(
      function (result) {
        callback(result);
      }
    );
  }


  getMessageList(uid, callback) {
    const params = new URLSearchParams();
    params.set('uid', uid);
    this.http.get(this._url + '/personal/getMessageList', {search: params}).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getpersonalCollect(uid, callback) {
    const params = new URLSearchParams();
    params.set('uid', uid);
    this.http.get(this._url + '/personal/getpersonalCollect', {search: params}).subscribe(
      function (result) {

        callback(result);
      }
    );
  }

  commitChange(data: any, callback) {
    this.http.post(this._url + '/personal/edit', data).subscribe(
      function (result) {
        callback(result);
      }
    );
    return null;
  }
}
