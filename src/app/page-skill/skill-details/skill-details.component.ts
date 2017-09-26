import {Component, OnInit} from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {CookieService} from 'angular2-cookie/services/cookies.service';
@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
  list_data: any;
  skillService: any;
  constructor(private glo: GlobalPropertyService,
              private ds: SkillService,
              private _cookieService: CookieService) {

  constructor(

  ) {
  }

  ngOnInit() {
    scrollTo(0,0);
  }
  skillDetailsdata() {
    const that = this;
    this.ds.getskillDetails(this.skillService, function (result) {
      if (result._body !== 'err') {
        that.list_data.diary = JSON.parse(result._body);
      }
    });
  }

}
