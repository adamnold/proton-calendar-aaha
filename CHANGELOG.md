# Changelog

Last Updated: 2026-09-15

## v1.3.0 — 2026-09-15

- Updated to exact Electron 44.3.0 and refreshed the locked dependency tree.

## v1.2.0 — 2026-07-23

- Reconciled documentation dates and corrected the bundled icon source path.
- Restored the regular Proton Calendar description on the hidden compatibility
  launcher while preserving its stable KDE panel identity and hidden status.
- Made validation builds explicitly non-publishing, added regression coverage,
  and upgraded the GitHub Actions runtimes used by CI.
- Updated the locked build dependency tree to use the patched `fast-uri` 3.1.4
  release.

## v1.1.1 — 2026-07-15

- Added the standard `~/.local/opt/aaha/proton-calendar-aaha` default and
  explicit custom-root installation without changing AppImage execution.
- Added guarded installation receipts, identity markers, and regression tests
  for unsafe paths, mismatches, profile preservation, and purge.
- Made icon generation deterministic by removing variable PNG metadata.

## v1.1.0 — 2026-07-11

- Updated to exact Electron 43.1.0 and the AAHA v2 sandbox, navigation, permission, privacy, reproducible-build, icon, installer, checksum, test, and CI standard.
- Restricted notifications to Proton Calendar origins.

## v1.0.0

- Initial wrapper. Superseded because its Electron runtime is unsupported.
