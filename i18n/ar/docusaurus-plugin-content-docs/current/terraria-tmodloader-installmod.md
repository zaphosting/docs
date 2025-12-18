---
id: terraria-tmodloader-installmod
title: "تيراريا: تثبيت المودات (tModLoader)"
description: "اكتشف كيف تثبت وتفعل مودات tModLoader لسيرفر ألعاب تيراريا بسهولة لتحسين تجربتك في اللعب → تعلّم المزيد الآن"
sidebar_label: تثبيت المودات (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## تثبيت المودات عبر tModLoader

tModLoader لتيراريا هو تعديل مهم يسمح بتحميل المودات على سيرفر ألعاب تيراريا الخاص بك. التثبيت يتم عن طريق السحب والإفلات وبخطوة واحدة فقط على سيرفرك، لذلك العملية سهلة جدًا وتتم خلال دقائق قليلة.

## تثبيت tModLoader على جهازك

إذا لم تقم بتثبيت tModLoader بعد، يمكنك تحميله مباشرة من Steam مجانًا. فقط ابحث عن tModLoader في متجر Steam أو استخدم الرابط التالي: [tModLoader في متجر Steam](https://store.steampowered.com/app/1281930/tModLoader/)

بعد التحميل والتثبيت يمكنك تشغيل tModLoader مباشرة من Steam.

## إضافة مودات على جهازك

بمجرد دخولك للقائمة الرئيسية، افتح مجلد المودات الخاص بك، وذلك بالضغط على **Mods** ثم **Manage Mods** ثم **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

في المجلد المفتوح الآن، والذي يكون افتراضيًا تحت المسار **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods** يمكنك وضع المودات التي تريدها.
في هذا المثال نقوم بتثبيت مود Calamity.

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
يجب أن يكون اسم المود دائمًا ينتهي بـ **.tmod**، وإلا لن يتم تحميله من السيرفر!
:::

بعدها يمكنك إغلاق المجلد، ثم اضغط على **Back** في اللعبة ثم على **Mods**:

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

هناك سترى المود الذي أضفته ويمكنك تفعيله بالضغط على **Disabled**:

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

لتفعيل المود، اضغط على **Reload Mods**، بعدها يمكنك إغلاق اللعبة والبدء بتثبيت المود على سيرفرك.

## تثبيت المودات على سيرفرك

لكي تتمكن من تثبيت المود على سيرفرك، يمكنك الاتصال بالسيرفر عبر FTP، طريقة العمل تجدها هنا: [الوصول عبر FTP](gameserver-ftpaccess.md)

توجه إلى المسار التالي: /g******/terraria/mods/ حيث تضع ملف **.tmod** الذي استخدمته سابقًا:

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
إذا لم يكن هناك ملف باسم **enabled.json** يجب عليك تشغيل السيرفر أولًا، بعدها سيظهر الملف. بدلاً من ذلك يمكنك إنشاء الملف بنفسك.
:::

بعدها افتح ملف **enabled.json** عبر **النقر بزر الفأرة الأيمن > تحرير** وأضف اسم المود الخاص بك، ويجب أن يبدو هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

إذا أردت إضافة عدة مودات، يمكنك فعل ذلك هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
يرجى الانتباه إلى ضرورة وضع فاصلة بعد كل اسم مود، ما عدا اسم آخر مود فقط!
:::

الآن يمكنك إغلاق اتصال FTP، تشغيل السيرفر والاتصال به باستخدام tModLoader الذي حملته من Steam.

بالضغط على **ESC**، ثم اختيار **Settings** ثم **Mod Configuration** يمكنك رؤية المودات المحملة على السيرفر:

<InlineVoucher />