---
id: palworld-max-players
title: "Palworld: الحد الأقصى للاعبين"
description: "تعلم كيفية تغيير إعداد الحد الأقصى للاعبين في Palworld على سيرفر ألعاب Palworld الخاص بك عن طريق تعديل ملف الإعدادات الصحيح في واجهة ZAP. -> تعلّم المزيد الآن"
sidebar_label: Palworld: الحد الأقصى للاعبين
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

تتيح لك Palworld التحكم في عدد اللاعبين الذين يمكنهم الانضمام إلى سيرفرك في نفس الوقت. في هذا الدليل، ستتعلم كيفية تغيير الحد الأقصى لعدد اللاعبين يدويًا عن طريق تعديل ملف الإعدادات الصحيح في إدارة سيرفر ألعاب ZAP-Hosting الخاص بك.



## Preparation

قبل أن تبدأ، تأكد من أن لديك وصول إلى إدارة سيرفر ألعاب Palworld الخاص بك في واجهة الويب الخاصة بـ ZAP-Hosting.

:::info الوصول إلى ملف الإعدادات
تحتاج إلى تعديل إعدادات السيرفر يدويًا من خلال قسم **Configs** في إدارة سيرفر الألعاب. إذا لم تكن تعرف بعد كيفية الوصول إلى سيرفرك، افتحه أولاً من واجهة الويب الخاصة بـ ZAP-Hosting.
:::

## Locate the Palworld Configuration File

لتغيير الحد الأقصى لعدد اللاعبين، تحتاج إلى تعديل ملف `PalWorldSettings.ini`.

في إدارة سيرفر ألعاب ZAP-Hosting الخاص بك:

1. افتح سيرفر **Palworld** الخاص بك
2. اذهب إلى **Configs**
3. افتح الملف المسمى `PalWorldSettings.ini`

يحتوي هذا الملف على الإعدادات الرئيسية للعبة والسيرفر، بما في ذلك الحد الأقصى لعدد اللاعبين المسموح به.

:::note الملف الصحيح
لإجراء هذا التغيير، يجب تعديل ملف `PalWorldSettings.ini` فقط. إذا كان سيرفرك يحتوي على ملفات إضافية، لا تغير القيم غير المتعلقة إلا إذا كنت تعرف بالضبط ما تقوم به.
:::

## Change the Maximum Player Count

داخل ملف `PalWorldSettings.ini`، ابحث عن قسم `OptionSettings` وابحث عن الإدخال `ServerPlayerMaxNum`.

الإعداد المعني هو:

| مفتاح الإعداد | الوصف | القيمة الافتراضية |
| --- | --- | --- |
| `ServerPlayerMaxNum` | يحدد الحد الأقصى لعدد اللاعبين الذين يمكنهم الانضمام إلى السيرفر | `32` |

يبدو الإدخال النموذجي مشابهًا لهذا:

```ini
ServerPlayerMaxNum=32
```

غيّر القيمة إلى الحد الذي تفضله لعدد اللاعبين. على سبيل المثال، للسماح بـ 16 لاعبًا:

```ini
ServerPlayerMaxNum=16
```

أو للاحتفاظ بالإعداد الافتراضي لـ 32 لاعبًا:

```ini
ServerPlayerMaxNum=32
```

:::caution استخدم القيم المدعومة
سيرفرات Palworld المخصصة عادةً ما تستخدم `32` كحد أقصى افتراضي. إذا قمت بتعيين قيمة أعلى بكثير، فقد يؤثر ذلك على استقرار السيرفر أو أدائه حسب خطتك وإصدار اللعبة الحالي. إذا لم تكن متأكدًا، ابدأ بقيمة أقل واختبر سيرفرك أولاً.
:::

## Example Configuration

اعتمادًا على كيفية تنسيق ملفك، قد يظهر الإعداد داخل سطر `OptionSettings` أطول. في هذه الحالة، تحتاج فقط إلى تغيير قيمة `ServerPlayerMaxNum`.

مثال:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

إذا كان ملفك يستخدم هذا التنسيق، لا تقم بإزالة الفواصل أو الأقواس أو علامات الاقتباس من الإدخالات الأخرى. فقط استبدل الرقم بعد `ServerPlayerMaxNum=`.

## Save and Apply the Changes

بعد تغيير القيمة:

1. احفظ ملف `PalWorldSettings.ini`
2. أعد تشغيل سيرفر Palworld الخاص بك

يجب إعادة التشغيل لتطبيق الحد الأقصى الجديد لعدد اللاعبين.

| الإجراء | مطلوب |
| --- | --- |
| حفظ `PalWorldSettings.ini` | نعم |
| تشغيل أوامر إضافية في الكونسول | لا يوجد أمر إضافي مؤكد مطلوب |
| إعادة تشغيل السيرفر | نعم |

:::tip إعادة تشغيل مطلوبة
التغييرات في إعداد `ServerPlayerMaxNum` لا تُطبق فورًا أثناء تشغيل السيرفر. تحتاج إلى إعادة تشغيل السيرفر حتى يقوم Palworld بتحميل الإعدادات المحدثة.
:::

## Verify the New Player Limit

بعد إعادة التشغيل، يجب أن يستخدم سيرفرك الحد الأقصى الجديد لعدد اللاعبين.

يمكنك التحقق من ذلك عن طريق:

- مراجعة تفاصيل السيرفر في إدارة سيرفر الألعاب إذا كانت معروضة هناك
- الانضمام إلى السيرفر بعدد لاعبين متعدد
- مراجعة الإعداد الحالي مرة أخرى في `PalWorldSettings.ini`

إذا لم يتم تطبيق الإعداد، افتح الملف مرة أخرى وتأكد من:

- وجود `ServerPlayerMaxNum=[your_value]`
- عدم تلف تنسيق الملف
- إعادة تشغيل السيرفر بالكامل بعد الحفظ

:::caution صياغة الإعدادات
إذا قمت بحذف فاصلة أو قوس أو قيمة أخرى من سطر `OptionSettings` عن طريق الخطأ، قد يتجاهل السيرفر الإعداد أو يفشل في تحميل التكوين بشكل صحيح. حرر الملف بحذر وغيّر فقط القيمة المطلوبة.
:::

## Conclusion

تهانينا، لقد قمت بتغيير الحد الأقصى لعدد اللاعبين على سيرفر Palworld الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂