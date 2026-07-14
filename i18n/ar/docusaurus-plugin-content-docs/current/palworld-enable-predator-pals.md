---
id: palworld-enable-predator-pals
title: "Palworld: تفعيل Predator Pals"
description: "تعلم كيفية تفعيل أو تعطيل predator pals على سيرفر Palworld الخاص بك، إصلاح عدم ظهور predator pals، وتكوين الإعداد الصحيح يدويًا. -> تعلّم المزيد الآن"
sidebar_label: Palworld: تفعيل Predator Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

*Predator Pals* هي Pals قوية من نوع الزعماء يمكن أن تظهر في جميع أنحاء العالم في Palworld. في هذا الدليل، ستتعلم كيفية تفعيل أو تعطيل predator pals على سيرفر Palworld الخاص بك في ZAP-Hosting عن طريق تعديل ملف التكوين الصحيح يدويًا.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

قبل أن تبدأ، تأكد من أن لديك وصول إلى سيرفر ألعاب Palworld الخاص بك في واجهة الويب الخاصة بـ ZAP-Hosting وصلاحية إدارة ملفات التكوين الخاصة به.

:::info الوصول إلى ملف التكوين
لهذا الإعداد، تحتاج إلى تعديل تكوين السيرفر يدويًا من خلال قسم **Configs** في إدارة سيرفر الألعاب الخاص بك.
:::

## فتح تكوين Palworld

لتغيير ما إذا كان يمكن لـ predator pals الظهور، تحتاج إلى تعديل ملف `PalWorldSettings.ini`.

### العثور على الملف الصحيح في واجهة ZAP

أولًا، افتح سيرفر ألعاب Palworld الخاص بك في واجهة الويب لـ ZAP-Hosting. ثم انتقل إلى قسم **Configs** في إدارة السيرفر وافتح ملف `PalWorldSettings.ini`.

هذا هو ملف التكوين الرئيسي المستخدم لإعدادات السيرفر المتعلقة باللعب، بما في ذلك سلوك predator boss pal.

:::note يتطلب تعديل يدوي
يجب تغيير هذا الإعداد يدويًا في ملف التكوين. إذا لم تظهر في واجهتك خاصية تبديل مخصصة لهذا الخيار، فإن تعديل `PalWorldSettings.ini` مباشرة هو الطريقة الصحيحة.
:::

## تعديل إعداد Predator Pals

داخل `PalWorldSettings.ini`، ابحث عن قسم `OptionSettings`. المفتاح المتعلق هو `EnablePredatorBossPal`.

### قيمة التكوين

استخدم إحدى القيم التالية حسب النتيجة التي تريدها:

| الإعداد | القيمة | النتيجة |
| --- | --- | --- |
| تفعيل predator pals | `True` | يمكن لـ predator boss Pals الظهور في العالم |
| تعطيل predator pals | `False` | لن تظهر predator boss Pals في العالم |

### مثال على الإدخال

إذا كان الإعداد موجودًا بالفعل، قم بتغيير قيمته. إذا كان مفقودًا، أضفه داخل قائمة تكوين `OptionSettings`.

```ini
EnablePredatorBossPal=True
```

لتعطيل predator pals بدلاً من ذلك، استخدم:

```ini
EnablePredatorBossPal=False
```

:::tip تحقق من الصياغة الحالية أولاً
عادةً ما تُخزن إعدادات سيرفر Palworld كجزء من سطر أطول `OptionSettings` في `PalWorldSettings.ini`. إذا كان ملفك يحتوي بالفعل على هذا الهيكل، أضف أو عدّل `EnablePredatorBossPal=True` أو `EnablePredatorBossPal=False` ضمن قائمة الإعدادات الموجودة بدلاً من إنشاء قسم منفصل غير مرتبط.
:::

## حفظ وتطبيق التغييرات

بعد تعديل الملف، احفظ التغييرات في قسم **Configs**.

### إعادة تشغيل السيرفر

بعد حفظ الملف، أعد تشغيل سيرفر Palworld الخاص بك حتى يتم تحميل الإعداد الجديد بشكل صحيح.

| الإجراء | مطلوب |
| --- | --- |
| حفظ `PalWorldSettings.ini` | نعم |
| إعادة تشغيل السيرفر | نعم |
| أمر إضافي في الكونسول | لا |

:::caution إعادة تشغيل ضرورية
لن يتم تطبيق إعداد predator pals الجديد حتى تقوم بإعادة تشغيل السيرفر. إذا لم تظهر predator pals بعد التغيير، تأكد من حفظ الملف بشكل صحيح وأن إعادة تشغيل السيرفر تمت بنجاح.
:::

## التحقق من الإعداد

بعد إعادة التشغيل، انضم إلى سيرفرك وتحقق مما إذا كانت predator pals تتصرف كما هو متوقع.

إذا قمت بتفعيلها ولم تظهر predator pals، راجع إدخال `PalWorldSettings.ini` مرة أخرى وتأكد من كتابة القيمة بالضبط كـ `True` أو `False`. كما تحقق من وضع الإعداد بشكل صحيح ضمن صياغة تكوين السيرفر الحالية.

:::note سلوك الظهور
هذا الإعداد يتحكم فيما إذا كان مسموحًا لـ predator boss Pals بالظهور في العالم. لا يوفر خريطة لمواقع predator pals، ولا يغير نقاط الظهور الفردية، ولا يضمن مواجهات فورية في منطقة معينة.
:::

## مرجع التكوين

| الملف | الموقع في ZAP-Hosting | المفتاح | القيم الممكنة | السلوك الافتراضي | يتطلب إعادة تشغيل |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | إدارة سيرفر الألعاب → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | نعم |

## Conclusion

تهانينا، لقد قمت بتفعيل أو تعطيل predator pals على سيرفر Palworld الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂