---
id: vserver-windows-fs-19
title: "VPS: إعداد سيرفر مخصص لـ Farming Simulator 2019 على ويندوز"
description: "تعلم كيفية إعداد سيرفر مخصص لـ Farming Simulator 2019 على VPS ويندوز لتجربة لعب جماعية سلسة → تعرف على المزيد الآن"
sidebar_label: Farming Simulator 2019
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS يعمل بنظام ويندوز وتريد تثبيت خدمة سيرفر مخصص لـ Farming Simulator 2019 عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<InlineVoucher />

## التحضير

مطلوب سيرفر يعمل بنظام Windows Server 2016/2019 مع معالج رباعي النواة بسرعة 2.4 جيجاهرتز على الأقل (AMD/Intel) وذاكرة RAM بسعة 2 جيجابايت على الأقل (DDR3/4) و6 جيجابايت مساحة خالية على القرص (يفضل SSD أو أفضل). يجب أن يعمل السيرفر على بنية 64 بت.  
بالإضافة إلى ذلك، تحتاج إلى ترخيص لعبة خاص (ليس نسخة Steam)، بالإضافة إلى عنوان IPv4 عام. لا يتطلب السيرفر المخصص وجود بطاقة رسومات أو بطاقة صوت.  
حسب كمية التعديلات أو الإضافات (Mods أو DLCs) التي تضيفها للسيرفر المخصص، قد تحتاج إلى موارد أكثر. 

## الخطوة 1 شراء الترخيص الرقمي

مطلوب نسخة رقمية من Farming Simulator 2019، لا يمكن أن تكون نسخة Steam.  
يمكن شراء النسخة الرقمية من [موقع Farming Simulator الرسمي](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
بعد شراء النسخة الرقمية، يمكن تحميل اللعبة عبر الإنترنت من خلال الرابط الموجود في البريد الإلكتروني الذي استلمته من Giants عبر هذا [الرابط](https://eshop.giants-software.com/downloads.php).  
:::info
مهم: في البريد الإلكتروني ستجد مفتاح اللعبة (GameKey) الذي تحتاجه للتحميل وكذلك لتفعيل التثبيت لاحقًا. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## الخطوة 2 تحميل Farming Simulator مباشرة على سيرفر ويندوز الخاص بك

اتصل بسيرفرك عبر [الوصول الأولي (RDP)](vserver-windows-userdp.md). بعد الاتصال، افتح المتصفح واذهب إلى [الرابط](https://eshop.giants-software.com/downloads.php) الموجود في البريد مرة أخرى. ثم أدخل مفتاح اللعبة واختر التحميل لنظام Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

سيتم تحميل الملف ويجب أن يكون موجودًا في مجلد التنزيلات (قد يختلف مجلد التنزيلات حسب الإعدادات).

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

انقر مرتين على الملف لفتحه وتشغيل Setup.exe.  
بعدها اقرأ شروط الاستخدام (TOS) ووافق عليها. يمكن اختيار التثبيت القياسي (Standard) أو المخصص (Custom)، وعادةً ما يكون القياسي كافيًا.  
أخيرًا، اضغط على تثبيت وسيبدأ تثبيت Farming Simulator 2019، وقد يستغرق ذلك بضع دقائق.

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

عند الانتهاء من التثبيت، ستظهر رسالة تأكيد يمكن الضغط على "إنهاء" (Finish).

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

تم الآن الانتهاء من التثبيت الأساسي.

## الخطوة 3 تفعيل اللعبة وتكوين السيرفر المخصص

الآن يجب تشغيل Farming Simulator. يجب أن يكون هناك اختصار على سطح المكتب، وإذا لم يكن موجودًا يمكن تشغيله من قائمة ويندوز.  
يمكن تجاهل أو إغلاق أي رسائل خطأ تتعلق بعدم وجود بطاقة رسومات أو ما شابه بـ "لا" أو "إلغاء". فقط يحتاج Farming Simulator إلى التشغيل لإدخال المفتاح.

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

بعد التعرف على المفتاح، ستظهر رسالة تأكيد.

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

الآن يجب تعيين أو تعديل اسم المستخدم وكلمة المرور في إعدادات السيرفر المخصص (Config) حتى يمكن تسجيل الدخول إلى واجهة الويب الخاصة بالسيرفر.  
يتم العثور على ملف الإعدادات في التثبيت القياسي في المسار:  
`C:\Program Files (x86)\Farming Simulator 2019` تحت اسم `"dedicatedServer.xml"`.  
يمكن تخصيص بيانات الدخول بحرية.

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## الخطوة 4 تشغيل سيرفر Farming Simulator 2019 المخصص

لتشغيل السيرفر المخصص، يجب تشغيل الملف `"dedicatedServer.exe"` في نفس المجلد الذي يحتوي على `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

بعدها يمكن فتح واجهة الويب عبر الرابط `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

يمكن تسجيل الدخول باستخدام بيانات الدخول التي تم تعيينها أو قراءتها من ملف `"dedicatedServer.xml"`.  
التكوين الإضافي واضح في واجهة الويب ويمكن إجراؤه ببضع نقرات حسب رغبتك الشخصية.

## الخطوة 5 فتح المنافذ في جدار الحماية

يجب أن يكون السيرفر متاحًا للعامة للعب مع الأصدقاء. لهذا الغرض، يجب فتح منافذ السيرفر في جدار الحماية الخاص بويندوز.  
يجب فتح المنافذ 10823 و 8080 لبروتوكول TCP.  
المنفذ 10823 هو منفذ سيرفر الألعاب، و8080 هو منفذ الويب لواجهة الويب، وفتح منفذ الويب ضروري فقط إذا كنت تريد إدارة السيرفر عن بُعد، أما الإدارة المحلية فيمكن إجراؤها عبر RDP فقط.  
كيفية فتح المنافذ على ويندوز: [إعادة توجيه المنافذ (جدار الحماية)](vserver-windows-port.md).

بعد فتح المنافذ، يصبح السيرفر متاحًا للعامة إذا كان قيد التشغيل.

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين سيرفر Farming Simulator 2019 بنجاح على VPS الخاص بك! إذا كان لديك أي أسئلة أو مشاكل أخرى، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />