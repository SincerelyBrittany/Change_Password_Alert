import { Component, Input } from '@angular/core';

type Breach = { name: string; addedDate: string };

@Component({
  selector: 'app-alerts-card',
  templateUrl: './alerts-card.component.html'
})
export class AlertsCardComponent {
  // The auth object is created in login.component.ts (handleSubmit)
  @Input() auth: any = null;

  get hasBreaches(): boolean {
    return !!(
      this.auth?.meta?.suggestPasswordChange &&
      Array.isArray(this.auth?.meta?.breachedAccounts) &&
      this.auth.meta.breachedAccounts.length > 0
    );
  }

  // Dismiss for this session (switch to "No alerts" state)
  dismiss() {
    if (!this.auth || !this.auth.meta) return;
    this.auth.meta.suggestPasswordChange = false;
    try {
      sessionStorage.setItem('auth', JSON.stringify(this.auth));
    } catch {}
  }
}