import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBrokersListComponent } from './user-brokers-list.component';

describe('UserBrokersListComponent', () => {
  let component: UserBrokersListComponent;
  let fixture: ComponentFixture<UserBrokersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBrokersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBrokersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
