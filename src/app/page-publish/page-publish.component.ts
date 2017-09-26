import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-page-publish',
  templateUrl: './page-publish.component.html',
  styleUrls: ['./page-publish.component.css']
})
export class PagePublishComponent implements OnInit {
  froalaContent(event) {
    console.log(event)
    console.log('11111');
  }

  data=[
    {
      provence:'四川',
      city:['宜宾市','广安市','达州市','雅安市','巴中市','资阳市']
    },
    {
      provence:'四川1',
      city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
    },
    {
      provence:'四川2',
      city:['宜宾市2','广安市2','达州市2','雅安市2','巴中市2','资阳市2']
    }
  ];

   cit:any;
  constructor() { }

  ngOnInit() {
  }
  pro(event:any){

  this.cit=this.data[event.target.value].city;

  }




  //onFileChanged(fileList: FileList) {
  //  if (fileList.length > 0) {
  //    let file: File = fileList[0];
  //    let formData: FormData = new FormData();
  //    formData.append('uploadFile', file, file.name);
  //    let headers = new Headers({
  //      "Accept": "application/json"
  //    });
  //    let options = new RequestOptions({ headers });
  //    this.http.post("https://localhost:44372/api/uploadFile", formData, options)
  //      .map(res => res.json())
  //      .catch(error => Observable.throw(error))
  //      .subscribe(
  //        data => console.log('success' + data),
  //        error => console.log(error)
  //      )
  //  }
  //}







}
