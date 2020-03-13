---
id: arma3_serverconfig
title: Server.cfg
sidebar_label: Server.cfg
---


## Server.cfg parameters and configuration

The Server.cfg of ArmA 3 is required for the operation of any ArmA 3 server and offers a variety of 
Possibility to configure an ArmA 3 server individually.

The Server.cfg is edited either directly via FTP on a pre-installed gameserver, rootserver or vServer. 
With a gameserver the menu item Configs is also available on the left side in the gameserver interface, from there the
Server.cfg can be edited with a few clicks.




## Edit the Server.cfg via the ZAP editor

To edit the server.cfg of your ArmA 3 server in the ZAP editor, first click on your server in the interface and then select "Configs" in the menu on the left side under "Settings". 

![](https://puu.sh/Fk7Ck/9b2d95185f.png)


There you will see a list of the configuration files available for ArmA 3, we only edit the Server.cfg now. 
With a click on the blue button "Open file" you get into the ZAP editor. 

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)


There you have the possibility to configure your ArmA 3 server individually, including the server name and the number of slots. You can adjust the settings as you like and click on "Save" afterwards.

![](https://puu.sh/Fk7I1/407a039e38.png)


When specifying the server name, make sure to enclose the name in quotation marks, otherwise it cannot be read by the server. It is also important to end each line with a semicolon (;), otherwise the server will not be able to read the following settings. An exception is the option "motd[]", there you have to end every line with a comma, except the last one where you have to omit it. 

## Right:

Here, quotation marks such as semicolon and comma are set correctly.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)


## Wrong: 

The setting of quotation marks such as semicolon and comma is missing here, the server would not start like this.

![](https://puu.sh/Fk7NK/f96a31199d.png)


## Edit the Server.cfg via FTP

Soon available...

