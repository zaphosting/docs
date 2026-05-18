---
id: dedicated-windows-eval-to-full
title: "独服：将 Windows Server 评估版转换为完整版"
description: "了解如何将 Windows Server 评估版转换为完整版 → 立即了解更多"
sidebar_label: 评估版转完整版
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windows Server 评估版是为测试设计的，使用时间有限。想要在生产环境中继续使用同一安装，可以将评估版转换为完全授权的完整版，无需重装系统。

微软支持使用 DISM 工具进行原地转换，前提是你有目标版本的有效产品密钥。

<InlineVoucher />



## 前提条件

开始转换前，请确保你拥有想要切换到的 Windows Server 版本的有效产品密钥，比如 Standard 或 Datacenter。产品密钥必须与目标版本完全匹配。



## 获取当前版本

要确认当前安装的是哪个版本，打开管理员权限的命令提示符或 PowerShell，执行以下命令：

```powershell
DISM /Online /Get-CurrentEdition
```

输出会显示当前激活的版本标识。评估版通常显示为 `ServerStandardEval` 或 `ServerDatacenterEval`。



## 检查支持的目标版本

并非所有版本都能转换成任意其他版本。要查看当前安装支持转换到哪些授权版本，运行以下命令：

```
DISM /Online /Get-TargetEditions
```

列出的版本即为可用于转换的有效目标版本。



## 升级评估版到完整版

确认目标版本并准备好有效产品密钥后，就可以开始升级了。`<TargetEdition>` 的值必须是 DISM 支持的目标版本之一。

常见目标版本包括：
- `ServerStandard`
- `ServerDatacenter`

使用以下命令启动转换。将 `<TargetEdition>` 替换为目标版本，将 `<ProductKey>` 替换为你的 25 位 Windows Server 产品密钥：


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| 操作系统版本                 | 通用批量许可密钥               |
| ---------------------------- | ----------------------------- |
| Windows Server 2025 Standard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
| Windows Server 2025 Datacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |

转换过程中，进度可能会短暂停滞，这是正常现象。转换完成后，需要重启服务器以完成版本切换。



## 验证 Windows Server 版本

服务器重启后，打开管理员权限的命令提示符或 PowerShell，运行：

```powershell
DISM /Online /Get-CurrentEdition
```

输出应显示已授权的版本，如 `ServerStandard` 或 `ServerDatacenter`，确认评估版已成功转换。

此时，屏幕右下角会显示 **激活 Windows** 水印。你可以使用购买的 Windows Server 授权激活 Standard 或 Datacenter 版本。



## 总结

恭喜！你已成功将 Windows Server 从评估版切换到完整版。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂



<InlineVoucher />