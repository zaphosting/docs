---
id: fivem-qbcore-admin
title: "FiveM: كيف تصبح أدمن باستخدام QBCore"
description: "اكتشف كيف تعطي صلاحيات الأدمن للتحكم الكامل في سيرفرك وإدارة أفضل داخل اللعبة → تعلّم المزيد الآن"
sidebar_label: كيف تصبح أدمن
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل في سيرفرك. كأدمن، يمكنك استخدام كل الخيارات والوظائف المتاحة في اللعبة مباشرةً. كل الخطوات اللي تحتاجها لتعيين صلاحيات الأدمن لسيرفرك راح نشرحها لك تحت.

<InlineVoucher />

## الإعدادات

تعيين صلاحيات الأدمن يتم عن طريق ملف الإعدادات ``server.cfg``. عشان كذا، سجل دخولك على واجهة txAdmin وافتح محرر CFG. بعدين انتقل لنهاية ملف الإعدادات حتى توصل لقسم `Permissions`.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore يدعم عدة معرفات للاعبين، منها FiveM IDs (`identifier.fivem:`)، تراخيص Rockstar (`identifier.license:`)، ومعرفات Discord (`identifier.discord:`). تقدر تحصل على هالمعرفات مباشرة من واجهة txAdmin. بعدها تقدر تختار تعطيهم حالة GOD أو Admin أو Mod.

بعد ما تحصل على المعرفات وتقرر الحالة اللي تبي تعطيها، تقدر تعطي صلاحيات لكل لاعب بإضافتهم في ملف `server.cfg`. عشان تسوي كذا، أضف واحد من الخيارات الثلاثة كإدخال جديد تحت قسم الصلاحيات:

```
add_principal identifier.license:xxxxxx qbcore.god   # اسم اللاعب
add_principal identifier.license:xxxxxx qbcore.admin # اسم اللاعب
add_principal identifier.license:xxxxxx qbcore.mod   # اسم اللاعب
```

النتيجة النهائية ممكن تكون مثل هذي، على سبيل المثال:

```
## Permissions ##
add_ace group.admin command allow # السماح بكل الأوامر
# ملاحظة من Deployer: هذا الأدمن ما عنده معرفات تضاف تلقائياً.
# add_principal identifier.discord:111111111111111111 group.admin #مثال

add_principal identifier.fivem:16219250 qbcore.admin # اسم اللاعب
```

## الخلاصة

لو اتبعت كل الخطوات بنجاح، أنت الآن أدمن على سيرفرك الخاص. لأي أسئلة أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لخدمتك! 🙂

<InlineVoucher />