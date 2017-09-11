import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionListItmeComponent } from './adoption-list-itme.component';

describe('AdoptionListItmeComponent', () => {
  let component: AdoptionListItmeComponent;
  let fixture: ComponentFixture<AdoptionListItmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionListItmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionListItmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
