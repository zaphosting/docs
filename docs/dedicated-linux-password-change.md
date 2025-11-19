---
id: dedicated-linux-password-change
title: "Dedicated Server: Change root password for Linux server"
description: "Discover how to securely change and manage your server password via web interface or console for enhanced access control → Learn more now"
sidebar_label: Change Password
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Webinterface

The password can be changed via our web interface. Open the page "Access and Security", which you can find at the left of the navigation.

![](https://screensaver01.zap-hosting.com/index.php/s/Kt3B9n4sGpbpn5q/preview)

The root password field is located there where the desired password can be set. 

:::info
Please keep in mind that it has to be at least 8 characters long and contain upper and lower case letters (a-z/A-Z), numbers (1-9) and special characters (!@=#$%&-?_;:.,). If that's not the case, then it won't be applied to the server.
:::

After the password has been entered, a pop-up message appears which can be confirmed with "ok". 

![](https://screensaver01.zap-hosting.com/index.php/s/Ckc6PLB3tRY5epR/preview)

If all prerequisites are met, the system will confirm that the password has been successfully changed. 


✅ The password has now been changed. 


From now on, the password can be viewed in our web interface for 3 hours. After that it will be deleted due to security reasons. To view the password, just click on the eye icon at "Password"

![](https://screensaver01.zap-hosting.com/index.php/s/XfpFrGg5LyKEiRL/preview)

Afterwards a pop-up window appears where the password is displayed.


## Server Console

The password can also be changed via the Server Console, it doesn't matter if you access it via Putty or via Serial console.

:::info
Important: This option can only be used if you still have access to the server.
:::

If you are logged into the console, you can change the password with the command "passwd". After that you have to type in the password once again to confirm it. If this is done and the password matches the first one, the console will confirm the change.


If both passwords are not equal, then the console will stop the operation. in this case you have to run the command "passwd" once again.

:::info
Important: If you change the password via Console, it cannot be displayed for 3 hours in our web interface under Access and Security.
:::


