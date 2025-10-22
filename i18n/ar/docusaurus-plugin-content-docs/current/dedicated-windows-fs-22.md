---
id: dedicated-windows-fs-22
title: "سيرفر مخصص: إعداد سيرفر Farming Simulator 2022 المخصص على ويندوز"
description: "اكتشف كيفية إعداد سيرفر Farming Simulator 2022 المخصص على VPS ويندوز أو سيرفر مخصص خاص بك → تعلّم المزيد الآن"
sidebar_label: Farming Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS ويندوز أو سيرفر مخصص وتريد تثبيت خدمة سيرفر Farming Simulator 2022 المخصص عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<InlineVoucher />

## التحضير
مطلوب سيرفر يعمل بنظام Windows Server 2016/2019 مع معالج رباعي النوى بسرعة 2.4 جيجاهرتز على الأقل (AMD/Intel) وذاكرة RAM بسعة 2 جيجابايت على الأقل (DDR3/4) و6 جيجابايت مساحة خالية على القرص (يفضل SSD أو أفضل). يجب أن يعمل السيرفر على بنية 64 بت.  
بالإضافة إلى ذلك، مطلوب ترخيص لعبة خاص (ليس نسخة Steam)، وكذلك عنوان IPv4 عام. لا يتطلب سيرفر الألعاب بطاقة رسومات أو بطاقة صوت.  
حسب كمية التعديلات أو الإضافات (Mods أو DLCs) على السيرفر المخصص، قد تحتاج إلى موارد أكثر. 

## الخطوة 1 شراء الترخيص الرقمي

مطلوب نسخة رقمية من Farming Simulator 2022، لا يمكن أن تكون نسخة Steam.  
يمكن شراء النسخة الرقمية من [موقع Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
بعد شراء النسخة الرقمية، يمكن تحميل Farming Simulator عبر الإنترنت من خلال الرابط التالي [الرابط](https://eshop.giants-software.com/downloads.php) الموجود في البريد الإلكتروني الذي استلمته من Giants.  
:::info
مهم: في البريد ستجد مفتاح اللعبة (GameKey) اللازم للتحميل وكذلك لتفعيل التثبيت لاحقًا. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/MXkbf8pNSYJAmGt/preview)

## الخطوة 2 تحميل Farming Simulator مباشرة على سيرفر ويندوز الخاص بك

اتصل عبر [الوصول الأولي (RDP)](vserver-windows-userdp.md) إلى سيرفر ويندوز الخاص بك. بعد الاتصال، افتح المتصفح واذهب إلى [الرابط](https://eshop.giants-software.com/downloads.php) الموجود في البريد مرة أخرى. ثم أدخل مفتاح اللعبة واختر التحميل لنظام Windows8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/wDa758WS8aKDBwE/preview)

سيتم تحميل الملف ويجب أن يكون موجودًا في مجلد التنزيلات (قد يختلف مجلد التنزيلات).

![](https://screensaver01.zap-hosting.com/index.php/s/3KZ9wstGSz6JTke/preview)

انقر مرتين على الملف لفتحه وتشغيل Setup.exe.  
بعدها اقرأ شروط الاستخدام (TOS) ووافق عليها. بعد ذلك، يمكن التثبيت كـ Standard أو Custom، عادةً Standard يكفي.  
أخيرًا، اضغط على تثبيت وسيتم تثبيت Farming Simulator 2022، قد يستغرق الأمر بضع دقائق. 

![](https://screensaver01.zap-hosting.com/index.php/s/A4daMGF35a6aCj4/preview)

بمجرد انتهاء التثبيت، ستظهر رسالة يمكن تأكيدها بالضغط على "إنهاء". 

![](https://screensaver01.zap-hosting.com/index.php/s/EWcaeSD8HacP8je/preview)

الآن التثبيت الأساسي مكتمل. 

## الخطوة 3 تفعيل اللعبة وتكوين السيرفر المخصص

الآن يجب تشغيل Farming Simulator. يجب أن يكون هناك اختصار على سطح المكتب، وإذا لم يكن موجودًا يمكن تشغيله من قائمة ويندوز.  
يمكن تجاهل أو إغلاق الأخطاء المتعلقة بعدم وجود بطاقة رسومات أو ما شابه بـ "لا" أو "إلغاء". فقط يجب تشغيل اللعبة لإدخال المفتاح. 

![](https://screensaver01.zap-hosting.com/index.php/s/5FcRkkxajWFN6D5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/FXzNNeaBzAP794w/preview)

الآن يجب تعيين أو تعديل اسم المستخدم وكلمة المرور في إعدادات السيرفر المخصص حتى يمكن تسجيل الدخول إلى واجهة الويب الخاصة بالسيرفر.  
الإعدادات موجودة في التثبيت الافتراضي تحت  
`C:\Program Files (x86)\Farming Simulator 2022` باسم `"dedicatedServer.xml"`.  
يمكن تخصيص بيانات الدخول بحرية. 

![](https://screensaver01.zap-hosting.com/index.php/s/LHkeCNSnEtE5Rd8/preview)

## الخطوة 4 تشغيل سيرفر Farming Simulator 2022 المخصص

لتشغيل السيرفر المخصص، يجب تشغيل `"dedicatedServer.exe"` في نفس المجلد الذي يحتوي على `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/43ZYGoNiE7npxDz/preview)

بعدها يمكن فتح واجهة الويب عبر `https://SERVER-IP:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/RbfZFQZkRSX4okr/preview)

يمكن تسجيل الدخول باستخدام بيانات الدخول التي تم تعيينها أو قراءتها من `"dedicatedServer.xml"`.  
التكوين الإضافي واضح في واجهة الويب ويمكن تنفيذه ببضع نقرات حسب رغبتك الشخصية. 

## الخطوة 5 فتح المنافذ في جدار الحماية

يجب أن يكون السيرفر متاحًا للعامة للعب مع الأصدقاء. لهذا، يجب فتح منافذ السيرفر في جدار الحماية الخاص بويندوز.  
يجب فتح المنافذ 10823 و 8080 لبروتوكول TCP. 10823 هو منفذ سيرفر الألعاب و8080 هو منفذ الويب لواجهة الويب، منفذ الويب يفتح فقط إذا كنت بحاجة إليه، حيث يمكن إدارة السيرفر محليًا عبر RDP على ويندوز.  
كيفية فتح المنافذ على ويندوز: [فتح المنافذ (جدار الحماية)](vserver-windows-port.md).  

بعد فتح المنافذ، يصبح السيرفر متاحًا للعامة إذا كان قيد التشغيل. 

<InlineVoucher />