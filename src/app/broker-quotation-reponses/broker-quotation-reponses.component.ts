import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broker-quotation-reponses',
  templateUrl: './broker-quotation-reponses.component.html',
  styleUrls: ['./broker-quotation-reponses.component.css']
})
export class BrokerQuotationReponsesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {}

  downloadQuotations() {}

  downloadPolicies() {}

}
