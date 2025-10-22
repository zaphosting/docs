---
id: source-custom-content
title: تثبيت المحتوى المخصص والمودات على سيرفرات الألعاب
description: "اكتشف كيف يعزز المحتوى المخصص تجربة اللعب في ألعاب سورس مثل Counter-Strike و Garry's Mod من خلال الخرائط، الأشكال، والأصوات → تعلّم المزيد الآن"
sidebar_label: المحتوى المخصص
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ما هو المحتوى المخصص؟

بعض ألعاب سورس مثل Counter-Strike أو Garry's Mod أصبحت معروفة بتنوعها. كل هذا أصبح ممكنًا بدعم الإضافات و**المحتوى المخصص**. تم تطوير أوضاع لعب مختلفة على مر السنين، مثل Zombie Mod، Hide and Seek، Minigames، Jailbreak وأكثر.

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

غالبًا ما تستخدم هذه السيرفرات خرائط، أشكال لاعبين وأصوات تم إنشاؤها من قبل المجتمع. لكي يتمكن اللاعبون من استخدام أو مشاهدة المحتوى المخصص للسيرفر، يجب أولاً تحميل المحتوى من السيرفر. في هذه الحالة هناك خياران:

- FastDL
- Steam Workshop

اعتمادًا على نطاق الاستخدام، يكون أحد الخيارين أكثر فائدة من الآخر. فيما يلي نظرة عامة على الفروقات بين FastDL و Workshop:

|  المحتوى المخصص  | FastDL | Steam Workshop |
| :--------------: | :----: | :------------: |
|       الخرائط       |   ✓    |       ✓        |
| المواد/النماذج |   ✓    |       ✗        |
|      الأصوات      |   ✓    |       ✗        |



## إعداد المحتوى المخصص



### FastDL

فيما يلي شرح لإعداد سيرفر FastDL باستخدام أحد [منتجات استضافة المواقع](https://zap-hosting.com/en/shop/product/webspace/) الخاصة بنا. مع ذلك، يمكنك استخدام أي خيار آخر يوفر سيرفر ويب متاح للجمهور. للبدء بالإعداد، نفتح منتج استضافة المواقع وندخل إلى الإدارة:

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



بمجرد الدخول، نفتح مدير الملفات وننشئ المجلدات التالية:

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



بعد ذلك، يجب تفويض استضافة المواقع حتى يعمل تحميل المحتوى داخل اللعبة بشكل صحيح:

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
يجب تعيين الأذونات لجميع المجلدات!
:::

الآن يمكن رفع المحتوى المخصص. لهذا، يجب أن تكون الملفات متوفرة على السيرفر وكذلك على FastDL (استضافة المواقع). على سيرفر الألعاب تُرفع الملفات غير مضغوطة، وعلى FastDL يُفضل رفعها مضغوطة بصيغة bzip2. يُنصح باستخدام برنامج 7Zip لهذا الغرض.

أخيرًا، يجب فقط تحديد سيرفر FastDL مع سيرفر الألعاب. يتم الإعداد عبر **server.cfg**. لهذا الغرض يجب إضافة الأوامر التالية إلى ملف الإعداد:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // استبدل الرابط برابط استضافة المواقع الخاصة بك من ZAP.
```

بعد إعادة التشغيل والاتصال بالسيرفر، يجب أن يتم تحميل المحتوى المقابل. يمكن التحقق من ذلك أيضًا في كونسول اللعبة:

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

فيما يلي شرح لإعداد Steam Workshop. أولًا، يجب فتح صفحة Steam Workshop. للقيام بذلك، اختر اللعبة المناسبة في Steam وافتح الورشة هناك. في هذا المثال نأخذ [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections) كمثال. بمجرد الدخول، نضغط على قائمة Browse ونختار Collection:

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

هناك نضغط بالزر الأيمن على Collection وننشئ مجموعة للمحتوى لسيرفر الألعاب:

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

تم إنشاء المجموعة بنجاح، لكنها تكون فارغة بشكل افتراضي. لذلك، نعيد فتح ورشة اللعبة ونختار العناصر التي نريد إضافتها:

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

عند الانتهاء من الجمع، تحتاج للعودة إلى المجموعة، تضغط بالزر الأيمن وتختار Copy Page URL. تحتاج إلى معرّف المجموعة من الرابط، والذي قد يبدو هكذا:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

في النهاية، يجب إضافة هذا المعرف في Steam Workshop داخل إدارة سيرفر الألعاب الخاص بك:

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />