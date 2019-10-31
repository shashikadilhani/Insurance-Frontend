import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpViewClaimComponent } from './pop-up-view-claim/pop-up-view-claim.component';

@Component({
  selector: 'app-user-claims-list',
  templateUrl: './user-claims-list.component.html',
  styleUrls: ['./user-claims-list.component.css']
})
export class UserClaimsListComponent implements OnInit {
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
    const modalRef = this.modalService.open(PopUpViewClaimComponent);
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
