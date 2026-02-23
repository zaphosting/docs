---
id: dedicated-linux-docker
title: "在 Linux 服务器上安装 Docker - 在你的基础设施上运行和管理容器"
description: "了解如何在你的 Linux 服务器上安装 Docker，高效运行隔离应用并优化资源使用 → 立即了解更多"
sidebar_label: 安装 Docker
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 介绍

Docker 是一款轻量级的开源虚拟化软件，可以在单一系统上隔离运行服务或应用。与传统的虚拟机不同，Docker 不会额外模拟或托管操作系统，而是在宿主系统内提供一个应用环境。这不仅节省了资源，同时相比完整虚拟化带来了极低的开销。本指南将带你完成在服务器上安装 Docker 的全过程。

## 准备工作

首先，你需要通过 SSH 连接到你的 Linux 服务器。如果你需要帮助，请查看我们的[初始访问（SSH）](dedicated-linux-ssh.md)指南。本指南中，我们将以 Ubuntu 作为示例 Linux 发行版。

## 安装

连接到 Linux 服务器后，你可以选择以下 Linux 发行版的仓库，查看对应的安装步骤。

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

首先，你需要通过 `apt` 添加 Docker 的软件包并进行配置，这样以后就能方便地从仓库安装和更新 Docker。

使用以下命令将 Docker 官方 GPG 密钥添加到你的仓库列表：
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

配置完成后，使用以下命令将 Docker 仓库添加到 `apt` 源：
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

添加仓库后，运行 `apt-get update` 以获取更新：
```
sudo apt-get update
```

到这里，你已经成功配置了 Docker 的 `apt` 仓库。最后一步，安装 Docker 相关软件包，使用以下命令安装最新版本：
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="debian" label="Debian" default>

首先，你需要通过 `apt` 添加 Docker 的软件包并进行配置，这样以后就能方便地从仓库安装和更新 Docker。

使用以下命令将 Docker 官方 GPG 密钥添加到你的仓库列表：
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

配置完成后，使用以下命令将 Docker 仓库添加到 `apt` 源：
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

添加仓库后，运行 `apt-get update` 以获取更新：
```
sudo apt-get update
```

到这里，你已经成功配置了 Docker 的 `apt` 仓库。最后一步，安装 Docker 相关软件包，使用以下命令安装最新版本：
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

首先，你需要安装 `dnf-plugins-core` 软件包，它有助于管理仓库：
```
sudo dnf -y install dnf-plugins-core
```

安装完成后，添加 Docker 仓库并安装：
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

现在 Docker 应该已经安装完成。最后一步，启动并设置 Docker 开机自启：
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

验证安装是否成功，尝试运行 **hello-world** 镜像：
```
sudo docker run hello-world
```

成功的话，你会在终端看到一条欢迎信息和一些基础信息。如果遇到 `Permission Denied` 权限拒绝错误，请确保你在控制面板中启用了 **Docker 兼容性** 选项，并按照准备工作部分的说明重启了服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

恭喜，你已经成功在 Linux 服务器上安装了 Docker。

## 安装后配置

Docker 安装完成后，你可以选择进行一些额外配置，比如去掉执行 Docker 命令时必须加 sudo 的限制，以及设置 Docker 开机自启。

### 无需 sudo 管理 Docker

你可以通过创建一个 Docker 用户组并将用户加入该组，来避免每次执行 Docker 命令都要加 `sudo`。这会提升使用便利性，但请注意，这会间接赋予用户 root 级别权限。

使用以下命令创建 `docker` 组并将当前用户加入：
```
# 创建 Docker 组
sudo groupadd docker

# 将当前用户加入 Docker 组
sudo usermod -aG docker $USER
```

完成后，建议重启服务器以确保组成员身份生效。或者你也可以运行 `newgrp docker` 来立即生效。

然后再次运行 `docker run hello-world`，确认是否可以不加 `sudo` 运行 Docker 命令。

:::tip
如果之前用 `sudo` 运行过 Docker 命令，可能会遇到配置文件相关错误。解决方法是删除 Docker 配置目录，命令如下：
```
rmdir ~/.docker/
```
该目录会在下次运行 Docker 命令时自动重新创建。
:::

如果命令正常运行，说明你已经成功配置 Docker 免 sudo 使用。

### 设置 Docker 开机自启

你可以通过 `systemd`（大多数 Linux 发行版使用的服务管理器）设置 Docker 开机自动启动。

:::tip
Ubuntu 和 Debian 默认已设置 Docker 开机自启。如果你使用这两个发行版，无需额外操作。
:::

启用 Docker 服务开机启动，运行：
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

同理，若想关闭开机启动，将 `enable` 替换为 `disable` 即可。你还可以用以下命令管理服务：
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

## 总结

恭喜你，已经成功在 Linux 服务器上安装并配置了 Docker！如果有任何疑问或问题，欢迎随时联系我们的客服团队，我们每天都在线为你服务！