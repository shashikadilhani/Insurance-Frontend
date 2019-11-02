import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAcceptQuotationComponent } from './pop-up-accept-quotation.component';

describe('PopUpAcceptQuotationComponent', () => {
  let component: PopUpAcceptQuotationComponent;
  let fixture: ComponentFixture<PopUpAcceptQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpAcceptQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAcceptQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
