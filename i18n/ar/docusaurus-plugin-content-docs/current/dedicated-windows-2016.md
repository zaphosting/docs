---
id: dedicated-windows-2016
title: "سيرفر مخصص: تثبيت Windows Server 2016"
description: "اكتشف كيفية تثبيت وتكوين نظام تشغيل Windows Server على سيرفرك المخصص لأداء وأمان مثالي → تعلّم المزيد الآن"
sidebar_label: Windows Server 2016
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
فيما يلي شرح خطوة بخطوة لكيفية تثبيت وتكوين نظام تشغيل Windows Server على سيرفرك المخصص. اتبع هذه التعليمات بعناية لضمان إعداد نظام التشغيل بنجاح واستخدامه بأفضل شكل ممكن.

:::info Windows Server 2016
خطوات الإعداد والعرض في هذا الدليل مبنية على نظام التشغيل Windows Server 2016 (تصميم 2019 - نفس الشكل). قد تختلف الإصدارات الأقدم من حيث الهيكل والمظهر، لكن الإجراء مشابه.
:::

:::warning إصدار أحدث متوفر / تفاصيل نهاية الدعم

أحدث إصدار من Windows Server من مايكروسوفت هو إصدار [2025](dedicated-windows.md). ننصح باستخدام أحدث إصدار للمشاريع طويلة الأمد.

سيتم إيقاف دعم إصدارات Windows Server الأقدم عاجلاً أم آجلاً. المواعيد النهائية لإصدار 2016 هي:

- الدعم النشط: 11.01.2022
- دعم الأمان: 12.01.2027

:::

<InlineVoucher />

## التحضير
لتثبيت وتكوين نظام تشغيل، من المهم أولاً تركيب ملف ISO الخاص بنظام التشغيل. هناك عدة طرق لتركيبه:

1. التركيب عبر الإعداد الأولي
2. التركيب عبر iLO (الوسائط الافتراضية)
3. التركيب عبر iLO (الكونسول البعيد)

إذا لم تكن معتادًا على تركيب ملف ISO بعد، من الأفضل الرجوع إلى [الإعداد الأولي](dedicated-setup.md) أو دليل [ملف ISO خاص](dedicated-iso.md).

## التثبيت
لتثبيت Windows Server، ستحتاج إلى ملف ISO للإصدار الذي تختاره، يمكنك اختيار الإصدار المطلوب من Windows عبر واجهة الويب الخاصة بنا. بدلاً من ذلك، يمكنك اختيار ملف ISO خاص بك، لدينا دليل [ملف ISO خاص](dedicated-iso.md) لذلك.

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

إذا ظهرت هذه الشاشة في الكونسول البعيد الذي تستخدمه، فهذا يعني أن ملف ISO تم تحميله بنجاح، يمكننا الآن بدء الإعداد.
اختر اللغة التي تريدها واضغط "التالي" للمتابعة.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

اضغط "تثبيت الآن" لبدء عملية التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

يطلب Windows الآن مفتاح المنتج. أدخله إذا كان لديك واحد.

:::note
نحن لا نبيع تراخيص Windows، يجب عليك شراء المفتاح بنفسك.
:::

يمكنك شراء مفاتيح منتجات Windows من متاجر إلكترونية مختلفة، تأكد من شراء مفتاح صالح لإصدار Windows الخاص بك، لأن هناك إصدارات مختلفة.
في Windows Server 2019، على سبيل المثال، هناك إصداران: العادي ونسخة مركز البيانات.
إذا لم تكن متأكدًا مما تحتاجه بالضبط، فقط اضغط "ليس لدي مفتاح منتج" يمكنك دائمًا إضافة المفتاح لاحقًا.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

الآن اختر الإصدار الذي تريد تثبيته.
تأكد من اختيار الإصدار الصحيح، لا يمكن تغييره لاحقًا.
يرجى أيضًا اختيار إصدار "(Desktop Experience)" وإلا سيكون Windows الخاص بك معتمدًا على الواجهة النصية.
بعد اتخاذ قرارك، حدد الإصدار واضغط "التالي".

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

نوافق على الشروط ونواصل بالضغط على "التالي".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

اختر "مخصص" إذا كنت تريد تثبيت Windows جديد. يمكنك اختيار "ترقية" إذا كنت تريد الترقية من 2016 إلى 2019 مثلاً.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

في الخطوة التالية، ستحتاج إلى إنشاء أقسام على سيرفرك المخصص، عادةً لا يجب أن تكون هناك أقسام موجودة بعد. إذا وجدت أي أقسام، حددها واضغط حذف.

يمكنك إنشاء عدة أقسام صغيرة أو قسم كبير واحد. إذا أنشأت أقسامًا صغيرة، نوصي بأن يكون القسم الرئيسي لنظام Windows على الأقل 50 جيجابايت.
اضغط على "جديد" لإنشاء قسم.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

يمكنك الضغط على تطبيق إذا كنت تريد قسمًا كبيرًا واحدًا. سيأخذ الإعداد تلقائيًا أكبر حجم ممكن.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

يتطلب Windows قسم نظام صغير، نوافق على ذلك بالضغط على "موافق".

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

إذا كنت راضيًا عن الأقسام، اختر القسم الذي تريد تثبيت Windows عليه واضغط "التالي".
سيقوم إعداد Windows بالباقي تلقائيًا، قد يستغرق ذلك عدة دقائق.
لا حاجة لأي إجراء آخر حتى ينتهي التثبيت.

## التكوين

بعد اكتمال التثبيت، سيطلب منك Windows تعيين كلمة مرور.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

قم بتعيين كلمة المرور التي تريدها.

:::info
ننصح باختيار كلمة مرور قوية تحتوي على رموز خاصة.

إذا نسيت كلمة المرور، لا توجد طريقة لاستعادتها، لذا تأكد من تدوينها.
:::

بعد تعيين كلمة المرور، ستكون في شاشة القفل الخاصة بـ Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

لتسجيل الدخول إلى Windows، اضغط على تركيبة المفاتيح `CTRL + ALT + DELETE`. يمكنك فعل ذلك بسهولة عبر الكونسول البعيد.
(ستجد هذا في كونسول Java ضمن "لوحة المفاتيح")
سجّل الدخول باستخدام كلمة المرور الخاصة بك.

في الخطوة التالية، يجب تفعيل سطح المكتب البعيد، لتتمكن من الاتصال بسيرفرك بسهولة.
افتح مستكشف Windows واضغط بزر الفأرة الأيمن على "This PC"

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

اختر الخصائص.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

افتح "إعدادات الاتصال عن بُعد"

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

اقبل معلومات جدار الحماية التي ستظهر بالضغط على "موافق" ثم اضغط "تطبيق".

افتح الآن سطح المكتب البعيد على جهازك واملأ عنوان IP الخاص بواجهة ZAP-Hosting.
اسم المستخدم دائمًا Administrator وكلمة المرور هي التي عينتها سابقًا.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

يمكنك تجاهل تحذير الشهادة، ضع علامة على "لا تسألني مرة أخرى للاتصالات بهذا الكمبيوتر".
أكمل بالضغط على "نعم".

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

اتصال سطح المكتب البعيد سيقوم الآن بإنشاء اتصال بسيرفرك المخصص ويمكنك استخدامه.
تكوين الشبكة يتم تلقائيًا عبر DHCP، لذا لا حاجة لتغييرات إضافية.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
إذا كان لديك أي أسئلة أو مشاكل، فريق الدعم لدينا جاهز لمساعدتك!
:::

## الخاتمة
مبروك، لقد قمت بتثبيت نظام تشغيل Windows Server 2016 بنجاح على سيرفرك المخصص. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />