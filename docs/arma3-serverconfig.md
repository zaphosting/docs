---
id: arma3-serverconfig
title: "Arma 3: Edit server configuration file"
description: "Discover how to customize your Arma 3 server settings for optimal gameplay and performance → Learn more now"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server.cfg parameters and configuration

The Server.cfg of Arma 3 is required for the operation of any Arma 3 server and offers a variety of 
Possibility to configure an Arma 3 server individually.

The Server.cfg is edited either directly via FTP on a pre-installed game server or VPS. 
With a game server the menu item Configs is also available on the left side in the game server interface, from there the
Server.cfg can be edited with a few clicks.

<InlineVoucher />

## Edit the Server.cfg via the ZAP editor

To edit the server.cfg of your Arma 3 server in the ZAP editor, first click on your server in the interface and then select "Configs" in the menu on the left side under "Settings". 

![](https://puu.sh/Fo5i6/183ee65ef3.png)


There you will see a list of the configuration files available for Arma 3, we only edit the Server.cfg now. 
With a click on the blue button "Open file" you get into the ZAP editor. 

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)


There you have the possibility to configure your Arma 3 server individually, including the server name and the number of slots. You can adjust the settings as you like and click on "Save" afterwards.

![](https://puu.sh/Fk7I1/407a039e38.png)


When specifying the server name, make sure to enclose the name in quotation marks, otherwise it cannot be read by the server. It is also important to end each line with a semicolon (;), otherwise the server will not be able to read the following settings. An exception is the option "motd[]", there you have to end every line with a comma, except the last one where you have to omit it. 

## Right:

Here, quotation marks such as semicolon and comma are set correctly.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)


## Wrong: 

The setting of quotation marks such as semicolon and comma is missing here, the server would not start like this.

![](https://puu.sh/Fk7NK/f96a31199d.png)


## Edit the Server.cfg via FTP

Instead of the ZAP editor the Server.cfg can also be edited directly via FTP. In this example we use **FileZilla**
to establish a connection via FTP to the game server server and the directories of your game server.

Here you learn how to connect to your game server via FTP: [Access via FTP](gameserver-ftpaccess.md).


## Establishing the connection and navigating to the path of the server.cfg

:::info
Make sure that your game server is stopped while you are working on it via FTP.
:::

After you have connected to your game server via FTP as explained above, you navigate via FileZilla in the lower right window to the directory of your server.cfg, which you can find under: **/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
The name of the first folder (g198376) is the ID of your server, so you can keep the folders apart if you have more than one game server.
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

In the directory you will find the Server.cfg of your Arma 3 server as well as other existing configuration files.
Now you can **right click** on the server.cfg and click on **View/Edit**.

![](https://puu.sh/Fo5fM/f3519a8936.png)

Now a standard editor opens in which you can edit your Server.cfg as described above. 
After you have edited your Server.cfg you can save it by pressing **CTRL+S**. Then you can close the editor,
your server is now ready to start again.



<InlineVoucher />
