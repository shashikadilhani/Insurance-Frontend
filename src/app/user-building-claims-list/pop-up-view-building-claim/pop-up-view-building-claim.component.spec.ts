import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpViewBuildingClaimComponent } from './pop-up-view-building-claim.component';

describe('PopUpViewBuildingClaimComponent', () => {
  let component: PopUpViewBuildingClaimComponent;
  let fixture: ComponentFixture<PopUpViewBuildingClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpViewBuildingClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpViewBuildingClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
