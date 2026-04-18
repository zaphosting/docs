---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Set up Yet Another Rclone Dashboard, a modern rclone gui and rclone browser for Linux and Windows, to manage your rclone daemon securely -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard is a modern web dashboard for `rclone rcd` that gives you a graphical interface to manage remotes, browse files, and review transfers. In this guide, you will learn how to deploy it on Linux or Windows and connect it to your existing Rclone setup.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure your system meets the basic requirements and that Rclone is already installed.

### Requirements

| Component | Requirement |
| --- | --- |
| Operating system | Linux or Windows |
| Rclone version | `v1.72.0` or later recommended |
| Access method | Local shell, SSH, or RDP |
| Default port | `5572/tcp` |
| Optional | Reverse proxy such as Nginx or Caddy |

### What you need before installation

You need the following:

- A working installation of [Rclone](https://rclone.org/)
- At least one configured Rclone remote if you want to access cloud storage such as *rclone Google Drive*
- Access to open or forward port `5572` if you want to connect remotely
- A browser to access the dashboard

:::info Rclone Requirement
Yet Another Rclone Dashboard is only a frontend for `rclone rcd`. It does not replace Rclone itself, so you must install and configure Rclone first.
:::

### Important placeholders used in this guide

The commands below use placeholders that you must replace with your own values.

| Placeholder | Meaning |
| --- | --- |
| `[your_dashboard_path]` | Path where the dashboard files are stored |
| `[your_server_ip]` | Public or private IP address of your server |
| `[your_domain]` | Domain name used for reverse proxy access |
| `[your_rc_user]` | Username for Rclone RC authentication |
| `[your_rc_password]` | Password for Rclone RC authentication |

## About Yet Another Rclone Dashboard

Yet Another Rclone Dashboard is a static web frontend published on [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard). According to the project README, it is designed for `rclone rcd` and supports features such as:

- connecting to Rclone in daemon mode
- managing multiple connection profiles
- inspecting system information and status
- browsing directories
- working with remotes and configuration data

Because it is a frontend, the actual file operations are still handled by Rclone. This means the dashboard depends on a running `rclone rcd` instance.

## Installation Methods

You can deploy the dashboard in several ways depending on how you want to access it. The most common methods are using Rclone directly with static files or letting Rclone fetch the web GUI automatically.

### Installation overview

| Method | Best for | Notes |
| --- | --- | --- |
| `--rc-files` | Manual deployments | You download and extract the dashboard yourself |
| `--rc-web-gui` with `--rc-web-fetch-url` | Quick setup | Rclone fetches the latest dashboard release |
| External web server | Custom hosting | Useful with Nginx or Caddy |
| Reverse proxy with auth gateway | Advanced setups | Best for secured remote access |

## Download the Dashboard Manually

If you want full control over the deployed version, you can download the latest release manually from the project's GitHub releases.

### Linux

Create a directory for the dashboard, download the latest release archive, and extract it.

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

On Windows, download the release archive from the official GitHub release page and extract it into a folder such as:

```text
C:\rclone-dashboard
```

:::note Release Version
At the time of writing, the latest verified release is `v0.3.8`. If a newer release is available, you can use that instead.
:::

## Start the Dashboard with Rclone

Once the files are available, you can start `rclone rcd` and serve the dashboard through Rclone itself.

### Local access on Linux

Use this method if you only want to access the dashboard locally on the same system.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Remote access on Linux

Use this method if you want to access the dashboard from another device over the network.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Local access on Windows

Open Command Prompt or PowerShell and run:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Remote access on Windows

For remote access, run:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution Do Not Expose an Unprotected Rclone GUI
If you bind Rclone to `0.0.0.0`, do not use `--rc-no-auth`. Always protect remote access with authentication or a reverse proxy.
:::

## Use Rclone WebGUI Fetcher

Rclone can also fetch the dashboard automatically from GitHub. This is useful if you do not want to download and extract the files manually.

### Local mode

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Remote mode

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Automatic Updates
This method is convenient if you want Rclone to fetch the latest dashboard release automatically. It is often the quickest option for testing a new rclone gui deployment.
:::

## Serve the Dashboard with a Web Server

Because Yet Another Rclone Dashboard is a static frontend, you can also host it with a standard web server and keep `rclone rcd` running separately in the background.

### Nginx example

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy example

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

This method is useful if you already use a reverse proxy or want cleaner domain-based access for your dashboard app.

## Advanced Reverse Proxy Setup

If you want to secure access through an external authentication layer, you can use a reverse proxy in front of Rclone and forward the authenticated user through a header.

### Rclone command

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy example with forwarded user header

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info Advanced Authentication
The exact authentication gateway implementation depends on your environment. The example above only shows the Rclone and reverse proxy integration pattern. If you use additional software such as an identity provider or Caddy plugin, configure it according to that software's official documentation.
:::

## Configuration Reference

The most important Rclone RC options used with this dashboard are listed below.

| Option | Purpose |
| --- | --- |
| `--rc-files` | Serves the extracted dashboard files |
| `--rc-web-gui` | Enables Rclone WebGUI support |
| `--rc-web-fetch-url` | Fetches the dashboard release metadata from GitHub |
| `--rc-no-auth` | Disables authentication, suitable only for local use |
| `--rc-user` | Sets the Rclone RC username |
| `--rc-pass` | Sets the Rclone RC password |
| `--rc-addr` | Defines the listening address and port |
| `--rc-allow-origin` | Allows browser access from the specified URL |
| `--rc-web-gui-no-open-browser` | Prevents automatic browser launch |
| `--rc-user-from-header` | Accepts the authenticated user from a proxy header |

### Choosing the correct `--rc-allow-origin`

Set `--rc-allow-origin` to the exact URL you use in your browser.

| Access type | Example value |
| --- | --- |
| Local access | `http://127.0.0.1:5572` |
| IP-based remote access | `http://[your_server_ip]:5572` |
| Reverse proxy with HTTPS | `https://[your_domain]` |

:::caution Origin Must Match
If `--rc-allow-origin` does not match the URL used in your browser, the dashboard may fail to load correctly due to browser security restrictions.
:::

## Access and Verify the Dashboard

Once `rclone rcd` is running, open the dashboard in your browser.

### Common access URLs

| Scenario | URL |
| --- | --- |
| Local machine | `http://127.0.0.1:5572` |
| Remote by IP | `http://[your_server_ip]:5572` |
| Reverse proxy | `https://[your_domain]` |

### What to check after startup

After opening the page, verify the following:

- the Yet Another Rclone Dashboard interface loads
- your configured remotes are visible
- file browsing works in the Rclone browser view
- transfer and system information panels respond correctly

If the page does not load, check the Rclone console output first. Authentication errors, origin mismatches, and port binding issues are the most common causes.

## Security Recommendations

Running a dashboard for your cloud storage requires careful security settings, especially if you expose it over the internet.

### Recommended security practices

| Recommendation | Reason |
| --- | --- |
| Use `--rc-user` and `--rc-pass` for remote access | Prevents unauthenticated access |
| Prefer HTTPS through a reverse proxy | Protects credentials in transit |
| Bind to `127.0.0.1` when possible | Reduces exposure |
| Restrict firewall access to `5572/tcp` | Limits attack surface |
| Avoid `--rc-no-auth` on public networks | Prevents open access to your Rclone instance |

:::danger Public Exposure Risk
An exposed and unprotected `rclone rcd` instance can allow access to your configured remotes and files. If you are asking yourself "is rclone safe", the answer depends heavily on how securely you expose and authenticate the service.
:::

## Troubleshooting

If the dashboard does not work as expected, use the checks below.

### The dashboard page does not open

Possible causes:

- `rclone rcd` is not running
- port `5572` is blocked by a firewall
- the service is bound to `127.0.0.1` but you are trying to connect remotely

### The interface loads but actions fail

Possible causes:

- invalid `--rc-user` or `--rc-pass`
- incorrect `--rc-allow-origin`
- Rclone remote configuration is missing or broken

### The dashboard does not load through a reverse proxy

Possible causes:

- proxy target points to the wrong backend
- HTTPS URL does not match `--rc-allow-origin`
- required headers are not passed correctly

### Useful checks

Linux:

```bash
ss -tulpn | grep 5572
```

Windows PowerShell:

```powershell
netstat -ano | findstr 5572
```

Test the local endpoint:

```bash
curl http://127.0.0.1:5572
```

:::tip Check Rclone Logs First
Most startup and connection problems are visible directly in the terminal or service logs where `rclone rcd` is running. Always review those logs before changing your configuration.
:::

## Additional Notes

Yet Another Rclone Dashboard was featured in Self-Host Weekly on 10 April 2026 and is hosted publicly on GitHub. At the time of writing, the project is a frontend-focused solution intended to improve the user experience of managing Rclone through a browser-based dashboard.

Some deployment methods such as Docker may also be possible in custom environments, but no verified Docker deployment instructions were available in the provided source material. For that reason, this guide only covers setup methods that were directly supported by the available project information.

## Conclusion

Congratulations, you have successfully installed and configured Yet Another Rclone Dashboard on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!