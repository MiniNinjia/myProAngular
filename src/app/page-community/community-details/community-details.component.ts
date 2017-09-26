import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.component.html',
  styleUrls: ['./community-details.component.css']
})
export class CommunityDetailsComponent implements OnInit {
  articleId: string;
   aa:any;
  constructor(private route: ActivatedRoute) {
  }
quxiao=false
  pageNumber = 1;//默认第一页
  sort = 'default'; //排序方式
  pageList = [1, 2, 3, 4, 5, 6, 7];
  list_data = {
    'totalPage': 20,
    'pageNow': 1
  };
  test = `ewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t`;
  test1 = `ewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3tewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t
  ewrwertwetgweryrtyuertyertyr3t`;

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
    this.articleId = this.route.snapshot.paramMap.get('article');
    scrollTo(0,0);
  }

  showall() {
    this.test = this.test1;
  }
  jubao(){
    this.aa=!this.aa;
  }

  scrollYx() {
    console.log('1111');
  }
}
