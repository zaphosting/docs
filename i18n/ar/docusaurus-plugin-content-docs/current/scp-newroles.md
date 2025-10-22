---
id: scp-newroles
title: "SCP Secret Laboratory: إضافة أدوار جديدة للسيرفر"
description: "تعلم كيفية إنشاء وتخصيص أدوار السيرفر بصلاحيات محددة لإدارة المشرفين عن بُعد بفعالية → تعلّم المزيد الآن"
sidebar_label: إضافة أدوار جديدة
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## عرض الإعدادات
يتم إدخال الأدوار الجديدة في ملف "config_remoteadmin.txt".
يمكنك العثور على هذا الملف من خلال النقر على "Configs" في واجهة سيرفرك.

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

هنا يمكنك البحث عن الإعداد أعلاه ثم النقر على "العين" على اليمين لفتحه.

## نسخ الأدوار الموجودة
إذا كان الملف مفتوحًا، يمكنك البحث عن هذه الإدخالات فيه:

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

هذه أمثلة لأدوار تم إدخالها مسبقًا.
سنضيف إدخالًا جديدًا بالأسفل.
للقيام بذلك، ننسخ الكتلة من أحد الأدوار أعلاه ونلصقها تحت آخر دور.
في مثالنا، نسخنا دور "Moderator" وألصقناه بالأسفل:

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## إضافة دور خاص
يمكننا الآن تعديل الكتلة التي أضفناها من الدور الموجود وإدخال القيم التي نريدها.
في مثالنا استخدمنا الاسم "ZAP":

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

بعد الانتهاء من ذلك، يجب علينا إضافة الدور إلى قائمة الأدوار المتاحة.
وهذا يكون أسفل قليلًا في نفس ملف الإعدادات.

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

لذا ندخل دورنا تحت دور "moderator".
:::info
تنبيه: يرجى الانتباه للمسافات قبل وبعد علامة "-"!
:::

## الصلاحيات
في أسفل ملف "config_remoteadmin.txt" يمكننا تعديل الصلاحيات لكل دور.
إذا أردنا تعيين صلاحية لدورنا، ندخل اسم الدور داخل الأقواس.
كما هو موضح في هذا المثال:

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />