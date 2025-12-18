---
id: dedicated-linux-ftp
title: "سيرفر مخصص: خدمة FTP لا تعمل - استكشاف الأخطاء وإصلاحها"
description: "تعرف على كيفية استكشاف مشاكل الوصول إلى FTP على VPS الخاص بك لاستعادة اتصال السيرفر وإدارة سيرفر الألعاب أو Teamspeak بفعالية → تعرف أكثر no"
sidebar_label: خدمة FTP لا تعمل
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ماذا تفعل إذا لم يكن بالإمكان الوصول إلى سيرفر الألعاب أو سيرفر Teamspeak عبر FTP؟

:::info
تنبيه: الخطوات التالية تعمل فقط على VPS الخاص بك إذا تم تثبيت واجهة الويب الخاصة بـ ZAP!
:::

إذا لم تتمكن من الوصول إلى السيرفر الذي أنشأته عبر FTP، فعادةً ما تكون خدمة FTP (ProFTPD) غير مفعلة. وفي حالات نادرة قد يكون السبب تكوين خاطئ أو منفذ مشغول، أي أن منفذ FTP 21 مستخدم / محجوز من قبل برنامج آخر.



## تحقق من مشكلة FTP بشكل أدق:

### تحقق من التوافرية
يمكنك فعل ذلك بسهولة باستخدام متصفح FTP في واجهة الويب. اضغط على "FTP browser" في القائمة تحت أدوات السيرفر المعني

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

ثم اضغط على زر "Direct Connection" مرة واحدة.

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

الآن من المحتمل أن ترى الصورة التالية:

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

بما أنه واضح الآن أن الاتصال عبر WebFTP أو أداة FTP غير ممكن، عليك إلقاء نظرة أعمق على خدمة FTP في VPS.

### تحقق من حالة ProFTPD

للقيام بذلك، اتصل بسيرفرك عبر SSH / الكونسول ثم أدخل الأمر "service proftpd status". سيتم قراءة الحالة وعرضها كما يلي:

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)


هنا يمكنك رؤية أن الحالة تظهر "dead"، أي أن الخدمة غير متصلة وبالتالي غير متاحة.


### إعادة تشغيل خدمة FTP
يمكن إعادة تشغيل خدمة FTP بالأمر التالي:

```
service proftpd start
```

إذا لم يكن هناك رد بعد تنفيذ الأمر، فهذا يعني عادةً أن الخدمة أصبحت متصلة / متاحة مرة أخرى.

يمكنك التحقق من ذلك مجددًا باستخدام الأمر "service proftpd status". يجب أن تظهر كما يلي:

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

بما أن الحالة أصبحت "active" مرة أخرى ولم تعد "dead"، يمكنك محاولة الاتصال عبر أداة FTP و WebFTP مجددًا.

### تحقق من الاتصال مرة أخرى
يجب أن تتمكن الآن من إنشاء اتصال وعرض بياناتك.

### تم حل المشكلة
✅ خدمة FTP (ProFTPD) الآن مفعلة / متصلة ولا يوجد ما يمنع تبادل البيانات!