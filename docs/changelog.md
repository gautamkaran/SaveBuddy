---
layout: default
title: Changelog
nav_order: 9
---

# Changelog

All notable changes to SaveBuddy are documented here. This project follows
[Semantic Versioning](https://semver.org/).

## v1.0.0 — Initial Release

The first public release of SaveBuddy.

### Added

- Save links manually with an optional title.
- Save the currently active Chrome tab.
- Edit the title and URL of saved links.
- Copy saved URLs to the clipboard.
- Delete individual links.
- Delete all links, with a confirmation dialog.
- Website favicon support with a built-in fallback icon.
- Local storage of saved links via `localStorage` (no account or cloud sync).
- Keyboard shortcut support (`Alt+S` suggested default) via the Chrome
  `_execute_action` command.
- Manifest V3 Chrome extension with a minimal `tabs` permission.

### Implementation details

- Popup UI: `extension/index.html`
- Logic: `extension/index.js`
- Styling: `extension/style.css`
- Manifest: `extension/manifest.json`

## Release template

Use this template when adding a new release. Do **not** list features that are
not yet implemented — only document what is actually in the release.

```markdown
## vX.Y.Z — <Short summary>

### Added
<!-- New functionality introduced in this release -->

### Changed
<!-- Behavior changes to existing features -->

### Fixed
<!-- Bug fixes -->

### Removed
<!-- Features that were removed -->
```
