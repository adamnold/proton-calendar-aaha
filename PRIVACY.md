# Privacy and Network Behavior

No AAHA analytics are added. Unnecessary Chromium background, update, reporting, translation, optimization, media-routing, and Secure DNS features are disabled; known Google update/telemetry hosts are blocked.

Calendar and Proton authentication/CDN traffic remains required. Notification permission is limited to calendar.proton.me. The app must remain open to deliver web notifications.

The profile at ~/.config/Proton Calendar contains sessions, calendar web storage, cache, and preferences. Normal uninstall preserves it; --purge removes the local profile without deleting calendars or the Proton account.
