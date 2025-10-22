---
id: fivem-installels
title: "FiveM: تثبيت ELS على سيرفرك"
description: "اكتشف كيف تضبط وتفعل ELS-FiveM مع carmods لتحسين تجربة اللعب على سيرفرك → تعلّم المزيد الآن"
sidebar_label: تثبيت ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## الاتصال بـ FTP

عشان تقدر تثبت الريسورس، لازم تضبط [الوصول عبر FTP](gameserver-ftpaccess.md).

## التحضير

أول شيء، ننزل أحدث نسخة من [ELS-FiveM](https://github.com/MrDaGree/ELS-FiveM/releases/latest)، تلاقيها تحت "Assets"

بعد ما ننزل ELS، نفك الضغط عن الملف ونفتح مجلد "ELS-FiveM".

## الإعداد

هسّه نضبط ELS-FiveM بنسخ ملف `vcf.default.lua` ونعيد تسميته لـ `vcf.lua`.

:::info
ملاحظة: لا تحذف ملف `vcf.default.lua` القديم.
:::

تقدر تعدل إعدادات إضافية في "config.lua"، بس راح نخليها على الإعدادات الافتراضية.

## رفع الريسورس

تقدر تثبت ELS-FiveM برفع الملفات عن طريق السحب والإفلات داخل مجلد "resources".

بعد الرفع، افتح ملف server.cfg الموجود في مجلد server-data:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

ضمن باقي أوامر بدء الريسورس، تقدر تضيف أمر بدء ELS-FiveM.

بعدين أعد تشغيل السيرفر وراح يكون ELS-FiveM متاح داخل اللعبة!

## إعداد Carmods

عشان تضيف carmods جديدة لـ ELS-FiveM، أول شيء تحتاج ملف إعدادات ELS-Config اللي غالبًا تلاقيه في مجلد carmod اللي نزلته. عادةً اسمه `autoname.xml`، وفي حالتنا اسمه `scpdvic.xml`.

ارفعهم داخل مجلد "vcf" في مجلد ELS-FiveM عبر FTP.

بعد ما ترفع الملف، افتح ملف 'vcf.lua' في مجلد ELS-FiveM.

:::info
تأكد دايمًا إن السطر السابق ينتهي بفاصلة.
:::

خلصنا! لازم يكون Carmod مفعل واشتغل مع ELS بعد إعادة تشغيل السيرفر.

<InlineVoucher />