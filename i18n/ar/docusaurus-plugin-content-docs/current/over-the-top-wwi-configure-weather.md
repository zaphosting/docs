---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI: إعداد الطقس"
description: "تعلم كيفية إعداد إعدادات الطقس على سيرفر Over the Top WWI الخاص بك → تعرف على المزيد الآن"
sidebar_label: الطقس
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

إعدادات الطقس في **Over the Top WWI** تؤثر بشكل مباشر على طريقة اللعب، الرؤية، والأجواء. من خلال تعديل هذه القيم، يمكنك خلق ظروف واضحة لمعارك متوازنة أو إدخال بيئات تحدي مثل الضباب، المطر، أو العواصف.

تسمح لك إعدادات الطقس المخصصة بتشكيل التجربة العامة وجعل المباريات أكثر ديناميكية أو غامرة.

<InlineVoucher />

## الإعداد

يتم إعداد الطقس داخل ملف إعدادات السيرفر. يمكنك الوصول إلى هذا الملف وتعديله من خلال **لوحة تحكم سيرفر الألعاب** تحت قسم **الإعدادات**. ابحث وافتح ملف الإعداد `ServerConfiguration.ini`. داخل هذا الملف، ابحث عن المعاملات التالية:

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` لتفعيل أو تعطيل تغييرات الطقس الديناميكية

- `0` → معطل
- `1` → مفعل

- `CurrentWeather` يحدد نوع الطقس الحالي

- `0` → صافي
- `1` → مطر
- `2` → ضباب
- `3` → ثلج
- أضف `+3` لإصدارات أكثر كثافة

- `CloudCoverage` يتحكم في مدى تغطية السماء بالغيوم

- القيم الأقل تعني سماء أكثر صفاءً
- القيم الأعلى تزيد من كثافة الغيوم

- `TimeToChangeWeather` يحدد مدى تكرار تغير الطقس بالثواني

- `TimeToChangeClouds` يتحكم في مدى تحديث حالة الغيوم

إعدادات بيئية إضافية:

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` يتحكم في قوة تأثير الرياح على طريقة اللعب
- `WindDirection` يحدد اتجاه الرياح
- `ChanceOfLightningOccuring` يحدد احتمالية حدوث البرق
- `LightningTimer` يتحكم في تكرار ظهور البرق
- `CanLightningKill` يحدد ما إذا كان البرق يمكن أن يضر اللاعبين

بعد تعديل ملف `ServerConfiguration.ini`، احفظ التغييرات وأعد تشغيل السيرفر. سيتم تطبيق إعدادات الطقس الجديدة تلقائيًا.

## الخاتمة

مبروك! لقد قمت بإعداد إعدادات الطقس بنجاح على **سيرفر Over the Top WWI** الخاص بك. تعديل هذه القيم يتيح لك خلق بيئات ديناميكية وتحسين تجربة اللعب للاعبين.

لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />