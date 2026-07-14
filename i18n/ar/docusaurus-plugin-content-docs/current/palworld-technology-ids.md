---
id: palworld-technology-ids
title: "Palworld: معرفات التكنولوجيا"
description: "تعرف على كيفية إدارة معرفات التكنولوجيا في Palworld، تعطيل تقنيات محددة، وفهم القيم المطلوبة في إعدادات السيرفر -> تعلّم المزيد الآن"
sidebar_label: Palworld: معرفات التكنولوجيا
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

يستخدم Palworld *معرفات التكنولوجيا* لتحديد التقنيات القابلة للفتح وبعض الإعدادات المتعلقة بالعناصر. في هذا الدليل، ستتعلم كيفية تعطيل تقنيات محددة على سيرفر ألعاب Palworld الخاص بك في ZAP-Hosting عن طريق تعديل الإدخال الصحيح في ملف الإعدادات يدويًا.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

قبل البدء، تأكد من أن لديك وصول إلى سيرفر ألعاب Palworld الخاص بك في واجهة الويب الخاصة بـ ZAP-Hosting وصلاحية تعديل ملفات إعدادات السيرفر.

:::info Required Access
تحتاج إلى وصول لإدارة سيرفر Palworld الخاص بك وقسم `Configs` في لوحة التحكم الخاصة بـ ZAP-Hosting لإكمال هذا الإعداد.
:::

:::note Technology ID Sources
معرفات التكنولوجيا في Palworld هي سلاسل نصية داخلية يحددها اللعبة، مثل `GrapplingGun` أو `SkillUnlock_JetDragon`. لا يوجد قائمة رسمية داخل اللعبة أو في لوحة ZAP-Hosting، لذلك يجب عليك استخدام مرجع خارجي موثوق للحصول على المعرفات الصحيحة.
:::

## Understanding technology IDs

معرفات التكنولوجيا هي معرفات داخلية يستخدمها Palworld للتقنيات القابلة للفتح. بدلاً من استخدام الاسم الظاهر داخل اللعبة، يتوقع إعداد السيرفر السلسلة النصية الدقيقة للمعرف.

لتعطيل التقنيات، يستخدم Palworld الإعداد `DenyTechnologyList`. هذه القيمة تقبل قائمة معرفات التكنولوجيا مفصولة بفواصل.

### What `DenyTechnologyList` does

عند إضافة معرفات التكنولوجيا الصحيحة إلى `DenyTechnologyList`، يتم حظر تلك التقنيات على سيرفرك. هذا مفيد إذا أردت تقييد التقدم، إزالة أدوات تنقل معينة، أو تخصيص قواعد اللعب لمجتمعك.

### Supported value format

يجب إدخال القيمة كقائمة معرفات مفصولة بفواصل بدون شروحات إضافية.

| Config key | Purpose | Format | Example |
|---|---|---|---|
| `DenyTechnologyList` | تعطيل تقنيات محددة | سلاسل معرفات التكنولوجيا مفصولة بفواصل | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Exact ID Matching
يجب أن تتطابق معرفات التكنولوجيا تمامًا مع القيمة الداخلية للعبة. إذا كان هناك خطأ إملائي أو لم تعد المعرفات صالحة للإصدار الحالي من Palworld، قد لا يعمل الإعداد كما هو متوقع.
:::

## Open the correct configuration file

في ZAP-Hosting، يتم إجراء هذا التغيير عن طريق تعديل ملف إعدادات Palworld يدويًا.

### File to edit

تحتاج إلى تعديل الملف التالي:

```ini
PalWorldSettings.ini
```

### Where to find it in the ZAP-Hosting interface

افتح إدارة سيرفر ألعاب Palworld الخاص بك، ثم انتقل إلى:

```text
Configs
```

من هناك، افتح ملف `PalWorldSettings.ini`.

:::tip Config Location in ZAP-Hosting
إذا كان سيرفرك يوفر عدة ملفات قابلة للتعديل، تأكد من اختيار `PalWorldSettings.ini` لأنه الملف المستخدم لإعدادات السيرفر المتعلقة باللعب مثل `DenyTechnologyList`.
:::

## Edit the technology ID setting

بعد فتح `PalWorldSettings.ini`، ابحث عن قائمة خيارات السيرفر وأضف أو عدّل إدخال `DenyTechnologyList`.

### Add technology IDs to `DenyTechnologyList`

استخدم قائمة معرفات التكنولوجيا التي تريد تعطيلها مفصولة بفواصل.

مثال:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

هذا المثال يعطل:

| Technology ID | Meaning |
|---|---|
| `GrapplingGun` | مسدس التسلق |
| `GrapplingGun2` | نسخة متقدمة من مسدس التسلق |
| `SkillUnlock_JetDragon` | فتح متعلق بـ JetDragon |

:::note Quotation Format
اعتمادًا على كيفية هيكلة إدخال `PalWorldSettings.ini` الحالي، قد تظهر القيمة داخل كتلة خيارات أكبر. احتفظ بأسلوب الصياغة الموجود في ملفك ولا تغير سوى قيمة `DenyTechnologyList`.
:::

### Example within an option block

في العديد من سيرفرات Palworld، تُخزن الإعدادات داخل سطر `OptionSettings` أكبر. في هذه الحالة، قد يبدو الإدخال مشابهًا لهذا:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

إذا لم يكن `DenyTechnologyList` موجودًا بالفعل، أضفه داخل نفس كتلة `OptionSettings=(...)` وافصله عن الإدخالات الأخرى بفاصلة.

:::caution Preserve Existing Syntax
لا تقم بحذف إعدادات أخرى من `OptionSettings`. فقدان فاصلة أو قوس أو علامة اقتباس يمكن أن يؤدي إلى فشل تحميل الإعدادات بشكل صحيح.
:::

## Choose valid technology IDs

يجب استخدام معرفات التكنولوجيا الداخلية الصحيحة، وليس أسماء العرض الظاهرة داخل اللعبة.

### Example technology IDs

فيما يلي أمثلة معروفة لمعرفة التكنولوجيا المستخدمة في Palworld:

| Technology ID | Example meaning |
|---|---|
| `AIcore` | نواة الذكاء الاصطناعي |
| `GrapplingGun` | مسدس التسلق |
| `GrapplingGun2` | نسخة من مسدس التسلق |
| `GrapplingGun3` | نسخة من مسدس التسلق |
| `GrapplingGun4` | نسخة من مسدس التسلق |
| `GrapplingGun5` | نسخة من مسدس التسلق |
| `SkillUnlock_JetDragon` | فتح JetDragon |
| `SkillUnlock_IceHorse` | فتح Ice Horse |
| `PALBOX` | تقنية متعلقة بـ Palbox |
| `RepairBench` | طاولة إصلاح |

نظرًا لأن Palworld يتلقى تحديثات، قد تتغير القائمة الكاملة للمعرفات مع الوقت. إذا كنت بحاجة إلى قائمة أوسع، تحقق من المعرفات مقابل مصدر موثوق وحديث قبل تطبيقها.

### Related use of IDs in other settings

قد تُستخدم معرفات التكنولوجيا الداخلية أيضًا في خيارات إعدادات أخرى في Palworld. مثال معروف هو:

| Config key | Purpose |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | تعيين عنصر إسقاط مخصص لقتل في وضع PvP |

:::info Related PvP Setting
إذا كنت تخطط لاستخدام المعرفات لتخصيص إسقاط العناصر في PvP، تأكد من أن نوع المعرف المطلوب في `AdditionalDropItemWhenPlayerKillingInPvPMode` يتطابق مع العنصر الذي تريد استخدامه. هذا الدليل يركز تحديدًا على `DenyTechnologyList`.
:::

## Save and restart the server

بعد تعديل الملف، احفظ التغييرات في واجهة ZAP-Hosting.

لتطبيق الإعداد الجديد، أعد تشغيل سيرفر Palworld الخاص بك.

### Required action after editing

| Action | Required |
|---|---|
| حفظ `PalWorldSettings.ini` | نعم |
| إعادة تشغيل السيرفر | نعم |
| تنفيذ أوامر إضافية في الكونسول | لا يوجد أمر مؤكد مطلوب |

إعادة التشغيل ضرورية لأن Palworld يقرأ إعدادات السيرفر هذه عند بدء التشغيل. بدون إعادة تشغيل، قد لا تُطبق قيود التكنولوجيا الجديدة.

:::tip Test After Restart
بعد إعادة تشغيل السيرفر، انضم إلى السيرفر وتحقق من أن التقنيات المحددة لم تعد متاحة كما هو متوقع. هذا يساعدك على التأكد من صحة المعرفات والصياغة.
:::

## Troubleshooting

إذا كانت التقنيات لا تزال متاحة بعد إعادة التشغيل، تحقق من النقاط التالية.

### Verify the ID spelling

تأكد من كتابة كل معرف تكنولوجيا بدقة، بما في ذلك الحروف الكبيرة والصغيرة.

### Check the config syntax

إذا عدّلت كتلة `OptionSettings=(...)`، تأكد من:

- فصل كل إعداد بفاصلة
- فتح وإغلاق علامات الاقتباس بشكل صحيح
- اكتمال الأقواس
- وجود `DenyTechnologyList` داخل كتلة الإعدادات الصحيحة

### Confirm the server restarted successfully

إذا لم يُعاد تشغيل السيرفر بشكل صحيح، قد لا يتم تحميل الإعدادات المحدثة.

:::danger Invalid Configuration Risk
ملف `PalWorldSettings.ini` بصيغة خاطئة قد يمنع تحميل الإعدادات بشكل صحيح. إذا حدث ذلك، استعد النسخة السابقة العاملة من الملف وأعد تطبيق التغيير بحذر.
:::

## Conclusion

تهانينا، لقد قمت بتعطيل تقنيات محددة على سيرفر Palworld الخاص بك باستخدام معرفات التكنولوجيا. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂