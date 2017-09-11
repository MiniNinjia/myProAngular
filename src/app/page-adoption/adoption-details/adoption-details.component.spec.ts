import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionDetailsComponent } from './adoption-details.component';

describe('AdoptionDetailsComponent', () => {
  let component: AdoptionDetailsComponent;
  let fixture: ComponentFixture<AdoptionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
