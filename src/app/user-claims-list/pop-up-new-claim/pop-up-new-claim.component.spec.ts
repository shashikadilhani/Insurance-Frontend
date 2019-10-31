import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNewClaimComponent } from './pop-up-new-claim.component';

describe('PopUpNewClaimComponent', () => {
  let component: PopUpNewClaimComponent;
  let fixture: ComponentFixture<PopUpNewClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpNewClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpNewClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
