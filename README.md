# AppCo - Password Breach Alert System

A security-focused Angular application that alerts users when their email addresses have been involved in password breaches.

##  Quick Start
bashnpm install --legacy-peer-deps
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

- **Two-state alert system**: White "No alerts" card vs Yellow warning card with breach details
- **Session-based dismissal**: Dismiss alerts that persist for current session
- **Breach details**: Shows date and site name for each breach
- **Responsive design**: Bootstrap 4-based UI

## Key Files

```
src/app/
├── components/
│   ├── login/                 # Login form
│   ├── dashboard/             # Main dashboard
│   ├── cards/alerts-card/     # Breach alerts
│   └── tasks-card/            # Task list
└── app.module.ts              # Main module
## Tech Stack

Angular 16.2.12
Bootstrap 4.1.3
TypeScript 4.9.4
SessionStorage for state

⚠️ Current Limitations

Hardcoded breach data (no real API)
Client-side only authentication
Session-only persistence
"Change Password" button is non-functional

## Future Improvements
High Priority

Real API Integration: Connect to Have I Been Pwned or similar API
Backend Authentication: JWT-based secure auth
Password Change Flow: Complete working password reset
Persistent Storage: Database for user preferences
Email Notifications: Alert users of new breaches

UX Enhancements

Loading States: Spinners and skeleton screens
Dark Mode: System preference + manual toggle
Mobile PWA: Install as native app
Animations: Smooth transitions and feedback
Accessibility: WCAG 2.1 AA compliance

Advanced Features

Multiple Accounts: Monitor multiple email addresses
Security Dashboard: Score, timeline, analytics
2FA: Two-factor authentication
Breach Severity: Color-coded risk levels
Push Notifications: Real-time breach alerts

Polish

Testing: Unit, integration, E2E tests
i18n: Multi-language support
Export: PDF/CSV breach reports
Password Manager Integration: 1Password, LastPass
Browser Extension: Real-time monitoring

## Known Issues

No error handling for edge cases
sessionStorage clears on browser close
Limited browser compatibility testing

##  Development Notes
Built with Angular NgModule architecture. Key challenge was resolving Angular 16/17 configuration conflicts and tsconfig issues that prevented compilation.

## 📄 License

This project was created as a coding challenge and is for educational purposes.

## Credits
- **AI Assistance**: Claude (Anthropic) for debugging support
- **Bootstrap Team**: For the excellent UI framework
- **Angular Team**: For the robust web framework
- **Have I Been Pwned**: Inspiration for breach detection systems

---

## 📧 Contact

For questions or feedback about this implementation, please reach out through the project repository.

---

**Built with ❤️ and lots of debugging by Sincere Brittany and ClaudeAI**