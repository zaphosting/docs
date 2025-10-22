---
id: eco-becomeadmin
title: "ECO: كيف تصبح أدمن"
description: "اكتشف كيفية تعيين صلاحيات الأدمن للتحكم الكامل في سيرفر الألعاب وإدارة اللعبة بكفاءة → تعلّم المزيد الآن"
sidebar_label: كيف تصبح أدمن
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل في سيرفر الألعاب الخاص بك. كأدمن، لديك خيار استخدام جميع الخيارات والوظائف المتاحة التي يوفرها اللعبة مباشرة داخل اللعبة. جميع الخطوات التي تحتاج لاتخاذها لتعيين صلاحيات الأدمن لسيرفرك سيتم شرحها أدناه.  
<InlineVoucher />

## الإعداد
إضافة أدمن يتم عبر ملف **Users.eco** الخاص بالإعدادات، والذي يمكنك العثور عليه في الواجهة تحت قسم Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)



لإضافة لاعب جديد كأدمن يجب تعديل الجزء التالي في ملف **Users.eco**:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```



اللاعب الذي تريد تعيينه كأدمن يتم تحديده في حقل **values**. في حال وجود أكثر من أدمن، يتم إضافتهم مفصولين بفواصل. لتحديد اللاعب يتم استخدام SteamID64.

يمكنك العثور عليه بالدخول إلى ملفك الشخصي في Steam ثم الضغط بزر الفأرة الأيمن في أي مكان على الملف الشخصي. هناك يمكنك نسخ رابط Steam الخاص بملفك الشخصي.

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)



بعدها يجب إدخال الرابط في أحد المواقع التالية:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)



هذا سيعطيك معلومات الحساب العامة بالإضافة إلى Steam ID. هذا الأخير يتم إدخاله في حقل **values**. النتيجة ستبدو كالتالي:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```



بعد إعادة تشغيل السيرفر، اللاعبون المسجلون هناك سيتم تعيينهم كأدمن. إذا أردت إضافة المزيد من الأدمن، فلن تحتاج دائمًا للقيام بذلك عبر ملف الإعدادات. بدلاً من ذلك يمكنك فعل ذلك داخل اللعبة باستخدام الأمر التالي:

```
/admin [player]
```



فيما يلي نظرة عامة على أوامر الأدمن الشائعة التي يمكنك تنفيذها كأدمن.



## الأوامر الشائعة

|              الأوامر              |                      الوصف                       |
| :------------------------------: | :----------------------------------------------: |
|             /allblocks             |                   استدعاء جميع الكتل                    |
|          /allconstructed           |         استدعاء جميع الكتل التي يمكن للاعب بناؤها         |
|             /allplants             |                استدعاء جميع كتل النباتات                 |
|             /allskills             |                   فتح جميع المهارات                   |
|            /allterrain             |               استدعاء جميع الكتل القابلة للحفر               |
|          /allworldobjects          |                استدعاء جميع كائنات العالم                |
|      /kick [player],(reason)       |                      طرد لاعب                      |
|       /ban [player],(reason)       |                      حظر لاعب                       |
|     /give [itemname],(amount)      |                 منح نفسك عنصر                  |
| /giveskillpoints [player],(amount) |           منح نقاط مهارة للاعب آخر           |
|                /fly                |                    تفعيل وضع الطيران                    |
|         /move [x],[y],[z]          | تحريكك إلى الإحداثيات x, y, z؛ حيث xyz أعداد صحيحة. |
|       /removeadmin [player]        |               إزالة لاعب من الأدمن               |

يمكنك العثور على المزيد من الأوامر في [ويكي ECO الرسمي](https://eco.gamepedia.com/Chat_Commands).

## الخلاصة

مبروك، لقد قمت بتكوين صلاحيات الأدمن بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />