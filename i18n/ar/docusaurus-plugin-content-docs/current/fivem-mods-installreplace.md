---
id: fivem-mods-installreplace
title: "FiveM: تثبيت مودات سيارات بديلة على السيرفر"
description: "اكتشف كيف تضبط وترفع مودات على سيرفر FiveM الخاص بك لتجارب لعب مخصصة → تعلّم المزيد الآن"
sidebar_label: تثبيت مودات سيارات بديلة
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## الاتصال عبر FTP
أول شيء لازم تسويه هو الاتصال بسيرفرك عن طريق FTP، تقدر تستخدم [دليل الوصول عبر FTP](gameserver-ftpaccess.md) الخاص بنا لهذا الغرض.

## التحضير

الحين سوِ مجلد للمودات داخل مجلد "resources".

:::info
تقدر تسمي المجلد بأي اسم ما يحتوي على رموز خاصة. في مثالنا اسمه "assets".
:::

الحين سوِ ملف fxmanifest.lua داخل مجلد "assets" اللي أنشأته للتو.

اكتب النص التالي داخل الملف:

```
fx_version 'cerulean'
games { 'gta5' }

```

بعدين احفظ الملف fxmanifest.lua واغلقه، ما نحتاجه بعد الآن.

داخل مجلد assets، سوِ مجلد اسمه "stream".

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## رفع المودات

افتح مجلد stream الحين، هنا تقدر ترفع كل ملفات ytd و yft عن طريق السحب والإفلات:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

بعد ما ترفع كل المودات، كل اللي عليك تسويه هو إضافة اسم المورد (resource) في ملف server.cfg، اللي تلاقيه داخل مجلد "server-data" في سيرفر FiveM الخاص بك.

تقدر تفتح الملف بأي محرر نصوص، تحت قسم "start" تكتب اسم المورد كالتالي:

```
start assets
```

خلصنا! بعد إعادة تشغيل السيرفر، المفروض مود السيارة يكون موجود على السيرفر!

<InlineVoucher />