---
id: fivem-txadmin-discord-bot
title: "FiveM: بوت Discord الخاص بـ txAdmin"
description: "اكتشف كيفية دمج واستخدام بوت Discord مع سيرفر txAdmin الخاص بك لإدارة سيرفر FiveM بشكل أفضل → تعلّم المزيد الآن"
sidebar_label: بوت Discord الخاص بـ txAdmin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## مقدمة
لوحة txAdmin تقدم لك الكثير من الميزات لسيرفر FiveM الخاص بك، بما في ذلك دمج بوت Discord.
في هذا الدليل، سنوضح لك كيفية إعداد بوت Discord وكيفية استخدامه.

<InlineVoucher />

## التحضير

لإعداد بوت Discord لسيرفر txAdmin الخاص بك، يجب أولاً تسجيل الدخول إلى لوحة txAdmin.
معلومات الدخول تظهر في صفحة نظرة عامة على السيرفر، كما هو موضح هنا:

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

هذا الدليل يتطلب أن يكون txAdmin مُعدًا مسبقًا. لتعلم كيفية القيام بذلك، يمكنك زيارة دليلنا [FiveM: إعداد txAdmin](fivem-txadmin-setup.md).

:::

## الإعداد

### إنشاء تطبيق Discord

لكي تضبط البوت مع txAdmin، يجب عليك إنشاء تطبيق Discord. سيتم تعيين البوت الخاص بك لهذا التطبيق ويعمل تحت اسمه. لإنشاء هذا التطبيق، يرجى الدخول إلى [بوابة مطوري Discord](https://discord.com/developers/applications/).

الآن، ستقوم بإنشاء تطبيق جديد بالنقر على **New Application** ثم تعيين اسم كما هو موضح أدناه:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

بعدها، أنشئ التطبيق بالنقر على **Create**. للخطوات التالية، يرجى تدوين معرّف التطبيق الآن:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### تكوين البوت والحصول على التوكن

عند إنشاء التطبيق، يتم إنشاء بوت تلقائيًا أيضًا. يمكنك بسهولة الحصول على التوكن بالنقر على **Reset Token**. بعدها، ستحصل على توكن المستخدم الذي يجب عليك تدوينه أو حفظه في مكان آمن:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
لا تكشف توكن البوت لأي شخص حتى يعمل بوتك بدون مشاكل ولا يسبب أي ثغرة أمنية. التوكن مثل المفتاح السري ويجب عدم مشاركته.
:::

في نفس الصفحة، قم بالتمرير قليلاً لأسفل وفعل خيار "Server Members Intent" ثم احفظ التغييرات:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### دعوة البوت إلى Discord الخاص بك

لدعوة البوت، يجب عليك إدخال معرّف العميل الذي سجلته سابقًا في الرابط التالي في المكان المناسب، ثم افتح الرابط في متصفحك وأضف البوت إلى سيرفر Discord الخاص بك. يجب أن يبدو الرابط مثل هذا المثال:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### الحصول على معرّفات السيرفر والقناة

لاستخدام البوت بشكل صحيح مع txAdmin، يجب عليك الحصول على معرّف السيرفر الذي سيعمل عليه البوت.
يمكنك الحصول عليه بالنقر بزر الفأرة الأيمن على أيقونة السيرفر في Discord ثم اختيار **Copy Server ID**. قم بتدوين هذا المعرف أيضًا.

إليك مثال كيف يجب أن يبدو:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

يمكنك أيضًا اختيارياً تعيين قناة يتم فيها نشر تحديثات الحالة مثل جداول إعادة التشغيل، يمكنك نسخ معرف القناة بنفس الطريقة.
لا تنسى أن البوت يجب أن يمتلك صلاحية القراءة والكتابة في تلك القناة.

:::info
إذا لم يكن لديك خيار نسخ معرّف السيرفر أو القناة، يجب عليك تفعيل وضع المطور في إعدادات مستخدم Discord أولاً:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### تخصيص الإعدادات في txAdmin

الآن يمكنك تفعيل بوت Discord في txAdmin وإدخال كل المعرفات والتوكنات التي حفظتها سابقًا:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### اختياري: إرسال رسالة حالة

يمكنك اختيارياً إرسال رسالة حالة واحدة، والتي ستقوم بتحديث حالة السيرفر الحالية، اللاعبين، وغيرها بشكل مستمر.
للقيام بذلك، اضغط على قناة Discord التي تريدها واكتب الأمر `/status add`. تأكد من أن البوت لديه صلاحية إرسال الرسائل في تلك القناة.

يجب أن تنشئ رسالة مثل هذه:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

كل شيء في تلك الرسالة يمكن تخصيصه من صفحة إعدادات Discord داخل txAdmin.

## الخلاصة

إعداد بوت Discord لـ txAdmin يتيح لك عرض حالة سيرفر FiveM الخاص بك ومعلومات أخرى بسهولة داخل سيرفر Discord الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />