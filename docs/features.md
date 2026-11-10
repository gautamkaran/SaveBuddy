---
layout: default
title: Features
last_modified_at: 2026-11-10
nav_order: 2
description: "Every SaveBuddy v1.0 feature: save a link or the current tab, edit, copy, delete, favicons, keyboard shortcut, and local storage."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
keywords: "SaveBuddy, features, save tab, copy URL, delete links, favicons"
---

# Features

SaveBuddy v1.0 stays small and focused. Every feature below is in the current release.

## Save a link manually

Type a URL in the **Enter URL** field and click **SAVE LINK**. Add a title in the **Optional title** field if you want - leave it empty and it saves as `Untitled Link`. A URL is required; SaveBuddy shows an error if the field is empty.

## Save the current tab

On the page you want to keep, open SaveBuddy and click **SAVE TAB**. It takes the active tab's title and URL automatically. This is why the extension asks for the `tabs` permission - it's the only one ([Permissions](permissions.md)).

## Edit a link

Click the pencil icon next to a link, change the title or URL in place, then click **Save**. An empty URL is rejected; an empty title falls back to `Untitled Link`.

## Copy a URL

Click the **Copy** icon next to a link. The URL goes to your clipboard and you get a confirmation message.

## Delete a link

Click the trash icon next to a link. It's removed immediately - there's no undo for a single link.

## Delete all links

Click **DELETE ALL** and confirm in the dialog. This can't be undone. If there's nothing to delete, you get a "There are no links to delete." message instead.

## Website favicons

Each saved link shows its site's favicon. Favicons are fetched from Google's favicon service when a link is displayed, so rendering a link makes a small network request ([Privacy](privacy.md)).

## Keyboard shortcut

The manifest suggests `Alt+S` to open the popup. You can change it at `chrome://extensions/shortcuts` ([Keyboard Shortcuts](keyboard-shortcuts.md)).

## Local storage

Links are kept in the extension's `localStorage`. No account, no login, no cloud sync. Deleting links - or uninstalling the extension - clears the data ([Privacy](privacy.md)).

## Not in v1.0

- No bookmarks or history management.
- No cloud or multi-device sync.
- No search, tags, or folders.
- No Chrome Web Store listing yet.
- No import/export.

## How the features fit together

A typical session looks like this:

1. You find a page worth keeping and press `Alt+S` to open the popup.
2. Click **SAVE TAB**. The tab's title and URL are added to the top of the list.
3. Later, open the popup, scan the favicons, and click the link you want.
4. Use the pencil icon to rename it to something you'll recognize, or the copy icon to paste the URL somewhere else.
5. Delete links you no longer need, or use **DELETE ALL** for a clean slate.

Every action happens in the popup. There is no background service worker, no content script, and no page injection, so SaveBuddy never runs on the pages you visit.

## Feature details at a glance

| Feature | How it works | Where the data goes |
| --- | --- | --- |
| Save link | Reads the URL and optional title from the popup form | `localStorage` (`myLinks`) |
| Save tab | Reads the active tab's title and URL via the `tabs` permission | `localStorage` (`myLinks`) |
| Edit | Updates the title and URL of one saved item | `localStorage` (`myLinks`) |
| Copy | Writes the saved URL to your clipboard | Clipboard |
| Delete | Removes one item from the list | `localStorage` (`myLinks`) |
| Delete all | Clears the whole list after confirmation | `localStorage` (`myLinks`) |
| Favicons | Requests the site icon from Google's favicon service | Google favicon service |
| Shortcut | Opens the popup with `_execute_action` | Chrome |

## Why the feature set is small

SaveBuddy is deliberately a link keeper, not a bookmark manager. Each missing feature is a trade-off:

- **No sync** keeps the extension free of accounts, servers, and identity data.
- **No tags or folders** keeps saving to one click instead of a filing decision.
- **No search** keeps the popup fast with a short, scannable list.
- **No page clipping** keeps the extension from reading or storing page content.

If you need folders, tags, full-text search, or sync, a larger tool such as Raindrop.io or Pocket is a better fit. See [SaveBuddy vs Alternatives](compare.md) for an honest comparison.

## What the popup does not do

SaveBuddy does not:

- modify Chrome's built-in bookmarks,
- read your browsing history,
- run code on the pages you visit,
- send your saved links anywhere.

Those limits are enforced by the extension's single `tabs` permission and the absence of a backend. See [Permissions](permissions.md) and [Privacy](privacy.md).
