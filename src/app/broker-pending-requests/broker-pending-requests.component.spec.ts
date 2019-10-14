import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerPendingRequestsComponent } from './broker-pending-requests.component';

describe('BrokerPendingRequestsComponent', () => {
  let component: BrokerPendingRequestsComponent;
  let fixture: ComponentFixture<BrokerPendingRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerPendingRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
