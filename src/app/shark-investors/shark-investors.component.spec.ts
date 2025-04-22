import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharkInvestorsComponent } from './shark-investors.component';

describe('SharkInvestorsComponent', () => {
  let component: SharkInvestorsComponent;
  let fixture: ComponentFixture<SharkInvestorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharkInvestorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharkInvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
