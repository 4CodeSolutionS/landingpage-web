import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWorkComponent } from './services-work.component';

describe('ServicesWorkComponent', () => {
  let component: ServicesWorkComponent;
  let fixture: ComponentFixture<ServicesWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
