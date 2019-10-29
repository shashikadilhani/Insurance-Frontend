import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpViewRequestComponent } from './pop-up-view-request.component';

describe('PopUpViewRequestComponent', () => {
  let component: PopUpViewRequestComponent;
  let fixture: ComponentFixture<PopUpViewRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpViewRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
