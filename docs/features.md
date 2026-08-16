---
layout: default
title: Features
nav_order: 2
description: "Every SaveBuddy v1.0 feature: save a link or the current tab, edit, copy, delete, favicons, keyboard shortcut, and local storage."
keywords: "SaveBuddy, features, save tab, copy URL, delete links, favicons"
---

# Features

SaveBuddy v1.0 stays small and focused. Every feature below is in the current release.

## Save a link manually

Type a URL in the **Enter URL** field and click **SAVE LINK**. Add a title in the **Optional title** field if you want — leave it empty and it saves as `Untitled Link`. A URL is required; SaveBuddy shows an error if the field is empty.

## Save the current tab

On the page you want to keep, open SaveBuddy and click **SAVE TAB**. It takes the active tab's title and URL automatically. This is why the extension asks for the `tabs` permission — it's the only one ([Permissions](permissions.md)).

## Edit a link

Click the pencil icon next to a link, change the title or URL in place, then click **Save**. An empty URL is rejected; an empty title falls back to `Untitled Link`.

## Copy a URL

Click the **Copy** icon next to a link. The URL goes to your clipboard and you get a confirmation message.

## Delete a link

Click the trash icon next to a link. It's removed immediately — there's no undo for a single link.

## Delete all links

Click **DELETE ALL** and confirm in the dialog. This can't be undone. If there's nothing to delete, you get a "There are no links to delete." message instead.

## Website favicons

Each saved link shows its site's favicon. Favicons are fetched from Google's favicon service when a link is displayed, so rendering a link makes a small network request ([Privacy](privacy.md)).

## Keyboard shortcut

The manifest suggests `Alt+S` to open the popup. You can change it at `chrome://extensions/shortcuts` ([Keyboard Shortcuts](keyboard-shortcuts.md)).

## Local storage

Links are kept in the extension's `localStorage`. No account, no login, no cloud sync. Deleting links — or uninstalling the extension — clears the data ([Privacy](privacy.md)).

## Not in v1.0

- No bookmarks or history management.
- No cloud or multi-device sync.
- No search, tags, or folders.
- No Chrome Web Store listing yet.
- No import/export.
