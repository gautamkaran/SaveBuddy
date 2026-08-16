---
layout: default
title: Contributing
nav_order: 10
---

# Contributing

Thanks for your interest in contributing to SaveBuddy. This project is small
and focused, and contributions that keep it simple and easy to maintain are
very welcome.

Please also read the repository-level
[CONTRIBUTING.md](https://github.com/gautamkaran/SaveBuddy/blob/main/CONTRIBUTING.md)
and [CODE_OF_CONDUCT.md](https://github.com/gautamkaran/SaveBuddy/blob/main/CODE_OF_CONDUCT.md).

## Development setup

1. **Clone the repository.**

   ```bash
   git clone https://github.com/gautamkaran/SaveBuddy.git
   cd SaveBuddy
   ```

2. **Create a branch.**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes.** The extension lives in `extension/`:

   ```text
   extension/
   ├── manifest.json
   ├── index.html
   ├── index.js
   ├── style.css
   └── assets/icons/
   ```

## Test in Chrome

SaveBuddy is a Chrome extension, so test it in Chrome:

1. Open `chrome://extensions/`.
2. Enable **Developer mode**.
3. Select **Load unpacked** and choose `extension/`.
4. Exercise your changes in the popup (save, edit, copy, delete, delete all).
5. After editing files, select **Reload** on the SaveBuddy card and test again.

Full instructions: [Installation](installation.md).

## Submitting changes

1. Commit your changes on your branch.
2. Push the branch to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

3. Open a pull request against the `main` branch.

## Guidelines

- Keep the extension simple and focused. Small, understandable changes are
  preferred over large rewrites.
- Follow the existing code style in `extension/`.
- Preserve the existing behavior of documented features unless the change is
  intentional and reflected in the docs.
- Test your changes in Chrome before opening a pull request.
- Update the documentation when behavior changes (files in `docs/`).
- Add a changelog entry for user-facing changes (see
  [Changelog](changelog.md)).
- Do not introduce features that require new permissions unless they are
  justified — keep the permission footprint minimal.

## Pull request description

Describe in your pull request:

- **What changed** — a short summary of the change.
- **Why it changed** — the problem it solves.
- **How it was tested** — the steps you followed in Chrome.
