import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {

  constructor(

  ) {
  }

  ngOnInit() {
    scrollTo(0,0);
  }

}
