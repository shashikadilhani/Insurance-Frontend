import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerQuotationRequestHistoryComponent } from './broker-quotation-request-history.component';

describe('BrokerQuotationRequestHistoryComponent', () => {
  let component: BrokerQuotationRequestHistoryComponent;
  let fixture: ComponentFixture<BrokerQuotationRequestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerQuotationRequestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerQuotationRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
