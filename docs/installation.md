---
layout: default
title: Installation
nav_order: 3
---

# Installation

SaveBuddy is a Manifest V3 Chrome extension distributed as source code. It is
installed as an **unpacked extension**. There is no Chrome Web Store listing
at this time.

## Requirements

- Google Chrome (or a Chromium-based browser)
- The SaveBuddy source code

## 1. Get the source code

Clone the repository:

```bash
git clone https://github.com/gautamkaran/SaveBuddy.git
```

Or download the repository as a ZIP file and extract it.

## 2. Open the Chrome Extensions page

Open Chrome and go to:

```text
chrome://extensions/
```

## 3. Enable Developer mode

Turn on **Developer mode** using the toggle in the top-right corner of the
extensions page.

## 4. Load the unpacked extension

Select **Load unpacked** and choose the `extension` directory inside the
SaveBuddy repository:

```text
SaveBuddy/extension/
```

The extension directory must contain:

```text
extension/
├── manifest.json
├── index.html
├── index.js
├── style.css
└── assets/
    └── icons/
```

Chrome loads the extension from the `manifest.json` in this directory. After a
successful load, SaveBuddy appears in the **Extensions** list.

## 5. Pin SaveBuddy to the toolbar

1. Select the puzzle-piece (Extensions) icon in the Chrome toolbar.
2. Find **SaveBuddy**.
3. Select the pin icon so SaveBuddy stays visible in the toolbar.

You can now open SaveBuddy from the toolbar and use the keyboard shortcut
(see [Keyboard Shortcuts](keyboard-shortcuts.md)).

## Updating the extension

After you change the extension files:

1. Open `chrome://extensions/`.
2. Find SaveBuddy.
3. Select **Reload** on the SaveBuddy card.

## Troubleshooting

- **"Manifest file is missing or unreadable"** — make sure you selected the
  `extension/` folder (the one containing `manifest.json`), not the repository
  root or an inner folder.
- **"Errors" on the extension card** — select **Errors** on the SaveBuddy card
  to see the error details.
- **Extension not working after editing files** — reload the extension and
  reopen the popup, then open `chrome://extensions/` to check for errors.

> **Note:** because SaveBuddy is installed as an unpacked extension, Chrome
> keeps it working while **Developer mode** stays enabled. The data saved by
> the extension is stored locally in Chrome's storage for the extension.
