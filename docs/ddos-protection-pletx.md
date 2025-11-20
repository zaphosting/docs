---
id: ddos-protection-pletx
title: PletX DDoS Protection at ZAP Hosting
description: "Find out how ZAP Hosting protects your servers with proactive, real time DDoS defense tailored to every service you run → Learn more now"
sidebar_label: PletX
---

## Introduction

DDoS (Distributed Denial of Service) attacks are malicious attempts to disrupt the normal traffic of a targeted server, service or network by overwhelming it with excessive inbound traffic. To ensure stable and uninterrupted operation for our customers, ZAP Hosting relies on dedicated DDoS protection systems tailored to each data center location.

One of the key technologies used within our infrastructure is PletX, a highly adaptive protection platform that filters and mitigates attacks in real time. This document explains how PletX operates, which services benefit from it and why it provides a significant advantage for performance critical hosting environments.



## Where the Protection Is Utilized

PletX is already fully deployed at our FFM/Eygelshoven location, where it protects all hosted products including gameservers, VPS, dedicated servers, TeamSpeak servers, TS3 and Discord bots as well as webspace services. This ensures comprehensive and consistent protection across the entire product range at this site.

We are currently preparing the rollout for our US locations in Ashburn, Dallas and Los Angeles, where PletX will also be available very soon.

## How the DDoS Protection Works

PletX protection at our locations is always active and fully synchronized with our network. All incoming traffic is routed through the PletX filtering system before it reaches our infrastructure. This ensures that malicious traffic is eliminated as early as possible and never reaches your server.

### Automatic Protocol Detection

PletX continuously analyzes incoming traffic and identifies protocol specific signatures as soon as real traffic appears on a port. When players connect to a FiveM server on its game port, for example 30120, 

It detects the characteristic packet structure and automatically applies the appropriate FiveM rule. The same applies to other services; if a Minecraft server receives traffic on port 25565, the system recognizes the Minecraft handshake and creates a matching rule accordingly.

When a user connects to a VPS or dedicated server via SSH on port 22, PletX recognizes the SSH handshake and activates an SSH rule. For Windows based systems, RDP traffic on port 3389 is detected and an RDP specific rule is created.

If WireGuard or OpenVPN is used on a custom port, PletX identifies the first valid exchange and applies the correct VPN rule.

In all cases, once PletX has identified the protocol, only legitimate traffic for that protocol is permitted while unrelated traffic is filtered before it reaches the server.

### Supported Protection Profiles

PletX supports a wide range of common service and game protocols. This includes popular games such as FiveM, Minecraft, titles using the Steam Source Engine, Metin 2 based services, RakNet driven games, SAMP, Growtopia and extensions like PlasmoVoice. Voice applications such as TeamSpeak are also recognized automatically.

In addition to gaming related traffic, PletX identifies remote access protocols like SSH and RDP as well as secure networking protocols including WireGuard and OpenVPN.

<details>
  <summary>Game servers</summary>
- FiveM
- Minecraft
- Various Games supporting Steam Source Engine
- Metin 2 Auth & Channel
- Novalife
- RakNet based games
- SAMP
- Growtopia
- PlasmoVoice
- and more..
</details>

<details>
  <summary>Voice servers</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>Remote Access</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN and Secure Networking</summary>

- WireGuard
- OpenVPN
</details>

Any protocol not recognized by PletX is treated as unknown, which may occasionally result in false positives or unexpected behavior.

## Web Traffic and Unsupported Services

PletX does not currently filter HTTP or HTTPS traffic. Web applications or unsupported protocols may therefore experience occasional false positives. If you are affected by this, please proceed as follows:

1. Open a support ticket at ZAP-Hosting
2. We analyze the traffic
3. PletX can deploy custom adjustments and fixes upon request

This approach is particularly intended for uncommon or specialized services. For web based projects we recommend continuing to use Cloudflare. Ideally this includes Cloudflare Proxy or CDN for websites and Cloudflare Tunnel for FiveM/RedM TxAdmin or other web dashboards.

## Temporary Protection Disable

A temporary protection disable feature will be available soon. This upcoming option allows customers to fully turn off DDoS protection for specific servers when needed. It is particularly useful for environments without meaningful DDoS risk, high-volume systems such as telemetry or monitoring platforms and applications that generate unusual traffic patterns which may trigger false positives.

The feature gives advanced users full control over their network behavior while game and application hosting customers continue to benefit from automatic and reliable protection.