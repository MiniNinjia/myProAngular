import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryRoutingComponent } from './diary-routing.component';

describe('DiaryRoutingComponent', () => {
  let component: DiaryRoutingComponent;
  let fixture: ComponentFixture<DiaryRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
