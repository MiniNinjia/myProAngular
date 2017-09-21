import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePublishComponent } from './page-publish.component';

describe('PagePublishComponent', () => {
  let component: PagePublishComponent;
  let fixture: ComponentFixture<PagePublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
