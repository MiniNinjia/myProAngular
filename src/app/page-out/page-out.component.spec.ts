import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOutComponent } from './page-out.component';

describe('PageOutComponent', () => {
  let component: PageOutComponent;
  let fixture: ComponentFixture<PageOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
