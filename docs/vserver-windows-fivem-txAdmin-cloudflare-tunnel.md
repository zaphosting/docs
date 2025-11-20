---
id: vserver-windows-fivem-txAdmin-cloudflare-tunnel
title: "VPS: Setting up Cloudflare Tunnel for txAdmin"
description: "Discover how to setup Cloudflare tunnel for txAdmin for more security → Learn more now"
sidebar_label: Cloudflare Tunnel for txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

If you want to take additional security measures on top of the existing ZAP-Hosting DDoS Protection, you can further secure your txAdmin instance by using a Cloudflare Tunnel. This setup ensures that the txAdmin web interface is no longer exposed through your server’s public IP, but instead safely accessed via your own domain. Any attacks targeting the txAdmin port are filtered by Cloudflare, while you can completely lock down the local port without losing access.



## Prerequisites

To use a Cloudflare Tunnel on Windows you need a Windows VPS, a working txAdmin installation, your txAdmin port and a domain that is already connected to your Cloudflare account. If your domain is not yet connected to Cloudflare, please follow our [Cloudflare Setup](domain-cloudflare-setup.md) guide first.

Cloudflare Tunnel works by creating an outgoing encrypted connection from your server to Cloudflare so no public ports have to stay open for txAdmin.


## Cloudflare Setup

Before installing cloudflared on your Windows vServer, you first create and configure the tunnel directly inside your Cloudflare dashboard.

Log in to your Cloudflare account and navigate to the Zero Trust section. There you can create a new tunnel that will later forward traffic to your txAdmin interface.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Cloudflare Tunnel installation

Cloudflare provides a small tool called cloudflared. The installation of cloudflared on Windows is very straightforward. First, download the [Windows installer](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi).

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

Once the file has been downloaded, run the installer and complete the setup. After the installation is finished, open the Command Prompt as Administrator. In this window, execute the provided command:

```
cloudflared.exe service install eyJhIjoiMj...
```

After running the command, your server will connect to Cloudflare through the tunnel. If the setup completes successfully, the status in the Connectors section will change to **Connected**, confirming that the tunnel is active and working.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Configure Cloudflare Tunnel

Next, you configure the Route Traffic settings. Create a new subdomain entry of your choice. In this example, the subdomain `txAdmin` is used, which will later be used to access the txAdmin interface. 

Select the domain you want to use, then set the service type to **HTTP** and enter **localhost:port** as the URL. Replace port with the port defined for your txAdmin instance. Port 40500 will be used in this example. 

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Security Recommendation
Instead of using the default txAdmin port **40120**, it is recommended to use a different port for improved security.
:::



## Configure the Windows Firewall

To prevent the port from being reachable outside the tunnel, configure the Windows Firewall so that the corresponding port accepts connections only from localhost. Limit the rule’s remote address field to 127.0.0.1. This forces all traffic to originate from the local system and blocks any external access, ensuring the service behind cloudflared is not reachable from the network outside the tunnel.

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

With this configuration, any access attempts from outside the machine are blocked, ensuring the service behind cloudflared is not reachable outside the tunnel.



## Conclusion

Once the Cloudflare Tunnel is active, your txAdmin interface becomes available only through your own domain while all requests pass through Cloudflare where they are filtered and secured.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

Direct access to the txAdmin port through the server IP is blocked which removes the original attack surface completely. This makes txAdmin stable, secure, and reliably accessible even if someone tries to overload or attack the interface.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />