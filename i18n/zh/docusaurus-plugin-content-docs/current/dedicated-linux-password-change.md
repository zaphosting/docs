---
id: dedicated-linux-password-change
title: "独立服务器：更改 Linux 服务器的 root 密码"
description: "了解如何通过网页界面或控制台安全地更改和管理服务器密码，提升访问控制 → 立即了解更多"
sidebar_label: 更改密码
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 网页界面

密码可以通过我们的网页界面进行更改。打开左侧导航栏中的“访问与安全”页面。

![](https://screensaver01.zap-hosting.com/index.php/s/Kt3B9n4sGpbpn5q/preview)

root 密码字段就在这里，你可以设置想要的密码。

:::info
请注意，密码长度至少要有 8 个字符，且必须包含大小写字母（a-z/A-Z）、数字（1-9）和特殊字符（!@=#$%&-?_;:.,）。如果不符合这些要求，密码将不会被应用到服务器上。
:::

输入密码后，会弹出一个确认窗口，点击“确定”即可。

![](https://screensaver01.zap-hosting.com/index.php/s/Ckc6PLB3tRY5epR/preview)

如果满足所有条件，系统会确认密码已成功更改。


✅ 密码已成功更改。


从现在起，密码将在我们的网页界面中显示 3 小时，之后出于安全考虑会被删除。要查看密码，只需点击“密码”旁边的眼睛图标。

![](https://screensaver01.zap-hosting.com/index.php/s/XfpFrGg5LyKEiRL/preview)

随后会弹出一个窗口显示密码。


## 服务器控制台

密码也可以通过服务器控制台更改，无论你是通过 Putty 还是串口控制台访问都可以。

:::info
重要提示：此选项仅在你仍然可以访问服务器时使用。
:::

登录控制台后，可以使用命令 `passwd` 来更改密码。之后需要再次输入密码以确认。如果两次输入的密码一致，控制台会确认密码已更改成功。


如果两次密码不一致，控制台会终止操作。这时需要重新执行 `passwd` 命令。

:::info
重要提示：如果你通过控制台更改密码，密码不会在我们网页界面“访问与安全”中显示 3 小时。
:::
