---
id: fivem-changeloadingscreen
title: "FiveM: تثبيت شاشة تحميل مخصصة"
description: "اكتشف كيف تخصص شاشة التحميل في FiveM لتجربة فريدة للاعبين وتحسين مظهر سيرفرك → تعلّم المزيد الآن"
sidebar_label: تثبيت شاشة تحميل مخصصة
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## المقدمة

حابب تستخدم شاشة تحميل مخصصة خاصة فيك بدل شاشة التحميل الافتراضية في FiveM؟ تحت راح نشرح لك كيف تسويها والخطوات اللي لازم تتبعها!

<InlineVoucher />



## التحضير

عشان تثبت شاشة تحميل خاصة فيك، لازم أول شي تلاقي مورد مناسب. تقدر تلاقي مجموعة كبيرة من الموارد على الموقع الرسمي [Cfx.re](https://forum.cfx.re/c/releases/7). بعدين، نزّل المورد وفك الضغط عنه على جهازك.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## التثبيت

تثبيت شاشة التحميل يتم عن طريق FTP. عشان كذا، اتصل بسيرفر الألعاب عبر FTP. إذا ما تعرف تستخدم FTP بعد، شوف دليلنا عن [وصول FTP](gameserver-ftpaccess.md).

بعد ما تتصل عبر FTP، روح لمجلد الموارد. حسب الإطار اللي مركبه، راح تلاقي مجلد الموارد تحت المسار التالي: `/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

ارفع المجلد اللي نزلته وفكيت ضغطه على جهازك لهذا الموقع.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



الحين بعد ما رفعت مورد شاشة التحميل بنجاح، لازم تضيفه لملف إعدادات السيرفر `server.cfg`. عشان تسوي هذا، سجل دخولك لواجهة txAdmin وافتح محرر CFG.

بعدين أضف المورد باستخدام الأمر `start resourcename`. في هذا المثال، بيكون `start loadingscreen`. احفظ التغييرات وأعد تشغيل السيرفر.

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## الخاتمة

إذا اتبعت كل الخطوات، المفروض تشوف شاشة التحميل الجديدة بعد إعادة تشغيل السيرفر. لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لمساعدتك! 🙂

<InlineVoucher />