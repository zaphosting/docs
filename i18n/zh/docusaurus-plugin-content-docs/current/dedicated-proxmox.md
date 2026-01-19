---
id: dedicated-proxmox
title: "独立服务器：Proxmox VE 安装指南"
description: "了解如何设置和管理企业级虚拟化平台 Proxmox VE，集成多种工具和高可用性 → 立即了解更多"
sidebar_label: 安装 Proxmox
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Proxmox 虚拟环境（Proxmox VE）是一款完整的开源服务器管理平台，专为企业虚拟化设计。它将 KVM 虚拟机管理程序和 Linux 容器（LXC）、软件定义存储及网络功能紧密集成于同一平台。通过集成的基于网页的用户界面，你可以轻松管理虚拟机和容器、集群高可用性，甚至内置的灾难恢复工具。



## 准备工作

首先，你需要将 Proxmox VE（虚拟环境）ISO 安装镜像挂载并从中启动你的独立服务器。这里有两种方法：更简单的是通过独立服务器的网页面板操作，另一种则是通过服务器的 iLO 面板手动操作，步骤相对较长。



### 通过网页面板挂载 ISO
进入独立服务器网页面板的 **初始安装** 部分。首先点击绿色的 **启用 iLO** 按钮。稍等片刻，相关区域会显示出来。可能需要刷新页面以确保内容完全加载。

![](https://screensaver01.zap-hosting.com/index.php/s/r6XNqDqQeEec7wW/preview)

接着，从下拉菜单中选择一个 **Proxmox VE** ISO。建议使用最新版本，以保持最新功能和安全更新。然后点击绿色的 **插入** 按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/xXfWzqtE6JMG9Ka/preview)

最后，重启你的独立服务器以便从 ISO 启动。你可以在第 3 步下方找到重启按钮。



### 通过 iLO 挂载 ISO
先前往 [Proxmox 下载页面](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso) 获取 Proxmox VE ISO。然后按照 [iLO](dedicated-ilo.md) 和 [自定义 ISO](dedicated-iso.md) 指南上传并挂载到你的独立服务器，指南中会详细说明如何登录和上传自定义 ISO。



## 安装与配置

:::important
确保在导入并挂载新 ISO 后，已重启服务器再继续操作。
:::

ISO 挂载完成后，你需要从它启动。通过 iLO 面板的 **HTML5 远程控制台** 进行操作。在网页面板中，点击 `iLO web access` 下的 **在此打开** 链接，进入面板并使用提供的凭据登录。

:::note
浏览器可能会弹出安全风险提示，忽略并接受继续即可。
:::

登录后，在 **概览** 部分找到 `集成远程控制台` 下的 **HTML5** 链接，点击打开一个面板覆盖窗口。

![](https://screensaver01.zap-hosting.com/index.php/s/HPWJ3oksyo3SdW6/preview)

Proxmox 会进入安装流程。使用方向键、回车和 Esc 键导航，建议选择 **图形界面** 版本，本文档后续步骤均基于此。

![](https://screensaver01.zap-hosting.com/index.php/s/MGqm3EAxYc8EBQw/preview)

稍等片刻，安装程序继续。你需要通过右下角的 **我同意** 按钮接受 Proxmox 的最终用户许可协议（EULA）。下一步选择安装目标硬盘。如果你只用单盘，默认设置已为你优化，直接点击 **下一步** 即可。

![](https://screensaver01.zap-hosting.com/index.php/s/pZ8FiFJT6tJKFsS/preview)

:::note
如果你想配置 RAID（部分独立服务器配备双硬盘），请点击 **选项** 按钮选择 `RAID` 模式。推荐使用 `RAID1`，实现两块硬盘镜像。

![](https://screensaver01.zap-hosting.com/index.php/s/WqiYPowiLttzoeZ/preview)
:::

接下来是语言和键盘设置，通常会自动检测。确认无误后继续。

![](https://screensaver01.zap-hosting.com/index.php/s/As4J4NzytcZFrHp/preview)

现在设置一个强密码和邮箱地址。邮箱用于面板发送重要警报和通知。

:::important
请牢记密码！这是你安装完成后首次登录面板时必须使用的密码！
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QAEaygacSXNfgot/preview)

最后一步是网络配置。选择可用的管理网卡，并为服务器设置主机名。

![](https://screensaver01.zap-hosting.com/index.php/s/EZDzsaq4aXpP4we/preview)

然后前往独立服务器网页面板的 **IP 地址** 部分，查找可用 IP。

![](https://screensaver01.zap-hosting.com/index.php/s/KQC4DLj6LxTX4io/preview)

选择你想用于 Proxmox 面板的 IP 地址。安装程序中填写 IP 地址、子网掩码和网关，信息来自网页面板。DNS 服务器建议填写 `8.8.8.8`，即谷歌公共 DNS。

填写完成后点击 **下一步**，在摘要页确认所有选项无误后，点击 **安装** 继续！

## 访问面板
安装完成并重启后，选择菜单中的 **Proxmox Environment GNU/Linux** 并按回车。加载完成后，控制台会显示欢迎信息，包含你之前设置的 IP 地址和访问面板的链接。用浏览器打开该链接。

:::note
浏览器可能再次弹出安全风险提示，忽略并接受继续即可。
:::

如果链接无法访问，说明安装过程中网络配置可能有误，建议检查相关设置。

进入面板后，使用用户名 `root` 和安装时设置的密码登录。确保 **认证域** 选择为 `Linux PAM standard authentication`。

![](https://screensaver01.zap-hosting.com/index.php/s/iKcErA9Bx5LpB3n/preview)

登录后，忽略订阅提示，点击 **确定** 即可。就这样，你已经成功在独立服务器上安装并登录了 Proxmox VE 面板！



## 创建你的第一个虚拟机
本节介绍如何通过 Proxmox 面板创建第一个虚拟机（VM）。进入 `local (panel)`，选择 **ISO 镜像** 部分。你可以手动上传 `.iso` 文件，或者让 Proxmox 通过提供的直接下载链接自动获取。

![](https://screensaver01.zap-hosting.com/index.php/s/GJjxxkPAkiRM7Fw/preview)

完成后，点击右上角的 **创建虚拟机** 按钮，打开新菜单，里面有丰富的配置选项。

首先配置常规设置。默认 `节点` 会是当前面板所在节点（本例为 `panel`）。输入一个唯一的虚拟机 ID，默认是 `100`，如果已有虚拟机则自动递增。为虚拟机命名，名称随意。

![](https://screensaver01.zap-hosting.com/index.php/s/6LmXZ26bnNY46yS/preview)

接着进入操作系统设置，选择之前上传的 ISO 镜像，确保正确指定操作系统类型和版本。

![](https://screensaver01.zap-hosting.com/index.php/s/QWjGQ7grR8ttaqZ/preview)

建议系统设置保持默认，通常配置已合适。进入磁盘设置，指定虚拟机磁盘大小和存储池，默认是 `local-lvm`。其他设置默认即可。

![](https://screensaver01.zap-hosting.com/index.php/s/2XJyydoZwaEMDeZ/preview)

接下来是 CPU 设置，可以自定义插槽数和核心数，按需配置。

![](https://screensaver01.zap-hosting.com/index.php/s/RrWWT2wMRaQzde7/preview)

内存设置中，定义虚拟机内存大小和气球内存状态。

![](https://screensaver01.zap-hosting.com/index.php/s/DaXCsYLwWeMr9aJ/preview)

网络设置建议保持默认，配置通常合适。最后，检查所有配置，建议勾选 `创建后自动启动`，让虚拟机创建完成后自动开机。确认无误后点击 **完成**。

![](https://screensaver01.zap-hosting.com/index.php/s/EfNAZ4idcxizDsa/preview)

就这样，你的第一个虚拟机已经在 Proxmox 面板上创建成功！你可以在面板左侧的服务器视图中看到它。





## 总结

恭喜你，已成功在独立服务器上安装 Proxmox！如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂
