import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDiaryComponent } from './page-diary.component';

describe('PageDiaryComponent', () => {
  let component: PageDiaryComponent;
  let fixture: ComponentFixture<PageDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
