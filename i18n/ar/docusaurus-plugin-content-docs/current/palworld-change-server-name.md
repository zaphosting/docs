---
id: palworld-change-server-name
title: "Palworld: تغيير اسم السيرفر"
description: "تعلم كيفية تغيير اسم سيرفر Palworld الخاص بك وتحديث اسم السيرفر المعروض في متصفح السيرفرات للاعبين عن طريق تعديل ملف الإعدادات الصحيح يدويًا. -> تعلّم المزيد الآن"
sidebar_label: Palworld: تغيير اسم السيرفر
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

يستخدم Palworld ملف إعدادات لتحديد اسم السيرفر المعروض في متصفح السيرفر داخل اللعبة. في هذا الدليل، ستتعلم كيفية تغيير اسم السيرفر المعروض يدويًا في واجهة الويب الخاصة بـ ZAP-Hosting وتطبيق التغيير بشكل صحيح.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

قبل أن تبدأ، تأكد من أن لديك وصول إلى سيرفر ألعاب Palworld الخاص بك في واجهة الويب لـ ZAP-Hosting وصلاحية تعديل ملفات الإعدادات الخاصة به.

:::info يتطلب تعديل يدوي للإعدادات
يتم تنفيذ هذا التغيير عن طريق تعديل إعدادات سيرفر Palworld يدويًا. يمكن الوصول إلى الملف المعني من خلال إدارة سيرفر الألعاب ضمن قسم `Configs`.
:::

## فتح ملف إعدادات Palworld

لتغيير اسم السيرفر، تحتاج إلى تعديل ملف `PalWorldSettings.ini`.

في واجهة الويب الخاصة بـ ZAP-Hosting:

1. افتح سيرفر ألعاب **Palworld** الخاص بك.
2. اذهب إلى **Configs** في إدارة السيرفر.
3. افتح الملف `PalWorldSettings.ini`.

:::note موقع ملف الإعدادات
في سيرفرات Palworld المخصصة، عادةً ما تُخزن الإعدادات ذات الصلة في `PalWorldSettings.ini`. في واجهة ZAP-Hosting، يجب تعديل هذا الملف من خلال قسم `Configs` بدلاً من تغيير مسارات الملفات يدويًا.
:::

## تعديل اسم السيرفر

داخل ملف `PalWorldSettings.ini`، ابحث عن قسم `OptionSettings`. اسم السيرفر في متصفح السيرفرات يتحكم به الإدخال `ServerName`.

يمكنك أيضًا اختيارياً تعيين وصف للسيرفر باستخدام `ServerDescription`.

### مثال على الإعدادات

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="وصف سيرفر Palworld الخاص بك")
```

إذا كان ملفك يحتوي بالفعل على سطر طويل لـ `OptionSettings=(...)`، فقط قم بتغيير القيم الموجودة لـ `ServerName` واختياريًا `ServerDescription`.

### القيم التي تحتاج لتغييرها

| مفتاح الإعداد | الوصف | مثال على القيمة |
| --- | --- | --- |
| `ServerName` | الاسم المعروض في متصفح سيرفرات Palworld | `"zaphosting"` |
| `ServerDescription` | نص الوصف الاختياري المعروض مع السيرفر | `"سيرفر بقاء عام"` |

:::caution حافظ على الإعدادات الحالية دون تغيير
غالبًا ما يحتوي `OptionSettings` على العديد من إعدادات السيرفر الأخرى في سطر واحد. قم فقط بتغيير القيم الخاصة بـ `ServerName` و `ServerDescription` إلا إذا كنت تريد تعديل خيارات أخرى عن قصد.
:::

## حفظ التغييرات

بعد تعديل القيم:

1. احفظ ملف `PalWorldSettings.ini` في قسم **Configs**.
2. تحقق من أن علامات الاقتباس والفواصل ما زالت منسقة بشكل صحيح.

### مثال على سطر موجود

إذا كان ملفك يحتوي على سطر مشابه للمثال أدناه، قم بتحديث النص ذي الصلة فقط:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="سيرفر بقاء عام",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## إعادة تشغيل السيرفر

بعد حفظ الإعدادات، تحتاج إلى إعادة تشغيل سيرفر Palworld الخاص بك ليتم تحميل الاسم الجديد.

### تطبيق الإعدادات الجديدة

استخدم وظيفة إعادة التشغيل في لوحة إدارة سيرفر الألعاب الخاصة بـ ZAP-Hosting.

| الإجراء | مطلوب |
| --- | --- |
| حفظ `PalWorldSettings.ini` | نعم |
| إعادة تشغيل السيرفر | نعم |
| تشغيل أوامر إضافية في الكونسول | لا |

:::tip تأخير تحديث متصفح السيرفرات
بعد إعادة التشغيل، قد لا يظهر اسم السيرفر المحدث فورًا لجميع اللاعبين في متصفح السيرفرات. إذا لزم الأمر، انتظر بضع دقائق وقم بتحديث قائمة السيرفرات.
:::

## التحقق من اسم السيرفر الجديد

بعد إعادة تشغيل السيرفر:

1. افتح Palworld.
2. تحقق من متصفح السيرفرات المتعدد اللاعبين.
3. ابحث عن الاسم الذي قمت بتكوينه في `ServerName`.

إذا استمر ظهور الاسم القديم، أعد فتح `PalWorldSettings.ini` وتأكد من:
- تم تغيير قيمة `ServerName` بشكل صحيح
- تم حفظ الملف بنجاح
- تم إعادة تشغيل السيرفر بالكامل بعد التغيير

## Conclusion

تهانينا، لقد قمت بتغيير اسم سيرفر Palworld الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂