import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {CookieService} from 'angular2-cookie/services/cookies.service';
@Component({
  selector: 'app-skill-main',
  templateUrl: './skill-main.component.html',
  styleUrls: ['./skill-main.component.css']
})
export class SkillMainComponent implements OnInit {
  list_data: any;
  skillService: any;
  skill = [
    {
      'id':'1',
      'imag':'skill-t1.jpg',
      'title':'怎样缓解吉娃娃犬掉毛的问题',
      'main':'吉娃娃犬的毛发护理还是非常重要的，家长要是不定期给吉娃娃梳理毛发，吉娃娃的毛发生长就没有那么好了。吉娃娃犬是一种爱掉毛的宠物狗，每到脱毛的季节那叫主人一个头疼.',
      'ground':'浏览次数（533）',
    },
    {
      'id':'2',
      'imag':'skill-t1.jpg',
      'title':'怎样缓解吉娃娃犬掉毛的问题',
      'main':'吉娃娃犬的毛发护理还是非常重要的，家长要是不定期给吉娃娃梳理毛发，吉娃娃的毛发生长就没有那么好了。吉娃娃犬是一种爱掉毛的宠物狗，每到脱毛的季节那叫主人一个头疼.',
      'ground':'浏览次数（533）',
    },
    {
      'id':'3',
      'imag':'skill-t1.jpg',
      'title':'怎样缓解吉娃娃犬掉毛的问题',
      'main':'吉娃娃犬的毛发护理还是非常重要的，家长要是不定期给吉娃娃梳理毛发，吉娃娃的毛发生长就没有那么好了。吉娃娃犬是一种爱掉毛的宠物狗，每到脱毛的季节那叫主人一个头疼.',
      'ground':'浏览次数（533）',
    },
    {
      'id':'4',
      'imag':'skill-t1.jpg',
      'title':'怎样缓解吉娃娃犬掉毛的问题',
      'main':'吉娃娃犬的毛发护理还是非常重要的，家长要是不定期给吉娃娃梳理毛发，吉娃娃的毛发生长就没有那么好了。吉娃娃犬是一种爱掉毛的宠物狗，每到脱毛的季节那叫主人一个头疼.',
      'ground':'浏览次数（533）',
    },
    {
      'id':'5',
      'imag':'skill-t1.jpg',
      'title':'怎样缓解吉娃娃犬掉毛的问题',
      'main':'吉娃娃犬的毛发护理还是非常重要的，家长要是不定期给吉娃娃梳理毛发，吉娃娃的毛发生长就没有那么好了。吉娃娃犬是一种爱掉毛的宠物狗，每到脱毛的季节那叫主人一个头疼.',
      'ground':'浏览次数（533）',
    },
  ]
  constructor(private glo: GlobalPropertyService,
              private ds: SkillService,
              private _cookieService: CookieService) { }

  ngOnInit() {
  }
  skillMaindata() {
    const that = this;
    this.ds.getskillMain(this.skillService, function (result) {
      if (result._body !== 'err') {
        that.list_data.diary = JSON.parse(result._body);
      }
    });
  }
}
