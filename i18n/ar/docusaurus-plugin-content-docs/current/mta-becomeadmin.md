---
id: mta-becomeadmin
title: "Multi Theft Auto: كيف تصبح أدمن على سيرفرات MTA"
description: "اكتشف كيف تعطي صلاحيات الأدمن للتحكم الكامل بالسيرفر وإدارة اللعبة بكفاءة → تعلّم المزيد الآن"
sidebar_label: كيف تصبح أدمن
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل في سيرفرك. كأدمن، تقدر تستخدم كل الخيارات والوظائف المتاحة في اللعبة مباشرةً داخل اللعبة. كل الخطوات اللي تحتاجها لتعيين صلاحيات الأدمن لسيرفرك راح نشرحها لك تحت.  
<InlineVoucher />

### التحضير

أول شيء لازم تنشئ حساب مستخدم اللي راح تعطيه صلاحيات الأدمن لاحقًا. عشان تسوي هذا، نفذ الأمر التالي في الـ Live Console:

```
addaccount [options] <PASSWORD>
```

تقدر تلاقي الـ Live Console في لوحة المعلومات الخاصة بسيرفر الألعاب أثناء تشغيل السيرفر. شكلها بيكون كالتالي:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### الإعداد

بعد ما تنشئ الحساب، لازم تضيف الحساب لمجموعة الأدمن في ملف الإعداد **acl.xml**. عشان تسوي هذا، تتصل بالسيرفر عبر FTP وتفتح الملف. الملف موجود في المسار **gXXXX/gtamta/mods/deathmatch/**. إذا ما تعرف بعد إيش هو عميل FTP وكيف تستخدمه، شوف هذا الدليل:  [وصول ملفات FTP](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

هنا لازم تضيف عنصر مستخدم عشان تعين المستخدم لمجموعة الأدمن:

```
<object name="user.BENUTZERNAME"></object>
```

بدل كلمة BENUTZERNAME اكتب اسم المستخدم الخاص فيك. النتيجة المفروض تطلع كالتالي:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### تسجيل الدخول كأدمن

بعد ما تخلص إعداد ملف **acl.xml**، شغل لعبتك/سيرفرك واتصل بالسيرفر. بعدها تقدر تسجل دخول باستخدام الأمر التالي:

```
login USERNAME PASSWORD
```

## الخلاصة

مبروك، أنت الآن ضبطت صلاحيات الأدمن بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لمساعدتك! 🙂


<InlineVoucher />