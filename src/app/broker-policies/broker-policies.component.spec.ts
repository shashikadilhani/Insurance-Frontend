import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerPoliciesComponent } from './broker-policies.component';

describe('BrokerPoliciesComponent', () => {
  let component: BrokerPoliciesComponent;
  let fixture: ComponentFixture<BrokerPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
