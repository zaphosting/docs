---
id: vserver-windows-troubleshooting-restore-access
title: "VPS：恢复访问权限"
description: "了解如何在密码锁定后重新获得对 Windows VPS 的访问权限，最大限度减少停机时间 → 立即了解更多"
sidebar_label: 恢复访问
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

这种情况可能发生得很快……你尝试登录你的 Windows 服务器，但密码不再被接受，或者你干脆忘了密码。突然间，你被锁定在外，无法访问重要的数据和应用程序。这种情况确实让人沮丧，但绝不是终点。只要按照下面的步骤操作，你就能重新获得对 Windows VPS 的访问权限，尽可能减少工作中断。

## 准备工作
通过管理员账户重置访问权限需要使用 Windows ISO 文件。因此，需要使用最初安装 Windows Server 操作系统时用的同一个 ISO 文件。

这一步可以通过[**首次安装**](dedicated-setup.md)或者**[ISO](dedicated-iso.md)**来完成。根据你使用的方法，选择或指定最初使用的 ISO 文件。

挂载 ISO 文件，然后重启系统。下一次启动时，应该会再次打开 Windows 安装界面。界面大致如下：

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)

## 恢复访问

现在是时候重置管理员账户的访问权限了。请再次按照安装的前几个步骤操作，但只需进行到安装开始界面，然后选择 **修复你的计算机**。

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)

这会打开高级选项。点击 **疑难解答**，然后选择 **命令提示符**。这将打开命令提示符（cmd.exe）。

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

接下来，在命令提示符中依次执行以下命令：

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

iLO HTML 控制台的键盘布局可能与你自己的键盘不同，某些符号可能位于不同的按键上。请注意这一点，以确保命令正确执行。

:::

服务器重启后，在登录主界面，请按下 **Win+U** 组合键。在弹出的命令提示符窗口中，输入以下命令：

```
net user Administrator YourNewPassword
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

你的密码现在已经被修改了。不过，你还需要恢复之前对 **Utilman 文件** 的更改。只需重启服务器，再次进入命令提示符，执行以下命令：

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```

## 总结

完成以上步骤后，你应该已经成功为管理员用户设置了新密码。现在可以用这个密码通过远程桌面连接重新登录了。如果你有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂