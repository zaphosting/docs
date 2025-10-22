---
id: ats-server-modding
title: "ATS: تثبيت المودات/DLCs على سيرفر ATS الخاص بك"
description: "اكتشف كيف تعزز تجربة American Truck Simulator الخاصة بك بالمودات وDLCs لكل من اللعب على العميل والسيرفر → تعلّم المزيد الآن"
sidebar_label: تثبيت المودات/DLCs
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

لعبة American Truck Simulator تدعم المودات بشكل أصلي عبر Steam Workshop المدمج في اللعبة، مما يتيح لك إضافة مجموعة واسعة من المودات إلى لعبتك وسيرفرك، بالإضافة إلى DLCs التي تم شراؤها. في هذا الدليل، سنغطي عملية تثبيت المودات على العميل ثم على سيرفر ATS الخاص بك.

<InlineVoucher />

## إضافة المودات وDLCs

أولاً، عليك إيجاد واختيار المودات وDLCs التي ترغب باستخدامها. يمكنك فعل ذلك داخل اللعبة من خلال الوصول إلى خيارات **مدير المودات** و**متصفح DLC** في القائمة الرئيسية.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### المودات

يمكنك الوصول إلى المودات عبر خيار **مدير المودات** في القائمة الرئيسية، والذي يتيح لك العثور بسهولة على المودات من خلال Steam Workshop.

بعد تثبيت بعض المودات، تأكد من نقلها إلى قائمة **المودات النشطة** باستخدام الأسهم بجانب كل مود.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

أخيرًا، أكد التغييرات وادخل اللعبة في وضع اللاعب الفردي.

### DLCs

يمكنك الوصول إلى DLCs التي اشتريتها على حسابك عبر خيار **متصفح DLC** في القائمة الرئيسية.

في هذه الصفحة، يمكنك تصفح جميع DLCs التي تمتلكها ومثبتة على عميلك.

## تصدير حزم السيرفر

الآن بعد تفعيل المودات واستعدادك داخل اللعبة، عليك تصدير المودات كحزم للسيرفر. للقيام بذلك، يجب فتح الكونسول داخل اللعبة، والذي يكون معطّلًا بشكل افتراضي.

لتفعيله، توجه إلى المسار التالي وافتح ملف `config.cfg`:
```
C:/Users/[your_user]/Documents/American Truck Simulator
```

في هذا الملف، ابحث عن السطر `uset g_developer "0"` واستبدله بـ `uset g_developer "1"` للتفعيل. وبالمثل، ابحث عن السطر `uset g_console "0"` واستبدله بـ `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

أعد تشغيل اللعبة، وستتمكن الآن من فتح الكونسول باستخدام أحد المفاتيح التالية حسب تخطيط لوحة المفاتيح:
```
` OR ~ OR \
```

الآن بعد أن أصبحت جاهزًا، اكتب في الكونسول الأمر التالي لتصدير حزم السيرفر:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

سيتم تصدير ملفين إلى مجلد `Documents/American Truck Simulator` الخاص بك، وهما `server_packages.dat` و `server_packages.sii`، يحتويان على معلومات عن DLCs والمودات وسيتم استخدامهما في القسم التالي.

## رفع حزم السيرفر

الآن بعد تصدير حزم السيرفر الخاصة بموداتك، عليك رفعها إلى سيرفر ATS الخاص بك عبر FTP. يرجى استخدام دليلنا الخاص بـ [وصول FTP](gameserver-ftpaccess.md) لمساعدتك في الاتصال بالسيرفر.

عند الاستعداد، توجه إلى المجلد الجذري الرئيسي **American Truck Simulator**. ارفع كلا ملفي حزم السيرفر إلى هذا المجلد. إذا كانت هذه الملفات موجودة مسبقًا، فقط استبدلها.

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
عند التعديل بالمودات، يجب مزامنة المودات بين العميل والسيرفر. هذا يعني أنه إذا اتصلت بسيرفر يحتوي على مودات غير موجودة لديك، سيُطلب منك تحميل المودات الناقصة.
:::

أخيرًا، أعد تشغيل سيرفرك لتفعيل وتثبيت المودات تلقائيًا. لقد نجحت في تثبيت المودات على سيرفر ATS الخاص بك.

<InlineVoucher />