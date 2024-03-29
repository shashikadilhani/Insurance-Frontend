import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpViewRequestComponent } from './pop-up-view-request/pop-up-view-request.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-quotation-requests',
  templateUrl: './customer-quotation-requests.component.html',
  styleUrls: ['./customer-quotation-requests.component.css']
})
export class CustomerQuotationRequestsComponent implements OnInit {

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
    this.data.getOne('brokers', `quotationRequests`, userId).subscribe(result => {
      this.listItems = result;
      console.log(result)
    });
  }

  viewDetails(requestData) {
    const modalRefViewRequest = this.modalService.open(PopUpViewRequestComponent, {size: 'lg'});
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
