---
id: vserver-linux-ssh2fa
title: "VPS：SSH 双因素认证"
description: "了解如何通过 Google Authenticator 2FA 增强 SSH 安全，实现更安全的服务器访问，保护你的 Linux 环境 → 立即了解"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Google 的 SSH 双因素认证（2FA）服务，称为 **Google Authenticator SSH**，通过增加第二层认证，提升了 SSH（安全外壳协议）访问的安全性。虽然 SSH 本身已经提供了加密连接远程服务器的安全方式，但集成 2FA 后，用户不仅需要输入密码，还必须输入由 Google Authenticator 生成的一次性验证码，从而大幅提升安全等级。在本指南中，我们将带你了解如何在 Linux 服务器上安装和配置 **Google Authenticator SSH** 服务。

<InlineVoucher />

## 安装

首先，你需要在你的 Linux VPS 上安装 Google Authenticator。执行以下命令：

```
sudo apt install libpam-google-authenticator
```

系统会提示你输入 "Y" 来确认安装，输入后按回车，Google Authenticator 就会被安装完成！

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

输入 `google-authenticator` 启动 Google Authenticator。确保你的终端窗口足够大以显示二维码，否则按 "CTRL+C" 退出后重新输入命令。

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

系统会再次询问是否执行，输入 "Y" 确认。接着你会看到一个二维码。打开手机上的认证器应用，扫描该二维码。这里我们以 Google Authenticator 为例：

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

务必保存备份码，这些备份码在你丢失认证器时可以各使用一次。

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

现在应用会显示你登录时需要用到的验证码，界面大致如下：

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

接下来会出现以下几个问题：

1. 是否保存 Google Authenticator 配置？
2. 是否限制每 30 秒只允许一次登录？
3. 是否延长验证码的有效时间？
4. 是否限制每 30 秒最多允许三次登录？（防暴力破解）

出于安全考虑，建议全部选择“是”。

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## 配置

现在我们需要调整 Google Authenticator 以启用它，需要做两个配置修改。

### /etc/ssh/sshd_config

在 `/etc/ssh/sshd_config` 文件中启用所需模块。输入以下命令打开文件：

```
sudo nano /etc/ssh/sshd_config
```

进入文本编辑器后，可以用方向键移动光标，自由删除和输入文本。编辑完成后，按 `CTRL + X`，然后按 `Y`，最后按回车保存文件。

确保以下两行设置为 `yes`：

```
UsePAM yes
ChallengeResponseAuthentication yes
```

示例：

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

保存后，执行以下命令重启 SSH 服务：

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

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

保存文件，按 `CTRL + X`，然后 `Y`，最后回车。

## 测试登录

现在是时候用 2FA 登录了。完成上述步骤后，重启你的 SSH 连接。

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

正常输入你的密码，接着系统会要求输入验证码，输入你手机认证器上最新的 2FA 码即可。

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

登录成功！

## 总结

恭喜你，已经成功启用并配置了 SSH 的双因素认证！如果你有任何疑问或遇到问题，欢迎随时联系我们的支持团队，我们每天都在线帮你解决！ 

<InlineVoucher />