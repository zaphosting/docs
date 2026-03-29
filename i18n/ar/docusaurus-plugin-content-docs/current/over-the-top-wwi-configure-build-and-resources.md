---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI: إعداد نقاط البناء والموارد"
description: "تعلم كيفية إعداد نقاط البناء، المدافع، وحدود الموارد على سيرفر Over the Top WWI الخاص بك → تعلّم المزيد الآن"
sidebar_label: نقاط البناء والموارد
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

نقاط البناء وإعدادات الموارد في **Over the Top WWI** تتحكم في عدد الهياكل، الدفاعات، والمعدات التي يمكن للاعبين نشرها خلال المباراة. هذه القيم تؤثر بشكل مباشر على توازن اللعب، خصوصًا في الأنماط التي يلعب فيها البناء والتحصينات دورًا رئيسيًا.

عن طريق تعديل هذه الإعدادات، يمكنك خلق تجربة لعب أكثر دفاعية مع تحصينات واسعة أو تحديد الموارد لمباريات أسرع وأكثر عدوانية.

<InlineVoucher />

## الإعداد

يتم إعداد نقاط البناء والموارد داخل ملف إعدادات السيرفر. يمكنك الوصول إلى هذا الملف وتعديله من خلال **لوحة التحكم لسيرفر الألعاب** تحت قسم **الإعدادات**. ابحث وافتح ملف الإعداد `ServerConfiguration.ini`. داخل هذا الملف، ابحث عن المعاملات التالية:

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` و `DefenderBuildPoints` تحدد عدد نقاط البناء المتاحة لكل فريق

- `AttackerCannonPoints` و `DefenderCannonPoints` تتحكم في عدد المدافع أو وحدات المدفعية التي يمكن نشرها

- `SapperBPRegenAmount` يحدد عدد نقاط البناء التي تتجدد مع مرور الوقت

- `SapperCannonPRegenAmount` يتحكم بسرعة تجدد نقاط المدافع

- `SapperPropBPRegenTime` و `CannonPropPRegenTime` تحدد الوقت بالثواني بين كل تجدد للنقاط

قم بضبط هذه القيم للتحكم في عدد الهياكل والدفاعات التي يمكن للاعبين إنشاؤها وسرعة تجدد الموارد أثناء اللعب.

بعد تعديل ملف `ServerConfiguration.ini`، احفظ التغييرات وأعد تشغيل السيرفر. سيتم تطبيق إعدادات الموارد الجديدة تلقائيًا.

## الخاتمة

مبروك! لقد قمت بإعداد نقاط البناء والموارد بنجاح على **سيرفر Over the Top WWI** الخاص بك. هذا يتيح لك التحكم في التحصينات، موازنة اللعب، وتشكيل تجربة المعركة بشكل عام.

لأي أسئلة إضافية أو مساعدة، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />