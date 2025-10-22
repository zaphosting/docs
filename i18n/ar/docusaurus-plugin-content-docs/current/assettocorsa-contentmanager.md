---
id: assettocorsa-contentmanager
title: "Assetto Corsa: إعداد السيرفر باستخدام Content Manager"
description: "اكتشف كيف تضبط وتدير إعدادات سيرفر الألعاب الخاص بك بكفاءة لأداء مميز وتخصيص كامل → تعلّم المزيد الآن"
sidebar_label: إعداد السيرفر باستخدام Content Manager
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**مهم** لإدارة السيرفر باستخدام Content Manager، تحتاج النسخة الكاملة، النسخة الخفيفة *لا* تدعم إدارة السيرفرات.
:::

<InlineVoucher />


## التحضير

أولاً، افتح Content Manager واضغط على قائمة الساندويتش في الأعلى يمين، ثم اختر "Server":

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

هنا ننشئ إعداد مسبق جديد ونختاره:

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## ضبط عدد فتحات السيرفر

أول شيء نحتاج نحدد سعة السيرفر، في حالتنا السيرفر فيه 10 فتحات فقط، فنختار '10' للسعة:

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## اختيار الخريطة

الخريطة الافتراضية هي Imola، بالضغط على الخريطة يمكنك اختيار خريطتك الخاصة:

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## اختيار السيارات

الآن ننتقل لتبويب "Entry List"، هنا يمكنك إضافة سيارات جديدة:


![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)


:::info
تأكد أن جميع فتحات السيارات ممتلئة ولا تتجاوز عدد الفتحات المتاحة.

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## إعداد رفع FTP

من خلال قائمة "Advanced" يمكنك إعداد أداة رفع FTP لتتمكن من رفع إعدادات السيرفر بنقرة واحدة.

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


الآن أدخل بيانات FTP الخاصة بك هنا:

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
في خانة "Folder" يجب إدخال معرّف سيرفر الألعاب كما يظهر في رابط سيرفر الألعاب الخاص بك، مثلاً:

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

في حالتنا، سيكون المسار كاملاً:

```
/g427814/assetto-corsa/
```

لسيرفر AssettoServer:

```
/g427814/assettoserver/
```

بعدها يمكنك الضغط على "Upload Content"، سيتم رفع الإعدادات، المسار والسيارات التي ضبطتها تلقائياً، ثم كل ما عليك هو تشغيل السيرفر!

<InlineVoucher />