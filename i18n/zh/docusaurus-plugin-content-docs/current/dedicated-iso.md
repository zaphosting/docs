---
id: dedicated-iso
title: "独立服务器：自定义 ISO"
description: "了解如何通过 iLO 或远程控制台轻松挂载 ISO 文件，高效启动你的服务器 → 立即了解"
sidebar_label: 自定义 ISO
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
想挂载一个 ISO 文件？是用我们的还是你自己的？没问题！我们提供大量 ISO 文件，同时也支持更多自定义选项。

:::danger ISO 文件的选择与使用
使用你自己的 ISO（操作系统）时，我们不主动提供支持，因此如果出现任何问题，我们无法保证功能正常。
:::



## 可用的挂载方式
挂载自定义 ISO 文件有两种方式。无论哪种，都必须重启服务器才能加载文件。一般来说，挂载文件没有限制，关键是 ISO 文件必须是可启动的。

## 通过 iLO 挂载
打开你的 iLO 管理界面，进入“虚拟媒体”  
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* 输入指向你想用的 ISO 文件的 URL，确保链接以 .iso 结尾
* 点击“插入媒体”
* 点击“服务器重启”，系统将执行重启操作

你的 ISO 文件现在就会被加载。

## 通过远程控制台挂载

**HTML5 控制台**  
你可以直接在远程控制台里轻松挂载文件：  
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* 点击光盘图标
* 选择“CD/DVD”
* 选择“脚本媒体 URL”或“本地 .iso 文件”

“脚本媒体 URL”是挂载已上传到服务器或网页空间的 ISO 文件，而“本地 .iso 文件”则是直接从你电脑选择 ISO 文件，无需上传。

选好 ISO 文件后，记得重启服务器。

**Java 控制台**  
和 HTML5 控制台一样，ISO 文件也可以直接在应用内挂载。  
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* 打开“虚拟驱动器”

“镜像文件 CD/DVD-ROM”是直接从电脑选择 ISO 文件，“URL CD/DVD-ROM”是挂载已上传到服务器或网页空间的 ISO 文件。

挂载完成后，别忘了重启服务器。

## 总结
恭喜你，已经成功选择并挂载了你的 ISO 文件！如果有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂