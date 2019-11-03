import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDownloadPolicyComponent } from './pop-up-download-policy.component';

describe('PopUpDownloadPolicyComponent', () => {
  let component: PopUpDownloadPolicyComponent;
  let fixture: ComponentFixture<PopUpDownloadPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpDownloadPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDownloadPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
