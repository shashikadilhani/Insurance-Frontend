import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-pop-up-view-building-claim',
  templateUrl: './pop-up-view-building-claim.component.html',
  styleUrls: ['./pop-up-view-building-claim.component.css']
})
export class PopUpViewBuildingClaimComponent implements OnInit {
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
    const building_id = this.requestData.buildingId;
    this.dataService.getOne('customers', 'building/getOne', building_id).subscribe(result => {
      this.propertyData = result['data'][0];
      console.log(this.requestData)
      this.dataService.get('customers', `building/getDownloadLinks/?id=${this.requestData.id}`).subscribe(data => {
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
