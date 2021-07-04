---
id: vserver_windows_expand_disk
title: VPS: Extending the hard disk on Windows Server
description: Information on how to expand the hard disk of your Windows VPS from ZAP-Hosting after an upgrade - ZAP-Hosting.com documentation
sidebar_label: Extend disk
---

## 💾Add Hard disk space via the CMD console

To expand your hard disk via the console, you need to connect to the server via RDP. After that, enter **CMD** in the search line.

![](https://screensaver01.zap-hosting.com/index.php/s/MbsLCraiLENS3fZ/preview)

Now you enter the following commands one after the other: 
1. **DISKPART**
2. **select volume 2**
3. **extend filesystem**

Then the hard disk was extended.

![](https://screensaver01.zap-hosting.com/index.php/s/kkZeG4eMqXZNoyB/preview)

## Add 💾Add Hard disk space via the settings

To expand your hard disk using the Windows settings, you must enter **hard disk** in the search line. Then the suggestion **Create and format hard disk partition** appears.

![](https://screensaver01.zap-hosting.com/index.php/s/EfxjPn2ENLCcp4c/preview)

There you can see which memory has not yet been allocated. To include it now, you just have to do a **right click** and then **extend volume...**.

![](https://screensaver01.zap-hosting.com/index.php/s/AZsmjmsYFBwooDs/preview)

Then simply click through the pages by clicking on **Continue** and then on **Finish**.

![](https://screensaver01.zap-hosting.com/index.php/s/SEaPTzboQcfRiy8/preview)

Now the extended memory can be viewed and used.









