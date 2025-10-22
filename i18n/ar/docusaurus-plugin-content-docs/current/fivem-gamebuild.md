---
id: fivem-gamebuild
title: "FiveM: تفعيل محتوى DLC"
description: "اكتشف كيف تفرض إصدارات DLC محددة على سيرفر FiveM الخاص بك للوصول إلى أحدث الخرائط، والمركبات، والمحتوى → تعلّم المزيد الآن"
sidebar_label: تفعيل إصدار لعبة DLC
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

فرض إصدار اللعبة يتيح لك إجبار سيرفر الألعاب الخاص بك على استخدام نسخة DLC معينة، مما يسمح لك باللعب بأحدث الخرائط، والملابس، والمركبات، وأكثر من ذلك!

<InlineVoucher />

## إصدارات اللعبة المتاحة

هذا نظرة عامة على جميع إصدارات DLC المتاحة ومعرّفات الإصدارات الخاصة بها:

| معرّف الإصدار |        اسم الإصدار         |
| :------------: | :------------------------: |
|      2060      | Los Santos Summer Special  |
|      2189      |        Cayo Perico         |
|      2372      |         Tuner DLC          |
|      2545      |       The Contract         |
|      2699      | The Criminal Enterprises   |
|      2802      |   Los Santos Drug Wars     |
|      2944      |  San Andreas Mercenaries   |
|      3095      |       The Chop Shop        |
|      3258      |  Bottom Dollar Bounties    |
|      3407      |    Agents of Sabotage      |
|      3570      |        Money Fronts        |



## تفعيل الإصدار

لاستخدام محتوى DLC إضافي مثل Cayo Perico، أو Tuner DLC، أو Los Santos Summer Special، يجب عليك تعيينه في إعدادات سيرفر الألعاب الخاص بك. لتعيين إصدار DLC، افتح واجهة txAdmin الخاصة بك وتوجه إلى إعدادات FXServer.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

الآن ببساطة أضف إصدار اللعبة الذي تريده في قسم **الوسائط الإضافية** عبر أمر set، مع استبدال `BUILD_ID_CHOICE` بأحد القيم من الجدول:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## الخلاصة

بعد اختيارك، قم بإعادة تشغيل سيرفر FiveM الخاص بك. سيعمل السيرفر الآن بالإصدار المحدد من DLC. لقد قمت بتعيين إصدار لعبة لسيرفر ألعاب FiveM الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />