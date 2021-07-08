---
id: scp_newroles
title: SCP: Secret Laboratory Server: Adding new roles
description: Information on how to add new roles to your SCP server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Add new roles 
---

## 📃 View the Config
New roles are entered in the "config_remoteadmin.txt" file.
You can find this config file by clicking on "Configs" in the interface of your server.

![](https://screensaver01.zap-hosting.com/index.php/s/5EH5MGXojAZPDFn/preview)

Here you can then then search for the above Config and then click on the "eye" to the right to open it.

## 🕴️ Copy existing roles
If you have the Config open, you can search for these entries in it:

![](https://screensaver01.zap-hosting.com/index.php/s/zoFycyDokBH3FFe/preview)

These are example roles that have already been entered.
We insert a new entry below.
To do this, we copy the block from one of the roles above and insert this part under the last role.
In our example, we copied the role "Moderator" and inserted it below:

![](https://screensaver01.zap-hosting.com/index.php/s/KboroeRRASxXYHw/preview)

## ✏️ Add own role
We can now edit the just inserted block from the already existing role and enter our own desired values there.
In our example we used the name "ZAP":

![](https://screensaver01.zap-hosting.com/index.php/s/FRMgq8Q4BZifFEy/preview)

As far as this is done, we still have to add the role to the list of available roles.
This also goes only slightly further down in the identical Config.

![](https://screensaver01.zap-hosting.com/index.php/s/oZK7F9kdtL3jwje/preview)

We therefore enter our role under the "moderator" role.
> ATTENTION: Please note the spaces before and after the "-"!

## 🔒 Permissions
At the very bottom of the "config_remoteadmin.txt" config file we can adjust the permissions for the respective roles.
So if we want to assign a permission to our role, we can enter the name of the role in the brackets.
Like it is shown in this example:

![](https://screensaver01.zap-hosting.com/index.php/s/pTD3jHMRsnPoGbc/preview)
