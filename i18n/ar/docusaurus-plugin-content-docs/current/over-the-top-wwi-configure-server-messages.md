---
title: "Over the Top WWI: إعداد رسائل السيرفر"
description: "تعلم كيف تضبط رسائل السيرفر التلقائية على سيرفر Over the Top WWI الخاص بك → تعلّم المزيد الآن"
sidebar_label: رسائل السيرفر
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

رسائل السيرفر التلقائية طريقة مفيدة للتواصل مع اللاعبين أثناء اللعب. تقدر تستخدمها لمشاركة القوانين، الترويج لسيرفر الديسكورد الخاص فيك، أو تقديم نصائح مفيدة.

على سيرفر **Over the Top WWI**، تقدر تعرض الرسائل بشكل دوري، عشان كل اللاعبين يستلموا المعلومات المهمة بدون تدخل يدوي.

<InlineVoucher />

## الإعداد

رسائل السيرفر تتضبط داخل ملف إعدادات السيرفر. تقدر توصل له وتعدله من خلال **لوحة التحكم لسيرفر الألعاب** تحت قسم **Configs**. دور وافتح ملف الإعداد `ServerConfiguration.ini`. داخل الملف، دور على المعاملات التالية:

```
ShowServerTimedMessages = 1
AddServerMessage = Join the official Discord! discord.gg/example
AddServerMessage = Please report any bugs on our Discord.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` تفعّل أو تعطل الرسائل التلقائية. حطها على `1` للتفعيل أو `0` للإيقاف.
- `AddServerMessage` تحدد الرسائل اللي بتظهر. تقدر تضيف أكثر من سطر عشان تتناوب الرسائل أثناء اللعب.
- `ServerMessagesTimer` تحدد الفاصل الزمني بين الرسائل بالثواني. مثلاً، `120` تعني رسالة كل دقيقتين.

تقدر تخصص وتضيف رسائل أكثر بحرية بإضافة أسطر إضافية:

```
AddServerMessage = Welcome to the server!
AddServerMessage = Follow the rules and respect other players.
AddServerMessage = Join our Discord for updates.
```

بعد ما تعدل ملف `ServerConfiguration.ini`، احفظ التغييرات وأعد تشغيل السيرفر. الرسائل بتظهر تلقائياً داخل اللعبة حسب الفاصل اللي ضبطته.

## الخاتمة

مبروك! ضبطت رسائل السيرفر التلقائية على سيرفر **Over the Top WWI** الخاص فيك بنجاح. هالشيء يساعدك تخلي اللاعبين على اطلاع ويحسّن التواصل داخل السيرفر.

لو عندك أي أسئلة أو تحتاج مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لخدمتك! 🙂

<InlineVoucher />