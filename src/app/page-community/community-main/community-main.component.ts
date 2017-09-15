import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-community-main',
  templateUrl: './community-main.component.html',
  styleUrls: ['./community-main.component.css']
})
export class CommunityMainComponent implements OnInit {
  constructor() {
  }
  pageNumber = 1;//默认第一页
  sort = 'default'; //排序方式
  list_data = {
    'totalPage': 20,
    'pageNow': 1,
    'article': [
      {
        'id': '1',
        'title': '南京市玄武区后酬谢五千寻找泰迪',
        'userImg': 'dog.png',
        'userName': '用户名',
        'time': '2017-09-09 10:31',
        'text': '南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪...',
        'communtCount': '180',
        'isCollect': false,
        'viewCount': '300'
      },
      {
        'id': '2',
        'title': '南京市玄武区后酬谢五千寻找泰迪',
        'userImg': 'dog.png',
        'userName': '用户名',
        'time': '2017-09-09 10:31',
        'text': '南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪...',
        'communtCount': '180',
        'isCollect': true,
        'viewCount': '300'
      },
      {
        'id': '3',
        'title': '南京市玄武区后酬谢五千寻找泰迪',
        'userImg': 'dog.png',
        'userName': '用户名',
        'time': '2017-10-09 10:31',
        'text': '南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪...',
        'communtCount': '600',
        'isCollect': false,
        'viewCount': '1000'
      },
      {
        'id': '4',
        'title': '南京市玄武区后酬谢五千寻找泰迪',
        'userImg': 'dog.png',
        'userName': '用户名',
        'time': '2017-09-11 10:31',
        'text': '南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪南京市玄武区后酬谢五千寻找泰迪...',
        'communtCount': '50',
        'isCollect': true,
        'viewCount': '100'
      }
    ]
  };
  pageList = [1, 2, 3, 4, 5, 6, 7];

  changeSort(sort: string) {//修改排序方式
    this.sort = sort;
  }//修改排序方式
  changePageList() {//修改pagelist数组
    this.pageList = [];
    if (this.list_data.totalPage <= 7) {
      for (let i = 1; i <= this.list_data.totalPage; i++) {
        this.pageList.push(i);
      }
    } else if (this.pageNumber < 4) {
      this.pageList = [1, 2, 3, 4, 5, 6, 7];
    } else if (this.pageNumber >= 4 && this.pageNumber + 3 <= this.list_data.totalPage) {
      this.pageList = [
        this.pageNumber - 3,
        this.pageNumber - 2,
        this.pageNumber - 1,
        this.pageNumber,
        this.pageNumber + 1,
        this.pageNumber + 2,
        this.pageNumber + 3,
      ];
    } else {
      for (let i = this.list_data.totalPage - 6; i <= this.list_data.totalPage; i++) {
        this.pageList.push(i);
      }
    }
  }//修改pagelist数组
  changePageNumber(j: any) { //修改当前页面
    if (j > 0 && j <= this.list_data.totalPage) {
      this.pageNumber = j;
      this.changePageList();
    }
  }//修改当前页面
  ngOnInit() {
  }
}
