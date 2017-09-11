import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSkillComponent } from './page-skill.component';

describe('PageSkillComponent', () => {
  let component: PageSkillComponent;
  let fixture: ComponentFixture<PageSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
