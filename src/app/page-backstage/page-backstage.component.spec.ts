import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBackstageComponent } from './page-backstage.component';

describe('PageBackstageComponent', () => {
  let component: PageBackstageComponent;
  let fixture: ComponentFixture<PageBackstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBackstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBackstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
