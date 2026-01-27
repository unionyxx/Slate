# Slate

Minimal, fast system cleaner for Windows built with native C++ and Direct2D.
No Electron, no bloat. Just works.

<img src="/docs/assets/img/preview.png" width="800" alt="Slate Preview">

## Features

- **Native Performance**: Written in C++17 with Direct2D rendering. ~400KB executable.
- **Deep Cleaning**:
    - **System**: Temp files, logs, crash dumps, prefetch, and Windows updates.
    - **Browsers**: Chrome, Edge, Brave, Opera, and Firefox.
    - **Applications**: Discord, Slack, Spotify, VS Code, Steam, and Adobe.
    - **Development**: npm and pip caches.
- **Safety First**: Intelligent filtering ignores system-critical paths. Files are safely sent to the Recycle Bin by default.

## Usage

Download `Slate.exe` from [Releases](../../releases). Portable and lightweight - no installation required.

1. Right-click and **Run as Administrator** (required for deep system access).
2. Click the **Slate** icon to scan your system.
3. Review the targets and click **Clean** to reclaim space.

**Note:** For best results, please **close your web browsers** before starting the cleaning process.

## Troubleshooting

**"Windows protected your PC" Warning:**
Because Slate is a free, hobbyist tool, it is not digitally signed.
1. Click **More Info**.
2. Click **Run Anyway**.

## License

**Proprietary Freeware.**
Binaries are free to use and redistribute. Source code is private.

Copyright (c) 2026 skyyii. All rights reserved.