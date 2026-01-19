---
id: dedicated-linux-plesk
title: "独立服务器：Plesk 安装指南"
description: "了解如何通过 Plesk 多功能平台高效管理网站和服务器，适合所有技能水平 → 立即了解更多"
sidebar_label: 安装 Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Plesk 是一款功能全面的网页托管和服务器管理平台，用户可以通过友好的界面管理网站、服务器、邮箱账户等。它是一款多面手解决方案，适合新手，也适合有经验的网页开发者和系统管理员。

## 安装 Plesk

:::info
安装前，请先运行 apt update 和 apt upgrade，确保服务器上安装了最新的软件包。
:::
Plesk 目前仅支持安装在 Debian 9 (Stretch)、Debian 10 (Buster)、Ubuntu 18.04 (Bionic Beaver)、Ubuntu 20.04 (Focal Fossa)、CentOS 7/8、Red Hat Enterprise Linux 7.x/8.x、CloudLinux 7.1+/8、AlmaLinux OS、Rocky Linux 8.x 和 Virtuozzo Linux 7 上。系统架构必须是 64 位。

连接服务器可以使用 Putty 等工具。

## 开始安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="一键安装" default>

要让 Plesk 自动安装包含大多数用户常用的标准组件和功能，只需执行一条命令：

> Plesk 安装程序总是安装最新版本的 Plesk。这里展示的截图可能不是最新版本的界面。

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
如果出现错误提示：“-bash: curl: command not found”，请先用 `apt install curl` 安装 curl。
:::

执行该命令后，Plesk 通常需要 15 到 60 分钟完成安装。

:::info
安装过程中请勿关闭 SSH 会话，否则安装会中断。
:::
否则需要重装服务器才能重新启动安装程序。
如果未重装服务器就重启安装程序，安装过程中或 Plesk 面板可能会出现功能异常。

:::info
安装过程中可能会出现“卡住”的假象，99% 的情况下安装程序会在几分钟后继续运行，因为它还在配置软件包和设置。
:::

安装完成时会显示如下界面：

![](https://screensaver01.zap-hosting.com/index.php/s/gpNWyd7xZaw22zW/preview)

</TabItem>
<TabItem value="Web Installation" label="网页安装">

通过网页安装 Plesk 只需几条命令。

:::info
Plesk 安装程序总是安装最新版本的 Plesk。这里展示的截图可能不是最新版本的界面。
:::

下载 Plesk 安装程序：
```
wget https://autoinstall.plesk.com/plesk-installer
```

赋予执行权限：

```
chmod +x plesk-installer
```

启动安装程序：

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="控制台安装">

通过控制台安装 Plesk 也只需几条命令。

:::info
Plesk 安装程序总是安装最新版本的 Plesk。这里展示的截图可能不是最新版本的界面。
:::

下载安装程序：

```
wget https://autoinstall.plesk.com/plesk-installer
```

赋予执行权限：

```
chmod +x plesk-installer
```

启动安装程序：

```
./plesk-installer
```

执行以上三条命令后，需要用 “F” 键确认许可协议：

![](https://screensaver01.zap-hosting.com/index.php/s/dJiJ3sTxCqoC3RR/preview)

确认后，系统会询问安装哪个版本的 Plesk，比如 Plesk Obsidian 或 Plesk Onyx，并会提示哪个版本更稳定。通常生产环境会选择“稳定”版本。默认选项已指向稳定版本，按 “F” 再次确认即可。

接着会询问是否允许 Plesk 收集数据用于产品改进，输入 “Y”(是) 或 “n”(否) 即可。

然后系统会询问安装哪种类型的 Plesk，默认的“Recommended”类型通常已足够。后续需要的模块也可以在 Plesk 面板中安装。

接下来询问是否允许安装/升级软件包，按 “F” 确认。

安装程序开始执行安装。

:::info
安装过程中请勿关闭 SSH 会话，否则安装会中断，且需要重装服务器才能重新启动安装程序。
:::
安装过程中可能会出现“卡住”的假象，99% 的情况下安装程序会在几分钟后继续运行，因为它还在配置软件包和设置。

安装完成时会显示如下界面：

![](https://screensaver01.zap-hosting.com/index.php/s/2Wk2Nm2HXCkQjkQ/preview)

</TabItem>
</Tabs>

## 打开网页安装界面

启动安装程序后，安装过程将在浏览器中进行。安装页面可通过 `https://IP:8447` 或 `https://域名.xx:8447` 访问。

## Plesk 网页面板

:::info
首次访问网页面板时会提示“此连接不安全”，请确认后继续，页面才会打开。
:::

网页界面地址为 `https://IP:8443` 或 `https://域名.xx:8443`。登录账号为 root/admin，密码为当前 root 密码。也可以直接使用显示的 URL，如果失效，可以用命令 ``plesk login`` 生成新的登录链接。

### 设置

注册成功后，需要设置管理员账户，填写联系人姓名、邮箱和密码。如果已有 Plesk 许可证，可以直接输入；否则可以申请 15 天试用许可证。最后确认用户协议。

现在可以开始使用 Plesk 了。

### 设置语言

安装完成后，Plesk 面板默认是英文，可以在 工具与设置 ➡️ Plesk 外观 ➡️ 语言 中选择德语（de-DE）。选择后点击“设为默认”，注销并重新登录即可看到德语界面。

![](https://screensaver01.zap-hosting.com/index.php/s/GtTGYGCYXwewxNQ/preview)

### 添加域名

点击蓝色按钮“添加域名”开始添加第一个域名。

[](https://screensaver01.zap-hosting.com/index.php/s/G3fetgKfLNKFr7N/preview)

输入自己的域名，同时定义该域名的 IP、用户名和密码。如果 DNS 中已添加了子域名 “www”，可以直接申请 Let’s Encrypt 的 SSL 证书。输入邮箱后点击蓝色“确定”按钮即可。

[](https://screensaver01.zap-hosting.com/index.php/s/Pw2PSFDKGFDXZi2/preview)

:::info
域名必须指向网站空间的 IP。如果是 ZAP-Hosting 域名，可以通过 EasyDNS 轻松重定向；如果是外部域名，需要设置 A 记录指向 IP，子域名 “www”、“webmail” 也需指向该 IP。MX 记录也应指向网站空间的 IP。

DNS 变更生效可能需要最长 24 小时。
:::

## SSL 加密

在注册域名/创建网站空间时，Let’s Encrypt 的 SSL 证书已自动生成，可以在域名的“托管设置”中选择并启用。启用后点击“应用”确认。

:::info
如果想让网站永久跳转到 HTTPS（SSL），请勾选“永久的、SEO 友好的 301 从 HTTP 跳转到 HTTPS”选项。
:::

[](https://screensaver01.zap-hosting.com/index.php/s/xad7pbeZWY6QQHK/preview)

浏览器打开域名时会显示加密状态：

![](https://screensaver01.zap-hosting.com/index.php/s/JrNEjciJfz2LzCX/preview)

:::info
至此，Plesk 安装及第一个域名的加密设置全部完成。
:::
