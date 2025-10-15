---
id: unturned-firstthirdperson
title: "Unturned: Set 1st/3rd person for server"
description: "Discover how to customize your Unturned server's player perspective between first, third, or both views for enhanced gameplay → Learn more now"
sidebar_label: 1st/3rd Person
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 1st / 3rd person perspective

Unturned provides the possibility to change the perspective on the server. You can choose between the first and third person perspective. The game is played in the first person perspective by default. However, since the 3.9.9.0 version, this can also be changed. In the following we explain how you can change this for your server. 



## Configuration

The change for this is made in the **Commands.dat** config. This can be found in the **Webinterface under Configs**. Depending on how the view should be set, the following command has to be added to the config:

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### 1st person perspective (default): 

This option is already active by default, eventhough the command hasn't been added to the config yet. Nonetheless, for the sake of completeness, you can still add this command without any issues. The command for this option would look like this:

```
perspective first
```



### 3rd person perspective:

In case the 3rd person perspective is used instead of the 1st person, then this can also be set. The command for this would look like this:

```
perspective first
```



### Both perspectives:

Both variants can also be used together. In this case, only the value of the command must be adjusted. The command for this option would look like this:

```
perspective both
```



The next time you start your server, the desired option should be enabled!

<InlineVoucher />
