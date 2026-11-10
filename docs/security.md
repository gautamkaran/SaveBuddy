---
layout: default
title: Security
last_modified_at: 2026-11-10
nav_order: 11
description: "Report a security vulnerability in SaveBuddy, check supported versions, and see what to include in a report."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
keywords: "SaveBuddy, security, vulnerability, report"
---

# Security

SaveBuddy asks for one permission and stores data locally, but software can still have bugs. If you find a security issue, please report it privately rather than in the open.

## Supported versions

| Version        | Supported |
| -------------- | --------- |
| v1.x (current) | Yes       |
| Older versions | No        |

Run the latest release of both the extension and the source code.

## Reporting a vulnerability

**Don't** post security issues publicly - not in the issue tracker, pull requests, or on social media.

How to report:

1. If **private vulnerability reporting** is enabled for the repo, use the **Report a vulnerability** button on the **Security** tab of [github.com/gautamkaran/SaveBuddy](https://github.com/gautamkaran/SaveBuddy).
2. Otherwise, message the maintainer privately through GitHub and ask for a private channel.

> There's no dedicated security email for this project yet. Until one is set up, the GitHub repo is the reporting channel.

## What to include

To help us respond quickly:

- The SaveBuddy version you're using (from `extension/manifest.json`).
- Your Chrome/Chromium version and operating system.
- What the vulnerability is and the impact you observed.
- Reproduction steps, with sample input if possible.
- A minimal proof of concept - without destructive payloads.

## What to expect

- An acknowledgment that we got your report.
- We'll investigate and may ask for more details.
- Fixes are released as soon as possible; watch the [Changelog](changelog.md) and this page.

## Staying safe

- Only install SaveBuddy from the official repo ([github.com/gautamkaran/SaveBuddy](https://github.com/gautamkaran/SaveBuddy)) or code you've reviewed.
- Check the permissions before installing - SaveBuddy only asks for `tabs` (see [Permissions](permissions.md)).
- Don't paste sensitive URLs into the extension if you're worried about them showing on screen.

## Security model

SaveBuddy's attack surface is intentionally small:

- **No backend.** There is no SaveBuddy server to breach or impersonate.
- **No content scripts.** The extension never runs on the pages you visit.
- **No background worker.** Code only runs while the popup is open.
- **One permission.** `tabs` is used to read the active tab's title and URL.
- **Local data only.** Links live in the extension's `localStorage`.

The main risks are therefore local: another person with access to your Chrome profile, a malicious extension with broad permissions, or a compromised copy of the source.

## What counts as a security issue

- A way to read or modify saved links without access to the Chrome profile.
- A way to make the extension send link data to a third party beyond the documented favicon and font requests.
- A bypass of Chrome's extension permission model.
- Code execution or injection through a saved title or URL.
- A supply-chain issue in the published source.

## What is out of scope

- Someone with physical access to an unlocked Chrome profile reading your links.
- The privacy practices of Google's favicon or font services.
- Missing features such as encryption, sync, or export.
- Issues that require installing a modified copy of the extension.

## Disclosure process

1. Send a private report through the repository's **Security** tab.
2. Include the version, browser, operating system, impact, and reproduction steps.
3. Allow reasonable time to investigate and ship a fix before publishing details.
4. We will credit you in the changelog if you want.

Please do not open a public issue for a vulnerability, and do not include real personal links in a report. Use minimal test data.

## Verifying a copy

Before installing:

1. Compare the repository URL with the one on this site.
2. Read `extension/manifest.json` and confirm the permission list.
3. Check that `extension/index.js` only writes to `localStorage` and Google's favicon endpoint.
4. Prefer a specific commit or release over an unreviewed fork.

## Staying safe on a shared computer

- Use a separate Chrome profile for work or shared machines.
- Lock your operating system account when you step away.
- Remove the extension and its data before handing the computer to someone else.
- Don't save links that contain tokens, private URLs, or personal information.
