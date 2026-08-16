---
layout: default
title: Usage
nav_order: 4
description: "Use SaveBuddy step by step: save a link, save the current tab, edit, copy, or delete links from the popup."
image: "/assets/images/savebuddy-icon.png"
keywords: "SaveBuddy, usage, save link, save tab, edit link, delete link"
---

# Usage

Everything happens in the SaveBuddy popup, which opens from the toolbar icon or the keyboard shortcut.

## The popup, top to bottom

- **Optional title** field — a title for links you save manually.
- **Enter URL** field — the URL you want to save.
- **SAVE LINK** — saves the link you typed above.
- **SAVE TAB** — saves the currently active Chrome tab.
- **DELETE ALL** — removes every saved link (with confirmation).
- **Link list** — your saved links, newest first, each with edit, copy, and delete actions.

## Save a link manually

1. Open SaveBuddy from the toolbar.
2. Enter a title in the **Optional title** field (optional).
3. Enter the URL in the **Enter URL** field.
4. Click **SAVE LINK**.

The link appears at the top of the list. No title? It saves as `Untitled Link`. Empty URL? You get an error message.

## Save the current tab

1. Open the page you want to keep.
2. Open SaveBuddy.
3. Click **SAVE TAB**.

The active tab's title and URL are saved at the top of the list. This uses the `tabs` permission so SaveBuddy can read the tab's title and URL ([Permissions](permissions.md)).

## Edit a link

1. Find the link in the list.
2. Click the **Edit** (pencil) icon.
3. Update the title and/or URL in the inline inputs.
4. Click **Save** to apply, or **Cancel** to keep things as they were.

An empty URL is rejected when saving edits. An empty title falls back to `Untitled Link`.

## Copy a URL

Click the **Copy** icon next to a link. The URL is copied to your clipboard and you get a confirmation message.

## Delete a link

Click the **Delete** (trash) icon. The link is gone immediately — no undo.

## Delete all links

1. Click **DELETE ALL**.
2. Confirm in the dialog.

This can't be undone. If there's nothing to delete, you get a "There are no links to delete." message instead of the dialog.

## Keyboard shortcut

The suggested default is `Alt+S`. Change it at:

```text
chrome://extensions/shortcuts
```

See [Keyboard Shortcuts](keyboard-shortcuts.md) for details.
