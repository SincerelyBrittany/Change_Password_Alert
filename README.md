# AppCo - Password Breach Alert System

A security-focused Angular application that alerts users when their email addresses have been involved in password breaches.

## Quick Start
```bash
npm install --legacy-peer-deps
npm start
```

Open browser to `http://localhost:4200`

## Test Users

**Safe User (No Breaches)**
- Email: `safe@example.com`
- Password: `pw`

**Unsafe User (Has Breaches)**
- Email: `test@example.com`
- Password: `pw`

## Features

- Two-state alert system: White "No alerts" card vs Yellow warning card with breach details
- Session-based dismissal: Dismiss alerts that persist for current session
- Breach details: Shows date and site name for each breach
- Responsive design: Bootstrap 4-based UI

## Project Structure
```
src/app/
├── components/
│   ├── login/                 # Login form
│   ├── dashboard/             # Main dashboard
│   ├── cards/alerts-card/     # Breach alerts
│   └── tasks-card/            # Task list
└── app.module.ts              # Main module
```

## Tech Stack

- Angular 16.2.12
- Bootstrap 4.1.3
- TypeScript 4.9.4
- SessionStorage for state

## Current Limitations

- Hardcoded breach data (no real API)
- Client-side only authentication
- Session-only persistence
- "Change Password" button is non-functional
- No error handling for edge cases

## Future Improvements

### High Priority
1. Real API Integration: Connect to Have I Been Pwned or similar API
2. Backend Authentication: JWT-based secure auth
3. Password Change Flow: Complete working password reset
4. Persistent Storage: Database for user preferences
5. Email Notifications: Alert users of new breaches

### UX Enhancements
6. Loading States: Spinners and skeleton screens
7. Dark Mode: System preference + manual toggle
8. Mobile PWA: Install as native app
9. Animations: Smooth transitions and feedback
10. Accessibility: WCAG 2.1 AA compliance

### Advanced Features
11. Multiple Accounts: Monitor multiple email addresses
12. Security Dashboard: Score, timeline, analytics
13. 2FA: Two-factor authentication
14. Breach Severity: Color-coded risk levels
15. Push Notifications: Real-time breach alerts

### Polish
16. Testing: Unit, integration, E2E tests
17. i18n: Multi-language support
18. Export: PDF/CSV breach reports
19. Password Manager Integration: 1Password, LastPass
20. Browser Extension: Real-time monitoring

## Development Notes

Built with Angular NgModule architecture. Key challenge was resolving Angular 16/17 configuration conflicts and tsconfig issues that prevented compilation.

## License

This project was created as a coding challenge and is for educational purposes.

## Credits

- AI Assistance: Claude (Anthropic)
- Framework: Angular Team
- UI: Bootstrap Team
- Inspiration: Have I Been Pwned

---

Built by Sincere Brittany with assistance from Claude AI