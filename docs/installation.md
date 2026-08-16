---
layout: default
title: Installation
nav_order: 4
---

# Installation

SaveBuddy can currently be installed as an unpacked Chrome extension.

## Requirements

- Google Chrome
- SaveBuddy source code

## 1. Download the repository

```bash
git clone https://github.com/gautamkaran/SaveBuddy.git
```

Or download the repository as a ZIP file.

## 2. Open Chrome Extensions

Go to:

```text
chrome://extensions/
```

## 3. Enable Developer mode

Turn on **Developer mode**.

## 4. Load unpacked

Select **Load unpacked**.

## 5. Select the extension directory

Select:

```text
SaveBuddy/extension/
```

The extension directory should contain:

```text
extension/
├── manifest.json
├── index.html
├── index.js
├── style.css
└── assets/
    └── icons/
```

## 6. Pin SaveBuddy

Open Chrome's Extensions menu and pin SaveBuddy to your toolbar.

## Updating

After changing the extension files:

1. Open `chrome://extensions/`
2. Find SaveBuddy.
3. Select **Reload**.
