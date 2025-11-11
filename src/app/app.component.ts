import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public auth: any;

  constructor() {
    this.auth = {
      token: "",
      user: {},
      meta: {}
    };
  }

  onLoginSuccess(auth: any) {
    this.auth = auth;
    try {
      sessionStorage.setItem('auth', JSON.stringify(auth));
    } catch {}
  }

  onLogOut() {
    this.auth = {
      token: "",
      user: {},
      meta: {}
    };
    try {
      sessionStorage.removeItem('auth');
    } catch {}
  }}