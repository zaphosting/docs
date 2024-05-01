---
id: dedicated-reset
title: "Dedicated Server: Server reset"
description: Information on how to reset your dedicated server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Server reset
---



Are you experiencing problems with your server or would you like to completely wipe the data of your server? This is not a problem and can be easily done. For example, you can completely delete the existing data using a Wipe ISO.



## Preparations

The required Wipe ISO must be mounted and executed in order to perform the actual process of resetting the data. ISO Files can be mounted either via the iLO or via the remote console. If you don't know exactly how to do this yet, please have a look at the [Own ISO](dedicated-iso.md) guide. 

Mount the following Wipe ISO File to your server, then restart it:


```
http://185.223.30.65/wipe.iso
```



## Reset of data

Once the server has been restarted, the Wipe ISO should be automatically detected and loaded. Connect to your dedicated server using a remote console of your choice.

![image](https://user-images.githubusercontent.com/26007280/217034014-ae5b5477-7ac8-4f67-ba6c-3c8e419ad621.png)



There you will see how the server automatically executes the process and how far the formatting progress is. Your server will overwrite all existing volumes, effectively deleting all data. Depending on the size of the SSD, this process may take from 45 minutes to 2 hours.

![image](https://user-images.githubusercontent.com/13604413/159174333-ef109e7e-2e79-4201-81cf-b33301c4d0b7.png)



:::danger
This process cannot be undone and is therefore final. There are no additional backups that can be imported in case of need.
We strongly advise against performing this process unless you are absolutely certain you want to delete all your data.
:::
