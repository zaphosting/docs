---
id: palworld-enable-pvp
title: "Palworld: تفعيل PvP"
description: "تعلم كيفية تفعيل PvP في Palworld، تكوين سلوك القتال في القاعدة، وتطبيق إعدادات PvP الموصى بها على سيرفرك. -> تعلّم المزيد الآن"
sidebar_label: "تفعيل PvP"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

تحتوي لعبة Palworld على وضع PvP يسمح للاعبين بالقتال ضد بعضهم البعض ويغير طريقة القتال في القاعدة وتفاعل النقابات على سيرفرك. في هذا الدليل، ستتعلم كيفية تفعيل PvP يدويًا عن طريق تعديل ملف التكوين الصحيح في إدارة سيرفر ألعاب ZAP-Hosting وتطبيق الإعدادات المطلوبة.

:::caution Trial Feature Notice
يُعتبر وضع PvP في Palworld ميزة تجريبية من قبل مطور اللعبة. قد تتغير خيارات التكوين وسلوك اللعب في تحديثات اللعبة المستقبلية.
:::

## Preparation

قبل البدء، تأكد من:

- أن لديك وصول إلى سيرفر ألعاب Palworld الخاص بك عبر واجهة الويب في ZAP-Hosting
- أن سيرفرك متوقف حاليًا أو يمكن إعادة تشغيله بعد التغييرات
- فهمك أن PvP يغير طريقة اللعب بشكل كبير، خاصة فيما يتعلق بالقتال بين اللاعبين، دفاع القاعدة، وفقدان العناصر عند الموت

:::info Configuration Access
للسيرفرات Palworld في ZAP-Hosting، يمكن الوصول إلى ملف التكوين ذي الصلة من خلال إدارة سيرفر الألعاب ضمن قسم `Configs`.
:::

## Open the Palworld Configuration File

لتفعيل PvP، تحتاج إلى تعديل ملف `PalWorldSettings.ini`.

### Find the file in the ZAP-Hosting interface

1. سجّل الدخول إلى واجهة الويب في ZAP-Hosting.
2. افتح سيرفر ألعاب Palworld الخاص بك.
3. انتقل إلى قسم `Configs` في إدارة سيرفر الألعاب.
4. افتح الملف `PalWorldSettings.ini`.



:::note Configuration Format
عادةً ما تُخزن إعدادات سيرفر Palworld داخل قسم `OptionSettings=(...)` في ملف `PalWorldSettings.ini`. تحتاج إلى إضافة أو تعديل المفاتيح المطلوبة داخل هذا القسم.
:::

## Enable the Required PvP Settings

لتفعيل PvP، يجب التأكد من أن الإعدادات الثلاثة التالية مضبوطة على `True` في ملف `PalWorldSettings.ini`.

### Required PvP keys

| الإعداد | القيمة المطلوبة | الوصف |
|---|---|---|
| `bIsPvP` | `True` | يفعّل وضع PvP على السيرفر |
| `bEnablePlayerToPlayerDamage` | `True` | يسمح بإلحاق الضرر المباشر بين اللاعبين |
| `bEnableDefenseOtherGuildPlayer` | `True` | يسمح بالتفاعل الدفاعي مع لاعبي النقابات الأخرى |

### Example configuration

أضف هذه القيم إلى سطر `OptionSettings=(...)` الخاص بك، أو غيّر القيم الموجودة إذا كانت موجودة بالفعل:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Avoid Duplicate Keys
إذا كان الإعداد موجودًا بالفعل في `PalWorldSettings.ini`، قم بتحرير القيمة الموجودة بدلاً من إضافة نفس المفتاح مرة أخرى. التكرار قد يسبب سلوك غير متوقع أو يصعّب استكشاف الأخطاء.
:::

## Recommended PvP Settings

بعد تفعيل PvP، يمكنك أيضًا تعديل إعدادات إضافية لتجربة PvP متوازنة أكثر. القيم التالية موصى بها عادةً لسيرفرات PvP.

### Suggested values

| الإعداد | القيمة الموصى بها | الوصف |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | يمنع تخصيص نقاط صحة (HP) |
| `bAllowEnhanceStat_Attack` | `False` | يمنع تخصيص نقاط هجوم |
| `bEnableFastTravel` | `True` | يبقي التنقل السريع مفعّلًا |
| `bEnableFastTravelOnlyBaseCamp` | `True` | يقيّد التنقل السريع لمخيمات القاعدة فقط |
| `bExistPlayerAfterLogout` | `True` | يبقي اللاعبين في العالم بعد تسجيل الخروج |
| `bEnableAimAssistPad` | `False` | يعطل مساعدة التصويب باستخدام يد التحكم |
| `DeathPenalty` | `All` | يسقط كل العناصر والـ Pals عند الموت |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | يسمح بسرقة العناصر المسقطة من لاعبين آخرين |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | يعرض مناطق قواعد النقابات الأخرى |
| `bBuildAreaLimit` | `True` | يساعد في منع البناء في المناطق المحظورة |
| `GuildPlayerMaxNum` | `4` | يحد من حجم النقابة |
| `BaseCampMaxNumInGuild` | `2` | يحد من عدد القواعد لكل نقابة |
| `MaxBuildingLimitNum` | `1000` | يحد من عدد الهياكل لكل لاعب |
| `GuildRejoinCooldownMinutes` | `60` | يحدد فترة الانتظار لإعادة الانضمام للنقابة |
| `BlockRespawnTime` | `5.0` | يحدد تأخير إعادة الظهور في القاعدة |
| `RespawnPenaltyDurationThreshold` | `1800.0` | الوقت قبل إعادة تعيين عقوبة إعادة الظهور |
| `RespawnPenaltyTimeScale` | `2.0` | مضاعف عقوبة إعادة الظهور بعد تكرار الموت |

### Example PvP settings block

إذا أردت استخدام القيم الموصى بها، أدرج الإدخالات التالية في قسم `OptionSettings=(...)` الخاص بك:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Optional PvP Restrictions and Rewards

حسب مدى تنافسية سيرفر PvP الخاص بك، يمكنك أيضًا تكوين قيود التكنولوجيا ومكافآت PvP.

### Restrict fast-movement technologies

يمكنك تقييد بعض تقنيات الحركة عن طريق تعيين `DenyTechnologyList`.

| الإعداد | قيمة مثال |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

مثال على الإدخال:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Verify Existing Syntax
تنسيق تكوين Palworld قد يختلف حسب نسخة السيرفر الحالية وكيفية هيكلة سطر `OptionSettings=(...)` الموجود. قبل الحفظ، تأكد من أن إدخالك يتطابق مع نمط الصياغة المستخدم في ملفك.
:::

### Configure PvP reward drops

تتضمن Palworld أيضًا خيارات مكافآت مرتبطة بـ PvP عند قتل اللاعبين.

| الإعداد | الوصف |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | يفعّل إسقاط عناصر إضافية عند قتل لاعب في وضع PvP |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | يحدد معرف العنصر الذي سيتم إسقاطه |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | يحدد كمية العناصر المسقطة |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | يعرض عدد عناصر PvP على خريطة العالم للقواعد |
| `bDisplayPvPItemNumOnWorldMap_Player` | يعرض عدد عناصر PvP على خريطة العالم للاعبين |

مثال على التكوين:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Item ID Compatibility
إذا استخدمت قيمة مخصصة لـ `AdditionalDropItemWhenPlayerKillingInPvPMode`، تأكد من أن معرف العنصر صالح لإصدار Palworld الحالي. معرفات العناصر غير الصالحة قد تسبب فشل الإعداد أو تجاهله.
:::

## What Changes When PvP Is Enabled

بعد تفعيل PvP، تتغير طريقة اللعب على سيرفرك بعدة طرق مهمة. بناءً على إرشادات PvP المتاحة علنًا لـ Palworld، يمكنك توقع السلوك التالي بشكل عام:

- يمكن للاعبين إلحاق الضرر ببعضهم البعض
- دخول قاعدة لاعب آخر قد يجعل الـ Pals في قاعدته عدائيين
- اللاعبون الطائرون والـ Pals المركوبون قد يتلقون ضررًا أكبر
- الـ Pals المستدعون وPals القاعدة قد يتلقون ضررًا أقل
- قد يتمكن اللاعبون من الوصول إلى الصناديق المملوكة لنقابات أخرى
- قد يقل ضرر الأسلحة القتالية ضد هياكل اللاعبين الآخرين
- قد تدافع الـ Pals القاعدية عبر منطقة أوسع
- قد تزيد المسافة المسموح بها بين القواعد المجاورة
- قد يتلقى اللاعبون إشعارات عند تعرض قاعدتهم لهجوم
- قد يتم تقييد البناء والإصلاح أثناء هجوم القاعدة
- قد يتم تعديل مدى أو ضرر بعض الأسلحة في وضع PvP

:::danger Gameplay Impact Warning
تفعيل PvP يمكن أن يغير بشكل كبير التقدم، أمان القاعدة، واحتفاظ اللاعبين على سيرفرك. إذا كنت تدير سيرفرًا عامًا، يُنصح بإبلاغ لاعبيك قبل تطبيق هذه التغييرات.
:::

## Save the File and Restart the Server

بعد الانتهاء من تعديل `PalWorldSettings.ini`، احفظ الملف في قسم `Configs` في ZAP-Hosting.

### Apply the changes

لتفعيل إعدادات PvP الجديدة:

1. احفظ التغييرات في `PalWorldSettings.ini`.
2. أعد تشغيل سيرفر Palworld الخاص بك من إدارة سيرفر الألعاب في ZAP-Hosting.

يجب إعادة التشغيل لتطبيق تغييرات التكوين.

:::info No Additional Command Required
عادةً لا يتطلب الأمر أي أمر إضافي داخل اللعبة أو الكونسول بعد تعديل `PalWorldSettings.ini`. إعادة تشغيل السيرفر بالكامل هي الخطوة المطلوبة لتطبيق إعدادات PvP الجديدة.
:::

## Verify That PvP Is Active

بعد إعادة تشغيل السيرفر، انضم إلى السيرفر واختبر السلوك داخل اللعبة.

### Basic checks

يمكنك التحقق من الإعداد عبر التأكد من:

- قدرة اللاعبين على إلحاق الضرر ببعضهم البعض
- تفعيل سلوك القاعدة المرتبط بـ PvP
- مطابقة عقوبات الموت وقواعد الغنائم للقيم التي قمت بتكوينها
- عمل القيود الاختيارية مثل `DenyTechnologyList` كما هو متوقع

إذا لم تُطبق التغييرات، أعد فتح `PalWorldSettings.ini` وتحقق من:

- أسماء الإعدادات المكتوبة بشكل خاطئ
- المفاتيح المكررة
- الفواصل أو التنسيق غير الصحيح داخل `OptionSettings=(...)`
- القيم التي لم تُحفظ بشكل صحيح قبل إعادة التشغيل

## Conclusion

تهانينا، لقد قمت بتفعيل PvP بنجاح على سيرفر Palworld الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂