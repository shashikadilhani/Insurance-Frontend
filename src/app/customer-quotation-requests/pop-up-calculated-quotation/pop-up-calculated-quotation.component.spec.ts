import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCalculatedQuotationComponent } from './pop-up-calculated-quotation.component';

describe('PopUpCalculatedQuotationComponent', () => {
  let component: PopUpCalculatedQuotationComponent;
  let fixture: ComponentFixture<PopUpCalculatedQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpCalculatedQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpCalculatedQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
