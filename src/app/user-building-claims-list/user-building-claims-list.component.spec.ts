import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBuildingClaimsListComponent } from './user-building-claims-list.component';

describe('UserBuildingClaimsListComponent', () => {
  let component: UserBuildingClaimsListComponent;
  let fixture: ComponentFixture<UserBuildingClaimsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBuildingClaimsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBuildingClaimsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
