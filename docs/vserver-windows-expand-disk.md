---
id: vserver-windows-expand-disk
title: "VPS: Extending the disk (partition) on Windows Server"
description: "Discover how to safely extend your Windows server partition to utilize new disk space effectively → Learn more now"
sidebar_label: Extend Disk (Partition)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows OS provides built-in disk and partition management allowing you to easily perform a wide variety of disk management actions including extending partitions, splitting disks and more. Part of this is the ability to extend partitions, which is particularly important after upgrading storage capacity for your Windows server. In this guide, we will cover the process of extending a partition on your Windows server.

<InlineVoucher />

## Preparation

Begin by connecting to your Windows server via RDP. If you need help doing this, please refer to our [Initial Access (RDP)](vserver-windows-userdp.md) guide.

There are two methods of managing disks and partitions, one is through the **Disk Management** utility tool and the other is through **diskpart** CLI. The **Disk Management** tool provides a GUI version of Diskpart which can perform most of the common actions, including extending partitions. However, for advanced users, `diskpart` could be utilised as it is much more extensive and powerful versus the tool.

## Extending Partition

In various scenarios, it may be necessary to extend your existing partition to make use of new disk space. One of these scenarios is upgrading your server's disk space which by default will not be assigned until you extend your main drive partition.

We recommend following the **Disk Management** utility tool method as it is much easier, especially for beginners. This process is safe and does not affect data at all.

<Tabs>
<TabItem value="disk-management" label="Via Disk Management (GUI)" default>

Begin by opening the **Disk Management** tool. Simply search for this in the start menu, or alternatively open it via run by pressing `Windows Key + R` and entering `diskmgmt.msc` followed by confirm.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

With the tool open, right-click on the main partition and select the **Extend Volumne** action which will open a new wizard menu.

:::tip
The main boot drive will always be the **C:** drive.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

In the wizard select **Next** which will take you to setup page allowing you to allocate how much space you wish to add. By default, Windows will automatically populate this to the total unallocated space which is ideal.

Therefore you can select **Next** again and lastly select **Finish** to complete the process.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

Once the process is complete, the current configuration is displayed again in Disk Management with updated disk size.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Via Diskpart (CLI)">

Begin by opening a command prompt as administrator. Search for this in the windows start menu, right-click and select **Run as administrator**.

Simply run the `diskpart` command to enter the CLI utility. Once the utility is loaded, run `list disk` to return a list of all currently connected disks.

Next run `select disk [disk_number]` replacing `[disk_number]` with the number of the drive from the previous list that you wish to extend.

:::tip
The main boot drive will always be the **C:** drive.
:::

With the disk selected, run `list volume` to return a list of all volumes from the selected drive. Find the volume that you wish to extend and then run `select volume [volume_number]` replacing `[volume_number]` with the number of the volume from the previous list.

With both the drive and volume now selected, you can proceed with extending the volume using the following command. You can either run the command alone to utilise all unallocated space or specify a size.
```
# Extend to all unallocated space
extend

# Extend to a specific size (10240 = 10240MB = 10GB)
extend size=10240
```

Upon success, you should see the volume size increase when listing disks again and viewing in file explorer. To quit the CLI, simply run the `quit` command.

</TabItem>
</Tabs>

## Conclusion

You have successfully extended your main partition on your disk to utilise all disk space. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
