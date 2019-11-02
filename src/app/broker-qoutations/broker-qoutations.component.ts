import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-broker-qoutations',
  templateUrl: './broker-qoutations.component.html',
  styleUrls: ['./broker-qoutations.component.css']
})
export class BrokerQoutationsComponent implements OnInit {

  listItems;
  file: File;

  quotationName = new FormControl('', {});

  uploadForm: FormGroup = new FormGroup({
    quotationName: this.quotationName,
  });

  constructor(
    private dataService: DataService,
    private modalService: NgbModal,
    private authService: AuthService,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const userId = this.authService.currentUser.id;
    this.dataService.getOne('brokers', `quotations`, userId).subscribe(result => {
      this.listItems = result['data'];
      console.log(result)
    });
  }

  delete(value) {
    console.log(value)
    this.dataService.getOne('brokers', `quotations-delete`, value.Quotation_ID).subscribe(result => {
      if (!result['error']) {
        this.toastService.success('Delete Successful');
        this.loadData();
      } else {
        this.toastService.error('Delete Failed');
      }
    });
  }

  handleFileInput(files: FileList) {
    this.file = files[0];
    console.log(this.file);
  }

  download(value) {
    console.log(value)
    this.dataService.get('brokers', `downloadDocument?filePath=${value.location}`).subscribe();
  }

  onSubmit(value) {
    if (!this.file) {
      this.toastService.error('Please insert a quotation');
      return;
    }
    const formData = new FormData();
    formData.set('file', this.file, this.file.name);
    formData.set('name', value.quotationName);
    this.dataService.getBy('brokers', 'new-quotation', formData).subscribe(data => {
      if (data['error'] === true) {
        this.toastService.error('Error');
      } else {
        this.loadData();
        this.toastService.success('Success');
      }
    });
  }


}
