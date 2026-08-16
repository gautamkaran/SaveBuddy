---
layout: default
title: Security
nav_order: 11
---

# Security

SaveBuddy requests a minimal permission set and stores data locally, but like
any software it can still contain bugs. If you believe you have found a
security vulnerability, please report it responsibly.

## Supported versions

Security fixes are made to the latest release of SaveBuddy.

| Version | Supported |
|---|---|
| v1.x (current) | Yes |
| Older versions | No |

Always run the latest version of the extension and the latest version of the
SaveBuddy source code.

## Reporting a vulnerability

**Do not** post security issues publicly in the issue tracker, in pull
requests, or on social media.

Preferred reporting steps:

1. Check whether GitHub **private vulnerability reporting** is enabled for the
   repository. If it is, use the **Report a vulnerability** button on the
   **Security** tab of
   [github.com/gautamkaran/SaveBuddy](https://github.com/gautamkaran/SaveBuddy).
2. Otherwise, open a **private** report by contacting the maintainer through
   GitHub and request a private channel.

> A dedicated security contact email is not configured for this project at
> this time. Until one is published in this page and in the repository's
> `SECURITY.md`, the GitHub repository is the reporting channel. Maintainers
> should update this page once a private reporting channel is configured.

## What to include

To help us respond quickly, include:

- The SaveBuddy version you are using (from `extension/manifest.json`).
- The Chrome/Chromium version and operating system.
- A description of the vulnerability and the impact you observed.
- Reproduction steps, including any sample input.
- If possible, a minimal proof of concept — without destructive payloads.

## What to expect

- You will receive an acknowledgment that the report was received.
- The report will be investigated and you may be asked for more details.
- Fixes will be released as soon as possible. The changelog and this page are
  the place to track updates.

## Security considerations for users

- Only install SaveBuddy from the official repository
  ([github.com/gautamkaran/SaveBuddy](https://github.com/gautamkaran/SaveBuddy))
  or code you have reviewed.
- Review the permissions the extension requests before installing. SaveBuddy
  requests only the `tabs` permission (see
  [Permissions](permissions.md)).
- Do not paste sensitive URLs into the extension if you are concerned about
  them being displayed on screen.
