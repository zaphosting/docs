---
id: palworld-max-workers
title: "Palworld: الحد الأقصى للعمال"
description: "تعلم كيفية تغيير إعداد الحد الأقصى للعمال في Palworld عن طريق تعديل BaseCampWorkerMaxNum، بما في ذلك الحد الافتراضي والحدود الآمنة للعمال لكل قاعدة. -> تعلّم المزيد الآن"
sidebar_label: "الحد الأقصى للعمال"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

تتيح لك لعبة Palworld تغيير الحد الأقصى لعدد العمال (Pals) المعينين لكل معسكر قاعدة على سيرفرك. في هذا الدليل، ستتعلم كيفية تعديل ملف الإعدادات الصحيح في واجهة الويب الخاصة بـ ZAP-Hosting، وضبط قيمة `BaseCampWorkerMaxNum`، وتطبيق التغيير بشكل صحيح.



## Preparation

قبل أن تبدأ، تأكد من أن لديك وصول إلى سيرفر ألعاب Palworld الخاص بك عبر لوحة إدارة سيرفرات الألعاب في ZAP-Hosting.

:::info متطلبات الوصول إلى الإعدادات
تحتاج إلى الوصول إلى إدارة السيرفر عبر الويب لتتمكن من فتح قسم **Configs** وتعديل ملفات إعدادات Palworld يدويًا.
:::

## Understanding the Max Workers Setting

الإعداد المسؤول عن الحد الأقصى للعمال في Palworld هو `BaseCampWorkerMaxNum`. هذا الخيار يتحكم في عدد الـ Pals الذين يمكنهم العمل في كل معسكر قاعدة بشكل فردي.

| الإعداد | ملف الإعدادات | الغرض | القيمة الافتراضية | الحد الأقصى في النسخة الأصلية |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | يحدد الحد الأقصى لعدد العمال Pals لكل معسكر قاعدة | `15` | `50` |

:::note معلومات عن الحد الأقصى في النسخة الأصلية
تشير الوثائق العامة الحالية إلى أن الحد الأقصى الطبيعي داخل اللعبة هو `50`. القيم التي تتجاوز `50` عادةً ما تتطلب تعديل اللعبة (مودات) وليست جزءًا من إعدادات السيرفر الأصلية.
:::

:::caution تأثير الأداء
زيادة عدد العمال قد ترفع من استهلاك CPU وذاكرة RAM لأن عددًا أكبر من الـ Pals سيكونون نشطين في قواعدك. إذا استخدمت قيمة عالية، راقب أداء السيرفر بعد التغيير.
:::

## Open the Palworld Configuration File

لتغيير إعداد الحد الأقصى للعمال، تحتاج إلى تعديل ملف `PalWorldSettings.ini`.

### Find the file in the ZAP-Hosting interface

افتح إدارة سيرفر Palworld الخاص بك وانتقل إلى:

- `Configs`
- `PalWorldSettings.ini`

هذا هو ملف الإعدادات الذي يخزن إعدادات اللعب لسيرفر Palworld الخاص بك.



## Edit the BaseCampWorkerMaxNum Value

بعد فتح ملف `PalWorldSettings.ini`، ابحث عن السطر الذي يحتوي على `OptionSettings`. عادةً ما تُخزن إعدادات سيرفر Palworld كأزواج مفتاح-قيمة مفصولة بفواصل داخل هذا القسم.

### Change the configuration entry

ابحث عن المفتاح التالي:

```ini
BaseCampWorkerMaxNum=15
```

غيّر القيمة إلى العدد الذي تفضله. على سبيل المثال، للسماح بـ `20` عامل Pal لكل معسكر، استخدم:

```ini
BaseCampWorkerMaxNum=20
```

### Example configuration

اعتمادًا على ملفك الحالي، سيظهر الإعداد عادةً داخل مدخل `OptionSettings` طويل يشبه هذا:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip عدّل القيمة المطلوبة فقط
غيّر فقط `BaseCampWorkerMaxNum` ما لم تكن تنوي تعديل إعدادات لعب أخرى عمدًا. هذا يساعد على تجنب أخطاء التكوين غير المقصودة.
:::

## Recommended Values

يمكنك اختيار أي قيمة تناسب أسلوب لعبك، طالما أنها ضمن حدود النسخة الأصلية المدعومة.

| القيمة | النتيجة | التوصية |
| --- | --- | --- |
| `15` | الحد الافتراضي لعمال Palworld | الأفضل للعب العادي |
| من `20` إلى `30` | زيادة أتمتة القاعدة | توازن جيد لمعظم السيرفرات الخاصة |
| من `40` إلى `50` | عدد عمال مرتفع جدًا | استخدم فقط إذا كان سيرفرك يملك موارد كافية |
| أكثر من `50` | سلوك غير قياسي في النسخة الأصلية | عادةً يتطلب مودات ولا يُنصح به بدون اختبار |

## Save and Apply the Changes

بعد تعديل القيمة، احفظ ملف `PalWorldSettings.ini` في محرر الإعدادات الخاص بـ ZAP-Hosting.

### Restart the server

بعد حفظ الملف، أعد تشغيل سيرفر Palworld الخاص بك ليتم تحميل إعداد الحد الأقصى الجديد للعمال.

:::info إعادة تشغيل مطلوبة
التغييرات في `PalWorldSettings.ini` لا تُطبق فورًا أثناء تشغيل السيرفر. تحتاج إلى إعادة تشغيل السيرفر بعد حفظ الملف.
:::

## Verify the New Worker Limit

بعد إعادة تشغيل السيرفر، انضم إلى سيرفر Palworld الخاص بك وتحقق من أحد معسكرات القاعدة. يجب أن تتمكن الآن من تعيين عدد عمال Pals حتى الحد الجديد الذي قمت بتكوينه.

إذا لم يظهر التغيير، تحقق من التالي:

| التحقق | ماذا تتحقق |
| --- | --- |
| الملف الصحيح | هل عدّلت `PalWorldSettings.ini` |
| المفتاح الصحيح | هل `BaseCampWorkerMaxNum` موجودة ومكتوبة بشكل صحيح |
| صحة الصياغة | هل لم يتم كسر سطر `OptionSettings` المحيط |
| إتمام إعادة التشغيل | هل تم إعادة تشغيل السيرفر بالكامل بعد الحفظ |
| نطاق القيمة | هل القيمة ضمن الحد الطبيعي في النسخة الأصلية وهو `50` |

:::caution صياغة الإعدادات
إعدادات Palworld حساسة للتنسيق. إذا حذفت عن طريق الخطأ فواصل أو أقواس أو أجزاء أخرى من سطر `OptionSettings`، قد يتجاهل السيرفر الإعداد أو يفشل في تحميله بشكل صحيح.
:::

## Conclusion

تهانينا، لقد قمت بتغيير الحد الأقصى لعدد العمال لكل معسكر قاعدة على سيرفر Palworld الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂