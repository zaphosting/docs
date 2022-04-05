---
id: assettocorsa_contentmanager
title: Configure Server with Content Manager
sidebar_label: Configure Server with Content Manager
---


> **Important** To manage the server with Content Manager, the full version is required, the lite version can *not* manage servers.


## Preparation

First, we open our Content Manager and click on the sandwich menu at the top right, where we select "Server":

![image](https://user-images.githubusercontent.com/13604413/159136989-b4cfb732-072d-472d-bb8b-8abe97508107.png)

Here we now create a new preset and select it:

![image](https://user-images.githubusercontent.com/13604413/159136995-7994802f-4902-47c2-bdde-97187e7ccbf0.png)

## Set Server Slots

We first need to set how much capacity our server has, in our case our server is only 10 slots, so we select '10' for Capacity:

![image](https://user-images.githubusercontent.com/13604413/159137001-22301dbb-838a-46dc-a24c-ebdf903b1768.png)

## Set Map

Here Imola is selected as map by default, by clicking on the map we can select our own map:

![image](https://user-images.githubusercontent.com/13604413/159137008-d2e5e0ef-d3df-402e-9611-66b93b4916fb.png)



## Set Cars

Now we change to the tab "Entry List", here we can now add new cars:


![image](https://user-images.githubusercontent.com/13604413/159137029-f4dcf8ef-c3f6-4428-bb1e-27315637c36a.png)


![image](https://user-images.githubusercontent.com/13604413/159137034-22cb04a5-17a4-4c39-9697-c65fdac44561.png)


> Note that all car slots are filled and no more than the amount of available slots are set.
> ![image](https://user-images.githubusercontent.com/13604413/159137039-17947b65-947a-4276-b681-0a7f27b49e3e.png)

## Configure FTP Upload

Via the "Advanced" menu we can configure an FTP uploader so that you can upload your server config with one click.

![image](https://user-images.githubusercontent.com/13604413/159137074-ab04ba8b-29af-499f-a938-f611c6046cce.png)


Now enter your FTP data here:

![image](https://user-images.githubusercontent.com/13604413/159137117-597633df-d277-4ae6-b5bc-e155b4fbdf30.png)

> In the "Folder" you must enter the ID of your game server as you see it in the URL of your game server, for example:
> > https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/

In our case, the whole thing would be:

```
/g427814/assetto-corsa/
```

For AssettoServer: 

```
/g427814/assettoserver/
```

After that you can click on "Upload Content", the config, track and cars that have been configured will be uploaded automatically, then you only need to start your server!
