---
layout: default
title: Keyboard Shortcuts
last_modified_at: 2026-11-10
nav_order: 5
description: "SaveBuddy keyboard shortcut: the suggested Alt+S default, and how to view or change shortcuts in Chrome."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
keywords: "SaveBuddy, keyboard shortcut, Alt+S, chrome extensions shortcuts"
---

# Keyboard Shortcuts

SaveBuddy uses a keyboard shortcut to open the popup. The shortcut is set up through Chrome, so you can change it to anything you like.

## Default shortcut

The manifest suggests **`Alt+S`** to open the SaveBuddy popup.

> `Alt+S` is only a _suggested_ default. Chrome might already use it for another extension or a browser feature. If it doesn't work for you, assign a different one below.

## View or change the shortcut

1. Open Chrome's shortcuts page:

   ```text
   chrome://extensions/shortcuts
   ```

2. Find **SaveBuddy**.
3. Set the shortcut for **Activate the extension** (the `_execute_action` command), or click **Remove** to clear it.

The new shortcut takes effect immediately.

## How it works

The shortcut is declared in `extension/manifest.json` under `commands`, using Chrome's built-in `_execute_action` command. When triggered, it opens the SaveBuddy popup - the same thing as clicking the toolbar icon.

## Notes

- Chrome stores and manages shortcuts, not SaveBuddy. They sync with your Chrome profile if you sign in.
- If two extensions use the same shortcut, Chrome keeps it for only one of them. Pick a free one at `chrome://extensions/shortcuts`.
- The shortcut only opens the popup. To save the tab you're on, click **SAVE TAB** inside the popup.

## Why `Alt+S`?

`Alt+S` is short, works on Windows and Linux, and does not collide with Chrome's own tab shortcuts. Chrome treats it as a *suggested* key, not a guarantee: if another extension already owns it, Chrome leaves the shortcut unassigned until you choose one.

## Set a shortcut on macOS

The flow is the same, but Chrome shows macOS key names:

1. Open `chrome://extensions/shortcuts`.
2. Find **SaveBuddy**.
3. Click the shortcut field and press the combination you want, for example `⌥S` (Option+S).
4. Close the page. The shortcut applies immediately.

## Resolve a shortcut conflict

If `Alt+S` does nothing:

1. Open `chrome://extensions/shortcuts`.
2. Look for another extension using `Alt+S`. Chrome highlights conflicts in the list.
3. Clear the other extension's shortcut, or assign SaveBuddy a different combination.
4. Test the shortcut with the popup closed.

Chrome only allows one extension to own a given combination at a time.

## Shortcut not working: checklist

- The extension is enabled at `chrome://extensions/`.
- SaveBuddy has a shortcut assigned on the shortcuts page.
- The key combination isn't reserved by Chrome or the operating system.
- The popup isn't already open; the shortcut toggles the popup.
- You reloaded the extension after editing `manifest.json`.

## Use SaveBuddy without a shortcut

The toolbar icon always works. Pin SaveBuddy from the puzzle-piece menu, then click the icon whenever you want to save a link. You can also open the popup from the extensions menu without pinning it.

## Change the suggested default in the manifest

Contributors can change the suggested key in `extension/manifest.json` under `commands._execute_action.suggested_key.default`. Chrome only uses the suggestion when the user has not already chosen a shortcut, so existing users keep their own setting.
