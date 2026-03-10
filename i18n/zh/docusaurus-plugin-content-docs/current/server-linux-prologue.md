---
id: server-linux-prologue
title: "在 Linux 服务器上安装 Prologue - 搭建属于你的有声书听书平台"
description: "学习如何在你的 Linux VPS 上使用 Docker 或手动方式安装并运行兼容 Prologue 的有声书服务器 → 立即了解更多"
sidebar_label: 安装 Prologue
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

[Prologue](https://prologue.audio/) 是一个现代化的有声书听书平台，专为自托管有声书服务器设计。它允许你在 iPhone、iPad、Apple Watch 和 CarPlay 等多设备上流式播放、管理和收听你的有声书库。

与依赖云端有声书平台不同，自托管方案让你完全掌控自己的有声书收藏和流媒体基础设施。服务器配置完成后，Prologue 移动应用会连接服务器，同步播放进度、书签和听书历史。

本指南将教你如何在 Linux VPS 上部署兼容 Prologue 的有声书服务器，提供两种不同方法：

- 在 Web 服务器上手动安装
- 基于 Docker 的部署，方便容器化管理

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Prologue 的使用场景

Prologue 适用于希望完全拥有并灵活管理有声书库的用户。

常见使用场景包括：

- 搭建私人有声书流媒体平台
- 在一个集中界面管理庞大的有声书收藏
- 多设备间同步播放进度
- 远程访问有声书资源
- 构建自托管的商业有声书平台替代方案

自托管方案还能确保你的媒体文件始终掌握在自己手中，同时支持构建可扩展的有声书服务器。



## 前置条件

安装服务器前，请确保你的系统满足以下要求。

| 硬件 | 最低配置 | 推荐配置 |
|----------|---------|-------------|
| CPU | 1 vCPU | 2 vCPU |
| 内存 | 2 GB | 4 GB |
| 磁盘空间 | 20 GB | 50 GB |

<InlineServiceLink />

所需软件取决于安装方式：

手动安装：

- Linux 服务器
- Web 服务器（Apache 或 Nginx）
- PHP
- 数据库服务器

Docker 安装：

- Docker
- Docker Compose





## 准备工作

开始安装前，先更新系统软件包。

```
sudo apt update
sudo apt upgrade
```


根据你选择的安装方式，确认所需运行环境已安装。Docker 安装请执行：

```
docker --version
docker compose version
```

如果还没装 Docker，请先安装再继续。



## 手动安装

手动安装是直接在服务器上部署应用，不使用容器。这种方式适合传统的 Web 托管环境。



### 下载应用程序

先创建项目目录并下载应用文件。

```
mkdir prologue-server
cd prologue-server
```


接着克隆项目仓库：

```
git clone https://github.com/michaelstaake/Prologue.git
```



### 配置 Web 服务器

将应用文件移动到你的 Web 服务器目录。以下以 [Apache](dedicated-linux-webserver.md#apache) 为例：

```
sudo mv prologue-server /var/www/prologue
```


创建一个虚拟主机配置，指向应用目录。Apache 配置示例：

```<VirtualHost *:80>
ServerName yourdomain.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


配置完成后重启 Web 服务器。

```
sudo systemctl restart apache2
```



### 配置环境设置

编辑配置文件，更新数据库连接和服务器 URL 等必要设置。

```
nano config.php
```


配置完成后，你可以通过配置的域名或服务器 IP 访问 Web 界面。



## Docker 安装

Docker 让部署更简单，应用运行在容器中。



### 创建项目目录

为 Docker 部署创建目录。

```
mkdir prologue-docker
cd prologue-docker
```



### 创建 Docker Compose 配置

用 `nano compose.yaml` 创建 Docker Compose 文件，写入以下配置：

```
services:
  prologue:
    image: ghcr.io/michaelstaake/prologue:latest
    container_name: prologue
    ports:
      - "13378:80"
    volumes:
      - ./data:/data
    restart: unless-stopped
```



### 启动容器

运行 `docker compose up -d` 启动容器，用 `docker ps` 确认容器运行状态。Docker 会自动下载所需镜像并启动有声书服务器。



### 访问服务器

服务器启动后，打开浏览器访问：

```
http://YOUR_SERVER_IP:13378
```

将 YOUR_SERVER_IP 替换为你的 VPS IP 地址。首次启动时，你需要：

- 创建管理员账号
- 配置有声书库目录
- 扫描并导入有声书文件


配置好库后，就能用 Prologue 移动应用连接服务器，开始流式播放你的有声书收藏。



## 总结

恭喜！你已成功通过手动安装或 Docker 部署方式搭建了兼容 Prologue 的有声书服务器。

两种安装方式都能让你在自有基础设施上托管有声书，并通过 Prologue 应用流式播放。Docker 方案维护和更新更方便，手动安装则能更灵活地控制 Web 服务器环境。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天在线为你服务！🙂

<InlineVoucher />