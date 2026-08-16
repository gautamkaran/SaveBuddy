---
layout: default
title: Changelog
nav_order: 9
description: "SaveBuddy release history, including everything that shipped in the v1.0 initial release."
keywords: "SaveBuddy, changelog, releases, v1.0"
---

# Changelog

All notable changes to SaveBuddy. This project follows [Semantic Versioning](https://semver.org/).

## v1.0.0 — Initial release

The first release of SaveBuddy.

### Added

- Save links manually with an optional title.
- Save the currently active Chrome tab.
- Edit the title and URL of saved links.
- Copy saved URLs to the clipboard.
- Delete individual links.
- Delete all links, with a confirmation dialog.
- Website favicons with a built-in fallback icon.
- Local storage via `localStorage` — no account, no cloud sync.
- Keyboard shortcut support (`Alt+S` suggested default) through Chrome's `_execute_action` command.
- Manifest V3 with a single `tabs` permission.

### Implementation

- Popup UI: `extension/index.html`
- Logic: `extension/index.js`
- Styling: `extension/style.css`
- Manifest: `extension/manifest.json`

## Adding a new release

When adding a release, only document what actually shipped.

```markdown
## vX.Y.Z — <Short summary>

### Added
<!-- New features -->

### Changed
<!-- Behavior changes to existing features -->

### Fixed
<!-- Bug fixes -->

### Removed
<!-- Features that were removed -->
```
