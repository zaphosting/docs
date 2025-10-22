---
id: dedicated-windows
title: "سيرفر مخصص: تثبيت Windows Server 2025"
description: "اكتشف كيفية تثبيت وتكوين Windows Server 2025 على سيرفرك المخصص لتحقيق أفضل أداء → تعلّم المزيد الآن"
sidebar_label: Windows Server 2025
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
فيما يلي شرح خطوة بخطوة لكيفية تثبيت وتكوين نظام تشغيل Windows Server على سيرفرك المخصص. اتبع هذه التعليمات بعناية لضمان إعداد نظام التشغيل بنجاح واستخدامه بأفضل شكل ممكن.



:::info Windows Server 2025

خطوات الإعداد والعرض في هذا الدليل مبنية على نظام التشغيل **Windows Server 2025**. قد تختلف **الإصدارات الأقدم** من حيث **الهيكل** و**المظهر**. ومع ذلك، الإجراء مشابه.  
:::



<InlineVoucher />

## التحضير
لتثبيت وتكوين نظام التشغيل، من المهم في البداية تركيب ملف ISO الخاص بنظام التشغيل. هناك عدة طرق لتركيبه:

1. التركيب عبر الإعداد الأولي
2. التركيب عبر iLO (الوسائط الافتراضية)
3. التركيب عبر iLO (الكونسول البعيد)

إذا لم تكن معتادًا على تركيب ملف ISO بعد، من الأفضل الرجوع إلى دليلنا [الإعداد الأولي](dedicated-setup.md) أو [ملف ISO الخاص](dedicated-iso.md).



## التثبيت

بمجرد تركيب ملف ISO بنجاح، سيبدأ تثبيت Windows Server تلقائيًا عند إعادة تشغيل النظام. أولاً، يجب تحديد اللغة وتخطيط لوحة المفاتيح. ثم يتم اختيار خيار الإعداد، حيث يجب اختيار **تثبيت Windows Server**.

![img](https://screensaver01.zap-hosting.com/index.php/s/gW4cr5WDGYEdBzw/download)

بمجرد بدء التثبيت، يقوم النظام بتحضير المكونات اللازمة. قد تستغرق هذه العملية بعض الوقت. بعد الانتهاء، يجب اختيار إصدار Windows Server المطلوب. الإصدارات المتاحة هي:

- Windows Server 2025 Standard Evaluation
- Windows Server 2025 Standard Evaluation (Desktop Experience)
- Windows Server 2025 Datacenter Evaluation
- Windows Server 2025 Datacenter Evaluation (Desktop Experience)

إذا كنت تحتاج إلى واجهة مستخدم رسومية واستخدام RDP، يجب اختيار أحد إصدارات Desktop Experience. لمزيد من المعلومات حول الفروقات بين إصداري Standard وDatacenter، يمكنك زيارة الموقع الرسمي لـ [Microsoft](https://learn.microsoft.com/en-us/windows-server/get-started/editions-comparison?pivots=windows-server-2025).

:::warning إصدارات وترخيص Windows Server
تأكد من اختيار إصدار السيرفر الذي لديك مفتاح ترخيص صالح له. ZAP-Hosting لا توفر ترخيص Windows Server لهذا المنتج. بعد انتهاء فترة التجربة، يجب شراء الترخيص بشكل منفصل.
:::

بعد اختيار الصورة المطلوبة، يجب تأكيد الإشعارات وشروط الترخيص، ثم تحديد القسم الذي سيتم تثبيت نظام التشغيل عليه. لإنشاء قسم جديد، اضغط على **إنشاء قسم**، ثم اختر القرص/القسم الجديد واضغط التالي. وأخيرًا، ابدأ التثبيت بالضغط على **تثبيت**.

![img](https://screensaver01.zap-hosting.com/index.php/s/2RQcBKiqoJE9MAg/download)

سيتم الآن تثبيت نظام تشغيل Windows Server. سيقوم النظام بإعادة التشغيل عدة مرات أثناء العملية. قد يستغرق الأمر بعض الوقت حتى تكتمل العملية.

حدد بيانات تسجيل الدخول وأنت جاهز لتسجيل الدخول إلى نظام التشغيل المثبت. احفظ بيانات الدخول بعناية، لأنها ستُستخدم دائمًا لتسجيل الدخول مستقبلاً.

![img](https://screensaver01.zap-hosting.com/index.php/s/FiXwH85pT24DYnJ/download)



## التكوين

بعد إعداد نظام التشغيل، من الضروري تفعيل وصول RDP للسماح بالاتصالات الخارجية. للقيام بذلك، اذهب إلى إعدادات سطح المكتب البعيد وفعّل الخيار المناسب.

![img](https://screensaver01.zap-hosting.com/index.php/s/gCCcTzpn69LpgSr/download)



## الخاتمة
مبروك، لقد قمت بتثبيت نظام تشغيل Windows Server 2025 بنجاح على سيرفرك المخصص. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />