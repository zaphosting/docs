---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: ضبط الضرر الصديق"
description: "تعرف على كيفية تفعيل أو تعديل إعدادات الضرر الصديق على سيرفر Over the Top WWI الخاص بك → تعلّم المزيد الآن"
sidebar_label: الضرر الصديق
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

الضرر الصديق يحدد إذا كان اللاعبين يقدروا يضروا زملائهم في الفريق أثناء اللعب. تعديل هالإعدادات يخليك تتحكم بمدى واقعية أو تساهل القتال على **سيرفر Over the Top WWI** الخاص فيك.

تفعيل الضرر الصديق يزيد من الواقعية والتكتيك في اللعب، بينما تعطيله أو تقليله يخلق تجربة أكثر استرخاء وسهولة.

<InlineVoucher />

## الإعدادات

إعدادات الضرر الصديق تتضبط داخل ملف إعدادات السيرفر. تقدر توصل لهالملف وتعدله من خلال **لوحة التحكم لسيرفر الألعاب** تحت قسم **الإعدادات**. دور وافتح ملف `ServerConfiguration.ini`. داخل الملف، دور على المعاملات التالية:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` يشغل أو يوقف الضرر القريب ضد الزملاء.
- `EnableFriendlyRangeFire` يشغل أو يوقف الضرر البعيد ضد الزملاء.
- `FriendlyFireAtRoundStart` يحدد تأخير بالثواني قبل تفعيل الضرر الصديق.
- `FriendlyFirePercent` يتحكم بنسبة الضرر القريب المطبق على الزملاء.
- `RangeFriendlyFirePercent` يتحكم بنسبة الضرر البعيد المطبق على الزملاء.
- `ExplosionFf` يشغل أو يوقف الضرر الناتج عن الانفجارات على الزملاء.
- `FriendlyFireReflectPercent` يعكس نسبة من الضرر للمهاجم بدل الزميل.

بعد ما تعدل ملف `ServerConfiguration.ini`، احفظ التغييرات وأعد تشغيل السيرفر. الإعدادات الجديدة للضرر الصديق بتطبق فوراً.

## الخاتمة

مبروك! ضبطت إعدادات الضرر الصديق على **سيرفر Over the Top WWI** الخاص فيك بنجاح. تعديل هالقيم يخليك توازن بين الواقعية وتجربة اللعب لمجتمعك.

لو عندك أي أسئلة أو تحتاج مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لخدمتك! 🙂

<InlineVoucher />