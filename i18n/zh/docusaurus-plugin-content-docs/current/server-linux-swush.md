---
id: server-linux-swush
title: "在 Linux 服务器上安装 Swush - 搭建你的私人媒体和文件保险库"
description: "学习如何在你的 Linux VPS 上安装并运行 Swush，打造一个自托管的媒体、文件和内容管理平台 → 立即了解更多"
sidebar_label: 安装 Swush
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

[Swush](https://github.com/imthatdev/swush) 是一个自托管的数字保险库和内容管理平台，帮你把文件、媒体和个人数据集中管理在一个仪表盘里。这个应用集成了文件存储、分享工具、媒体流播放和知识管理功能，全部通过一个网页界面操作。

用 Swush，你可以上传和管理文件，利用文件夹和标签整理内容，生成可分享的链接，甚至直接从服务器流媒体播放。因为完全自托管，你能完全掌控自己的数据和基础设施，是云存储平台的超棒替代方案。

Swush 使用了现代技术栈，比如 Next.js、TypeScript 和 TailwindCSS，界面快速响应且易于部署在 VPS 或独服上。本指南将带你一步步在 Linux 服务器上安装并运行 Swush。

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />

## Swush 的使用场景

Swush 设计为你的数字内容和工作流的中央枢纽，适用多种场景：

- 管理和整理文件、图片和文档
- 搭建个人媒体服务器，流式播放上传内容
- 生成文件和媒体的安全分享链接
- 组织笔记、书签或代码片段等知识内容
- 搭建私人仪表盘管理个人工作流
- 通过 Swush API 自动上传和集成

这个平台把多种工具整合到一个环境，帮你减少对分散云服务的依赖。

## 前置条件

安装 Swush 前，请确保你的服务器满足以下要求。

| 硬件 | 最低配置 | 推荐配置 |
|----------|---------|-------------|
| CPU | 1 核心 | 4 核心 |
| 内存 | 2 GB | 4 GB |
| 硬盘空间 | 20 GB | 50 GB |

必备软件：

- Bun 运行时
- PostgreSQL 数据库
- Git

开始安装前，请确保系统已更新。

<InlineServiceLink />

## 准备工作

先创建一个 Swush 安装目录。
```
mkdir swush
cd swush
```
然后克隆 Swush 仓库。
```
git clone https://github.com/imthatdev/swush.git .
```
用 Bun 安装项目依赖。
```
bun install
```
## 配置

启动应用前，先创建环境配置文件。
```
cp example.env .env
```
打开 `.env` 文件，配置必填项：
```
APP_NAME=Swush
APP_URL=http://your-server-ip:3000
SUPPORT_NAME=Support
SUPPORT_EMAIL=support@example.com
DATABASE_URL=postgresql://username:password@localhost:5432/swush
```
你还可以配置其他设置，比如：

- 存储后端（本地或 S3）
- 上传目录
- 邮件通知的 SMTP 设置
- 认证密钥

Swush 支持**本地存储和兼容 S3 的存储系统**，方便你根据环境灵活扩展文件存储。

## 安装

配置好环境变量后，初始化数据库结构。
```
bun run push:db
```
接着构建应用。
```
bun run build
```
启动 Swush 服务器。
```
bun start
```
应用会启动并监听 **3000** 端口。

## 访问 Swush

服务器启动后，打开浏览器访问：
```
http://YOUR_SERVER_IP:3000
```
把 `YOUR_SERVER_IP` 替换成你的 VPS/独服 IP。首次访问仪表盘时，会有初始设置向导，帮你创建第一个账号并配置存储。

完成设置后，就可以开始上传文件、整理媒体，管理你的数字内容啦。

## 总结

恭喜你！已成功在 Linux 服务器上安装 **Swush**。你的自托管数字保险库已准备就绪，可以集中管理文件、分享媒体和组织个人内容。

自己托管 Swush，意味着你完全掌控数据，同时享受现代、注重隐私的内容管理平台。

有任何问题或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />