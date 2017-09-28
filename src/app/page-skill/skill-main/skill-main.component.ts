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
      'title':'哈士奇能不能吃海鲜',
      'main':' 关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜，咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题，哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
      'ground':'浏览次数（533）',
    },
    {
      'id':'2',
      'imag':'skill-t1.jpg',
      'title':'狗狗饲养需要注意的问题？',
      'main':'  在肉类食物中钙和磷的比例为1:20,钙少磷多,而犬食物中钙和磷的最合适比例为1.1-1.2:1,因此长时间的用肉来喂犬的话,幼犬非常容易发生佝偻病,成犬容易发生骨质疏松症',
      'ground':'浏览次数（533）',
    },
    {
      'id':'3',
      'imag':'skill-t1.jpg',
      'title':'罗福梗犬好养吗 罗福梗犬还是比较好养的',
      'main':'罗福梗犬好养吗，罗福梗是一种非常好的狩猎犬，当然也可以作为玩赏犬的，所以很多人都非常喜欢饲养罗福梗，而如果要说到罗福梗的饲养，那么就需要根据罗福梗的不同生长时期来采取不同的饲养方法，而并不能一概而论的一模一样的饲养，那样只会让罗福',
      'ground':'浏览次数（533）',
    },
    {
      'id':'4',
      'imag':'skill-t1.jpg',
      'title':'圣伯纳犬的食量 圣伯纳犬好养但是食量大',
      'main':'犬的食量，圣伯纳犬本身就是一种大型的犬种，它正常的体重，成年犬都在一百斤左右，体积很大。圣伯纳犬虽然好饲养，但是它的食物量很大 ，有人能说它一顿可以吃七只鸡，可见此犬的食物量之大，它体重在一百斤左右，身高可达一米。',
      'ground':'浏览次数（533）',
    },
    {
      'id':'5',
      'imag':'skill-t1.jpg',
      'title':'如何挑选一只好的纯种贵宾幼犬',
      'main':'  贵宾犬分为纯种贵宾与杂交贵宾，可是这两种贵宾外形差别不大（尤其是在狗狗小时候），那么如何挑选一条好的纯种贵宾幼犬呢？下面一些挑选纯种贵宾的经验，希望对想购买贵宾的朋友有所帮助。',
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
