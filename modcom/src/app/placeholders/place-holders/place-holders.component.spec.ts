import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHoldersComponent } from './place-holders.component';

describe('PlaceHoldersComponent', () => {
  let component: PlaceHoldersComponent;
  let fixture: ComponentFixture<PlaceHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceHoldersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
