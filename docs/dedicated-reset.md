---
id: dedicated-reset
title: Server reset
description: Information on how to reset your dedicated server from ZAP-Hosting - ZAP-Hosting.com Documentation
sidebar_label: Server reset
---



Are you experiencing problems with your server or would you like to completely wipe the data of your server? This is no problem and can be easily realized. The existing data can for example be completely deleted by the use of a Wipe ISO. 



## Preparations

First of all, the required Wipe ISO must be mounted and executed in order to perform the actual process of resetting the data. ISO files can be mounted either via the ILO or via the remote console. If you don't know exactly how to do this yet, please have a look at the [Own ISO](dedicated-iso.md) guide. 

Now mount the following ISO to your server and restart it afterwards:


```
http://185.223.30.65/wipe.iso
```



## Reset of data

Once the server has been restarted, the Wipe ISO should be automatically detected and loaded. Connect to your dedicated server using a remote console of your choice.

![image](https://user-images.githubusercontent.com/26007280/217034014-ae5b5477-7ac8-4f67-ba6c-3c8e419ad621.png)



There you will see how the server automatically executes the process and how far the formatting progress is. Your server will overwrite all existing volumes once, so that there will be no more data. Depending on the size of the SSD, this process may take about 45 minutes - 2 hours.

![image](https://user-images.githubusercontent.com/13604413/159174333-ef109e7e-2e79-4201-81cf-b33301c4d0b7.png)



:::info
Important: This process cannot be undone and is therefore final. There are no additional backups that can be imported in case of need. We therefore advise you not to perform this process unless you are absolutely sure that you want to delete your data. 
:::
