---
id: source-custom-content
title: 在游戏服务器上安装自定义内容和模组
description: "了解如何通过地图、皮肤和音效等自定义内容，提升《反恐精英》和《加里模组》等Source游戏的玩法 → 立即了解"
sidebar_label: 自定义内容
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 什么是自定义内容？

一些Source游戏，比如《反恐精英》和《加里模组》，因其丰富多样的玩法而闻名。这一切都得益于插件和**自定义内容**的支持。多年来，开发出了各种游戏模式，比如僵尸模式、捉迷藏、小游戏、越狱等等。

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

这类服务器通常会使用社区制作的地图、玩家皮肤和音效。为了让玩家能够使用或看到服务器上的自定义内容，必须先从服务器下载这些内容。这里有两种方式：

- FastDL
- Steam Workshop

根据应用范围的不同，某种方式会更适合。下面是FastDL和Workshop的区别一览：

|  自定义内容  | FastDL | Steam Workshop |
| :----------: | :----: | :------------: |
|     地图     |   ✓    |       ✓        |
| 材质/模型   |   ✓    |       ✗        |
|     音效     |   ✓    |       ✗        |



## 设置自定义内容



### FastDL

下面介绍如何使用我们的[Webspace产品](https://zap-hosting.com/en/shop/product/webspace/)来搭建FastDL服务器。当然，你也可以使用任何其他提供公网访问的Web服务器。开始设置时，打开你的Webspace产品并进入管理界面：

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



进入后，打开文件管理器并创建以下文件夹：

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



接着，需要授权Webspace，确保游戏中能正确下载内容：

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
权限必须对所有文件夹都设置！
:::

现在可以上传自定义内容了。文件需要同时存在于游戏服务器和FastDL（Webspace）上。游戏服务器上的文件是解压状态上传，而FastDL上的文件建议用bzip2压缩上传。推荐使用7Zip来压缩。

最后，只需在游戏服务器上指定FastDL服务器即可。配置通过**server.cfg**完成，需添加以下命令：

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // 把URL替换成你的ZAP Webspace地址。
```

重启服务器并连接后，相关内容就会自动下载。你也可以在游戏控制台查看下载情况：

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

下面介绍Steam Workshop的设置。首先打开Steam Workshop页面。方法是在Steam中选择对应游戏，然后打开Workshop。这里以[CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections)为例。进入后，点击菜单中的Browse，选择Collection：

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

右键点击Collection，创建游戏服务器用的合集：

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

合集创建成功，但默认是空的。接下来重新打开游戏的Workshop，选择想添加的物品：

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

选好后，回到合集，右键点击并选择复制页面URL。需要从URL中提取合集ID，格式类似：

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

最后，将这个ID添加到你游戏服务器管理后台的Steam Workshop设置中：

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />