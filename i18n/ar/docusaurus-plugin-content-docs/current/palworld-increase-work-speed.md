---
id: palworld-increase-work-speed
title: "Palworld: زيادة سرعة العمل"
description: "تعلم كيفية زيادة سرعة العمل في Palworld عن طريق تعديل إعداد WorkSpeedRate لتسريع عمل اللاعبين وPals على سيرفرك. -> تعلّم المزيد الآن"
sidebar_label: "زيادة سرعة العمل"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة

تتيح لك لعبة Palworld تعديل سرعة إنجاز اللاعبين وPals للأعمال المتعلقة بالقاعدة عبر تغيير قيمة إعداد في السيرفر. في هذا الدليل، ستتعلم كيفية زيادة سرعة العمل على سيرفر Palworld الخاص بك في ZAP-Hosting عن طريق تعديل ملف الإعدادات الصحيح وتطبيق التغييرات بشكل صحيح.



## التحضير

قبل البدء، تأكد من أن لديك وصول إلى إدارة سيرفر ألعاب Palworld الخاص بك عبر واجهة الويب في ZAP-Hosting.

:::info ضرورة التكوين اليدوي
يتم تنفيذ هذا الإعداد يدويًا من خلال محرر الإعدادات. تحتاج إلى تعديل ملف إعدادات سيرفر Palworld بنفسك ضمن قسم `Configs` في إدارة سيرفر الألعاب.
:::

## فتح ملف إعدادات Palworld

لتغيير سرعة العمل، تحتاج إلى تعديل ملف `PalWorldSettings.ini`.

### مكان العثور على الملف

1. سجّل الدخول إلى موقع ZAP-Hosting.
2. افتح إدارة سيرفر ألعاب **Palworld** الخاص بك.
3. انتقل إلى **Configs**.
4. افتح الملف المسمى `PalWorldSettings.ini`.

يحتوي هذا الملف على إعدادات اللعب التي تتحكم في المعدلات والضربات لسيرفر Palworld الخاص بك.

:::note موقع ملف الإعدادات
في ZAP-Hosting، الملف المعني بهذا التغيير متاح مباشرة عبر إدارة سيرفر الألعاب ضمن `Configs`. إذا كان سيرفرك يعرض عدة ملفات إعدادات، تأكد من تعديل `PalWorldSettings.ini`.
:::

## تغيير إعداد سرعة العمل

الإعداد المستخدم لزيادة سرعة العمل هو `WorkSpeedRate`.

### وظيفة الإعداد

`WorkSpeedRate` يتحكم في سرعة أداء اللاعبين وPals للمهام المتعلقة بالقاعدة. القيمة الافتراضية عادةً ما تكون `1.0`، مما يعني السرعة العادية.

القيم الأعلى تزيد من مضاعف السرعة:

| مفتاح الإعداد | القيمة الافتراضية | قيمة مثال | التأثير |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | مضاعفة سرعة العمل |
| `WorkSpeedRate` | `1.0` | `10.0` | سرعة عمل عالية جدًا |

### تعديل القيمة

ابحث عن السطر `OptionSettings` داخل ملف `PalWorldSettings.ini`. يتم تخزين إدخال `WorkSpeedRate` داخل هذا القسم من الإعدادات.

إذا كان الإدخال موجودًا بالفعل، قم بتغيير قيمته. على سبيل المثال:

```ini
WorkSpeedRate=1.000000
```

غيّره إلى قيمة أعلى مثل:

```ini
WorkSpeedRate=2.000000
```

للحصول على نتيجة أسرع بكثير، يمكنك استخدام مضاعف أعلى مثل:

```ini
WorkSpeedRate=10.000000
```

### مثال على مقتطف الإعدادات

اعتمادًا على محتويات ملفك الحالي، قد يظهر الإعداد كجزء من سطر `OptionSettings` أطول مشابه لهذا:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution حرص عند تعديل الصيغة الحالية
يستخدم ملف `PalWorldSettings.ini` صيغة صارمة. تأكد من تعديل قيمة `WorkSpeedRate` فقط ولا تقم بحذف الفواصل أو الأقواس أو علامات الاقتباس من سطر `OptionSettings` المحيط.
:::

## حفظ وإعادة تشغيل السيرفر

بعد تعديل الملف، تحتاج إلى حفظ التغييرات وإعادة تشغيل سيرفر Palworld الخاص بك.

### تطبيق التغييرات

1. احفظ ملف `PalWorldSettings.ini` بعد التحديث.
2. أعد تشغيل سيرفر ألعاب Palworld الخاص بك من إدارة السيرفر في ZAP-Hosting.

إعادة التشغيل ضرورية لأن Palworld يقرأ إعدادات اللعب هذه عند بدء تشغيل السيرفر. لن يتم تطبيق قيمة سرعة العمل الجديدة بشكل صحيح حتى يتم إعادة تشغيل السيرفر.

| الإجراء | مطلوب |
| --- | --- |
| حفظ `PalWorldSettings.ini` | نعم |
| إعادة تشغيل السيرفر | نعم |
| أمر إضافي في الكونسول | لا |

:::tip اختبار موصى به
ابدأ بقيمة معتدلة مثل `2.0` وجرب النتيجة داخل اللعبة. القيم العالية جدًا قد تجعل التقدم أسرع بكثير مما هو مقصود، مما قد يؤثر على توازن اللعب العام.
:::

## التحقق من سرعة العمل الجديدة

بمجرد عودة السيرفر للعمل، انضم إلى سيرفر Palworld الخاص بك وجرب الأنشطة المتعلقة بالعمل في قاعدتك.

يجب أن تلاحظ أن اللاعبين وPals ينفذون المهام بشكل أسرع من قبل. إذا لم تلاحظ أي تغيير، أعد فتح ملف `PalWorldSettings.ini` وتأكد من:

- وجود `WorkSpeedRate`
- تعيين القيمة بشكل صحيح
- تم حفظ الملف بنجاح
- تم إعادة تشغيل السيرفر بالكامل بعد التعديل

:::note توازن اللعب
زيادة سرعة العمل يمكن أن تغير بشكل كبير سرعة تطور قاعدتك. إذا كنت تريد تجربة متوازنة، زد القيمة تدريجيًا بدلاً من تعيين سرعة عالية جدًا على الفور.
:::

## الخاتمة

تهانينا، لقد نجحت في زيادة سرعة العمل على سيرفر Palworld الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂