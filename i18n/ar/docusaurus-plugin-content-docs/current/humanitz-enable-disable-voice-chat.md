---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ: تفعيل أو تعطيل الدردشة الصوتية"
description: "تعرف على كيفية تفعيل أو تعطيل الدردشة الصوتية على سيرفر HumanitZ الخاص بك → تعلّم المزيد الآن"
sidebar_label: "تفعيل/تعطيل الدردشة الصوتية"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## مقدمة

التواصل الصوتي يقدر يغير جو سيرفر HumanitZ بشكل كبير. تفعيل الدردشة الصوتية يسمح للاعبين يتواصلوا مباشرة لما يكونوا قريبين من بعض، وهذا يعزز الانغماس والتعاون. تعطيلها ممكن يشجع على استخدام منصات تواصل خارجية أو يخلق تجربة بقاء أكثر هدوء وعزلة.

في HumanitZ، الدردشة الصوتية تتضبط مباشرة داخل ملف إعدادات السيرفر.

<InlineVoucher />

## الإعدادات

إعدادات الدردشة الصوتية تتحكم فيها في ملف `GameServerSettings.ini`. تقدر توصل لهذا الملف من خلال لوحة التحكم الخاصة بالسيرفر تحت قسم **Configs**. داخل ملف الإعدادات، دور على المعامل التالي:

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

طريقة الإعداد كالتالي:

- `Voip=true` أو `Voip=1` – تفعيل الدردشة الصوتية  
- `Voip=false` أو `Voip=0` – تعطيل الدردشة الصوتية  

لتغيير إعداد الدردشة الصوتية، ببساطة عدّل القيمة حسب ما تفضل. بعد تعديل الملف، احفظ التغييرات وأعد تشغيل السيرفر عشان الإعداد الجديد يشتغل.

## الخلاصة

مبروك! بتعديل قيمة `Voip` في ملف `GameServerSettings.ini`، أنت الآن فعلت أو عطلت الدردشة الصوتية على سيرفر HumanitZ الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لمساعدتك! 🙂

<InlineVoucher />