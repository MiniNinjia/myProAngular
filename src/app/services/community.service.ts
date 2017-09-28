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

  getCommunityPageCount(callback) {
    this.http.get(this._url + '/community/getPageCount').subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  collect(postData, callback) {
    this.http.post(this._url + '/community/collect', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getCommunityDetail(postData, callback) {
    this.http.post(this._url + '/community/communityDetail', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getCommunityReviewCount(postData, callback) {
    this.http.post(this._url + '/community/getCommunityReviewCount', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getCommunityReview(postData, callback) {
    this.http.post(this._url + '/community/getCommunityReview', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }
  CommunityReviewLike(postData, callback) {
    this.http.post(this._url + '/community/CommunityReviewLike', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  CommunityReviewAdd(postData, callback) {
    this.http.post(this._url + '/community/CommunityReviewAdd', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  addcommunity(postData, callback) {
    this.http.post(this._url + '/community/addcommunity', postData).subscribe(
      function (result) {
        callback(result);
      }
    );
  }
}
