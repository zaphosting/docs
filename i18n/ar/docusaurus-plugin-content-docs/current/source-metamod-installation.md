---
id: source-metamod-installation
title: تثبيت Source Mod و Meta Mod على السيرفر
description: "اكتشف كيف تعزز سيرفر ألعاب محرك Source الخاص بك باستخدام Source- و Metamod لتخصيص وإدارة متقدمة → تعلّم المزيد الآن"
sidebar_label: التثبيت
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ما هو SM و MM أصلاً؟

Source- و Metamod هما امتدادان للعبة Half Life 2، يتيحان لك تخصيص سيرفر ألعاب محرك Source (مثل CS: S، CS: GO، DoD: S، TF2، وغيرها) بشكل أعمق من المعتاد. يشمل ذلك، على سبيل المثال، استخدام الإضافات وإدارة سيرفرك بشكل موسع.

<InlineVoucher />

## تثبيت SM / MM

### تحميل الملفات

أول شيء، تحتاج لتحميل الامتدادات نفسها. من المهم دائماً استخدام أحدث الإصدارات (**المستقرة**) لضمان عملها بشكل كامل ومتوافق. يمكنك تحميل أحدث الإصدارات من المواقع التالية:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
سيرفرات ألعاب محرك Source في ZAP-Hosting عادةً تعمل على نظام تشغيل Linux. لذلك، تحتاج لتحميل نسخة Linux من الامتدادات.
:::

### فك ضغط الملفات

بعد تحميل الامتدادات، ستحصل على ملفين مضغوطين (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar)، يجب فك ضغطهم قبل الرفع. يمكنك استخدام Winrar أو 7zip أو برامج مشابهة.

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

بعد فك الضغط، ستحصل على مجلد addons و cfg:

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### رفع الملفات

بعد إتمام الخطوات السابقة، يبدأ التثبيت الفعلي. يجب الاتصال بالسيرفر عبر FTP لرفع مجلد الامتدادات.

يجب رفع الملفات إلى الدليل الرئيسي. الدليل الرئيسي موجود ضمن هيكل المجلدات التالي:

| اللعبة | المجلد  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

هيكل المجلدات يجب أن يبدو هكذا بعد الرفع:

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## تحقق من تثبيت SM / MM

هناك طريقتان للتأكد من تثبيت الامتدادات بشكل صحيح:

1. من داخل اللعبة عبر الكونسول
2. عبر Remote Console (HLSW - RCON)

### التحقق من الإصدار عبر الأوامر

يمكنك اتباع الخطوات التالية للتحقق من إصدار السيرفر:

1. اتصل بالسيرفر داخل اللعبة
2. افتح الكونسول واكتب الأمر التالي:

```
sm version
meta version
```

ستظهر لك النتيجة التالية:

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 التحقق من الإصدار عبر RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

اتبع الخطوات التالية للتحقق من إصدار سيرفرك:

1. أدخل عنوان IP في الأعلى تحت IP / Port
2. اذهب إلى إعدادات Rcon أسفل الصفحة
3. أدخل كلمة مرور Rcon الخاصة بك تحت Rcon password
4. افتح الكونسول واكتب الأمر التالي:

```
sm version
meta version
```

ستحصل على النتيجة التالية:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

حمّل HLSW من هنا: http://www.hlsw.net/hlsw/download/

<InlineVoucher />