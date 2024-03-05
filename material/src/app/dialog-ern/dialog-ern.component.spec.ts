import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogErnComponent } from './dialog-ern.component';

describe('DialogErnComponent', () => {
  let component: DialogErnComponent;
  let fixture: ComponentFixture<DialogErnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogErnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogErnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
