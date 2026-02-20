---
id: dedicated-linux-openclaw
title: "Setup OpenClaw on a Linux Server - Build Your Personal AI Assistant!"
description: "Discover how to set up and configure OpenClaw for self-hosting to build a personal and powerful open-source AI assistant → Learn more now"
sidebar_label: Install OpenClaw
services:
  - vserver-service-openclaw
  - dedicated-service-openclaw
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[OpenClaw](https://openclaw.ai/) is an AI-powered automation and control platform that allows you to interact with software through a browser-based interface. Instead of manually clicking through menus, navigating user interfaces, or repeating the same workflows over and over again, OpenClaw can execute tasks programmatically and provide remote control capabilities through its web dashboard.

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

What makes OpenClaw especially revolutionary is that it enables a modern “control layer” for applications and systems. Rather than being tied to a local desktop session, OpenClaw can run on a remote machine such as a VPS or Dedicated Server and still be fully manageable from anywhere. This makes it a powerful tool for users who want reliable automation, remote control, and centralized management without needing to keep a computer running locally.

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.



<InlineVoucher />

## Use cases of OpenClaw

OpenClaw can be used in many different everyday scenarios and is suitable for anyone who wants to automate tasks, centralize AI usage, or run a persistent assistant that is always available. 

A common use case is consolidating AI interactions across multiple platforms. Instead of using separate tools for different messaging apps, OpenClaw can act as a single assistant with consistent context and configuration, independent of where it is accessed from.

OpenClaw is also useful for automation. It can help reduce repetitive manual work by handling recurring tasks, organizing information, summarizing content, and providing structured responses.

Another important use case is web automation. By controlling browser sessions through dedicated Chrome or Chromium instances, OpenClaw can interact with web interfaces even when no direct API integration exists.

To support these scenarios, OpenClaw provides a wide range of capabilities, including multi-channel messaging support (such as WhatsApp, Telegram, Slack, and Discord), a gateway-based architecture for managing sessions and channels, optional voice features, an interactive canvas interface, an extensible skills platform, support for multiple AI providers (including OpenAI and Anthropic), device nodes for mobile actions, API key authentication, and persistent workspace and configuration management.

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## Prerequisites

Depending on how you plan to use **OpenClaw**, resource usage can increase quickly.  While basic setups (for example only using the Web UI with minimal automation) run fine on smaller VPS plans, more advanced use cases such as running multiple channels, enabling many skills, or using browser automation can become significantly more resource-intensive and for this case we strongly recommend to use a Dedicated Server.

| Hardware   | Minimum      | ZAP-Hosting Recommendation |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cores | 8 vCPU Cores               |
| RAM        | 4 GB         | 16 GB                      |
| Disk space | 25 GB        | 50 GB                      |

<InlineServiceLink />


## Installation
The installation starts by running the official OpenClaw installer script on your Linux Dedicated Server. Connect to your server via SSH and execute the following command:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

After running the command, an interactive installation script will launch automatically and guide you through the setup. The installer checks your environment, installs missing dependencies and then starts the OpenClaw onboarding process. 

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)


### Platform detection and dependency check

The installer automatically detects your operating system and installs required dependencies if needed.
 For example, if Node.js is missing, it will be installed automatically. No manual action is required.



### Installing required packages

OpenClaw installs required packages using the system package manager. No manual action is required. Once all required packages are installed, the installer continues automatically.

### Installing OpenClaw

Once dependencies have been prepared, the installer downloads and installs the OpenClaw release. As soon as the process has been completed, you should see a confirmation like:

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### OpenClaw onboarding

After OpenClaw has been installed, the onboarding wizard starts automatically.  This onboarding is required to complete the initial configuration and make OpenClaw usable.



First, read the displayed security notice and confirm it to continue. Next, select the onboarding mode. For most users, **QuickStart** is the recommended option.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

After that, choose your model/auth provider. In this example, **OpenAI** is selected. Now enter your OpenAI API key. OpenClaw will store the key locally in its configuration so it can be used for future sessions. Once the API key has been saved, select the default model that OpenClaw should use.

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

In the final steps, you can optionally configure channels (such as Telegram, Discord, or Slack), skills, and hooks.  If you do not want to configure these options right now, you can skip them and continue.

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

If you want to use OpenClaw via Telegram, you first need to create a Telegram bot and obtain its API token.  This is done directly in Telegram using the official **BotFather** account.

Open the chat with **BotFather**, start the creation process by sending `/newbot`, and follow the prompts.  
BotFather will first ask for a display name, then for a username. The username must end with `bot`.

The conversation typically looks like this:

```
User: /newbot 

BotFather: Alright, a new bot. How are we going to call it? Please choose a name for your bot.  

User: ZAP DOCS EXAMPLE

BotFather: Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot. 

User: ZAP_DOCS_EXAMPLE_BOT 

BotFather:  Done! Congratulations on your new bot. You will find it at t.me/ZAP_DOCS_EXAMPLE_BOT. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

After BotFather confirms the bot creation, copy the shown **token** and store it securely.  You will need this token later when connecting Telegram as a channel in the OpenClaw onboarding or configuration.  Anyone with this token can control your bot, so it should never be shared publicly.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

After creating the Telegram bot and saving the token, you can continue the OpenClaw onboarding.  In the next steps, OpenClaw allows you to install **skills** and enable **hooks**. These options are recommended, but they can also be skipped and configured later in the configuration section if you prefer to complete the setup first.

Once onboarding is completed, OpenClaw installs the **Gateway service** automatically.  Finally, select the **Web UI** option so OpenClaw prints the dashboard link. This allows you to access the OpenClaw Control UI and continue managing your setup through the browser.

After that, the onboarding will be marked as completed.  At the end of the setup, OpenClaw also offers to install the **shell completion script**. This is optional, but recommended, as it improves command-line usability by enabling auto-completion for OpenClaw commands. Follow these steps.

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)


<InlineVoucher />


## Configuration

Our VPS and Dedicated Server servers are shipped without a graphical user interface by default. Because of this, OpenClaw runs in headless mode and exposes its Control UI only locally on the server on port `18789`.

Once the installation and onboarding has been completed, OpenClaw prints the dashboard information in the console output:

```
Dashboard link (with token):
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Copy/paste this URL in a browser on this machine to control OpenClaw.
No GUI detected. Open from your computer:
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Then open:
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Since the web interface is bound to `127.0.0.1`, it cannot be accessed directly from the internet.  To securely access it from your PC, create an SSH tunnel that forwards the OpenClaw port from the VPS/Dedicated Server to your local machine. 

On your PC, open a terminal and run:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

As long as this SSH session remains open, you can access the OpenClaw Control UI in your browser using the following URL:

```
http://localhost:18789/
```

If OpenClaw requires authentication, open the tokenized link shown in your OpenClaw output:

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip Use a GUI (Desktop Environment)

If you prefer using OpenClaw with a graphical interface, you can install a desktop environment on your VPS/Dedicated Server, for example **XFCE**.  After installing a GUI (and a remote desktop solution like RDP or VNC), you can access and control OpenClaw directly through the Dedicated Server desktop instead of using SSH port forwarding.

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### Installing skills

Skills extend OpenClaw with additional functionality and integrations.
 OpenClaw comes with more than 50 skills. You can install skills directly in the dashboard by opening the **Skills** section and selecting the skills you want to enable.

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### Enabling hooks

Hooks allow OpenClaw to automatically execute actions when certain events occur or when specific commands are used.
 This is useful for automating recurring tasks, saving context, or triggering workflows without manual interaction.

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### Configuring channels

Channels allow you to use OpenClaw through messaging platforms.
 In the dashboard you can configure and connect supported channels such as Telegram, Discord, Slack and others.

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

Depending on the selected platform, you need to provide additional tokens or credentials (for example like explained in the installation process for the Telegram bot token created via BotFather. 



After a channel is connected successfully, OpenClaw can receive and respond to messages through that platform. A conversation with the AI assistant via Telegram could look like this:

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## Security concerns

OpenClaw is a powerful tool and should always be used with proper security precautions. The Gateway Dashboard is protected by a token, which works like a password and grants access to your OpenClaw instance. Never share this gateway token publicly (for example in screenshots, tickets, or chat logs), as anyone with the token can access and control the dashboard.

It is recommended to keep OpenClaw protected behind a firewall and avoid exposing the gateway interface directly to the public internet. By default, OpenClaw binds the gateway service to `127.0.0.1`, which prevents external access and is the safest option for most use cases. To access the dashboard remotely, use SSH port forwarding and restrict access to trusted users only.

<InlineServiceLink />



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured OpenClaw on your VPS or Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [openclaw.ai](https://https://openclaw.ai/) - Official Website
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) - OpenClaw Documentation
- [clawhub.com](https://clawhub.com/) - ClawHub - Community-built Skills

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />