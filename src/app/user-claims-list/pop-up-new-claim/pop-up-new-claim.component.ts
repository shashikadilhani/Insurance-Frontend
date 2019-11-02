import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/data.service';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-up-new-claim',
  templateUrl: './pop-up-new-claim.component.html',
  styleUrls: ['./pop-up-new-claim.component.css']
})
export class PopUpNewClaimComponent implements OnInit {

  @Input() claimId;
  vehicles: any;
  brokers: any;

  vehicle_id = new FormControl('', {});
  date = new FormControl('', {});
  time = new FormControl('', {});
  casualties = new FormControl('', {});
  venue = new FormControl('', {});
  brokerId = new FormControl('', {});
  file1: File = null;
  file2: File = null;
  file3: File = null;

  vehicleForm: FormGroup = new FormGroup({
    vehicle_id: this.vehicle_id,
    date: this.date,
    time: this.time,
    casualties: this.casualties,
    venue: this.venue,
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
    this.dataService.get(`customers/vehicle`, `get?id=${id}`).subscribe(data => {
      console.log(data)
      this.vehicles = data['data'];
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
    if (this.vehicleForm.valid) {
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
      formData.set('vehicle_id', value.vehicle_id);
      formData.set('userId', this.authService.currentUser.id);
      formData.set('accident_date', value.date);
      formData.set('casualties', value.casualties);
      formData.set('accident_time', value.time);
      formData.set('brokerid', value.brokerId);
      formData.set('venue', value.venue);
      console.log(value.brokerId)
      this.dataService.getBy('customers/vehicle', 'new-claim', formData).subscribe(data => {
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
