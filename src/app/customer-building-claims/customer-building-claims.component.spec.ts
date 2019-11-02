import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBuildingClaimsComponent } from './customer-building-claims.component';

describe('CustomerBuildingClaimsComponent', () => {
  let component: CustomerBuildingClaimsComponent;
  let fixture: ComponentFixture<CustomerBuildingClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBuildingClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBuildingClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
