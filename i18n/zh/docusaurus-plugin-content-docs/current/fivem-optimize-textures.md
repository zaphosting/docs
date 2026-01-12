---
id: fivem-optimize-textures
title: "FiveM：优化贴图"
description: "了解如何优化 GTA5 模组贴图，减小体积并提升游戏性能 → 立即学习"
sidebar_label: 优化贴图
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
想要优化你的 GTA5 模组贴图，减小文件大小又不牺牲画质吗？本指南教你如何高效压缩贴图到 16MB 以下。只需几个简单步骤和合适的工具，就能提升游戏性能，还能节省存储空间。同时还能避免以下常见问题：

```
资源 hevo/hevo.ytd 占用 166.0 MiB 物理内存。过大的资源会导致流式加载问题（模型无法加载/渲染，俗称“贴图丢失”、“城市BUG”或“流式加载不佳”）。
```

<InlineVoucher />


## 准备工作

开始之前，确保你已经下载并安装了必要的工具。请从官网下载 **OpenIV** 和 **XnResize**，并按照安装说明操作。这些工具将用于编辑贴图：

- **OpenIV**  [(下载)](https://openiv.com/)
- **XnResize** [(下载)](https://www.xnview.com/en/xnresize/#downloads)



## 配置
安装好工具后，就可以开始编辑贴图了。在 OpenIV 中找到你模组的 .ytd 文件并打开，进入贴图资源。

![OpenIV 贴图字典](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

在 OpenIV 界面左下角找到“导出所有贴图”选项，点击导出模组的所有贴图。将它们保存到你的载具模组目录下的一个文件夹里，比如叫“textures”。



## 优化

导出所有贴图后，接下来就是编辑和调整大小。打开电脑上的 XnResize，把所有导出的 .dds 文件拖进 XnResize 窗口。你会看到所有贴图都加载进来了。在 XnResize 的“Action”标签页，将宽度和高度设置为百分比，调整贴图大小为原始的 50%。记得保持比例不变。

![XnResize Action 标签页](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



切换到“Output”标签页，选择一个目标文件夹存放编辑后的贴图，比如“textures_resized”，格式选择 DDS - Direct Draw Surface。

![XnResize Output 标签页](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## 总结
编辑并调整好所有贴图大小后，用压缩后的新贴图替换模组中的旧贴图。你会发现压缩后的贴图体积大幅降低，不仅节省了存储空间，还提升了游戏性能。

| **描述**                  | **原始贴图字典**               | 压缩后贴图字典               | 提升倍数           |
| :------------------------ | :---------------------------- | :-------------------------- | :----------------- |
| **压缩后大小**            | 11.8 MB                      | 1.23 MB                     | 9.6x               |
| **未压缩大小**            | 164 MB                       | 11 MB                       | 14.9x              |
| **虚拟内存**              | 0.05 MiB                    | 0.05 MiB                    | -                  |
| **物理内存**              | 166.00 MiB                  | 10.69 MiB                   | 15.5x              |

别忘了在游戏里测试贴图效果。如果出现问题，可以随时把单个贴图恢复到原始大小，或者直接用原版 .dds 文件替换。

<InlineVoucher />