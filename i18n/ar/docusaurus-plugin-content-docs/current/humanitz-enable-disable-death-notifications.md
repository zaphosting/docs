---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: تفعيل/تعطيل إشعارات الموت"
description: "تعرف على كيفية تفعيل أو تعطيل إشعارات موت اللاعبين على سيرفر HumanitZ الخاص بك → تعرف على المزيد الآن"
sidebar_label: "تفعيل/تعطيل إشعارات الموت"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## مقدمة

إشعارات الموت تخبر اللاعبين عندما يموت شخص ما على السيرفر. بينما يمكن أن تكون مفيدة لمتابعة النشاط، بعض السيرفرات تفضل تجربة أكثر غمرًا أو تنافسية بدون رسائل موت عامة.

يتيح لك HumanitZ تفعيل أو تعطيل إشعارات موت اللاعبين مباشرة من خلال ملف إعدادات السيرفر.

<InlineVoucher />

## الإعدادات

يتم التحكم في إعدادات إشعارات الموت في ملف `GameServerSettings.ini`. يمكنك الوصول لهذا الملف من خلال لوحة التحكم الخاصة بالسيرفر تحت قسم **الإعدادات**.  
داخل ملف الإعدادات، ابحث عن المعامل التالي:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – يعطل إشعارات الموت للاعبين العاديين. المشرفين سيظلون قادرين على رؤيتها.  
- `NoDeathFeedback=false` – يفعّل إشعارات الموت لجميع اللاعبين.

إذا كنت تريد أن تكون إشعارات الموت مرئية للجميع، اضبط القيمة على:

```
NoDeathFeedback=false
```

بعد تعديل الملف، احفظ التغييرات وأعد تشغيل السيرفر ليتم تطبيق الإعداد الجديد.

## الخاتمة

مبروك! بتعديل قيمة `NoDeathFeedback` في ملف `GameServerSettings.ini`، تكون قد ضبطت إعدادات إشعارات الموت على سيرفر HumanitZ الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />