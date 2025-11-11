import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "Dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  @Input() auth: any = null;

  ngOnInit(): void {
    // If auth wasn't passed, try to load from sessionStorage
    if (!this.auth) {
      try {
        this.auth = JSON.parse(sessionStorage.getItem('auth') || 'null');
      } catch {
        this.auth = null;
      }
    }
  }
}