import { TestBed } from '@angular/core/testing';

import { BrokerGuardService } from './broker-guard.service';

describe('BrokerGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrokerGuardService = TestBed.get(BrokerGuardService);
    expect(service).toBeTruthy();
  });
});
