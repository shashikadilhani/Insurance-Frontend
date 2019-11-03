import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { PopUpPremiumDetailsComponent } from './pop-up-premium-details/pop-up-premium-details.component';

@Component({
  selector: 'app-user-premium-history',
  templateUrl: './user-premium-history.component.html',
  styleUrls: ['./user-premium-history.component.css']
})
export class UserPremiumHistoryComponent implements OnInit {

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
    this.dataService.get('customers', `premiumHistory/?id=${this.authService.currentUser.id}`).subscribe(result => {
      console.log(result)
      this.listItems = result['data'];
    });
  }

  viewDetails(requestData) {
    const modalRefViewRequest = this.modalService.open(PopUpPremiumDetailsComponent, {size: 'lg'});
    modalRefViewRequest.componentInstance.requestData = requestData;
  }


}
