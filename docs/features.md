---
layout: default
title: Features
nav_order: 2
---

# Features

SaveBuddy v1.0 focuses on a small, focused set of link-management features.
Each feature below is implemented in the current release.

## Save a link manually

Save any URL with an optional title.

- **How it works:** enter a URL in the **Enter URL** field and select
  **SAVE LINK**. The **Optional title** field is optional — if left empty, the
  link is saved with the title `Untitled Link`.
- **Important:** a URL is required. SaveBuddy shows an error message if the
  URL field is empty.

## Save the current tab

Save the title and URL of the currently active Chrome tab with one click.

- **How it works:** open the page you want to save, open SaveBuddy, and select
  **SAVE TAB**. The active tab's title and URL are used automatically.
- **How it is implemented:** SaveBuddy queries the active tab using the Chrome
  `tabs` API. This is why the `tabs` permission is requested (see
  [Permissions](permissions.md)).

## Edit saved links

Update the title or URL of any saved link.

- **How it works:** select the **Edit** (pencil) icon next to a link, change
  the title or URL in the inline inputs, then select **Save**. Use **Cancel**
  to discard the changes.
- **Important:** a URL is required when saving edits. An empty title falls
  back to `Untitled Link`.

## Copy a URL

Copy any saved URL to the clipboard.

- **How it works:** select the **Copy** icon next to a link. The URL is copied
  to the clipboard and a confirmation message is shown.

## Delete a link

Remove a single saved link.

- **How it works:** select the **Delete** (trash) icon next to a link. The
  link is removed immediately. There is no undo for a single link deletion.

## Delete all links

Remove every saved link at once.

- **How it works:** select **DELETE ALL**. A confirmation dialog is shown
  because this action cannot be undone. Select **Delete** to confirm or
  **Cancel** to keep your links.
- **Important:** if there are no links to delete, SaveBuddy shows a
  "There are no links to delete." message instead of the confirmation dialog.

## Website favicons

Saved links display the favicon of their website.

- **How it works:** a favicon is requested for each saved URL. If the favicon
  cannot be loaded, a fallback icon is shown instead.
- **Note:** favicons are requested from Google's favicon service, which means a
  network request is made when a link is rendered. See
  [Privacy](privacy.md) for details.

## Keyboard shortcut

Open the SaveBuddy popup with a keyboard shortcut.

- **How it works:** the extension manifest suggests `Alt+S` as the default
  shortcut. Users can change it at `chrome://extensions/shortcuts`. See
  [Keyboard Shortcuts](keyboard-shortcuts.md).
- **Important:** the suggested key is a default. Chrome may apply it to a
  different extension, or the user may already have assigned it elsewhere.

## Local storage

Saved links are stored locally in the extension's `localStorage` in Chrome.

- **No account required** — SaveBuddy v1.0 has no accounts, no login, and no
  cloud synchronization.
- **Clearing data** — deleting links (or the extension) removes the saved data
  from the browser. See [Privacy](privacy.md) for details.

## What is not included in v1.0

The following are **not** part of SaveBuddy v1.0 and are not advertised as
available features:

- No bookmarks or history management (no `bookmarks` or `history` permissions).
- No cloud sync or multi-device sync.
- No search, tagging, or categorization of saved links.
- No Chrome Web Store listing at this time.
- No import/export of saved links.
