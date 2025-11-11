import { Component, Input } from '@angular/core';

type Breach = { name: string; addedDate: string };

@Component({
  selector: 'app-alerts-card',
  templateUrl: './alerts-card.component.html'
})
export class AlertsCardComponent {
  // The auth object is created in login.component.ts (handleSubmit)
  @Input() auth: { suggestPasswordChange?: boolean; breachedAccounts?: Breach[] } | null = null;

  get hasBreaches(): boolean {
    return !!(
      this.auth?.suggestPasswordChange &&
      Array.isArray(this.auth?.breachedAccounts) &&
      this.auth!.breachedAccounts!.length > 0
    );
  }

  // Dismiss for this session (switch to “No alerts” state)
  dismiss() {
    if (!this.auth) return;
    this.auth.suggestPasswordChange = false;
    try { sessionStorage.setItem('auth', JSON.stringify(this.auth)); } catch {}
  }
}
