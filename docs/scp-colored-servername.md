---
id: scp-colored-servername
title: "SCP Secret Laboratory: Colored Servername"
description: "Learn how to customize your server name with colored text for better visibility and style → Learn more now"
sidebar_label: Colored Servername
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
For showing your server in the public server list its required to set a pastebin ID. You can find our guide [Pastebin ID](scp-pastebin.md).

The server must be turned off for changes to take effect.
:::

<InlineVoucher />

Open your server settings and check if 'SCP Servername' is empty.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

When you are sure, that there is nothing entered, please navigate to the 'Configs' Tab, which is one menu below the settings.

Open now the config_gameplay.txt by pressing the blue button.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

Our Config-Editor is now open, you can modify your Servername with "server_name" by using [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) you can use several different colors.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

In this example, I would like that "Green Text, "Blue Text" and "Red Text" is shown in the matching color.

To do that, its required to use the `<color="COLOR">Your Text</color>` tag, you can see all available colors [here](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) its also possible to change other attributes, like the size.
:::info
It is important to remember that quotes " " is required around the actual color inside the tag. As the example above has.
:::

When you're done with your customization, save them.

:::info
Start your server, then your server name will be colored now.
:::

<InlineVoucher />
