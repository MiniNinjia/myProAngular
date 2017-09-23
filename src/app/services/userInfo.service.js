"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var UserInfoService = (function () {
    function UserInfoService(http, glo) {
        this.http = http;
        this.glo = glo;
        this._url = this.glo.serverUrl;
    }
    UserInfoService.prototype.checkInfo = function (data, callback) {
        this.http.post(this._url + '/users/check', data).subscribe(function (result) {
            callback(result);
        });
        return null;
    };
    ;
    UserInfoService.prototype.getheadimg = function (uid, callback) {
        var params = new http_1.URLSearchParams();
        params.set('uid', uid);
        this.http.get(this._url + '/personal/getheadimg', { search: params }).subscribe(function (result) {
            callback(result);
        });
    };
    UserInfoService.prototype.getinfo = function (uid, callback) {
        var params = new http_1.URLSearchParams();
        params.set('uid', uid);
        this.http.get(this._url + '/personal/getinfo', { search: params }).subscribe(function (result) {
            callback(result);
        });
    };
    return UserInfoService;
}());
UserInfoService = __decorate([
    core_1.Injectable()
], UserInfoService);
exports.UserInfoService = UserInfoService;
