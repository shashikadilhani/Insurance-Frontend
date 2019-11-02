import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-up-download-quotation',
  templateUrl: './pop-up-download-quotation.component.html',
  styleUrls: ['./pop-up-download-quotation.component.css']
})
export class PopUpDownloadQuotationComponent implements OnInit {

  location = new FormControl('', { validators: Validators.required });
  documentPath = '';

  quotationForm: FormGroup = new FormGroup({
    location: this.location
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
      this.documentPath = `http://localhost:3001/api/customers/downloadDocument?filePath=${value.location}`
    } else {
      this.toastrService.error('Select a quotation');
    }
  }
}
