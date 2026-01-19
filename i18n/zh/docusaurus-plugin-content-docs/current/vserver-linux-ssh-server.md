---
id: vserver-linux-ssh-server
title: "VPS：SSH 安装指南"
description: "学习如何通过 SSH 安全访问和管理远程 Linux 服务器，提升数据保护和服务器控制 → 立即了解更多"
sidebar_label: 安装 SSH
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍

Secure Shell（SSH）是一种安全协议，能够实现对远程系统的安全加密访问。它确保了通过网络传输的数据的机密性和完整性。

本指南将教你如何为我们 VPS 服务器上提供的多种 Linux 发行版安装或重新安装 SSH 服务器。我们大多数 VPS 服务器提供的 Linux 发行版默认都已预装 SSH 服务器，这意味着你可以通过产品的网页界面轻松管理它。你可以通过我们的指南查看具体操作：[初次访问（SSH）](vserver-linux-ssh.md)

如果你想进一步提升服务器安全性，强烈推荐查看我们的[安全小贴士](vserver-linux-security-tips.md)指南，里面介绍了多种能帮助你强化服务器安全的工具和服务。

<InlineVoucher />

## 安装

开始安装前，请通过 VNC 访问你的服务器。你可以参考这篇教程使用 [VNC 控制台](vserver-vnc.md)。


<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
如果你想重新安装 SSH 服务器，先确保卸载旧版本。可以用命令：`yum remove openssh`。
:::

安装 SSH 服务器前，先确保系统是最新的。运行以下命令：
```
yum update
```

接着用下面命令安装 SSH 服务器：
```
yum install openssh-server
```

安装完成后，用以下命令启动 SSH 服务：
```
systemctl start sshd
```

确保设置服务开机自启，执行：
```
systemctl enable sshd
```

</TabItem>

<TabItem value="Debian" label="Debian">

:::info
如果你想重新安装 SSH 服务器，先确保卸载旧版本。可以用命令：`apt remove openssh`。
:::

安装 SSH 服务器前，先确保系统是最新的。运行以下命令：
```
apt update
```

接着用下面命令安装 SSH 服务器：
```
apt install openssh-server
```

安装完成后，用以下命令启动 SSH 服务：
```
systemctl start sshd
```

确保设置服务开机自启，执行：
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
如果你想重新安装 SSH 服务器，先确保卸载旧版本。可以用命令：`apt remove openssh`。
:::

安装 SSH 服务器前，先确保系统是最新的。运行以下命令：
```
apt update
```

接着用下面命令安装 SSH 服务器：
```
apt install openssh-server
```

安装完成后，用以下命令启动 SSH 服务：
```
systemctl start sshd
```

确保设置服务开机自启，执行：
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
如果你想重新安装 SSH 服务器，先确保卸载旧版本。可以用命令：`dnf remove openssh`。
:::

安装 SSH 服务器前，先确保系统是最新的。运行以下命令：
```
dnf update
```

接着用下面命令安装 SSH 服务器：
```
dnf install openssh-server
```

安装完成后，用以下命令启动 SSH 服务：
```
systemctl start sshd
```

确保设置服务开机自启，执行：
```
systemctl enable sshd
```
</TabItem>
</Tabs>

## 启用 root 登录

<Tabs>

<TabItem value="CentOS" label="CentOS" default>
要启用 root 登录，需要编辑 openssh 配置文件。这里我们用 "nano" 编辑器。

:::info
如果系统未安装 "nano"，请先安装。命令：`yum install nano`
:::

打开配置文件：
```
nano /etc/ssh/sshd_config 
```

用方向键找到以下行：
```
#PermitRootLogin prohibit-password
```

改成下面这样，启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务以应用配置：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian" default>
要启用 root 登录，需要编辑 openssh 配置文件。这里我们用 "nano" 编辑器。

:::info
如果系统未安装 "nano"，请先安装。命令：`yum install nano`
:::

打开配置文件：
```
nano /etc/ssh/sshd_config 
```

用方向键找到以下行：
```
#PermitRootLogin prohibit-password
```

改成下面这样，启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务以应用配置：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu" default>
要启用 root 登录，需要编辑 openssh 配置文件。这里我们用 "nano" 编辑器。

:::info
如果系统未安装 "nano"，请先安装。命令：`yum install nano`
:::

打开配置文件：
```
nano /etc/ssh/sshd_config 
```

用方向键找到以下行：
```
#PermitRootLogin prohibit-password
```

改成下面这样，启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务以应用配置：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora" default>
要启用 root 登录，需要编辑 openssh 配置文件。这里我们用 "nano" 编辑器。

:::info
如果系统未安装 "nano"，请先安装。命令：`yum install nano`
:::

打开配置文件：
```
nano /etc/ssh/sshd_config 
```

用方向键找到以下行：
```
#PermitRootLogin prohibit-password
```

改成下面这样，启用远程 root 登录：
```
PermitRootLogin yes
```

最后，重启 SSH 服务以应用配置：
```
systemctl restart sshd
```
</TabItem>
</Tabs>


## 总结

恭喜你，SSH 服务已成功安装并配置完成！如果你还有任何问题或遇到困难，随时联系我们的支持团队，我们每天都在线帮你解决！ 


<InlineVoucher />