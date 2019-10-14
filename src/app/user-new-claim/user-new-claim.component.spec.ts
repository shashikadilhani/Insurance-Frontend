import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewClaimComponent } from './user-new-claim.component';

describe('UserNewClaimComponent', () => {
  let component: UserNewClaimComponent;
  let fixture: ComponentFixture<UserNewClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
