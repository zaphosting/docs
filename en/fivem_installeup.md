---
id: fivem_installeup
title: FiveM: Install EUP on server
description: Information on how to install EUP on your FiveM server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Install EUP
---

> To install the EUP a Fivem Element Argentum (or higher) key is required [Fivem Patreon](https://www.patreon.com/fivem)

## Connect to FTP

Before EUP can be installed, the [FTP access](gameserver_ftpaccess.md) must be set up

After this has been set up, you can now connect and open the server folder.

![image](https://user-images.githubusercontent.com/26007280/189978708-0b6694b6-861d-456e-a154-93e0c1262158.png)

## Preparation

Now we download EUP from the [FiveM Forums](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599)

We also need to [download NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip)

after we have downloaded the `eup-ui.7z`, `eup-stream.7z` and `NativeUI-master.zip`, we have to unzip them

![image](https://user-images.githubusercontent.com/13604413/159167172-33ea451b-fc5f-4dd7-8768-c55dd4e791c5.png)

> Note: For NativeUI, you have to open the "NativeUI-master" folder first, there you will find the correct scripts.

After unzipping the resource, it should now contain a __resource.lua or fxmanifest.lua and script files/folders.

**eup-ui**
![image](https://user-images.githubusercontent.com/13604413/159167183-5a3c682f-5e9f-4df3-938f-f8168f2c8ab6.png)

**eup-stream**
![image](https://user-images.githubusercontent.com/13604413/159167191-887fb1a0-961d-4b57-9beb-78a6a0a5ef00.png)

**NativeUI**
![image](https://user-images.githubusercontent.com/13604413/159167198-1c976213-42f3-41df-b444-b8dafb8ebeec.png)

> If this is not the case, they may be in a subfolder, usually with the same name.

## Upload resources


Now we install the resources, in our example via WinSCP, we can upload them via drag&drop into the "resources" folder

![image](https://user-images.githubusercontent.com/13604413/159167216-255c1841-8db9-4d43-a0ec-58f6783ead3a.png)

After this has been uploaded, the server.cfg must be opened in the server-data folder:

![image](https://user-images.githubusercontent.com/13604413/159167223-cd8e0b4b-67a4-420e-9f0d-c74e070e489f.png)

Among the remaining start entries for resources you can now add the entry for our resources, in this case "NativeUI", "eup-stream" and "eup-ui":

![image](https://user-images.githubusercontent.com/13604413/159167238-56880863-9a49-4651-a95c-daa070743def.png)


After that the server can be restarted and EUP ingame should be available via the `/eup` command!
