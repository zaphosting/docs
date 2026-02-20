---
id: dedicated-linux-jitsi
title: "إعداد Jitsi Meet على سيرفر Linux - استضف منصة مؤتمرات الفيديو الخاصة بك"
description: "اكتشف كيفية إعداد وتشغيل سيرفر Jitsi Meet آمن خاص بك لعقد اجتماعات فيديو خاصة وسهلة → تعلّم المزيد الآن"
sidebar_label: تثبيت Jitsi Meet
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Jitsi Meet هو برنامج مؤتمرات فيديو مفتوح المصدر يمكنك من خلاله إعداد مؤتمرات الفيديو الخاصة بك على سيرفرك. من أكبر مميزات Jitsi Meet سهولة الاستخدام: كل ما تحتاجه هو متصفح (وعند استخدام الهواتف المحمولة تطبيق Jitsi) ولا تحتاج لتسجيل الدخول إلى خدمات خارجية. كل مؤتمر فيديو يحصل على رابط URL خاص به للانضمام إلى المؤتمر. Jitsi Meet مثالي لعقد مؤتمرات الفيديو حتى مع الأشخاص الذين ليس لديهم خبرة كبيرة.
تنبيه: بدون أي إعدادات إضافية، يمكن لأي شخص يصل إلى سيرفر Jitsi Meet أن يبدأ مؤتمرات الفيديو الخاصة به على السيرفر.

## تثبيت Jitsi Meet على سيرفر Debian

في التالي نشرح كيفية تثبيت سيرفر Jitsi Meet على سيرفر Debian. بشكل عام يعمل Jitsi Meet على سيرفرات Linux أخرى، مثل Ubuntu، والتثبيت مشابه جدًا.

### التحضيرات

لاستخدام Jitsi Meet بشكل صحيح، من الأفضل استخدام نطاق خاص بك للوصول إلى سيرفر Jitsi. من المنطقي إنشاء نطاق فرعي خاص بسيرفر Jitsi Meet. كمثال نستخدم النطاق meet.zap-testdomain.de.
لنطاقات ZAP-Hosting، يجب عليك إنشاء سجل جديد ضمن إدارة DNS. أدخل اسم النطاق الفرعي في خانة "الاسم" وعنوان IP الخاص بسيرفرك في خانة "القيمة". في مثالنا سندخل "meet" في خانة الاسم وعنوان IP لسيرفر اختبار ZAP حيث سنثبت Jitsi Meet في خانة القيمة: 185.239.239.49 (أدخل عنوان IP الخاص بسيرفرك، وليس عنوان المثال هذا)

يمكن الوصول إلى سيرفر Jitsi Meet عبر عنوان IP مباشرة. لكن النطاق مطلوب لشهادة SSL. بدون نطاق سيظهر تحذير أمني في المتصفح.

إذا تم إعداد النطاق الفرعي (قد يستغرق تفعيل التغييرات حتى 24 ساعة)، يمكنك تجهيز السيرفر للتثبيت.
اتصل بسيرفرك عبر Putty أو WinSCP.
قبل المتابعة، تأكد من تحديث السيرفر. إذا لزم الأمر يجب تشغيل كل أمر بصلاحيات المستخدم المتميز. أضف "sudo" قبل الأمر (مثلاً "sudo apt-get update")

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

أثناء التثبيت سيُطلب منك إدخال اسم المضيف. أدخل النطاق الفرعي الذي أنشأته لسيرفر Jitsi Meet. في مثال سيرفر الاختبار لدينا، هو: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

أكد الإدخال بـ "Ok". ستفتح نافذة جديدة تسألك إذا كنت تريد إنشاء شهادة TLS موقعة ذاتيًا أو استخدام شهادة موجودة. اختر الخيار "إنشاء شهادة موقعة ذاتيًا جديدة":

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

تم الآن الانتهاء من تثبيت Jitsi Meet وكل ما عليك فعله هو استرجاع شهادة TLS.
ثبت حزمة Certbot:
```
$	apt apt install certbot
```

شغّل السكربت الخاص بتثبيت شهادة TLS:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

أثناء التنفيذ سيُطلب منك إدخال بريد إلكتروني سيتم إرساله إلى letsencrypt.org. أدخل بريدًا إلكترونيًا ووافق بالكتابة.

بعد ذلك يجب أن يكون Jitsi Meet مثبتًا بالكامل وفعّالًا على سيرفرك. لاختبار ما إذا تم تثبيت Jitsi Meet بشكل صحيح، فقط أدخل النطاق الفرعي الذي أعددته في شريط عنوان المتصفح. في هذا الدليل هو:
```
https://meet.zap-testdomain.de
```

إذا تم تحميل الصفحة مع Jitsi Meet يمكنك مباشرة بدء أول مؤتمر فيديو لك.