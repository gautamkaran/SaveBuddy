---
layout: default
title: Privacy
nav_order: 7
---

# Privacy

SaveBuddy is built around a **local-first** workflow. This page describes how
SaveBuddy v1.0 handles data, based on the extension's source code.

## No account, no sign-in

SaveBuddy does not require an account and has no sign-in or authentication of
any kind. There is no user identity, profile, or personal data collection.

## Where data is stored

Saved links are stored **locally** in your browser using the extension's
`localStorage` (key: `myLinks`). The data stays on your computer in Chrome's
storage for the extension.

- Deleting a link removes it from this local storage.
- **DELETE ALL** clears the stored links.
- Uninstalling the extension removes the data stored by the extension.

## No cloud sync or backend

SaveBuddy v1.0 does **not**:

- provide cloud synchronization between devices,
- send your saved links to a server,
- use a backend service, analytics, or tracking,
- display advertisements.

## Network requests

SaveBuddy v1.0 makes network requests in two cases:

1. **Website favicons** — when a saved link is displayed, a favicon is
   requested from Google's favicon service
   (`https://www.google.com/s2/favicons?sz=64&domain_url=...`). Only the
   saved URL's domain is sent as part of this request. If the request fails, a
   built-in fallback icon is shown.
2. **Google Fonts** — the popup's HTML loads the Inter and Dancing Script
   fonts from `fonts.googleapis.com` / `fonts.gstatic.com`. This happens when
   the popup is opened and depends on your browser's caching.

These requests are made to Google, the provider of the favicon service and the
fonts. SaveBuddy has no first-party servers.

## Permissions

SaveBuddy requests a single permission: `tabs`, which is used only to read the
active tab's title and URL for the **SAVE TAB** feature. See
[Permissions](permissions.md) for details.

## Data you can verify

Everything described on this page can be checked directly in the source code:

- Permissions: `extension/manifest.json`
- Storage logic: `extension/index.js` (`localStorage`, key `myLinks`)
- Favicon requests: `extension/index.js` (Google favicon service URL)
- Fonts: `extension/index.html` (Google Fonts links)

## Summary

| Aspect | SaveBuddy v1.0 |
|---|---|
| Account required | No |
| Cloud sync | No |
| Backend / analytics | No |
| Local storage | Yes (`localStorage`) |
| Network requests | Favicons (Google) and Google Fonts only |
| Data tracked | None |

> SaveBuddy is local-first, but "no network requests at all" would not be an
> accurate claim: favicon and font resources are fetched from Google as
> described above.
