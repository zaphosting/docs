---
id: palworld-change-server-type
title: "Palworld: تغيير نوع السيرفر"
description: "تعلم كيفية تغيير نوع سيرفر Palworld بين Linux و Windows، تحديث مسار الإعدادات الصحيح، وتطبيق التغيير بشكل صحيح لضمان توافق المودات. -> تعلّم المزيد الآن"
sidebar_label: Palworld: تغيير نوع السيرفر
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة

يمكن لسيرفرات Palworld العمل بأنواع سيرفر مختلفة، عادةً Linux أو Windows، حسب إعدادات التأجير ومتطلبات المودات. في هذا الدليل، ستتعلم كيفية تغيير نوع السيرفر في واجهة ZAP-Hosting، تحديد مسار ملف الإعداد الصحيح بعد ذلك، وتطبيق التغيير بشكل صحيح.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## التحضير

قبل البدء، تأكد من أن لديك وصول إلى سيرفر ألعاب Palworld الخاص بك في واجهة ZAP-Hosting على الويب وصلاحية إيقاف وإعادة تشغيل السيرفر.

:::info معلومات مهمة حول تغييرات نوع السيرفر
تغيير نوع السيرفر من Linux إلى Windows، أو العكس، قد يؤثر على مسارات الملفات، توافق المودات، ومواقع الإعدادات الحالية. نوع سيرفر Windows مطلوب عادةً لبعض إعدادات مودات UE4SS.
:::

:::caution تحقق من متطلبات إعادة التثبيت
حسب طريقة نشر منتج Palworld على خدمتك، قد يتطلب تغيير نوع السيرفر إعادة تثبيت أو إعادة نشر للبرنامج. إذا لم يكن الخيار متاحًا مباشرة في واجهتك الحالية، يرجى التواصل مع الدعم قبل المتابعة.
:::

## فهم ما يتغير عند تبديل نوع السيرفر

تغيير نوع السيرفر لا يعني عادةً تعديل قيمة داخل إعدادات اللعب الخاصة بـ Palworld نفسها. التغيير الرئيسي هو بيئة برنامج السيرفر الأساسية، والتي تغير أيضًا موقع ملفات الإعداد النشطة.

بالنسبة لـ Palworld، ملف الإعداد الرئيسي عادةً هو:

- `PalWorldSettings.ini`

المجلد الذي يحتوي هذا الملف يعتمد على نوع السيرفر المختار.

| نوع السيرفر | مسار مجلد الإعداد | ملف الإعداد الرئيسي |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note لماذا هذا مهم
إذا قمت بتحرير ملف إعدادات Linux بينما سيرفرك يعمل حاليًا كنظام Windows، قد لا تُطبق تغييراتك لأن السيرفر سيقرأ من المسار الخاص بـ Windows بدلاً من ذلك.
:::

## إيقاف السيرفر

قبل تغيير نوع السيرفر، يجب عليك إيقاف السيرفر لتجنب تعارضات الملفات والتغييرات غير المكتملة.

1. سجّل الدخول إلى واجهة سيرفر ألعاب ZAP-Hosting على الويب.
2. افتح إدارة سيرفر Palworld الخاص بك.
3. أوقف السيرفر باستخدام خيارات التحكم في السيرفر.

:::tip يُنصح قبل التحرير
من الأفضل إنشاء نسخة احتياطية قبل تغيير نوع السيرفر، خاصة إذا كنت تستخدم مودات أو قمت بتحرير ملفات الإعداد يدويًا.
:::

## تغيير نوع السيرفر في واجهة ZAP-Hosting

عادةً ما يتم التعامل مع تغيير نوع السيرفر من خلال إعدادات المنتج أو البرنامج في واجهة ZAP-Hosting، وليس بتحرير سطر داخل `PalWorldSettings.ini`.

1. في إدارة سيرفر Palworld، ابحث عن قسم إعدادات برنامج السيرفر أو اللعبة.
2. اعثر على الخيار الذي يتحكم في نوع السيرفر أو نسخة البرنامج المثبتة.
3. غيّر الإعداد من `Linux` إلى `Windows`، أو من `Windows` إلى `Linux`، حسب الإعداد المستهدف.
4. احفظ التغيير.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info إذا لم تجد خيار نوع السيرفر
تسمية وموقع هذا الإعداد قد تختلف حسب واجهة ZAP-Hosting الحالية أو جيل المنتج. إذا لم يظهر محدد نوع السيرفر، قد يتطلب التغيير إعادة تثبيت أو مساعدة من الدعم.
:::

## تحرير ملف الإعداد الصحيح

بعد تغيير نوع السيرفر، تحتاج إلى التأكد من أنك تعدل ملف الإعداد النشط في المجلد الصحيح.

### افتح قسم الإعدادات

في إدارة سيرفر ألعاب ZAP-Hosting:

1. افتح سيرفر Palworld الخاص بك.
2. اذهب إلى `Configs`.
3. انتقل إلى المجلد الذي يتطابق مع نوع السيرفر الذي اخترته.

استخدم أحد المسارات التالية:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

ثم افتح:

- `PalWorldSettings.ini`

### تحقق أو أعد تطبيق إعداداتك

إذا كنت قد عدّلت الإعدادات سابقًا أثناء استخدام نوع سيرفر مختلف، فقد توجد تلك التغييرات فقط في المجلد القديم. يجب عليك مقارنة نسختي `PalWorldSettings.ini` وإعادة تطبيق القيم المطلوبة في الملف النشط الآن.

| ما يجب التحقق منه | لماذا هو مهم |
| --- | --- |
| الإعدادات المخصصة الموجودة | قد توجد فقط في مجلد نوع السيرفر السابق |
| إعدادات المودات | نوع سيرفر Windows يُستخدم غالبًا لدعم مودات UE4SS |
| قيم اللعب | السيرفر يقرأ الملف فقط من المسار النشط الخاص بنظام التشغيل |

:::caution لا تفترض تزامن الملفات بين المجلدين
مجلدات إعدادات Linux و Windows منفصلة. تغيير نوع السيرفر لا يضمن تلقائيًا نسخ إعداداتك المخصصة بين الموقعين.
:::

## تحقق من مدخلات الإعداد

نوع السيرفر نفسه عادةً لا يتم التحكم به من خلال سطر داخل `PalWorldSettings.ini`. مع ذلك، بعد التبديل، يجب التأكد من أن ملف الإعداد النشط يحتوي على الإعدادات التي تتوقعها.

هيكل نموذجي لـ `PalWorldSettings.ini` يشبه التالي:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

استبدل العناصر التالية:

- `[your_server_name]` باسم السيرفر الخاص بك
- `[your_admin_password]` بكلمة مرور المدير
- `[your_server_password]` بكلمة مرور الانضمام إذا كنت تستخدمها
- `[your_server_ip]` بعنوان IP العام للسيرفر إذا كان مطلوبًا حسب إعدادك

:::note لا حاجة لأمر خاص في الملف
لا يوجد إدخال معروف في `PalWorldSettings.ini` يغير نوع السيرفر الأساسي من Linux إلى Windows أو العكس. هذا التغيير يتم عبر بيئة السيرفر المثبتة في واجهة التأجير.
:::

## تطبيق التغيير

بعد تغيير نوع السيرفر والتأكد من ملف الإعداد الصحيح، تحتاج إلى تطبيق الإعداد الجديد.

### إعادة تشغيل السيرفر

أعد تشغيل السيرفر من واجهة ZAP-Hosting على الويب بعد حفظ التغييرات.

في كثير من الحالات، إعادة التشغيل العادية تكفي إذا تم تغيير نوع برنامج السيرفر بنجاح.

### إعادة التثبيت إذا تطلبت الواجهة ذلك

بعض عمليات النشر قد تتطلب إعادة تثبيت أو خطوة إعادة تثبيت بعد تغيير نوع البرنامج. إذا ظهرت لك هذه الخيار، اتبع التعليمات بعناية وتحقق بعد ذلك من:

- أن نوع السيرفر الصحيح مفعل
- أن مسار الإعداد الصحيح مستخدم
- أن قيم `PalWorldSettings.ini` لا تزال موجودة

:::danger إعادة التثبيت قد تمحو الملفات
إذا تطلب الأمر إعادة تثبيت، قد تُحذف الملفات المخصصة أو المودات ما لم تقم بعمل نسخة احتياطية أولًا. تحقق دائمًا من بيانات الحفظ، المودات، وملفات الإعداد قبل تأكيد إعادة التثبيت.
:::

## تحقق من أن نوع السيرفر الجديد مفعل

بعد إعادة تشغيل السيرفر، تأكد من نجاح التغيير.

### التأكد عبر مسار الإعداد

افتح `Configs` مرة أخرى وتحقق مما إذا كان مسار الملف النشط الآن يتطابق مع نوع السيرفر الذي اخترته:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### تأكد من توافق المودات

إذا غيرت إلى Windows خصيصًا لدعم مودات UE4SS، تحقق من أن ملفات المود والإعدادات المرتبطة تتطابق الآن مع بيئة سيرفر Windows.

### راجع سلوك السيرفر

تحقق مما إذا كان السيرفر يبدأ بشكل طبيعي وإذا كانت الإعدادات المتوقعة محملة بشكل صحيح.

| نقطة التحقق | النتيجة المتوقعة |
| --- | --- |
| بدء السيرفر بنجاح | لا فشل في التشغيل بعد تغيير النوع |
| مسار الإعداد الصحيح | يتطابق مع نوع سيرفر Linux أو Windows |
| تحميل الإعدادات المخصصة | السيرفر يستخدم `PalWorldSettings.ini` المعدل |
| دعم المودات | يمكن الآن استخدام متطلبات مودات Windows إذا كانت مطبقة |

## استكشاف الأخطاء وإصلاحها

### خيار نوع السيرفر غير ظاهر

إذا لم تجد إعدادًا لتغيير نوع السيرفر، قد يعني ذلك أن الخيار غير متاح مباشرة في واجهة منتجك الحالية. في هذه الحالة، يجب التواصل مع دعم ZAP-Hosting للسؤال عن إمكانية تبديل خدمة Palworld بين نوعي Linux و Windows.

### لم تُطبق إعداداتي بعد التغيير

يحدث هذا عادةً عند تحرير مسار إعدادات خاطئ. تحقق مما إذا كنت قد عدّلت:

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

أو

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

حسب نوع السيرفر النشط حاليًا.

### المودات لا تعمل بعد

التحويل إلى نوع سيرفر Windows فقط قد لا يكفي لإكمال إعداد المود بالكامل. بعض المودات تتطلب ملفات إضافية، محملات، أو خطوات تثبيت يدوية تتجاوز تغيير نوع السيرفر.

## الخاتمة

تهانينا، لقد نجحت في تغيير نوع سيرفر Palworld الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂