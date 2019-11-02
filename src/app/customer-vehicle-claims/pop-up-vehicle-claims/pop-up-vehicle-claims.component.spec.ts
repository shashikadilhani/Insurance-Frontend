import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpVehicleClaimsComponent } from './pop-up-vehicle-claims.component';

describe('PopUpVehicleClaimsComponent', () => {
  let component: PopUpVehicleClaimsComponent;
  let fixture: ComponentFixture<PopUpVehicleClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpVehicleClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpVehicleClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
