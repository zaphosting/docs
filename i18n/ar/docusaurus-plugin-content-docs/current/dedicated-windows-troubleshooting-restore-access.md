---
id: dedicated-windows-troubleshooting-restore-access
title: "سيرفر مخصص: استعادة الوصول"
description: "اكتشف كيف تستعيد الوصول إلى سيرفر Windows المخصص بعد قفل كلمة المرور وتقليل وقت التوقف → تعلّم المزيد الآن"
sidebar_label: استعادة الوصول
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

ممكن يصير بسرعة... تحاول تسجل دخول لسيرفر Windows، لكن كلمة المرور ما عاد تُقبل أو نسيتها ببساطة. فجأة، يتم قفلك وما تقدر توصل للبيانات والتطبيقات المهمة. الوضع هذا محبط طبعًا، لكنه مو نهاية العالم. باتباع الخطوات اللي تحت، تقدر تستعيد الوصول لسيرفر Windows المخصص وتكمل شغلك بأقل تعطيل ممكن.

## التحضير
إعادة تعيين الوصول من حساب المدير تتم باستخدام ملف ISO لنظام Windows. بناءً عليه، تستخدم نفس ملف الـ ISO اللي تم استخدامه أصلاً لتثبيت نظام تشغيل Windows Server.

الخطوة هذي ممكن تنفذها إما عبر [**التثبيت الأول**](dedicated-setup.md) أو عبر **[ISO](dedicated-iso.md)**. اختار أو حدد ملف الـ ISO اللي تم استخدامه أصلاً، حسب الطريقة اللي تستخدمها.

ركّب ملف الـ ISO وأعد تشغيل النظام بعدها. واجهة تثبيت Windows لازم تفتح مرة ثانية عند تشغيل النظام. النتيجة لازم تكون كالتالي:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)

## استعادة الوصول

الحين جاء وقت إعادة تعيين وصول حساب المدير. علشان تسوي هذا، اتبع الخطوات الأولى من التثبيت مرة ثانية. لكنك تحتاج توصل فقط لبداية التثبيت وبعدين توجه لـ **إصلاح جهاز الكمبيوتر الخاص بك**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)

هذا يفتح الخيارات المتقدمة. اضغط على خيار **استكشاف الأخطاء وإصلاحها** وبعدين على **موجه الأوامر**. هذا بيفتح نافذة موجه الأوامر (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

الأوامر اللي تحت لازم تنفذها وحدة وحدة في موجه الأوامر:

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

تخطيط لوحة المفاتيح في وحدة تحكم iLO HTML ممكن يختلف عن تخطيطك، فبعض الرموز ممكن تكون على أزرار مختلفة. خذ هذا بالحسبان عشان تنفذ الأوامر بشكل صحيح.

:::

بعد إعادة تشغيل السيرفر، في شاشة تسجيل الدخول الرئيسية، اضغط على تركيبة المفاتيح **Win+U**. في نافذة موجه الأوامر، اكتب التالي:

```
net user Administrator YourNewPassword
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

كلمة المرور تغيرت الحين. لكن لازم ترجع تغييراتك على ملفات **Utilman**. علشان تسوي هذا، بس أعد تشغيل السيرفر وكرر الخطوات. في موجه الأوامر، نفذ الأوامر التالية مرة ثانية:

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```

## الخلاصة

بعد ما تكمل العملية، لازم تكون ضبطت كلمة مرور جديدة لحساب المدير بنجاح. الحين تقدر تستخدمها لتسجيل الدخول مرة ثانية عبر اتصال سطح المكتب البعيد.