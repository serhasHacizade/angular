import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualityValidatorsComponent } from './equality-validators.component';

describe('EqualityValidatorsComponent', () => {
  let component: EqualityValidatorsComponent;
  let fixture: ComponentFixture<EqualityValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EqualityValidatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EqualityValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
