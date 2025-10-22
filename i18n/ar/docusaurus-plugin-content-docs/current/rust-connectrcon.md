---
id: rust-connectrcon
title: "Rust: الاتصال بالسيرفر عبر RCON"
description: "اكتشف كيف تدير سيرفرك عن بُعد باستخدام RCON لتنفيذ الأوامر والتحكم بكفاءة → تعلّم المزيد الآن"
sidebar_label: الاتصال عبر RCON
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ما هو RCON؟

RCON هو بروتوكول لتنفيذ الأوامر على السيرفر بدون الحاجة للوصول المباشر إلى الكونسول.

<InlineVoucher />

### تفعيل WebRCON

أولاً، قبل ما تقدر تتصل، لازم تتأكد إن Web RCON مفعّل.
لتفعيله، زور تبويب **الإعدادات**.

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

وبعدين فعّله مباشرة من هالصفحة.
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
لازم تعيد تشغيل السيرفر عشان التغييرات تأخذ مفعولها.
:::

### تثبيت برنامج RCON

لازم تتصل بالسيرفر من خلال برنامج RCON. في عدة برامج مختلفة ممكن تستخدمها.
لهذا المثال، وكخيار موصى به، تقدر تحمل [RustAdmin](https://www.rustadmin.com/).

تقدر تثبته مباشرة من زر التحميل في موقعهم.
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## الاتصال عبر RCON

بعد ما تفتح WebAdmin، اضغط على **Server** في الأعلى. وبعدين اضغط **Connect**.

:::info
لازم يكون سيرفرك شغال بالكامل (ONLINE) عشان تقدر توصله عبر RCON.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

بعدين راح تنتقل لصفحة الإعدادات.
هنا تدخل بيانات السيرفر الخاصة فيك.

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
نصيحة: منفذ RCON وكلمة مرور RCON تقدر تلاقيهم في تبويب **الإعدادات** اللي فعلت فيه WebRCON.
:::

بعد ما تدخل بياناتك، احفظ الإعدادات.

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

وبعدين اضغط Server -> Connect.

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

لو تم الاتصال بنجاح، راح تشوف كلمة **Connected** باللون الأخضر في الأسفل.

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

الحين تقدر تستخدم RCON لإدارة سيرفرك! :) 


<InlineVoucher />