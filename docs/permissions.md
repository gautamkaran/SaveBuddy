---
layout: default
title: Permissions
last_modified_at: 2026-11-10
nav_order: 6
description: "The permissions SaveBuddy requests: a single 'tabs' permission, what it's used for, and what the extension doesn't use."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
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

Chrome may describe the `tabs` permission as **"Read your browsing history"** in the install prompt. That wording is broader than what SaveBuddy does: the extension has no `history` permission, no background process, and no way to read tabs unless the popup is open and you click **SAVE TAB**.

## How Chrome permissions work

Chrome separates extension permissions into three groups:

- **API permissions** such as `tabs`, `storage`, or `bookmarks`, declared in `manifest.json`.
- **Host permissions** that grant access to specific sites or all sites.
- **Optional permissions** that the extension requests at runtime.

SaveBuddy declares one API permission and no host permissions. It cannot read or modify pages on any site.

## What `tabs` actually allows

The `tabs` permission lets an extension read sensitive tab properties: the tab's URL, title, and favicon URL. SaveBuddy uses it only when you click **SAVE TAB**, to copy the active tab's title and URL into your local list.

It does **not** let SaveBuddy:

- inject scripts into pages,
- read page content,
- watch everything you browse,
- change a tab's URL.

## Why not `activeTab`?

`activeTab` grants temporary access to a page after a user gesture, but it is designed around injecting scripts or reading page content. SaveBuddy only needs the tab's title and URL, so `tabs` is the smaller, more direct choice for this workflow.

## Why no `storage` permission?

Links are stored with the web platform's `localStorage` inside the popup, not Chrome's `chrome.storage` API. That avoids an extra permission while keeping data local to the extension.

## Review the permissions yourself

1. Open `chrome://extensions/`.
2. Find **SaveBuddy** and click **Details**.
3. Check the **Permissions** section. Chrome may show "Read your browsing history" because of `tabs`; there is no separate history or site-access permission.

You can also read the manifest directly:

```json
"permissions": ["tabs"]
```

The full file is at `extension/manifest.json` in the repository.

## If permissions change in a future version

Chrome disables an extension when an update adds new permissions, and asks you to approve them before it runs again. SaveBuddy v1.0 has no host permissions and no plans to add browsing-history or page-content access. See [Security](security.md) for how to report a permission concern.
