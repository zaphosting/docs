---
id: source-metamod-plugins
title: 插件安装
description: "了解如何高效管理和排查Sourcemod插件，提升服务器性能 → 立即了解更多"
sidebar_label: 插件
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 插件安装

下面介绍如何安装插件。要使用插件，你需要先安装Sourcemod / Metamod。安装教程请看这里：[安装指南](source-metamod-installation.md)



安装插件时，需要通过FTP上传插件文件。插件文件必须上传到 **../addons/sourcemod/** 目录下的 **Plugins** 文件夹。根据插件的复杂程度，可能还会有配置文件和翻译文件。如果有的话，这些文件需要上传到 **configs** 和 **translations** 文件夹中。



## 禁用 / 删除插件

在 **Plugins** 目录下有一个名为 **disabled** 的子文件夹。你可以把暂时不想加载的插件放到这里。只需把对应的 **.smx** 文件移动进去即可。



如果想永久禁用插件，则需要删除对应的插件文件。插件将在地图切换或服务器重启后被停用。



## 常见问题


**为什么我安装的插件没反应？**

解决方案：

- 确保插件安装时满足所有前置条件。有些插件需要数据库支持才能正常运行，这时你需要对 **configs** 目录下的 **database.cfg** 进行相应配置。
- Source引擎会定期更新，老旧且无人维护的插件可能会不兼容。遇到这种情况，唯一办法是去 Alliedmodders 论坛找非官方修复版，或者直接换用其他插件。
- 如果以上方法都没用，建议查看实时控制台或日志文件，通常能找到问题原因。

<InlineVoucher />