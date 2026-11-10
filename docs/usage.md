---
layout: default
title: Usage
last_modified_at: 2026-11-10
nav_order: 4
description: "Use SaveBuddy step by step: save a link, save the current tab, edit, copy, or delete links from the popup."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
keywords: "SaveBuddy, usage, save link, save tab, edit link, delete link"
---

# Usage

Everything happens in the SaveBuddy popup, which opens from the toolbar icon or the keyboard shortcut.

## The popup, top to bottom

- **Optional title** field - a title for links you save manually.
- **Enter URL** field - the URL you want to save.
- **SAVE LINK** - saves the link you typed above.
- **SAVE TAB** - saves the currently active Chrome tab.
- **DELETE ALL** - removes every saved link (with confirmation).
- **Link list** - your saved links, newest first, each with edit, copy, and delete actions.

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

Click the **Delete** (trash) icon. The link is gone immediately - no undo.

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

## A real workflow: researching a topic

1. Search the web and open the sources you want to keep in tabs.
2. For each source, press `Alt+S` and click **SAVE TAB**.
3. When the reading session ends, open SaveBuddy and rename each link to a short label, for example `MDN - Fetch API` or `Paper - 2024 survey`.
4. Copy the URLs into your notes with the copy icon, or click each link to reopen it.
5. Delete the links you no longer need so the list stays short.

Because links are saved newest-first, the most recent source is always at the top.

## Editing tips

- Keep titles short. The popup shows one line per link, so `Docs - Auth` is easier to scan than a full page title.
- Use a consistent prefix for related links, such as `Work -`, `Read -`, or `Buy -`. SaveBuddy has no folders, so prefixes act like lightweight categories.
- The URL field is stored as typed. SaveBuddy checks that it isn't empty, but it does not normalize or validate the address. Include `https://` so the link opens correctly.
- Editing is inline: click the pencil, change the fields, then click **Save**. **Cancel** leaves the original values untouched.

## Open, copy, or delete

- **Open** - click the link text or URL to open it in a new tab.
- **Copy** - click the copy icon to put the URL on your clipboard without opening the page.
- **Edit** - click the pencil icon to change the title or URL.
- **Delete** - click the trash icon to remove one link immediately.
- **Delete all** - clears the list after a confirmation dialog.

There is no undo for a single delete or for **DELETE ALL**. If a link matters, copy the URL somewhere else before deleting it.

## Keeping the list manageable

SaveBuddy is designed for a short list of links you actually use, not a permanent archive. A few habits keep it useful:

- Delete links after you've used them.
- Rename vague page titles into specific labels.
- Use **DELETE ALL** when a project ends.
- Keep long-term references in Chrome bookmarks or a dedicated bookmark manager.

## Popup behavior

- The popup closes when you click outside it, as with any Chrome extension popup.
- Saving a link does not close the popup, so you can save several links in a row.
- The list re-renders after every save, edit, or delete.
- Everything is stored in `localStorage` under the key `myLinks`; there is no background sync.

## If the popup looks empty

A new install starts with no links. Add one with **SAVE LINK** or **SAVE TAB**. If you had links before and the list is empty, check that you are using the same Chrome profile and that the extension wasn't removed or reloaded from a different folder. See [FAQ](faq.md).
