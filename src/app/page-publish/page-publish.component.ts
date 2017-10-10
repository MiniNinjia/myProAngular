import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FileUploader} from 'ng2-file-upload';
import {GlobalPropertyService} from '../services/global-property.service';
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
  petkindof: {};
  uploader: FileUploader = new FileUploader({
    url: this.glo.serverUrl + '/upload',
    method: 'POST',
    itemAlias: 'pet'
  });
  uploadimg = null;

  constructor(private ps: PublishService,
              private as: AdoptionService,
              private glo: GlobalPropertyService) {
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

  //接口
  publish() {
    const that = this;
    this.ps.getpublishList(this.postData, function (result) {
      if (result._body !== 'err') {
        that.publishData = JSON.parse(result._body);
      }
    });
  }


  selectedFileOnChanged() {
    console.log(this.uploader.queue[0]);
    const that = this;
    // 这里是文件选择完成后的操作处理
    this.uploader.queue[0].onSuccess = (response, status, headers) => {
      if (status === 200) {
        that.uploadimg = JSON.parse(response).link;
      } else {

      }
      that.uploader.clearQueue();
    };
    this.uploader.queue[0].upload(); // 开始上传

  }
}
