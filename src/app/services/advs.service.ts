import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalPropertyService} from './global-property.service';
import {forEach} from "@angular/router/src/utils/collection";
@Injectable()
export class AdvsService {
  constructor(private http: Http,
              private glo: GlobalPropertyService) {
  }

  _url = this.glo.serverUrl;

  getAdv(postdata: any, callback) {
    this.http.post(this._url + '/adv', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  }
}
