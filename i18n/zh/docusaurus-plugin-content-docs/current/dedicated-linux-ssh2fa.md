---
id: dedicated-linux-ssh2fa
title: "独立服务器：SSH 双因素认证"
description: "了解如何通过 Google Authenticator 2FA 增强 SSH 安全，保障服务器访问更安全，保护你的 Linux VPS → 立即了解更多"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Google 的 SSH 双因素认证（2FA）服务，称为 **Google Authenticator SSH**，通过增加第二层认证来提升 SSH（安全外壳协议）访问的安全性。虽然 SSH 本身已经提供了加密连接远程服务器的安全方式，但集成 2FA 后，用户不仅需要输入密码，还必须输入由 Google Authenticator 生成的一次性验证码，从而大幅提升安全等级。在本指南中，我们将探索如何在 Linux 服务器上安装和配置 **Google Authenticator SSH** 服务。

## 安装

首先，你需要在你的 Linux VPS 上安装 Google Authenticator。执行以下命令：

```
sudo apt install libpam-google-authenticator
```

系统会提示你输入 "Y" 来确认安装，输入后按回车，Google Authenticator 就会被安装完成！

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

输入 `google-authenticator` 启动 Google Authenticator。确保你的终端窗口足够大以显示二维码，否则按 "CTRL+C" 退出后重新输入命令。

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

系统会再次询问是否执行，输入 "Y" 确认。接着你会看到一个二维码。打开手机上的认证器应用，扫描该二维码。这里我们以 Google Authenticator 为例：

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

务必保存备份码，这些备份码在你丢失认证器时可以各使用一次。

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

现在应用会显示你后续登录时需要用到的验证码，界面大致如下：

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

接下来系统会问你几个问题：

1. 是否保存 Google Authenticator 配置？
2. 是否每 30 秒只允许一次登录？
3. 是否延长验证码的有效时间？
4. 是否限制每 30 秒最多三次登录？（防暴力破解）

出于安全考虑，我们建议全部选择“是”。

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## 配置

现在我们需要调整 Google Authenticator 以启用它。这需要两个步骤。

### /etc/ssh/sshd_config

在 `/etc/ssh/sshd_config` 文件中激活所需模块。输入以下命令打开文件：

```
sudo nano /etc/ssh/sshd_config
```

你现在进入了文本编辑器。用方向键移动光标，可以自由删除和输入文本。编辑完成后，按 `CTRL + X`，然后按 `Y`，最后按回车保存文件。

确保以下两行设置为 `yes`：

```
UsePAM yes
ChallengeResponseAuthentication yes
```

示例：

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

保存后，重启 SSH 服务：

```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

接下来，我们将 Google Authenticator 添加到登录认证中。打开 `/etc/pam.d/sshd` 文件：

```
sudo nano /etc/pam.d/sshd
```

滚动到文件末尾，添加以下一行：

```
auth required pam_google_authenticator.so
```

示例：

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

保存文件，按 `CTRL + X`，然后 `Y`，最后回车。

## 测试访问

现在是时候用 2FA 登录了。完成上述步骤后，重启你的 SSH 连接。

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

正常输入你的密码，系统会提示你输入验证码，输入当前的 2FA 码即可。

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

登录成功！

## 总结

恭喜你，已经成功为 SSH 访问配置了双因素认证！如果有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂