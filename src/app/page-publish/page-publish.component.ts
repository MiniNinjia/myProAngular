import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { FileUploader } from 'ng2-file-upload';
//import {GlobalPropertyService} from '../services/global-property.service';
import {PublishService} from '../services/publish.service'
@Component({
  selector: 'app-page-publish',
  templateUrl: './page-publish.component.html',
  styleUrls: ['./page-publish.component.css'],

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
  publishData:any;
  postData: any;
  constructor(
              private ps: PublishService
          ){ }

  ngOnInit() {


  }
  pro(event:any){

  this.cit=this.data[event.target.value].city;

  }

  public uploader:FileUploader = new FileUploader({
    url: "http://localhost:3000/ng2/uploadFile",
    method: "POST",
    itemAlias: "uploadedfile"
  });
  // C: 定义事件，选择文件
  selectedFileOnChanged(event:any) {
    // 打印文件选择名称
    console.log(event.target.value);
  }
  // D: 定义事件，上传文件
  uploadFile() {
    // 上传
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
      } else {
        // 上传文件后获取服务器返回的数据错误
        alert("");
      }
    };
    this.uploader.queue[0].upload(); // 开始上传
  }


  //接口
  publish() {
    const that = this;
    this.ps.getpublishList(this.postData, function (result) {
      if (result._body !== 'err') {
        that.publishData = JSON.parse(result._body);
      }
    });
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
