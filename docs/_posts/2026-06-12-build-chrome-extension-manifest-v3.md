---
layout: default
title: "How to Build a Minimal Chrome Extension in 30 Minutes (Manifest V3)"
permalink: /blog/build-chrome-extension-manifest-v3/
description: "Build a minimal Manifest V3 Chrome extension from scratch - a step-by-step guide with working code for a link-saving extension like SaveBuddy."
image: "/assets/images/savebuddy-icon.png"
keywords: "build chrome extension, manifest v3 tutorial, chrome extension from scratch, how to make a chrome extension"
---

# How to Build a Minimal Chrome Extension in 30 Minutes (Manifest V3)

You don't need a framework, a build step, or a backend to make a genuinely useful Chrome extension. A popup, a manifest, and a few dozen lines of JavaScript are enough to build something you'll use every day.

This guide walks through a minimal Manifest V3 extension from scratch, end to end - the exact same shape as [SaveBuddy](https://github.com/gautamkaran/SaveBuddy). By the end you'll have a working "save a link" extension you can load in Chrome.

## What you're building

A toolbar popup that lets you:

- Save a URL with an optional title.
- Save the current tab in one click.
- See a list of your saved links with favicons.
- Edit and delete links.

All data lives in the extension's `localStorage`. No servers, no accounts.

## Step 0: The folder structure

Create a folder called `my-extension` with three files:

```text
my-extension/
├── manifest.json
├── index.html
├── index.js
└── style.css
```

## Step 1: manifest.json

The manifest is the extension's identity card. For Manifest V3:

```json
{
  "manifest_version": 3,
  "version": "1.0",
  "name": "My Link Keeper",
  "description": "Save and manage links from a popup.",
  "action": {
    "default_popup": "index.html"
  },
  "permissions": ["tabs"],
  "commands": {
    "_execute_action": {
      "suggested_key": { "default": "Alt+K" }
    }
  }
}
```

Notes:

- `action.default_popup` points to your popup HTML.
- `permissions: ["tabs"]` lets you read the active tab's URL and title.
- `commands` wires up a keyboard shortcut to open the popup.

## Step 2: index.html - the popup

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>My Links</h1>
  <input id="url" type="text" placeholder="Enter URL">
  <input id="title" type="text" placeholder="Optional title">
  <button id="save">SAVE LINK</button>
  <button id="save-tab">SAVE TAB</button>
  <div id="links"></div>
  <button id="delete-all">DELETE ALL</button>
  <script src="index.js"></script>
</body>
</html>
```

## Step 3: index.js - the logic

Every file has a job:

```js
const STORAGE_KEY = 'myLinks';

function getLinks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

function saveLinks(links) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

function render() {
  const container = document.getElementById('links');
  container.innerHTML = '';
  getLinks().forEach((link, i) => {
    const div = document.createElement('div');
    const favicon = `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(link.url)}`;
    div.innerHTML =
      `<img src="${favicon}" alt="">
       <div>
         <strong>${escapeHtml(link.title)}</strong>
         <span>${escapeHtml(link.url)}</span>
       </div>
       <button data-edit="${i}">Edit</button>
       <button data-copy="${i}">Copy</button>
       <button data-delete="${i}">Delete</button>`;
    container.appendChild(div);
  });
}
```

A few important details:

- **`escapeHtml`** - never render user input without escaping; this is a real XSS vector.
- **Favicons via Google's service** - a small network request per link. Fine for a personal tool.
- **`localStorage` as a JSON array** - simple, and it survives popup reopenings.

## Step 4: Load it in Chrome

1. Open `chrome://extensions/`.
2. Toggle **Developer mode** (top-right).
3. Click **Load unpacked** and select `my-extension/`.
4. Pin it to the toolbar. Open it with the shortcut (`Alt+K`) or the icon.

## Step 5: Things people forget

### Error handling
An empty URL should show an error, not silently save junk:

```js
document.getElementById('save').addEventListener('click', () => {
  const url = document.getElementById('url').value.trim();
  if (!url) { alert('Please enter a URL'); return; }
  const links = getLinks();
  links.push({ id: Date.now(), url, title: title.value || 'Untitled Link' });
  saveLinks(links);
  render();
});
```

### Saving the current tab
The `tabs` permission gives you the active tab:

```js
document.getElementById('save-tab').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const links = getLinks();
  links.push({ id: Date.now(), url: tab.url, title: tab.title || 'Untitled Link' });
  saveLinks(links);
  render();
});
```

### Don't re-invent identity
Use `Date.now()` (or `crypto.randomUUID()`) as a stable id so edit and delete targets don't break when the list re-orders.

## What's next

Once the basics work, the same 30-minute foundation can grow into:

- Import/export (JSON file).
- A search box over saved links.
- Better storage via `chrome.storage.local` (survives browser restarts more reliably).
- Publish it on the Chrome Web Store.

## The real-world version

This walkthrough is a simplified version of what [SaveBuddy](/) actually ships - same popup shape, same `localStorage` approach, same single `tabs` permission, MIT licensed. Read the real source in the [GitHub repo](https://github.com/gautamkaran/SaveBuddy), or just install it:

- [Get SaveBuddy](/getting-started/)
- [Installation guide](/installation/)

Build something small, ship it, and iterate - that's the whole trick. Happy hacking!