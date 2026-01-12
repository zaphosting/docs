---
id: redm-locale
title: "RedM：更改语言 / 位置（国旗）"
description: "了解如何自定义 RedM 服务器的语言和国旗，提升玩家体验和本地化 → 立即了解更多"
sidebar_label: 语言 / 位置（国旗）
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RedM 服务器可以显示为不同的语言。这不仅体现在服务器浏览器中服务器国旗的显示，还包括服务器上实际使用的语言。语言可以根据需要进行自定义。这样你就可以为你的服务器选择语言和国家国旗。

![img](https://screensaver01.zap-hosting.com/index.php/s/JHgoDfcsN4XX8Jb/preview)

<InlineVoucher />

## 配置

服务器的国旗和语言配置通过 Locales 选项完成。Locales 的配置是在服务器配置文件中进行的，通过 **sets locale** 命令的值来定义。默认显示的是英语语言和南极洲作为位置（国旗）。

### 打开服务器配置文件

服务器配置文件 `server.cfg` 可以在 txAdmin 界面的 `CFG Editor` 中访问。

![img](https://screensaver01.zap-hosting.com/index.php/s/kHeJyeXiKDfSY2c/preview)



### 查找你的语言对应的 locale/语言代码

语言和显示的定义是通过基于 ISO 639-1 / ISO 3166-1 标准的 locales（语言代码/国家代码）来完成的。下面我们整理了一份最常用国家/语言的小列表。实际支持的列表当然要大得多：

| 国家          | 语言       | Locale |
| -------------- | ---------- | ------ |
| 德国          | 德语       | de-DE  |
| 美国          | 英语       | en-US  |
| 加拿大        | 英语       | en-CA  |
| 澳大利亚      | 英语       | en-AU  |
| 英国          | 英语       | en-GB  |
| 芬兰          | 芬兰语     | fi-FI  |
| 法国          | 法语       | fr-FR  |
| 荷兰          | 荷兰语     | nl-NL  |
| 葡萄牙        | 葡萄牙语   | pt-PT  |
| 巴西          | 葡萄牙语   | pt-BR  |
| 西班牙        | 西班牙语   | es-ES  |
| 新加坡        | 英语       | en-SG  |

:::caution 
服务器国旗的显示一般支持所有可用国家，但并非所有资源都包含所有语言。因此，务必提前确认你的国家/语言是否被支持！
:::



### 调整服务器配置文件内容

打开配置文件并确认了 locale/语言代码后，就可以进行配置了。首先检查是否已经存在 **sets locale** 命令。如果没有，输入格式如下：

```
# 你服务器主要语言的有效 locale 标识符。
# 例如 "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# 请务必将上面这行的 root-AQ 替换成真实语言代码！:)
```

**sets locale** 命令的默认值是 **root-AQ**，需要将其替换成正确的值。比如，如果你想用美国国旗和英语作为语言，值就应该是 **en-US**。保存你所做的更改。


## 总结

最后一步是重启服务器，确保更改生效。之后你可以在 RedM 客户端重新加载服务器列表，就能看到刚刚修改的效果了。如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />