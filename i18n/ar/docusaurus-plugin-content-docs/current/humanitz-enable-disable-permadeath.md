---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: تفعيل/تعطيل الموت الدائم"
description: "تعرف على كيفية تفعيل أو تعطيل الموت الدائم على سيرفر HumanitZ الخاص بك → تعلّم المزيد الآن"
sidebar_label: "تفعيل/تعطيل الموت الدائم"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## مقدمة

الموت الدائم يزيد بشكل كبير من صعوبة وتوتر تجربة البقاء على قيد الحياة في HumanitZ. عند تفعيله، يخسر اللاعب شخصيته بشكل دائم عند الموت ويجب عليه إنشاء شخصية جديدة. هذا الإعداد يُستخدم عادةً في سيرفرات البقاء الصعبة أو عالية المخاطر.

<InlineVoucher />

## الإعدادات

يتم التحكم في الموت الدائم من خلال ملف `GameServerSettings.ini`. يمكنك الوصول إلى هذا الملف من خلال لوحة التحكم الخاصة بسيرفرك تحت قسم **الإعدادات**. داخل ملف الإعدادات، ابحث عن المعامل التالي:

```
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false
```

- `PermaDeath=true` – يُفعّل الموت الدائم. يخسر اللاعب شخصيته بشكل دائم عند موته.  
- `PermaDeath=false` – يُعطّل الموت الدائم. يمكن للاعبين إعادة الظهور بنفس شخصيتهم.

إذا كنت تريد تفعيل الموت الدائم، غيّر القيمة إلى:

```
PermaDeath=true
```

بعد تعديل الملف، احفظ التغييرات وأعد تشغيل السيرفر ليتم تطبيق الإعداد الجديد.

## الخاتمة

مبروك! بتعديل قيمة `PermaDeath` في ملف `GameServerSettings.ini`، لقد فعلت أو عطّلت الموت الدائم على سيرفر HumanitZ الخاص بك بنجاح. لأي استفسارات أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />