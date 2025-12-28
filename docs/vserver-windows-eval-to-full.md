---
id: vserver-windows-eval-to-full
title: "VPS: Convert Windows Server Evaluation to Full Version"
description: "Discover how to convert Windows Server Evaluation to Full Version → Learn more now"
sidebar_label: Convert Eval to Full
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows Server Evaluation editions are designed for testing purposes and are limited in time. To continue using the same installation in production, the evaluation edition can be converted to a fully licensed version without reinstalling the operating system.

Microsoft supports this in place conversion using the DISM tool, provided that a valid product key for the target edition is available.

<InlineVoucher />



## Prerequisites

Before starting the conversion, make sure you have a valid product key for the Windows Server edition you want to switch to, such as Standard or Datacenter. The product key must match the target edition exactly. 



## Obtaining current edition

To verify which edition is currently installed, open an elevated Command Prompt or PowerShell session and execute the following command:

```powershell
DISM /Online /Get-CurrentEdition
```

The output will show the active edition identifier. Evaluation installations are typically displayed as `ServerStandardEval` or `ServerDatacenterEval`.



## Checking supported target editions

Not every edition can be converted to every other edition. To see which licensed editions are supported for your current installation run the following command:

```
DISM /Online /Get-TargetEditions
```

The listed editions represent the valid targets that can be used for the conversion.



## Upgrade Evaluation to Full Version

Once the target edition is known and a valid product key is available, the upgrade can be started. The `<TargetEdition>` value must match one of the supported editions returned by the DISM target edition check.

Common target editions include:
- `ServerStandard`
- `ServerDatacenter`

Use the following command to start the conversion. Replace `<TargetEdition>` with the desired edition and `<ProductKey>` with your 25 character Windows Server product key:


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| Operating system edition       | Generic Volume License Key    |
| ------------------------------ | ----------------------------- |
| Windows Server 2025 Standard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
| Windows Server 2025 Datacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |

During the process, the progress may appear to pause for a short time. This behavior is normal. After the conversion completes, a restart is required to finalize the edition change.



## Verify Windows Server version

Once the server has restarted, open an elevated Command Prompt or PowerShell and run:

```powershell
DISM /Online /Get-CurrentEdition
```

The output should now display the licensed edition, such as `ServerStandard` or `ServerDatacenter`, confirming that the evaluation edition was successfully converted.

At this stage, you will see the **Activate Windows** watermark in the lower right corner of the screen. You can now use your purchased Windows Server license to activate the Windows Server Standard or Datacenter edition.



## Conclusion

Congratulations! You have now successfully switched your Windows Server Version from EVAL to Full. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />