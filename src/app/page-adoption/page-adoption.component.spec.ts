import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdoptionComponent } from './page-adoption.component';

describe('PageAdoptionComponent', () => {
  let component: PageAdoptionComponent;
  let fixture: ComponentFixture<PageAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
