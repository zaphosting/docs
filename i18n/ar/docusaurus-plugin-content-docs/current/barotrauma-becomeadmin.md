---
id: barotrauma-becomeadmin
title: "Barotrauma: كيف تصبح أدمن على سيرفرك الخاص"
description: "اكتشف كيف تعطي صلاحيات الأدمن للتحكم الكامل بالسيرفر وإدارة سلسة داخل اللعبة → تعلّم المزيد الآن"
sidebar_label: كن أدمن
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل بسيرفرك. كأدمن، عندك خيار استخدام كل الخيارات والوظائف المتاحة في اللعبة مباشرةً داخل اللعبة. كل الخطوات اللي تحتاجها لتعيين صلاحيات الأدمن لسيرفرك موضحة بالأسفل.  
<InlineVoucher />

## الإعداد
إضافة أدمن تتم عبر ملف **Clientpermissions.xml** الموجود في الواجهة تحت قسم Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)

لازم تضيف إدخال عميل جديد في الملف عشان تضيف لاعب جديد. الصيغة تكون كالتالي:

```xml
<Client
    name="<player name>"
    steamid="<steamid>"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```

الإدخال يحتوي على المتغيرات **Name, SteamID, Permissions, و Command** ولازم تعدلها. الاسم تقدر تحطه كيف ما تحب، هو بس كعنصر مرجعي للعرض. بعدين لازم تحدد SteamID64 لحساب Steam الخاص فيك.

تقدر تحصل عليه بالدخول على بروفايل Steam الخاص فيك وبعدين كليك يمين في أي مكان على البروفايل. هناك تقدر تنسخ رابط Steam للبروفايل.

![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)

بعدها، لازم تدخل الرابط في واحد من المواقع التالية:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)

هذا راح يعطيك معلومات عامة عن الحساب بالإضافة إلى Steam ID. في حالتنا، **Steam ID 64** هو المطلوب. بعدها لازم تضيف Steam ID في إدخال العميل تحت **SteamID**. النتيجة تكون كالتالي:

```xml
<Client
    name="Name"
    steamid="123456789"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```

الآن أنت أدمن، لكن ما تم إضافة صلاحيات محددة لحسابك بعد. تقدر تضيفها بإضافة الصلاحيات والأوامر اللي تقدر تستخدمها. ممكن تعملها مثلاً كالتالي:

```xml
...
    permissions="<permission(s)>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Name"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```

في هذا المثال، الأدمن حصل على صلاحية الوصول لسجلات السيرفر، الكونسول، وأوامر heal و spawn. بالأسفل راح تلاقي نظرة عامة على الصلاحيات اللي تقدر تضبطها.

## الصلاحيات

| الصلاحيات       | الوصف                                                      |
| ----------------- | ------------------------------------------------------------ |
| ManageRound       | يقدر يبدأ/ينهي الجولات.                                    |
| Kick              | يقدر يطرد لاعبين آخرين.                                    |
| Ban               | يقدر يمنع لاعبين آخرين.                                    |
| Unban             | يقدر يرفع الحظر عن لاعبين آخرين.                           |
| SelectSub         | يقدر يختار الغواصة.                                        |
| SelectMode        | يقدر يختار وضع اللعبة.                                     |
| ManageCampaign    | يقدر يختار الوجهة، المهمة ويشتري الإمدادات من متجر الحملة. |
| ConsoleCommands   | يقدر يستخدم أوامر الكونسول - مع ملاحظة إنك تحتاج تعطي صلاحيات لأوامر الكونسول الفردية كمان. |
| ServerLog         | يقدر يقرأ سجلات السيرفر.                                  |
| ManageSettings    | يقدر يغير إعدادات السيرفر.                                |
| ManagePermissions | يقدر يغير صلاحيات العملاء الآخرين.                         |
| KarmaImmunity     | يكون محمي من تأثيرات نظام الكارما السلبية، ما يخسر كارما. |
| All               | يعطي كل الصلاحيات.                                        |

## الخلاصة

مبروك، أنت الآن ضبطت صلاحيات الأدمن بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لمساعدتك! 🙂

<InlineVoucher />