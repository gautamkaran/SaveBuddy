# Contributing to SaveBuddy

Thanks for your interest in contributing to SaveBuddy. This project is small
and focused, so contributions that keep it simple and easy to maintain are
very welcome.

Please review the [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Getting started

1. Fork and clone the repository:

   ```bash
   git clone https://github.com/gautamkaran/SaveBuddy.git
   cd SaveBuddy
   ```

2. Create a branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes. The extension lives in the `extension/` directory:

   ```text
   extension/
   ├── manifest.json
   ├── index.html
   ├── index.js
   ├── style.css
   └── assets/icons/
   ```

4. Test the extension in Chrome:
   1. Open `chrome://extensions/`.
   2. Enable **Developer mode**.
   3. Select **Load unpacked** and choose the `extension/` directory.
   4. Exercise the popup (save, edit, copy, delete, delete all) and reload the
      extension after editing files.

5. Submit a pull request against the `main` branch.

## Guidelines

- Keep the extension simple and focused.
- Follow the existing code style.
- Preserve the behavior of documented features.
- Test changes in Chrome before opening a pull request.
- Update the documentation in `docs/` when behavior changes.
- Add a changelog entry for user-facing changes.
- Keep the permission footprint minimal. Do not add permissions without
  justification.

## Pull request description

Describe in your pull request:

- **What changed** - a short summary.
- **Why it changed** - the problem it solves.
- **How it was tested** - the steps you followed in Chrome.
