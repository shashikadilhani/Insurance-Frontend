import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pop-up-new-building-claim',
  templateUrl: './pop-up-new-building-claim.component.html',
  styleUrls: ['./pop-up-new-building-claim.component.css']
})
export class PopUpNewBuildingClaimComponent implements OnInit {

  @Input() claimId;
  buildings: any;
  brokers: any;

  building_id = new FormControl('', {});
  date = new FormControl('', {});
  time = new FormControl('', {});
  casualties = new FormControl('', {});
  brokerId = new FormControl('', {});
  file1: File = null;
  file2: File = null;
  file3: File = null;

  buildingForm: FormGroup = new FormGroup({
    building_id: this.building_id,
    date: this.date,
    time: this.time,
    casualties: this.casualties,
    brokerId: this.brokerId
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
    const id = this.authService.currentUser.id;
    this.dataService.get(`customers/building`, `get?id=${id}`).subscribe(data => {
      console.log(data)
      this.buildings = data['data'];
    });
    this.dataService.getBy('brokers', "city", { city: this.authService.currentUser.city }).subscribe(res => {
        this.brokers = res["data"];
        console.log(this.brokers)
      });
  }

  onSubmit(value) {
    if (!this.file1 && !this.file2 && !this.file3) {
      this.toastrService.error('Please insert at least one image');
      return;
    }
    if (this.buildingForm.valid) {
      const formData = new FormData();
      if (this.file1) {
        formData.set('file1', this.file1, this.file1.name);
      }
      if (this.file2) {
        formData.set('file2', this.file2, this.file2.name);
      }
      if (this.file3) {
        formData.set('file3', this.file3, this.file3.name);
      }
      formData.set('buildingId', value.building_id);
      formData.set('userId', this.authService.currentUser.id);
      formData.set('date', value.date);
      formData.set('casualties', value.casualties);
      formData.set('time', value.time);
      formData.set('brokerId', value.brokerId);
      console.log(value.brokerId)
      this.dataService.getBy('customers/building', 'new-claim', formData).subscribe(data => {
        if (data['error'] === true) {
          this.modalService.close('error');
        } else {
          this.modalService.close('success');
        }
      });
    }
  }

  handleFileInput1(files: FileList) {
    this.file1 = files[0];
    console.log(this.file1);
  }

  handleFileInput2(files: FileList) {
    this.file2 = files[0];
  }

  handleFileInput3(files: FileList) {
    this.file3 = files[0];
  }

}
