import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
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
        console.log(result);
        callback(result);
      }
    );
    return null;
  }
}
