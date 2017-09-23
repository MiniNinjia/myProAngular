import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalPropertyService} from './global-property.service';

@Injectable()
export class CommunityService {
  constructor(private http: Http,
              private glo: GlobalPropertyService) {
  }

  _url = this.glo.serverUrl;
  uploadUrl = this.glo.uploadUrl;

  getCommunityList(postdata: any, callback) {
    this.http.post(this._url + '/community', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

}
