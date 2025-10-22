---
id: arma3-gamemode
title: "Arma 3: تغيير وضع اللعبة"
description: "اكتشف كيف تضبط وتحمل أوضاع اللعبة على سيرفر ألعاب Arma 3 الخاص بك لتجربة لعب مخصصة → تعلّم المزيد الآن"
sidebar_label: تغيير وضع اللعبة
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ضبط وضع اللعبة

لتغيير وضع اللعبة على سيرفر ألعاب Arma 3 الخاص بك، عليك رفع ملف المهمة المناسب لوضع اللعبة إلى سيرفرك.

نحن حالياً نوفر ملفات المهام التالية بدون الحاجة لرفعها من قبلك:

- Arma 3 Wasteland

هذه الملفات موجودة بالفعل في مجلد **mpmissions** الخاص بك.

<InlineVoucher />

## رفع ملف المهمة

لرفع ملف المهمة، يجب عليك أولاً الاتصال بسيرفرك عبر FTP: [الوصول عبر FTP](gameserver-ftpaccess.md).
هناك، قم برفع ملف المهمة المناسب إلى مجلد **mpmissions** الموجود تحت المسار **/gxxxxxx/arma3/**.
في هذا المثال، نقوم برفع وضع اللعبة **King of the Hill** إلى سيرفرنا.

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## تحميل ملف المهمة على السيرفر

لتحميل ملف المهمة من السيرفر، اذهب إلى واجهة سيرفر ألعاب Arma 3 الخاصة بك واضغط على تبويب **Configs** في القائمة على اليسار:

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

هناك، قم بتحرير ملف **server.cfg** وأدخل اسم ملف المهمة كما هو موضح في الصورة:

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

بعد ذلك، اضغط على **حفظ** ويمكنك تشغيل سيرفرك. سيتم تحميل ملف المهمة الجديد.

<InlineVoucher />