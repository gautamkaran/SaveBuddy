---
layout: default
title: Keyboard Shortcuts
nav_order: 5
---

# Keyboard Shortcuts

SaveBuddy defines a keyboard shortcut for opening the extension popup. The
shortcut is configured through Chrome, which means users can assign their own
preferred combination.

## Default shortcut

The SaveBuddy manifest suggests **`Alt+S`** as the default shortcut for
opening the extension popup.

> **Important:** `Alt+S` is a *suggested* default. Chrome may already use
> `Alt+S` for another extension or browser function on your system. If the
> shortcut does not work, assign a different one as described below.

## View or change the shortcut

1. Open Chrome's extension shortcuts page:

   ```text
   chrome://extensions/shortcuts
   ```

2. Find **SaveBuddy**.
3. Enter or select the shortcut you want to use for **Activate the extension**
   (the `_execute_action` command), or select **Remove** to clear it.

The new shortcut takes effect immediately.

## How it works

The shortcut is defined in `extension/manifest.json` under the `commands`
section using the built-in `_execute_action` command. When triggered, it opens
the SaveBuddy popup — the same action as clicking the toolbar icon.

## Tips

- Shortcuts are stored and managed by Chrome, not by SaveBuddy. They are
  synced with your Chrome profile if you sign in to Chrome.
- If your shortcut conflicts with another extension, Chrome keeps the shortcut
  for only one of them. Change it at `chrome://extensions/shortcuts`.
- The shortcut opens the popup; it does not save the current tab on its own.
  Use the **SAVE TAB** button inside the popup for that.
