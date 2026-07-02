# Proton Calendar (AAHA)

A native **Proton Calendar desktop app for Linux**, built with Electron
by **Adam And His Agents (AAHA)**. It wraps the official Proton Calendar
web app (`https://calendar.proton.me`) in a clean, standalone window
with its own **stable taskbar icon that KDE Plasma on Wayland will NOT
swap for the generic browser icon**.

Proton officially ships Mail + Calendar together as a single desktop
app; this wrapper gives Calendar its own dedicated window and taskbar
identity — separate from Mail — so you can pin them independently.

> **Unofficial / not affiliated with Proton.** This is a third-party
> wrapper. It is not endorsed by or affiliated with Proton AG. "Proton"
> and "Proton Calendar" are trademarks of Proton AG. See `NOTICE` for
> details. Your use of Proton Calendar remains subject to Proton's own
> Terms of Service.

---

## Why this exists

KDE on Wayland picks an app's panel icon from the window's `app_id`
(WM class) and matches it to a `.desktop` file. Chromium-based PWAs all
share Chromium's identity, so KDE falls back to the generic browser icon.

A real Electron app sets its **own** `app_id` (`app.setName()` + `--class`)
and ships a `.desktop` file whose `StartupWMClass` matches exactly.

---

## Requirements (Fedora / KDE example)

```bash
sudo dnf install nodejs npm fuse fuse-libs
```

(On Debian/Ubuntu: `sudo apt install nodejs npm libfuse2`.)

---

## Build & install

```bash
chmod +x *.sh
./build.sh
./install.sh
```

To remove it later: `./uninstall.sh`

---

## Configuration (`app.config.js`)

| Field                   | Value                                                     |
|-------------------------|-----------------------------------------------------------|
| `url`                   | `https://calendar.proton.me`                              |
| `name`                  | `Proton Calendar`                                         |
| `wmClass`               | `Proton Calendar`                                         |
| `appId`                 | `com.adamandhisagents.protoncalendar`                     |
| `allowedHosts`          | `["calendar.proton.me", "account.proton.me"]` (strict)    |
| `disableHardening`      | `false` (privacy hardening ON)                            |

### About `allowedHosts` being strict

This wrapper deliberately keeps only Calendar + the Proton account/sign-in
subdomain in-app. Clicking a Proton Mail link from an event invite will
bounce to your real browser instead of opening Mail inside the Calendar
window — otherwise you'd end up with a "Calendar" app that's really just
Mail, defeating the purpose of a dedicated Calendar wrapper. If you'd
rather keep the full Proton experience in a single window, edit
`app.config.js` and set `allowedHosts: ["proton.me"]`.

---

## Privacy hardening (on by default)

Chromium background/phone-home subsystems are disabled by default. The
app should only talk to Proton. To opt out, set `disableHardening: true`
in `app.config.js`.

---

## License

Copyright 2026 **Adam And His Agents (AAHA)**. Wrapper code licensed
under the **Apache License, Version 2.0** — see `LICENSE`. See `NOTICE`.
