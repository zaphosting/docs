---
id: fivem-editlocalfiles
title: "FiveM: ملفات اللغات (متغيرات اللغة)"
description: "تعلم كيف تخصص وتضيف لغات لموردك لتجربة شخصية → تعلّم المزيد الآن"
sidebar_label: ملفات اللغات (اللغة)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## مقدمة

حابب تغيّر متغيرات اللغة لمورد معين أو تضيف لغات إضافية للمورد ممكن ما تكون موجودة؟ ملفات اللغات تتيح لك تعديل متغيرات اللغة للمورد اللي تبيه. 

<InlineVoucher />



## إيجاد ملفات اللغات

لازم تعدل ملفات اللغات باستخدام عميل FTP. إذا كنت جديد على استخدام FTP، ننصحك تقرأ أولاً [دليل وصول FTP](gameserver-ftpaccess.md). بعد ما تتصل، انتقل لمجلد مورد ESX للمورد اللي تبي تعدله. افتح مجلد اللغات داخل مجلد المورد. 

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

داخل مجلد اللغات بتلقى كل ملفات اللغة الموجودة لهذا المورد. من هنا تقدر تعدل ملف موجود أو تنسخ ملف موجود باسم جديد للغة جديدة، وتعدل عليه بعدين. 

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## تعديل ملف اللغات

الحين تقدر تعدل محتوى متغيرات اللغة الفردية في ملف اللغة المفتوح. محتوى متغيرات اللغة يكون بعد علامة يساوي داخل علامات الاقتباس. عدّل المحتوى على كيفك واحفظ التغييرات في النهاية. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## تعيين اللغة (Locale)

اللغة المستخدمة تقدر تحددها من خلال ملف الإعدادات `config.lua` داخل مجلد المورد. عدّل القيمة في `Config.Locale = GetConvar('esx:locale', 'en')`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## الخلاصة

مبروك! إذا اتبعت كل الخطوات، تكون عدلت ملف اللغة لموردك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لمساعدتك! 🙂

<InlineVoucher />