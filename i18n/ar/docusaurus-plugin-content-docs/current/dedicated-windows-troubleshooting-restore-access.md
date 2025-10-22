---
id: dedicated-windows-troubleshooting-restore-access
title: "سيرفر مخصص: استعادة الوصول"
description: "اكتشف كيف تستعيد الوصول إلى سيرفر Windows المخصص بعد قفل كلمة المرور وقلل من وقت التوقف → تعلّم المزيد الآن"
sidebar_label: استعادة الوصول
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

ممكن يصير بسرعة... تحاول تسجل دخول لسيرفر Windows الخاص فيك، لكن كلمة المرور ما عاد تُقبل أو نسيتها ببساطة. فجأة، يتم قفل الوصول وما تقدر توصل للبيانات والتطبيقات المهمة. الوضع هذا محبط طبعًا، لكنه مو نهاية العالم. باتباع الخطوات اللي تحت، تقدر تستعيد الوصول لسيرفر Windows المخصص وتكمل شغلك بأقل تعطيل ممكن.

<InlineVoucher />

## التحضير
إعادة ضبط الوصول من حساب المسؤول تتم باستخدام ملف ISO لنظام Windows. يعني، نفس ملف الـ ISO اللي استخدمته أصلاً لتثبيت نظام تشغيل Windows Server.

تقدر تنفذ هالخطوة إما عبر [**التثبيت الأول**](dedicated-setup.md) أو عبر **[ISO](dedicated-iso.md)**. اختار أو حدد ملف الـ ISO اللي استخدمته أصلاً، حسب الطريقة اللي تستخدمها.

ركّب ملف الـ ISO وأعد تشغيل النظام بعدها. المفروض تفتح واجهة تثبيت Windows مرة ثانية عند تشغيل النظام. النتيجة المفروض تكون كالتالي:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## استعادة الوصول

الحين جاء وقت إعادة ضبط وصول حساب المسؤول. اتبع خطوات التثبيت الأولى مرة ثانية، لكن توقف عند بداية التثبيت وروح لـ **إصلاح جهاز الكمبيوتر الخاص بك**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



راح تفتح الخيارات المتقدمة. اضغط على خيار **استكشاف الأخطاء وإصلاحها** وبعدين على **موجه الأوامر**. هذا راح يفتح نافذة موجه الأوامر (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

نفذ الأوامر التالية وحدة وحدة في موجه الأوامر:

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

تخطيط لوحة المفاتيح في وحدة تحكم iLO HTML ممكن يختلف عن تخطيطك، فبعض الرموز ممكن تكون على أزرار مختلفة. خذ هذا بعين الاعتبار عشان تنفذ الأوامر صح.

:::

بعد إعادة تشغيل السيرفر، في شاشة تسجيل الدخول الرئيسية، اضغط على تركيبة المفاتيح **Win+U**. في نافذة موجه الأوامر، اكتب التالي:

```
net user Administrator YourNewPassword
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

كلمة المرور تغيرت الحين. لكن لازم ترجع تغييراتك على ملفات **Utilman**. عشان تسوي هذا، بس أعد تشغيل السيرفر وكرر الخطوات. في موجه الأوامر، نفذ الأوامر التالية مرة ثانية:

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## الخلاصة

بعد ما تكمل العملية، المفروض تكون ضبطت كلمة مرور جديدة لحساب المسؤول بنجاح. الحين تقدر تستخدمها عشان تسجل دخول مرة ثانية عبر اتصال سطح المكتب البعيد.

<InlineVoucher />