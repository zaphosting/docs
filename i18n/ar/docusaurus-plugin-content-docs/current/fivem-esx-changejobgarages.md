---
id: fivem-esx-changejobgarages
title: "FiveM: جراجات الوظائف - إضافة سيارات"
description: "اكتشف كيف تخصص وتوسع جراجات الوظائف بإضافة سيارات جديدة لتحسين تجربة اللعب الخاصة بك → تعلّم المزيد الآن"
sidebar_label: إضافة سيارات لجراج الوظائف
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل ترغب في تغيير أو توسيع السيارات المتاحة في جراجات الوظائف الخاصة بك؟ في الأسفل سنشرح لك كيف تفعل ذلك وما هي الخطوات التي يجب اتباعها!

<InlineVoucher />

## الإعدادات

يتم إضافة سيارات إضافية إلى جراجات الوظائف عبر FTP. للقيام بذلك، اتصل بسيرفر الألعاب الخاص بك عبر FTP. إذا لم تكن تعرف كيفية استخدام FTP بعد، يرجى الاطلاع على [دليل وصول FTP](gameserver-ftpaccess.md) الخاص بنا.

بمجرد الاتصال عبر FTP، انتقل إلى مجلد موارد ESX وافتح مجلد esx_addons. يجب أن تبدو بنية المجلدات كالتالي: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

الآن اختر إما وظيفة الإسعاف أو الشرطة، على سبيل المثال، وافتح ملف الإعدادات `config.lua` من الموارد.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)

في ملف الإعدادات، يجب تعديل قسم `Config.AuthorizedVehicles`. يمكنك البحث عنه باستخدام خاصية البحث ثم تعديله أو توسيعه حسب رغبتك:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
تأكد من وجود فاصلة في نهاية السطر السابق عند إضافة سيارات جديدة، وإلا قد تحدث مشاكل.
:::

## الخلاصة

إذا اتبعت جميع الخطوات، يجب أن تكون قد خصصت أو وسعت جراج الوظائف بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />