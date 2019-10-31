import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-new-building',
  templateUrl: './new-building.component.html',
  styleUrls: ['./new-building.component.css']
})
export class NewBuildingComponent implements OnInit {

  estimateValue = new FormControl('', {});
  address = new FormControl('', {});
  type = new FormControl('', {});

  buildingForm: FormGroup = new FormGroup({
    estValue: this.estimateValue,
    address: this.address,
    type: this.type
  });

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  onSubmit(value) {
    value.userId = this.authService.currentUser.id;
    this.dataService.getBy('customers/building', 'new', value).subscribe(data => {
      if (data['error'] === true) {
        this.modalService.close('error');
      } else {
        this.modalService.close('success');
      }
    });
  }

}
