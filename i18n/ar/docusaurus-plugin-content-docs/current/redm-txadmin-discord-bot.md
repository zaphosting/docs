---
id: redm-txadmin-discord-bot
title: "RedM: بوت Discord الخاص بـ txAdmin"
description: "قم بإعداد ودمج بوت Discord مع سيرفر RedM الخاص بك عبر txAdmin لتعزيز الإدارة والتواصل → تعلّم المزيد الآن"
sidebar_label: بوت Discord الخاص بـ txAdmin
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## مقدمة
تقدم لوحة txAdmin العديد من الميزات لسيرفر RedM الخاص بك، بما في ذلك دمج بوت Discord.
في هذا الدليل، سنوضح لك كيفية إعداد بوت Discord وكيفية استخدامه.

<InlineVoucher />

## التحضير

لإعداد بوت Discord لسيرفر txAdmin الخاص بك، يجب أولاً تسجيل الدخول إلى لوحة txAdmin.
يتم عرض معلومات تسجيل الدخول في صفحة نظرة عامة على السيرفر، كما هو موضح هنا:

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

يتطلب هذا الدليل أن يكون txAdmin مُعدًا مسبقًا. لتعلم كيفية القيام بذلك، يمكنك زيارة دليلنا [RedM: إعداد txAdmin](redm-txadmin-setup.md).

:::

## الإعداد

### إنشاء تطبيق Discord

لإعداد البوت مع txAdmin، يجب عليك إنشاء تطبيق Discord. يتم تعيين البوت الخاص بك له ويعمل تحت اسمه. لإنشاء مثل هذا التطبيق، يرجى الدخول إلى [بوابة مطوري Discord](https://discord.com/developers/applications/).

الآن، ستقوم بإنشاء تطبيق جديد بالنقر على **New Application** ويمكنك الآن تعيين اسم كما هو موضح أدناه:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

بعدها، تنشئ التطبيق بالنقر على **Create**. للخطوات التالية، يرجى تدوين معرّف التطبيق الآن:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### تكوين البوت والحصول على التوكن

عند إنشاء التطبيق، يتم إنشاء بوت تلقائيًا أيضًا. يمكنك بسهولة الحصول على التوكن بالنقر على **Reset Token**. بعدها، ستحصل على توكن المستخدم الذي يجب عليك تدوينه أو كتابته في مكان آمن:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
لا تكشف توكن البوت لأي شخص لكي يعمل بوتك بدون انقطاع ولا يسبب مشاكل أمنية. التوكن مثل مفتاح سري ولا يجب مشاركته.
:::

في نفس الصفحة، عليك التمرير قليلاً لأسفل وتمكين خيار "Server Members Intent" وحفظ التغييرات:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### دعوة البوت إلى Discord الخاص بك

لدعوة البوت، يجب عليك إدخال معرّف العميل الذي سجلته سابقًا في الرابط التالي في المكان المناسب ثم فتح الرابط في متصفحك وإضافة البوت إلى سيرفر Discord الخاص بك. يجب أن يبدو الرابط مثل هذا المثال:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### الحصول على معرّفات السيرفر والقناة

لاستخدام البوت بشكل صحيح مع txAdmin، عليك الحصول على معرّف السيرفر الذي سيعمل عليه البوت.
يمكنك الحصول عليه بالنقر بزر الفأرة الأيمن على أيقونة السيرفر في Discord ثم النقر على **Copy Server ID**. قم بتدوين هذا المعرف أيضًا.

إليك مثال على كيف يجب أن يبدو:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

يمكنك أيضًا اختيارياً تعيين قناة حيث يتم نشر تحديثات الحالة مثل جداول إعادة التشغيل، يمكنك نسخ المعرف بنفس الطريقة، لكن لقناة.
لا تنسَ أن يكون للبوت صلاحية القراءة والكتابة في تلك القناة.

:::info
إذا لم يكن لديك خيار نسخ معرّف السيرفر أو القناة، عليك تفعيل وضع المطور في إعدادات المستخدم في Discord أولاً:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### تخصيص الإعدادات في txAdmin

الآن يمكنك تفعيل بوت Discord في txAdmin وإدخال جميع المعرفات والتوكنات التي حفظتها سابقًا:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### اختياري: إرسال رسالة حالة

يمكنك اختيارياً إرسال رسالة حالة مرة واحدة، والتي ستقوم بتحديث حالة السيرفر الحالية، اللاعبين، وغيرها بشكل مستمر.
للقيام بذلك، انقر على قناة Discord التي تريد أن تظهر فيها واكتب `/status add`. تأكد من أن البوت لديه صلاحية إرسال الرسائل في تلك القناة.

يجب أن تنشئ رسالة مثل هذه:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

يمكن تخصيص كل شيء في تلك الرسالة من صفحة إعدادات Discord داخل txAdmin.

## الخلاصة

إعداد بوت Discord لـ txAdmin يتيح لك عرض حالة سيرفر RedM الخاص بك ومعلومات أخرى بسهولة داخل سيرفر Discord الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />