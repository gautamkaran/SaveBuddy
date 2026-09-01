---
layout: default
title: FAQ
nav_order: 8
description: "SaveBuddy FAQ: is it free, do you need an account, where are links stored, how to save, edit, and delete links, and more."
image: "/assets/images/savebuddy-icon.png"
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
      "name": "Is SaveBuddy free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SaveBuddy is open source under the MIT License."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an account to use SaveBuddy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. There's no account and no sign-in."
      }
    },
    {
      "@type": "Question",
      "name": "Where are my SaveBuddy links stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Locally in your browser, in the extension's localStorage. SaveBuddy has no cloud and no sync."
      }
    },
    {
      "@type": "Question",
      "name": "Does SaveBuddy sync links between devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. SaveBuddy v1.0 has no cloud sync - links stay on the computer where you use the extension."
      }
    },
    {
      "@type": "Question",
      "name": "How do I save the current tab in SaveBuddy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open SaveBuddy and click SAVE TAB. It grabs the active tab's title and URL automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Can I save a link manually in SaveBuddy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Type a URL in the Enter URL field and click SAVE LINK. Add an optional title in the Optional title field; an empty title becomes Untitled Link."
      }
    },
    {
      "@type": "Question",
      "name": "Is SaveBuddy free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SaveBuddy is completely free and open source under the MIT License."
      }
    },
    {
      "@type": "Question",
      "name": "Does SaveBuddy collect my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No accounts, analytics, or tracking. Links stay local. The only network requests are for favicons and Google Fonts."
      }
    },
    {
      "@type": "Question",
      "name": "Is SaveBuddy available on the Chrome Web Store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not yet. Install it from source as an unpacked extension. See the installation guide."
      }
    },
    {
      "@type": "Question",
      "name": "Does SaveBuddy work in Firefox or Safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. It's built as a Chrome (Manifest V3) extension and targets Chrome and Chromium-based browsers."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a keyboard shortcut for SaveBuddy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SaveBuddy suggests Alt+S to open the popup. You can change it at chrome://extensions/shortcuts."
      }
    }
  ]
}
</script>
