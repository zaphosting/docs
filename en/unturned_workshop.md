---
id: unturned_workshop
title: Unturned: Install Workshop content on server
description: Information on how to install Steam Workshop content and mods on your Unturned server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Workshop Content
---

The Steam Workshop gives you the opportunity to customize your server even more. In the following we will explain how you can add more content to your server by using the Steam Workshop. 

### Preparation

Various sources exist where you can download mods, maps, models, etc. The most popular one is the Steam Workshop. There you can find many resources that you can install on your server. First of all you have to find the desired workshop items. The Steam Workshop for Unturned can be found here:  [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)



Once you have decided, you have to copy the ID of the workshop item and then add it to the interface. Depending on whether you are browsing the Steam Workshop by using your browser or Steam Client you can copy the ID as shown below:

- **Steam Client**

  Do a right click on the Steam Workshop page of the workshop item and click on Copy page url. Copy the ID from the URL.

  ![img](https://screensaver01.zap-hosting.com/index.php/s/GFRMkRyFemGYJkJ/preview)

  

- **Browser**

  You will find a combination of numbers after **.../?id=** in the URL bar. Copy it.

  ![img](https://screensaver01.zap-hosting.com/index.php/s/d5t8p3iSZm52KbS/preview)





### Add content

Once the desired contents have been collected, they are now added to the server. The desired contents will be specified in the **WorkshopDownloadConfig.json** Config, which can be found in the interface under Configs.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfmCJcCHZCxywtJ/preview)

We now add the IDs of the individual Steam Workshop items to 'FileIDs'. The final result of this can look like this:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // Placeholder (Example)
    0987654321  // Placeholder (Example)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Workshop file update detected, shutdown in: {0}",
  "Shutdown_Kick_Message": "Shutdown for Workshop file update."
}
```

Afterwards the server must be started. The content added to the server will be downloaded automatically during the startup process. You can see this in the Live Console. The output should look like this:

```
1 workshop item(s) to download...
Downloading workshop item 1567256534
Successfully downloaded workshop item: 1567256534
```

The content has now been successfully downloaded, set up and should be active. 
