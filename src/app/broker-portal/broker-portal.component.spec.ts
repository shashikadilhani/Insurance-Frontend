import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerPortalComponent } from './broker-portal.component';

describe('BrokerPortalComponent', () => {
  let component: BrokerPortalComponent;
  let fixture: ComponentFixture<BrokerPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
