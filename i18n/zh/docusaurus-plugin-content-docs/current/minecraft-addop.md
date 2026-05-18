---
id: minecraft-addop
title: "Minecraft：服务器赋予OP权限"
description: "了解如何给玩家分配OP权限并有效管理服务器权限，轻松掌控游戏 → 立即了解"
sidebar_label: OP权限
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 赋予OP权限

要给自己或其他玩家赋予OP权限，首先需要打开控制台，前提是目前没有其他玩家拥有足够的OP权限，否则可以直接在游戏内分配。

打开控制台，首先要通过**控制面板**进入对应的服务器。在服务器界面左侧列表的“信息”标签下，你会看到“实时控制台”入口。

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

现在你应该能看到一个黑色窗口，这就是服务器的控制台。窗口下方有一个输入框，可以在这里输入命令。要设置OP权限，输入命令 `op 玩家名`（不带“/”），然后点击绿色的“发送命令”按钮，将命令发送到控制台。

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

几秒钟后，控制台会显示刚才发送的命令，紧接着出现“Made player a server operator”的提示，表示操作成功。此时该玩家拥有了全部OP权限，比如可以切换游戏模式。

:::info
现在也可以直接在游戏内分配OP权限，如果你想这么做，建议按照下一步说明调整权限等级。
:::

## 权限等级

OP权限分为四个等级，默认是等级4。不同等级拥有不同权限，可以根据玩家身份大致划分。各等级权限如下：

| 等级 | 描述 | 权限 |
| :-----: |:-------------:| :-----:|
| 1 | 版主 | 可以在保护的出生区内进行修改。 |
| 2 | 游戏管理员 | 可以设置和编辑命令方块，执行各种作弊命令（例如：/gamemode）。 |
| 3 | 管理员 | 可以踢出和封禁玩家，以及执行服务器一般管理命令。还能任命其他操作员。 |
| 4 | 服务器拥有者 | 无任何限制。 |

:::info
如果你在 Bukkit/Spigot 服务器上安装了权限插件如 LuckPerms，可以更细致地设置权限，还能创建多个权限组，方便权限管理。
:::

## 调整权限等级

要调整玩家的权限等级，首先必须先给他赋予操作员权限，具体步骤见“赋予OP权限”部分。然后通过FTP连接编辑服务器中的 `ops.json` 文件。

连接服务器FTP后，进入服务器对应目录。在FileZilla中，右键点击该文件，选择“查看/编辑”。

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

找到对应玩家的 `"level"` 值，修改为你想要的等级，修改完成后按 **CTRL+S** 保存文件。

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

修改生效需要重启服务器，点击服务器界面中的红色停止按钮即可重启。

<InlineVoucher />