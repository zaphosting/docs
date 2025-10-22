---
id: redm-steam-web-api-key
title: "RedM: إعداد مفتاح Steam Web API"
description: "اكتشف كيفية الحصول على مفتاح Steam Web API وتفعيله لـ RedM لتمكين المصادقة وتحسين إعداد سيرفر ألعابك → تعلّم المزيد الآن"
sidebar_label: مفتاح Steam Web API
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

مفتاح Steam Web API له استخدامات مهمة في RedM. يشمل ذلك المصادقة عبر مفتاح API عندما يُستخدم Steam كمُعرّف بواسطة سكربتات و/أو موارد مختلفة.

<InlineVoucher />

## التحضير

تحتاج إلى حساب Steam غير محدود لطلب مفتاح API. الحسابات المقيدة على Steam لها وصول محدود لميزات Steam، لذا بدون وصول كامل لا يمكنك طلب مفتاح API. يجب أن تنفق على الأقل **5.00 دولار أمريكي** في متجر Steam لفتح حسابك وميزاته.

## طلب مفتاح API

بمجرد أن يكون لديك حساب Steam جاهز، يمكنك طلب مفتاح Steam Web API الخاص بك. يمكنك القيام بذلك بالتسجيل [على موقع Steam](https://steamcommunity.com/dev/apikey) باستخدام اسم حساب Steam وكلمة المرور الخاصة بك.

![](https://github.com/zaphosting/docs/assets/42719082/56be5337-a458-425b-86b0-e0c5fa94abab)

بعد تسجيل الدخول، يجب عليك إدخال اسم نطاق، وتأكيد شروط استخدام Steam Web API، ثم الضغط على زر **Register**. يجب تعيين النطاق إلى **عنوان IP الخاص بسيرفرك** *(بدون المنفذ)*، لذا أدخله هناك.

![](https://github.com/zaphosting/docs/assets/42719082/334e89a9-0eef-4ea5-b100-5a1e4b8cdc31)

إذا تم كل شيء بنجاح، ستتمكن من رؤية مفتاح Steam Web API الخاص بك، كما هو موضح أدناه.

![](https://github.com/zaphosting/docs/assets/42719082/a99f463b-93ae-408b-b038-29e366b30256)

## تفعيل مفتاح API

الآن بعد أن حصلت على مفتاح Steam Web API، يجب وضعه في ملف إعدادات سيرفر ألعابك (`server.cfg`) على سيرفر RedM الخاص بك. يمكنك الوصول إلى ملف `server.cfg` من خلال **واجهة txAdmin** ضمن **محرر CFG**. ابحث عن سطر موجود أو أنشئ واحدًا جديدًا إذا لم يكن موجودًا، وأضف التالي مع استبدال `YOUR_KEY_HERE` بالمفتاح الذي أنشأته:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/Rw48iY5FGCfP5s9/preview)

## الخاتمة

أخيرًا، يمكنك إعادة تشغيل سيرفرك. سيتم تحميل مفتاح Steam Web API الخاص بك في المرة القادمة التي يبدأ فيها السيرفر بالكامل. لقد أضفت مفتاح Steam Web API بنجاح إلى سيرفر ألعاب RedM الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />