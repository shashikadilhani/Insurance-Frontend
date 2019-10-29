import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up-calculated-quotation',
  templateUrl: './pop-up-calculated-quotation.component.html',
  styleUrls: ['./pop-up-calculated-quotation.component.css']
})
export class PopUpCalculatedQuotationComponent implements OnInit {

  @Input() quotationData;

  constructor() { }

  ngOnInit() {
  }

  sendQuotation() {
    
  }

}
