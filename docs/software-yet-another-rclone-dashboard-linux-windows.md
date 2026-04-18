---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to use Yet Another Rclone Dashboard as an rclone gui for Linux and Windows, including rclone download and browser-based dashboard access -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard is a modern web dashboard for managing `rclone rcd` through a browser-based interface. In this guide, you will learn what the software does, what it requires, and how you can set it up on Linux or Windows with Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, you need a working installation of [Rclone](https://rclone.org/) because this dashboard is designed to connect to `rclone rcd` rather than run as a standalone backend.

### Requirements

The following requirements are based on the available project information and the provided setup draft.

| Requirement | Details |
| --- | --- |
| Operating system | Linux or Windows |
| Required software | `rclone` |
| Recommended Rclone version | `v1.72.0` or later |
| Optional software | `Nginx`, `Caddy`, or another web server if you want to serve the static files separately |
| Optional build dependency | `Node.js` if you plan to build the project from source |
| Default RC port | `5572/tcp` |

:::info Rclone Is Required
Yet Another Rclone Dashboard is a frontend for `rclone rcd`. You cannot use it without a running Rclone remote control instance.
:::

### Access and network considerations

You should also make sure that the system where you run Rclone allows access to the configured port if you want to open the dashboard remotely.

| Scenario | Recommended bind address | Example URL |
| --- | --- | --- |
| Local-only access | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| Remote access in a network | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| Reverse proxy setup | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution Expose the Dashboard Securely
If you bind Rclone to `0.0.0.0`, the service may become reachable from other systems. You should use authentication and, if possible, a reverse proxy with HTTPS.
:::

## About Yet Another Rclone Dashboard

Yet Another Rclone Dashboard is a web-based frontend for Rclone daemon mode. According to the project repository, it supports connecting to `rclone rcd`, multiple connection profiles, remote inspection, configuration import and export, file browsing, and transfer-related management.

This means you can use it as an `rclone gui` or `rclone browser` for common tasks that would otherwise require direct command-line interaction.

### Project details

| Item | Value |
| --- | --- |
| Name | Yet Another Rclone Dashboard |
| Category | Frontend |
| Source | [GitHub repository](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Latest referenced release | `v0.3.8` |
| Release asset | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Recommended backend | `rclone rcd` |

### Supported usage model

The project information confirms that the dashboard is intended to work with Rclone's remote control mode. The exact operating system-specific packaging behavior is not fully documented in the provided source material, so this guide focuses on the verified deployment methods from the repository draft content.

## Installation methods

You can deploy Yet Another Rclone Dashboard in several ways depending on how you want to access it. The most direct method is to let Rclone serve the dashboard files itself.

### Method 1: Serve the dashboard with `--rc-files`

This method uses extracted dashboard files and tells `rclone rcd` to serve them directly.

#### Download the release files

Download the latest release archive from the project's GitHub releases page:

- [Yet Another Rclone Dashboard releases](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

At the time of the provided reference, the latest release asset is:

- `yet-another-rclone-dashboard-v0.3.8.zip`

Extract the archive to a folder on your server or local system.

:::note Replace Placeholder Paths
In the following commands, replace `[your_dashboard_path]` with the folder that contains the extracted dashboard build files.
:::

#### Linux example

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows example

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote server example with authentication

For a headless server, use authentication and bind to an externally reachable address only if needed.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Method 2: Use Rclone's web GUI fetcher

The provided setup draft also references Rclone's built-in web GUI fetcher. This can automatically download and serve the dashboard without a separate manual extraction step.

#### Linux example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows example

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote server example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Use the Fetcher for Simpler Updates
If you want a simpler `rclone download` workflow for the dashboard files, the fetcher-based method can be more convenient than manually downloading release archives.
:::

### Method 3: Serve the static files with a web server

Because Yet Another Rclone Dashboard is a static web application, you can also serve the frontend separately with a standard web server such as [Nginx](https://nginx.org/) or [Caddy](https://caddyserver.com/).

In this setup, Rclone still provides the backend through `rclone rcd`, while your web server provides the frontend files.

#### Nginx example

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Caddy example

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Separate Frontend and Backend
If you use a separate web server, make sure your frontend can still reach the Rclone RC endpoint. In this case, the `--rc-allow-origin` value becomes especially important.
:::

## Important Rclone options

The following options are the most relevant when you configure Yet Another Rclone Dashboard.

| Option | Purpose |
| --- | --- |
| `--rc-files` | Serves static dashboard files from a local directory |
| `--rc-web-gui` | Enables Rclone's web GUI mechanism |
| `--rc-web-fetch-url` | Defines the release source URL for fetching the dashboard |
| `--rc-serve` | Serves the RC interface over HTTP |
| `--rc-addr` | Sets the listening IP address and port |
| `--rc-no-auth` | Disables authentication |
| `--rc-user` | Sets the RC username |
| `--rc-pass` | Sets the RC password |
| `--rc-allow-origin` | Allows browser access from the specified origin |
| `--rc-web-gui-no-open-browser` | Prevents automatic browser launch |
| `--rc-user-from-header` | Accepts the user from a trusted reverse proxy header |

### Choosing the correct `--rc-allow-origin`

You should set `--rc-allow-origin` to the exact URL you use in your browser.

| Access method | Example value |
| --- | --- |
| Local access | `http://127.0.0.1:5572` |
| Direct IP access | `http://[your_server_ip]:5572` |
| Reverse proxy with HTTPS | `https://[your_domain]` |

:::caution Origin Mismatches Can Break the Dashboard
If `--rc-allow-origin` does not match the actual browser URL, the dashboard may fail to connect to Rclone because of browser security restrictions.
:::

## Advanced reverse proxy setup

If you want to place the dashboard behind an authentication gateway, the provided setup draft includes an advanced example using a reverse proxy and `--rc-user-from-header`.

### Rclone example

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy example

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::danger Only Trust Headers From Your Proxy
You should only use `--rc-user-from-header` when Rclone is bound to a trusted local interface such as `127.0.0.1` and only reachable through your reverse proxy. Otherwise, a client may be able to spoof headers.
:::

## First start and verification

Once you have chosen a deployment method, you can verify that the dashboard is working correctly.

### Start the service

Start `rclone rcd` with your selected command and keep the process running.

### Open the dashboard

Open the matching URL in your browser:

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### Confirm successful access

If everything is configured correctly, you should see the Yet Another Rclone Dashboard interface and be able to connect to your Rclone backend.

You can then use it to inspect remotes, browse files, and manage transfers, depending on your Rclone configuration.

## Troubleshooting

If the dashboard does not load or cannot connect, check the following points.

### Common issues

| Problem | Possible cause | Suggested action |
| --- | --- | --- |
| Browser cannot open the page | Rclone is not running | Start `rclone rcd` again and check the terminal output |
| Dashboard loads but cannot connect | `--rc-allow-origin` is incorrect | Set it to the exact browser URL |
| Remote access fails | Port `5572` is blocked | Open the port in your firewall or use a reverse proxy |
| Authentication fails | Wrong `--rc-user` or `--rc-pass` | Verify your credentials |
| Reverse proxy setup fails | Header or origin mismatch | Check proxy headers and `--rc-allow-origin` |

### Log review

You should always review the Rclone console output first. The provided source material does not include a project-specific log path for Yet Another Rclone Dashboard itself, so the most reliable first step is to inspect the active Rclone process output.

:::tip Prefer HTTPS for Remote Access
If you want to access the dashboard over the internet, you should place it behind a reverse proxy with TLS instead of exposing plain HTTP directly.
:::

## Additional notes

The provided draft mentions optional Docker and source-build scenarios, but the fetched project material does not include verified Docker deployment instructions in the referenced content. Because of that, this guide does not provide a Docker command to avoid documenting unverified behavior.

Likewise, the exact internal build directory name may vary depending on the release archive structure, so you should confirm the extracted folder contents before setting `[your_dashboard_path]`.

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard with Rclone on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!