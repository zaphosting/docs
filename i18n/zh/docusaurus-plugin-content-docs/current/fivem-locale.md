---
id: fivem-locale
title: "FiveM：更改语言 / 位置（国旗）"
description: "了解如何自定义你的 FiveM 服务器语言和国旗，打造专属玩家体验 → 立即了解更多"
sidebar_label: 语言 / 位置（国旗）
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

FiveM 服务器可以显示不同的语言。这不仅体现在服务器浏览器中服务器国旗的显示，还包括服务器上实际使用的语言。如果需要，语言是可以自定义的。这样你就可以为你的服务器选择喜欢的语言和国家国旗。

![](https://screensaver01.zap-hosting.com/index.php/s/FJZc7pJmppG28mX/preview)

<InlineVoucher />

## 配置

服务器的国旗和语言配置通过 Locales 选项完成。Locales 的配置是在服务器配置文件中进行的，通过 **sets locale** 命令的值来定义。默认显示的是英语语言和南极洲（Antarctica）作为位置（国旗）。

### 打开服务器配置文件

服务器配置文件 `server.cfg` 可以在 txAdmin 界面的 `CFG Editor` 中访问。

![img](https://screensaver01.zap-hosting.com/index.php/s/qDsN5ggCjaaJLS5/preview)

### 查找你的语言对应的 locale 代码

语言和显示的定义是通过 locales（语言代码/国家代码）完成的，基于 ISO 639-1 / ISO 3166-1 标准。下面我们整理了一份最常用国家/语言的小列表。实际支持的列表当然要大得多：

| 国家           | 语言       | Locale |
| -------------- | ---------- | ------ |
| 德国           | 德语       | de-DE  |
| 美国           | 英语       | en-US  |
| 加拿大         | 英语       | en-CA  |
| 澳大利亚       | 英语       | en-AU  |
| 英国           | 英语       | en-GB  |
| 芬兰           | 芬兰语     | fi-FI  |
| 法国           | 法语       | fr-FR  |
| 荷兰           | 荷兰语     | nl-NL  |
| 葡萄牙         | 葡萄牙语   | pt-PT  |
| 巴西           | 葡萄牙语   | pt-BR  |
| 西班牙         | 西班牙语   | es-ES  |
| 新加坡         | 英语       | en-SG  |

:::caution 
服务器国旗的显示一般支持所有可用国家，但并非所有资源都包含所有语言。所以，务必提前确认你的国家/语言是否被支持！
:::

### 修改服务器配置文件内容

打开配置文件并确认好 locale/语言代码后，就可以进行配置了。首先检查是否已经存在 **sets locale** 命令。如果没有，输入格式如下：

```
# 你服务器主要语言的有效 locale 标识符。
# 例如 "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# 请务必将上面这行的 root-AQ 替换成真实语言代码！:)
```

**sets locale** 命令默认值是 **root-AQ**，需要改成你想用的语言代码。比如你想用美国国旗和英语语言，值就写成 **en-US**。修改完成后保存文件。

## 总结

最后一步是重启服务器，确保更改生效。之后你可以在 FiveM 客户端刷新服务器列表，就能看到刚刚设置的语言和国旗了。如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />