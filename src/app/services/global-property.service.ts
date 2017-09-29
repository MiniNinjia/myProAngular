import {Injectable} from '@angular/core';

@Injectable()
export class GlobalPropertyService {
  //serverUrl = 'http://localhost:3000';
  serverUrl = 'http://10.40.4.22:3000';
  uploadUrl = '../../../assets/';
  constructor() {
  }
}
