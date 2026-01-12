---
id: dedicated-linux-ts6
title: "独立服务器：在你的 Linux 独立服务器上安装 Teamspeak 6 服务器"
description: "了解如何设置和优化 TeamSpeak 6 服务器，实现稳定托管和高性能 → 立即了解更多"
sidebar_label: 安装 Teamspeak 6 服务器
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

2025 年夏季，TeamSpeak 发布了 **TeamSpeak 6 服务器** 的 **Beta 版本**。现在你可以亲自体验下一代 TeamSpeak！

想自己托管这个服务？我们会带你一步步完成安装和配置，同时告诉你所有需要注意的事项。

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)





## 前提条件

在安装 **Teamspeak 6 服务器** 之前，请确保你的托管环境满足以下要求，以保证安装顺利并获得最佳性能。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置        |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 核心      | 4 核心                     |
| 内存       | 1 GB        | 4 GB                       |
| 硬盘空间   | 1 GB        | 25 GB                      |



## 准备工作

在搭建 **TeamSpeak 6 服务器** 之前，你需要先准备好系统环境。这包括将操作系统更新到最新版本，并安装所有必需的依赖。这样可以确保环境稳定，避免安装过程中或之后出现问题。


### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。运行以下命令：

```
sudo apt update && sudo apt upgrade -y
```
这会让你的系统拥有最新的安全补丁和软件版本，方便后续操作。

### 安装依赖
更新完成后，就可以安装依赖了。为了快速、简单且推荐的安装方式，我们建议使用 Docker。首先安装 Docker 引擎：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## 安装
满足所有要求并完成准备后，就可以开始安装 Teamspeak 6 服务器应用了。

下一步是为 TeamSpeak 6 服务器创建 Docker Compose 文件 `docker-compose.yml`。你可以选择任意目录，这里示例使用 `/opt/containers/ts6/`。内容采用官方 TeamSpeak Compose 文件：

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # 语音端口
      - "30033:30033/tcp" # 文件传输端口
      # - "10080:10080/tcp" # Web 查询端口
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

进入你想创建文件的目录，使用命令 `nano docker-compose.yml` 创建文件并粘贴以上内容。

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


运行以下 Docker Compose 命令启动 Docker 容器和 TeamSpeak 6 服务器：

```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

此时 TeamSpeak 6 服务器的 Docker 容器会启动。默认情况下，它不会持续后台运行。首次启动时，你会看到关于 **Server Query 管理员账号** 和 **权限密钥** 的 **重要信息**。

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

务必妥善保存这些信息，后续启动时不会再次显示。然后用 `CTRL+C` 停止容器。



## 配置

你可以通过在 Docker Compose 文件中设置 **环境变量** 来调整 TeamSpeak 6 服务器的更多配置，满足你的个性化需求。完整的可用选项列表请参考官方 [TeamSpeak 6 服务器](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) 文档。

`docker-compose.yml` 示例片段：

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## 服务器操作

要让 TeamSpeak 6 服务器在后台持续运行，使用以下命令启动容器：

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

要停止 TeamSpeak 6 服务器，使用以下命令关闭容器：

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## 连接服务器

当 TeamSpeak 6 服务器启动后，你可以用 TeamSpeak 6 客户端连接。只需输入你的服务器 IP 地址和正确端口，在客户端中填写这些信息即可连接并开始测试。

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## 总结及更多资源

恭喜你！现在你已经成功在独立服务器上安装并配置了 Teamspeak 6 服务器。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [官方网站](https://teamspeak.com/en/) - TeamSpeak 6 的信息和下载
- [社区论坛](https://community.teamspeak.com/) - 用户支持和讨论
- [GitHub 问题追踪](https://github.com/teamspeak/teamspeak6-server/issues) - 报告 Bug 和跟踪问题

有具体问题这里没覆盖？需要更多帮助？随时联系在线客服，我们每天都在线为你服务！🙂