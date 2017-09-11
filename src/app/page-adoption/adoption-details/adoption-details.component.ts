import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap}from'@angular/router';

@Component({
  selector: 'app-adoption-details',
  templateUrl: './adoption-details.component.html',
  styleUrls: ['./adoption-details.component.css']
})
export class AdoptionDetailsComponent implements OnInit {
  petId:string ;
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.petId=this.route.snapshot.paramMap.get('petid')
  }

}
