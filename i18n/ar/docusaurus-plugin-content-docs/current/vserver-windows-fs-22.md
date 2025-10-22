---
id: vserver-windows-fs-22
title: "VPS: إعداد سيرفر مخصص لـ Farming Simulator 2022 على ويندوز"
description: "اكتشف كيفية إعداد سيرفر مخصص لـ Farming Simulator 2022 على VPS ويندوز الخاص بك لتجربة لعب جماعية سلسة → تعلّم المزيد الآن"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS بنظام ويندوز وتريد تثبيت خدمة سيرفر مخصص لـ Farming Simulator 2022 عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<InlineVoucher />

## التحضير
مطلوب سيرفر يعمل بنظام Windows Server 2016/2019 مع معالج رباعي النوى بسرعة 2.4 جيجاهرتز على الأقل (AMD/Intel) وذاكرة RAM بسعة 2 جيجابايت على الأقل (DDR3/4) و6 جيجابايت مساحة خالية على القرص (يفضل SSD أو أفضل). يجب أن يكون السيرفر بنظام 64 بت.  
بالإضافة إلى ذلك، تحتاج إلى ترخيص لعبة خاص (ليس نسخة Steam)، بالإضافة إلى عنوان IPv4 عام. لا يتطلب السيرفر المخصص وجود بطاقة رسومات أو بطاقة صوت.  
حسب كمية التعديلات أو الإضافات (Mods أو DLCs) على السيرفر المخصص، قد تحتاج إلى موارد أكثر. 

## الخطوة 1 شراء الترخيص الرقمي

مطلوب نسخة رقمية من Farming Simulator 2022، لا يمكن أن تكون نسخة Steam.  
يمكن شراء النسخة الرقمية من [موقع Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
بعد شراء النسخة الرقمية، يمكن تنزيل اللعبة عبر الإنترنت من خلال الرابط الموجود في البريد الإلكتروني الذي استلمته من Giants عبر هذا [الرابط](https://eshop.giants-software.com/downloads.php).  
:::info
مهم: في البريد الإلكتروني ستجد مفتاح اللعبة (GameKey) اللازم للتحميل وكذلك لتفعيل التثبيت لاحقًا. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## الخطوة 2 تنزيل Farming Simulator مباشرة على سيرفر ويندوز الخاص بك

اتصل بسيرفر ويندوز عبر [الوصول الأولي (RDP)](vserver-windows-userdp.md). بعد الاتصال، افتح المتصفح واذهب إلى [الرابط](https://eshop.giants-software.com/downloads.php) الموجود في البريد مرة أخرى. ثم أدخل مفتاح اللعبة واختر التحميل لنظام Windows8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

سيتم تنزيل الملف ويجب أن يكون موجودًا في مجلد التنزيلات (قد يختلف مجلد التنزيلات).

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

انقر مرتين على الملف لفتحه وتشغيل Setup.exe.  
بعدها اقرأ شروط الاستخدام ووافق عليها. يمكن التثبيت كـ Standard أو Custom، وعادةً ما يكون Standard كافيًا.  
أخيرًا، اضغط على تثبيت وسيبدأ تثبيت Farming Simulator 2022، وقد يستغرق ذلك بضع دقائق.

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

عند الانتهاء، ستظهر رسالة يمكن تأكيدها بالضغط على "إنهاء".

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

تم الآن الانتهاء من التثبيت الأساسي.

## الخطوة 3 تفعيل اللعبة وتكوين السيرفر المخصص

الآن يجب تشغيل Farming Simulator. يجب أن يكون هناك اختصار على سطح المكتب، وإذا لم يكن موجودًا يمكن تشغيله من قائمة ويندوز.  
يمكن تجاهل أو إغلاق الأخطاء المتعلقة بعدم وجود بطاقة رسومات أو ما شابه بـ "لا" أو "إلغاء". فقط يحتاج Farming Simulator إلى التشغيل لإدخال المفتاح.

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

الآن يجب تعيين أو تعديل اسم المستخدم وكلمة المرور في إعدادات السيرفر المخصص (Config) لكي تتمكن من تسجيل الدخول إلى واجهة الويب الخاصة بالسيرفر.  
يمكن العثور على ملف الإعدادات في التثبيت الافتراضي تحت المسار:  
`C:\Program Files (x86)\Farming Simulator 2022` باسم `"dedicatedServer.xml"`.  
يمكنك تخصيص بيانات الدخول بحرية.

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## الخطوة 4 تشغيل سيرفر مخصص Farming Simulator 2022

لتشغيل السيرفر المخصص، يجب تشغيل `"dedicatedServer.exe"` في نفس المجلد الذي يحتوي على `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

بعدها يمكن فتح واجهة الويب عبر `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

يمكن تسجيل الدخول باستخدام بيانات الدخول التي تم تعيينها أو قراءتها من `"dedicatedServer.xml"`.  
التكوين الإضافي واضح في واجهة الويب ويمكنك تعديله بسهولة حسب رغبتك.

## الخطوة 5 فتح المنافذ في جدار الحماية

يجب أن يكون السيرفر متاحًا للعامة للعب مع الأصدقاء. لهذا، يجب فتح منافذ السيرفر في جدار الحماية الخاص بويندوز.  
يجب فتح المنافذ 10823 و 8080 لبروتوكول TCP.  
المنفذ 10823 هو منفذ سيرفر الألعاب، و8080 هو منفذ الويب لواجهة الويب، وفتح منفذ الويب اختياري فقط إذا كنت تريد إدارة السيرفر عن بعد، حيث يمكن الإدارة محليًا عبر RDP.  
كيفية فتح المنافذ على ويندوز: [فتح المنافذ (جدار الحماية)](vserver-windows-port.md).

بعد فتح المنافذ، يصبح السيرفر متاحًا للعامة إذا كان قيد التشغيل.

## الخلاصة

مبروك، لقد قمت بتثبيت وتكوين سيرفر Farming Simulator 2022 بنجاح على VPS الخاص بك! إذا كان لديك أي أسئلة أو مشاكل، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />