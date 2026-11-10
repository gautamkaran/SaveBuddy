---
layout: default
title: Getting Started
last_modified_at: 2026-11-10
nav_order: 1
description: "Get started with SaveBuddy: what it is, what it does, and the first steps to save your first link in Chrome."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
keywords: "SaveBuddy, get started, Chrome extension, save first link"
---

# Getting Started

SaveBuddy is a Chrome extension that saves links from a small popup. The idea is simple: keep a useful page now, find it again later.

## What you can do

- Save a URL with an optional title.
- Save the current tab in one click.
- Edit the title or URL of any saved link.
- Copy a saved URL to the clipboard.
- Delete one link, or all of them.
- Show each site's favicon next to its link.
- Open the popup with a keyboard shortcut.
- Store everything locally in your browser.

## First steps

1. Install SaveBuddy as an unpacked extension - see [Installation](installation.md).
2. Save a link: type a URL and click **SAVE LINK**, or click **SAVE TAB** for the page you're on (see [Usage](usage.md)).
3. Edit, copy, or delete links from the popup whenever you need to.
4. Open it quickly with the shortcut (default `Alt+S`) or the toolbar icon.

## Requirements

- **Chrome** - SaveBuddy is a Manifest V3 extension for Chrome and Chromium browsers.
- **The source code** - there's no Chrome Web Store listing yet, so you install it from source as an unpacked extension.
- **No account** - it works fully offline and local.

## How SaveBuddy works

SaveBuddy is a popup-only extension. When you click the toolbar icon or press `Alt+S`, Chrome opens `extension/index.html` in a small window. The popup reads and writes one `localStorage` key called `myLinks`, then renders the list you see.

There is no background worker, no content script, and no remote server. That means:

- The popup only runs while it is open.
- Your links are available offline.
- Nothing is sent anywhere except favicon and font requests (see [Privacy](privacy.md)).

## A five-minute test drive

1. **Install** the extension from the `extension/` folder ([Installation](installation.md)).
2. Open any page you want to keep, for example a documentation page or a recipe.
3. Press `Alt+S`, then click **SAVE TAB**. The page appears at the top of the list.
4. Open a new tab, then open SaveBuddy again. The saved link is still there.
5. Click the pencil icon and rename the link to something short and recognizable.
6. Click the link to open it, or click the copy icon to paste the URL elsewhere.
7. Use the trash icon to remove it when you're done.

If every step works, SaveBuddy is set up correctly.

## Everyday workflow ideas

- **Research:** save each source as you read, then edit titles to `Author - Topic` so the list stays readable.
- **Shopping:** save product pages and rename them with the price or size.
- **Learning:** keep docs, tutorials, and practice problems in one list instead of dozens of tabs.
- **Work:** save tickets, dashboards, and internal docs you reopen every week.

Because links are local, the list is private to that Chrome profile. It does not follow you to another computer.

## If something doesn't work

- **The popup doesn't open:** check that the extension is enabled at `chrome://extensions/`.
- **SAVE TAB does nothing:** reload the extension and try again; the `tabs` permission must be active.
- **Links disappeared:** confirm you are using the same Chrome profile. Uninstalling the extension removes its storage.
- **Shortcut doesn't respond:** another extension may own `Alt+S`; reassign it at `chrome://extensions/shortcuts`.

More fixes are in [Installation](installation.md) and [FAQ](faq.md).

## Where to go next

- [Installation](installation.md) - get SaveBuddy into Chrome.
- [Usage](usage.md) - the daily workflow.
- [Features](features.md) - the full list of what v1.0 does.
- [Privacy](privacy.md) - where your links live.
- [FAQ](faq.md) - common questions.
