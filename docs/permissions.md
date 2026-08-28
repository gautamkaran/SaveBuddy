---
layout: default
title: Permissions
nav_order: 6
description: "The permissions SaveBuddy requests: a single 'tabs' permission, what it's used for, and what the extension doesn't use."
image: "/assets/images/savebuddy-icon.png"
keywords: "SaveBuddy, permissions, tabs permission, manifest v3"
---

# Permissions

SaveBuddy asks for as little as possible. This page reflects what's in the current `extension/manifest.json`.

## What it requests

| Permission | Used for                                                      |
| ---------- | ------------------------------------------------------------- |
| `tabs`     | Reading the title and URL of the active tab for **SAVE TAB**. |

That's it. One permission.

## What it doesn't use

| Not used                 | Why not                                                  |
| ------------------------ | -------------------------------------------------------- |
| `storage`                | Links are kept in `localStorage`, not the `storage` API. |
| `activeTab`              | Not needed - the popup uses `tabs` directly.             |
| `bookmarks`              | SaveBuddy doesn't touch your bookmarks.                  |
| `history`                | SaveBuddy doesn't read your history.                     |
| `cookies` / `<all_urls>` | SaveBuddy doesn't need access to other sites.            |

## Check it yourself

The manifest lives at:

```text
extension/manifest.json
```

It's a Manifest V3 manifest with a single permission entry:

```json
"permissions": ["tabs"]
```

## Why the `tabs` permission?

**SAVE TAB** reads the active tab's title and URL, and Chrome requires the `tabs` permission for that. It's only used when you click **SAVE TAB** - it doesn't let anyone watch your browsing.
