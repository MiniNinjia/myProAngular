import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryChild2Component } from './diary-child2.component';

describe('DiaryChild2Component', () => {
  let component: DiaryChild2Component;
  let fixture: ComponentFixture<DiaryChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
