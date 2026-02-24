---
id: humanitz-change-zombie-difficulty
title: "HumanitZ: تغيير صعوبة الزومبي"
description: "تعرف على كيفية تعديل إعدادات صعوبة الزومبي والذكاء الاصطناعي على سيرفر HumanitZ الخاص بك → تعلّم المزيد الآن"
sidebar_label: "تغيير صعوبة الزومبي"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## مقدمة

تلعب صعوبة الزومبي دورًا كبيرًا في تشكيل تجربة البقاء على قيد الحياة في HumanitZ. من قوة وسرعة الزومبي إلى مضاعفات الظهور وفعاليات غارات الذكاء الاصطناعي، تحدد هذه الإعدادات مدى خطورة العالم.

جميع خيارات الصعوبة المتعلقة بالزومبي والذكاء الاصطناعي يتم ضبطها داخل ملف `GameServerSettings.ini` وتتيح لك التحكم الكامل في شدة مواجهات PvE على سيرفرك.

<InlineVoucher />

## الإعدادات

يتم التحكم في إعدادات صعوبة الزومبي في ملف `GameServerSettings.ini`. يمكنك الوصول إلى هذا الملف من خلال لوحة إدارة السيرفر تحت قسم **Configs**. داخل ملف الإعدادات، ابحث عن المعاملات التالية:

```
;Health difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffHealth=1

;Speed difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffSpeed=2

;Damage difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffDamage=3

;Zombie amount multiplier 2 for example would mean twice as many zombies. 0.5 would mean half as many zombies.
ZombieAmountMulti=1

;Human bandit amount multiplier 2 for example would mean twice as many human bandits. 0.5 would mean half as many human bandits.
HumanAmountMulti=1

;Zombie dog mainly appear at night. 2 for example would mean twice as many zombie dogs. 0.5 would mean half as many zombie dogs.
ZombieDogMulti=1

;The time in minutes it takes for zombies to respawn, set to 0 to disable zombie respawning.
ZombieRespawnTimer=90

;The game will sometimes spawn AI events such as zombies or humans raiding your location. 0 = Disabled, 1 = Low, 2 = Default, 3 = High, 4 = Insane
AIEvent=2
```

فيما يلي شرح لما يتحكم به كل إعداد:

- `ZombieDiffHealth` – يتحكم في صعوبة صحة الزومبي  
- `ZombieDiffSpeed` – يتحكم في سرعة حركة الزومبي  
- `ZombieDiffDamage` – يتحكم في مقدار ضرر الزومبي  
- `ZombieAmountMulti` – يضاعف عدد الزومبي الذين يظهرون  
- `HumanAmountMulti` – يضاعف عدد قطاع الطرق البشر الذين يظهرون  
- `ZombieDogMulti` – يضاعف عدد كلاب الزومبي الذين يظهرون  
- `ZombieRespawnTimer` – يحدد الوقت بالدقائق الذي يستغرقه الزومبي لإعادة الظهور (0 لتعطيل إعادة الظهور)  
- `AIEvent` – يتحكم في تكرار فعاليات غارات الذكاء الاصطناعي  

بعد إجراء التعديلات، احفظ الملف وأعد تشغيل السيرفر لتطبيق الإعدادات الجديدة.



## أمثلة على إعدادات الصعوبة

### إعداد سهل للزومبي

هذا التكوين يخلق تجربة PvE أكثر تسامحًا مع أعداء أقل ومستويات تهديد منخفضة.

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### إعداد صعب للزومبي

هذا التكوين يزيد من قوة الأعداء، ومعدلات الظهور، وتكرار الفعاليات لعالم أكثر خطورة.

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## الخاتمة

مبروك! من خلال تعديل القيم المتعلقة بالزومبي في ملف `GameServerSettings.ini`، لقد قمت بتخصيص إعدادات صعوبة الزومبي على سيرفر HumanitZ الخاص بك بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />