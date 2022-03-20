---
id: scp_newroles
title: SCP: Secret Laboratory Server: Adding new roles
description: Information on how to add new roles to your SCP server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Add new roles 
---

## 📃 View the Config
New roles are entered in the "config_remoteadmin.txt" file.
You can find this config file by clicking on "Configs" in the interface of your server.

![image](https://user-images.githubusercontent.com/13604413/159182711-19402a7e-8383-4cd0-b37b-f6c68f97c997.png)

Here you can then then search for the above Config and then click on the "eye" to the right to open it.

## 🕴️ Copy existing roles
If you have the Config open, you can search for these entries in it:

![image](https://user-images.githubusercontent.com/13604413/159182751-0185aab8-bd2e-4927-b3dd-ea47692f1d67.png)

These are example roles that have already been entered.
We insert a new entry below.
To do this, we copy the block from one of the roles above and insert this part under the last role.
In our example, we copied the role "Moderator" and inserted it below:

![image](https://user-images.githubusercontent.com/13604413/159182791-570da30e-7155-4550-b9c6-acf1b21311ab.png)

## ✏️ Add own role
We can now edit the just inserted block from the already existing role and enter our own desired values there.
In our example we used the name "ZAP":

![image](https://user-images.githubusercontent.com/13604413/159182832-9bee2593-bc9d-403c-88da-ea72ba41cecf.png)

As far as this is done, we still have to add the role to the list of available roles.
This also goes only slightly further down in the identical Config.

![image](https://user-images.githubusercontent.com/13604413/159182860-38595abf-ca1b-460e-a19d-57b338f1af6d.png)

We therefore enter our role under the "moderator" role.
> ATTENTION: Please note the spaces before and after the "-"!

## 🔒 Permissions
At the very bottom of the "config_remoteadmin.txt" config file we can adjust the permissions for the respective roles.
So if we want to assign a permission to our role, we can enter the name of the role in the brackets.
Like it is shown in this example:

![image](https://user-images.githubusercontent.com/13604413/159182890-baab3f9e-1e3d-4238-bc89-a531217e8d02.png)

