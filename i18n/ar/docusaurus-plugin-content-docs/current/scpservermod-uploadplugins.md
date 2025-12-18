---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: تثبيت الإضافات على السيرفر"
description: "اكتشف كيفية تثبيت وتكوين إضافات SMOD لسيرفر SCP الخاص بك لتعزيز طريقة اللعب وميزات السيرفر → تعلّم المزيد الآن"
sidebar_label: تثبيت الإضافات
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning دليل مؤرشف
تم أرشفة هذا المستند. يتم أرشفة المستندات إذا لم تعد ذات صلة، أو غير صحيحة، أو غير محدثة. تم أرشفتها للأسباب التالية:

السبب: تم التخلي عن امتداد Servermod لـ SCP وبالتالي لن يتم صيانته بعد الآن. نوصي بالتحويل إلى **[SCP:EXILED](exiled-plugins.md)** بدلاً من ذلك.
::::

<InlineVoucher />

## الاتصال عبر FTP

قبل تثبيت الإضافات، يجب إعداد [الوصول عبر FTP](gameserver-ftpaccess.md).

بعد إعداده، يمكنك الاتصال وفتح مجلد السيرفر التالي:
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## تثبيت الإضافات

### العثور على الإضافات

أولاً، عليك إيجاد إضافات متوافقة مع SMOD.

أفضل مكان للحصول عليها هو مباشرة في [ديسكوردهم](https://discord.gg/T9aurNf)

:::info
هذا هو أحد الأماكن فقط التي يمكنك الحصول عليها منها. قد تجدها في أماكن أخرى. من المهم التأكد من توافقها مع إصدار SMOD الخاص بك.
:::

في هذا المثال، سنحصل على الإضافة التالية:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### رفع الإضافات

بعد تحميل الإضافات التي تريدها، قم برفعها إلى FTP السيرفر الخاص بك. يمكنك رفعها عبر **السحب والإفلات** داخل مجلد **sm_plugins.**

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
ملاحظة: بعد تثبيت أي إضافة، يجب عليك **إعادة تشغيل السيرفر** لكي **تُفعّل الإضافات.**
:::

### تكوين الإضافات

حسب الإضافة، قد تحتاج لإضافة إعدادات مختلفة في ملف config_gameplay.txt.

في مثالنا، الإعدادات التالية معرفة.

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

لإضافتها، سنقوم بتحرير ملف config_gameplay.txt.

يمكنك إيجاده من خلال تبويب **الإعدادات** على اليسار.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

ثم نبحث عن ملف **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
يمكن كتابة الإعدادات في أي مكان، لكن من الأفضل كتابتها تحت قسم '#Misc gameplay settings' في ملف config_gameplay.txt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
ملاحظة: حسب الإضافة، ستكون إعداداتك مختلفة. تأكد دائماً من قراءة التعليمات الخاصة بالإضافة لتضيف الإعدادات بشكل صحيح.
:::

بعد تحديد الإعدادات، قم بإعادة تشغيل السيرفر (أو تشغيله) ثم تحقق من عملها مباشرة داخل اللعبة!

<InlineVoucher />