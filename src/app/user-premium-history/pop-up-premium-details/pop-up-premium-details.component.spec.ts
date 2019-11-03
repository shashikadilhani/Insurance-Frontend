import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPremiumDetailsComponent } from './pop-up-premium-details.component';

describe('PopUpPremiumDetailsComponent', () => {
  let component: PopUpPremiumDetailsComponent;
  let fixture: ComponentFixture<PopUpPremiumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPremiumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPremiumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
