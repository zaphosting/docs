---
id: fivem-esx-disablehud
title: "FiveM: تعطيل/تمكين HUD"
description: "تعرف على كيفية تحديث إعدادات سيرفر ESX الخاص بك لتحسين إدارة HUD وأداء السيرفر → تعلّم المزيد الآن"
sidebar_label: تعطيل HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning دليل مؤرشف
تم أرشفة هذا المستند. يتم أرشفة المستندات إذا لم تعد ذات صلة، أو غير صحيحة، أو لم تعد محدثة. تم أرشفتها للأسباب التالية:

**السبب**: طريقة التنفيذ خاصة بإصدار ESX قديم. لا يمكن استخدام هذا الأسلوب مع إصدار ESX الحالي، حيث تغيرت البنية.
::::



<InlineVoucher />

## 📑 ابحث وعدّل الإعدادات

بعد ما نخلص من هالخطوة نفتح صفحة الإعدادات ونبحث عن es_extended.
بس اضغط CTRL + F وابحث عن es_extended.
بعدين بتلاقيه بسرعة.
رح نشتغل على هذي الإعدادات.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

هلا خلينا نشوف: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

بعدين نغيرها لـ false ونحفظ الملف.

بعدين نروح لـ Server.cfg.
تقدر تلاقيه كمان في صفحة الإعدادات.
هون نبحث مرة ثانية باستخدام CTRL + F عن es_
بعدين نبحث عن es_ui ونحذف هالسطر بالكامل.
هلا نحفظ التغييرات مرة ثانية.

بعد ما تخلص، كل اللي عليك تعيد تشغيل السيرفر، وهيك خلصنا.

<InlineVoucher />