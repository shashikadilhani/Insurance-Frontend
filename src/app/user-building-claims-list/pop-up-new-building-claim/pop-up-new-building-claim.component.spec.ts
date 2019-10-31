import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNewBuildingClaimComponent } from './pop-up-new-building-claim.component';

describe('PopUpNewBuildingClaimComponent', () => {
  let component: PopUpNewBuildingClaimComponent;
  let fixture: ComponentFixture<PopUpNewBuildingClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpNewBuildingClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpNewBuildingClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
