---
id: fivem-steam-web-api-key
title: "FiveM: إعداد مفتاح Steam Web API"
description: "اكتشف كيفية الحصول على مفتاح Steam Web API وتفعيله لـ FiveM لتمكين المصادقة وتحسين وظائف السيرفر → تعلّم المزيد الآن"
sidebar_label: مفتاح Steam Web API
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

مفتاح Steam Web API له استخدامات مهمة في FiveM. يشمل ذلك المصادقة عبر مفتاح API عندما يُستخدم Steam كمُعرف بواسطة سكربتات و/أو موارد مختلفة.

<InlineVoucher />

## التحضير

تحتاج إلى حساب Steam غير محدود لطلب مفتاح API. الحسابات المقيدة في Steam لها وصول محدود لميزات Steam، لذا بدون وصول كامل لا يمكن طلب مفتاح API. يجب أن تنفق على الأقل **5.00 دولار أمريكي** في متجر Steam لفتح حسابك وميزاته.

## طلب مفتاح API

بمجرد أن يكون لديك حساب Steam جاهز، يمكنك طلب مفتاح Steam Web API الخاص بك. يمكنك القيام بذلك بالتسجيل [على موقع Steam](https://steamcommunity.com/dev/apikey) باستخدام اسم حساب Steam وكلمة المرور الخاصة بك.

![](https://github.com/zaphosting/docs/assets/42719082/56be5337-a458-425b-86b0-e0c5fa94abab)

بعد تسجيل الدخول، يجب عليك إدخال اسم نطاق، وتأكيد شروط استخدام Steam Web API، ثم الضغط على زر **Register**. يجب تعيين النطاق إلى **عنوان IP الخاص بالسيرفر** *(بدون المنفذ)*، لذا أدخله هناك.

![](https://github.com/zaphosting/docs/assets/42719082/334e89a9-0eef-4ea5-b100-5a1e4b8cdc31)

إذا تم كل شيء بنجاح، يجب أن تتمكن من رؤية مفتاح Steam Web API الخاص بك، كما هو موضح أدناه.

![](https://github.com/zaphosting/docs/assets/42719082/a99f463b-93ae-408b-b038-29e366b30256)

## تفعيل مفتاح API

الآن بعد أن حصلت على مفتاح Steam Web API، يجب وضعه في ملف إعدادات السيرفر (`server.cfg`) الخاص بسيرفر ألعاب FiveM. يمكنك الوصول إلى ملف `server.cfg` من خلال **واجهة txAdmin** تحت **محرر CFG**. ابحث عن سطر موجود أو أنشئ واحدًا جديدًا إذا لم يكن موجودًا، وأضف التالي مع استبدال `YOUR_KEY_HERE` بالمفتاح الذي أنشأته:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)



## الخلاصة

أخيرًا، يمكنك إعادة تشغيل السيرفر. سيتم تحميل مفتاح Steam Web API الخاص بك في المرة القادمة التي يبدأ فيها السيرفر بالكامل. لقد أضفت مفتاح Steam Web API بنجاح إلى سيرفر ألعاب FiveM الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />