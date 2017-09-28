import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FileUploader} from 'ng2-file-upload';
//import {GlobalPropertyService} from '../services/global-property.service';
import {PublishService} from '../services/publish.service';
import {AdoptionService} from '../services/adoption.service';

@Component({
  selector: 'app-page-publish',
  templateUrl: './page-publish.component.html',
  styleUrls: ['./page-publish.component.css'],

})
export class PagePublishComponent implements OnInit {
  data = [];
  place: any;
  cit: any;
  publishData: any;
  postData: any;
  choose: any;
  kindof: any;
  petkindof: {

  };

  constructor(private ps: PublishService, 
              private as: AdoptionService) {
  }

  ngOnInit() {
    const that = this;
    this.as.getcity(function (result) {
      if (result._body !== 'err') {
        that.data = JSON.parse(result._body);
        that.cit = that.data[0].city;
        that.choose = that.data[0].city[0];
      }
    });
  }

  froalaContent(event) {
    console.log(event);
  }

  pro(event: any) {
    this.cit = this.data[event.target.value].city;
  }

  _choose(e) {
    this.choose = this.cit[e.target.value];
  }

  //宠物分类
  petkind(event: any) {
    this.kindof = this.petkindof[event.target.value].petkindof;
  }


  public uploader: FileUploader = new FileUploader({
    url: "http://localhost:3000/ng2/uploadFile",
    method: "POST",
    itemAlias: "uploadedfile"
  });
  // C: 定义事件，选择文件
  selectedFileOnChanged(event: any) {
    // 打印文件选择名称
    console.log(event.target.value);
  }

  // D: 定义事件，上传文件
  uploadFile() {
    // 上传
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status === 200) {
        // 上传文件后获取服务器返回的数据
        const tempRes = JSON.parse(response);
      } else {
        // 上传文件后获取服务器返回的数据错误
        alert('');
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


  // onFileChanged(fileList: FileList) {
  //发布内容保存


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
  // }


}
