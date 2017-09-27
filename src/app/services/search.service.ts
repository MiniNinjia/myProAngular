import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalPropertyService} from './global-property.service';
@Injectable()
export class SearchService {

  constructor(private http: Http,
              private glo: GlobalPropertyService) {
  }

  _url = this.glo.serverUrl;

  search(data: any, callback) {
    const postdata = {
      str: data
    };
    this.http.post(this._url + '/search', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

}
