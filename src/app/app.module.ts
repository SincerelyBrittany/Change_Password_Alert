import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AlertsCardComponent } from './components/cards/alerts-card.component';

import { TasksCard } from "./components/cards";
import { TasksCardComponent } from './components/cards/tasks-card/tasks-card.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent,  AlertsCardComponent, TasksCard, TasksCardComponent],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
