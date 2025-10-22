---
id: assettocorsa-mods
title: "Assetto Corsa: تثبيت المودات على سيرفر"
description: "اكتشف كيفية إعداد وتخصيص سيرفر Assetto Corsa الخاص بك لأفضل تجربة لعب → تعلّم المزيد الآن"
sidebar_label: تثبيت المودات
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## الاتصال عبر FTP

قبل ما نقدر نضبط السيرفر، لازم نجهز [الوصول عبر FTP](gameserver-ftpaccess.md):

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

بعد ما تجهز، تقدر تتصل وتفتح مجلد السيرفر:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## التحضير

أول شيء نفتح مجلد Assetto Corsa، نقدر نفتحها عن طريق فتح Steam والضغط يمين على "Assetto Corsa" في قائمة الألعاب

الآن نفتح "الملفات المحلية" ونفتح ملفات اللعبة المحلية:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

الآن نفتح مجلد "server"، هناك ملف "acServerManager"، نفتح هذا الملف



## ضبط السيارات

الآن ننتقل لتبويب "Cars / Entry List"، هنا نقدر نضيف سيارات جديدة:


لتفعيل السيارات، لازم يكون علامة الصح مفعلة على اليسار

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

في الوسط تقدر تشوف السيارات اللي ممكن تنحط على الشبكة، هنا نقدر نختار السيارات بالألوان اللي نبيها تكون على الشبكة:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
لاختيار أكثر من سيارة، تقدر تحط عدة علامات صح لإضافة السيارات المختلفة في الوسط.

انتبه إن كل فتحات السيارات تكون مليانة وما تتجاوز عدد الفتحات المتاحة.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## رفع الإعدادات

الآن نقدر نحفظ الإعدادات بزر "Save" ونصدرها بزر "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

هنا نختار مجلد فاضي لتخزين بيانات الإعدادات.

الآن نقدر نقفل AC Server Manager، ونفتح المجلد اللي صدرنا فيه الإعدادات.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

نقدر نسحب ونفلت هذه الإعدادات في مجلد "cfg" الخاص بسيرفر ألعابك.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## رفع محتوى السيرفر

الآن لازم نولد المحتوى للسيرفر، عشان مودات السيارات والخرائط تشتغل على السيرفر. عشان كذا نضغط على "Update Server Content" تحت

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

هالعملية ممكن تاخذ كم دقيقة، كل الخرائط والسيارات تتحول لملفات السيرفر.

:::info
بعد ما تخلص العملية، ممكن تطلع رسالة "Could not update"، هذا مو مشكلة.
:::

الآن نفتح مجلد "Server"، اللي فيه AcServerManager، هناك مجلد "Content"، نرفع هذا المجلد لسيرفر Assetto Corsa عن طريق السحب والإفلات، ونستبدل مجلد "Content" القديم:

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

بعد رفع المحتوى، مودات السيارات تكون منصبة ومفعلة بعد إعادة تشغيل السيرفر.

<InlineVoucher />