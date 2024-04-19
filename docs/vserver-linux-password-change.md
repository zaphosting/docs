---
id: vserver-linux-password-change
title: "VPS: VPS Change root password for Linux server"
description: Information on how to change the root password for your Linux VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Password
---

## Webinterface

The password can be changed via our web interface. Open the page "Access and Security", which you can find at the left of the navigation.

![](https://user-images.githubusercontent.com/61839701/165682186-8ebee656-d0d1-4697-bef7-b93877549aee.png)

The root password field is located there where the desired password can be set. 

:::info
Please keep in mind that it has to be at least 8 characters long and contain upper and lower case letters (a-z/A-Z), numbers (1-9) and special characters (!@=#$%&-?_;:.,). If that's not the case, then it won't be applied to the server.
:::

After the password has been entered, a pop-up message appears which can be confirmed with "ok". 

![](https://user-images.githubusercontent.com/61839701/165682312-00ebebbb-1f93-492a-ae53-56a8d689afe0.png)

If all prerequisites are met, the system will confirm that the password has been successfully changed. 


✅ The password has now been changed. 


From now on, the password can be viewed in our web interface for 3 hours. After that it will be deleted due to security reasons. To view the password, just click on the eye icon at "Password"

![](https://user-images.githubusercontent.com/61839701/165682372-657ce47d-ff36-4ec2-892a-5fba1f02d996.png)

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
