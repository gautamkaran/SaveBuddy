---
layout: default
title: Installation
last_modified_at: 2026-11-10
nav_order: 3
description: "Install SaveBuddy in Chrome as an unpacked extension: get the source, load the extension folder, and pin it to the toolbar."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
keywords: "SaveBuddy, install, Chrome extension, load unpacked, developer mode"
---

# Installation

SaveBuddy is a Manifest V3 extension that ships as source code. You install it as an **unpacked extension** - there's no Chrome Web Store listing yet.

## Requirements

- Google Chrome (or a Chromium-based browser)
- The SaveBuddy source code

## 1. Get the source code

Clone the repository:

```bash
git clone https://github.com/gautamkaran/SaveBuddy.git
```

Or download the repo as a ZIP file and extract it.

## 2. Open the extensions page

In Chrome, go to:

```text
chrome://extensions/
```

## 3. Turn on Developer mode

Use the **Developer mode** toggle in the top-right corner of the extensions page.

## 4. Load the unpacked extension

Click **Load unpacked** and select the `extension` directory inside the repo:

```text
SaveBuddy/extension/
```

That folder should look like this:

```text
extension/
├── manifest.json
├── index.html
├── index.js
├── style.css
└── assets/
    └── icons/
```

Chrome reads the manifest from this folder. When it loads, SaveBuddy shows up in your extensions list.

## 5. Pin SaveBuddy to the toolbar

1. Click the puzzle-piece (Extensions) icon in the Chrome toolbar.
2. Find **SaveBuddy**.
3. Click the pin so it stays visible.

You can now open SaveBuddy from the toolbar or with the keyboard shortcut (see [Keyboard Shortcuts](keyboard-shortcuts.md)).

## Troubleshooting

- **"Manifest file is missing or unreadable"** - make sure you selected the `extension/` folder (the one containing `manifest.json`), not the repo root.
- **Errors on the card** - click **Errors** on the SaveBuddy card to see what's wrong.
- **Changes don't apply** - reload the extension, reopen the popup, and check `chrome://extensions/` for errors.

> Because SaveBuddy runs as an unpacked extension, keep **Developer mode** enabled for it to keep working. Your links are stored locally in Chrome's storage for the extension.

## Install from a ZIP instead of Git

If you don't have Git:

1. Open [github.com/gautamkaran/SaveBuddy](https://github.com/gautamkaran/SaveBuddy).
2. Click **Code** > **Download ZIP**.
3. Extract the ZIP somewhere permanent, such as `Documents\SaveBuddy`.
4. Load the extracted `SaveBuddy/extension` folder with **Load unpacked**.

Don't delete or move the folder after loading it. Chrome reads the extension from that path every time it starts; if the folder disappears, the extension breaks.

## Check that it installed correctly

After loading the extension:

1. The SaveBuddy card appears at `chrome://extensions/` with no error badge.
2. The toolbar icon appears after you pin it.
3. Clicking the icon opens the popup with the title, URL, and save buttons.
4. **SAVE TAB** adds the current page to the list.

If the popup is blank, open the **Errors** button on the extension card and check the console.

## Where your links live

Links are stored in the extension's `localStorage`, not in a file you can open. That means:

- Updating or reloading the extension keeps your links.
- Moving the extension folder can change the extension ID, because Chrome derives it from the folder path. Keep the folder in one place if the list matters.
- Removing the extension or clearing its data deletes the links.

There is no cloud backup in v1.0. If a link list matters, keep the original pages in Chrome bookmarks as well.

## Update the extension

1. Replace the files in the `extension/` folder with the newer version.
2. Open `chrome://extensions/`.
3. Click **Reload** on the SaveBuddy card.
4. Reopen the popup.

Reloading does not clear `localStorage`, so your saved links should remain.

## Uninstall and remove data

1. Open `chrome://extensions/`.
2. Click **Remove** on the SaveBuddy card.
3. Confirm.

Uninstalling removes the extension's local storage. To keep a copy of important links, save them elsewhere first. See [Privacy](privacy.md) for the full data story.

## Common installation questions

**Do I need to keep Developer mode on?** Yes. Unpacked extensions are only loaded while Developer mode is enabled.

**Can I install it from the Chrome Web Store?** Not yet. The source install is the only supported method in v1.0.

**Will Chrome warn me about the extension?** Chrome may show the standard "extensions in developer mode" notice. That is expected for unpacked extensions.

**Does it work in Edge, Brave, or Opera?** Chromium-based browsers can usually load the same folder, but SaveBuddy is tested in Chrome only.
