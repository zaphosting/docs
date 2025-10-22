---
id: ark-becomeadmin
title: "ARK: كيف تصبح أدمن"
description: "اكتشف كيف تدير سيرفر ألعابك بتحكم كامل كأدمن وتحسن تجربة اللعب → تعلّم المزيد الآن"
sidebar_label: كن أدمن
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل بسيرفرك. كأدمن، عندك خيار استخدام كل الخيارات والوظائف المتاحة في اللعبة مباشرةً داخل اللعبة. كل الخطوات اللي تحتاجها لتعيين صلاحيات الأدمن لسيرفرك موضحة أدناه.  
<InlineVoucher />

## الإعداد

صلاحيات الأدمن تسمح لك بإجراء تغييرات مباشرة داخل اللعبة على سيرفرك بدون الحاجة لتعديلها في ملف الإعدادات. عشان تعطي صلاحيات أدمن لنفسك أو للاعبين ثانيين، لازم أولاً تحدد كلمة سر لأدمن السيرفر. هالكلمة تُحدد في إعدادات واجهة الويب الخاصة بنا.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

بعد ما تحدد كلمة السر، لازم تعيد تشغيل السيرفر. بعدها تقدر تتصل بسيرفرك وتسجل دخولك كأدمن عبر الكونسول داخل اللعبة باستخدام الأمر التالي وكلمة سر الأدمن:

```
enableCheats password
```

بعدها تقدر تنفذ كل أوامر السيرفر كأدمن. في الأسفل راح تلاقي نظرة عامة على أشهر الأوامر المستخدمة.

## الأوامر الشائعة

| الأمر                                         | الوصف                                                        |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | تفعيل / تعطيل قائمة الغش                                   |
| admincheat AllowPlayerToJoinNoCheck SteamID    | إضافة لاعب إلى القائمة البيضاء                              |
| admincheat DisallowPlayerToJoinNoCheck SteamID | إزالة لاعب من القائمة البيضاء                              |
| admincheat SetMessageOfTheDay رسالة             | تحديد رسالة اليوم (MOTD). تظهر هالرسالة لما يتصل لاعب بسيرفر الألعاب |
| admincheat broadcast رسالة                      | إرسال رسالة لكل اللاعبين على السيرفر                         |
| admincheat god                                 | تفعيل الخلود للاعب الخاص بك                                 |
| admincheat fly                                 | تفعيل الطيران للاعب الخاص بك                                |
| admincheat walk                                | تعطيل الطيران للاعب الخاص بك                                |
| admincheat teleport                            | نقل لاعبك للاتجاه اللي تناظر له حالياً                       |
| admincheat slomo                               | يغير سرعة السيرفر وسرعة حركة كل اللاعبين                    |
| admincheat playersonly                         | يوقف حركة كل المخلوقات ويوقف/يمنع الحرف اليدوية             |
| admincheat ghost                               | تفعيل وضع النوكليب للاعب الخاص بك                           |
| admincheat forcetame                           | يتيح ترويض الديناصورات فوراً والركوب بدون سرج               |
| admincheat listplayers                         | يعرض كل اللاعبين مع SteamId64                               |
| admincheat banplayer SteamId64                 | حظر اللاعبين باستخدام SteamID64                             |
| admincheat unbanplayer SteamId64               | رفع الحظر عن اللاعبين باستخدام SteamID64                    |
| admincheat setplayerpos x y z                  | ينقل اللاعب لموقع معين حسب الإحداثيات                        |
| admincheat saveworld                           | حفظ الحالة الحالية للعالم                                   |
| admincheat addexperience كمية                   | يضيف خبرة للاعب                                            |
| admincheat settimeofday وقت                     | يغير وقت اليوم في سيرفر الألعاب. مثال: "admincheat settimeofday 12:00" |

## الخاتمة

مبروك، لقد ضبطت صلاحيات الأدمن بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لمساعدتك! 🙂

<InlineVoucher />