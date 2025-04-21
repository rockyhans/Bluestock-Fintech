import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerCompareComponent } from './broker-compare.component';

describe('BrokerCompareComponent', () => {
  let component: BrokerCompareComponent;
  let fixture: ComponentFixture<BrokerCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerCompareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrokerCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
