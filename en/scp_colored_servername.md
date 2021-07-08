---
id: scp_colored_servername
title: Colored Servername
sidebar_label: Colored Servername
---

> For showing your server in the public server list its required to set a pastebin ID. You can find our guide [here](scp_pastebin.md).

> The server must be turned off for changes to take effect.

Open your server settings and check if 'SCP Servername' is empty.

![](https://screensaver01.zap-hosting.com/index.php/s/tfBwe9EJxtMx7XK/preview)

When you are sure, that there is nothing entered, please navigate to the 'Configs' Tab, which is one menu below the settings.

Open now the config_gameplay.txt by pressing the blue button.

![](https://screensaver01.zap-hosting.com/index.php/s/ZFqcCy4BX4JqjGA/preview)

Our Config-Editor is now open, you can modify your Servername with "server_name" by using [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) you can use several different colors.

![](https://screensaver01.zap-hosting.com/index.php/s/AnLcq8nLe5j8Pxs/preview)

In this example, I would like that "Green Text, "Blue Text" and "Red Text" is shown in the matching color.

To do that, its required to use the `<color=COLOR>Your Text</color>` tag, you can see all availabel colors [here](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) its also possible to change other attributes, like the size.

When you're done with your customization, save them.

> Start your server, then your server name will be colored now.
