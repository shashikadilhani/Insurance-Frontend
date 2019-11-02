import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { PopUpDownloadQuotationComponent } from './pop-up-download-quotation/pop-up-download-quotation.component';
import { PopUpAcceptQuotationComponent } from './pop-up-accept-quotation/pop-up-accept-quotation.component';

@Component({
  selector: 'app-broker-quotation-reponses',
  templateUrl: './broker-quotation-reponses.component.html',
  styleUrls: ['./broker-quotation-reponses.component.css']
})
export class BrokerQuotationReponsesComponent implements OnInit {

  listItems: any;

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private dataService: DataService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.get('customers', `quotations/?id=${this.authService.currentUser.id}`).subscribe(result => {
      this.listItems = result['data'];
    });
  }

  acceptQuotation(id) {
    const modalRef = this.modalService.open(PopUpAcceptQuotationComponent);
    modalRef.componentInstance.requestId = id;
    modalRef.result.then(data => {
      if (data === 'success') {
        this.loadData();
        this.toastrService.success("Quotation Accepted");
      } else if (data === 'error') {
        this.toastrService.error("Failed to Accpet Quotation");
      }
    });
  }

  rejectQuotation(id) {
    this.dataService.get('customers', `rejectQuotation/?requestId=${id}`).subscribe(result => {
      this.loadData();
      this.toastrService.success("Quotation Rejected");
    });
  }

  acceptPolicy(id) {
    this.dataService.get('customers', `acceptPolicy/?requestId=${id}`).subscribe(result => {
      this.loadData();
      this.toastrService.success("Policy Accepted");
    });
  }

  rejectPolicy(id) {
    this.dataService.get('customers', `rejectPolicy/?requestId=${id}`).subscribe(result => {
      this.loadData();
      this.toastrService.success("Policy Rejected");
    });
  }

  downloadQuotations() {
    const modalRef = this.modalService.open(PopUpDownloadQuotationComponent);
  }

  downloadPolicies() {}

}
