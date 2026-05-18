---
id: unturned-workshop
title: "Unturned：在服务器上安装 Workshop 内容"
description: "了解如何通过自定义 Steam Workshop 内容增强你的 Unturned 服务器，打造专属游戏体验 → 立即了解更多"
sidebar_label: Workshop 内容
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Steam Workshop 让你有机会进一步定制你的服务器。接下来我们会讲解如何通过 Steam Workshop 给你的服务器添加更多内容。

### 准备工作

有很多渠道可以下载 Mod、地图、模型等资源，其中最受欢迎的就是 Steam Workshop。在这里你能找到许多可以安装到服务器上的资源。首先你需要找到想要的 Workshop 项目。Unturned 的 Steam Workshop 地址在这里：[Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

选定后，你需要复制该 Workshop 项目的 ID，然后添加到面板中。无论你是用浏览器还是 Steam 客户端浏览 Workshop，复制 ID 的方法如下：

- **Steam 客户端**

  在 Workshop 项目的页面上右键点击，选择“复制页面网址”，然后从 URL 中复制 ID。

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

  

- **浏览器**

  在地址栏中找到 **.../?id=** 后面的一串数字，复制它。

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)





### 添加内容

收集好想要的内容后，就可以添加到服务器了。需要添加的内容会写在面板中的 **WorkshopDownloadConfig.json** 配置文件里，路径在 Configs 里。

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

我们把各个 Steam Workshop 项目的 ID 添加到 'FileIDs' 里，最终效果大概是这样：

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // 示例占位符
    0987654321  // 示例占位符
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "检测到 Workshop 文件更新，服务器将在 {0} 秒后关闭",
  "Shutdown_Kick_Message": "因 Workshop 文件更新，服务器关闭。"
}
```

然后启动服务器。启动过程中会自动下载添加的内容，你可以在实时控制台看到下载进度，输出示例如下：

```
1 个 Workshop 项目待下载...
正在下载 Workshop 项目 1567256534
Workshop 项目 1567256534 下载成功
```

内容现在已经成功下载、配置并激活啦。

<InlineVoucher />