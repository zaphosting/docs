---
id: dayz-becomeadmin
title: "DayZ：成为管理员"
description: "了解如何通过分配管理员权限和有效管理游戏选项，轻松掌控服务器 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理你的服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细说明你需要采取的所有步骤，以便为你的服务器分配管理员权限。  
<InlineVoucher />

## 配置

管理员权限的配置通过服务器配置文件完成。你可以在游戏服务器管理的 **Configs** 中访问服务器的配置文件。进入后，你会看到所有可用配置文件的列表。点击蓝色按钮打开 **server.DZ.cfg**。

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

在配置文件中，你会找到 **passwordAdmin** 这一项。在这里，你需要设置访问的密码。输入你想要的密码，然后点击下面的 **保存** 按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

要使更改生效，需要重启服务器。之后，连接到你的服务器并打开游戏内聊天框。执行以下命令以管理员身份登录：

```
#login password
```



## 常用命令

下面是一些你可以用管理员权限执行的常用命令列表：

| 命令                                       | 说明                                                         |
| :------------------------------------------ | :----------------------------------------------------------- |
| #login adminpassword                        | 以服务器管理员身份登录。                                     |
| #logout                                     | 管理员登出。                                                 |
| #mission filename Difficulty                | 选择指定名称的任务并设置难度——难度参数可选，不设置则保持当前难度。 |
| #missions                                   | 选择一个任务。                                               |
| ##restart                                   | 重启当前任务。                                               |
| #reassign                                   | 重新开始并重新分配角色。                                     |
| #shutdown                                   | 关闭服务器。                                                 |
| #restartserver                              | 重启服务器。                                                 |
| #shutdownserveraftermission                 | 任务结束后关闭服务器。                                       |
| #restartserveraftermission                  | 任务结束后重启服务器。                                       |
| #init                                       | 重新加载通过 -config 选项加载的服务器配置文件。              |
| #exec ban Name#exec ban ID#exec ban #Player | 允许你封禁玩家。                                             |
| #kick Name#kick ID#kick #Player             | 允许你将玩家踢出服务器。                                     |
| #monitor (interval in seconds)              | 显示服务器性能信息。若间隔为0，则停止监控。                   |
| #monitords (interval in seconds)            | 在服务器控制台显示性能信息。若间隔为0，则停止监控。           |
| #debug off                                  | 关闭调试。                                                   |
| #debug (interval in seconds)                | 默认间隔为10秒，除非另行指定。                               |
| #debug (command) (param)                    | 有几个可用命令：JIPQueue userQueue checkFile totalSent userSent userInfo。你可以通过在命令后加上 off 来关闭对应命令，例如 #totalSent off。输出方式因命令不同，有的输出到日志文件，有的显示在屏幕等。请注意，你需要在客户端运行支持捕获 OutputDebugString 的调试器。 |
| #debug (command)                            | 管理员登出。                                                 |
| #logout                                     | 有两个可用命令：console - 将服务器控制台内容发送给发送者；von - 输出到 server.cfg 中定义的日志文件，例如“server_console.log”。你会在聊天频道看到这些命令的确认信息。 |


## 结语

恭喜你，管理员权限已成功配置！如果有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />