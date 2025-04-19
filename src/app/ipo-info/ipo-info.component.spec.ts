import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoInfoComponent } from './ipo-info.component';

describe('IpoInfoComponent', () => {
  let component: IpoInfoComponent;
  let fixture: ComponentFixture<IpoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpoInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
