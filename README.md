## Ungoogled Chromium Extension Installer

This is a simple extension that wraps the gist pasted in this [issue](https://github.com/Eloston/ungoogled-chromium/issues/226#issuecomment-494147774) in order
to make it easy to install a extensions to the Ungoogled Chromium Browser.

### Build

To build this extension just run: `npm install` and `npm run build`. Or you can download it from the [releases section](https://github.com/enolgor/ungoogled-chromium-extension-installer/releases).

### Install

- [Download](https://github.com/enolgor/ungoogled-chromium-extension-installer/releases) or build the .crx file
- Follow the instructions in the [FAQ](https://ungoogled-software.github.io/ungoogled-chromium-wiki/faq#installing-the-crx-file) of Ungoogled Chromium, but it should be as simple as opening `chrome://extensions` and drag-and-drop the crx file.

### Usage

- Set the flag that allows to prompt for install as covered in the [FAQ](https://ungoogled-software.github.io/ungoogled-chromium-wiki/faq#installing-the-crx-file). Just change `chrome://flags/#extension-mime-request-handling` to `Always prompt for install`.

- Go to the chrome webstore page of the extension (should contain `/detail` in the path, e.g. https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)

- This extension registers a contextual menu, so right click in any part of the page and then `install extension`. It should prompt to request installation.


