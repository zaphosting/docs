---
id: empyrion-becomeadmin
title: "Empyrion: كيف تصبح أدمن"
description: "تعلم كيف تعطي صلاحيات الأدمن للتحكم الكامل في سيرفرك وإدارة وظائف اللعبة بفعالية → تعلّم المزيد الآن"
sidebar_label: كيف تصبح أدمن
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل في سيرفرك. كأدمن، عندك خيار استخدام كل الخيارات والوظائف المتاحة في اللعبة مباشرةً. كل الخطوات اللي تحتاجها لتعيين صلاحيات الأدمن لسيرفرك راح نشرحها تحت.  
<InlineVoucher />

## كيف تحصل على Steam64ID

أول شيء، لازم تحصل على Steam64ID الخاص فيك.  
تقدر تستخدم الأداة التالية: [SteamID Lookup](https://steamid.io/lookup).  
الآي دي هذا راح تدخلّه لاحقًا في ملف الإعدادات.

هنا مثال لكيف تحصل على steamid عن طريق إدخال رابط ملفك الشخصي:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## إعداد ملف adminconfig

ملف "**adminconfig.yaml**" اللي لازم تعدله موجود في مجلد "**Saves**".  
لفتح هذا المجلد، لازم تتبع تعليمات [الوصول عبر FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

القيم الافتراضية المحددة هي:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

الآن لازم تكتب Steam64ID اللي حصلت عليه بعد "**Id:**".

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

عن طريق "**Permission**" يتم تحديد الرتبة اللي راح تعطيها للمستخدم.  
الرتب موزعة كالتالي:

Permission | الرتبة  
-----|-------  
3 | gamemaster  
6 | moderator  
9 | admin  


## الخلاصة

مبروك، أنت الآن ضبطت صلاحيات الأدمن بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لمساعدتك! 🙂

<InlineVoucher />