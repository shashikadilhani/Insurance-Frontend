import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pop-up-premium-details',
  templateUrl: './pop-up-premium-details.component.html',
  styleUrls: ['./pop-up-premium-details.component.css']
})
export class PopUpPremiumDetailsComponent implements OnInit {

  @Input() requestData;
  premiumData;
  duePremiumdata;
  selectedPremiumData: any;
  newPremiumRequset = false;

  cardNumber = new FormControl('', { validators: Validators.required });
  cardExpireDate = new FormControl('', { validators: Validators.required });
  cardPin = new FormControl('', { validators: Validators.required });
  premiumId = new FormControl('', { validators: Validators.required });

  paymentForm: FormGroup = new FormGroup({
    cardNumber: this.cardNumber,
    cardExpireDate: this.cardExpireDate,
    cardPin: this.cardPin,
    premiumId: this.premiumId
  });

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    console.log(this.requestData)
    this.dataService.getOne('customers', 'premiumData', this.requestData.Request_ID).subscribe(result => {
      console.log(result)
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
    this.dataService.getOne('customers', 'unpaidPremiumData', this.requestData.Request_ID).subscribe(result => {
      console.log(result)
      this.duePremiumdata = [];
      this.duePremiumdata.push({
        Premum_ID: '',
        Payment_Date: '',
        Payment_Amount: '',
        notification: ''
      });
      result['data'].forEach(element => {
        this.duePremiumdata.push(element);
      });
    });
  }

  changed(premiumId) {
    this.premiumData.forEach(element => {
      console.log(element)
      if (element.Premum_ID == premiumId) {
        this.selectedPremiumData = element;
        return;
      }
    });
  }

  payPremium() {
    console.log(this.paymentForm.value)
    const date = new Date();
    const tempObj = {
      Premum_ID: this.paymentForm.value.premiumId,
      Payment_date: date.toLocaleString(),
      notification: 1
    };
    console.log(tempObj)
    this.dataService.getBy('customers', 'payPremium', tempObj).subscribe(result => {
      if (!result['error']) {
        this.loadData();
        this.toastrService.success('Payment Successful');
        this.paymentForm.reset();
      } else {
        this.toastrService.error('Payment Unsuccessful');
      }
    });
  }

}
