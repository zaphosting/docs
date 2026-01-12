---
id: vserver-linux-docker
title: "VPS：Docker 安装指南"
description: "了解如何在你的 Linux 服务器上安装 Docker，高效运行隔离应用，节省系统资源 → 立即了解更多"
sidebar_label: 安装 Docker
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 介绍

Docker 是一款轻量级的开源虚拟化软件，可以在单一系统上隔离运行服务或应用。与传统的虚拟机不同，Docker 并不模拟或托管额外的操作系统，而是在宿主系统内提供一个应用环境。这不仅节省了大量资源，同时相比完全虚拟化也带来了极低的开销。本指南将带你完成在服务器上安装 Docker 的全过程。

<InlineVoucher />

## 准备工作

首先，你需要通过 SSH 连接到你的 Linux 服务器。如果你需要帮助，请参考我们的[初次访问（SSH）](vserver-linux-ssh.md)指南。本教程中，我们将以 Ubuntu 作为示例 Linux 发行版。

## 安装步骤

连接到 Linux 服务器后，可以根据你使用的 Linux 发行版选择对应的安装方法。下面选择你对应的发行版查看详细步骤。

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

首先，你需要通过 `apt` 添加 Docker 的官方软件包源并进行配置，这样以后就能方便地安装和更新 Docker。

使用以下命令将 Docker 官方 GPG 密钥添加到你的仓库列表中：

```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

完成后，使用以下命令将 Docker 仓库添加到 `apt` 源列表：

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

添加完成后，运行更新命令以获取最新的软件包信息：

```
sudo apt-get update
```

到这里，你已经成功配置了 Docker 的 `apt` 仓库。最后一步，安装 Docker 相关软件包，使用以下命令安装最新版：

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

首先，安装 `dnf-plugins-core` 软件包，它有助于管理仓库：

```
sudo dnf -y install dnf-plugins-core
```

安装完成后，添加 Docker 仓库并安装 Docker：

```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

现在 Docker 应该已经安装完成。最后，启动并设置 Docker 开机自启：

```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

安装完成后，运行以下命令验证安装是否成功，尝试运行 **hello-world** 镜像：

```
sudo docker run hello-world
```

如果成功，你会看到一条欢迎信息和一些基本信息。如果遇到 `Permission Denied` 权限拒绝错误，请确保你已在我们的网页面板中启用 **Docker 兼容性** 选项，并按照准备工作部分的说明重启服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

恭喜你，Docker 已成功安装到你的 Linux 服务器上。

## 安装后配置

Docker 安装完成后，你可以选择进行一些额外配置，比如免 sudo 执行 Docker 命令，以及设置 Docker 开机自启。

### 免 sudo 管理 Docker

默认情况下，执行 Docker 命令需要加 `sudo`。你可以通过创建一个 Docker 用户组并将用户加入该组，来免去每次都输入 `sudo`。不过请注意，这会间接赋予用户 root 权限。

执行以下命令创建 `docker` 组并将当前用户添加进去：

```
# 创建 Docker 组
sudo groupadd docker

# 将当前用户加入 Docker 组
sudo usermod -aG docker $USER
```

完成后，建议重启服务器以确保组权限生效，或者使用 `newgrp docker` 命令切换到新组。

然后再次运行 `docker run hello-world`，确认是否可以不加 `sudo` 正常执行。

:::tip
如果之前用 `sudo` 执行过 Docker 命令，可能会遇到配置文件错误。解决方法是删除 Docker 配置目录：`rmdir ~/.docker/`，该目录会在下次运行 Docker 命令时自动重新创建。
:::

如果命令正常运行，说明你已经成功配置了免 sudo 使用 Docker。

### 设置 Docker 开机自启

你可以通过 `systemd` 设置 Docker 在服务器启动时自动运行，大多数 Linux 发行版都支持。

:::tip
Ubuntu 和 Debian 默认已设置 Docker 开机自启，如果你使用这两个发行版，无需额外操作。
:::

启用 Docker 服务开机自启，执行：

```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

如果想关闭开机自启，将 `enable` 替换为 `disable` 即可。你也可以用以下命令管理服务：

```
sudo systemctl start [服务名]
sudo systemctl stop [服务名]
sudo systemctl restart [服务名]
```

## 总结

恭喜你，已经成功在 Linux 服务器上安装并配置了 Docker！如果有任何问题或疑问，欢迎随时联系我们的客服团队，我们每天都在线为你服务！

<InlineVoucher />