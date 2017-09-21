import {Injectable} from '@angular/core';

@Injectable()
export class GlobalPropertyService {
  serverUrl = 'http://localhost:3000';
  uploadUrl = '../../../assets/';
  constructor() {
  }

}
