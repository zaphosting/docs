---
id: server-linux-cloaude-code-matrix-integration
title: "Software - Claude Code Matrix Integration (Linux/Windows)"
description: "This guide explains how to integrate Claude Code with a self-hosted Matrix chat server on Linux or Windows, enabling seamless AI communication via Matrix clients. Follow this step-by-step setup to enable Claude Code Matrix interaction. -> Learn more now"
sidebar_label: Software - Claude Code Matrix Integration (Linux/Windows)
services:
 - vserver
 - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The Claude Code Matrix Integration plugin allows you to interact with Claude Code sessions through Matrix chat channels. This guide shows you how to set up and configure this integration on Linux or Windows servers, enabling communication between your Matrix client and Claude Code.

## Preparation

### System Requirements

| Component              | Minimum Requirement                      |
|-----------------------|----------------------------------------|
| CPU                   | 1 Core                                 |
| RAM                   | 512 MB                                |
| Disk Space            | 100 MB free                           |
| Operating System      | Linux (any distribution) or Windows with Bun support |
| Network               | Open ports for your Matrix homeserver (default 6167 for Conduit) |

### Software Requirements

- Claude Code version 2.x or later with channels support
- Bun runtime (install via `npm install -g bun` or from [bun.sh](https://bun.sh))
- Self-hosted Matrix homeserver (Conduit recommended, Synapse also supported)
- Matrix client such as Element or FluffyChat

### Accounts and Access

- Administrative access to your Matrix homeserver to create bot accounts and manage rooms
- Access credentials for Claude Code user configuration

:::info Required Knowledge and Access
You should have basic experience with Docker, command line, and Matrix server administration. For Matrix homeserver setup, refer to relevant ZAP-Docs guides or official documentation.
:::

## Installation

### Step 1: Set Up a Matrix Homeserver

You need a self-hosted Matrix homeserver. Choose one of the following options:

#### Option A: Conduit (Recommended)

1. Clone or obtain the `conduit-example/docker-compose.yml` from the Claude Code Matrix Integration repository.
2. Edit the `CONDUIT_SERVER_NAME` environment variable in `docker-compose.yml` to match your domain or hostname.
3. Start the homeserver:

```bash
docker compose up -d
```

4. The homeserver will be available at `http://[your-host]:6167`.

#### Option B: Synapse

If you already run Synapse, you may skip Conduit setup and proceed to create a bot account.

:::tip Reverse Proxy and Firewall
If using a reverse proxy (e.g., Traefik, Caddy), ensure it correctly forwards requests to your homeserver. Also, configure firewall rules to allow inbound traffic on the homeserver port (default 6167 for Conduit).
:::

### Step 2: Create the Bot Account

1. Enable registration temporarily by setting `CONDUIT_ALLOW_REGISTRATION: true` in your homeserver configuration.
2. Register the bot account using the following command, replacing placeholders accordingly:

```bash
curl -X POST https://[your.homeserver]/_matrix/client/v3/register \
  -H "Content-Type: application/json" \
  -d '{"username":"claude","password":"[pick-a-strong-password]","kind":"user"}'
```

3. After successful registration, disable registration by setting `CONDUIT_ALLOW_REGISTRATION: false` and restart the homeserver.

### Step 3: Obtain the Bot Access Token

Log in as the bot to fetch its access token:

```bash
curl -X POST https://[your.homeserver]/_matrix/client/v3/login \
  -H "Content-Type: application/json" \
  -d '{"type": "m.login.password", "identifier": {"type": "m.id.user", "user": "claude"}, "password": "[pick-a-strong-password]"}'
```

Save the `access_token` from the JSON response for later use.

### Step 4: Create a Matrix Room

1. Using your personal Matrix client account, create a private room.
2. Invite the bot account (`@claude:[your.homeserver]`) to the room.
3. Retrieve the internal room ID from the room settings under *Advanced → Internal room ID*.

### Step 5: Install the Plugin

Clone the Claude Code Matrix Integration repository and install dependencies:

```bash
git clone https://github.com/metalchef1/Claude-Connect-Matrix-Integration
cd Claude-Connect-Matrix-Integration
bun install
```

### Step 6: Configure Claude Code with Matrix Credentials

Add the Matrix channel plugin configuration to your Claude Code user config file:

- Linux/Mac: `~/.claude.json`
- Windows: `C:\Users\[your_username]\.claude.json`

Run the following command, replacing placeholders with your actual values:

```bash
claude mcp add matrix -s user \
  -e MATRIX_HOMESERVER_URL=https://[your.homeserver] \
  -e MATRIX_ACCESS_TOKEN=[your_access_token] \
  -e MATRIX_ROOM_ID='![roomid]:[your.homeserver]' \
  -e MATRIX_USER_ID='@claude:[your.homeserver]' \
  -- bun /path/to/claude-channel-matrix/server.ts
```

:::tip Configuration Details
- `MATRIX_HOMESERVER_URL`: URL of your Matrix homeserver.
- `MATRIX_ACCESS_TOKEN`: Access token of the bot account.
- `MATRIX_ROOM_ID`: Internal ID of the Matrix room.
- `MATRIX_USER_ID`: Bot user ID.
:::

### Step 7: Add Yourself to the Allowlist

Start Claude Code, then authorize your Matrix user to interact with the bot:

```
/matrix:access allow @[your_username]:[your.homeserver]
```

### Step 8: Launch Claude Code with Matrix Integration

Start Claude Code with the Matrix integration enabled:

```bash
claude --dangerously-load-development-channels server:matrix
```

## First Start & Verification

After launching Claude Code with the Matrix plugin:

- Observe the console for warnings related to inbound channels.
- Send a message from your Matrix client in the configured room.
- Claude Code should respond within the same Matrix room, confirming successful integration.

:::info Troubleshooting Tips
- Verify that the access token and room ID are correct.
- Ensure firewall and reverse proxy settings allow communication.
- Confirm the bot account is invited and joined to the Matrix room.
:::

## Additional Considerations for ZAP-Hosting Users

- Configure firewall rules in the ZAP-Hosting panel to open required ports.
- If using a reverse proxy on your VPS or dedicated server, configure forwarding for the Matrix homeserver port.
- Regularly update Claude Code and the Matrix homeserver for security and feature improvements.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Conclusion

Congratulations, you have successfully integrated Claude Code with a self-hosted Matrix server on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂