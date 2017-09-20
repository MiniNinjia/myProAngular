import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePersonalCenterComponent } from './page-personal-center.component';

describe('PagePersonalCenterComponent', () => {
  let component: PagePersonalCenterComponent;
  let fixture: ComponentFixture<PagePersonalCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePersonalCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePersonalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
