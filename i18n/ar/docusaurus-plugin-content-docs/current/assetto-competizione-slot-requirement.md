---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione: متطلبات فتح فتحات السيارات"
description: "اكتشف كيفية فتح أكثر من 10 فتحات في Assetto Corsa من خلال تلبية المتطلبات الأساسية لتحسين تجربة اللعب → تعلّم المزيد الآن"
sidebar_label: متطلبات فتح فتحات السيارات
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

في Assetto Corsa، يمكن استخدام 10 فتحات بشكل صحيح بدون أي تعديل إضافي. لكن لاستخدام أكثر من 10 فتحات، يجب تلبية بعض المتطلبات الأساسية. هذه المتطلبات يتم ضبطها تحت "**Configs**" وفيها يجب تعديل ملف "**settings.json**".

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## التحضير وحدود الفتحات

لاستخدام أكثر من 10 فتحات، يجب تعديل القيم **"trackMedalsRequirement": X,** و **"safetyRatingRequirement": X,**.
يمكن حساب مدى ارتفاع هذه القيم باستخدام المعادلة التالية.
يمكن استخدام نفس المعادلة لحساب القيم المطلوبة لـ trackMedalRequirement و safetyRatingRequirement.

```
الفتحات = safetyRating / 4 + trackMedals + 10 
```

### قائمة بالتركيبات الممكنة

فيما يلي قائمة بالتركيبات الممكنة التي يمكن استخدامها لتمكين استخدام عدد الفتحات المطلوب.
هناك أكثر من حل ممكن لتحقيق متطلبات الفتحات اللازمة.
لهذا السبب، يتم عرض الاحتمالات المختلفة أيضًا في القائمة.

:::info
لاحظ أنه بالنسبة لـ safetyRatingRequirement و trackMedalRequirement تم إدخال الحد الأدنى من المتطلبات. من الممكن بالطبع استضافة عدد أقل من الفتحات مع قيم أكبر لـ safetyRatingRequirement و trackMedalRequirement.
:::

الفتحات | safetyRatingRequirement | trackMedalRequirement
-----|-------|---------
10-16 | 24 | 0
18 | 40 | 0
18 | 24 | 2
20 | 40 | 0
20 | 30 | 3
22 | 50 | 0
22 | 40 | 2
24 | 60 | 0
24 | 50 | 2
26 | 70 | 0
26 | 60 | 1
28 | 80 | 0
28 | 70 | 1
30 | 90 | 0
30 | 80 | 1

<InlineVoucher />