---
id: scp-newroles
title: "SCP Secret Laboratory：服务器添加新角色"
description: "了解如何创建并自定义具有特定权限的服务器角色，实现高效的远程管理员管理 → 立即了解更多"
sidebar_label: 添加新角色
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 查看配置
新角色是在 "config_remoteadmin.txt" 文件中添加的。
你可以通过点击服务器界面中的“配置”找到这个配置文件。

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

然后你可以搜索上述配置，点击右侧的“眼睛”图标打开它。

## 复制已有角色
打开配置后，你可以搜索以下条目：

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

这些是已经存在的示例角色。
我们将在下面插入一个新条目。
为此，我们复制上面某个角色的代码块，并将其粘贴到最后一个角色的下方。
在我们的示例中，我们复制了“Moderator”角色并粘贴到了下面：

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## 添加自定义角色
现在我们可以编辑刚刚插入的已有角色代码块，输入自己想要的内容。
在我们的示例中，我们使用了名字“ZAP”：

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

完成后，我们还需要将该角色添加到可用角色列表中。
这部分也在同一个配置文件中，稍微往下一点。

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

我们把新角色放在“moderator”角色下面。
:::info
注意：请务必留意“-”符号前后的空格！
:::

## 权限设置
在 "config_remoteadmin.txt" 文件的最底部，我们可以调整各个角色的权限。
如果想给我们的角色分配权限，只需在括号中输入角色名。
示例如下：

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />