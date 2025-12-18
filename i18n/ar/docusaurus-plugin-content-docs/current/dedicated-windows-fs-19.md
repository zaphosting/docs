---
id: dedicated-windows-fs-19
title: "سيرفر مخصص: إعداد سيرفر Farming Simulator 2019 مخصص على ويندوز"
description: "اكتشف كيف تضبط سيرفر Farming Simulator 2019 مخصص على VPS ويندوز أو سيرفر مخصص بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة

هل لديك VPS ويندوز أو سيرفر مخصص وتريد تثبيت خدمة سيرفر Farming Simulator 2019 المخصص عليه؟ أنت في المكان الصح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

## التحضير

مطلوب سيرفر يعمل بنظام Windows Server 2016/2019 مع معالج رباعي النوى بسرعة 2.4 جيجاهرتز على الأقل (AMD/Intel) وذاكرة RAM لا تقل عن 2 جيجابايت (DDR3/4) و6 جيجابايت مساحة خالية على القرص (SSD أو أفضل، مفضل). يجب أن يكون السيرفر بنظام 64 بت.  
بالإضافة إلى ذلك، تحتاج إلى رخصة لعبة أصلية (ليست نسخة Steam)، وعنوان IPv4 عام. لا حاجة لبطاقة رسوميات أو بطاقة صوت لسيرفر الألعاب المخصص.  
حسب كمية التعديلات أو الإضافات (Mods أو DLCs) على السيرفر، قد تحتاج موارد أكثر.

## الخطوة 1 شراء الرخصة الرقمية

مطلوب نسخة رقمية من Farming Simulator 2019، لا يمكن أن تكون نسخة Steam.  
يمكن شراء النسخة الرقمية من [موقع Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
بعد الشراء، يمكن تحميل اللعبة أونلاين من خلال الرابط الموجود في البريد الإلكتروني الذي تستلمه من Giants عبر هذا [الرابط](https://eshop.giants-software.com/downloads.php).  
:::info
مهم: في البريد ستجد مفتاح اللعبة (GameKey) اللازم للتحميل وكذلك لتفعيل التثبيت لاحقًا. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## الخطوة 2 تحميل Farming Simulator مباشرة على سيرفر ويندوز

اتصل بسيرفر ويندوز عبر [الوصول الأولي (RDP)](vserver-windows-userdp.md). بعد الاتصال، افتح المتصفح وادخل على [الرابط](https://eshop.giants-software.com/downloads.php) الموجود في البريد مرة أخرى. ثم أدخل مفتاح اللعبة واختر تحميل نسخة Windows8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

سيتم تحميل الملف ويجب أن يكون في مجلد التنزيلات (قد يختلف مجلد التنزيلات).

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

انقر مرتين على الملف لفتحه وتشغيل Setup.exe.  
اقرأ شروط الاستخدام ووافق عليها. بعد ذلك، يمكن التثبيت إما بطريقة Standard أو Custom، وعادةً Standard تكفي.  
أخيرًا، اضغط تثبيت وسيبدأ تثبيت Farming Simulator 2019، قد يستغرق بضع دقائق.

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

عند الانتهاء، ستظهر رسالة تأكيد يمكن الضغط على "Finish".

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

الآن التثبيت الأساسي اكتمل.

## الخطوة 3 تفعيل اللعبة وضبط سيرفر الألعاب المخصص

شغل الآن Farming Simulator. يجب أن تجد اختصار على سطح المكتب، وإذا لم يكن موجودًا، يمكنك تشغيله من قائمة ويندوز.  
يمكن تجاهل أو إغلاق الأخطاء المتعلقة بعدم وجود بطاقة رسوميات أو ما شابه بـ "No" أو "Cancel". اللعبة تحتاج فقط للتشغيل لإدخال المفتاح.

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

بعد التعرف على المفتاح، ستظهر رسالة تأكيد.

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

الآن يجب تعيين أو تعديل اسم المستخدم وكلمة المرور في إعدادات سيرفر الألعاب المخصص، حتى تتمكن من تسجيل الدخول إلى واجهة الويب الخاصة بالسيرفر.  
الإعدادات موجودة في التثبيت الافتراضي تحت  
`C:\Program Files (x86)\Farming Simulator 2019` باسم `"dedicatedServer.xml"`.  
يمكنك تخصيص بيانات الدخول بحرية.

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## الخطوة 4 تشغيل سيرفر Farming Simulator 2019 المخصص

لتشغيل السيرفر المخصص، شغّل `"dedicatedServer.exe"` في نفس المجلد الذي يحتوي على `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

بعدها يمكن فتح واجهة الويب عبر `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

يمكن تسجيل الدخول باستخدام بيانات الدخول التي ضبطتها أو قرأتها من `"dedicatedServer.xml"`.  
الإعدادات الإضافية واضحة في واجهة الويب ويمكن تعديلها بسهولة حسب رغبتك.

## الخطوة 5 فتح المنافذ في الجدار الناري

طبعًا السيرفر لازم يكون متاح للعب مع الأصدقاء. لهذا، يجب فتح منافذ السيرفر في جدار ويندوز الناري.  
المنافذ 10823 و8080 يجب أن تُفتح لبروتوكول TCP. 10823 هو منفذ سيرفر الألعاب و8080 هو منفذ الويب لواجهة الإدارة، وفتح منفذ الويب اختياري فقط إذا كنت تحتاجه، لأن الإدارة ممكنة محليًا عبر RDP.  
كيفية فتح المنافذ على ويندوز: [فتح المنافذ (جدار ناري)](vserver-windows-port.md).

بعد فتح المنافذ وتشغيل السيرفر، سيكون السيرفر متاحًا للعامة.