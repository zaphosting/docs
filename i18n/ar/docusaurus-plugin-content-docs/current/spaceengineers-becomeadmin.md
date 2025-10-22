---
id: spaceengineers-becomeadmin
title: "Space Engineers: كيف تصبح أدمن سيرفر"
description: "اكتشف كيف تعطي صلاحيات الأدمن لتحكم كامل بالسيرفر وإدارة سلسة داخل اللعبة → تعلّم المزيد الآن"
sidebar_label: كن أدمن
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل بسيرفرك. كأدمن، تقدر تستخدم كل الخيارات والوظائف المتاحة في اللعبة مباشرةً داخل اللعبة. كل الخطوات اللي تحتاجها عشان تعطي صلاحيات الأدمن لسيرفرك موضحة تحت.  
<InlineVoucher />

عشان تقدر تدير سيرفر ألعابك بشكل جيد داخل اللعبة، مهم يكون عندك رتبة الأدمن.

### SteamID64 عبر الموقع

أول شيء، افتح البروفايل في Steam وبعدين اضغط كليك يمين في أي مكان فيه.  
بعدها تقدر تنسخ رابط Steam الخاص بالبروفايل.

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

بعد ما تسوي كذا، تدخل الرابط في المواقع التالية:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### تسجيل SteamID في ملف الإعدادات

بعدين افتح واجهة التحكم وسيرفرك.  
روح لتبويب **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

بعدين افتح ملف **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

بعدها اضغط **STR + F** وابحث عن *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

الآن اكتب هذا:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
المفروض يكون الشكل النهائي كذا:

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

الحين بس **احفظ** ملف الإعدادات وهذا كل شيء

## الخلاصة

مبروك، أنت ضبطت صلاحيات الأدمن بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لمساعدتك! 🙂

<InlineVoucher />