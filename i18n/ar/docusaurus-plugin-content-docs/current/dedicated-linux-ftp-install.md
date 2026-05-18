---
id: dedicated-linux-ftp-install
title: "إعداد ProFTPD على سيرفر Linux - استضافة خدمة FTP آمنة"
description: "اكتشف كيفية إعداد وإدارة سيرفر FTP آمن على Linux باستخدام FileZilla Server لتسهيل نقل الملفات والوصول للمستخدمين → تعلّم المزيد الآن"
sidebar_label: تثبيت سيرفر FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

بروتوكول **FTP (بروتوكول نقل الملفات)** هو بروتوكول شبكي يُستخدم لنقل الملفات عبر شبكة TCP/IP. تم تطوير البروتوكول لتسهيل تبادل الملفات بين الأنظمة. مع **FileZilla Server** يمكنك إعداد سيرفر FTP على نظام تشغيل Linux. FileZilla Server سهل التثبيت والإعداد، ويقدم ميزات كثيرة مثل إمكانية إنشاء حسابات مستخدمين، إدارة صلاحيات الوصول ونقل الملفات. في هذا الدليل، سنستعرض خطوات تثبيت وتكوين خدمة **FileZilla Server** على سيرفر Linux.

## كيف أثبت سيرفر FTP لإضافة مستخدم؟

لإضافة مستخدم FTP، يجب أولاً تثبيت سيرفر FTP. للقيام بذلك، اتصل بالسيرفر مرة واحدة عبر SSH (باستخدام Putty).

لتثبيت سيرفر FTP الآن، أدخل الأمر التالي **apt-get install proftpd**. يجب تأكيد الطلب بالضغط على **Y** ثم إدخال:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

الآن علينا تعديل الإعدادات. للقيام بذلك، أدخل الأمر التالي **nano /etc/proftpd/proftpd.conf** واضغط Enter. بعدها سيتم فتح ملف الإعدادات في محرر Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

يجب إضافة الإدخالات التالية:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

الآن يجب إعادة تشغيل سيرفر FTP لتطبيق التغييرات. يمكن فعل ذلك بالأمر التالي: **service proftpd restart**

## كيف أضيف مستخدم FTP؟

لإنشاء مستخدم FTP جديد، يجب أولاً إنشاء مجموعة FTP. نفعل ذلك بالأمر **addgroup ftpuser**. ستظهر النتيجة كالتالي:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

الآن يمكننا إضافة أول مستخدم FTP بالأوامر: **adduser benutzerftp -shell /bin/false -home /var/www** ثم **adduser benutzerftp ftpuser**.

سيُطلب منا تعيين كلمة مرور:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

بعدها يجب تأكيد صحة الإدخالات:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

الخطوة الأخيرة هي تعيين المستخدم الجديد للمجموعة عبر الأمر **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

الآن يمكننا الاتصال باستخدام المعلومات التي قمنا بتعيينها:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)