# Proton Calendar for Linux — AAHA

Unofficial Proton Calendar Electron desktop app for Fedora KDE with a stable Wayland taskbar icon.

## Privacy notice

Electron is Chromium-based. The wrapper reduces optional Chromium background traffic and adds no AAHA telemetry, but Proton services, authentication, and CDNs remain required. It cannot promise a fully Google-free or independently auditable runtime. See PRIVACY.md.

Notifications are allowed only for calendar.proton.me and work only while the app is running; this wrapper does not install a background daemon.

Run `./build.sh` and then `./install.sh`. The AppImage can run directly from any
location. Optional desktop integration defaults to
`~/.local/opt/aaha/proton-calendar-aaha`; pass
`--install-root /absolute/path/proton-calendar-aaha` to choose another
per-application root. Normal uninstall preserves `~/.config/Proton Calendar`;
`--purge` removes it only after receipt and marker validation.

This project is unofficial and is not affiliated with Proton.
