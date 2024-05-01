---
id: satisfactory-switchexperimental
title: "Satisfactory: Experimental Build"
description: Information on Experimental Build for Satisfactory from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Experimental Build
---

## What is experimental build?
Satisfactory consists of two versions, the regular build and the experimental build. The regular build is more reliable, stable and less bug-prone as it is a more finalised build. On the other hand, the experimental build provides access to major patches first before being released as a regular build, thus it has higher chances of bugs and has much more frequent updates but the benefits of trying out major updates first!

:::info
Note: Regardless of which build you choose, both your server and your game client must be on the same build version to be able to connect.
:::

## How to switch to experimental build?
Through our gameserver system, it is very simple to change the build of the server through our website. Before beginning, we recommend that you back up your Satisfactory savegames as switching the game will erase all files.

### Backing up savegames
Backing up your entire gameserver or gamesaves is very easy. Head over to the Satisfactory product page and enter the `Tools -> Backups` tab.

![Screenshot 2023-02-21 192618](https://user-images.githubusercontent.com/42719082/220439833-3b8f24d4-75bd-42f2-84a5-df59206497e4.png)

On this page you can perform a wide range of functions, including automatic backups which is further explained [on this page](gameserver-backups.md). Here we will focus on a manual backup.

At the top of the page, simply press the green + icon and accept the prompt to perform a backup of the entire gameserver to your ZAP backup storage.

![Screenshot 2023-02-21 193113](https://user-images.githubusercontent.com/42719082/220440713-4f7acd14-3b9f-4f2b-a03d-72b8b1a9ec2d.png)

Your backup has now been created and it can be accessed via FTP, shown [on this page](gameserver-ftpaccess.md).

Alternatively, you can download the savegame files directly from the `Savegame Manager` section in the webinterface. You can find this [on this page](satisfactory-savegame.md).

### Switching to the experimental gameserver
Firstly, head over to your Satisfactory product page and enter the `Settings -> Games` tab.

![Screenshot 2023-02-21 191212](https://user-images.githubusercontent.com/42719082/220437310-bb85b189-e599-401d-a30c-35232ce0b46b.png)

You will see the `Installed games` section which shows games that you have already installed. If you've switched between either build before, it will be there and you can move to the final step to activate game.

Next scroll down and press on the `Available Games` drop down menu and search for "Satisfactory" in the text box.

![Screenshot 2023-02-21 191713](https://user-images.githubusercontent.com/42719082/220438422-c1f512c0-a0c3-4940-8423-0155b1692875.png)

Press the green download button and then confirm the setup on the prompt that appears. The download of the specified server build will now begin.

![Screenshot 2023-02-21 191956](https://user-images.githubusercontent.com/42719082/220438714-8dc8ccb2-24f1-4a12-86da-112edb58277d.png)

>The download may take up to a few minutes. Please wait till it finishes before continuing with the final step.

Now both versions will show up under `Installed games` for future reference, making it easier to switch between either.

Finally, you need to activate the game under the `Installed games` section. Press the blue activate game icon.

:::info
Attention: All data of the game will be deleted during reinstallation, make sure to go back a few steps and perform a backup if you haven't already.
:::

![Screenshot 2023-02-22 020606](https://user-images.githubusercontent.com/42719082/220502401-4738e1b7-e083-40e4-88f8-8e5e044f3270.png)

If you wish to change back to regular build, follow the same steps but pick the regular Satisfactory gameserver during the selection process instead!

## Switching game client to experimental
:::info
Note: Regardless of which build you choose, both your server and your game client must be on the same build version to be able to connect.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Firstly open your Steam and go to your game library. Search for "Satisfactory", right-click and select the properties menu.

![Screenshot 2023-02-21 203108](https://user-images.githubusercontent.com/42719082/220451989-b90762b7-0b13-4374-82e6-af24d3da321a.png)

Within the new menu, head over to the `Betas` section and select the `experimental`.

![Screenshot 2023-02-21 203435](https://user-images.githubusercontent.com/42719082/220452436-e30decc9-1a9d-4d4d-9aa6-5ff9681da1ef.png)

That's all, now you will have to wait for Steam to update the game to the selected game build after which you can start your game and enjoy your server!
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
For Epic Games, switching to experimental is even easier. All you have to do is head over to your library and find "Satisfactory Experimental" game. Both game builds on Epic Games launcher are their own in the library.

That's all, now you will have to wait for Epic Games to download and install the game after which you can start your game and enjoy your server!

</TabItem>
</Tabs>
