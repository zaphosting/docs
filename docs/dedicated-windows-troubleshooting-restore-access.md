---
id: dedicated-windows-troubleshooting-restore-access
title: "Dedicated Server: Restore access"
description: "Discover how to regain access to your Windows Dedicated Server after a password lockout and minimize downtime → Learn more now"
sidebar_label: Restore access
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

It can happen quickly... You try to log into your Windows Server, but your password is no longer accepted or you simply forgot it. Suddenly, you're locked out and access to important data and applications is no longer possible. This situation is obviously frustrating, but it’s far from the end. By following the steps outlined below, you can regain access to your Windows Dedicated Server and continue your work with minimal disruption.



## Preparation
Resetting access from the administrator account is done by using a Windows ISO file. Accordingly, the same ISO file is used that was originally used for the installation of the Windows Server operating system. 

This step can be carried out either via the [**First installation**](dedicated-setup.md) or via **[ISO](dedicated-iso.md)**. Select or specify the ISO file that was originally used, depending on the method used.

Mount the ISO and restart the system afterwards. The Windows installation interface should open again the next time the system is started. The result should look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Restore access

Now it's time to reset the access of the administrator account. To do this, follow the first steps of the setup again. However, you only need to proceed to the start of the installation and then navigate to **Repair your computer**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



This opens the advanced options. Click on the **Troubleshoot** option and then on **Command Prompt**. This will open the command prompt (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

The commands listed below must now be executed one by one in the command prompt:

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

The keyboard layout for the iLO HTML console may differ from your own, so that certain symbols are located on different keys. Take this into account for correct execution of the commands. 

:::

After the server reboot, on the home login screen, please press the **Win+U** key combination. In the Command Prompt window, please type the following:

```
net user Administrator YourNewPassword
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Your password has now been changed. However, you must undo your changes to the **Utilman files**. To do this, simply restart your server and follow these steps again. In the command prompt, please execute the following commands again:

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Conclusion

Once you have completed the process, you should have successfully set a new password for the administrator user. You can now use this to log in again via the remote desktop connection. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

