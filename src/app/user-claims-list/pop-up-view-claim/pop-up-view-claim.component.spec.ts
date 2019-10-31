import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpViewClaimComponent } from './pop-up-view-claim.component';

describe('PopUpViewClaimComponent', () => {
  let component: PopUpViewClaimComponent;
  let fixture: ComponentFixture<PopUpViewClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpViewClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpViewClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
