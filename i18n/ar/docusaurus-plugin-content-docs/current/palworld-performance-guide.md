---
id: palworld-performance-guide
title: "Palworld: دليل الأداء"
description: "حسّن أداء سيرفر Palworld، قلل من انخفاض الأداء، وقلل من حمل السيرفر عبر تغييرات التكوين اليدوية. -> تعلّم المزيد الآن"
sidebar_label: Palworld: دليل الأداء
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

يمكن أن يتراجع أداء سيرفر Palworld مع مرور الوقت، خاصة على السيرفرات النشطة التي تحتوي على العديد من القواعد، العمال، العناصر المسقطة، وPals البرية. في هذا الدليل، ستتعلم كيفية تحسين ملف `PalWorldSettings.ini` في واجهة الويب الخاصة بـ ZAP-Hosting لتقليل حمل السيرفر وتحسين الأداء العام.

## Preparation

قبل أن تبدأ، تحتاج إلى الوصول إلى إدارة سيرفر ألعاب Palworld الخاص بك وصلاحية تعديل ملفات التكوين.

:::info الوصول المطلوب
تحتاج إلى الوصول إلى سيرفر Palworld الخاص بك من خلال لوحة إدارة سيرفرات الألعاب في ZAP-Hosting. ملف التكوين المطلوب متاح ضمن قسم `Configs`.
:::

:::caution أنشئ نسخة احتياطية أولاً
تعديلات الأداء يمكن أن تغير سلوك اللعب بشكل كبير. قبل تعديل التكوين، يُنصح بإنشاء نسخة احتياطية حتى تتمكن من استعادة الإعدادات السابقة إذا لزم الأمر.
:::

## Open the Palworld Configuration File

لتحسين سيرفرك، تحتاج إلى تعديل ملف التكوين الرئيسي لسيرفر Palworld.

1. سجّل الدخول إلى واجهة الويب الخاصة بـ ZAP-Hosting.
2. افتح إدارة سيرفر ألعاب **Palworld**.
3. انتقل إلى **Configs**.
4. افتح الملف `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note أين تجري التعديلات
الإعدادات المتعلقة بالأداء مخزنة في `PalWorldSettings.ini`. تحتاج إلى تعديل قيم الخيارات الموجودة يدويًا في هذا الملف.
:::

## Understand the Relevant Settings

هناك عدة إعدادات في Palworld تؤثر مباشرة على أداء السيرفر. بعض القيم تقلل من حمل CPU والذاكرة ومحاكاة العالم، بينما تساعد أخرى في الحد من التراكم الناتج عن اللاعبين غير النشطين أو الكيانات الزائدة في العالم.

### Main Performance Settings

الإعدادات التالية هي الأكثر أهمية إذا كنت تريد تقليل انخفاض الأداء على سيرفر مزدحم.

| الإعداد | القيمة الافتراضية | التغيير الموصى به | التأثير |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | احتفظ بـ `0.1` أو أعلى | زيادة التدهور تساعد في إزالة الهياكل المهجورة بشكل أسرع |
| `bAutoResetGuildNoOnlinePlayers` | `False` | اضبط على `True` إذا كان مناسبًا | يزيل قواعد النقابات غير النشطة بعد فترة السماح المحددة |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | عدّل حسب الحاجة | يحدد وقت عدم النشاط بالساعات قبل إعادة تعيين النقابة |
| `PalSpawnNumRate` | `1.0` | قلل القيمة | يقلل من عدد Pals البرية ويخفف حمل المحاكاة |
| `DropItemMaxNum` | `3000` | قلل القيمة | يحد من عدد العناصر المسقطة في العالم |
| `DropItemAliveMaxHours` | `1.0` | قلل القيمة | يزيل العناصر المسقطة بشكل أسرع |
| `BaseCampMaxNumInGuild` | `4` | قلل القيمة | يقلل عدد قواعد النقابة |
| `ServerReplicatePawnCullDistance` | `15000.0` | قلل القيمة | يقلل مسافة تزامن Pals ويخفف حمل الشبكة والسيرفر |
| `BaseCampWorkerMaxNum` | `15` | قلل القيمة | يحد من عدد العمال Pals لكل قاعدة |
| `MaxBuildingLimitNum` | `0` | عيّن قيمة | يحد من إجمالي المباني لكل لاعب |
| `bEnableInvaderEnemy` | `True` | اضبط على `False` | يعطل أعداء الغزو ويقلل الحمل |
| `bEnableFastTravel` | `True` | اضبط على `False` إذا لزم الأمر | يمكن أن يقلل من التجمّدات الناتجة عن أحداث السفر السريع |
| `bIsPvP` | `False` | احتفظ بـ `False` إلا إذا كان مطلوبًا | PvP يمكن أن يزيد من حمل السيرفر في البيئات النشطة |

### Secondary Performance Settings

هذه الإعدادات يمكن أن تساعد أيضًا، خاصة على السيرفرات العامة الكبيرة.

| الإعداد | القيمة الافتراضية | التغيير الموصى به | التأثير |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | قلل القيمة | يقلل العدد الإجمالي للقواعد المسموح بها على السيرفر |
| `AutoSaveSpan` | `240` | زد القيمة | يقلل من تكرار عمليات الحفظ التلقائي للسيرفر |

:::tip ابدأ بتغييرات محافظة
من الأفضل تعديل عدد قليل من القيم في كل مرة ثم اختبار سلوك السيرفر. هذا يسهل تحديد أي الإعدادات حسّن الأداء وأيها أثر على طريقة اللعب بشكل كبير.
:::

## Edit the Configuration

يخزن Palworld خيارات السيرفر في قسم `OptionSettings` داخل ملف `PalWorldSettings.ini`. تحتاج إلى تعديل الإدخالات ذات الصلة يدويًا.

### Example Optimized Configuration

يوضح المثال التالي تكوينًا محافظًا يركز على الأداء. استبدل فقط القيم التي تريد استخدامها فعليًا لسيرفرك.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution تحقق من الإدخالات الحالية
قد تتغير صيغ تكوين Palworld بين التحديثات. قبل الحفظ، تأكد من تعديل سطر `OptionSettings` الموجود في ملفك بدلاً من إنشاء إدخالات مكررة أو متضاربة.
:::

### Recommended Value Adjustments

إذا لم ترغب في استبدال السطر كاملًا، يمكنك تعديل القيم ذات الصلة فقط في تكوينك الحالي.

| الإدخال | قيمة مثال | سبب التغيير |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | يقلل من ظهور Pals البرية |
| `DropItemMaxNum` | `2000` | يقلل من ازدحام العناصر |
| `DropItemAliveMaxHours` | `0.5` | يزيل العناصر المسقطة بشكل أسرع |
| `BaseCampMaxNum` | `64` | يقلل العدد الإجمالي للقواعد |
| `BaseCampMaxNumInGuild` | `3` | يحد من توسع قواعد النقابة |
| `BaseCampWorkerMaxNum` | `10` | يقلل حمل العمال الذكاء الاصطناعي |
| `ServerReplicatePawnCullDistance` | `10000.0` | يقلل مسافة التزامن |
| `bEnableInvaderEnemy` | `False` | يعطل الحمل المرتبط بالغزاة |
| `bEnableFastTravel` | `False` | يتجنب التجمّدات الناتجة عن السفر السريع |
| `bAutoResetGuildNoOnlinePlayers` | `True` | ينظف قواعد النقابات غير النشطة |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | يحدد فترة السماح لعدم النشاط |
| `MaxBuildingLimitNum` | `[your_limit]` | يقيّد البناء المفرط |
| `bIsPvP` | `False` | يمنع الحمل الإضافي لـ PvP |
| `AutoSaveSpan` | `[your_value]` | يقلل من تكرار الحفظ إذا كان مدعومًا في صيغة التكوين الحالية |

:::danger إعادة تعيين النقابات غير النشطة تحذف القواعد
إذا فعلت `bAutoResetGuildNoOnlinePlayers=True`، يمكن حل النقابات غير النشطة تلقائيًا بعد الوقت المحدد في `AutoResetGuildTimeNoOnlinePlayers`. هذا قد يحذف قواعد وهياكل اللاعبين غير النشطين بشكل دائم.
:::

## Save and Apply the Changes

بعد تعديل الملف، تحتاج إلى حفظ التكوين وإعادة تشغيل السيرفر لتحميل الإعدادات الجديدة.

1. احفظ التغييرات في `PalWorldSettings.ini`.
2. عد إلى إدارة سيرفر الألعاب.
3. أعد تشغيل سيرفر Palworld.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info إعادة تشغيل مطلوبة
يجب إعادة تشغيل السيرفر بعد تغيير `PalWorldSettings.ini`. بدون إعادة تشغيل، سيستمر السيرفر في استخدام الإعدادات السابقة.
:::

## Best Practices for Long-Term Performance

تعديلات التكوين اليدوية مفيدة، لكنها جزء فقط من تحسين السيرفر الشامل.

### Use Automatic Daily Restarts

إعادة التشغيل اليومية هي ممارسة شائعة لسيرفرات Palworld لأن استخدام الموارد يمكن أن يتراكم مع الوقت.

- أنشئ جدول إعادة تشغيل تلقائي في إدارة سيرفرك في ZAP-Hosting
- اختر وقتًا يكون فيه نشاط اللاعبين منخفضًا
- أخبر لاعبيك مسبقًا إذا كانت مجتمعك نشطًا

### Limit World Growth

أكبر سبب لانخفاض الأداء على سيرفرات Palworld طويلة التشغيل عادةً هو تعقيد العالم.

لتقليل ذلك:

- خفّض حدود القواعد
- خفّض عدد العمال
- قلل تراكم العناصر المسقطة
- قلل ظهور Pals البرية
- نظف النقابات غير النشطة بحذر
- فكّر في تعيين حد للبناء باستخدام `MaxBuildingLimitNum`

### Test Changes Gradually

لا تطبق تخفيضات شديدة فورًا إلا إذا كان سيرفرك غير مستقر بالفعل.

العملية الجيدة هي:

1. خفّض قيم الظهور والعناصر أولاً
2. قلل حدود القواعد والعمال بعد ذلك
3. عطل الميزات الاختيارية ذات الحمل العالي إذا لزم الأمر
4. أعد التشغيل وراقب الأداء بعد كل جولة من التعديلات

:::tip وازن بين الأداء وطريقة اللعب
أفضل الإعدادات تعتمد على نوع سيرفرك. السيرفر الخاص الصغير يمكنه عادة الاحتفاظ بقيم أعلى، بينما سيرفر المجتمع العام الكبير يحتاج غالبًا إلى حدود أكثر صرامة لمنع انخفاض الأداء.
:::

## Conclusion

تهانينا، لقد نجحت في تحسين أداء سيرفر Palworld الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂