---
id: fivem_servername_emojis
title: FiveM: Display emojis in the server name
description: Information on how to set the emojis to be displayed in the server name of your FiveM server in the server list - ZAP-Hosting.com documentation
sidebar_label: Emojis in Server Name
---

## Preparation
To have emojis in the server name you first have to disable the server name in the settings.

![](https://screensaver01.zap-hosting.com/index.php/s/5XWH3s38TCKBd8K/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/dFtyZT6JLL5aB7w/preview)

Now we set up our [FTP access](gameserver_ftpaccess.md).

## Configuration

Now we open the `server.cfg` file with a text editor like Notepad++, Atom or Visual Studio Code

> Important: the text editor must support UTF-8 encoding

<!--DOCUSAURUS_CODE_TABS-->
<!--Notepad++-->
<br>
To insert the emojis with Notepad++ you have to change the encoding after opening the file:

![](https://screensaver01.zap-hosting.com/index.php/s/BHBntRGHP6xaGQy/preview)

After both are set, the sv_hostname parameter can be set:

![](https://screensaver01.zap-hosting.com/index.php/s/n4LcG6G3fY44tMk/preview)

<!--Visual Studio Code-->
<br>

To insert the emojis with VSCode, after opening the file you have to change the encoding, we do this by pressing F1 and entering the following:

```
>Change File Encoding
```

![](https://screensaver01.zap-hosting.com/index.php/s/K4xeYdByYeQYYNC/preview)

Now we press Enter and select "Save with Encoding", then we select UTF8:

![](https://screensaver01.zap-hosting.com/index.php/s/MDdg3CENgesRxY4/preview)

After it is set, the sv_hostname parameter can be set:

![](https://screensaver01.zap-hosting.com/index.php/s/fNX4Yn8QW6HkGdF/preview)

<!--END_DOCUSAURUS_CODE_TABS-->

Done! Now we save the file and upload it again via FTP, after a server restart the emoji is visible:

![](https://screensaver01.zap-hosting.com/index.php/s/eLD8tBMHxrQtbZp/preview)


