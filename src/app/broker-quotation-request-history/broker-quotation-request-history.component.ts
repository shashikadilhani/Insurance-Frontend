import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PopUpViewRequestDetailComponent } from './pop-up-view-request-detail/pop-up-view-request-detail.component';

@Component({
  selector: 'app-broker-quotation-request-history',
  templateUrl: './broker-quotation-request-history.component.html',
  styleUrls: ['./broker-quotation-request-history.component.css']
})
export class BrokerQuotationRequestHistoryComponent implements OnInit {

  listItems;

  constructor(
    private data: DataService,
    private modalService: NgbModal,
    private authService: AuthService,
    private toastService: ToastrService
    ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const userId = this.authService.currentUser.id;
    this.data.getOne('brokers', `acceptedQuotationRequests`, userId).subscribe(result => {
      this.listItems = result;
      console.log(result)
    });
  }

  viewDetails(requestData) {
    const modalRefViewRequest = this.modalService.open(PopUpViewRequestDetailComponent, {size: 'lg'});
    modalRefViewRequest.componentInstance.requestData = requestData;
    modalRefViewRequest.result.then(data => {
      if (data === 'success') {
        this.loadData();
        this.toastService.success("Request Changed");
      } else if (data === 'error') {
        this.toastService.error("Request Change Failed");
      }
    });
  }

}
