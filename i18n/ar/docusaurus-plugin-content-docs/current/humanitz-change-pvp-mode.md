---
id: humanitz-change-pvp-mode
title: "HumanitZ: تغيير وضع PvP"
description: "تعرف على كيفية تفعيل أو تعطيل PvP على سيرفر HumanitZ الخاص بك → تعلّم المزيد الآن"
sidebar_label: "تغيير وضع PvP"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## المقدمة

القتال بين اللاعبين (PvP) هو ميكانيكية أساسية في ألعاب البقاء مثل HumanitZ. تفعيل أو تعطيل PvP يغير طريقة تفاعل اللاعبين في القتال، سواء كان بإمكانهم إلحاق الضرر ببعضهم البعض، أو التفاعل مع العناصر المملوكة للاعبين مثل السيارات أو الحاويات.

<InlineVoucher />

## الإعدادات

يتم التحكم في وضع PvP من خلال ملف `GameServerSettings.ini`. يمكنك الوصول لهذا الملف من خلال لوحة التحكم الخاصة بسيرفرك تحت قسم **Configs**. داخل ملف الإعدادات، ابحث عن المعامل التالي:

```
;false/true=Off/On. This will also affect the ability to interact with player items such as cars and containers
PVP=true
```

- `PVP=true` – تفعيل القتال بين اللاعبين  
- `PVP=false` – تعطيل القتال بين اللاعبين

لتغيير وضع PvP، ببساطة قم بتعيين القيمة إلى `true` (تشغيل) أو `false` (إيقاف)، حسب الطريقة التي تريد أن يعمل بها PvP على سيرفرك.

مثال – تعطيل PvP:

```
PVP=false
```

بعد تعديل الملف، احفظ التغييرات وأعد تشغيل السيرفر ليتم تطبيق الإعداد الجديد.

## الخاتمة

مبروك! بتعديل قيمة `PVP` في ملف `GameServerSettings.ini`، لقد قمت بتغيير وضع PvP على سيرفر HumanitZ الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />