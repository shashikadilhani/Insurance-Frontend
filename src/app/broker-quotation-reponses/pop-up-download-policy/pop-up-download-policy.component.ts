import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-up-download-policy',
  templateUrl: './pop-up-download-policy.component.html',
  styleUrls: ['./pop-up-download-policy.component.css']
})
export class PopUpDownloadPolicyComponent implements OnInit {

  @Input() policyId;
  policyName: any;
  documentPath: any;

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
    this.dataService.get(`customers`, `getAllPolicies`).subscribe(data => {
      console.log(data)
      data['data'].forEach(element => {
        if (element.policy_id === this.policyId) {
          this.documentPath = `http://localhost:3001/api/customers/downloadDocument?filePath=${element.location}`;
          this.policyName = element.name;
          return;
        }
      });
    });
  }

}
