---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI: إعداد نظام التصويت"
description: "تعرف على كيفية إعداد خيارات التصويت ونظام الاستطلاع على سيرفر Over the Top WWI الخاص بك → تعلّم المزيد الآن"
sidebar_label: نظام التصويت
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

نظام التصويت في **Over the Top WWI** يتيح للاعبين التصويت على إجراءات مختلفة مثل طرد اللاعبين، تغيير الخرائط، أو تعديل إعدادات اللعب. هذه الميزة تعزز التفاعل داخل المجتمع وتقلل الحاجة لتدخل الأدمن بشكل مستمر.

من خلال إعداد خيارات التصويت، يمكنك التحكم في أنواع التصويت المسموح بها وكيفية عملها أثناء اللعب.

<InlineVoucher />

## الإعداد

يتم إعداد نظام التصويت داخل ملف إعدادات السيرفر. يمكنك الوصول إلى هذا الملف وتعديله من خلال **لوحة التحكم لسيرفر الألعاب** تحت قسم **الإعدادات**. ابحث وافتح ملف الإعداد `ServerConfiguration.ini`. داخل هذا الملف، ابحث عن المعاملات التالية:

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` يحدد نسبة الأصوات المطلوبة لنجاح التصويت
- `EnableBanPlayerPoll` يتيح للاعبين التصويت لحظر لاعبين آخرين
- `EnableKickPlayerPoll` يتيح للاعبين التصويت لطرد لاعبين آخرين
- `EnableChangeMapsPoll` يتيح للاعبين التصويت لتغيير الخرائط
- `EnableMutePlayerPoll` يتيح للاعبين التصويت لكتم صوت لاعبين آخرين
- `EnableCustomPoll` يفعّل خيارات التصويت المخصصة
- `ChangeMapImmediately` يحدد ما إذا كان تغيير الخريطة الناجح يتم تطبيقه فوراً

أنماط اللعب المسموح بها للتصويت:

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

هذه الإعدادات تحدد أنماط اللعب التي يمكن اختيارها أثناء التصويت.

- `1` → مفعّل
- `0` → معطّل

يمكنك تعطيل أنماط معينة لتقييد خيارات التصويت والحفاظ على تجربة لعب متناسقة.

بعد تعديل ملف `ServerConfiguration.ini`، احفظ التغييرات وأعد تشغيل السيرفر. سيتم تطبيق إعدادات التصويت الجديدة تلقائياً.

## الخاتمة

مبروك! لقد قمت بإعداد نظام التصويت بنجاح على **سيرفر Over the Top WWI** الخاص بك. هذا يتيح للاعبين المشاركة في اتخاذ القرارات ويساعد في أتمتة إدارة السيرفر.

لأي أسئلة أو دعم إضافي، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يومياً لمساعدتك! 🙂

<InlineVoucher />