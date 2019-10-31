import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBuildingsComponent } from './user-buildings.component';

describe('UserBuildingsComponent', () => {
  let component: UserBuildingsComponent;
  let fixture: ComponentFixture<UserBuildingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBuildingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
