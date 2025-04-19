import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerComparisonComponent } from './broker-comparison.component';

describe('BrokerComparisonComponent', () => {
  let component: BrokerComparisonComponent;
  let fixture: ComponentFixture<BrokerComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrokerComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
