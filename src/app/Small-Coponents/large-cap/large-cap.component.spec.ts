import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCapComponent } from './large-cap.component';

describe('LargeCapComponent', () => {
  let component: LargeCapComponent;
  let fixture: ComponentFixture<LargeCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeCapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
