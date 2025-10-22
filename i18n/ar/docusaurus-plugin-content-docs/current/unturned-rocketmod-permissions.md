---
id: unturned-rocketmod-permissions
title: "Unturned: تعديل صلاحيات السيرفر"
description: "تعرف على كيفية إدارة وتخصيص صلاحيات السيرفر بفعالية لتحكم وأمان أفضل → تعلّم المزيد الآن"
sidebar_label: تعديل الصلاحيات
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## التحضيرات
لكي يتم إنشاء ملفات الإعدادات اللازمة من قبل السيرفر، يجب أولاً تشغيله.
إذا كان السيرفر يعمل، يمكنك إيقافه مرة أخرى.
لأن جميع الملفات الضرورية التي نحتاجها أو يحتاجها السيرفر تم إنشاؤها حينها.

## افتح ملف الإعدادات
الصلاحيات مخزنة في ملف "Permissions.config.xml".
يمكنك بسهولة عرض وتعديل هذا الملف عبر واجهتنا.
فقط اضغط على تبويب "Configs" في واجهة سيرفرك:

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

الملف يسمى "Rocket Permissions" ويمكن فتحه بالنقر على القلم الأزرق للتعديل:

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## فهم ملف الإعدادات
ملف الإعدادات يبدو معقد وصعب في البداية.
نحن هنا لمساعدتك على فهمه!
الملف مقسم إلى مجموعات مختلفة.
المجموعات كلها معروضة ومُدرجة داخل فئة <groups> </groups>.
تبدأ بـ "<groups>" وتنتهي بـ "</groups>":

البداية:

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

النهاية:

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

المجموعات تظهر بينهما.
مثلاً، هذا البلوك كله يمثل مجموعة واحدة:

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

حيث تُعيّن كل المعاملات اللازمة للمجموعة.

## تعديل الصلاحيات
داخل المجموعة ستجد أيضاً فئة "Permissions".
كما ترى في هذه الصورة:

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

هنا يمكننا تعديل صلاحيات المجموعة.
وكذلك تحديد وقت الانتظار قبل استخدام الأمر مرة أخرى.
مثلاً لو أردنا إعطاء المجموعة صلاحية حظر اللاعبين.
يمكننا إدخال التالي:

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

هذا يعني أن المجموعة يمكنها الآن حظر اللاعبين داخل اللعبة، وبما أن "وقت الانتظار" مضبوط على 0 ثواني، يمكن تنفيذ الأمر بشكل متكرر.

لو أردنا أيضاً إعطاء المجموعة صلاحية شفاء نفسها، يمكن إدخالها هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

لكن المستخدم يمكنه استخدام الأمر فقط كل 3600 ثانية.
نفس الطريقة تنطبق على الصلاحيات الأخرى.
لكن بعض الصلاحيات تحتاج إلى إضافات (Plug-ins) خاصة.

## إضافة المستخدمين إلى المجموعة
تم إنشاء المجموعات مع الصلاحيات المطلوبة.
لكن الآن يجب تعيين المستخدمين إلى المجموعات.
لهذا تحتاج إلى Steam64ID الخاص بالمستخدمين.
يمكنك معرفة هذا عبر الضغط على الرابط التالي:
https://steamid.io/

بعد تحديد Steam64ID يمكنك إدخاله في ملف الإعدادات.
يتم ذلك هنا باستخدام معامل Member:

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

سيبدو المثال هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

لذا من الضروري دائماً إنشاء سطر جديد لكل مستخدم جديد تريد تعيينه للمجموعة.
بعد إدخال كل المستخدمين المطلوبين، احفظ الإعدادات بالضغط على زر "Save".
ثم أعد تشغيل السيرفر وستكون مُعيناً إلى المجموعة داخل اللعبة!

<InlineVoucher />