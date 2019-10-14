import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClaimsListComponent } from './user-claims-list.component';

describe('UserClaimsListComponent', () => {
  let component: UserClaimsListComponent;
  let fixture: ComponentFixture<UserClaimsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserClaimsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClaimsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
