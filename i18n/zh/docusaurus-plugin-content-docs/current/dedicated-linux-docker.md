---
id: dedicated-linux-docker
title: "独立服务器：Docker 安装指南"
description: "了解如何在你的 Linux 服务器上安装 Docker，高效运行隔离应用并优化资源利用 → 立即了解更多"
sidebar_label: 安装 Docker
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 介绍

Docker 是一款轻量级开源虚拟化软件，可以在单一系统上隔离运行服务或应用。与传统虚拟机不同，Docker 不会额外模拟或托管操作系统，而是在宿主系统内提供一个应用环境。这不仅节省了大量资源，同时相比完整虚拟化，开销也非常低。在本指南中，我们将介绍如何在你的服务器上安装 Docker。

## 准备工作

首先，你需要通过 SSH 连接到你的 Linux 服务器。如果你需要帮助，请查看我们的[初始访问（SSH）](dedicated-linux-ssh.md)指南。本指南中，我们将以 Ubuntu 作为示例 Linux 发行版。

### 启用 Docker 兼容性

你必须在服务器的网页面板中启用 **Docker 兼容性**，以允许 Docker 容器正常运行，否则会遇到 `Permission Denied` 权限拒绝错误。

进入服务器网页面板的 **设置** 页面，开启 **Docker 兼容性** 选项并保存。

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

保存后，请务必重启服务器再继续操作。

## 安装步骤

连接到 Linux 服务器后，选择对应的 Linux 发行版，查看相关安装步骤。

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

首先，你需要通过 `apt` 添加 Docker 软件包源并进行配置，这样以后就能方便地从仓库安装和更新 Docker。

使用以下命令将 Docker 官方 GPG 密钥添加到你的仓库列表中：
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

完成后，添加 Docker 仓库到 `apt` 源：
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

添加完成后，运行更新命令获取最新仓库信息：
```
sudo apt-get update
```

到这里，你已经成功配置了 Docker 的 `apt` 仓库。最后一步，安装 Docker 相关软件包，使用以下命令安装最新版：
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

首先，安装 `dnf-plugins-core` 软件包，方便管理仓库：
```
sudo dnf -y install dnf-plugins-core
```

安装完成后，添加 Docker 仓库并安装：
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

现在 Docker 应该已经安装完成。最后，启动并设置 Docker 开机自启：
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

验证安装是否成功，运行官方的 **hello-world** 镜像：
```
sudo docker run hello-world
```

成功的话，你会看到一条欢迎信息和一些基础信息。如果遇到 `Permission Denied` 错误，请确认你已按照准备部分启用 **Docker 兼容性** 并重启服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

恭喜，你已成功在 Linux 服务器上安装 Docker。

## 安装后配置

Docker 安装完成后，你可以做一些额外配置，比如免 sudo 运行 Docker 命令，以及设置 Docker 开机自启。

### 免 sudo 管理 Docker

默认情况下，运行 Docker 命令需要加 `sudo`。你可以创建一个 Docker 用户组，并将用户加入该组，从而免去每次输入 sudo 的麻烦。但请注意，这会间接赋予用户 root 权限。

执行以下命令创建 `docker` 组并将当前用户加入：
```
# 创建 Docker 组
sudo groupadd docker

# 将当前用户加入 Docker 组
sudo usermod -aG docker $USER
```

完成后，建议重启服务器以刷新组权限，或者使用 `newgrp docker` 命令。

然后再次运行 `docker run hello-world`，确认是否能免 sudo 执行。

:::tip
如果之前用 sudo 运行过 Docker 命令，可能会遇到配置文件错误。解决方法是删除 Docker 配置目录：`rmdir ~/.docker/`，下次运行命令时会自动重新创建。
:::

如果命令正常运行，说明你已经成功配置 Docker 免 sudo 使用。

### 设置 Docker 开机启动

你可以通过 `systemd` 设置 Docker 服务开机自动启动，大多数 Linux 发行版都支持。

:::tip
Ubuntu 和 Debian 默认已设置 Docker 开机自启，如果你使用这两个发行版，无需额外操作。
:::

启用 Docker 服务开机启动，执行：
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

如果想关闭开机启动，将 `enable` 替换为 `disable` 即可。你也可以用以下命令管理服务：
```
sudo systemctl start [服务名]
sudo systemctl stop [服务名]
sudo systemctl restart [服务名]
```

## 总结

恭喜你，已成功在 Linux 服务器上安装并配置 Docker！如果有任何疑问或问题，欢迎随时联系我们的客服团队，我们每天都在线为你服务！