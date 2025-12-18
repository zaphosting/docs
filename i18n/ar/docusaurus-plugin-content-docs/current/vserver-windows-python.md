---
id: vserver-windows-python
title: 'VPS: تثبيت بايثون'
description: "تعلم كيف تثبت بيئة تشغيل بايثون على سيرفرات ويندوز وتبدأ تشغيل برامج بايثون بكفاءة → تعلّم المزيد الآن"
sidebar_label: تثبيت بايثون
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هذا الدليل يشرح خطوات تثبيت بيئة تشغيل بايثون على ويندوز. الخطوات التالية يجب تنفيذها عبر RDP، إذا ما تعرفش كيف تتصل بسيرفرك عبر RDP، شوف دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md).
<InlineVoucher />

## التثبيت

### الخطوة 1: تحميل الملفات
افتح المتصفح اللي تفضله (أنا راح أستخدم كروم في هذا الدليل) وروح على [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

الآن اضغط على زر `Download Python [version]` وانتظر لين يخلص التحميل.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### الخطوة 2: تثبيت بايثون
شغّل ملف التثبيت بالضغط عليه. راح يطلب منك تضبط بعض الإعدادات للتثبيت. تأكد من تفعيل خيار `Add python.exe to PATH` في الأسفل (هذا يسهل عليك تشغيل ملفات بايثون لاحقًا) واضغط على زر `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### الخطوة 3: إكمال التثبيت
انتظر لين تكتمل عملية التثبيت. خليك صبور لأن العملية ممكن تأخذ وقت :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

بعد ما يخلص، اضغط على `Close` وتقدر تبدأ تستخدم بايثون على سيرفرك.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## تشغيل الكود

الحين بعد ما ثبت بايثون على سيرفرك، تقدر تبدأ تشغل برامج بايثون.

### وضع المفسر

تشغيل الأمر `python` داخل نافذة Command Prompt أو PowerShell راح يفتح مفسر بايثون. تقدر تكتب أي كود بايثون صحيح بعد علامة `>>>` وينفذ لما تضغط `Enter`. تقدر تغلق المفسر لما تخلص عن طريق كتابة `exit()` أو بس تغلق النافذة.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### تشغيل ملفات .py

لتشغيل ملفات بايثون `.py`، ببساطة استخدم الأمر `python3 [filename].py` مع استبدال `[filename]` بمسار واسم الملف اللي تبي تشغله. هذا يتم برضه من خلال Command Prompt أو PowerShell.

:::tip
معظم البرامج اللي تلاقيها أونلاين تقدر تشغلها باستخدام `python3 main.py` لأن `main.py` هو نقطة البداية الشائعة لمعظم برامج بايثون.
:::

تقدر كمان تشغل ملفات بايثون (.py) ببساطة عن طريق فتحها أو كليك يمين واختيار بايثون مباشرة من ويندوز.

## البيئات الافتراضية

لما تكتب برنامج بايثون ممكن تحتاج تثبت حزم خارجية من pip. تقدر تثبتها بشكل عام وتكون متاحة لكل ملفات `.py` أو تقدر تنشئ بيئة افتراضية (venv).

### إنشاء venv

أولًا، انتقل للمجلد اللي تبي تنشئ فيه venv باستخدام مستكشف الملفات، وبعدها شغل الأمر `python -m venv .` عشان تثبت الملفات المطلوبة في الموقع الحالي.

### التفعيل والإلغاء

لتشغيل أوامر مثل `pip install` داخل venv لازم تفعلها عن طريق تشغيل `.\Scripts\activate`. الحين الكونسول راح يشتغل بس داخل venv والسكريبتات راح تشتغل فقط على الحزم المثبتة محليًا.

لما تخلص شغلك داخل venv تقدر ترجع للوضع الطبيعي عن طريق الأمر `deactivate`.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## الخاتمة

مبروك، أنت الآن ثبت وضبطت بايثون على VPS الخاص فيك! إذا عندك أي أسئلة أو مشاكل، تواصل مع فريق الدعم عندنا، متوفرين يساعدوك كل يوم!

<InlineVoucher />