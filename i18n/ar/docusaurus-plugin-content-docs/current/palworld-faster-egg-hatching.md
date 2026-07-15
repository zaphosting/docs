---
id: palworld-faster-egg-hatching
title: "Palworld: تسريع فقس البيض"
description: "تعلم كيفية تقليل وقت فقس البيض في Palworld عن طريق تعديل إعداد فقس البيض في سيرفر Palworld للحصول على نتائج فقس أسرع. -> تعلّم المزيد الآن"
sidebar_label: "تسريع فقس البيض"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

في لعبة Palworld، يتم التحكم في وقت فقس البيض من خلال قيمة إعدادات السيرفر. في هذا الدليل، ستتعلم كيفية تقليل وقت فقس البيض على سيرفر Palworld الخاص بك في ZAP-Hosting عن طريق تعديل ملف الإعدادات الصحيح وتطبيق التغيير بشكل صحيح.



## Preparation

قبل أن تبدأ، تأكد من:

- أن لديك وصول إلى واجهة الويب لسيرفر الألعاب الخاص بك في ZAP-Hosting
- أن سيرفر Palworld الخاص بك متاح في إدارة سيرفر الألعاب
- أنك قادر على تعديل الملفات ضمن قسم **Configs**

:::info الوصول إلى ملف الإعدادات
في Palworld على ZAP-Hosting، يمكن تعديل إعدادات السيرفر ذات الصلة من خلال إدارة سيرفر الألعاب ضمن **Configs**. لهذه المهمة، تحتاج إلى تعديل ملف `PalWorldSettings.ini`.
:::

## Understanding the Egg Hatching Setting

تستخدم Palworld الإعداد `PalEggDefaultHatchingTime` لتحديد وقت فقس البيض الأساسي بالساعات. كلما كانت القيمة أقل، كان الفقس أسرع.

وفقًا لمراجع إعدادات سيرفر Palworld الحالية، القيمة الافتراضية هي `72`، والتي تمثل 72 ساعة لبيضة ضخمة. أنواع البيض الأخرى تتدرج من هذه القيمة الأساسية.

| مفتاح الإعداد | القيمة الافتراضية | الوصف |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | وقت فقس البيض الأساسي بالساعات |

:::note كيف يعمل الإعداد
تؤثر هذه القيمة على عملية فقس البيض العامة على سيرفرك. إذا قللتها، سيصبح الفقس أسرع لجميع اللاعبين الذين يستخدمون الحاضنات.
:::

## Open the Palworld Configuration File

أولاً، تحتاج إلى الوصول إلى ملف الإعدادات الصحيح في واجهة ZAP-Hosting.

### Navigate to the Configs Section

افتح إدارة سيرفر Palworld الخاص بك واذهب إلى قسم **Configs**. هناك، ابحث وافتح الملف المسمى:

```ini
PalWorldSettings.ini
```

هذا هو الملف الذي يحتوي على إعدادات اللعب لسيرفر Palworld الخاص بك، بما في ذلك إعداد وقت فقس البيض.



## Edit the Egg Hatching Time

بمجرد فتح `PalWorldSettings.ini`، ابحث عن السطر `OptionSettings`. تخزن Palworld العديد من إعدادات اللعب داخل هذا القسم.

### Change the Required Config Key

ابحث عن الإدخال التالي:

```ini
PalEggDefaultHatchingTime=72.000000
```

غيّر القيمة إلى رقم أقل لجعل فقس البيض أسرع.

على سبيل المثال:

```ini
PalEggDefaultHatchingTime=24.000000
```

هذا سيقلل وقت فقس البيض الأساسي من 72 ساعة إلى 24 ساعة.

### Example Values

يمكنك استخدام قيم مختلفة حسب سرعة الفقس التي تريدها على سيرفرك.

| القيمة | النتيجة |
| --- | --- |
| `72.000000` | وقت فقس البيض الافتراضي |
| `48.000000` | تقليل أبطأ، تجربة لعب أكثر توازنًا |
| `24.000000` | فقس البيض أسرع بكثير |
| `12.000000` | فقس البيض سريع جدًا |
| `1.000000` | فقس سريع للغاية |

:::caution استخدم قيم واقعية
القيم المنخفضة جدًا يمكن أن تغير توازن اللعب بشكل كبير. إذا كنت تريد تقدمًا أكثر طبيعية، ابدأ بقيمة معتدلة مثل `24.000000` أو `48.000000`.
:::

### Example Configuration Snippet

اعتمادًا على إعداداتك الحالية، سيظهر الإعداد داخل كتلة `OptionSettings`. مثال نموذجي يشبه هذا:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip تعديل الإدخال الصحيح
إذا كان مفتاح `PalEggDefaultHatchingTime` موجودًا بالفعل، عدّل القيمة الموجودة بدلاً من إضافة إدخال مكرر. القيم المكررة في نفس كتلة `OptionSettings` قد تؤدي إلى تجاهل الإعدادات أو استبدالها.
:::

## Save and Apply the Changes

بعد تعديل القيمة، احفظ ملف `PalWorldSettings.ini` في واجهة ZAP-Hosting.

### Restart the Server

بعد حفظ الملف، أعد تشغيل سيرفر Palworld الخاص بك ليتم تحميل وقت فقس البيض الجديد.

:::info إعادة التشغيل مطلوبة
لن يتم تطبيق الإعدادات المحدثة حتى يتم إعادة تشغيل السيرفر.
:::

## Important Behavior for Existing Eggs

إذا كانت البيوض تحت الحضانة بالفعل، فإن القيمة الجديدة لوقت الفقس لا تتحدث بشكل موثوق لتلك المؤقتات النشطة. عمليًا، يجب عليك إزالة وإعادة تشغيل عملية حضانة البيض المتأثرة ليتم تطبيق المعدل الجديد.

| الحالة | الإجراء المطلوب |
| --- | --- |
| بيض جديد موضوع بعد التغيير | لا حاجة لإجراء إضافي بعد إعادة التشغيل |
| بيض تحت الحضانة قبل التغيير | أعد تشغيل الحضانة لتلك البيوض |

:::note مؤقتات الحضانة الحالية
إذا غيرت وقت فقس البيض ولم تر النتيجة المتوقعة، تحقق مما إذا كان البيض تحت الحضانة قبل تغيير الإعدادات.
:::

## Conclusion

تهانينا، لقد نجحت في تقليل وقت فقس البيض على سيرفر Palworld الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂