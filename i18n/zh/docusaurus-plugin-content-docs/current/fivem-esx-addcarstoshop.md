---
id: fivem-esx-addcarstoshop
title: "FiveM：如何添加车辆到商店"
description: "了解如何管理并添加车辆到你的数据库，打造专属定制车行 → 立即学习"
sidebar_label: 添加车辆到车行
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 访问数据库

首先，我们需要连接到数据库。操作在“数据库”标签页下完成。

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

点击蓝色图标，用我们的登录信息登录，登录信息也可以在页面上找到。

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## 查找车辆生成名

接下来，我们需要找到车辆的生成名。可以通过试车或者浏览以下页面来查找：
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## 添加新车辆

选好车辆后，就可以把它添加到列表里。

:::info
默认情况下，车行里已经有很多车辆了。先确认你的车是否已经在列表中。
:::

首先，我们查看车辆分类，这样才能知道能添加哪些分类。
在“vehicle_categories”表里查看。

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

这里我们需要关注“name”这一列，记住它。

![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

接着，进入“vehicles”表。
然后点击“插入”（Insert）

![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

现在添加一辆新车。下面是各字段的简要说明：

**name** 商店里显示的车辆名称  
**model** 车辆生成名（确保全部小写）  
**price** 车辆价格  
**category** 我们刚才选的分类  

这里给你们准备了一个小示例：

![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />