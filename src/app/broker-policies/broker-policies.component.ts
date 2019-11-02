import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-broker-policies',
  templateUrl: './broker-policies.component.html',
  styleUrls: ['./broker-policies.component.css']
})
export class BrokerPoliciesComponent implements OnInit {

  listItems;
  file: File;

  policyName = new FormControl('', {});

  uploadForm: FormGroup = new FormGroup({
    policyName: this.policyName,
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
    this.dataService.getOne('brokers', `policies`, userId).subscribe(result => {
      this.listItems = result['data'];
      console.log(result)
    });
  }

  delete(value) {
    console.log(value)
    this.dataService.getOne('brokers', `policies-delete`, value.policy_id).subscribe(result => {
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
      this.toastService.error('Please insert a policy');
      return;
    }
    const formData = new FormData();
    formData.set('file', this.file, this.file.name);
    formData.set('name', value.policyName);
    this.dataService.getBy('brokers', 'new-policy', formData).subscribe(data => {
      if (data['error'] === true) {
        this.toastService.error('error');
      } else {
        this.loadData();
        this.toastService.success('success');
      }
    });
  }

}
