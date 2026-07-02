// ============================================================
//  APP CONFIG  —  This is the ONLY file you edit per app.
//  Change these values, swap the icon in icons/, rebuild.
// ============================================================
module.exports = {
  // The web app you want to wrap:
  url: "https://calendar.proton.me",

  // Display name (shows in title bar, launcher, panel tooltip):
  name: "Proton Calendar",

  // Wayland/X11 window identity. MUST match productName in package.json
  // and StartupWMClass in the .desktop file so KDE keeps your icon.
  wmClass: "Proton Calendar",

  // Reverse-DNS app id — unique per app.
  appId: "com.adamandhisagents.protoncalendar",

  // Initial window size:
  width: 1280,
  height: 800,

  // Open external links (e.g. links that leave the app's domain)
  // in your real browser instead of inside the app window:
  openExternalInBrowser: true,

  // STRICT: only calendar.proton.me stays in-app. Sign-in flows through
  // account.proton.me and clicking a mail invite link should bounce to
  // your real browser (or the Proton Mail app if you have it installed),
  // NOT open Mail inside this Calendar window. If you'd rather keep the
  // full Proton experience in one window, set this to ["proton.me"].
  allowedHosts: ["calendar.proton.me", "account.proton.me"],

  // Optional custom user-agent. Leave null for Electron's default.
  userAgent: null,

  // PRIVACY HARDENING (default: ON). Disables Chromium's background
  // networking, domain-reliability beacons, component updates, network-time
  // queries, translate, optimization hints, and crash metrics, so the app
  // only talks to Proton. Set to true only if something breaks.
  disableHardening: false
};
