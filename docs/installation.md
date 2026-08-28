---
layout: default
title: Installation
nav_order: 3
description: "Install SaveBuddy in Chrome as an unpacked extension: get the source, load the extension folder, and pin it to the toolbar."
image: "/assets/images/savebuddy-icon.png"
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

## Updating

After you change the extension files:

1. Open `chrome://extensions/`.
2. Find SaveBuddy.
3. Click **Reload** on its card.

## Troubleshooting

- **"Manifest file is missing or unreadable"** - make sure you selected the `extension/` folder (the one containing `manifest.json`), not the repo root.
- **Errors on the card** - click **Errors** on the SaveBuddy card to see what's wrong.
- **Changes don't apply** - reload the extension, reopen the popup, and check `chrome://extensions/` for errors.

> Because SaveBuddy runs as an unpacked extension, keep **Developer mode** enabled for it to keep working. Your links are stored locally in Chrome's storage for the extension.
