import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up-premium-details',
  templateUrl: './pop-up-premium-details.component.html',
  styleUrls: ['./pop-up-premium-details.component.css']
})
export class PopUpPremiumDetailsComponent implements OnInit {

  @Input() requestData;

  constructor() { }

  ngOnInit() {
  }

}
