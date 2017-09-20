import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryChildComponent } from './diary-child.component';

describe('DiaryChildComponent', () => {
  let component: DiaryChildComponent;
  let fixture: ComponentFixture<DiaryChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
