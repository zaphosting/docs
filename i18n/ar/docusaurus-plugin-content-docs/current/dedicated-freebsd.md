---
id: dedicated-freebsd
title: "سيرفر مخصص: تثبيت FreeBSD"
description: "اكتشف كيفية تثبيت وتكوين نظام FreeBSD على سيرفرك المخصص لأداء وموثوقية مثالية → تعلّم المزيد الآن"
sidebar_label: تثبيت FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

فيما يلي شرح خطوة بخطوة لكيفية تثبيت وتكوين نظام التشغيل FreeBSD على سيرفرك المخصص. اتبع هذه التعليمات بعناية لضمان إعداد نظام التشغيل بنجاح واستخدامه بأفضل شكل ممكن.

:::info

هيكل هذا الدليل مبني على استخدام نظام التشغيل FreeBSD 13.0. قد تختلف عمليات التثبيت في الإصدارات الأقدم أو الأحدث قليلاً من حيث الخطوات.

:::

<InlineVoucher />

## التحضير

لتثبيت وتكوين نظام التشغيل، من المهم أولاً تركيب ملف ISO الخاص بنظام التشغيل. هناك عدة طرق ممكنة لتركيبه:

1. التركيب عبر الإعداد الأولي
2. التركيب عبر iLO (الوسائط الافتراضية)
3. التركيب عبر iLO (الكونسول البعيد)

إذا لم تكن معتادًا على تركيب ملف ISO بعد، فمن الأفضل الرجوع إلى [الإعداد الأولي](dedicated-setup.md) أو [ملف ISO خاص](dedicated-iso.md) الخاص بنا.



## التثبيت
عند تحميل ملف ISO بنجاح، يكون السيرفر في مرحلة الإعداد.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

نبدأ التثبيت بالضغط على `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

اختر تخطيط لوحة المفاتيح الذي تفضله واستمر بالضغط على متابعة.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

اختر اسم المضيف الذي تريده.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

يمكنك اختيار حزم النظام الاختيارية التي تريد تثبيتها، وبعد الانتهاء اضغط OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

في هذه الخطوة يمكنك إنشاء الأقسام، في هذا المثال نستخدم RAID0. مزيد من المعلومات عن RAID موضحة في [تكوين RAID](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

يمكنك المتابعة بالضغط على `Enter` إذا لم تكن هناك تغييرات.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

بما أننا نستخدم RAID0 نختار عدم وجود تكرار.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

علّم على القسم الخاص بك باستخدام `Space` واستمر بالضغط على `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

نؤكد أن جميع البيانات سيتم مسحها

:::info
سيرفرك الآن في مرحلة إعداد النظام، قد يستغرق هذا عدة دقائق
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

يرجى إدخال كلمة المرور الخاصة بك والمتابعة بالضغط على `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

اختر "لا" في إعداد IPv4/IPv6، يجب القيام بذلك في النهاية.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

اختر "نعم" وحدد منطقتك الزمنية والتاريخ/الوقت.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

يمكنك تغيير الخدمات التي ستبدأ تلقائيًا عند تشغيل السيرفر

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

إذا لزم الأمر، يمكنك تعديل إعدادات الأمان.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

تم الانتهاء من الإعداد، اختر "خروج" وأكد بالضغط على `Enter`

:::info
قم بإزالة ملف ISO من iLO واختر "إعادة التشغيل"
:::



## التكوين

### الشبكة

لتفعيل جهاز الشبكة، يرجى تسجيل الدخول إلى نظامك باستخدام كلمة المرور

افتح ملف loader.conf باستخدام محرر من اختيارك، كمثال `ee /boot/loader.conf` وأضف السطر التالي:

```if_oce_load="YES"```

يمكنك الخروج من المحرر بالضغط على `CTRL+C` وكتابة exit، بعد ذلك يرجى إعادة تشغيل السيرفر المخصص الخاص بك

***

بعد إعادة التشغيل، نحتاج لتعديل ملف rc.conf كمثال باستخدام `ee /etc/rc.conf`، أضف الأسطر التالية:

```
ifconfig_oce0="DHCP"
```

:::caution
اسم محول الشبكة في المثال **oce0** قد يكون مختلفًا. تأكد من تحديد محول الشبكة الصحيح. يمكن التحقق من ذلك باستخدام أمر ifconfig. سيتم الحصول على المعلومات تلقائيًا عبر خادم DHCP.
:::

يجب أن يبدو المثال كما يلي:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

اخرج من المحرر بالضغط على `CTRL+C` وكتابة "exit" ثم نفذ الأمر `/etc/netstart` مرة واحدة

:::info
يجب أن يكون لسيرفرك الآن اتصال إنترنت نشط
:::



## الخاتمة

مبروك، لقد قمت بتثبيت نظام التشغيل FreeBSD بنجاح على سيرفرك المخصص. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />