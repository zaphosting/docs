---
id: server-truenas-scale
title: "在服务器上安装 TrueNAS SCALE - 搭建你的个人 NAS 系统"
description: "了解如何在你的专用服务器上安装 TrueNAS SCALE，实现网络附加存储和文件共享 → 立即了解更多"
sidebar_label: 安装 TrueNAS SCALE
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

TrueNAS SCALE 是一个开源存储平台，允许你在服务器上搭建网络附加存储（NAS）系统。本指南将带你在专用服务器上安装 TrueNAS SCALE，并完成初始配置，包括存储池、用户账户和 SMB 文件共享。

:::danger VPS 不适用
我们的 VPS 产品不适合安装 TrueNAS SCALE，因为它们只有一个虚拟磁盘。虽然可以在 VPS 上安装 TrueNAS SCALE，但无法创建存储池，因为整个磁盘都被操作系统占用。

要安装 TrueNAS SCALE，需使用至少配备两块硬盘的[专用服务器配置](https://zap-hosting.com/en/dedicated-server-hosting/)。
:::

<InlineVoucher />

## 准备工作

开始安装前，请确保满足以下最低系统要求：

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ----------- | -------------------------- |
| CPU        | 2 核心     | 8 vCPU 核心               |
| 内存       | 8 GB       | 16 GB                     |
| 磁盘空间   | 16 GB 用于系统 | 根据使用需求而定          |

<InlineServiceLink />

前往官方 [TrueNAS 网站](https://www.truenas.com/download-truenas-scale/) 下载最新稳定版本。你可以将 ISO 上传到公开可访问的位置（自己的网页服务器或云存储），也可以保存在本地电脑上直接挂载。

:::tip[ISO 托管]
如果计划通过远程控制台的 URL 挂载，确保 ISO 文件的 URL 以 `.iso` 结尾，且无需认证即可公开访问。
:::

**挂载 ISO**

登录你的 [ZAP-Hosting 控制面板](https://zap-hosting.com/en/customer/)，在服务列表中找到你的专用服务器。进入服务器管理页面，点击 **激活 iLO** 进入服务器管理界面。

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

在 iLO 界面，找到 **集成远程控制台** 选项。选择你喜欢的控制台类型并启动，会弹出一个新窗口，直接访问服务器显示屏。

在远程控制台顶部点击 **CD 图标**，选择 **CD/DVD**。如果你已上传 ISO，选择 **脚本化媒体 URL** 并输入直链；否则选择 **本地 .iso 文件** 浏览电脑。无论哪种方式，ISO 都会挂载到虚拟 CD/DVD 驱动器。

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip 其他挂载方式
关于通过虚拟媒体界面等其他 ISO 挂载方法，请参考[自定义 ISO 指南](dedicated-iso.md)。
:::

挂载完成后，使用控制台的 **电源** 菜单重启服务器。选择 **重置**，服务器将从 TrueNAS SCALE ISO 启动。

## 安装过程

观察控制台启动过程。TrueNAS SCALE 安装界面出现，安装程序自动加载。加载安装环境需要几分钟。

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

安装程序显示 **选择目标介质** 及可用磁盘。用 **方向键** 选择用于系统的磁盘。选择最小的磁盘安装操作系统（该磁盘将完全用于 TrueNAS SCALE）。按 **空格键** 选中，然后按 **回车**。

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

出现警告，提示安装将**清除**所选磁盘上的所有数据。用方向键选中 **是**，按 **回车**。

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

接着安装程序询问认证设置。**选项 1** 现在设置密码，**选项 2** 允许稍后通过网页界面配置。我们选择更灵活的 **选项 2：通过 Web UI 配置**，选中后按 **回车**。

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

安装程序询问是否允许 EFI 启动？选择 **是**（推荐），按 **回车**。

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

安装开始，通常需要 15-20 分钟。屏幕显示文件复制和系统配置进度。

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

完成后显示 **TrueNAS 安装成功**。按 **回车**。

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

重启前，**卸载 ISO**，否则会再次进入安装界面。点击 **DVD 图标**，选择 **CD/DVD**，点击 **弹出介质**。通过电源菜单重启或等待自动重启。

<InlineServiceLink />

## 配置

安装完成后，必须配置服务器从哪个磁盘启动。TrueNAS SCALE 已安装，但需要通过 RAID 控制器 ROM 配置启动磁盘。

:::info[关键步骤]
安装后，务必在 RAID 控制器 ROM 中配置启动卷，确保服务器从正确磁盘启动。
:::

**在 ROM 中设置启动磁盘**

启动时观察控制台。当出现 **“按 F8 进入阵列实用程序 ROM 配置”** 提示时，立即按 **F8**。

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

进入 ROM 配置工具。用方向键选择 **选择启动卷**，按 **回车**。

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

列出可用磁盘。选择安装了 TrueNAS SCALE 的磁盘，按 **回车**。

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

选中磁盘后，按 **F8** 保存。确认后退出工具。服务器将从 TrueNAS SCALE 启动。

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**访问网页界面**

首次启动后，TrueNAS SCALE 控制台会显示 Web UI 访问地址：`http://[你的服务器IP]`。记下这个 IP，后续访问网页界面需要用到。

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip 网络自动配置
TrueNAS SCALE 通常通过 DHCP 自动配置网络。除非你有多个 IP 或需要指定静态 IP，否则无需手动配置。
:::

若需手动配置网络，选择控制台菜单中的 **1) 配置网络接口**。选择主网卡（如 `enp0s3` 或 `eth0`），选择 **配置 IPv4**，然后选 **静态**。输入 IP 地址、子网掩码和网关（可在 ZAP-Hosting 控制面板查到）。

打开浏览器，访问控制台显示的 `http://[你的服务器IP]`。

因为之前选择了 **通过 Web UI 配置**，这里设置密码。登录页面默认用户名为 `truenas_admin`。输入强密码，确认后点击 **提交**。

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger 安全提示
请为 TrueNAS 管理员账户设置强且唯一的密码。该账户拥有系统全部权限。
:::

登录后进入仪表盘，显示系统信息、网络状态、存储池、服务和警报。你已成功配置 TrueNAS SCALE，接下来可以设置存储。

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**创建存储池**

点击左侧栏的 **存储**，然后点击 **创建存储池** 按钮。

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

先给存储池命名，比如 `Disk`、`tank` 或其他你喜欢的名字。准备好后点击 **下一步**。

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

在 **数据** 部分，打开 **布局** 下拉菜单，选择适合你需求的配置：

- **Stripe**：最大可用容量，无冗余
- **Mirror**：两块磁盘存储相同数据，提供冗余，容量减半
- **RAIDZ1**：提供一块磁盘冗余
- **RAIDZ2**：提供两块磁盘冗余
- **RAIDZ3**：提供三块磁盘冗余

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

在 **磁盘选择** 中列出所有存储磁盘。点击想加入存储池的磁盘，它们会移到配置区并显示预估容量。

:::info 启动盘不可用
安装系统用的磁盘不会出现在这里，因为它专用于操作系统。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

保持可选设置默认，点击 **下一步**。确认页面显示名称、布局、磁盘和容量。确认无误后点击 **创建存储池**。

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**使用数据集组织**

存储池创建后，可以用数据集来组织数据。数据集是存储池的逻辑子集，方便区分不同类型数据。点击侧边栏的 **数据集**，你会看到新建的存储池（如 “Disk”）。

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

点击 **添加数据集**。父级自动设为存储池。给数据集命名，比如 `documents`、`media` 或 `backups`。高级选项保持默认，除非你有特殊需求。点击 **保存**。

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**创建用户账户**

点击侧边栏的 **凭据**，然后点击 **添加**。选择用户名（如 `john` 或 `fileuser`），填写全名，设置密码。主组、主目录和 shell 保持默认。滚动到底部，启用 **SMB** 选项以支持 Windows 访问。

根据安全需求调整权限。基础文件共享默认选项加启用 SMB 就够了。完成后点击 **提交**。

:::danger SMB 访问重要提示
切勿使用 `root` 或 `truenas_admin` 账户进行文件共享。这些系统账户无法通过 SMB 使用。请创建专用用户。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**设置 SMB 共享**

点击侧边栏的 **共享**。出现三个选项：Windows (SMB) 适用于 Windows/macOS/Linux，Unix (NFS) 适用于 Linux/Unix，Block (iSCSI) 用于块存储。我们设置 SMB，点击 Windows (SMB) 共享区的 **添加**。

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

弹出 **添加 SMB** 对话框。**路径** 选择你的数据集路径（如 `/mnt/Disk/documents`）。**名称** 输入共享名（用户在网络上看到的名字），比如 `documents`。**用途** 大多数情况下保持默认。可添加描述。高级选项（ACL 设置等）保持默认，出于安全考虑关闭访客访问。点击 **保存**。

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

创建共享后弹窗提示 **SMB 服务未运行**。点击 **启动服务**，并勾选 **开机自动启动**。SMB 共享现在已在网络上可用。

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

如果需要为 Linux/Unix 设置 NFS 共享，进入 **共享** → **Unix (NFS) 共享**，点击 **添加**。选择数据集，配置网络和权限，启用 NFS，保存即可。

<InlineServiceLink />

## 访问你的共享

以 Windows PC 为例，打开 **文件资源管理器**。右键点击 **此电脑**（或 **我的电脑**），选择 **添加网络位置**。

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

打开 **添加网络位置向导**，点击 **下一步** 继续。

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

输入位置，格式为：`\\[你的服务器IP]\[共享名]`，例如：`\\192.168.1.100\documents`。将 `[你的服务器IP]` 替换为 TrueNAS 服务器 IP，`[共享名]` 替换为 SMB 共享名。完成后点击 **下一步**。

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

输入你在 TrueNAS 创建的用户名和密码。不要用 `root` 或 `truenas_admin`，它们无法通过 SMB 访问。勾选 **记住我的凭据** 以便下次自动登录。点击 **确定**。

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

现在可以访问 TrueNAS 共享了。像使用普通网络驱动器一样浏览文件、创建文件夹和复制数据。你已成功将 Windows PC 连接到 TrueNAS 共享。

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip 快速访问
为了更方便访问，使用 **映射网络驱动器** 替代 **添加网络位置**。共享会以驱动器盘符（如 `Z:`）显示在文件资源管理器中。
:::

:::info macOS 和 Linux 访问
**macOS**：在 Finder 中按 `Cmd+K`，输入 `smb://[你的服务器IP]/[共享名]`

**Linux**：使用文件管理器的“连接服务器”功能，输入 `smb://[你的服务器IP]/[共享名]`，或通过命令行使用 `mount.cifs` 挂载
:::

## 结语

恭喜你，已成功在服务器上安装并配置 TrueNAS SCALE。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂