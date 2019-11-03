import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpHistoryDetailsComponent } from './pop-up-history-details.component';

describe('PopUpHistoryDetailsComponent', () => {
  let component: PopUpHistoryDetailsComponent;
  let fixture: ComponentFixture<PopUpHistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpHistoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
