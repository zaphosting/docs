---
id: ddos-protection-pletx
title: ZAP Hosting 的 PletX DDoS 防护
description: "了解 ZAP Hosting 如何通过针对每项服务量身定制的主动实时 DDoS 防御保护你的服务器 → 立即了解更多"
sidebar_label: PletX
---

## 介绍

DDoS（分布式拒绝服务）攻击是恶意尝试通过大量入站流量淹没目标服务器、服务或网络，从而破坏其正常流量。为了确保客户的稳定和不中断运行，ZAP Hosting 依赖于针对每个数据中心位置量身定制的专用 DDoS 防护系统。

我们基础设施中使用的关键技术之一是 PletX，这是一款高度自适应的防护平台，能够实时过滤和缓解攻击。本文档将解释 PletX 的工作原理、受益的服务以及它为何能为性能关键的托管环境带来显著优势。



## 防护部署位置

PletX 已在我们的法兰克福（FFM）/埃格尔斯霍芬（Eygelshoven）数据中心全面部署，保护所有托管产品，包括游戏服务器、VPS、独立服务器、TeamSpeak 服务器、TS3 和 Discord 机器人以及网页空间服务。这确保了该站点全产品线的全面且一致的防护。

我们正在为美国的 Ashburn、Dallas 和 Los Angeles 数据中心准备部署，PletX 很快也将在这些地点上线。

## DDoS 防护如何运作

我们各地的 PletX 防护始终处于激活状态，并与我们的网络完全同步。所有入站流量都会先经过 PletX 过滤系统，再进入我们的基础设施。这确保恶意流量尽早被拦截，绝不会到达你的服务器。

### 自动协议识别

PletX 持续分析入站流量，一旦端口上出现真实流量，便能识别协议特征。例如，当玩家连接 FiveM 服务器的游戏端口（如 30120）时，

它会检测到特有的数据包结构，自动应用对应的 FiveM 规则。其他服务同理；如果 Minecraft 服务器在端口 25565 收到流量，系统会识别 Minecraft 握手过程，并相应创建匹配规则。

当用户通过 SSH 在端口 22 连接 VPS 或独立服务器时，PletX 会识别 SSH 握手并激活 SSH 规则。对于 Windows 系统，检测到端口 3389 的 RDP 流量时，会创建专门的 RDP 规则。

如果 WireGuard 或 OpenVPN 在自定义端口使用，PletX 会识别首次有效交换，并应用正确的 VPN 规则。

无论哪种情况，一旦 PletX 识别出协议，只有该协议的合法流量被允许通过，其他无关流量会在到达服务器前被过滤。

### 支持的防护配置文件

PletX 支持多种常见服务和游戏协议，包括热门游戏如 FiveM、Minecraft、使用 Steam Source 引擎的游戏、Metin 2 服务、基于 RakNet 的游戏、SAMP、Growtopia 以及 PlasmoVoice 等扩展。语音应用如 TeamSpeak 也能自动识别。

除了游戏相关流量，PletX 还能识别远程访问协议如 SSH 和 RDP，以及安全网络协议如 WireGuard 和 OpenVPN。

<details>
  <summary>游戏服务器</summary>
- FiveM
- Minecraft
- 各类支持 Steam Source 引擎的游戏
- Metin 2 认证与频道
- Novalife
- 基于 RakNet 的游戏
- SAMP
- Growtopia
- PlasmoVoice
- 以及更多..
</details>

<details>
  <summary>语音服务器</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>远程访问</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN 和安全网络</summary>

- WireGuard
- OpenVPN
</details>

任何未被 PletX 识别的协议都会被视为未知，这可能偶尔导致误判或异常行为。

## 网页流量与不支持的服务

PletX 目前不过滤 HTTP 或 HTTPS 流量。因此，网页应用或不支持的协议可能偶尔出现误判。如果你遇到此类问题，请按以下步骤操作：

1. 在 ZAP-Hosting 提交支持工单
2. 我们会分析流量
3. PletX 可根据需求部署定制调整和修复

此方案主要针对不常见或专业化服务。对于基于网页的项目，我们建议继续使用 Cloudflare。理想情况下，网站使用 Cloudflare 代理或 CDN，FiveM/RedM TxAdmin 或其他网页面板使用 Cloudflare Tunnel。

## 临时关闭防护

临时关闭防护功能即将上线。该功能允许客户在需要时完全关闭特定服务器的 DDoS 防护。它特别适合无明显 DDoS 风险的环境、高流量系统（如遥测或监控平台）以及可能触发误判的异常流量应用。

此功能赋予高级用户对网络行为的完全控制权，同时游戏和应用托管客户依然享受自动且可靠的防护。