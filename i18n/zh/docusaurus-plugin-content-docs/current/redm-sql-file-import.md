---
id: redm-sql-file-import
title: "RedM：SQL 文件导入"
description: "了解如何正确将 SQL 文件导入你的 RedM 数据库，确保资源功能正常及数据库集成 → 立即了解更多"
sidebar_label: SQL 文件导入
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 将 SQL 文件导入你的 RedM 数据库

许多 RedM 资源需要数据库才能正常运行。因此，正确导入资源附带的 SQL 文件到你的数据库非常重要，这样资源才能在数据库中创建条目并正常工作。

:::info
并非所有资源都需要数据库才能运行！下载资源时，请查看描述或文档，确认是否需要导入 SQL 文件。
:::

通常，资源下载包中会包含一个或多个扩展名为 **.sql** 的文件，这些文件必须导入数据库。

## 准备 SQL 文件

本例中，我们将导入 RP 框架 **RedEM** 的 SQL 文件。你需要准备你想导入的资源对应的 SQL 文件。方法是打开需要数据库支持的资源文件夹，找到扩展名为 **.sql** 的文件。

![](https://screensaver01.zap-hosting.com/index.php/s/QTeYKS3MrXTPi76/preview)

:::info
导入前，建议用任意文本编辑器打开 .sql 文件，检查是否包含以下内容：

![](https://screensaver01.zap-hosting.com/index.php/s/wXLmBpmiwYp3Zzo/preview)

如果文件中有这些内容，请务必删除 `CREATE` 和 `USE` 数据库相关的行并保存，否则 SQL 文件无法导入。

原因是第一行声明要创建一个新数据库，但你的 RedM 游戏服务器已经有一个不同名称的数据库了，不需要再创建。第二行声明要使用名为 `essentialmode` 的数据库导入，但你会使用已有的数据库导入，所以也不需要这行。
:::

## 将 SQL 文件导入你的 RedM 数据库

现在，登录你的游戏服务器后台，进入 **数据库** 页面。

![](https://screensaver01.zap-hosting.com/index.php/s/mq2JdMmfiaqjtND/preview)

数据库页面提供了备份、创建、管理等多种功能。我们这里重点讲如何访问数据库，想了解更多可以看我们的其他数据库指南：[外部数据库访问](gameserver-database-external-access.md)。

点击蓝色的跳转图标，会带你进入 **phpMyAdmin** 工具，方便你管理数据库。若提示登录，请使用数据库页面提供的账号密码。

进入后，从左侧列表选择你的数据库，数据库名称**始终**以 `zap` 作为前缀。

![](https://screensaver01.zap-hosting.com/index.php/s/Qx37APa9233B7zt/preview)

如果之前没用过，数据库现在应该是空的。接下来就可以导入 .sql 文件了。

点击 phpMyAdmin 顶部导航栏的 **导入** 按钮，打开导入菜单。

![](https://screensaver01.zap-hosting.com/index.php/s/McfzS8DraJsXPTZ/preview)

然后点击 **浏览...** 按钮，打开文件选择窗口，选中你之前准备好的 **.sql** 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/Dk2Q2QgHzYEMCsa/preview)

:::note
最大支持文件大小为 2MB。如果你的 SQL 文件超过这个大小，建议用 SQL 分割工具将大文件拆分成小文件。推荐使用 [Pinetools SQL-Splitter](https://pinetools.com/split-files) 这款工具。拆分完成后，按正常流程导入即可。
:::

最后，点击页面底部的 **导入** 按钮开始导入。如果一切顺利，你会看到成功提示，数据库左侧会出现新建的表。

![](https://screensaver01.zap-hosting.com/index.php/s/iyobgkNtQpnNjoH/preview)

恭喜你，SQL 文件已成功导入你的游戏服务器数据库！


## 总结

为你的 RedM 服务器导入 SQL 文件是使用许多资源的必要步骤，能避免各种问题。如果有任何疑问或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />