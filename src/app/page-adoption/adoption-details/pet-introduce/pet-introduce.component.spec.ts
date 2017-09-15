import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetIntroduceComponent } from './pet-introduce.component';

describe('PetIntroduceComponent', () => {
  let component: PetIntroduceComponent;
  let fixture: ComponentFixture<PetIntroduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetIntroduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
