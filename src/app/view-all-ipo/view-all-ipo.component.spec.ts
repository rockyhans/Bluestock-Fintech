import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllIpoComponent } from './view-all-ipo.component';

describe('ViewAllIpoComponent', () => {
  let component: ViewAllIpoComponent;
  let fixture: ComponentFixture<ViewAllIpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllIpoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
