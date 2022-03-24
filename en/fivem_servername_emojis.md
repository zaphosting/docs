---
id: fivem_servername_emojis
title: FiveM: Display emojis in the server name
description: Information on how to set the emojis to be displayed in the server name of your FiveM server in the server list - ZAP-Hosting.com documentation
sidebar_label: Emojis in Server Name
---

## Preparation
To have emojis in the server name you first have to disable the server name in the settings.

![image](https://user-images.githubusercontent.com/13604413/159168639-2e96f4fe-d1c1-422f-899f-56a544189f4b.png)

![image](https://user-images.githubusercontent.com/13604413/159168641-a8ebf28e-b9cb-4e43-8fa9-9d3e78d6fe92.png)

Now we set up our [FTP access](gameserver_ftpaccess.md).

## Configuration

Now we open the `server.cfg` file with a text editor like Notepad++, Atom or Visual Studio Code

> Important: the text editor must support UTF-8 encoding

<!--DOCUSAURUS_CODE_TABS-->
<!--Notepad++-->
<br>
To insert the emojis with Notepad++ you have to change the encoding after opening the file:

![image](https://user-images.githubusercontent.com/13604413/159168654-e08bda54-504a-4617-887f-60e046018c4b.png)

After both are set, the sets sv_projectName parameter can be set:

![image](https://user-images.githubusercontent.com/13604413/159168656-cc64bbcd-86d6-4c18-8153-4ccfb58b167a.png)


<!--Visual Studio Code-->
<br>

To insert the emojis with VSCode, after opening the file you have to change the encoding, we do this by pressing F1 and entering the following:

```
>Change File Encoding
```

![image](https://user-images.githubusercontent.com/13604413/159168674-01a3e10d-12e2-493c-b864-1c582afc0a0e.png)

Now we press Enter and select "Save with Encoding", then we select UTF8:

![image](https://user-images.githubusercontent.com/13604413/159168676-2e031ffa-64bb-4e29-b446-acfcbcf00671.png)

After it is set, the sets sv_projectName parameter can be set:

![image](https://user-images.githubusercontent.com/13604413/159168678-e60292ba-53cf-497b-830c-d6fa96fd9561.png)

<!--END_DOCUSAURUS_CODE_TABS-->

Done! Now we save the file and upload it again via FTP, after a server restart the emoji is visible:

![image](https://user-images.githubusercontent.com/13604413/159168680-29178995-1450-40c8-974e-2d6f0992bfc3.png)


