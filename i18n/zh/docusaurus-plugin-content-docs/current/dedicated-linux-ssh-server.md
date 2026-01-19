---
id: dedicated-linux-ssh-server
title: "独立服务器：SSH 安装指南"
description: "了解如何在 Linux VPS 上安全安装和管理 SSH 服务器，确保远程访问安全并提升服务器防护 → 立即了解更多"
sidebar_label: 安装 SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Secure Shell（SSH）是一种安全协议，能够实现对远程系统的安全加密访问，确保网络传输数据的机密性和完整性。

本指南将教你如何在我们目前提供的多种 Linux 发行版 VPS 服务器上安装或重新安装 SSH 服务器。我们大多数 VPS 服务器默认都预装了 SSH 服务器，这意味着你可以通过产品的网页界面轻松管理它。具体操作请参考我们的指南：[初次访问（SSH）](vserver-linux-ssh.md)

如果你想进一步提升服务器安全，我们强烈推荐查看我们的[安全小贴士](vserver-linux-security-tips.md)指南，里面介绍了多种工具和服务，帮助你更好地保护服务器。



## 安装

要开始安装过程，请通过 VNC 访问你的服务器。你可以按照[使用 VNC 控制台](vserver-vnc.md)的步骤操作。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
如果你想重新安装 SSH 服务器，先确保卸载旧版本。执行命令：`yum remove openssh`
:::

安装 SSH 服务器前，先确保系统是最新的，运行：
```
yum update
```

然后用以下命令安装 SSH 服务器：
```
yum install openssh-server
```

安装完成后，启动 SSH 服务：
```
systemctl start sshd
```

确保服务开机自启，执行：
```
systemctl enable sshd
```

## 启用 root 登录

要启用 root 登录，需要编辑 openssh 配置文件。本指南使用 "nano" 编辑器。

:::info
如果系统未安装 "nano"，先安装它，命令：`yum install nano`
:::

打开配置文件：
```
nano /etc/ssh/sshd_config 
```

用方向键找到以下行：
```
#PermitRootLogin prohibit-password
```

修改为启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务使配置生效：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
如果你想重新安装 SSH 服务器，先确保卸载旧版本。执行命令：`apt remove openssh`
:::

安装 SSH 服务器前，先确保系统是最新的，运行：
```
apt update
```

然后用以下命令安装 SSH 服务器：
```
apt install openssh-server
```

安装完成后，启动 SSH 服务：
```
systemctl start sshd
```

确保服务开机自启，执行：
```
systemctl enable sshd
```

## 启用 root 登录

要启用 root 登录，需要编辑 openssh 配置文件。本指南使用 "nano" 编辑器。

:::info
如果系统未安装 "nano"，先安装它，命令：`apt install nano`
:::

打开配置文件：
```
nano /etc/ssh/sshd_config 
```

用方向键找到以下行：
```
#PermitRootLogin prohibit-password
```

修改为启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务使配置生效：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
如果你想重新安装 SSH 服务器，先确保卸载旧版本。执行命令：`apt remove openssh`
:::

安装 SSH 服务器前，先确保系统是最新的，运行：
```
apt update
```

然后用以下命令安装 SSH 服务器：
```
apt install openssh-server
```

安装完成后，启动 SSH 服务：
```
systemctl start sshd
```

确保服务开机自启，执行：
```
systemctl enable sshd
```

## 启用 root 登录

要启用 root 登录，需要编辑 openssh 配置文件。本指南使用 "nano" 编辑器。

:::info
如果系统未安装 "nano"，先安装它，命令：`apt install nano`
:::

打开配置文件：
```
nano /etc/ssh/sshd_config 
```

用方向键找到以下行：
```
#PermitRootLogin prohibit-password
```

修改为启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务使配置生效：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
如果你想重新安装 SSH 服务器，先确保卸载旧版本。执行命令：`dnf remove openssh`
:::

安装 SSH 服务器前，先确保系统是最新的，运行：
```
dnf update
```

然后用以下命令安装 SSH 服务器：
```
dnf install openssh-server
```

安装完成后，启动 SSH 服务：
```
systemctl start sshd
```

确保服务开机自启，执行：
```
systemctl enable sshd
```

## 启用 root 登录

要启用 root 登录，需要编辑 openssh 配置文件。本指南使用 "nano" 编辑器。

:::info
如果系统未安装 "nano"，先安装它，命令：`dnf install nano`
:::

打开配置文件：
```
sudo nano /etc/ssh/sshd_config 
```

用方向键找到以下行：
```
#PermitRootLogin prohibit-password
```

修改为启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务使配置生效：
```
systemctl restart sshd
```
</TabItem>
</Tabs>

你现在已经成功在服务器上安装了 SSH 服务，可以通过 SSH 远程访问你的服务器啦。