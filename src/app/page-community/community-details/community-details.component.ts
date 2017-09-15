import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.component.html',
  styleUrls: ['./community-details.component.css']
})
export class CommunityDetailsComponent implements OnInit {
  articleId: string;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('article');
  }
}
