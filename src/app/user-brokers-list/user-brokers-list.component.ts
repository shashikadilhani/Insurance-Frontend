import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { AuthService } from "../auth.service";
import { RequestQuotationComponent } from './pop-up/request-quotation/request-quotation.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-user-brokers-list",
  templateUrl: "./user-brokers-list.component.html",
  styleUrls: ["./user-brokers-list.component.css"]
})
export class UserBrokersListComponent implements OnInit {
  listItems;
  endpoint = "brokers";
  city;

  constructor(
    private data: DataService,
    private auth: AuthService,
    private modalService: NgbModal,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.city = this.auth.currentUser.city;
    this.loadData();
  }

  loadData() {
    this.data
      .getBy(this.endpoint, "city", { city: this.city })
      .subscribe(res => {
        this.listItems = res["data"];
      });
  }

  request(id: string) {
    const modalRef = this.modalService.open(RequestQuotationComponent);
    modalRef.componentInstance.brokerId = id;
    modalRef.result.then(data => {
      if (data === 'success') {
        this.toastService.success("Request sent successfully.");
      } else if (data === 'error') {
        this.toastService.error("Request failed.");
      }
    });
  }
}
