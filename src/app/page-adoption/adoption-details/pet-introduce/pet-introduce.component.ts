import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-pet-introduce',
  templateUrl: './pet-introduce.component.html',
  styleUrls: ['./pet-introduce.component.css']
})
export class PetIntroduceComponent implements OnInit {
  @Input() data;

  constructor() {
  }

  ngOnInit() {
  }

}
