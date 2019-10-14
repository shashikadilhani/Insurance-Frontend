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
    { name: "My Broker Requests", key: "broker-requests" }
  ];
  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get("category");
    });
  }

  ngOnInit() {}
}
