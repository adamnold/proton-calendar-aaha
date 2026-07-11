"use strict";
module.exports = {
  schemaVersion: 2, configured: true,
  repoName: "proton-calendar-aaha", productName: "Proton Calendar",
  appId: "com.adamandhisagents.protoncalendar", executable: "proton-calendar-aaha",
  iconName: "proton-calendar-aaha", profileName: "Proton Calendar",
  legacyProfileNames: [], compatibilityDesktopIds: ["proton-calendar"],
  url: "https://calendar.proton.me", trustedNavigationHosts: ["proton.me"], trustedAuthHosts: [],
  permissions: { notifications: ["calendar.proton.me"], "clipboard-sanitized-write": ["proton.me"] },
  blockedHosts: ["clients2.google.com", "clients4.google.com", "update.googleapis.com", "safebrowsing.googleapis.com", "optimizationguide-pa.googleapis.com", "redirector.gvt1.com", "google-analytics.com", "www.google-analytics.com", "stats.g.doubleclick.net"],
  externalProtocols: ["http:", "https:", "mailto:"], openExternalLinks: true,
  width: 1360, height: 860, category: "Office;Calendar;",
  comment: "Private calendar by Proton", keywords: "calendar;events;proton;"
};
