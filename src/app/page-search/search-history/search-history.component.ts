import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  history = [
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
