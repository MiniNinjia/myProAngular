import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import {GlobalPropertyService} from '../services/global-property.service'
@Component({
  selector: "blog-froala",
  templateUrl: "./froala.component.html"
})
export class FroalaComponent implements OnInit {
  @Output() froala = new EventEmitter();

  option: Object;
  froalaText: string;
  serverUrl: any;

  constructor(private glo: GlobalPropertyService) {
    this.froalaText = '';

  }

  ngOnInit() {
    this.serverUrl = this.glo.serverUrl;
    // 在事件中要使用外部的this,因为函数内部也有this所以讲this的值赋给that
    const that = this;
    // 参数配置
    // https://www.froala.com/wysiwyg-editor/docs/options?utm_expid=98676916-2.gb-QgBReTCCS2F60oBIe_g.0&utm_referrer=https%3A%2F%2Fwww.google.com%2F#language
    this.option = {
      heightMax: 800,
      widthMax: 800,
      heightMin: 90,
      imageDefaultAlign: 'left',
      imageDefaultWidth: '100%',
      toolbarVisibleWithoutSelection: true,
      theme: 'gray',
      language: 'zh_cn', //配置语言
      placeholderText: '请输入内容', // 文本框提示内容
      charCounterCount: true, // 是否开启统计字数
      charCounterMax: 2000, // 最大输入字数,目前只支持英文字母
      // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
      toolbarBottom: false,
      toolbarButtons: ['fullscreen', 'emoticons', 'bold', 'italic', 'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
      codeMirror: false, // 高亮显示html代码
      codeMirrorOptions: { // 配置html代码参数
        tabSize: 4
      },
      imageResize: false,
      // 上传图片，视频等稳健配置
      imageUploadURL: this.glo.serverUrl + '/upload',//GLOBAL.INCONFIG.getIP()+接口名称,
      //imageUploadURL:"http://11.177.50.63:9999/emanager/sns/uploadPhoto",//本地路径
      imageUploadParams: {uid: '111'},//接口其他传参,默认为空对象{},
      imageUploadMethod: 'POST',//POST/GET,
      // 事件, 每次输入,就将值传递给父组件, 或者使用失去焦点的时候传递。
      events: {
        'froalaEditor.html.get': function (e, editor, html) {
          that.froala.emit(html);
        }
      }
    };
  }
}
