---
id: palworld-set-a-password
title: "Palworld: تعيين كلمة مرور"
description: "تعلم كيفية تعيين كلمة مرور لسيرفر Palworld عن طريق تعديل إعدادات اللعبة يدويًا وتطبيق تغيير كلمة المرور بشكل صحيح. -> تعلّم المزيد الآن"
sidebar_label: Palworld: تعيين كلمة مرور
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

تتيح لك Palworld حماية سيرفرك بكلمة مرور بحيث يمكن فقط للاعبين المصرح لهم الانضمام. في هذا الدليل، ستتعلم كيفية تعيين أو تغيير كلمة مرور السيرفر يدويًا في إعدادات سيرفر الألعاب الخاص بك في ZAP-Hosting وتطبيق كلمة المرور بشكل صحيح.



## Preparation

قبل أن تبدأ، تأكد من:

- أن سيرفر ألعاب Palworld الخاص بك متصل على واجهة الويب في ZAP-Hosting
- أن لديك وصول إلى إدارة سيرفر الألعاب
- أنك تعرف كلمة المرور التي تريد استخدامها للوصول إلى السيرفر

:::info يتطلب التكوين اليدوي
في Palworld، يمكن تكوين كلمة المرور يدويًا من خلال ملفات إعدادات السيرفر. في واجهة ZAP-Hosting، يمكنك الوصول إلى هذه الملفات عبر إدارة سيرفر الألعاب ضمن قسم `Configs`.
:::

## فتح ملف إعدادات Palworld

لتعيين كلمة مرور لسيرفر Palworld الخاص بك، تحتاج إلى تعديل ملف `PalWorldSettings.ini`.

### العثور على الملف في واجهة ZAP-Hosting

1. سجّل الدخول إلى واجهة الويب في ZAP-Hosting.
2. افتح إدارة سيرفر ألعاب **Palworld** الخاص بك.
3. انتقل إلى **Configs**.
4. افتح الملف `PalWorldSettings.ini`.

يحتوي هذا الملف على الإعدادات الرئيسية لسيرفر Palworld، بما في ذلك السطر الذي يتحكم فيما إذا كانت كلمة مرور مطلوبة للانضمام.

:::note هدف ملف الإعدادات
يخزن ملف `PalWorldSettings.ini` خيارات السيرفر في سطر تكوين واحد، عادة داخل قسم `OptionSettings=(...)`. تحتاج إلى تعديل قيمة `ServerPassword` هناك.
:::

## تعديل كلمة مرور السيرفر

بعد فتح `PalWorldSettings.ini`، ابحث عن السطر الخاص بـ `ServerPassword`.

### السطر المطلوب للتكوين

استخدم القيمة التالية:

```ini
ServerPassword="[your_password]"
```

استبدل `[your_password]` بكلمة المرور التي تريد أن يدخلها اللاعبون عند الانضمام إلى سيرفرك.

إذا كانت كلمة المرور معطلة حاليًا، قد تبدو القيمة هكذا:

```ini
ServerPassword=""
```

القيمة الفارغة تعني أنه لا توجد كلمة مرور للانضمام.

### مثال على التكوين

في Palworld، عادةً ما يكون الإعداد جزءًا من كتلة `OptionSettings=(...)`. قد يبدو مشابهًا لهذا:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution حافظ على التنسيق الحالي
غيّر فقط القيمة داخل `ServerPassword="..."`. لا تقم بإزالة الفواصل أو علامات الاقتباس أو الأقواس أو أي مدخلات أخرى في سطر `OptionSettings=(...)` لأن ذلك قد يمنع السيرفر من تحميل الإعدادات بشكل صحيح.
:::

## مرجع التكوين

يوضح الجدول التالي الإعداد المتعلق بتغيير كلمة المرور هذا:

| الإعداد | قيمة المثال | الغرض |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | يتطلب من اللاعبين إدخال كلمة مرور قبل الانضمام إلى السيرفر |

### توصيات كلمة المرور

عند اختيار كلمة مرور، ضع في اعتبارك النقاط التالية:

| التوصية | الشرح |
| --- | --- |
| استخدم كلمة مرور فريدة | تجنب إعادة استخدام كلمة مرور حساب من خدمات أخرى |
| تجنب الكلمات البسيطة جدًا | كلمات المرور السهلة يمكن تخمينها بسهولة |
| شاركها فقط مع اللاعبين الموثوقين | أي شخص لديه كلمة المرور يمكنه محاولة الانضمام |
| خزّنها بأمان | يمكن لمدير كلمات المرور مساعدتك في حفظها بأمان |

:::tip اختر كلمة مرور قوية
إذا كنت تخطط لتشغيل سيرفر Palworld خاص للأصدقاء أو مجتمع محدود، استخدم كلمة مرور قوية بدلاً من كلمة بسيطة أو اسم السيرفر. هذا يساعد في تقليل محاولات الانضمام غير المرغوب فيها.
:::

## حفظ التغييرات وإعادة تشغيل السيرفر

بعد تعديل كلمة المرور، احفظ الملف في قسم `Configs`.

### تطبيق كلمة المرور الجديدة

لتفعيل تغيير كلمة المرور:

1. احفظ التغييرات في `PalWorldSettings.ini`.
2. أعد تشغيل سيرفر ألعاب Palworld الخاص بك.

يجب إعادة التشغيل لأن Palworld يقرأ إعدادات السيرفر من ملف التكوين عند بدء التشغيل. بدون إعادة تشغيل، قد لا يتم تطبيق كلمة المرور الجديدة.

:::info إعادة تشغيل مطلوبة
بعد تغيير `ServerPassword`، تحتاج إلى إعادة تشغيل السيرفر يدويًا من إدارة سيرفر الألعاب في ZAP-Hosting ليتم تحميل الإعداد الجديد.
:::

## التحقق من كلمة المرور

بعد اكتمال إعادة التشغيل، اختبر الإعداد بالانضمام إلى السيرفر من داخل لعبة Palworld.

### ما يجب التحقق منه

عند الاتصال، تأكد من:

- أن السيرفر يطلب كلمة مرور قبل الانضمام الآن
- أن كلمة المرور التي قمت بتكوينها تعمل بشكل صحيح
- أن اللاعبين بدون كلمة المرور لا يمكنهم الوصول إلى السيرفر

إذا لم يطلب السيرفر كلمة مرور، أعد فتح `PalWorldSettings.ini` وتحقق من:

- وجود `ServerPassword` في قسم `OptionSettings=(...)`
- أن القيمة ليست فارغة
- تم حفظ الملف بنجاح
- تم إعادة تشغيل السيرفر بعد التغيير

:::note ظهور كلمة المرور
تُخزن كلمة المرور كنص عادي في ملف التكوين. تأكد من مشاركة وصول إدارة السيرفر فقط مع المستخدمين الموثوقين.
:::

## Conclusion

تهانينا، لقد قمت بتعيين كلمة مرور لسيرفر Palworld الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂