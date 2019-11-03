import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pop-up-history-details',
  templateUrl: './pop-up-history-details.component.html',
  styleUrls: ['./pop-up-history-details.component.css']
})
export class PopUpHistoryDetailsComponent implements OnInit {

  @Input() requestData;
  propertyData;
  type: number;
  premiumData = [];
  selectedPremiumData: any;
  newPremiumRequset = false;

  premiumAmount = new FormControl('', { validators: Validators.required });

  premiumForm: FormGroup = new FormGroup({
    premiumAmount: this.premiumAmount
  });

  policies: any;

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    console.log(this.requestData)
    this.loadData();
  }

  loadData() {
    const buildingId = this.requestData.building_id;
    const vehicleId = this.requestData.vehicle_id;
    if (buildingId && !vehicleId) {
      this.dataService.getOne('brokers', 'buildingQuotation', buildingId).subscribe(result => {
        this.type = 0;
        this.propertyData = result[0];
      });
    } else if (!buildingId && vehicleId) {
      this.dataService.getOne('brokers', 'vehicleQuotation', vehicleId).subscribe(result => {
        this.type = 1;
        this.propertyData = result[0];
      });
    }
    this.dataService.getOne('brokers', 'premiumData', this.requestData.Request_ID).subscribe(result => {
      console.log(result);
      this.premiumData = [];
      this.premiumData.push({
        Premum_ID: '',
        Payment_Date: '',
        Payment_Amount: '',
        notification: ''
      });
      result['data'].forEach(element => {
        this.premiumData.push(element);
      });
    });
  }

  changed(premiumId) {
    this.newPremiumRequset = false;
    this.premiumData.forEach(element => {
      console.log(element)
      if (element.Premum_ID == premiumId) {
        this.selectedPremiumData = element;
        return;
      }
    });
  }

  createNew() {
    this.newPremiumRequset = true;
  }

  cancel() {
    this.newPremiumRequset = false;
  }

  notify() {
    if (this.premiumAmount.value) {
      const tempObject = {
        paymentAmount: this.premiumAmount.value,
        requestId: this.requestData.Request_ID
      };
      console.log(tempObject)
      this.dataService.getBy('brokers', 'newPremium', tempObject).subscribe(result => {
        if (!result['error']) {
          this.loadData();
          this.toastrService.success('Notified Customer');
          this.newPremiumRequset = false;
        } else {
          this.toastrService.error('Notifying Failed');
        }
      });
    }
    console.log(this.premiumAmount.value)
  }

  sendPolicy(requestId, policyId) {
    console.log(requestId)
    console.log(policyId)
    this.dataService.getBy('brokers', 'sendPolicy', { requestId, policyId }).subscribe(result => {
      if (!result['error']) {
        this.loadData();
        this.modalService.close('success');
      } else {
        this.toastrService.error('Policy Send Failed');
      }
    });
  }

}
