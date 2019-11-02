import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVehicleClaimsComponent } from './customer-vehicle-claims.component';

describe('CustomerVehicleClaimsComponent', () => {
  let component: CustomerVehicleClaimsComponent;
  let fixture: ComponentFixture<CustomerVehicleClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerVehicleClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerVehicleClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
