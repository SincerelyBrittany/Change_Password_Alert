import { Component, OnInit } from "@angular/core";

@Component({
  selector: "Dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})

export class DashboardComponent implements OnInit {
  auth: any = null;

  ngOnInit(): void {
    try {
      this.auth = JSON.parse(sessionStorage.getItem('auth') || 'null');
    } catch {
      this.auth = null;
    }
  }
}
// export class DashboardComponent {}
