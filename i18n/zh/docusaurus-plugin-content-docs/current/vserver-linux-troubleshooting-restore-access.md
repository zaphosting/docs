---
id: vserver-linux-troubleshooting-restore-access
title: "VPS：恢复访问权限"
description: "了解如何在密码锁定后重新获得 Linux VPS 访问权限，最大限度减少停机时间 → 立即了解更多"
sidebar_label: 恢复访问权限
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

这种情况发生得很快。你尝试登录你的 Linux 服务器，但密码不再被接受或者已经忘记了。结果就是无法访问系统以及关键数据或服务。这种情况特别让人抓狂，尤其是当服务器正用于持续运营时。在大多数 Linux 发行版中，可以通过恢复模式恢复访问权限，无需重新安装操作系统。按照下面的步骤操作，你就能重新获得服务器访问权限，尽可能减少工作中断。



## 恢复访问权限

要通过恢复模式重置密码，系统必须启动并进入 GRUB 启动菜单。在系统启动时，打开 GRUB 菜单，选择 **Ubuntu 高级选项**。

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

在下一个界面，选择以 **恢复模式** 启动系统的条目。这会加载恢复环境，而不是正常的操作系统。

当恢复菜单出现时，选择 **root – 进入 root shell 提示符** 并确认选择。再次按回车进入 root shell。

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

在恢复模式下，root 文件系统默认是只读挂载的。为了允许修改密码，必须重新以读写权限挂载。执行以下命令：

```bash
mount -o remount,rw /
```

如果不知道用户名，可以通过查看 home 目录列出所有可用用户账户：

```
ls /home
```

要重置密码，使用 `passwd` 命令加上用户名：

```
passwd username
```

将 `username` 替换成实际的账户名。输入新密码并在提示时确认。输入密码时屏幕不会显示任何字符。密码更新成功后，使用 `reboot` 命令重启系统。



## 总结

完成以上步骤后，你应该已经成功为目标用户设置了新密码。现在可以用这个密码通过远程桌面连接重新登录了。如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂