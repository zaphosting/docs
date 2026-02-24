---
id: dedicated-linux-ssh-server
title: "在 Linux 服务器上设置 SSH - 启用安全的远程服务器访问"
description: "了解如何在 Linux 服务器上安全安装和管理 SSH 服务器，确保远程访问安全并增强服务器保护 → 立即了解更多"
sidebar_label: 安装 SSH
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

安全外壳协议（SSH）是一种安全协议，能够实现对远程系统的安全加密访问。它确保通过网络传输的数据的机密性和完整性。

在本指南中，你将了解如何为我们当前提供的各种 Linux 发行版安装或重新安装 SSH 服务器，这些发行版均可在我们的 VPS/独立服务器上使用。大多数通过我们的 VPS/独立服务器提供的 Linux 发行版默认都已安装 SSH 服务器，这意味着你可以通过产品的网页界面轻松管理它。你可以通过我们的指南查看具体操作：[初始访问（SSH）](vserver-linux-ssh.md)

如果你想了解更多关于提升服务器安全性的内容，我们强烈推荐查看我们的[安全提示](vserver-linux-security-tips.md)指南，里面介绍了多种工具和服务，能帮助你进一步保护服务器。



## 安装

要开始安装过程，请通过 VNC 访问你的服务器。你可以按照以下步骤使用 [VNC 控制台](vserver-vnc.md)。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
如果你想重新安装 SSH 服务器，确保先卸载它。可以通过命令：`yum remove openssh` 来卸载。
:::

在安装 SSH 服务器之前，确保系统是最新的。运行以下命令：
```
yum update
```

现在使用以下命令安装 SSH 服务器：
```
yum install openssh-server
```

安装完成后，可以通过以下命令启动 SSH 服务器服务：
```
systemctl start sshd
```

确保启用该服务，使其在系统启动时自动运行。可以通过以下命令实现：
```
systemctl enable sshd
```

## 启用 root 登录

要启用 root 登录，需要编辑 openssh 配置文件。本指南中我们使用 “nano” 作为编辑器。

:::info
如果系统中尚未安装 “nano”，需要先安装。使用以下命令安装：`yum install nano`
:::

运行以下命令打开配置文件：
```
nano /etc/ssh/sshd_config 
```

使用方向键导航，找到以下行：
```
#PermitRootLogin prohibit-password
```

将其修改为以下内容，启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务器以应用新配置，使用以下命令：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
如果你想重新安装 SSH 服务器，确保先卸载它。可以通过命令：`apt remove openssh` 来卸载。
:::

在安装 SSH 服务器之前，确保系统是最新的。运行以下命令：
```
apt update
```

现在使用以下命令安装 SSH 服务器：
```
apt install openssh-server
```

安装完成后，可以通过以下命令启动 SSH 服务器服务：
```
systemctl start sshd
```

确保启用该服务，使其在系统启动时自动运行。可以通过以下命令实现：
```
systemctl enable sshd
```

## 启用 root 登录

要启用 root 登录，需要编辑 openssh 配置文件。本指南中我们使用 “nano” 作为编辑器。

:::info
如果系统中尚未安装 “nano”，需要先安装。使用以下命令安装：`apt install nano`
:::

运行以下命令打开配置文件：
```
nano /etc/ssh/sshd_config 
```

使用方向键导航，找到以下行：
```
#PermitRootLogin prohibit-password
```

将其修改为以下内容，启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务器以应用新配置，使用以下命令：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
如果你想重新安装 SSH 服务器，确保先卸载它。可以通过命令：`apt remove openssh` 来卸载。
:::

在安装 SSH 服务器之前，确保系统是最新的。运行以下命令：
```
apt update
```

现在使用以下命令安装 SSH 服务器：
```
apt install openssh-server
```

安装完成后，可以通过以下命令启动 SSH 服务器服务：
```
systemctl start sshd
```

确保启用该服务，使其在系统启动时自动运行。可以通过以下命令实现：
```
systemctl enable sshd
```

## 启用 root 登录

要启用 root 登录，需要编辑 openssh 配置文件。本指南中我们使用 “nano” 作为编辑器。

:::info
如果系统中尚未安装 “nano”，需要先安装。使用以下命令安装：`apt install nano`
:::

运行以下命令打开配置文件：
```
nano /etc/ssh/sshd_config 
```

使用方向键导航，找到以下行：
```
#PermitRootLogin prohibit-password
```

将其修改为以下内容，启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务器以应用新配置，使用以下命令：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
如果你想重新安装 SSH 服务器，确保先卸载它。可以通过命令：`dnf remove openssh` 来卸载。
:::

在安装 SSH 服务器之前，确保系统是最新的。运行以下命令：
```
dnf update
```

现在使用以下命令安装 SSH 服务器：
```
dnf install openssh-server
```

安装完成后，可以通过以下命令启动 SSH 服务器服务：
```
systemctl start sshd
```

确保启用该服务，使其在系统启动时自动运行。可以通过以下命令实现：
```
systemctl enable sshd
```

## 启用 root 登录

要启用 root 登录，需要编辑 openssh 配置文件。本指南中我们使用 “nano” 作为编辑器。

:::info
如果系统中尚未安装 “nano”，需要先安装。使用以下命令安装：`dnf install nano`
:::

运行以下命令打开配置文件：
```
sudo nano /etc/ssh/sshd_config 
```

使用方向键导航，找到以下行：
```
#PermitRootLogin prohibit-password
```

将其修改为以下内容，启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务器以应用新配置，使用以下命令：
```
systemctl restart sshd
```
</TabItem>
</Tabs>

你现在已经成功在服务器上安装了 SSH 服务，可以通过 SSH 访问你的服务器了。