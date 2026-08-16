---
layout: default
title: Privacy
nav_order: 7
description: "SaveBuddy privacy: links stay in local storage, no account or cloud sync, and the only network requests are for favicons and fonts."
image: "/assets/images/savebuddy-icon.png"
keywords: "SaveBuddy, privacy, local storage, no account, no cloud, data"
---

# Privacy

SaveBuddy keeps your data on your computer. There's no account, no cloud, no tracking. Everything below is based on the extension's source code.

## No account, no sign-in

SaveBuddy has no accounts, no login, and no authentication. There's no profile, no identity, and nothing collected about you.

## Where your links are stored

Links are stored **locally** in your browser using the extension's `localStorage` (key: `myLinks`). The data never leaves your machine except for the two network requests below.

- Deleting a link removes it from local storage.
- **DELETE ALL** clears the stored links.
- Uninstalling the extension removes the data it stored.

## No cloud, no backend

SaveBuddy does not:

- sync links between devices,
- send your links to a server,
- use a backend, analytics, or tracking,
- show ads.

## The two network requests

SaveBuddy reaches out to Google in exactly two cases:

1. **Favicons** — when a saved link is shown, a favicon is fetched from Google's favicon service (`https://www.google.com/s2/favicons?sz=64&domain_url=...`). Only the saved URL's domain is sent. If it fails, a built-in fallback icon is shown.
2. **Fonts** — the popup loads the Inter and Dancing Script fonts from Google Fonts when it opens.

These go to Google, which runs the favicon service and the fonts. SaveBuddy has no servers of its own.

## Permissions

SaveBuddy requests a single permission, `tabs`, used only to read the active tab's title and URL for **SAVE TAB**. See [Permissions](permissions.md).

## Verify it in the source

- Permissions: `extension/manifest.json`
- Storage: `extension/index.js` (`localStorage`, key `myLinks`)
- Favicon requests: `extension/index.js`
- Fonts: `extension/index.html`

## Summary

| Aspect | SaveBuddy v1.0 |
|---|---|
| Account required | No |
| Cloud sync | No |
| Backend / analytics | No |
| Local storage | Yes (`localStorage`) |
| Network requests | Favicons and Google Fonts only |
| Data tracked | None |
