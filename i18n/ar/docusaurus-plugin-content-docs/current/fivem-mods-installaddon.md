---
id: fivem-mods-installaddon
title: "FiveM: تثبيت إضافات سيارات على السيرفر"
description: "اكتشف كيف تحمل وتحول إضافات السيارات لـ FiveM بسهولة لتعزيز تجربتك في اللعبة مع دليل خطوة بخطوة → تعلّم المزيد الآن"
sidebar_label: تثبيت إضافات سيارات
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## الاتصال عبر FTP

أول شيء لازم تسويه هو الاتصال بسيرفرك عبر FTP، تقدر تستخدم دليلنا [الوصول عبر FTP](gameserver-ftpaccess.md).

## التحضير

لهذا الدليل راح نستخدم أداة [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest)، اللي تسهل العملية كثير، نحمّل مجلدات "NConvert.zip" و "rpf2fivem.zip" من قسم "الإصدارات":

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

الحين نفك ضغط rpf2fivem في مجلد فاضي:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

بعدين نفتح ملف NConvert المضغوط وننسخ مجلد "NConvert" لنفس المجلد:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

الحين نقدر نشغل `rpf2fivem.exe`!


## تحميل الإضافات

عشان تثبت الإضافات عن طريق rpf2fivem لازم تضيف روابط مباشرة، مثلاً من gta5-mods.com، تختار إضافة السيارة اللي تبغاها وتضغط على "Download".

بعدين بس تضغط كليك يمين على زر التحميل وتختار "نسخ عنوان الرابط"، وتلصقه في أعلى يسار برنامج rpf2fivem:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

هنا تقدر تكتب اسم المورد الخاص فيك وتضغط "Add to queue".

لو عندك إضافات ثانية تبي تحملها، تقدر تضيفها بنفس الطريقة، وتثبت أكثر من إضافة سيارة بنفس الوقت:

## تحويل الإضافات

الحين بعد ما جهزنا قائمة الإضافات، نضغط على زر "Start".

:::info
ملاحظة: لازم دايمًا تختار خيار 'ضغط/تقليل حجم الخامات' عشان تتجنب أخطاء الخامات في إضافات السيارات على FiveM.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

الحين الإضافات تُحمّل وتجهز للاستخدام على FiveM.

## رفع الموارد

بعد ما يخلص rpf2fivem، تلاقي إضافات السيارات في مجلد "rpf2fivem":

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

تقدر ترفعها بكل بساطة عن طريق [تثبيت الموارد](fivem-installresources.md)، كمان ملف `servercfg.txt` يتعمل في مجلد rpf2fivem يحتوي على السطور اللي تدخلها مباشرة في server.cfg، تقدر تنسخها وتلصقها في server.cfg.

خلصنا! الحين إضافات السيارات مركبة على سيرفرك، وبعد إعادة تشغيل السيرفر تقدر تستخدمها.

<InlineVoucher />