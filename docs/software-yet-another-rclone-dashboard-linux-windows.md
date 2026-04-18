---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to set up Yet Another Rclone Dashboard, a modern rclone gui and rclone browser for Linux and Windows, using rclone rcd and release files from rclone GitHub -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard is a modern web dashboard for `rclone rcd` that provides a graphical interface for browsing files, viewing remotes, and managing transfers. In this guide, you will learn what the software does, what it requires, and how to run it on Linux or Windows using supported deployment methods.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you start, you need a working installation of [Rclone](https://rclone.org/) because Yet Another Rclone Dashboard is only a frontend for the Rclone remote control daemon.

### Requirements

The following requirements are based on the available project information and setup draft.

| Requirement | Details |
| --- | --- |
| Operating system | Linux or Windows |
| Required software | `rclone` |
| Recommended Rclone version | `v1.72.0` or later |
| Optional software | `Docker`, `Nginx`, or `Caddy` depending on your deployment method |
| Default port | `5572/tcp` |
| Internet access | Required if you want to download releases or use the web fetch method |

### What the dashboard depends on

Yet Another Rclone Dashboard does not replace Rclone. Instead, it connects to `rclone rcd`, which is the *remote control daemon* mode of Rclone.

| Component | Purpose |
| --- | --- |
| Yet Another Rclone Dashboard | Web frontend |
| `rclone rcd` | Backend API and file operations |
| Rclone remotes | Your configured cloud storage connections such as Google Drive |

:::info Rclone Is Required
You cannot use this dashboard on its own. You must have `rclone` installed and run it in daemon mode with the remote control interface enabled.
:::

### Placeholder values used in this guide

Several commands in this guide use placeholders. Replace them with your own values before running the commands.

| Placeholder | Meaning |
| --- | --- |
| `[your_user]` | Username for Rclone remote control authentication |
| `[your_password]` | Password for Rclone remote control authentication |
| `[your_server_ip]` | Public or private IP address of your server |
| `[your_domain]` | Domain name used for reverse proxy access |
| `[your_build_path]` | Path to the extracted dashboard files |

## Available deployment methods

You can run Yet Another Rclone Dashboard in several ways depending on how you want to access it.

| Method | Best for | Notes |
| --- | --- | --- |
| `--rc-files` | Manual deployments | Uses extracted static build files |
| `--rc-web-gui` with `--rc-web-fetch-url` | Quick setup | Lets Rclone fetch the latest dashboard release |
| Web server such as Nginx or Caddy | Custom hosting | Serves the static frontend separately |
| Reverse proxy with external auth | Advanced setups | Useful if you want centralized authentication |

## Download the dashboard release

If you want to use the manual `--rc-files` method or serve the frontend with your own web server, first download the latest release archive from the project's GitHub releases.

Official project source: [Yet Another Rclone Dashboard on GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

At the time of the referenced release data, the latest release is `v0.3.8` and includes the file `yet-another-rclone-dashboard-v0.3.8.zip`.

### Linux download example

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Windows download example

On Windows, download the `.zip` release from the GitHub release page and extract it to a folder such as:

```text
C:\yet-another-rclone-dashboard
```

:::note Release Version Information
The release version may change over time. If a newer version is available, use the current release file from the project's GitHub page instead of the example version shown here.
:::

## Run the dashboard with Rclone rc-files

This is the most direct method if you already downloaded and extracted the frontend files.

### Linux example

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows example

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Local desktop example

If you only want to use the dashboard locally on the same system, you can bind it to `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution Do Not Expose Unauthenticated Rclone
Only use `--rc-no-auth` for local testing on `127.0.0.1`. If you bind Rclone to `0.0.0.0`, you should protect it with authentication or a properly configured reverse proxy.
:::

## Run the dashboard with Rclone web fetch

Rclone can fetch a web GUI automatically, which can simplify deployment if supported by your setup.

### Linux example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows example

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Important flags explained

| Flag | Purpose |
| --- | --- |
| `--rc-web-gui` | Enables web GUI support in Rclone |
| `--rc-web-fetch-url` | Points Rclone to the latest release metadata |
| `--rc-user` | Sets the login username |
| `--rc-pass` | Sets the login password |
| `--rc-addr` | Defines the IP address and port to listen on |
| `--rc-allow-origin` | Allows browser requests from the specified URL |
| `--rc-web-gui-no-open-browser` | Prevents automatic browser launch |

:::tip Match the Origin Exactly
Set `--rc-allow-origin` to the exact URL you use in your browser, including the correct protocol such as `http://` or `https://`. This is especially important when using a reverse proxy.
:::

## Serve the dashboard with a web server

Because Yet Another Rclone Dashboard is a static web application, you can also host it with a standard web server such as Nginx or Caddy.

This approach can be useful if you want to serve the frontend on one port or domain while Rclone runs separately in the background.

### Nginx example

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy example

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### What to keep in mind

If you serve the frontend separately, Rclone still needs to be running with compatible `rc` settings in the background. You must also ensure that browser requests are allowed from your frontend URL.

| Setting | Example |
| --- | --- |
| Frontend URL | `https://[your_domain]` |
| Rclone bind address | `127.0.0.1:5572` or `0.0.0.0:5572` |
| Allowed origin | `https://[your_domain]` |

## Advanced setup with reverse proxy authentication

For advanced environments, you can place the dashboard behind a reverse proxy and use an external authentication gateway. The provided draft references the use of Rclone's `--rc-user-from-header` option for this purpose.

### Rclone example

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
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

:::info Advanced Authentication Setup
This method depends on your reverse proxy and authentication stack. The exact configuration for tools such as `caddy-security` is outside the scope of this guide, but the example above shows how the dashboard can receive an authenticated user header.
:::

## Configure access and security

Before you start using the dashboard, review the most important access settings.

### Recommended configuration values

| Option | Recommendation |
| --- | --- |
| `--rc-user` | Set a dedicated username such as `zaphosting` |
| `--rc-pass` | Use a strong password |
| `--rc-addr` | Use `127.0.0.1:5572` behind a reverse proxy where possible |
| `--rc-allow-origin` | Match the exact URL used in the browser |
| Firewall | Only open `5572/tcp` if direct access is required |

### Security best practices

- Use authentication when exposing the service over a network
- Prefer a reverse proxy with HTTPS for public access
- Limit direct access to `5572/tcp` whenever possible
- Keep Rclone updated if you use it for cloud storage access such as `rclone google drive`

:::danger Public Exposure Risk
Rclone remote control access can provide powerful file and remote management capabilities. Do not expose it publicly without authentication and proper network restrictions.
:::

## Start and verify the dashboard

Once your chosen setup is in place, start `rclone rcd` and open the dashboard in your browser.

### Access examples

| Scenario | URL |
| --- | --- |
| Local access | `http://127.0.0.1:5572` |
| Direct server access | `http://[your_server_ip]:5572` |
| Reverse proxy access | `https://[your_domain]` |

### What you should see

If everything is configured correctly, the Yet Another Rclone Dashboard interface should load and allow you to:

- connect to your Rclone daemon
- inspect configured remotes
- browse files
- view transfers
- review settings and system information

If the page does not load, check the following:

| Check | Why it matters |
| --- | --- |
| Rclone process is running | The dashboard needs the backend daemon |
| Port `5572` is reachable | Required for direct access |
| `--rc-allow-origin` is correct | Prevents browser access issues |
| Username and password are correct | Required for authenticated access |
| Reverse proxy headers are correct | Important for advanced auth setups |

## Troubleshooting

### Browser cannot connect

If your browser cannot open the dashboard, verify that Rclone is listening on the expected address and port.

On Linux, you can check listening ports with tools such as:

```bash
ss -tulpn | grep 5572
```

On Windows, you can use:

```powershell
netstat -ano | findstr 5572
```

### Authentication fails

If login does not work:

- confirm the values used for `--rc-user` and `--rc-pass`
- make sure your reverse proxy is not stripping required headers
- avoid using `--rc-no-auth` on remote or public interfaces

### Frontend loads but actions fail

This usually points to an origin or backend communication problem.

Review these values carefully:

- `--rc-allow-origin`
- `--rc-addr`
- reverse proxy target address
- browser URL used to access the dashboard

:::tip Use Logs for Faster Diagnosis
If the dashboard does not behave as expected, review the Rclone console output first. Authentication, binding, and origin problems are often visible there immediately.
:::

## Software reference

### Project details

| Item | Value |
| --- | --- |
| Name | Yet Another Rclone Dashboard |
| Category | Frontend |
| Source | [GitHub repository](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Referenced release | `v0.3.8` |
| Release asset | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Recommended backend | `rclone v1.72.0` or later |

### Known functionality from the project page

Based on the referenced repository information, the dashboard includes support for the following areas:

- multiple connection profiles
- Rclone system information and status summary
- remotes inspection
- import and export of Rclone configuration
- file browsing and filtering
- transfer-related views

:::note Feature Availability
Feature behavior may change between releases. If you need exact functionality details for a newer version, check the upstream project changelog and release notes on GitHub.
:::

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!