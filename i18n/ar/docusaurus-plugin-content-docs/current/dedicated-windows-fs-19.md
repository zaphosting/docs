---
id: dedicated-windows-fs-19
title: "سيرفر مخصص: إعداد سيرفر Farming Simulator 2019 مخصص على ويندوز"
description: "اكتشف كيفية إعداد سيرفر ألعاب Farming Simulator 2019 مخصص على VPS ويندوز أو سيرفر مخصص بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة

هل لديك VPS ويندوز أو سيرفر مخصص وتريد تثبيت خدمة سيرفر ألعاب Farming Simulator 2019 المخصص عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<InlineVoucher />

## التحضير

مطلوب سيرفر يعمل بنظام Windows Server 2016/2019 مع معالج رباعي النوى بسرعة 2.4 جيجاهرتز على الأقل (AMD/Intel) وذاكرة RAM بسعة 2 جيجابايت على الأقل (DDR3/4) وقرص صلب بسعة 6 جيجابايت فارغة (SSD أو أفضل، مفضل). يجب أن يعمل السيرفر على بنية 64 بت.  
بالإضافة إلى ذلك، مطلوب ترخيص لعبة خاص (ليس نسخة Steam)، بالإضافة إلى عنوان IPv4 عام. لا يتطلب سيرفر الألعاب بطاقة رسومات أو بطاقة صوت.  
حسب مدى تعديل السيرفر المخصص أو إضافة مودات أو DLCs، قد تكون هناك حاجة لموارد أكثر. 

## الخطوة 1 شراء الترخيص الرقمي

مطلوب نسخة رقمية من Farming Simulator 2019، لا يمكن أن تكون نسخة Steam.  
يمكن شراء النسخة الرقمية من [موقع Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
بعد شراء النسخة الرقمية، يمكن تحميل Farming Simulator عبر الإنترنت من خلال الرابط التالي [الرابط](https://eshop.giants-software.com/downloads.php) الموجود في البريد الإلكتروني الذي استلمته من Giants.  
:::info
مهم: في البريد ستجد مفتاح اللعبة (GameKey) الذي تحتاجه للتحميل وكذلك لتفعيل التثبيت لاحقًا. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## الخطوة 2 تحميل Farming Simulator مباشرة على سيرفر ويندوز الخاص بك

اتصل عبر [الوصول الأولي (RDP)](vserver-windows-userdp.md) إلى سيرفر ويندوز الخاص بك. بعد الاتصال، افتح المتصفح واذهب إلى [الرابط](https://eshop.giants-software.com/downloads.php) الموجود في البريد مرة أخرى. ثم أدخل مفتاح اللعبة واختر التحميل لويندوز 8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

سيتم تحميل الملف ويجب أن يكون موجودًا في مجلد التنزيلات. (مجلد التنزيلات قد يختلف)

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

بنقرة مزدوجة يتم فتح الملف ويمكن تشغيل Setup.exe.  
بعدها اقرأ شروط الاستخدام ووافق عليها. بعد ذلك يمكن التثبيت كـ Standard أو Custom، عادةً Standard يكفي.  
أخيرًا، اضغط على تثبيت وسيتم تثبيت Farming Simulator 2019، قد يستغرق الأمر بضع دقائق. 

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

بمجرد انتهاء التثبيت، ستظهر رسالة يمكن تأكيدها بالضغط على "إنهاء". 

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

الآن التثبيت الأساسي اكتمل. 

## الخطوة 3 تفعيل اللعبة وتكوين سيرفر الألعاب المخصص

الآن يجب تشغيل Farming Simulator. يجب أن يكون هناك اختصار على سطح المكتب، وإذا لم يكن موجودًا يمكن تشغيله من قائمة ويندوز.  
يمكن تجاهل أو إغلاق الأخطاء المتعلقة بعدم وجود بطاقة رسومات أو ما شابه بـ "لا" أو "إلغاء". فقط يجب تشغيل اللعبة لإدخال المفتاح. 

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

بمجرد التعرف على المفتاح، ستظهر رسالة تأكيد. 

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

الآن يجب تعيين أو تعديل اسم المستخدم وكلمة المرور في إعدادات سيرفر الألعاب المخصص، حتى يمكن تسجيل الدخول إلى واجهة الويب الخاصة بالسيرفر.  
الإعدادات موجودة في التثبيت الافتراضي تحت  
`C:\Program Files (x86)\Farming Simulator 2019` باسم `"dedicatedServer.xml"`.  
يمكن تخصيص بيانات الدخول بحرية. 

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## الخطوة 4 تشغيل سيرفر Farming Simulator 2019 المخصص

لتشغيل السيرفر المخصص، يجب تشغيل `"dedicatedServer.exe"` في نفس المجلد الذي يحتوي على `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

بعدها يمكن فتح واجهة الويب عبر `https://SERVER-IP:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

يمكن تسجيل الدخول باستخدام بيانات الدخول التي تم تعيينها أو قراءتها من `"dedicatedServer.xml"`.  
التكوين الإضافي واضح في واجهة الويب ويمكن تنفيذه ببضع نقرات حسب رغبتك الشخصية. 

## الخطوة 5 فتح المنافذ في جدار الحماية

يجب أن يكون السيرفر متاحًا للعامة للعب مع الأصدقاء. لهذا الغرض، يجب فتح منافذ السيرفر في جدار الحماية الخاص بويندوز. يجب فتح المنافذ 10823 و 8080 لبروتوكول TCP.  
10823 هو منفذ سيرفر الألعاب و8080 هو منفذ الويب لواجهة الويب، منفذ الويب يجب فتحه فقط إذا كنت بحاجة إليه، حيث يمكن الإدارة محليًا على سيرفر ويندوز عبر RDP.  
كيفية فتح المنافذ على ويندوز: [فتح المنافذ (جدار الحماية)](vserver-windows-port.md). 

بعد فتح المنافذ، يصبح السيرفر متاحًا للعامة إذا كان قيد التشغيل. 

<InlineVoucher />