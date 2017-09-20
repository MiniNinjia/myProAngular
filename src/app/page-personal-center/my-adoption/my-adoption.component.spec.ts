import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdoptionComponent } from './my-adoption.component';

describe('MyAdoptionComponent', () => {
  let component: MyAdoptionComponent;
  let fixture: ComponentFixture<MyAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
