---
id: pathoftitans-becomeadmin
title: كيف تصبح أدمن
description: "اكتشف كيف تعطي وتدير صلاحيات الأدمن للتحكم الكامل في سيرفر ألعابك → تعلّم المزيد الآن"
sidebar_label: كيف تصبح أدمن
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل في سيرفرك. كأدمن، عندك خيار استخدام كل الخيارات والوظائف المتاحة في اللعبة مباشرةً. كل الخطوات اللي تحتاجها لتعيين صلاحيات الأدمن لسيرفرك راح نشرحها لك تحت.  
<InlineVoucher />

## التحضير

تكوين صلاحيات الأدمن يتم من خلال ملفات التكوين الخاصة بسيرفرك. عشان كذا، ادخل على لوحة المعلومات لسيرفر ألعابك وروح لـ **Configs** وافتح ملف التكوين Game.ini.

## التكوين

تحت القسم [/Script/PathOfTitans.IGameSession] لازم تدخل Alderon Games ID (AGID) للأدمن. الإدخال يكون بالشكل `Server-Admins=` متبوع بالـ AGID. لو حابب تضيف أكثر من أدمن، لازم تكتب كل واحد في سطر جديد. لو حاب تعطي صلاحيات أدمن لثلاث لاعبين، التكوين بيكون كالتالي:

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. سجل الأدمن
ServerAdmins=XXX-XXX-XXX # 2. سجل الأدمن
ServerAdmins=XXX-XXX-XXX # 3. سجل الأدمن
```

اضغط حفظ وبعدين أعد تشغيل السيرفر. صلاحيات الأدمن صارت مفعلة بنجاح. لما يكون عندك صلاحيات أدمن، تقدر تعين لاعبين آخرين كأدمن عن طريق أوامر الشات أو تسحب منهم الصلاحيات. هالوظائف متاحة لك طالما سيرفرك شغال. تقدر تلاقي معلومات أكثر عن الأوامر في [GitHub Wiki الرسمي](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).

## الخلاصة

مبروك، أنت الآن ضبطت صلاحيات الأدمن بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لمساعدتك! 🙂 

<InlineVoucher />