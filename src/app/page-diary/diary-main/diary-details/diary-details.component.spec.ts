import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryDetailsComponent } from './diary-details.component';

describe('DiaryDetailsComponent', () => {
  let component: DiaryDetailsComponent;
  let fixture: ComponentFixture<DiaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
