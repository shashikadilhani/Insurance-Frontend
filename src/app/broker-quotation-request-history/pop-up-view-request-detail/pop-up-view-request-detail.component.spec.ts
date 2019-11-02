import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpViewRequestDetailComponent } from './pop-up-view-request-detail.component';

describe('PopUpViewRequestDetailComponent', () => {
  let component: PopUpViewRequestDetailComponent;
  let fixture: ComponentFixture<PopUpViewRequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpViewRequestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpViewRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
