---
id: 7d2d-mods
title: "7 Days to Die: تثبيت المودات"
description: "اكتشف كيف تخصص سيرفرك بأشهر المودات وتحسن تجربة اللعب لأسلوب فريد → تعلّم المزيد الآن"
sidebar_label: تثبيت المودات
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

مع المودات، عندك فرصة تخصص سيرفرك أكثر. في التالي، رح نشرح وين تلاقي أشهر مودات السيرفر وكيف تثبتها. مع إصدار Alpha 17 Experimental، تم تقديم مفهوم المودلتس. المودلتس هي مودات أصغر ما بتغير ملفات XML الأصلية، لكنها تُحمّل من مجلد المودات.

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## التحضير

أول شي لازم تعمله هو تحميل المودات اللي بدك تثبتها على سيرفرك. فيك تلاقي تشكيلة كبيرة من المودات على [7daystodiemods.com](https://7daystodiemods.com/). هناك فيك تلاقي أكثر من 1000 مود وبيتم إضافة المزيد بشكل منتظم. لما تحمل مود، لازم يحتوي على هيكل الملفات التالي:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## التثبيت

بعد ما تحمل المودات المطلوبة، فيك تبدأ بالتثبيت الفعلي للمودات. التثبيت بيتم عن طريق FTP. لازم يكون عندك برنامج FTP لتقدر ترفع الملفات على سيرفرك. إذا ما بتعرف شو هو FTP وكيف بيشتغل، لازم تطّلع على الدليل التالي: [الوصول عبر FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

ضمن مجلد ``/gXXXXX4/7dtd-linux-exp/`` لازم تنشئ مجلد اسمه **Mods**. لتعمل هيك، اضغط كليك يمين واختار **إنشاء مجلد**.

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

بعدين لازم ترفع ملفات المود لمجلد المودات:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

هيك بيكون تثبيت المود اكتمل. في المرة الجاية لما تشغل السيرفر، المفروض المودات تتحمّل تلقائياً.

<InlineVoucher />