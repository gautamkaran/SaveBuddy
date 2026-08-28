---
layout: default
title: Keyboard Shortcuts
nav_order: 5
description: "SaveBuddy keyboard shortcut: the suggested Alt+S default, and how to view or change shortcuts in Chrome."
image: "/assets/images/savebuddy-icon.png"
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
