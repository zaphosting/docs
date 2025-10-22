---
id: vserver-linux-ftp-install
title: "VPS: تثبيت سيرفر FTP"
description: "اكتشف كيفية إعداد وإدارة سيرفر FTP آمن على لينكس باستخدام FileZilla Server لنقل الملفات بكفاءة → تعلّم المزيد الآن"
sidebar_label: تثبيت سيرفر FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

بروتوكول **FTP (بروتوكول نقل الملفات)** هو بروتوكول شبكي يُستخدم لنقل الملفات عبر شبكة TCP/IP. تم تطوير البروتوكول لتسهيل تبادل الملفات بين الأنظمة. مع **FileZilla Server** يمكنك إعداد سيرفر FTP على نظام تشغيل لينكس. FileZilla Server سهل التثبيت والتهيئة، ويقدم ميزات كثيرة مثل إمكانية إنشاء حسابات مستخدمين، إدارة صلاحيات الوصول، ونقل الملفات. في هذا الدليل، سنستعرض خطوات تثبيت وتكوين خدمة **FileZilla Server** على سيرفر لينكس.

<InlineVoucher />

## التثبيت

لإضافة مستخدم FTP، يجب أولاً تثبيت سيرفر FTP. للقيام بذلك، اتصل بالسيرفر مرة واحدة عبر SSH (مثل Putty).

لتثبيت سيرفر FTP الآن، أدخل الأمر التالي: **apt-get install proftpd**. يجب تأكيد الطلب بالضغط على **Y** ثم إدخال:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

الآن علينا تعديل الإعدادات. للقيام بذلك، أدخل الأمر التالي: **nano /etc/proftpd/proftpd.conf** واضغط إدخال. بعدها سيفتح ملف الإعدادات في محرر Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

يجب إضافة السطور التالية:

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

الآن يجب إعادة تشغيل سيرفر FTP لتطبيق التغييرات. يمكن فعل ذلك بالأمر: **service proftpd restart**

## إضافة مستخدمين

لإنشاء مستخدم FTP جديد، يجب أولاً إنشاء مجموعة FTP. نفعل ذلك بالأمر **addgroup ftpuser**. سيبدو الأمر هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

الآن يمكننا إضافة أول مستخدم FTP بالأوامر: **adduser benutzerftp -shell /bin/false -home /var/www** ثم **adduser benutzerftp ftpuser**.

سيُطلب منك تعيين كلمة مرور:

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

بعدها يجب تأكيد صحة البيانات:

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

الخطوة الأخيرة هي تعيين المستخدم الجديد للمجموعة عبر الأمر **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

الآن يمكننا الاتصال باستخدام المعلومات التي قمنا بتعيينها:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)



## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين سيرفر FTP بنجاح! إذا كان لديك أي أسئلة أو مشاكل إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />