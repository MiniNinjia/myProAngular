import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-out',
  templateUrl: './page-out.component.html',
  styleUrls: ['./page-out.component.css']
})
export class PageOutComponent implements OnInit {
  list_data: any;
  pageList: any;
  pageNumber = 1;//默认第一页
  sort = 'default'; //排序方式
  constructor() {
    this.list_data = {
      'totalPage': 1,
      'pageNow': 1,
      'diary': [
        {
          'id': 1,
          'name': 'Himi洪鸣',
          'place': '印度尼西亚',
          'count': 365,
          'data': 6, 'title': '精品纯种原生态藏獒专业狗场直销 兰州地区可上门购买',
          'inturduce': '虽然我们是繁育犬只和销售犬只的从业者，却也是资深的爱狗人士。对爱狗的我们来说，经营这项事业，绝对需要高度的职业',
          'headImag': '头像.jpg',
          'rightimag': 'pic1.jpg',
          'isCollect': 0
        },
        {
          'id': 2,
          'name': 'Himi洪鸣',
          'place': '印度尼西亚',
          'count': 365,
          'data': 6, 'title': '精品纯种原生态藏獒专业狗场直销 兰州地区可上门购买',
          'inturduce': '虽然我们是繁育犬只和销售犬只的从业者，却也是资深的爱狗人士。对爱狗的我们来说，经营这项事业，绝对需要高度的职业',
          'headImag': '头像2.jpg',
          'rightimag': 'pic2.jpg',
          'isCollect': 1
        },
        {
          'id': 3,
          'name': 'Himi洪鸣',
          'place': '印度尼西亚',
          'count': 365,
          'data': 6, 'title': '精品纯种原生态藏獒专业狗场直销 兰州地区可上门购买',
          'inturduce': '虽然我们是繁育犬只和销售犬只的从业者，却也是资深的爱狗人士。对爱狗的我们来说，经营这项事业，绝对需要高度的职业',
          'headImag': '头像3.jpg',
          'rightimag': 'pic3.jpg',
          'isCollect': 0
        },
        {
          'id': 4,
          'name': 'Himi洪鸣',
          'place': '印度尼西亚',
          'count': 365,
          'data': 6, 'title': '精品纯种原生态藏獒专业狗场直销 兰州地区可上门购买',
          'inturduce': '虽然我们是繁育犬只和销售犬只的从业者，却也是资深的爱狗人士。对爱狗的我们来说，经营这项事业，绝对需要高度的职业',
          'headImag': '头像4.jpg',
          'rightimag': 'pic1.jpg',
          'isCollect': 1
        },
        {
          'id': 5,
          'name': 'Himi洪鸣',
          'place': '印度尼西亚',
          'count': 365,
          'data': 6, 'title': '精品纯种原生态藏獒专业狗场直销 兰州地区可上门购买',
          'inturduce': '虽然我们是繁育犬只和销售犬只的从业者，却也是资深的爱狗人士。对爱狗的我们来说，经营这项事业，绝对需要高度的职业',
          'headImag': '头像5.jpg',
          'rightimag': 'pic1.jpg',
          'isCollect': 0
        },
      ]
    };
    this.changePageList();
  }

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
