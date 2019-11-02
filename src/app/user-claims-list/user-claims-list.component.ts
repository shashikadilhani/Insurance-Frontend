import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpViewClaimComponent } from './pop-up-view-claim/pop-up-view-claim.component';
import { PopUpNewClaimComponent } from './pop-up-new-claim/pop-up-new-claim.component';

@Component({
  selector: 'app-user-claims-list',
  templateUrl: './user-claims-list.component.html',
  styleUrls: ['./user-claims-list.component.css']
})
export class UserClaimsListComponent implements OnInit {
  claimItems: any;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private modalService: NgbModal,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.get('customers/vehicle', `claims?id=${this.authService.currentUser.id}`).subscribe(data => {
      console.log(data);
      this.claimItems = data['data'];
    });
  }

  newClaim() {
    const modalRef = this.modalService.open(PopUpNewClaimComponent);
    modalRef.result.then(data => {
      if (data === 'success') {
        this.loadData();
        this.toastService.success("Claim sent successfully.");
      } else if (data === 'error') {
        this.toastService.error("Unable to send the new claim.");
      }
    });
  }

  viewClaim(claim) {
    const modelRef = this.modalService.open(PopUpViewClaimComponent);
    modelRef.componentInstance.requestData = claim;
  }

  deleteClaim(claimId: number) {
    this.dataService.delete('customers/vehicle/delete-claim', claimId).subscribe(data => {
      if (data['error'] === false) {
        this.loadData();
      }
    });
  }


}
