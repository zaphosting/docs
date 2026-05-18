---
id: ddos-protection-ovh
title: ZAP Hosting 的 OVH DDoS 防护
description: "了解 ZAP Hosting 如何通过针对每项服务量身定制的主动实时 DDoS 防御保护你的服务器 → 立即了解更多"
sidebar_label: OVH
---

## 介绍

DDoS（分布式拒绝服务）攻击是恶意尝试通过大量入站流量淹没目标服务器、服务或网络，从而破坏其正常流量。为了确保客户的稳定和不中断运行，ZAP Hosting 依赖于针对每个数据中心位置量身定制的专用 DDoS 防护系统。

我们全球基础设施中集成的防护平台之一是 OVH Anti-DDoS 系统。OVH 提供了一个全自动、网络级的缓解方案，设计用来吸收即使是超大规模的攻击，同时不影响服务稳定性。本节将解释 OVH 防护的工作原理以及哪些产品享受此保护。



## 防护覆盖范围

OVH DDoS 防护目前在我们位于伦敦（英国）、悉尼（澳大利亚）和新加坡（亚洲）的主机位置启用。在这些地点，防护覆盖我们的游戏服务器和语音服务器产品线，确保即使在遭受重度攻击时也能稳定运行。

## DDoS 防护如何运作

OVH 运营着一个全球范围、始终在线的 Anti-DDoS 基础设施。入站流量会被实时持续监控，一旦检测到攻击，流量会自动重定向到 OVH 的清洗网络。清洗系统会剔除恶意数据包，同时允许干净流量无阻通过。这个过程确保了即使在积极缓解攻击期间，合法玩家和语音用户依然能正常连接。

### 智能网络级过滤
OVH 采用多层过滤技术，分析流量模式、数据包特征和连接行为。恶意流量基于流量异常、协议不一致或可疑数据包流被过滤。合法流量则以极低延迟转发至服务器。

针对游戏环境，OVH 还提供额外的游戏专用过滤层，专门保护基于 UDP 的协议和对延迟敏感的服务。这些过滤包括：
- 保护主流游戏引擎和 UDP 游戏流量
- 基于行为的异常数据包突发检测
- 基于特征码的已知攻击模式过滤
- 实时自适应，确保玩家连接不中断

实时通讯服务如 TeamSpeak 受益于 OVH 的低延迟过滤策略。缓解过程发生在骨干网内部，有助于保持语音质量、连接稳定和低延迟。

<details>
<summary>游戏服务器</summary>
- ARK: Survival Evolved
- Arma II / Arma III
- Counter Strike 2
- Multi Theft Auto San Andreas (MTA:SA)
- Grand Theft Auto San Andreas Multiplayer (SA:MP)
- FiveM (CFX.re GTA V Multiplayer)
- Half-Life / Half-Life Deathmatch Classic / Team Fortress Classic / Counter Strike 1.6 / Day of Defeat
- Half-Life 2 / Team Fortress 2 / Counter Strike: Source / Counter Strike: Global Offensive / Day of Defeat: Source / Left 4 Dead / Left 4 Dead 2 / Garry’s Mod
- Minecraft Bedrock（支持 RakNet cookie）
- Minecraft Java（Query 协议防护）
- Minecraft Pocket Edition
- Minecraft Query
- Mumble
- Rust（支持 RakNet cookie）
- TeamSpeak 2
- TeamSpeak 3
- TrackMania / TrackMania 2 / ShootMania Storm
- Valheim
</details>

<details>
<summary>语音服务器</summary>
- TeamSpeak
</details>