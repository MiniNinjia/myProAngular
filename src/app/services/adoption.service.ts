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
}
