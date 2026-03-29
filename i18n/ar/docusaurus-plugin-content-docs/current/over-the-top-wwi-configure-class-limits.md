---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: ضبط حدود الفئات"
description: "تعلم كيفية ضبط حدود الفئات على سيرفر Over the Top WWI الخاص بك → تعلّم المزيد الآن"
sidebar_label: حدود الفئات
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

حدود الفئات في **Over the Top WWI** تتحكم في عدد اللاعبين الذين يمكنهم استخدام أنواع وحدات معينة مثل القناصة، المهندسين، أو الوحدات الثقيلة. تعديل هذه الحدود يساعد في تحقيق توازن في طريقة اللعب ويمنع استخدام فئات معينة بشكل مفرط.

من خلال ضبط حدود الفئات، يمكنك ضمان تكوين فرق عادلة وخلق تجربة لعب أكثر تنظيمًا وتكتيكية.

<InlineVoucher />

## الضبط

يتم ضبط حدود الفئات داخل ملف إعدادات السيرفر. يمكنك الوصول إلى هذا الملف وتعديله من خلال **لوحة التحكم لسيرفر الألعاب** تحت قسم **الإعدادات**. ابحث وافتح ملف الإعداد `ServerConfiguration.ini`. داخل هذا الملف، ابحث عن المعاملات التالية:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` لتفعيل أو تعطيل قيود الفئات  
- `0` → معطل  
- `1` → مفعل  

- `PercentofCavPerTeam` يحدد نسبة وحدات الفرسان المسموح بها لكل فريق  

- `NumberOfSappers`، `NumberOfSpecialists`، `NumberOfSnipers`، `NumberOfHeavys`، `NumberofStormTroops` تحدد عدد اللاعبين الذين يمكنهم اختيار كل فئة  

- `NumberofInfOfficers` يتحكم في عدد أدوار الضباط المتاحة  

- `MinimumNumOfPlayerForClassLimits` يحدد عدد اللاعبين اللازم تواجدهم على السيرفر قبل تطبيق حدود الفئات  

قم بتعديل هذه القيم للتحكم في عدد اللاعبين الذين يمكنهم اختيار كل فئة ولتحقيق توازن في سيرفرك حسب أسلوب اللعب المفضل لديك.

بعد تعديل ملف `ServerConfiguration.ini`، احفظ التغييرات وأعد تشغيل السيرفر. سيتم تطبيق حدود الفئات الجديدة تلقائيًا.

## الخاتمة

مبروك! لقد قمت بضبط حدود الفئات بنجاح على **سيرفر Over the Top WWI** الخاص بك. هذا يتيح لك تحقيق توازن في تكوين الفرق وتحسين تجربة اللعب بشكل عام.

لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />