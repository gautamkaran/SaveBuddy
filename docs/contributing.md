---
layout: default
title: Contributing
nav_order: 10
description: "Contribute to SaveBuddy: development setup, testing in Chrome, and how to submit a pull request."
image: "/assets/images/savebuddy-icon.png"
keywords: "SaveBuddy, contribute, contributing, pull request, open source"
---

# Contributing

Thanks for wanting to help. SaveBuddy is a small project, so keep contributions simple and easy to maintain.

Also read the repo-level [CONTRIBUTING.md](https://github.com/gautamkaran/SaveBuddy/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/gautamkaran/SaveBuddy/blob/main/CODE_OF_CONDUCT.md).

## Development setup

1. Clone the repo.

   ```bash
   git clone https://github.com/gautamkaran/SaveBuddy.git
   cd SaveBuddy
   ```

2. Create a branch.

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes. The extension lives in `extension/`:

   ```text
   extension/
   ├── manifest.json
   ├── index.html
   ├── index.js
   ├── style.css
   └── assets/icons/
   ```

## Test in Chrome

Since it's a Chrome extension, test in Chrome:

1. Open `chrome://extensions/`.
2. Turn on **Developer mode**.
3. Click **Load unpacked** and pick `extension/`.
4. Try your changes in the popup (save, edit, copy, delete, delete all).
5. After editing files, click **Reload** on the SaveBuddy card and test again.

Full instructions: [Installation](installation.md).

## Submitting changes

1. Commit your changes on your branch.
2. Push to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

3. Open a pull request against `main`.

## Guidelines

- Keep it simple and focused. Small, understandable changes beat big rewrites.
- Match the existing code style in `extension/`.
- Don't silently change documented behavior.
- Test in Chrome before opening a PR.
- Update the docs (files in `docs/`) when behavior changes.
- Add a changelog entry for user-facing changes (see [Changelog](changelog.md)).
- Avoid new permissions unless they're justified — keep the footprint minimal.

## Pull request description

Include:

- **What changed** — a short summary.
- **Why it changed** — the problem it solves.
- **How it was tested** — the steps you followed in Chrome.
