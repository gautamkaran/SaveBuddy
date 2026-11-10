---
layout: default
title: Changelog
last_modified_at: 2026-11-10
nav_order: 9
description: "SaveBuddy release history. See everything that shipped in the v1.0 initial release, what changed, and how each release is published."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
keywords: "SaveBuddy, changelog, releases, version history, v1.0"
---

# Changelog

All notable changes to SaveBuddy. This project follows [Semantic Versioning](https://semver.org/) and the [Keep a Changelog](https://keepachangelog.com/) format: each release documents what was added, changed, fixed, or removed.

## v1.0.0 - Initial release

*Published August 2025 (first public commit).*

The first release of SaveBuddy. It brings the core workflows for saving, organizing, and managing links with a single `tabs` permission and no account required.

### Overview

SaveBuddy is a lightweight Manifest V3 Chrome extension. It works entirely in the browser popup and stores everything locally in `localStorage`, so your links stay on your machine - no account, no cloud sync, no tracking. All you need is a single `tabs` permission to save the tab you're currently viewing.

### Added

- **Save links manually** - type (or paste) a URL and an optional title into the popup and save it. If you leave the title empty, the link is saved as "Untitled Link".
- **Save the active tab** - with one click, save the title and URL of the current Chrome tab without copying anything.
- **Edit saved links** - change the title and URL of any saved link inline; changes are saved automatically.
- **Copy URLs** - copy any saved URL to the clipboard with a single click.
- **Delete individual links** - remove a single link from your list.
- **Delete all links** - clear your entire library, with a confirmation dialog to prevent accidental data loss.
- **Favicons** - saved links show the site's favicon, fetched automatically, with a built-in fallback icon if the favicon can't be loaded.
- **Keyboard shortcut** - press `Alt+S` (suggested default, configurable in Chrome) to open the popup instantly via the `_execute_action` command.
- **Manifest V3** - the extension runs on the modern Manifest V3 architecture with a single `tabs` permission, keeping the permission footprint minimal.

### Implementation

- **Popup UI:** `extension/index.html`
- **Logic:** `extension/index.js`
- **Styling:** `extension/style.css`
- **Manifest:** `extension/manifest.json`

## How releases are documented

New entries are added here as releases ship. If you're contributing and want to add an entry, follow the guidelines in [Contributing](contributing.md); user-facing changes always get a note on this page so existing users can see what's new.

## Versioning

SaveBuddy uses [Semantic Versioning](https://semver.org/). The extension version lives in `extension/manifest.json`:

```json
"version": "1.0"
```

Documentation-only changes are not releases and do not bump the version. A release note appears here only when the extension code changes in a way users can notice.

## How to check your version

1. Open `chrome://extensions/`.
2. Find **SaveBuddy**.
3. Read the version under the extension name.

You can also open `extension/manifest.json` and read the `version` field directly. If the number does not match the latest entry on this page, you are running an older copy.

## What is not a release

The documentation site changes more often than the extension. New guides, clearer installation steps, privacy details, and SEO fixes are published continuously without a version bump. Those changes live in the repository history; the changelog below only covers shipped extension code.

## Reporting a problem with a release

If a release breaks something:

1. Check the troubleshooting sections in [Installation](installation.md) and [Usage](usage.md).
2. Search the [issue tracker](https://github.com/gautamkaran/SaveBuddy/issues).
3. Open a new issue with your Chrome version, operating system, and the steps that reproduce the problem.

For security issues, use the private process on the [Security](security.md) page instead of a public issue.