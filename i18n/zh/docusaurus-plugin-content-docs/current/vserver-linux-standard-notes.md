---
id: vserver-linux-standard-notes
title: "在 Linux 服务器上安装 Standard Notes - 搭建你的私人笔记系统"
description: "了解如何通过 Standard Notes 自托管安全同步并保护你的笔记 → 立即了解更多"
sidebar_label: 安装 Standard Notes
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Standard Notes 是一款开源笔记应用，采用经过审计的端到端加密保护你的数据。只有你掌握解密密钥。它能无缝同步你加密的笔记和文件到无限设备，支持离线访问，并积极防止外部访问你的内容。

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

想自己托管这项服务？我们会一步步带你完成安装和配置，同时告诉你所有需要注意的事项。

<InlineVoucher />



## 前提条件

在安装 **Standard Notes** 之前，请确保你的主机环境满足以下要求，以保证安装顺利且性能最佳。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 个 vCPU 核心 | 4 个 vCPU 核心             |
| 内存       | 2 GB        | 4 GB                       |
| 硬盘空间   | 5 GB        | 25 GB                      |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确保你的服务器满足以下条件后再继续安装：

**依赖项：** `Docker（引擎版本 26+ 和 Compose）`

**操作系统：** 支持 Docker 26+ 的最新 Ubuntu/Debian 版本

确保所有依赖已安装且操作系统版本正确，以避免安装 Standard Notes 时出现兼容性问题。



## 准备工作

在搭建 **Standard Notes** 之前，你需要先准备好系统环境，包括将操作系统更新到最新版本并安装所有必需依赖。这些准备工作能保证环境稳定，避免安装过程中或之后出现问题。


### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。运行以下命令：

```
sudo apt update && sudo apt upgrade -y
```
这会确保你的系统拥有最新的安全修复和软件版本，方便后续操作。

### 安装依赖
更新完成后，就可以安装依赖了。Standard Notes 会通过一组 Docker 容器部署和运行，因此需要先安装 Docker。运行以下命令安装 Docker：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

关于 Docker 的完整安装流程和使用指南，请参考我们的 [Docker](dedicated-linux-docker.md) 教程。




## 安装
确认所有要求都满足且准备工作完成后，就可以开始安装 Standard Notes 应用。

首先，创建一个文件夹用来存放所有配置和安装文件，这个文件夹将作为安装的工作目录。

```
mkdir standardnotes
cd standardnotes
```

接着，在工作目录下创建一个 `.env` 文件，并用项目示例配置填充它：

```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

该文件只包含最基本的必需变量，完整的变量列表可查看这里：[docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

打开 `.env` 文件，确保 KEYS 部分的所有密钥都已正确设置。使用以下命令为每个必需的环境变量生成随机值：

```
openssl rand -hex 32
```

将生成的值粘贴到 `.env` 文件中。Standard Notes 需要一个 LocalStack 的启动脚本，下载到工作目录并赋予执行权限：

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

下载官方示例配置文件，保存为 `docker-compose.yml`，该文件定义了 Standard Notes 所需的所有容器服务。

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

准备就绪后，拉取最新镜像并以后台模式启动服务：

```
docker compose pull && docker compose up -d
```



## 配置

提供的 `docker-compose.yml` 文件中的默认配置可以根据你的需求进行自定义。重点是 `server` 服务，你可以在 `ports` 属性中调整端口映射，选择应用在主机上的访问端口，避免与其他服务冲突，或符合你的网络偏好。

数据库安全同样重要。请将默认密码替换为强随机密码。你可以用以下命令生成安全密码：

```
openssl rand -hex 12  
```

将生成的密码添加到 `.env` 文件中的 `DB_PASSWORD`，同时在 `docker-compose.yml` 文件中将 `MYSQL_ROOT_PASSWORD` 和 `MYSQL_PASSWORD` 设置为相同值，确保容器间密码一致。

这些配置修改能确保你的安装不仅能正常运行，还更安全且符合你的环境需求。





## 连接同步服务器

要在 Standard Notes 中设置账户，点击应用右下角的头像图标。在弹出的菜单中选择“创建账户”开始新用户注册。输入有效邮箱和安全密码。

完成前，打开“高级选项”部分。在“同步服务器”中选择“自定义”，输入你自己的服务器 IP 和端口，格式为 IP:端口。这样你的笔记就不会通过默认的 Standard Notes 服务同步，而是通过你自托管的服务器同步。

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## 总结与更多资源

恭喜你！现在你已经成功在 VPS/独服上安装并配置了 Standard Notes。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Standardnotes.com](https://standardnotes.com/) - 官方网站
- [Standardnotes.com/help](https://standardnotes.com/help) - Standard Notes 帮助中心（文档）

有没覆盖到的具体问题？需要更多帮助？随时联系在线客服，我们每天都在线，随时为你服务！🙂