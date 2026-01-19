---
id: vserver-windows-docker
title: "VPS：在 Windows 上安装 Docker"
description: "了解如何使用 Docker 容器高效部署和管理应用，实现无缝扩展和更新 → 立即了解更多"
sidebar_label: 安装 Docker
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Docker 是一个开放平台，用于开发、交付和运行容器化应用。容器将应用及其所有依赖打包成一个标准化单元，可以在不同环境中可靠运行。

这种方式消除了开发、测试和生产系统之间的差异带来的问题。借助 Docker，应用可以快速部署、高效扩展，并且实现无停机更新。

想自己托管这个服务？我们会一步步带你完成安装和配置，同时告诉你所有需要注意的事项。

<InlineVoucher />



## 前提条件

安装 **Docker** 之前，请确保你的主机环境满足以下要求，以保证安装顺利并获得最佳性能。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ---------- | -------------------------- |
| CPU        | 1 vCPU 核心 | 4 vCPU 核心               |
| 内存       | 4 GB       | 4 GB                       |
| 硬盘空间   | 10 GB      | 25 GB                      |



## 安装

要在 Windows Server 上安装 Docker，下载并运行 PowerShell 脚本 `install-docker-ce.ps1`。该脚本会启用容器所需的系统功能并安装 Docker 运行时。以管理员身份打开 PowerShell，执行以下命令：

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

脚本会启用与容器相关的 Windows 功能，安装 Docker 引擎和 Docker CLI，并注册 Docker 服务为自动启动。

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

安装过程中系统会重启，重启后应自动继续。重启后登录，如果脚本提示，请再次运行相同命令以完成服务初始化。脚本完成后，输出应类似如下：

```
Installing Docker... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\docker.exe
Installing Docker daemon... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\dockerd.exe
Configuring the docker service...
Waiting for Docker daemon...
Successfully connected to Docker Daemon.
The following images are present on this machine:
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Script complete!
```



## 配置

### 启动和停止 Docker

Docker 在 Windows 上作为服务运行。安装后会自动启动。手动控制命令：

```
Start-Service docker    # 启动 Docker 服务
Stop-Service docker     # 停止 Docker 服务
Restart-Service docker  # 重启 Docker 服务
```



### 启动和停止容器

用 `docker run` 启动容器。示例：启动 IIS Web 服务器，将容器内的 80 端口映射到主机的 8080 端口：

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```



### 查看容器状态

查看容器状态：

```
docker ps        # 正在运行的容器
docker ps -a     # 所有容器，包括已停止的
docker inspect web   # 详细信息
docker logs web      # 容器日志
```



#### 资源和状态监控

```
docker stats            # 实时 CPU/内存/IO 使用情况
```




## 总结及更多资源

恭喜！你已经成功在 VPS 上安装并配置了 Docker。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Docker.com](https://Docker.com/) - 官方网站
- [docs.docker.com](https://docs.docker.com/) - Docker 官方文档

有具体问题这里没提到？需要更多帮助？随时联系在线客服，我们每天都在线为你服务！🙂