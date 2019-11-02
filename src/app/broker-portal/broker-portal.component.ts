import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-broker-portal",
  templateUrl: "./broker-portal.component.html",
  styleUrls: ["./broker-portal.component.css"]
})
export class BrokerPortalComponent implements OnInit {
  category;

  menu = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Brokers", key: "brokerlist" },
    { name: "Pending Quotation Requests", key: "pending-requests" },
    { name: "Quotation Request History", key: "request-history"},
    { name: "Customer History", key: "customer-history"},
    { name: "Building Claim Requests", key: "building-claims"},
    { name: "Vehicle Claim Requests", key: "vehicle-claims"}
  ];
  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get("category");
    });
  }

  ngOnInit() {}
}
