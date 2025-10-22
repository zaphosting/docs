---
id: dedicated-linux-jitsi
title: "سيرفر مخصص: تثبيت Jitsi Meet"
description: "اكتشف كيفية إعداد وتشغيل سيرفر Jitsi Meet الخاص بك لعقد مؤتمرات فيديو آمنة وسهلة → تعلّم المزيد الآن"
sidebar_label: تثبيت Jitsi Meet
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Jitsi Meet هو برنامج مؤتمرات فيديو مفتوح المصدر يمكنك من خلاله إعداد مؤتمرات الفيديو الخاصة بك على سيرفرك. من أكبر مميزات Jitsi Meet سهولة الاستخدام: كل ما تحتاجه هو متصفح (وعند استخدام الهواتف المحمولة تطبيق Jitsi) ولا تحتاج لتسجيل الدخول إلى خدمات خارجية. كل مؤتمر فيديو يحصل على رابط URL خاص به للانضمام إلى المؤتمر. Jitsi Meet مثالي لعقد مؤتمرات الفيديو حتى مع الأشخاص غير المتمرسين.
تنبيه: بدون أي إعدادات إضافية، كل من يصل إلى سيرفر Jitsi Meet يمكنه بدء مؤتمرات الفيديو الخاصة به على السيرفر.

<InlineVoucher />

## تثبيت Jitsi Meet على سيرفر Debian

في التالي نشرح كيفية تثبيت سيرفر Jitsi Meet على سيرفر Debian. بشكل عام يعمل Jitsi Meet على سيرفرات Linux أخرى، مثل Ubuntu، والتثبيت مشابه جدًا.

### التحضيرات

لكي تستخدم Jitsi Meet بشكل صحيح، من الأفضل استخدام نطاق خاص بك للوصول إلى سيرفر Jitsi. من المنطقي إنشاء نطاق فرعي خاص بسيرفر Jitsi Meet. كمثال نستخدم النطاق meet.zap-testdomain.de.
لنطاقات ZAP-Hosting، يجب عليك إنشاء سجل جديد في إدارة DNS. أدخل اسم النطاق الفرعي في حقل "الاسم" وعنوان IP الخاص بسيرفرك في حقل "القيمة". في مثالنا سندخل "meet" في حقل الاسم وعنوان IP الخاص بسيرفر اختبار ZAP الذي سنثبت عليه Jitsi Meet في حقل القيمة: 185.239.239.49 (أدخل عنوان IP الخاص بسيرفرك، وليس هذا المثال)

يمكن الوصول إلى سيرفر Jitsi Meet عبر عنوان IP. لكن النطاق مطلوب لشهادة SSL. بدون نطاق سيظهر تحذير أمني في المتصفح.

إذا تم إعداد النطاق الفرعي (قد يستغرق تفعيل التغييرات حتى 24 ساعة)، يمكنك تجهيز السيرفر للتثبيت.
اتصل بسيرفرك عبر Putty أو WinSCP.
قبل المتابعة، تأكد من تحديث السيرفر. إذا لزم الأمر، يجب تشغيل كل أمر بصلاحيات المستخدم المتميز. أضف "sudo" قبل الأمر (مثلاً "sudo apt-get update")

```
$	apt-get update
```
```
$	apt-get upgrade
```

إذا لم يكن هناك جدار ناري مثبت على السيرفر، يمكنك تثبيت جدار ناري مثل UFW:
```
$	apt install ufw
```

قم بإعداد الجدار الناري كالتالي:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

فعّل الجدار الناري:
```
$	ufw enable
```

تحقق من الحالة:
```
$	ufw status
```

### تثبيت Jitsi Meet

لتثبيت Jitsi Meet، أول شيء تحتاجه هو حزمة gnupg:
```
$	apt install gnupg
```

بعد تثبيت الحزمة، يتم تحميل مفتاح Jitsi-GPG وإضافته:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

لتثبيت Jitsi Meet يجب إضافة مستودع Jitsi:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

أضف السطر التالي في المحرر. بعد ذلك احفظ التغيير وأغلق المحرر:
```
$	deb https://download.jitsi.org stable/
```

الآن يمكن تثبيت Jitsi Meet. يُنصح بتحديث كل الحزم المثبتة مجددًا:
```
$	apt update
```
```
$	apt install jitsi-meet
```

أثناء التثبيت سيُطلب منك إدخال اسم المضيف. أدخل النطاق الفرعي الذي أنشأته لسيرفر Jitsi Meet. في مثال سيرفر الاختبار لدينا: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)


أكد الإدخال بـ "Ok". ستفتح نافذة جديدة تسألك إذا كنت تريد إنشاء شهادة TLS موقعة ذاتيًا أو استخدام شهادة موجودة. اختر الخيار "إنشاء شهادة موقعة ذاتيًا جديدة":

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)


تم الآن الانتهاء من تثبيت Jitsi Meet وكل ما عليك فعله هو الحصول على شهادة TLS.
ثبت حزمة Certbot:
```
$	apt apt install certbot
```

شغّل السكربت الخاص بتثبيت شهادة TLS:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

أثناء التنفيذ سيُطلب منك إدخال بريد إلكتروني سيتم إرساله إلى letsencrypt.org. أدخل بريدًا إلكترونيًا وأكد الإدخال.

بعد ذلك يجب أن يكون Jitsi Meet مثبتًا بالكامل وفعّالًا على سيرفرك. لاختبار ما إذا تم تثبيت Jitsi Meet بشكل صحيح، فقط أدخل النطاق الفرعي الذي أعددته في شريط عنوان المتصفح. في هذا الدليل هو:
```
https://meet.zap-testdomain.de
```

إذا تم تحميل الصفحة مع Jitsi Meet يمكنك مباشرة بدء أول مؤتمر فيديو لك.

<InlineVoucher />