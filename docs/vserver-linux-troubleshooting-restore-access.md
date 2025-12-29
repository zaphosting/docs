---
id: vserver-linux-troubleshooting-restore-access
title: "VPS: Restore access"
description: "Discover how to regain access to your Linux VPS after a password lockout and minimize downtime → Learn more now"
sidebar_label: Restore access
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

It can happen quickly. You try to log in to your Linux server, but the password is no longer accepted or has been forgotten. As a result, access to the system and critical data or services is no longer possible. This situation can be frustrating, especially when the server is required for ongoing operations. In most Linux distributions, access can be restored using the recovery mode without reinstalling the operating system. By following the steps below, you can regain access to your server and continue working with minimal disruption.



## Restore access

To reset the password using recovery mode, the system must be started with access to the GRUB boot menu. During system startup, open the GRUB menu and select **Advanced options for Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

On the next screen, choose the entry that starts the system in **recovery mode**. This will load the recovery environment instead of the normal operating system.

Once the recovery menu is displayed, select **root – Drop to root shell prompt** and confirm the selection. Press Enter again to access the root shell.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

In recovery mode, the root filesystem is mounted as read only by default. To allow password changes, it must be remounted with write permissions. Execute the following command:

```bash
mount -o remount,rw /
```

If the username is unknown, all available user accounts can be listed by checking the home directories:

```
ls /home
```

To reset the password, use the `passwd` command followed by the username:

```
passwd username
```

Replace `username` with the actual account name. Enter the new password and confirm it when prompted. The password input will not be displayed on the screen. Once the password has been updated successfully, restart the system by using the `reboot` command.



## Conclusion

Once you have completed the process, you should have successfully set a new password for the desired user. You can now use this to log in again via the remote desktop connection. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

