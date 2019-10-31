import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-portal",
  templateUrl: "./user-portal.component.html",
  styleUrls: ["./user-portal.component.css"]
})
export class UserPortalComponent implements OnInit {
  category;

  menu = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Available Brokers", key: "brokerlist" },
    { name: "My Broker Requests", key: "broker-requests" },
    { name: "My Vehicle Claims", key: "claims" },
    { name: "My Building Claims", key: "building-claims" },
    { name: "My Vehicles", key: "vehicles" },
    { name: "My Properties", key: "property" },
  ];
  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get("category");
    });
  }

  ngOnInit() {}
}
