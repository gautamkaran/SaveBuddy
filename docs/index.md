---
layout: default
title: SaveBuddy Documentation
---

# SaveBuddy

**A simple Chrome extension to save and manage your links.**

SaveBuddy helps you quickly save, edit, copy, and manage useful links directly from Google Chrome.

**Current Version:** `v1.0`

---

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Keyboard Shortcut](#keyboard-shortcut)
- [Permissions](#permissions)
- [Privacy](#privacy)
- [FAQ](#faq)
- [Changelog](#changelog)
- [Source Code](#source-code)

---

# Getting Started

SaveBuddy is a lightweight Chrome extension designed to make saving and managing useful web links simple.

You can save a link manually or save the currently active Chrome tab with one click.

No account is required to use SaveBuddy.

---

# Features

## 🔗 Save Link

Save a URL manually with an optional title.

Enter:
- Optional title
- URL

Then click **SAVE LINK**.

## 🌐 Save Current Tab

Save the currently active Chrome tab with one click.

SaveBuddy automatically saves:
- Current tab title
- Current tab URL

## ✏️ Edit Links

Update an existing saved link by changing its title or URL.

## 📋 Copy URL

Copy a saved URL directly to your clipboard.

## 🗑️ Delete Link

Delete an individual saved link.

## 🧹 Delete All

Remove all saved links at once. SaveBuddy displays a confirmation dialog before deleting all links.

> **Warning:** Deleting all links cannot be undone.

## 🌎 Website Favicons

SaveBuddy can display website favicons next to saved links. If a favicon cannot be loaded, a fallback icon is displayed.

## ⌨️ Keyboard Shortcut

SaveBuddy supports a Chrome keyboard shortcut for quickly opening the extension.

Default shortcut:

**Alt + S**

## 💾 Local Extension Storage

Saved links are stored locally using Chrome extension storage. SaveBuddy does not require an account or cloud synchronization for its core functionality.

---

# Installation

SaveBuddy can currently be installed as an unpacked Chrome extension.

## Requirements

- Google Chrome
- SaveBuddy source code

## Step 1 — Download SaveBuddy

Clone the repository:

```bash
git clone https://github.com/gautamkaran/SaveBuddy.git
```

Or download the repository as a ZIP file from GitHub.

## Step 2 — Open Chrome Extensions

Open Google Chrome and visit:

```text
chrome://extensions/
```

## Step 3 — Enable Developer Mode

Enable **Developer mode**.

## Step 4 — Load Unpacked

Click **Load unpacked**.

## Step 5 — Select the Extension Folder

Select:

```text
SaveBuddy/extension/
```

The selected folder should contain:

```text
extension/
├── manifest.json
├── index.html
├── index.js
├── style.css
└── assets/
    └── icons/
```

## Step 6 — Pin SaveBuddy

Open Chrome's Extensions menu and pin SaveBuddy to the toolbar.

---

# How to Use

## Save a Link

1. Open SaveBuddy.
2. Enter an optional title.
3. Enter the URL.
4. Click **SAVE LINK**.

## Save the Current Tab

1. Open the webpage you want to save.
2. Open SaveBuddy.
3. Click **SAVE TAB**.

## Edit a Link

1. Find the saved link.
2. Click **Edit**.
3. Update the title or URL.
4. Click **Save**.

## Copy a Link

1. Find the saved link.
2. Click **Copy**.
3. The URL will be copied to your clipboard.

## Delete a Link

Click the **Delete** button next to the saved link.

## Delete All Links

1. Click **DELETE ALL**.
2. Confirm the deletion.

---

# Keyboard Shortcut

Default shortcut:

```text
Alt + S
```

To change the shortcut, open:

```text
chrome://extensions/shortcuts
```

Find **SaveBuddy** and configure your preferred shortcut.

---

# Permissions

SaveBuddy uses browser permissions required for its core functionality.

## Active Tab

The `activeTab` permission allows SaveBuddy to access the currently active Chrome tab when the user chooses to save the current page.

This is used by the **SAVE TAB** feature.

## Storage

The `storage` permission allows SaveBuddy to store saved links locally using Chrome extension storage.

## No Account Required

SaveBuddy does not require users to create an account.

---

# Privacy

SaveBuddy follows a local-first approach.

## Local Data

Saved links are stored locally using Chrome extension storage.

## No Account

SaveBuddy does not require an account.

## No Cloud Sync

SaveBuddy v1.0 does not provide cloud synchronization for saved links.

## No Personal Data Required

The core functionality does not require users to provide personal information.

## Website Favicons

SaveBuddy may request favicon resources to display website icons for saved links.

---

# FAQ

## Do I need an account?

No. SaveBuddy does not require an account.

## Where are my saved links stored?

Saved links are stored locally using Chrome extension storage.

## Can I edit saved links?

Yes. Click the edit button next to a saved link.

## Can I save the current Chrome tab?

Yes. Use the **SAVE TAB** button.

## Can I copy a saved URL?

Yes. Click the copy button next to the saved link.

## Can I delete all saved links?

Yes. Click **DELETE ALL** and confirm the deletion.

## Can I change the keyboard shortcut?

Yes. Open:

```text
chrome://extensions/shortcuts
```

## Does SaveBuddy sync links between devices?

No. SaveBuddy v1.0 does not provide cloud synchronization.

---

# Changelog

## v1.0.0 — Initial Release

### Added

- Save links manually
- Save current Chrome tab
- Edit saved links
- Copy saved URLs
- Delete individual links
- Delete all saved links
- Website favicon support
- Keyboard shortcut support
- Local extension storage

## Future Releases

New features, improvements, and bug fixes will be documented here.

Example:

```text
v1.1.0

Added:
- Search saved links
- Categories
- Dark mode

Improved:
- Faster loading
- Better favicon handling

Fixed:
- Minor UI issues
```

---

# Source Code

SaveBuddy is an open-source Chrome extension.

**GitHub Repository:**

https://github.com/gautamkaran/SaveBuddy

---

# Author

Made with ❤️ by **GautamKaran**

https://gautamkaran.com/

---

**SaveBuddy v1.0**
