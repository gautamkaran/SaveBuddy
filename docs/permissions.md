---
layout: default
title: Permissions
nav_order: 6
---

# Permissions

SaveBuddy requests a minimal set of permissions. This page always reflects the
permissions declared in the current `extension/manifest.json`.

## Permissions requested

| Permission | Purpose |
|---|---|
| `tabs` | Used by the **SAVE TAB** feature to read the title and URL of the currently active tab in the current window. |

## What the extension does not use

SaveBuddy does **not** request or use these common permissions:

| Not used | Why not |
|---|---|
| `storage` | Saved links are kept in the extension's `localStorage`, not the `storage` API. |
| `activeTab` | Not required — the popup uses `tabs` directly. |
| `bookmarks` | SaveBuddy does not read or write bookmarks. |
| `history` | SaveBuddy does not read browsing history. |
| `cookies` / `<all_urls>` | SaveBuddy does not need access to other sites. |

## Verify the permissions yourself

The manifest lives at:

```text
extension/manifest.json
```

It is a Manifest V3 manifest and currently contains a single permission entry:

```json
"permissions": ["tabs"]
```

> Keep this page in sync with the manifest. If a future release adds or
> removes permissions, update the table above.

## Why the `tabs` permission?

The **SAVE TAB** button saves the active tab's title and URL. Reading those
values requires the `tabs` permission. The permission is only used when you
use **SAVE TAB**; it does not enable monitoring of your browsing activity.
