import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {

  constructor(
    private modalService: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
