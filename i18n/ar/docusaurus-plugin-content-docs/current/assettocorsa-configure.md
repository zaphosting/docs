---
id: assettocorsa-configure
title: "Assetto Corsa: ضبط سيرفرك"
description: "اكتشف كيف تضبط سيرفر ألعاب Assetto Corsa الخاص بك مع خرائط وسيارات مخصصة لتجربة لعب مثالية → تعلّم المزيد الآن"
sidebar_label: ضبط السيرفر
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## الاتصال عبر FTP

قبل ما نقدر نضبط السيرفر، لازم يتم إعداد [الوصول عبر FTP](gameserver-ftpaccess.md):

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

بعد ما يتم الإعداد، تقدر تتصل وتفتح مجلد السيرفر:

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## التحضير

أول شيء نفتح مجلد Assetto Corsa، نقدر نفتحها عن طريق فتح Steam والضغط كليك يمين على "Assetto Corsa" في قائمة الألعاب

الآن نفتح "الملفات المحلية" ونفتح ملفات اللعبة المحلية:

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

الآن نفتح مجلد "server"، هناك ملف "acServerManager"، نفتح الملف

## ضبط الخريطة

حاليًا نحن في واجهة "AC Server Manager"، من هنا نقدر ننشئ وندير إعدادات السيرفر، أول شيء ننشئ إعداد جديد

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

الآن نقدر نضبط سيرفرنا، في حالتنا نبي نعدل فقط المسارات والسيارات، لهذا نفتح تبويب "Tracks"

هنا نقدر نضغط على الخريطة المفضلة عندنا، وفوق نقدر نضبط عدد السيارات على المسار.

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
تأكد إنك ما تحدد سيارات أكثر من عدد الفتحات في سيرفرك، وإلا السيرفر ما راح يشتغل
:::

## ضبط السيارات

الآن ننتقل لتبويب "Cars / Entry List"، هنا نقدر نضيف سيارات جديدة:


لتفعيل السيارات، لازم يكون علامة الصح مفعلة على اليسار

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

في الوسط تقدر تشوف السيارات اللي ممكن تنحط على الشبكة، هنا نقدر نختار السيارات بالألوان اللي نبيها تكون في الشبكة:

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
لاختيار عدة سيارات، تقدر تحط عدة علامات صح لإضافة السيارات المختلفة في الوسط.

انتبه إن كل فتحات السيارات تكون مليانة وما تتجاوز عدد الفتحات المتاحة.

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## رفع الإعدادات

الآن نقدر نحفظ الإعدادات بزر "Save" ونصدرها بزر "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

هنا نختار مجلد فاضي لتخزين بيانات الإعدادات.

الآن نقدر نقفل AC Server Manager، ونفتح المجلد اللي تم تصدير الإعدادات فيه.

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

هذي الإعدادات نقدر ننسخها بالسحب والإفلات داخل مجلد "cfg" في سيرفر ألعابك.

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

الآن السيرفر يقدر يشتغل بالإعدادات الجديدة.

<InlineVoucher />