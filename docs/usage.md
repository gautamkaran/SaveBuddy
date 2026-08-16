---
layout: default
title: Usage
nav_order: 4
---

# Usage

This guide covers the daily SaveBuddy workflow. All actions take place in the
SaveBuddy popup, which opens from the toolbar icon (or the keyboard shortcut).

## The popup layout

- **Optional title** field — enter a title for a link you save manually.
- **Enter URL** field — the URL you want to save.
- **SAVE LINK** — saves the link entered above.
- **SAVE TAB** — saves the currently active Chrome tab.
- **DELETE ALL** — removes every saved link (with confirmation).
- **Link list** — every saved link, newest first, with edit, copy, and delete
  actions.

## Save a link manually

1. Open SaveBuddy from the toolbar.
2. Enter an optional title in the **Optional title** field.
3. Enter the URL in the **Enter URL** field.
4. Select **SAVE LINK**.

The link appears at the top of the list. If no title is entered, the link is
saved as `Untitled Link`. A URL is required — an empty URL shows an error
message.

## Save the current tab

1. Open the page you want to save.
2. Open SaveBuddy.
3. Select **SAVE TAB**.

The active tab's title and URL are saved at the top of the list. This requires
the `tabs` permission so SaveBuddy can read the active tab's title and URL
(see [Permissions](permissions.md)).

## Edit a link

1. Find the saved link in the list.
2. Select the **Edit** (pencil) icon next to the link.
3. Update the title and/or URL in the inline inputs.
4. Select **Save** to apply the changes, or **Cancel** to discard them.

An empty URL is rejected when saving edits. An empty title falls back to
`Untitled Link`.

## Copy a URL

Select the **Copy** icon next to a saved link. The URL is copied to your
clipboard and a confirmation message is shown.

## Delete a link

Select the **Delete** (trash) icon next to a saved link. The link is removed
immediately. There is no undo for a single link deletion.

## Delete all links

1. Select **DELETE ALL**.
2. Confirm the action in the confirmation dialog.

Deleting all links cannot be undone. If there are no links to delete, SaveBuddy
shows a "There are no links to delete." message instead of the dialog.

## Keyboard shortcut

The default suggested shortcut is `Alt+S`. You can change it at:

```text
chrome://extensions/shortcuts
```

See [Keyboard Shortcuts](keyboard-shortcuts.md) for details.
