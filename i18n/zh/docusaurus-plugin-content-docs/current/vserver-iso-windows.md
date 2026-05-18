---
id: vserver-iso-windows
title: "VPS：安装 Windows X/Windows Server 20XX"
description: "了解如何使用定制 ISO 完全掌控 Windows 安装和驱动配置 → 立即深入了解"
sidebar_label: "安装 Windows X/WS 20XX"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## 介绍
安装自定义 ISO 让你可以完全掌控 Windows 环境的搭建，比如 Windows 10 或 Windows Server 2016/2019/2022/2025。与我们提供的预装标准操作系统镜像不同，这种方式允许你使用专门定制的安装介质，比如包含特殊驱动、预设配置或额外软件包，满足你的个性化需求。

<InlineVoucher />



## 准备工作

安装和配置操作系统时，首先要挂载对应的操作系统 ISO。如果你还不熟悉如何挂载 ISO 文件，建议先参考我们的[自定义 ISO](vserver-iso.md)指南。



## 安装流程

在 Windows 操作系统安装开始时，会引导你完成初始设置步骤。首先选择你喜欢的**语言**，然后配置**键盘布局**，接着选择**安装方式**。这里演示使用的是**旧版安装程序**选项。下一步选择版本，这里示例选择了**Windows Server 2025 Datacenter Desktop Experience**，它带有完整的图形用户界面。



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

安装到这一步你会发现没有显示任何分区。这不是错误，而是因为 Windows 没有额外驱动无法识别虚拟硬盘。必须安装关键的 VirtIO 驱动才能识别磁盘并正确操作。现在需要挂载并安装这些驱动，驱动安装完成后硬盘才会显示，之后就可以继续分区和操作系统安装了。



### VirtIO 驱动

在安装操作系统之前，必须先安装 VirtIO 驱动。这些 Windows 驱动针对基于 KVM 的虚拟化环境进行了优化，确保 Windows 虚拟机能以最高性能和兼容性运行。

操作时，需要临时切换安装介质为 `virtio-win.iso`。从可用 ISO 中选择 VirtIO ISO 文件，点击**挂载**。这样安装程序就能访问驱动，先安装驱动后才能继续操作系统安装。



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning 切勿重启服务器
切换 ISO 到 VirtIO 镜像时，只需选择 ISO 文件，**不要**重启系统，否则之前的安装进度会丢失。

:::

所需驱动分布在三个专用文件夹中，分别是 **Balloon**、**NetKVM** 和 **vioscsi**。每个文件夹包含一种关键驱动，确保 Windows 虚拟机在 KVM 环境下正常运行。

- **Balloon：** 管理内存动态分配，允许虚拟机的分配内存动态扩展或收缩，无需重启。  
- **NetKVM：** 提供高性能且稳定的网络接口，确保虚拟机网络连接顺畅。  
- **Vioscsi：** 专用的 SCSI 控制器驱动，确保虚拟硬盘被正确识别并高速访问，提升 I/O 性能。

每个文件夹内都有对应系统架构的子文件夹。安装时请选择与你要安装的操作系统匹配的子文件夹，务必使用 amd64 架构。<u>请对这三个驱动文件夹都重复此操作，参考截图示范。</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

VirtIO 驱动安装完成后，就可以继续安装操作系统了。再次切换 ISO 文件，这次选择操作系统的原始安装 ISO，然后重新打开 VNC 控制台继续安装流程。

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### 创建并选择分区

下一步是配置分区。先删除所有未知分区。然后选择新出现的未分配空间作为操作系统安装目标。

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

点击**下一步**继续，剩下的安装过程会自动进行。最后会提示你设置管理员账户的登录凭据。

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## 配置

操作系统安装完成后，还需做一些最终配置，确保系统安全可靠地运行。这包括启用和管理**远程桌面（RDP）**访问，配置**防火墙规则**以兼顾安全与功能，以及设置**网络配置**，让服务器正确接入网络。

完成这些调整后，远程访问可用，监控和状态检测正常，服务器在你的基础设施中能稳定运行，网络参数也更可控。



### RDP 配置

启用 Windows 远程桌面（RDP）在 Windows 10（客户端系统）和 Windows Server 2016/2019/2022/2025 中操作类似。打开**控制面板**或**设置**，进入**系统 → 远程桌面**（客户端版）或**系统属性 → 远程**（服务器版），启用**允许远程连接到此计算机**。服务器版本中显示为**启用远程桌面**。

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### 防火墙配置

服务器要完全初始化，且能通过 ping 等状态检测，必须允许 Windows 防火墙通过 **ICMP 协议**。没有这条规则，监控工具和网络测试无法访问服务器，健康检查会失败。

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

启用 ICMP，打开**高级安全 Windows 防火墙**，进入入站规则。新建自定义规则，协议选择“任意”，然后选择 **ICMPv4**。设置规则适用于所有端口，选择规则生效的配置文件（域、专用、公用），一般建议全部启用。最后给规则起个名字，比如 *允许入站 ICMP*，完成向导。

从此服务器将接受 ICMP 请求，`ping` 命令和监控系统能正常访问并检测服务器状态。



### 网络配置

在 Windows 中手动配置网络，先打开**网络和共享中心**（通过控制面板或任务栏）。选择对应的网络适配器（有线或无线），右键打开**属性**。在列表中选中**Internet 协议版本 4 (TCP/IPv4)**，点击**属性**。

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

弹窗中，将“自动获取 IP 地址”改为“使用下面的 IP 地址”。输入服务器的**IP 地址**、**子网掩码**和**默认网关**。下方切换 DNS 设置为手动，填写 `1.1.1.1` 和 `8.8.8.8` 作为主、备用 **DNS** 服务器。点击**确定**应用静态网络配置。





## 总结

恭喜你，Windows 操作系统已成功安装并配置完成。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂



<InlineVoucher />