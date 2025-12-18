---
id: fivem-esx-addcarstoshop
title: "FiveM: إضافة سيارات إلى المتجر"
description: "اكتشف كيف تدير وتضيف المركبات إلى قاعدة بياناتك لتجربة متجر سيارات مخصصة → تعلّم المزيد الآن"
sidebar_label: إضافة سيارات إلى الوكالة
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## الوصول إلى قاعدة البيانات

أول شيء لازم نوصّل لقاعدة البيانات. نعمل هذا تحت تبويب "قواعد البيانات"

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

هناك نضغط على الأيقونة الزرقاء ونسجل الدخول ببياناتنا، اللي نلاقيها كمان في الصفحة.

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## إيجاد أسماء الظهور (spawn names)

بعدها لازم نعرف اسم الظهور للسيارة. نقدر نعمل هذا بالتجربة أو بتصفح الصفحة التالية:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## إضافة مركبة جديدة

بعد ما نختار سيارة، نقدر نضيفها للقائمة.

:::info
بشكل افتراضي، في كثير سيارات موجودة أصلاً في متجر السيارات. تأكد إذا كانت سيارتك موجودة بالفعل.
:::

أول شيء نراجع فئات السيارات. عشان نعرف أي فئات نقدر نضيف لها.
نسوي هذا في جدول "vehicle_categories"

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

هنا نحتاج عمود "name". راح نحفظ هذا الاسم.

![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

بعدها نروح لجدول "vehicles".
وبعدين نضغط على Insert

![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

الآن نضيف مركبة جديدة. شرح بسيط لكل حقل:

**name** الاسم اللي يظهر في المتجر  
**model** اسم الظهور (تأكد إنه مكتوب بحروف صغيرة)  
**price** سعر المركبة  
**category** الفئة اللي اخترناها للتو

عندي لكم مثال صغير هنا:

![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />