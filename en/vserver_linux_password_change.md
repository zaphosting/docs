---
id: vserver_linux_password_change
title: VPS: Change root password for Linux server
description: Information on how to change the root password for your Linux VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Password
---

## 📄 Webinterface

The password can be changed via our web interface. Open the page "Access and Security", which you can find at the left of the navigation.

![](https://screensaver01.zap-hosting.com/index.php/s/DFNK29ndSq84XmY/preview)

The root password field is located there where the desired password can be set. 

> Please keep in mind that it has to be at least 8 characters long and contain upper and lower case letters (a-z/A-Z), numbers (1-9) and special characters (!@=#$%&-?_;:.,). If that's not the case, then it won't be applied to the server.

After the password has been entered, a pop-up message appears which can be confirmed with "ok". 

![](https://screensaver01.zap-hosting.com/index.php/s/YLaknHS8L42e5s8/preview)

If all requirements are met, the system will confirm that the password has been successfully changed. 


✅ The password has now been changed. 


From now on, the password can be viewed in our web interface for 3 hours. After that it will be deleted due to security reasons. To view the password, just click on the eye icon at "Password"

![](https://screensaver01.zap-hosting.com/index.php/s/e9aQDLjDC9AbCRi/preview)

Afterwards a pop-up window appears where the password is displayed.


## 💻 Server Console

The password can also be changed via the Server Console, it doesn't matter if you access it via Putty or via Serial console.

> Important: This option can only be used if you still have access to the server.

If you are logged into the console, you can change the password with the command "passwd". After that you have to type in the password once again to confirm it. If this is done and the password matches the first one, the console will confirm the change.


If both passwords are not equal, then the console will stop the operation. in this case you have to run the command "passwd" once again.

> ⚠️ Important: If you change the password via Console, it cannot be displayed for 3 hours in our web interface under Access and Security.
