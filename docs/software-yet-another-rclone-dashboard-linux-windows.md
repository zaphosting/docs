---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to set up Yet Another Rclone Dashboard as a modern rclone gui and rclone browser for Linux and Windows systems. -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard is a modern web dashboard for `rclone rcd` that gives you a graphical interface to browse files, inspect remotes, and manage your Rclone setup. In this guide, you will learn how to deploy it on Linux or Windows and connect it securely to your existing Rclone daemon.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure your system meets the basic requirements and that Rclone is already available.

### Requirements

| Requirement | Details |
|---|---|
| Operating system | Linux or Windows |
| Rclone version | `v1.72.0` or later recommended |
| Access method | Local console, SSH, or RDP |
| Network | Access to the dashboard URL from your browser |
| Default port | `5572/tcp` |

### What you need to know first

Yet Another Rclone Dashboard is not a standalone storage service. It is a frontend for `rclone rcd`, which is Rclone's remote control daemon mode. This means you must start `rclone rcd` with the correct web options so the dashboard can load and communicate with the backend.

:::info Rclone is required
You need a working [Rclone](https://rclone.org/) installation before using this dashboard. If Rclone is not installed yet, install and configure it first.
:::

### Recommended preparation checklist

| Task | Why it matters |
|---|---|
| Install Rclone | Required to run `rclone rcd` |
| Configure at least one remote | Needed if you want to browse cloud storage such as `rclone google drive` |
| Open or forward the required port | Needed for remote browser access |
| Decide on local or remote access | Determines whether authentication is required |

## Understanding how the dashboard works

Yet Another Rclone Dashboard is a static web application that connects to the Rclone remote control API. You can either serve the dashboard files directly through Rclone or host the frontend separately with a web server such as Nginx or Caddy.

### Main features

Based on the published project information, the dashboard can provide the following functions:

| Feature | Description |
|---|---|
| Multiple connection profiles | Connect to different `rclone rcd` instances |
| System information | View Rclone status and environment details |
| Remote inspection | Review available remotes and configuration data |
| File browser | Browse directories and manage files |
| Media preview | Preview supported content |
| Transfers view | Monitor transfer activity |
| Settings interface | Adjust dashboard-related options |

### When to use this dashboard

This project is useful if you want a lightweight `rclone gui` or `rclone browser` instead of working only in the terminal. It can be especially helpful when managing cloud remotes from a VPS, dedicated server, or local Windows system.

## Installation methods

You can deploy Yet Another Rclone Dashboard in multiple ways. The correct option depends on whether you want the simplest setup, a manually managed installation, or a reverse proxy in front of the service.

### Method 1: Serve the dashboard with local files

This method uses the extracted dashboard build with Rclone's `--rc-files` option.

#### Download the release

Download the latest release archive from the project's GitHub releases page:

- GitHub project: [Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- Latest verified release in the provided source material: `v0.3.8`
- Release archive: `yet-another-rclone-dashboard-v0.3.8.zip`

Extract the archive to a location of your choice.

Example locations:

| Platform | Example path |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### Start Rclone on Linux

If you are running the dashboard locally on the same machine and only want local browser access, you can bind it to `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

If you want to access it remotely from another device, use authentication and listen on all interfaces instead.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Start Rclone on Windows

Open `Command Prompt` or `PowerShell` and run:

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

Replace the placeholders with your own values:

| Placeholder | Meaning |
|---|---|
| `[your_rc_username]` | The username used to log in to the Rclone API |
| `[your_rc_password]` | The password used to protect the Rclone API |
| `[your_server_ip]` | The public or private IP address you use to access the dashboard |

:::caution Do not expose an unauthenticated Rclone API
Do not use `--rc-no-auth` together with `0.0.0.0:5572` on an internet-accessible server. This would expose your Rclone control interface without protection.
:::

### Method 2: Use Rclone's WebGUI fetcher

This method allows Rclone to fetch the dashboard automatically instead of manually downloading the build files. It can simplify deployment if you want a quick setup.

#### Local access example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote access example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::note Automatic fetch behavior
The exact storage path used by Rclone for fetched web GUI assets depends on your Rclone environment. If you need full control over files and updates, the manual `--rc-files` method is usually easier to manage.
:::

### Method 3: Serve the frontend with a web server

Because the project is a static web application, you can host the frontend separately with a web server and keep `rclone rcd` running in the background.

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

This approach can be useful if you already use a reverse proxy stack and want to serve the dashboard from a custom domain.

:::tip Reverse proxy best practice
If you use a domain or reverse proxy, set `--rc-allow-origin` to the exact URL you open in your browser, such as `https://[your_domain]`.
:::

### Method 4: Advanced reverse proxy with external authentication

An advanced setup can use an external authentication gateway and pass the authenticated user to Rclone through a header. This is intended for experienced users.

#### Rclone example

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

#### Caddy example

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

:::danger Advanced authentication setup
Header-based authentication should only be used behind a trusted reverse proxy. If misconfigured, it may allow unauthorized access to your Rclone instance.
:::

## Important Rclone options

The following options are the most relevant when deploying Yet Another Rclone Dashboard.

| Option | Purpose |
|---|---|
| `--rc-files` | Serves the extracted dashboard files through Rclone |
| `--rc-web-gui` | Enables web GUI support through Rclone |
| `--rc-web-fetch-url` | Fetches the GUI release metadata from a remote source |
| `--rc-user` | Sets the API username |
| `--rc-pass` | Sets the API password |
| `--rc-no-auth` | Disables authentication |
| `--rc-addr` | Defines the listen address and port |
| `--rc-allow-origin` | Allows browser access from the specified origin |
| `--rc-web-gui-no-open-browser` | Prevents automatic browser launch |
| `--rc-user-from-header` | Accepts the authenticated user from a reverse proxy header |

## Configuration guidance

After choosing an installation method, review the main configuration values before first use.

### Authentication settings

If the dashboard is only used locally on your own machine, unauthenticated local access may be acceptable. For any remote or public-facing setup, you should always use authentication.

| Access type | Recommended setting |
|---|---|
| Local only | `127.0.0.1` with optional `--rc-no-auth` |
| LAN or internet access | `0.0.0.0` with `--rc-user` and `--rc-pass` |
| Reverse proxy with domain | `127.0.0.1` or private bind plus proxy authentication |

### Allowed origin

The `--rc-allow-origin` value must match the URL from which your browser loads the dashboard.

Examples:

| Access URL | Matching `--rc-allow-origin` |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[your_server_ip]:5572` | `http://[your_server_ip]:5572` |
| `https://[your_domain]` | `https://[your_domain]` |

If this value does not match, the browser may block requests and the dashboard may fail to load correctly.

## Starting and verifying the dashboard

Once your command is running, open the configured address in your browser.

### What to expect

If the setup is correct, you should see the Yet Another Rclone Dashboard interface and be able to connect to your configured Rclone daemon.

Typical examples:

| Scenario | URL |
|---|---|
| Local Linux or Windows access | `http://127.0.0.1:5572` |
| Remote IP-based access | `http://[your_server_ip]:5572` |
| Reverse proxy access | `https://[your_domain]` |

### Basic verification steps

1. Start `rclone rcd` with your chosen method.
2. Open the dashboard URL in your browser.
3. Log in if authentication is enabled.
4. Confirm that remotes, file browser functions, or status information are visible.
5. Test a simple read action, such as opening a directory.

## Troubleshooting

If the dashboard does not load or connect correctly, review the following common causes.

### Connection refused

If you receive a connection refused error, check the following:

- `rclone rcd` is actually running
- the correct port `5572` is being used
- the service is listening on the expected interface
- your firewall allows inbound access when needed

### Browser origin or login issues

If the page loads but API requests fail:

- verify `--rc-allow-origin`
- confirm the browser URL exactly matches the allowed origin
- verify `--rc-user` and `--rc-pass`
- make sure your reverse proxy forwards requests correctly

### File path issues

If you use `--rc-files` and the interface does not appear:

- confirm the extracted dashboard files are in the correct directory
- verify the path syntax for Linux or Windows
- make sure the archive contents were extracted, not only downloaded

:::tip Check the Rclone console output
Rclone usually prints useful startup and error information directly in the terminal. Review that output first if the dashboard, `rclone download`, or remote browser functions do not work as expected.
:::

## Security recommendations

A dashboard that controls Rclone can access configured remotes and file operations, so security matters.

| Recommendation | Reason |
|---|---|
| Use authentication for remote access | Protects the Rclone API |
| Bind to `127.0.0.1` when possible | Reduces exposure |
| Use HTTPS behind a reverse proxy | Protects credentials in transit |
| Limit firewall exposure | Reduces attack surface |
| Use strong credentials | Prevents unauthorized access |

:::caution Sensitive remotes
If your Rclone setup includes cloud storage such as Google Drive, exposing the dashboard insecurely may also expose access to those remotes and data.
:::

## Additional project information

The project is published on GitHub and was featured in Self-Host Weekly on 10 April 2026.

| Item | Value |
|---|---|
| Project name | Yet Another Rclone Dashboard |
| Category | Frontend |
| Source | [GitHub repository](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Weekly feature | [Self-Host Weekly (10 April 2026)](https://selfh.st/weekly/2026-04-10/) |
| Verified release from source material | `v0.3.8` |

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!