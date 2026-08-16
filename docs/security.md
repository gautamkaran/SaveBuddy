---
layout: default
title: Security
nav_order: 11
description: "Report a security vulnerability in SaveBuddy, check supported versions, and see what to include in a report."
keywords: "SaveBuddy, security, vulnerability, report"
---

# Security

SaveBuddy asks for one permission and stores data locally, but software can still have bugs. If you find a security issue, please report it privately rather than in the open.

## Supported versions

| Version | Supported |
|---|---|
| v1.x (current) | Yes |
| Older versions | No |

Run the latest release of both the extension and the source code.

## Reporting a vulnerability

**Don't** post security issues publicly — not in the issue tracker, pull requests, or on social media.

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
- A minimal proof of concept — without destructive payloads.

## What to expect

- An acknowledgment that we got your report.
- We'll investigate and may ask for more details.
- Fixes are released as soon as possible; watch the [Changelog](changelog.md) and this page.

## Staying safe

- Only install SaveBuddy from the official repo ([github.com/gautamkaran/SaveBuddy](https://github.com/gautamkaran/SaveBuddy)) or code you've reviewed.
- Check the permissions before installing — SaveBuddy only asks for `tabs` (see [Permissions](permissions.md)).
- Don't paste sensitive URLs into the extension if you're worried about them showing on screen.
