import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMessagenoteComponent } from './pet-messagenote.component';

describe('PetMessagenoteComponent', () => {
  let component: PetMessagenoteComponent;
  let fixture: ComponentFixture<PetMessagenoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetMessagenoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMessagenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
