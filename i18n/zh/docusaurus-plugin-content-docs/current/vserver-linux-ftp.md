---
id: vserver-linux-ftp
title: "VPS：FTP 服务不可用（GS/TS3 界面）"
description: "了解如何排查并恢复 VPS 上的 FTP 访问，当游戏或 Teamspeak 服务器无法连接时 → 立即了解更多"
sidebar_label: FTP 服务不可用
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

通过 GS/TS3 界面创建的游戏服务器和 Teamspeak 3 服务是全托管服务。FTP 访问通过该界面及其底层基础设施提供。如果无法访问 FTP，通常原因与服务状态、内部配置或基础设施相关，而非本地 FTP 客户端设置问题。



:::warning GS/TS3 界面提供的 FTP 服务说明
本指南仅适用于使用 GS/TS3 界面功能时自动安装和管理的 FTP 服务。如果未安装 GS/TS3 界面，系统默认不会设置 FTP 服务器。在这种情况下，除非手动安装 FTP 服务，否则无法使用 FTP 访问。
:::

<InlineVoucher />



## 通过 SSH 检查 ProFTPD 状态

通过 SSH 或控制台连接服务器，使用以下命令检查 FTP 服务当前状态：

```
service proftpd status
```

输出会显示 ProFTPD 服务当前是否正在运行。如果服务显示为 active 或 running，说明 FTP 服务可用且应接受连接。这种情况下，问题通常不在 FTP 守护进程本身，而可能与访问数据、防火墙规则或客户端配置有关。

如果状态显示为 inactive、dead 或 stopped，说明 FTP 服务未运行。服务停止时，无法建立任何 FTP 连接。

## 重启 FTP 服务

如果 ProFTPD 服务未运行，可以手动启动。执行以下命令：

```
service proftpd restart
```

启动或重启服务后，务必再次检查状态，确认 ProFTPD 是否正常运行。如果重启后服务显示为 active，FTP 访问应恢复正常。



## FTP 问题的常见原因

FTP 访问问题通常由 FTP 服务未运行或在系统重启/更新时被停止引起。配置错误也可能导致 ProFTPD 启动失败。有时其他服务占用了 21 端口，导致 FTP 服务无法绑定该端口。临时的系统或服务级别问题也可能导致 FTP 服务意外停止。

如果 ProFTPD 无法启动或启动后立即停止，需要进一步排查。建议查看系统日志或联系支持团队。



## 总结



GS/TS3 游戏服务器服务的 FTP 访问完全通过 GS/TS3 界面管理。如果常规检查无法解决问题，请及时升级至支持团队。提供完整准确的信息有助于更快解决问题。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂



<InlineVoucher />