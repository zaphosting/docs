---
id: palworld-supply-drop-settings
title: "Palworld: إعدادات تسليم الإمدادات"
description: "تعلم كيفية تغيير تكرار تسليم الإمدادات في Palworld على سيرفر ألعاب Palworld الخاص بك عن طريق تعديل إعداد SupplyDropSpan يدويًا. -> تعرّف على المزيد الآن"
sidebar_label: Palworld: إعدادات تسليم الإمدادات
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

تتضمن لعبة Palworld تسليمات إمدادات تظهر بفواصل زمنية منتظمة وقد تحتوي على موارد مفيدة. في هذا الدليل، ستتعلم كيفية تغيير تكرار تسليم الإمدادات يدويًا على سيرفر ألعاب Palworld الخاص بك في ZAP-Hosting عن طريق تعديل ملف الإعدادات الصحيح وتطبيق التغييرات بشكل صحيح.

## Preparation

قبل البدء، تأكد من أن لديك وصول إلى سيرفر ألعاب Palworld الخاص بك عبر واجهة الويب في ZAP-Hosting وأن السيرفر متاح حاليًا في إدارة سيرفر الألعاب الخاصة بك.

:::info يتطلب التكوين اليدوي
يتم تنفيذ هذا الإعداد عن طريق تعديل تكوين سيرفر Palworld يدويًا. ستحتاج إلى فتح ملف التكوين من خلال قسم **Configs** في إدارة سيرفر الألعاب الخاصة بك.
:::

## Locate the Configuration File

لتغيير فترة تسليم الإمدادات، تحتاج إلى تعديل ملف `PalWorldSettings.ini`.

في إدارة سيرفر الألعاب في ZAP-Hosting:

1. افتح سيرفر Palworld الخاص بك.
2. اذهب إلى **Configs**.
3. افتح الملف `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note موقع ملف التكوين
في ZAP-Hosting، يتم عادةً إدارة إعدادات Palworld المتعلقة بأسلوب اللعب من خلال ملف `PalWorldSettings.ini` في منطقة **Configs** ضمن إدارة السيرفر. إذا كان تخطيط واجهتك مختلفًا قليلاً، استخدم قائمة ملفات التكوين المتاحة وابحث تحديدًا عن `PalWorldSettings.ini`.
:::

## Edit the Supply Drop Setting

الإعداد المستخدم لتكرار تسليم الإمدادات هو `SupplyDropSpan`.

تحدد هذه القيمة الفاصل الزمني بين تسليمات الإمدادات بوحدة **الدقائق**.

### Find the Correct Section

في ملف `PalWorldSettings.ini`، عادةً ما يتم تخزين إعدادات سيرفر Palworld داخل سطر `OptionSettings`. تحتاج إلى تحديد كتلة الإعدادات الموجودة والتحقق مما إذا كان `SupplyDropSpan` موجودًا بالفعل.

إذا كان موجودًا، قم بتغيير قيمته.

إذا لم يكن موجودًا، أضفه داخل قسم `OptionSettings=(...)` مع الإعدادات الأخرى المفصولة بفواصل.

### Configuration Entry

استخدم التنسيق التالي:

```ini
SupplyDropSpan=[your_value]
```

استبدل `[your_value]` بعدد الدقائق التي تريد استخدامها.

### Example Values

| الإعداد | المعنى |
| --- | --- |
| `SupplyDropSpan=180` | الفاصل الزمني الافتراضي 3 ساعات |
| `SupplyDropSpan=60` | تسليم الإمدادات كل ساعة واحدة |
| `SupplyDropSpan=360` | تسليم الإمدادات كل 6 ساعات |
| `SupplyDropSpan=30` | تسليم الإمدادات بشكل متكرر جدًا |

إليك مثالًا على كيفية ظهور الإعداد داخل كتلة `OptionSettings` الكاملة:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution حافظ على صيغة السطر كما هي
لا تقم بإزالة الفواصل أو الأقواس أو القيم الأخرى الموجودة في سطر `OptionSettings`. أي خطأ في التنسيق في هذا السطر قد يمنع السيرفر من تحميل التكوين بشكل صحيح.
:::

## Save and Apply the Changes

بعد تعديل القيمة:

1. احفظ التغييرات في `PalWorldSettings.ini`.
2. أعد تشغيل سيرفر Palworld الخاص بك من خلال إدارة سيرفر الألعاب في ZAP-Hosting.

يتطلب الأمر إعادة تشغيل لأن Palworld لا يطبق هذا الإعداد أثناء تشغيل السيرفر.

### هل هناك حاجة لأمر إضافي؟

لا يتطلب هذا التغيير عادة أي أمر إضافي داخل اللعبة أو في الكونسول. إعادة تشغيل السيرفر هي الخطوة المطلوبة لتحميل القيمة المحدثة لـ `SupplyDropSpan`.

| الإجراء | مطلوب |
| --- | --- |
| تعديل `PalWorldSettings.ini` | نعم |
| إضافة أو تغيير `SupplyDropSpan` | نعم |
| تشغيل أمر كونسول إضافي | لا |
| إعادة تشغيل السيرفر بعد الحفظ | نعم |

## Verify the Setting

بعد إعادة تشغيل السيرفر، يجب أن يكون الفاصل الزمني الجديد لتسليم الإمدادات فعالًا.

نظرًا لأن هذا الإعداد يتحكم في أحداث العالم المؤقتة، قد تحتاج إلى الانتظار حتى دورة الظهور التالية لتأكيد التغيير بالكامل داخل اللعبة. إذا قمت بتعيين فترة أقصر مثل `60` أو `30`، سيكون التحقق أسهل.

:::tip اختبار التغييرات بشكل أسرع
إذا أردت التأكد من أن الإعداد يعمل دون انتظار عدة ساعات، قم مؤقتًا بتعيين `SupplyDropSpan=30`. بعد الاختبار، يمكنك تغييره مرة أخرى إلى القيمة التي تفضلها على المدى الطويل.
:::

## Troubleshooting

### الإعداد لا يُطبق

إذا لم يتغير تكرار تسليم الإمدادات، تحقق مما يلي:

- تأكد من كتابة `SupplyDropSpan` بالضبط كما هو موضح
- تحقق من وجود القيمة داخل قسم `OptionSettings=(...)`
- تأكد من عدم وجود فواصل مفقودة أو أقواس مكسورة
- أعد تشغيل السيرفر بعد حفظ الملف

### السيرفر يحتوي على أخطاء في التكوين

إذا فشل السيرفر في البدء بعد تعديل الملف، استعد التكوين السابق وراجع الصيغة بعناية.

:::danger تنسيق INI غير صحيح
يخزن Palworld العديد من إعدادات أسلوب اللعب في سطر واحد `OptionSettings`. حتى حرف واحد في غير مكانه يمكن أن يكسر التكوين. راجع تغييراتك دائمًا بعناية قبل الحفظ.
:::

## Conclusion

تهانينا، لقد قمت بتغيير إعدادات تسليم الإمدادات في Palworld بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂