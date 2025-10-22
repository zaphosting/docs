---
id: vserver-linux-ftp
title: "VPS: خدمة FTP لا تعمل - استكشاف الأخطاء وإصلاحها"
description: "تعرف على كيفية استكشاف مشاكل استعادة الوصول إلى FTP على VPS الخاص بك عندما لا يمكن الوصول إلى سيرفرات الألعاب أو Teamspeak → تعلّم المزيد الآن"
sidebar_label: خدمة FTP لا تعمل
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## ماذا تفعل إذا لم يكن بالإمكان الوصول إلى سيرفر الألعاب أو سيرفر Teamspeak عبر FTP؟

:::info
تنبيه: الخطوات التالية تعمل فقط على VPS الخاص بك إذا تم تثبيت واجهة الويب الخاصة بـ ZAP!
:::

إذا لم يكن بالإمكان الوصول إلى السيرفر الذي أنشأته عبر FTP، فغالبًا ما تكون خدمة FTP (ProFTPD) غير مفعلة. وفي حالات نادرة قد يكون السبب تكوين خاطئ أو منفذ مشغول، أي أن منفذ FTP 21 مستخدم / محجوز من قبل برنامج آخر.

## تحقق من مشكلة FTP بشكل أدق:

### تحقق من التوافرية
يمكنك فعل ذلك بسهولة باستخدام متصفح FTP في واجهة الويب. اضغط على "FTP browser" في القائمة تحت أدوات السيرفر المعني

![](https://screensaver01.zap-hosting.com/index.php/s/GiqyC6G5cLsbSqp/preview)

ثم اضغط مرة على زر "Direct Connection".

![](https://screensaver01.zap-hosting.com/index.php/s/ZSbrF5raYzdMgzZ/preview)

الآن من المحتمل أن ترى الصورة التالية:

![](https://screensaver01.zap-hosting.com/index.php/s/GtcCWfqadKGJoY7/preview)

بما أنه واضح الآن أن الاتصال عبر WebFTP أو أداة FTP غير ممكن، عليك إلقاء نظرة أعمق على خدمة FTP في VPS.

### تحقق من حالة ProFTPD

للقيام بذلك، اتصل بسيرفرك عبر SSH / الكونسول ثم أدخل الأمر "service proftpd status". سيتم قراءة الحالة وعرضها كما يلي:

![](https://screensaver01.zap-hosting.com/index.php/s/TWqySPM3D5RmgYL/preview)

هنا يمكنك رؤية أن الحالة تظهر "dead"، يعني الخدمة غير متصلة وبالتالي غير متاحة.

### أعد تشغيل خدمة FTP
يمكن إعادة تشغيل خدمة FTP بالأمر التالي:

```
service proftpd start
```

إذا لم يكن هناك رد بعد تنفيذ الأمر، فهذا يعني عادة أن الخدمة أصبحت متصلة / متاحة مرة أخرى.

يمكنك التحقق من ذلك مجددًا بالأمر "service proftpd status". يجب أن تظهر كما يلي:

![](https://screensaver01.zap-hosting.com/index.php/s/iYxKMLJ2QfgzBKD/preview)

بما أن الحالة أصبحت "active" مرة أخرى ولم تعد "dead"، يمكنك محاولة الاتصال عبر أداة FTP و WebFTP مجددًا.

### تحقق من الاتصال مرة أخرى
يجب أن تتمكن الآن من إنشاء اتصال وعرض بياناتك.

### تم حل المشكلة
✅ خدمة FTP (ProFTPD) الآن مفعلة / متصلة ولا يوجد ما يمنع تبادل البيانات!

<InlineVoucher />