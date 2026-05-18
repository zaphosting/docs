---
id: fivem-prohibited-resources
title: "FiveM：“资源包含禁止逻辑？”"
description: "了解如何保护你的 FiveM 服务器免受恶意资源侵害，确保安全且高性能的游戏体验 → 立即了解更多"
sidebar_label: 资源包含禁止逻辑
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

近年来，FiveM 资源的开发者们投入了大量精力，通过混淆、IP 锁定、远程代码加载等技术来保护他们的源码。不幸的是，这些措施常常带来不少问题，大家应该都不陌生。这些工具不仅会显著拖慢代码性能，还会引入大量安全隐患。

因此，Cfx.re 开始封锁那些包含恶意代码、试图感染服务器和其他资源的恶意资源。这些资源有时会试图“传播”它们的代码到其他资源，从而让第三方获得脚本和数据库的访问权限。需要特别注意的是，这些资源基本上可以看作病毒，属于严重威胁。

<InlineVoucher />



## 含义

出于上述安全考虑，我们的系统会在启动前检查所有资源，并禁用所有被识别为危险的资源。这一步绝对必要，因此这里没有任何例外。安全第一！

如果你上传的某个资源被影响，服务器控制台会提供额外信息。相关信息内容可能类似如下：

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## 如何处理

第一步也是最重要的一步，建议你立即删除所有恶意资源。此外，只安装来自可靠渠道的资源。一个不错的起点是 FiveM 的官方网站或其 [论坛](https://forum.cfx.re/c/development/releases/7)，那里有丰富的资源可供选择。

作为开发者或与开发者有联系的人，我们推荐使用由 Cfx.re 与 **Tebex** 合作开发的 **FiveM 资产托管系统（Asset Escrow）**。更多细节可以查看官方的 [Cfx.re 论坛帖子](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151)。



## 禁止资源

目前没有官方的资源黑名单能直接对应这条提示。原则上，避免使用那些采用其他混淆手段或未基于 FiveM 资产托管系统的资源。



## 总结
为了维护安全稳定的服务器环境，务必只使用可信资源，并立即移除任何被标记的资源。遵循这些指南并利用 FiveM 资产托管系统，能有效保障 FiveM 生态的安全与合规。如果你有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />