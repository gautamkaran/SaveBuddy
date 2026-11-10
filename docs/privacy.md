---
layout: default
title: Privacy
last_modified_at: 2026-11-10
nav_order: 7
description: "SaveBuddy privacy: links stay in local storage, no account or cloud sync, and the only network requests are for favicons and fonts."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
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

1. **Favicons** - when a saved link is shown, a favicon is fetched from Google's favicon service (`https://www.google.com/s2/favicons?sz=64&domain_url=...`). The saved URL is included in the request so Google can return the right icon. If it fails, a built-in fallback icon is shown.
2. **Fonts** - the popup loads the Inter and Dancing Script fonts from Google Fonts when it opens.

These go to Google, which runs the favicon service and the fonts. SaveBuddy has no servers of its own.

## Permissions

SaveBuddy requests a single permission, `tabs`, used only to read the active tab's title and URL for **SAVE TAB**. See [Permissions](permissions.md).

## Data flow at a glance

| Action | Data involved | Where it goes |
| --- | --- | --- |
| Save a link | URL and optional title | `localStorage` in your browser |
| Save the current tab | Active tab's title and URL | `localStorage` in your browser |
| Edit a link | Updated title and URL | `localStorage` in your browser |
| Copy a link | The saved URL | Your clipboard |
| Show a favicon | The saved URL | Google favicon service |
| Open the popup | Font files | Google Fonts |
| Delete a link | The link's storage entry | Removed locally |

No row sends your full link list anywhere.

## What Google can see

The favicon request includes the saved URL so Google can return the right icon. Google's servers see that request, your IP address, and standard request metadata, just as they would for any website that loads a Google-hosted image. The font request similarly goes to Google Fonts.

SaveBuddy itself has no server, no analytics endpoint, and no telemetry. It does not send your titles, your notes, or the rest of your list.

## How to delete your data

- **One link:** click the trash icon in the popup.
- **Everything:** click **DELETE ALL** and confirm.
- **Uninstall:** remove the extension at `chrome://extensions/`. Chrome deletes the extension's local storage.
- **Clear site data:** removing the extension is the reliable way; clearing normal browsing data does not necessarily touch extension storage.

Because there is no backup, deleting links is permanent.

## Incognito mode

Extensions are off in Incognito by default. If you enable SaveBuddy for Incognito, it runs in a separate incognito context and its storage is discarded when the incognito session ends. Normal and incognito lists are not shared.

## Offline use

Saving, editing, copying, and deleting links work without a network connection. Favicons and web fonts need a connection; when a favicon fails, SaveBuddy shows a built-in fallback icon instead. The popup remains usable offline.

## Verify the claims

Every privacy claim here maps to a file you can read:

- `extension/manifest.json` - one permission, no host permissions, no background worker.
- `extension/index.js` - `localStorage` key `myLinks`, favicon URL construction, no calls to a SaveBuddy server.
- `extension/index.html` - Google Fonts links.
- `extension/style.css` - styling only.

If you find a discrepancy, please report it through [Security](security.md).

## Summary

| Aspect              | SaveBuddy v1.0                 |
| ------------------- | ------------------------------ |
| Account required    | No                             |
| Cloud sync          | No                             |
| Backend / analytics | No                             |
| Local storage       | Yes (`localStorage`)           |
| Network requests    | Favicons and Google Fonts only |
| Data tracked        | None                           |
