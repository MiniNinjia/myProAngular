import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDatailsComponent } from './skill-datails.component';

describe('SkillDatailsComponent', () => {
  let component: SkillDatailsComponent;
  let fixture: ComponentFixture<SkillDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
