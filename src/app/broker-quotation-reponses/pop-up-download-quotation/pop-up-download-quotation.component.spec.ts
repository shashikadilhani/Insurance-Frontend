import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDownloadQuotationComponent } from './pop-up-download-quotation.component';

describe('PopUpDownloadQuotationComponent', () => {
  let component: PopUpDownloadQuotationComponent;
  let fixture: ComponentFixture<PopUpDownloadQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpDownloadQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDownloadQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
