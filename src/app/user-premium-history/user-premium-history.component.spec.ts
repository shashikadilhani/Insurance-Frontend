import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPremiumHistoryComponent } from './user-premium-history.component';

describe('UserPremiumHistoryComponent', () => {
  let component: UserPremiumHistoryComponent;
  let fixture: ComponentFixture<UserPremiumHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPremiumHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPremiumHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
