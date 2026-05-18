---
id: dedicated-freebsd
title: "独立服务器：FreeBSD 安装指南"
description: "了解如何在你的独立服务器上安装和配置 FreeBSD，实现最佳性能和稳定性 → 立即了解更多"
sidebar_label: 安装 FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

下面将一步步教你如何在独立服务器上安装和配置 FreeBSD 操作系统。请仔细按照这些步骤操作，确保成功安装并充分发挥系统性能。

:::info

本指南基于 FreeBSD 13.0 版本编写。其他版本的安装流程可能会有些许差异。

:::



## 准备工作

安装和配置操作系统前，首先需要挂载对应的操作系统 ISO 镜像。常见的挂载方式有：

1. 通过初始设置挂载
2. 通过 iLO（虚拟媒体）挂载
3. 通过 iLO（远程控制台）挂载

如果你还不熟悉如何挂载 ISO 文件，建议先参考我们的[初始设置](dedicated-setup.md)或[自定义 ISO](dedicated-iso.md)指南。



## 安装流程
当 ISO 成功加载后，服务器将进入安装界面。

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

按下 `Enter` 开始安装！[](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

选择你喜欢的键盘布局，继续下一步。

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

输入你想要的主机名。

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

你可以选择要安装的系统附加包，选好后点击“确定”继续。

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

这一步可以创建分区，示例中我们使用 RAID0。关于 RAID 的更多信息请查看[配置 RAID](dedicated-raid.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

如果不需要修改，直接按 `Enter` 继续。

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

因为我们使用的是 RAID0，选择无冗余。

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

用 `Space` 选中你的卷，按 `Enter` 继续。

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

确认所有数据将被清除。

:::info
服务器正在进行安装，这可能需要几分钟时间
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

设置你的密码，按 `Enter` 继续。

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

IPv4/IPv6 配置选择“No”，这部分稍后再设置。

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

选择“Yes”，设置时区和日期时间。

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

你可以调整开机自动启动的服务。

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

如有需要，可以修改安全设置。

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

安装完成，选择“退出”，按 `Enter` 确认。

:::info
请在 iLO 中卸载 ISO 文件，然后选择“重启”
:::



## 配置

### 网络

要启用网络设备，请使用密码登录系统。

用你喜欢的编辑器打开 loader.conf，比如 `ee /boot/loader.conf`，添加以下内容：

```if_oce_load="YES"```

按 `CTRL+C` 退出编辑器，输入 exit，然后重启你的独立服务器。

***

重启后，编辑 rc.conf，比如用 `ee /etc/rc.conf`，添加以下内容：

```
ifconfig_oce0="DHCP"
```

:::caution
示例中的网络适配器名称 **oce0** 可能与你的不同。请确保填写正确的网络适配器名称，可以用 ifconfig 命令确认。网络信息将通过 DHCP 自动获取。
:::

示例效果如下：

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

按 `CTRL+C` 退出编辑器，输入 “exit”，然后执行命令 `/etc/netstart`。

:::info
现在你的服务器应该已经连接上互联网了
:::



## 总结

恭喜你，已经成功在独立服务器上安装了 FreeBSD 操作系统！如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂
