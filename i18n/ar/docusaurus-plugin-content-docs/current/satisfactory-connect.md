---
id: satisfactory-connect
title: "Satisfactory: الاتصال بالسيرفر"
description: "اكتشف كيف تتصل وتدير سيرفر ألعاب Satisfactory الخاص بك بفعالية لتجربة لعب سلسة → تعلّم المزيد الآن"
sidebar_label: الاتصال بالسيرفر
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="كيفية إنشاء سيرفر Satisfactory على ZAP ورفع حفظ اللعبة الخاص بك" description="تحس إنك تفهم أفضل لما تشوف الأشياء على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي بيشرح كل حاجة بالتفصيل. سواء كنت مستعجل أو بتحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>

:::info
لو أنت بالفعل تستخدم تخطيط لوحة مفاتيح QWERTY، ما تحتاج تعمل الخطوات دي، بس اضغط CTRL + SHIFT + L وافتح الكونسول بـ ~
:::

عشان تتصل بسيرفر ألعاب Satisfactory الخاص بك، لازم تفتح كونسول اللعبة، وفي طريقتين لعمل ده.

<InlineVoucher />

## فتح الكونسول

### تغيير تخطيط لوحة المفاتيح
تقدر تغير تخطيط لوحة المفاتيح بسهولة في خطوات بسيطة.
شغّل لعبتك Satisfactory لحد ما توصل للقائمة الرئيسية.
اضغط دلوقتي `CTRL + Shift`، المفروض تخطيط لوحة المفاتيح يتغير لـ `EN`.
تقدر تتأكد بسهولة لو ده حصل، ارجع للديسكتوب وشوف لو في شريط المهام مكتوب `EN` في الركن السفلي اليمين.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

لو التغيير تم بنجاح، ارجع للعبة، واضغط دلوقتي `CTRL + SHIFT + L`
اضغط دلوقتي `^` على لوحة المفاتيح، المفروض يفتح الكونسول.

### تغيير الزر اللي بيفتح الكونسول
اضغط `مفتاح ويندوز + R` أو ابحث في قائمة ابدأ عن `تشغيل`
انسخ المسار ده جواه:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

واضغط إنتر.

افتح دلوقتي ملف Input.ini بأي محرر تختاره (مثلاً Notepad)

:::info
لو الملف مش موجود لسه، اعمله جديد.
:::

ضيف النص ده في الملف:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

احفظ الملف وأعد تشغيل اللعبة - دلوقتي تقدر تفتح الكونسول بالضغط على `F6`

## الاتصال بسيرفر ألعاب Satisfactory الخاص بك
انسخ عنوان IP من لوحة المعلومات الخاصة بالسيرفر:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

افتح الكونسول في اللعبة، زي ما شرحنا قبل كده

اكتب دلوقتي `open IP-Adress-of-Your-Server` جواه.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

واضغط إنتر.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

أنت دلوقتي داخل على سيرفر Satisfactory الخاص بك!

## الـ HUB
الـ HUB موجود بالفعل في العالم، تقدر تدمره لو حبيت بالضغط على `F` وتحطه في مكان تاني.
هتلاقي الـ HUB بسهولة لما تتبع العلامة.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## الحفظ التلقائي
السيرفر بيحفظ تقدمك كل 5 دقايق، تقدر تشوف الحفظات دي في مدير الحفظات في لوحة المعلومات الخاصة بالسيرفر.
هيحتفظ دايمًا بآخر 6 حفظات (30 دقيقة) من التقدم.

<InlineVoucher />