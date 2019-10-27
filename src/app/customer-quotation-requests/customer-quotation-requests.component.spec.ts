import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQuotationRequestsComponent } from './customer-quotation-requests.component';

describe('CustomerQuotationRequestsComponent', () => {
  let component: CustomerQuotationRequestsComponent;
  let fixture: ComponentFixture<CustomerQuotationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerQuotationRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerQuotationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
