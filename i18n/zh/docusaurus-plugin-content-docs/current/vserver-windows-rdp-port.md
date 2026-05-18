---
id: vserver-windows-rdp-port
title: "VPS：更改 Windows RDP 端口"
description: "了解如何更改 Windows RDP 端口 → 立即了解更多"
sidebar_label: 更改 RDP 端口
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

远程桌面协议默认使用端口 3389。这个端口众所周知，且经常成为自动扫描的目标。更改 RDP 端口可以减少不必要的连接尝试，提升基础安全防护。

<InlineVoucher />



## 在注册表中更改 RDP 端口

通过本地登录服务器或现有的远程桌面连接登录。使用 **Win + R** 打开运行对话框，输入 `regedit` 并确认，打开注册表编辑器。导航到以下注册表路径：

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

找到名为 **PortNumber** 的注册表项。将数值格式改为 **十进制**，输入你想要的新端口号。建议使用 1024 以上且未被其他服务占用的端口。修改完成后，关闭注册表编辑器。

## 调整 Windows 防火墙规则

必须允许新的 RDP 端口通过 Windows 防火墙。打开 **Windows Defender 防火墙高级安全**，进入入站规则部分。

修改现有的远程桌面规则，或者新建一个允许 TCP 流量通过新端口的入站规则。确保规则允许连接，并应用于所需的网络配置文件。

## 重启服务以应用更改

端口更改只有在重启远程桌面服务或重启系统后才会生效。建议完整重启服务器，确保配置生效且稳定。

## 使用新端口连接

建立新的远程桌面连接时，必须在 IP 地址或主机名后显式指定端口。例如：

```
203.0.113.10:3390
```

## 总结

更改 Windows RDP 端口能有效降低被自动扫描和未授权连接尝试的风险。操作流程包括更新 Windows 注册表、在防火墙中放行新端口，以及重启系统或服务。

完成后请立即验证访问是否正常，并记录配置的端口，避免未来连接问题。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />