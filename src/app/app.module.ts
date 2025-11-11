// import { Component } from "@angular/core";

// @Component({
//   selector: "#root",
//   templateUrl: "./app.component.html"
//   // Remove standalone: true if it exists
// })
// export class AppComponent {
//   public auth: {
//     token: "";
//     user: {};
//     meta: {};
//   };

//   constructor() {
//     this.auth = {
//       token: "",
//       user: {},
//       meta: {}
//     };
//   }

//   onLoginSuccess(auth: any) {
//     this.auth = auth;
//     // Save to sessionStorage
//     try {
//       sessionStorage.setItem('auth', JSON.stringify(auth));
//     } catch {}
//   }

//   onLogOut() {
//     this.auth = {
//       token: "",
//       user: {},
//       meta: {}
//     };
//     // Clear sessionStorage
//     try {
//       sessionStorage.removeItem('auth');
//     } catch {}
//   }
// }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AlertsCardComponent } from './components/cards/alerts-card.component';
import { TasksCard } from "./components/tasks-card/tasks-card.component";

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    DashboardComponent, 
    AlertsCardComponent, 
    TasksCard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}