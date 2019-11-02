import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-up-view-claim',
  templateUrl: './pop-up-view-claim.component.html',
  styleUrls: ['./pop-up-view-claim.component.css']
})
export class PopUpViewClaimComponent implements OnInit {

  @Input() requestData;
  propertyData;
  type: number;
  images = [];

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    const vehicle_id = this.requestData.vehicle_id;
    this.dataService.getOne('customers', 'vehicle/getOne', vehicle_id).subscribe(result => {
      this.propertyData = result['data'][0];
      console.log(this.requestData)
      console.log(this.propertyData)
      this.dataService.get('customers', `vehicle/getDownloadLinks/?id=${this.requestData.id}`).subscribe(data => {
        if (data['error']) {
          this.toastrService.error('Unable to load images');
        } else {
          console.log(data)
          data['data'].forEach(element => {
            this.images.push(`http://localhost:3001/getImage/?filePath=${element.location}`);
          });
        }
      });
    });
  }

}
