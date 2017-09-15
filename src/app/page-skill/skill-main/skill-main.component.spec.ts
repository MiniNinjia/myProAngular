import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMainComponent } from './skill-main.component';

describe('SkillMainComponent', () => {
  let component: SkillMainComponent;
  let fixture: ComponentFixture<SkillMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
