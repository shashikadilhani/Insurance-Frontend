import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerQoutationsComponent } from './broker-qoutations.component';

describe('BrokerQoutationsComponent', () => {
  let component: BrokerQoutationsComponent;
  let fixture: ComponentFixture<BrokerQoutationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerQoutationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerQoutationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
