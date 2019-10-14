import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVehiclesComponent } from './user-vehicles.component';

describe('UserVehiclesComponent', () => {
  let component: UserVehiclesComponent;
  let fixture: ComponentFixture<UserVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
