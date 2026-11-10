---
layout: default
title: FAQ
last_modified_at: 2026-11-10
nav_order: 8
description: "SaveBuddy FAQ: is it free, do you need an account, where are links stored, how to save, edit, and delete links, and more."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy"
keywords: "SaveBuddy, FAQ, chrome extension, save links, account"
---

# FAQ

## What is SaveBuddy?

A small Chrome extension that saves useful links from a popup in the toolbar, so you can find them again later.

## Is it free?

Yes. SaveBuddy is open source under the MIT License.

## Do I need an account?

No. There's no account and no sign-in.

## Where are my links stored?

Locally in your browser, in the extension's `localStorage`. See [Privacy](privacy.md).

## Do my links sync between devices?

No. SaveBuddy v1.0 has no cloud sync - links stay on the computer where you use the extension.

## How do I save the current tab?

Open SaveBuddy and click **SAVE TAB**. It grabs the active tab's title and URL automatically. See [Usage](usage.md).

## Can I save a link manually?

Yes. Type a URL in the **Enter URL** field and click **SAVE LINK**. Add an optional title in the **Optional title** field; an empty title becomes `Untitled Link`.

## Can I edit a saved link?

Yes. Click the pencil icon next to a link, update the title or URL, and save.

## Can I copy a URL?

Yes. Click the **Copy** icon - the URL goes to your clipboard.

## Can I delete links?

Yes. The trash icon removes one link; **DELETE ALL** removes everything after a confirmation. Deletion can't be undone.

## Is there a keyboard shortcut?

SaveBuddy suggests `Alt+S` to open the popup. Change it at `chrome://extensions/shortcuts`. See [Keyboard Shortcuts](keyboard-shortcuts.md).

## Does it work in Firefox or Safari?

No. It's built as a Chrome (Manifest V3) extension and targets Chrome and Chromium-based browsers.

## Is it on the Chrome Web Store?

Not yet. Install it from source as an unpacked extension - see [Installation](installation.md).

## Does it collect my data?

No accounts, analytics, or tracking. Links stay local. The only network requests are for favicons and Google Fonts - details in [Privacy](privacy.md).

## How do I report a bug?

Open an issue at [github.com/gautamkaran/SaveBuddy/issues](https://github.com/gautamkaran/SaveBuddy/issues). For security issues, see [Security](security.md).

## Can I contribute?

Yes - see [Contributing](contributing.md) or the [CONTRIBUTING.md](https://github.com/gautamkaran/SaveBuddy/blob/main/CONTRIBUTING.md) file in the repo.

## Does SaveBuddy work offline?

Yes. Saving, editing, copying, and deleting links work without a connection. Favicons and web fonts need the internet; if a favicon can't load, SaveBuddy shows a fallback icon.

## How many links can I save?

`localStorage` typically allows about 5-10 MB per origin. Because each link is only a title and URL, that is thousands of links in practice. SaveBuddy is optimized for a short, active list rather than a permanent archive.

## Can I export or back up my links?

Not in v1.0. There is no export, import, or cloud backup. If a list matters, keep the pages in Chrome bookmarks too. An export feature is a reasonable future addition; open an issue if you need it.

## What happens when I uninstall the extension?

Chrome deletes the extension's local storage, including all saved links. Copy anything you need before removing it. Reinstalling starts with an empty list.

## Does it work in Incognito mode?

Only if you enable it for Incognito at `chrome://extensions/`. Incognito uses separate, temporary storage, so links saved there disappear when the incognito session ends. See [Privacy](privacy.md).

## Can I use it in multiple Chrome profiles?

Yes. Each Chrome profile has its own extension storage, so each profile keeps a separate link list. The lists do not sync.

## Does it replace Chrome bookmarks?

No. SaveBuddy does not read or change Chrome's bookmarks. It is a separate, short list for links you want to come back to quickly. Use bookmarks for long-term organization.

## Why does Chrome say it can read my browsing history?

Chrome uses that warning for the `tabs` permission because tab titles and URLs are browsing data. SaveBuddy has no `history` permission, no background worker, and only reads the active tab when you click **SAVE TAB**. See [Permissions](permissions.md).

## How do I update SaveBuddy?

Replace the files in the `extension/` folder with the newer version, then click **Reload** on the extension card at `chrome://extensions/`. Your saved links stay in local storage. See [Installation](installation.md).

## Does it work in Edge, Brave, or Opera?

Chromium-based browsers can usually load the same unpacked folder, but SaveBuddy is built and tested for Chrome. If you try another browser, expect minor UI differences.

## Is there a mobile version?

No. SaveBuddy is a desktop Chrome extension. There is no Android, iOS, Firefox, or Safari version.

## Can I save a link without opening the page?

Yes. Paste the URL into the **Enter URL** field, add an optional title, and click **SAVE LINK**.

## Where is the source code?

The full source is at [github.com/gautamkaran/SaveBuddy](https://github.com/gautamkaran/SaveBuddy), under the MIT License. You can read the manifest, popup, and logic before installing.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SaveBuddy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A small Chrome extension that saves useful links from a popup in the toolbar, so you can find them again later."
      }
    },
    {
      "@type": "Question",
      "name": "Is it free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SaveBuddy is open source under the MIT License."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. There is no account and no sign-in."
      }
    },
    {
      "@type": "Question",
      "name": "Where are my links stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Locally in your browser, in the extension's localStorage under the key myLinks. See the Privacy page for details."
      }
    },
    {
      "@type": "Question",
      "name": "Do my links sync between devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. SaveBuddy v1.0 has no cloud sync. Links stay on the computer where you use the extension."
      }
    },
    {
      "@type": "Question",
      "name": "How do I save the current tab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open SaveBuddy and click SAVE TAB. It grabs the active tab's title and URL automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Can I save a link manually?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Type a URL in the Enter URL field and click SAVE LINK. Add an optional title; an empty title becomes Untitled Link."
      }
    },
    {
      "@type": "Question",
      "name": "Can I edit a saved link?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Click the pencil icon next to a link, update the title or URL, and save."
      }
    },
    {
      "@type": "Question",
      "name": "Can I copy a URL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Click the Copy icon and the saved URL goes to your clipboard."
      }
    },
    {
      "@type": "Question",
      "name": "Can I delete links?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The trash icon removes one link. DELETE ALL removes everything after a confirmation. Deletion cannot be undone."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a keyboard shortcut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SaveBuddy suggests Alt+S to open the popup. Change it at chrome://extensions/shortcuts."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work in Firefox or Safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. It is built as a Chrome Manifest V3 extension and targets Chrome and Chromium-based browsers."
      }
    },
    {
      "@type": "Question",
      "name": "Is it on the Chrome Web Store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not yet. Install it from source as an unpacked extension. See the Installation page."
      }
    },
    {
      "@type": "Question",
      "name": "Does it collect my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No accounts, analytics, or tracking. Links stay local. The only network requests are for favicons and Google Fonts."
      }
    },
    {
      "@type": "Question",
      "name": "How do I report a bug?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open an issue at github.com/gautamkaran/SaveBuddy/issues. For security issues, use the private reporting channel described on the Security page."
      }
    },
    {
      "@type": "Question",
      "name": "Can I contribute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. See the Contributing page or the CONTRIBUTING.md file in the repository."
      }
    },
    {
      "@type": "Question",
      "name": "Does SaveBuddy work offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Saving, editing, copying, and deleting links work without a connection. Favicons and web fonts need the internet."
      }
    },
    {
      "@type": "Question",
      "name": "How many links can I save?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "localStorage typically allows about 5-10 MB per origin, which is thousands of links in practice. SaveBuddy is optimized for a short, active list."
      }
    },
    {
      "@type": "Question",
      "name": "Can I export or back up my links?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not in v1.0. There is no export, import, or cloud backup. Keep important pages in Chrome bookmarks as well."
      }
    },
    {
      "@type": "Question",
      "name": "What happens when I uninstall the extension?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chrome deletes the extension's local storage, including all saved links. Reinstalling starts with an empty list."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work in Incognito mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only if you enable it for Incognito. Incognito uses separate, temporary storage, so links saved there disappear when the session ends."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use it in multiple Chrome profiles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Each Chrome profile has its own extension storage and its own separate link list."
      }
    },
    {
      "@type": "Question",
      "name": "Does it replace Chrome bookmarks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. SaveBuddy does not read or change Chrome's bookmarks. It is a separate short list for links you want to come back to quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Why does Chrome say it can read my browsing history?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chrome uses that warning for the tabs permission because tab titles and URLs are browsing data. SaveBuddy has no history permission and only reads the active tab when you click SAVE TAB."
      }
    },
    {
      "@type": "Question",
      "name": "How do I update SaveBuddy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Replace the files in the extension folder, then click Reload on the extension card at chrome://extensions/. Saved links stay in local storage."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work in Edge, Brave, or Opera?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chromium-based browsers can usually load the same unpacked folder, but SaveBuddy is built and tested for Chrome."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a mobile version?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. SaveBuddy is a desktop Chrome extension. There is no Android, iOS, Firefox, or Safari version."
      }
    },
    {
      "@type": "Question",
      "name": "Can I save a link without opening the page?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Paste the URL into the Enter URL field, add an optional title, and click SAVE LINK."
      }
    },
    {
      "@type": "Question",
      "name": "Where is the source code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The full source is at github.com/gautamkaran/SaveBuddy under the MIT License."
      }
    }
  ]
}
</script>
