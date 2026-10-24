---
layout: ../layouts/Prose.astro
title: Install Eddy | Eddy Browser
description: Download the Eddy Browser APK for Android 10 or newer, and get updates automatically with Obtainium.
---

# Install Eddy

Eddy runs on Android 10 or newer. It is not on the Play Store yet, so you install the APK yourself.

## Download

1. Open the [releases page](https://github.com/arcbaseproject/Eddy/releases) on your phone.
2. Under the newest release, tap **Assets**, then the `.apk` file.
3. Open the downloaded file. If Android asks, allow your browser or file manager to install apps.
4. Tap **Install**.

Every Eddy release is a beta, published as a GitHub pre-release.

## Get updates automatically

Eddy does not update itself. [Obtainium](https://obtainium.imranr.dev) can check for new releases and install them for you:

1. In Obtainium, tap **Add App**.
2. Paste `https://github.com/arcbaseproject/Eddy` as the source URL.
3. Turn on **Include prereleases**. Without this setting Obtainium finds no updates, because every release is a pre-release.
4. Tap **Add**, then install.

## Coming from 0.6.14 or older

> **Eddy 0.6.15 and later need a one-time reinstall.** The key that signed 0.6.14 and earlier was lost, so newer versions use a new key. Android will not update an older Eddy to them and shows **"App not installed"**.

To switch:

1. **Save your passwords.** In Eddy, open **Menu > Passwords**, tap **⋮** and choose **Export to CSV**.
2. **Uninstall Eddy.** This deletes your tabs, history and bookmarks.
3. **Install the new version** from the [releases page](https://github.com/arcbaseproject/Eddy/releases).
4. **Restore your passwords.** Open **Menu > Passwords**, tap **⋮**, choose **Import from CSV** and pick the file you exported. Then delete that file: it is not encrypted.

You only need to do this once. Later updates install normally.

## Build it yourself

The source code and build steps are in the [Eddy repository](https://github.com/arcbaseproject/Eddy).
