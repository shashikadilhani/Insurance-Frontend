import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pop-up-new-building-claim',
  templateUrl: './pop-up-new-building-claim.component.html',
  styleUrls: ['./pop-up-new-building-claim.component.css']
})
export class PopUpNewBuildingClaimComponent implements OnInit {

  @Input() claimId;
  buildings: any;

  building_id = new FormControl('', {});
  date = new FormControl('', {});
  time = new FormControl('', {});
  casualties = new FormControl('', {});
  file1: File = null;
  file2: File = null;
  file3: File = null;

  buildingForm: FormGroup = new FormGroup({
    building_id: this.building_id,
    date: this.date,
    time: this.time,
    casualties: this.casualties
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
  }

  onSubmit(value) {
    value.userId = this.authService.currentUser.id;
    this.dataService.getBy('customers/vehicle', 'new', value).subscribe(data => {
      if (data['error'] === true) {
        this.modalService.close('error');
      } else {
        this.modalService.close('success');
      }
    });
  }

  handleFileInput1(files: FileList) {

  }

  handleFileInput2(files: FileList) {

  }

  handleFileInput3(files: FileList) {

  }

}
