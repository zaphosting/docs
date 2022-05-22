---
id: altv_installresources
title: AltV: Installing resources on the server
description: How do I install mods and resources on an AltV server? ZAP-Hosting.com documentations
sidebar_label: Resource Installation
---

## Connect with FTP

Before resources can be installed, the [FTP-Access](gameserver_ftpaccess.md) must be set up:

![image](https://user-images.githubusercontent.com/13604413/159184693-261d0660-4cfb-472e-b3bb-945ab6a33346.png)

After this has been set up, you can now connect and open the server folder:

![image](https://user-images.githubusercontent.com/13604413/169707290-e987df75-e338-4fb7-aa64-e9fb80fd3df0.png)


## Preperation

After a resource has been downloaded, it is usually ZIP packed, it must now be unpacked (e.g. with 7Zip, WinRar or WinZip)

After the resource has been unpacked, it should now contain a resource.cfg and script files / folder.

![image](https://user-images.githubusercontent.com/13604413/169707329-52aaa6ab-2de2-48ac-9c45-3a5d95968edc.png)

> If this is not the case, they may be in a subfolder, usually with the same name.

## Upload Resources

To install resources with WinSCP, they can be uploaded to the "resources" folder using drag & drop.
It would be the same case with installing via FileZilla. 

![image](https://user-images.githubusercontent.com/13604413/169707344-7e6e6266-5540-4b9b-a287-ce633a0f592e.png)

Once uploaded, the server.cfg must be opened in the gta5-altv-linux folder:

![image](https://user-images.githubusercontent.com/13604413/169707357-3a63ede6-1385-485c-bfa2-6b62fb9e629a.png)

Under the remaining start entries for resources you can now add the entry for our resource, in this case "altv-speedo":

![image](https://user-images.githubusercontent.com/13604413/169707378-85eb7c30-aba5-4b17-8b5f-4ed931aee14d.png)

> Note: There must be a comma after each line in this list, except the last one.


Then the server can be restarted and the resource should appear ingame!
