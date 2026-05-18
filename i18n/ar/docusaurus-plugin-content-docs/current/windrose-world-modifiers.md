---
id: windrose-world-modifiers
title: "Windrose: معدلات العالم"
description: "قم بتكوين معدلات عالم Windrose مع مرجع كامل للمعاملات العائمة، إعدادات القتال، ومعاملات التدرج التعاوني -> تعلّم المزيد الآن"
sidebar_label: معدلات العالم
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

تتيح لك معدلات العالم المخصصة في Windrose تعديل القتال، القتال البحري، الاستكشاف، المهام، وتدرج التعاونية بالتفصيل. في هذا الدليل، ستتعلم كيفية تحرير ملف `WorldDescription.json`، فهم كل معامل، وتطبيق الإعدادات المخصصة على سيرفر ألعاب Windrose الخاص بك.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

قبل أن تبدأ، تأكد من توفر ما يلي:

- سيرفر ألعاب Windrose نشط في ZAP-Hosting
- وصول إلى إدارة السيرفر
- توقف السيرفر قبل تحرير الملفات
- وصول إلى قسم **Configs** أو **File Manager** في إدارة السيرفر

:::info موقع ملف التكوين
تُخزن معدلات العالم المخصصة في ملف `WorldDescription.json` ضمن كتلة `WorldSettings`.
:::

:::caution توقف السيرفر أولاً
يجب عليك دائمًا إيقاف السيرفر قبل تحرير `WorldDescription.json`. هذا يساعد على منع تلف الملفات أو استبدال التغييرات أثناء بدء التشغيل أو عمليات الحفظ التلقائي.
:::

## Understanding World Modifiers

يتم تعريف كل إعداد مخصص بشكل فردي داخل `WorldDescription.json` تحت `WorldSettings`. يفصل اللعبة القيم حسب النوع:

- `float` للمعاملات الرقمية مثل الصحة أو الضرر
- `bool` للخيارات الصحيحة أو الخاطئة
- `tag` لقيم الصعوبة المسماة مثل صعوبة القتال

هذا الهيكل مهم لأن كل معامل يجب أن يوضع في القسم الصحيح. إذا وضعت قيمة `float` في `bool`، أو استخدمت وسمًا غير صالح، قد لا يعمل الإعداد كما هو متوقع.

:::note أنواع المعاملات
إذا لم تكن مألوفًا بمصطلح *معامل*، فهو ببساطة قيمة قابلة للتكوين يستخدمها اللعبة. في هذا الدليل، يتحكم كل معامل في جزء من صعوبة العالم أو سلوك اللعب.
:::

## Open the World Configuration File

لتطبيق معدلات العالم المخصصة، تحتاج إلى تحرير ملف العالم الصحيح.

1. أوقف سيرفر Windrose في إدارة السيرفر.
2. افتح **File Manager**.
3. انتقل إلى المسار التالي:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

استبدل العناصر النائبة كما يلي:

| العنصر النائب | المعنى |
| --- | --- |
| `[your_game_version]` | مجلد إصدار لعبة Windrose الحالي الخاص بك |
| `[your_world_id]` | معرّف العالم الذي تريد تعديله |

:::tip العثور على العالم الصحيح
إذا كان لديك عدة عوالم، تأكد من تحرير ملف `WorldDescription.json` داخل مجلد `[your_world_id]` الصحيح. وإلا، ستؤثر تغييراتك على حفظ مختلف.
:::

## Edit the WorldSettings Block

داخل `WorldDescription.json`، حدد كتلة `WorldSettings`. أضف أو عدّل القيم المخصصة هناك.

استخدم الهيكل التالي:

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

بعد حفظ الملف، أعد تشغيل السيرفر.

:::info سلوك الإعدادات المسبقة
إذا قمت بتعيين أي قيمة مخصصة يدويًا، يتغير `WorldPresetType` تلقائيًا إلى `Custom` عند بدء تشغيل السيرفر التالي. إذا أردت استخدام إعداد مسبق نظيف بدلاً من القيم المخصصة، يجب عليك استخدام التكوين المناسب للإعداد المسبق بدلاً من دمج الطريقتين.
:::

## Full Parameter Reference

توفر الجداول التالية مرجعًا كاملاً لكل معدل عالم مخصص متاح.

### Combat Parameters

| المعامل | القسم | الافتراضي | النطاق | التأثير |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | مضاعف صحة الأعداء |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | مضاعف ضرر الأعداء |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | عدوانية الزعماء وصعوبة المواجهات |

يجب كتابة `CombatDifficulty` كقيمة وسم، على سبيل المثال:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

القيم المتاحة:

| الصعوبة | قيمة TagName |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Naval Combat Parameters

| المعامل | القسم | الافتراضي | النطاق | التأثير |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | مضاعف صحة سفن الأعداء |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | مضاعف ضرر سفن الأعداء |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | عدد البحارة الأعداء لهزيمتهم في عملية الاقتحام |

هذه الإعدادات مفيدة إذا أردت جعل المعارك البحرية أسهل لفرق صغيرة أو أكثر تحديًا للمجموعات المتمرسة.

### Co-Op Scaling Parameters

| المعامل | القسم | الافتراضي | النطاق | التأثير |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | يضبط صحة الأعداء وفقدان الموقف بناءً على عدد اللاعبين |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | يضبط صحة سفن الأعداء بناءً على عدد اللاعبين |

هذه القيم مفيدة بشكل خاص للفرق الكبيرة. تسمح لك بالحفاظ على توازن القتال مع انضمام المزيد من اللاعبين إلى العالم.

### Exploration Parameters

| المعامل | القسم | الافتراضي | التأثير |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | يعطل علامات الخريطة لنقاط الاهتمام |

:::note تسمية EasyExplore
رغم الاسم، تعيين `EasyExplore` إلى `true` يجعل الاستكشاف أصعب لأنه يعطل علامات الخريطة لنقاط الاهتمام. هذا وضع استكشاف غامر فعليًا.
:::

### Quest Parameters

| المعامل | القسم | الافتراضي | التأثير |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | عند إكمال لاعب واحد لمهمة تعاونية، تكتمل تلقائيًا لجميع اللاعبين الآخرين الذين لديهم المهمة نشطة |

هذا الإعداد مفيد إذا أردت تبسيط تقدم المجموعة أو تطلب من كل لاعب إكمال الأهداف بشكل فردي.

## Multiplier Scale Reference

إذا لم تكن متأكدًا كيف تؤثر قيمة `float` على طريقة اللعب، استخدم هذا المرجع السريع.

| القيمة | التأثير |
| --- | --- |
| `0.5` | `50%` - أسهل بشكل ملحوظ |
| `1.0` | `100%` - الافتراضي أو الطبيعي |
| `2.0` | `200%` - أصعب بشكل ملحوظ |
| `5.0` | `500%` - صعب جدًا |

هذا الجدول مثال عملي للمعاملات لتوازن عالمك. القيم الأقل تقلل الصعوبة، والقيم الأعلى تزيدها بشكل كبير.

:::tip ابدأ بتعديلات صغيرة
إذا كنت تختبر تغييرات التوازن، زد أو قلل معاملًا واحدًا في كل مرة. هذا يسهل فهم أي إعداد تسبب في اختلاف طريقة اللعب.
:::

## Example Configurations

الأمثلة التالية يمكن أن تساعدك في بناء إعدادك المخصص.

### Casual Crew

هذا الإعداد يقلل ضغط القتال، يحافظ على تمكين مشاركة المهام، ويجعل الاقتحام أسهل.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Hardcore Seas

هذا الإعداد يزيد من صعوبة القتال البري والبحري، يعطل إكمال المهام المشتركة، ويفعل الاستكشاف الغامر.

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Large Group Scaling

هذا الإعداد مفيد للمجموعات الكبيرة، مثل 8 لاعبين، حيث قد يكون التدرج الافتراضي سهلًا جدًا.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Best Practices for Editing Values

### Use Valid Ranges

كل معامل `float` يدعم فقط نطاقًا محددًا. البقاء ضمن النطاق الموثق يساعد على تجنب سلوك غير متوقع.

| المعامل | الحد الأدنى | الحد الأقصى |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution قيم غير صالحة
إذا استخدمت قيمًا غير مدعومة، تنسيقًا خاطئًا، أو وضعت معاملًا في القسم الخطأ، قد يتجاهل اللعبة الإعداد أو يفشل في تطبيقه بشكل صحيح.
:::

### Keep JSON Formatting Correct

عند تحرير `WorldDescription.json`، تأكد من:

- بقاء جميع المفاتيح بين علامات اقتباس مزدوجة
- وضع الفواصل بشكل صحيح
- إغلاق الأقواس `{}` والأقواس المربعة بشكل صحيح
- كتابة `true` و `false` بحروف صغيرة
- استخدام النقطة للفواصل العشرية، مثل `1.5`

قد يمنع ملف JSON المعطوب تحميل تكوين العالم بشكل صحيح.

### Restart After Saving

بعد الانتهاء من التحرير:

1. احفظ `WorldDescription.json`
2. أعد تشغيل السيرفر
3. انضم إلى السيرفر واختبر التغييرات في طريقة اللعب

بعض القيم من الأسهل التحقق منها في القتال، الاقتحام، أو جلسات التعاونية بدلاً من تسجيل الدخول مباشرة.

## Managing Configs in the Gameserver Management

يمكنك إدارة ملفات تكوين Windrose مباشرة في إدارة سيرفر الألعاب في ZAP-Hosting ضمن خيارات التكوين والملفات المتاحة. هذه هي الطريقة الموصى بها لتحرير `WorldDescription.json` إذا لم ترغب في استخدام أدوات خارجية.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

إذا لم يكن الإدخال الدقيق للتكوين مدرجًا مباشرة، استخدم **File Manager** وانتقل يدويًا إلى مسار ملف العالم الموضح سابقًا في هذا الدليل.

:::info إدارة التكوين
اعتمادًا على واجهة سيرفر الألعاب الحالية وإعداد العالم الموجود لديك، قد يختلف عرض الملفات بدقة. إذا لم يكن إدخال تكوين معين مرئيًا، استخدم مسار الملف مباشرة بدلاً من افتراض وجود ميزة مفقودة.
:::

## Troubleshooting

### Changes Do Not Apply

إذا لم تكن معدلاتك نشطة بعد إعادة التشغيل، تحقق مما يلي:

- هل حررت ملف `WorldDescription.json` الصحيح
- هل تم إيقاف السيرفر قبل التحرير
- هل صياغة JSON صحيحة
- هل كل معامل في القسم الصحيح: `float`، `bool`، أو `tag`
- هل تم إعادة تشغيل السيرفر بالكامل بعد الحفظ

### Difficulty Feels Unchanged

بعض المعدلات أكثر وضوحًا من غيرها. على سبيل المثال:

- `MobHealthMultiplier` أسهل ملاحظة في القتال العادي
- `ShipHealthMultiplier` يظهر فقط أثناء القتال البحري
- `Coop_StatsCorrectionModifier` يظهر بوضوح مع عدة لاعبين
- `EasyExplore` يؤثر فقط على سلوك الاستكشاف وعلامات الخريطة

### Preset Changed to Custom

هذا سلوك متوقع بمجرد تعيين قيم مخصصة يدويًا. يقوم اللعبة تلقائيًا بتغيير نوع الإعداد المسبق للعالم إلى `Custom` عند بدء التشغيل التالي.

## Conclusion

تهانينا، لقد قمت بتكوين معدلات عالم Windrose بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂