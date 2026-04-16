---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to use Yet Another Rclone Dashboard as a modern rclone GUI for Linux and Windows, including rclone browser access and daemon setup with rclone rcd. -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard is a modern web dashboard for managing `rclone rcd` through a browser-based interface. In this guide, you will learn what the software does, what it requires, and how to set it up on Linux or Windows using supported deployment methods.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you start, make sure your system meets the basic requirements and that `rclone` is already installed.

### Requirements

According to the project repository, Yet Another Rclone Dashboard is designed for `rclone rcd` and recommends **Rclone `v1.72.0` or later**.

| Requirement | Details |
|---|---|
| Operating system | Linux or Windows |
| Main dependency | `rclone` |
| Recommended Rclone version | `v1.72.0` or later |
| Access method | Web browser |
| Default RC port | `5572/tcp` |
| Optional software | `Docker`, `Nginx`, or `Caddy` depending on your setup |

### What the dashboard provides

The upstream project describes Yet Another Rclone Dashboard as a frontend for `rclone rcd`. Based on the available source information, it includes the following capabilities:

| Feature | Description |
|---|---|
| Multiple connection profiles | Connect to different `rclone rcd` instances |
| System information | View Rclone system and status information |
| Remote management | Inspect remotes and import or export Rclone configuration |
| File browser | Browse directories and manage files through the dashboard |

:::info Rclone Requirement
This software is not a standalone storage server. You need a working `rclone` installation and must run `rclone` in daemon mode with `rcd`.
:::

### Download source

The official project source is available on GitHub:

- [Yet Another Rclone Dashboard on GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

At the time of the provided source material, the latest release is `v0.3.8` and includes the asset `yet-another-rclone-dashboard-v0.3.8.zip`.

## Understand how the dashboard works

Yet Another Rclone Dashboard is a static web frontend that connects to the *Rclone remote control API* provided by `rclone rcd`. This means the dashboard itself does not replace `rclone`. Instead, it gives you a cleaner `rclone gui` style experience in your browser.

In practice, you have several ways to use it:

| Method | Use case | Notes |
|---|---|---|
| `--rc-files` | Manual local or server deployment | Serve the extracted dashboard files directly through `rclone rcd` |
| `--rc-web-gui` with fetch URL | Automatic download through Rclone | Lets Rclone fetch the latest dashboard release |
| Reverse proxy | Domain-based access | Useful if you want to publish the dashboard through `Nginx` or `Caddy` |
| External web server | Static file hosting | Serve the frontend separately and connect it to `rclone rcd` |

:::note Browser-Based Access
Because this is a web dashboard, you will access it through your browser after `rclone rcd` is running and correctly configured.
:::

## Download the dashboard files

If you want to use the manual deployment method, first download the latest release archive from the project's GitHub releases page and extract it on your server or local system.

### Linux example

You can download the current release archive with `wget`:

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

Then extract it:

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_dashboard_directory]
```

Replace `[your_dashboard_directory]` with the folder where you want to store the extracted files, for example `/opt/yet-another-rclone-dashboard`.

### Windows example

On Windows, download the `.zip` archive from the GitHub release page and extract it to a folder such as:

```text
C:\yet-another-rclone-dashboard
```

:::tip Keep the Files in a Permanent Location
Do not extract the dashboard into a temporary folder. `rclone rcd` needs ongoing access to the files if you use the `--rc-files` method.
:::

## Start Rclone with the dashboard

Once the files are ready, you can start `rclone rcd` and expose the dashboard.

### Method 1: Manual setup with `--rc-files`

This method uses the extracted dashboard files directly.

#### Linux local example

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Linux server example

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Windows example

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Method 2: Automatic setup with `--rc-web-gui`

This method tells Rclone to fetch the dashboard automatically from the GitHub release API.

#### Local example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote server example

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

:::caution Do Not Expose an Unprotected RC Interface
If you bind `rclone rcd` to `0.0.0.0`, the service may be reachable from other systems. Use `--rc-user` and `--rc-pass` or place it behind a properly configured reverse proxy.
:::

## Important Rclone options

The following options are the most relevant when you set up this dashboard.

| Option | Purpose |
|---|---|
| `--rc-files` | Serves static dashboard files from a local directory |
| `--rc-web-gui` | Enables Rclone's web GUI fetch mechanism |
| `--rc-web-fetch-url` | Specifies the release API endpoint for the dashboard |
| `--rc-no-auth` | Disables authentication, suitable only for trusted local use |
| `--rc-user` | Sets the RC username |
| `--rc-pass` | Sets the RC password |
| `--rc-addr` | Defines the listening address and port |
| `--rc-allow-origin` | Allows browser access from the specified origin |
| `--rc-web-gui-no-open-browser` | Prevents automatic browser launch on headless systems |
| `--rc-user-from-header` | Accepts the authenticated user from a reverse proxy header |

### Placeholder values explained

Use the following placeholders in the examples:

| Placeholder | Meaning |
|---|---|
| `[your_dashboard_directory]` | Folder containing the extracted dashboard files |
| `[your_rc_username]` | Username for `rclone rcd` authentication |
| `[your_rc_password]` | Password for `rclone rcd` authentication |
| `[your_server_ip]` | Public or private IP address of your server |

## Configure browser access

After starting `rclone rcd`, open the dashboard URL in your browser.

### Local access

If you started the service locally on the same machine, open:

```text
http://127.0.0.1:5572
```

### Remote access

If you started the service on a remote Linux or Windows server and allowed external access, open:

```text
http://[your_server_ip]:5572
```

If you use a domain and reverse proxy, open your configured URL instead, such as:

```text
https://[your_domain]
```

:::info Allowed Origin Must Match
The value used with `--rc-allow-origin` should match the address you actually use in your browser. If it does not match, the dashboard may fail to connect correctly.
:::

## Use a reverse proxy

A reverse proxy is useful if you want cleaner URLs, HTTPS, or additional access control.

### Nginx example

The following example serves the extracted static dashboard files through `Nginx`:

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

### Caddy example

The following example serves the static dashboard files through `Caddy`:

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Static Frontend Hosting
These examples serve the frontend files only. You still need a working `rclone rcd` backend that the dashboard can reach.
:::

## Advanced authentication with a reverse proxy

The project also documents an advanced setup where authentication is handled by an external gateway and passed to Rclone with `--rc-user-from-header`.

### Rclone example

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy reverse proxy example

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

:::caution Advanced Authentication Requires Careful Testing
This setup depends on your reverse proxy and authentication gateway forwarding the correct headers. If the header is missing or misconfigured, access may fail or behave unexpectedly.
:::

## Verify the installation

Once everything is running, verify that the dashboard loads correctly.

### Basic checks

Confirm the following:

| Check | Expected result |
|---|---|
| `rclone rcd` process is running | No startup errors in the console or service logs |
| Port `5572` is listening | The service is reachable locally or remotely |
| Browser opens the configured URL | The Yet Another Rclone Dashboard interface loads |
| Authentication works | You can log in if RC authentication is enabled |

### Common issues

| Problem | Possible cause | Suggested action |
|---|---|---|
| Dashboard does not load | Wrong URL or service not running | Verify the `--rc-addr` value and process status |
| Browser connection errors | Port blocked by firewall | Allow inbound access to `5572/tcp` if required |
| Login fails | Wrong `--rc-user` or `--rc-pass` | Restart `rclone rcd` with the correct credentials |
| Frontend opens but API calls fail | `--rc-allow-origin` mismatch | Set the origin to the exact browser URL |
| Remote access is unavailable | Service only bound to `127.0.0.1` | Use `0.0.0.0:5572` if remote access is intended |

:::danger Public Exposure Without Protection
Do not expose the dashboard directly to the internet without authentication or a secure reverse proxy. If you plan to use this as a remote `rclone browser` or manage `rclone google drive` remotes over the network, secure the endpoint first.
:::

## Additional notes for Linux and Windows

### Linux

Linux is usually the easiest environment for long-running `rclone rcd` services. You can run the command manually, through a terminal multiplexer, or as a service depending on your system design.

### Windows

On Windows, make sure the path used with `--rc-files` points to the extracted dashboard directory and that the firewall allows the configured port if you need remote access.

### Docker note

The provided source material mentions Docker as an optional dependency, but it does not include a verified Docker deployment procedure for this project. If you want to use `rclone docker` workflows, review the upstream repository before proceeding rather than assuming a container setup.

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!