import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerQuotationReponsesComponent } from './broker-quotation-reponses.component';

describe('BrokerQuotationReponsesComponent', () => {
  let component: BrokerQuotationReponsesComponent;
  let fixture: ComponentFixture<BrokerQuotationReponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerQuotationReponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerQuotationReponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
