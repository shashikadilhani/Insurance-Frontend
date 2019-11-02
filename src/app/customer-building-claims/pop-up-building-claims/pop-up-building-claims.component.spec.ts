import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpBuildingClaimsComponent } from './pop-up-building-claims.component';

describe('PopUpBuildingClaimsComponent', () => {
  let component: PopUpBuildingClaimsComponent;
  let fixture: ComponentFixture<PopUpBuildingClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpBuildingClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpBuildingClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
