import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GlobalPropertyService} from './global-property.service';
@Injectable()
export class PublishService {

  constructor(private http: Http,
              private glo: GlobalPropertyService) {
  }

  _url = this.glo.serverUrl;


  getpublishList(postdata: any, callback) {
    this.http.post(this._url + '/publish', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  };





}
