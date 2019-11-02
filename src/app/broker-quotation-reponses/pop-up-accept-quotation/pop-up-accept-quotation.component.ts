import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-up-accept-quotation',
  templateUrl: './pop-up-accept-quotation.component.html',
  styleUrls: ['./pop-up-accept-quotation.component.css']
})
export class PopUpAcceptQuotationComponent implements OnInit {

  @Input() requestId;
  quotation = new FormControl('', { validators: Validators.required });

  quotationForm: FormGroup = new FormGroup({
    quotation: this.quotation
  });

  quotations: any;

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
    this.dataService.get(`customers`, `getAllQuotations`).subscribe(data => {
      console.log(data)
      this.quotations = data['data'];
    });
  }

  onSubmit(value) {
    if (this.quotationForm.valid) {
      console.log(value)
      const tempObj = {
        quotationId: value.quotation,
        requestId: this.requestId
      };
      console.log(tempObj)
      this.dataService.getBy('customers', 'acceptQuotation', tempObj).subscribe(result => {
        this.modalService.close('success');
      });
    } else {
      this.toastrService.error('Select a quotation');
    }
  }

}
