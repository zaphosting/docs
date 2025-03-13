---
id: vserver-windows-expand-disk
title: "VPS: Expanding the disk (partition) on Windows Server"
description: Information on how to expand the hard disk of your Windows VPS from ZAP-Hosting after an upgrade - ZAP-Hosting.com documentation
sidebar_label: Expand Disk (Partition)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Sometimes it can happen that the hard disk or partitions are not properly extended or assigned, for example after an upgrade. If this is the case, you can solve this problem with the following steps. 

<InlineVoucher />



## Expand the partition

The partition can be adjusted using disk management. To open the application, press `Windows key` + `R` and then enter `diskmgmt.msc`. After this, click on `OK`.

![](https://screensaver01.zap-hosting.com/index.php/s/NBSLGqCNZDtebdS/preview)

Now the **Disk management** opens. Here you have the possibility to adjust partitions. Click with **right click** on the already existing partition and select (1) Extend Volume

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)



Now the **Extend Volume Wizard** opens to extend volumes. Start the wizard by clicking on **Next**. The available disk space will be detected automatically, you just have to continue with another **Next**. Confirm and complete this process by pressing on **Finish**.

![img](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)



Once the process is complete, the current configuration is displayed again in Disk Management. 

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)





## Conclusion

Your disk (partition) should now be set and usable as intended. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
