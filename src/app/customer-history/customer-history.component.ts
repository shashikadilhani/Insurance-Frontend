import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { PopUpHistoryDetailsComponent } from './pop-up-history-details/pop-up-history-details.component';

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {

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
    this.data.getOne('brokers', `acceptedQuotationHistoryData`, userId).subscribe(result => {
      this.listItems = result;
      console.log(result)
    });
  }

  viewDetails(requestData) {
    const modalRefViewRequest = this.modalService.open(PopUpHistoryDetailsComponent, {size: 'lg'});
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
