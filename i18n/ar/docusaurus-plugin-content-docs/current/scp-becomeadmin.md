---
id: scp-becomeadmin
title: "SCP Secret Laboratory: كيف تصبح أدمن على سيرفرك الخاص"
description: "اكتشف كيفية تعيين صلاحيات الأدمن للتحكم الكامل في سيرفرك وإدارة الأدوار بفعالية في سيرفر الألعاب الخاص بك → تعلّم المزيد الآن"
sidebar_label: كن أدمن
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## مقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل في سيرفرك. كأدمن، يمكنك استخدام كل الخيارات والوظائف المتاحة في اللعبة مباشرةً. كل الخطوات التي تحتاجها لتعيين صلاحيات الأدمن لسيرفرك موضحة أدناه.  
<InlineVoucher />

:::info
منذ تحديثات SCP الأخيرة، تسجيل الدخول بكلمة المرور لم يعد يعمل. استخدم الدليل التالي لإضافة أدوارك مباشرةً عبر steamid. 
:::


## إعداد ملف Remote Admin Config

### التحضير

أولاً، تحتاج إلى معرفة Steam64ID الخاص بك.  
يمكنك استخدام الأداة التالية: [SteamID Lookup](https://steamid.io/lookup).  
سيتم إدخال الـ ID لاحقًا في ملف الإعدادات.

هنا مثال لكيفية الحصول على steamid عن طريق إدخال رابط ملفك الشخصي:

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## إضافة الأدمنز

الآن يجب فتح ملف الإعدادات وتعديله.  
يوجد هذا الملف في "**Configs**" تحت "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

يمكنك فتح ملف "**config_remoteadmin.txt**" حيث يتم تعديل الأسطر اللازمة.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

يتم هنا إنشاء الأدوار وتعيينها.  
في هذا الملف، يجب استبدال "**SomeSteamId64**" الموجود أمام "**@steam: owner**" بـ SteamID64 الخاص بك الذي حصلت عليه من "**steamid lookup**"

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

يمكنك تكرار هذا لكل مستخدم إضافي تريد منحه صلاحيات.  
في مثالنا، قمنا بتعيين صلاحيات لثلاثة مستخدمين، واحد منهم يحصل على "**owner**" والاثنان الآخران يحصلان على "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## إضافة أدوار إضافية لتجاوز كلمة المرور

إذا كان لديك أدوار متعددة تريدها لتجاوز كلمة مرور الأدمن عن بُعد، يمكنك ببساطة تعديل السطر التالي في الملف:  
"**config_remoteadmin.txt**"

ابحث عن القسم التالي بالضبط:

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

لإضافة أدوار أكثر، فقط اكتب الأدوار المطلوبة مفصولة بفواصل.  
مثلاً، لإضافة admin و moderator لتجاوز كلمة المرور:

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
لفتح وحدة تحكم الأدمن عن بُعد داخل اللعبة، بعد تسجيل دخولك للسيرفر، اضغط على زر "**M**". إذا كان السيرفر يعمل، ستحتاج لإعادة تشغيله لتطبيق التغييرات. وإذا كان السيرفر متوقف، فقط شغّله ثم تحقق من وحدة تحكم الأدمن داخل اللعبة.
:::


## الخاتمة

مبروك، لقد قمت بإعداد صلاحيات الأدمن بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />