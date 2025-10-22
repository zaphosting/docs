---
id: webspace-plesk-ssl
title: "استضافة مواقع: إنشاء شهادة SSL"
description: "اكتشف كيف تؤمن موقعك الإلكتروني بتشفير SSL وتمكين HTTPS لتصفح أكثر أمانًا → تعلّم المزيد الآن"
sidebar_label: إنشاء شهادة SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## تشفير الموقع الإلكتروني بشهادة SSL

:::info
يفترض أن النطاق يشير بالفعل إلى عنوان IP الخاص بالاستضافة.
:::

إذا تم إنشاء نطاق في استضافة المواقع، يكون غير مشفر في البداية دائمًا. يمكن رؤية ذلك في لوحة تحكم Plesk:

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

والإشعار في المتصفح عند فتح النطاق:

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

مع شهادة SSL، يمكن حماية/تشفير النطاق بشكل مناسب.

<InlineVoucher />

## إنشاء الشهادة

الخطوة 1️⃣: بالنقر المزدوج على "شهادة SSL/TLS" يفتح القائمة التالية:

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

يمكن طلب شهادة Let's Encrypt مجانًا.

الخطوة 2️⃣: أدخل/املأ المعلومات المطلوبة. لكي يتم طلب الشهادة، يجب تقديم التفاصيل.

يجب تحديد بريد إلكتروني والتحقق من صلاحية الشهادة للنطاق. عادةً، يكون لكل نطاق نطاق فرعي "www" نشط، لذلك يتم تحديده أيضًا إذا كان مدرجًا في DNS الخاص بالنطاق.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

ثم يتم طلب الشهادة بالنقر على "احصل عليها مجانًا".

الخطوة 3️⃣: تم إنشاء الشهادة الآن، ويمكن رؤية ذلك في الأعلى يمين. بالإضافة إلى ذلك، يجب تفعيل إعادة التوجيه التلقائي من HTTP إلى HTTPS، لأنه بدون ذلك لا يمكن تفعيل التشفير:

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

بعد تنفيذ ذلك، تصبح إعادة التوجيه مفعلة. سواء فتحت الصفحة بـ http أو https مباشرة في المتصفح، سيتم توجيهك دائمًا إلى https.

الخطوة 4️⃣: الآن يمكنك التحقق في المتصفح ما إذا تم التعرف على الشهادة:

يجب أن يكون القفل موجودًا:

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

معلومات الشهادة، التي يمكن فتحها بالنقر على القفل، يجب أن تعرض النطاق أيضًا:

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

الموقع الآن محمي/مشفر بشكل صحيح.

## شهادات للنطاقات الفرعية

نفس الخطوات يمكن نظريًا اتباعها لنطاق فرعي. لكن هناك طريقة أسهل لتشفير جميع النطاقات الفرعية دفعة واحدة، سواء كانت موجودة مسبقًا أو جديدة. يمكن استخدام "شهادة Wildcard" لهذا الغرض. يتطلب ذلك إدخال TXT خاص في DNS الخاص بالنطاق. بمجرد توفره، يمكن إصدار شهادة SSL لجميع النطاقات الفرعية.

الخطوة 1️⃣: افتح قائمة شهادة SSL/TLS مرة أخرى.

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

ثم انقر على "تجديد الشهادة" في الأعلى يسار.
الآن تفتح نافذة طلب Let's Encrypt:

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

اختر الآن "تأمين النطاق Wildcard":

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

يتم إضافة النطاق الفرعي "www" و "webmail" تلقائيًا.
ثم يتم النقر على زر "احصل عليها مجانًا" مرة أخرى.

الخطوة 2️⃣: تظهر الآن مربع أزرق بمعلومات مهمة:

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

يُعطى اسم نطاق وقيمة. يجب أن تكون متوفرة دائمًا كـ TXT في DNS الخاص بالنطاق، هذه هي الطريقة الوحيدة التي يمكن لـ Let's Encrypt من خلالها التأكد من صحة النطاق والتحقق منه.

يجب أن يبدو الإدخال في DNS هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
قد يستغرق إدخال DNS حتى 24 ساعة ليصبح متاحًا من أي مكان في العالم.
:::

للتأكد من أن إدخال TXT نشط بالفعل، يمكن استخدام "أداة البحث عن TXT" من mxtoolbox: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

إذا تم عرض الإدخال المدخل، يمكن تأكيده في المربع الأزرق في Plesk بالنقر على "إعادة تحميل". الآن يتم التحقق من وجود إدخال DNS، وبما أنه موجود، بعد ثوانٍ قليلة يظهر "محمي" لـ "شهادة SSL/TLS" أو "شهادة Wildcard":

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

إذا تم إنشاء نطاق فرعي الآن، فهو محمي بالفعل:

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

الآن يتم تشفير نقل البيانات بالكامل إلى الموقع، وتم الأمر.

<InlineVoucher />