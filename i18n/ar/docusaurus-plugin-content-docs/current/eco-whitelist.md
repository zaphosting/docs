---
id: eco-whitelist
title: "ECO: تفعيل القائمة البيضاء"
description: "اكتشف كيف تحمي سيرفرك عن طريق إدارة وصول اللاعبين باستخدام ميزة القائمة البيضاء في ECO → تعلّم المزيد الآن"
sidebar_label: القائمة البيضاء
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## مقدمة

تتيح لك القائمة البيضاء في ECO حماية سيرفرك بالسماح فقط للاعبين المختارين المدرجين في القائمة بالاتصال بالسيرفر.

<InlineVoucher />

### التفعيل (الإعداد)

يتم تفعيل القائمة البيضاء تلقائيًا. تصبح نشطة بمجرد إضافة لاعب واحد على الأقل إلى القائمة. يجب إضافة اللاعبين إلى ملف الإعداد **Users.eco**. 

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



الحقل **$values** يحتوي على SteamIDs للاعبين الذين يجب إضافتهم إلى القائمة البيضاء. يمكنك العثور عليها بفتح ملف تعريف Steam الخاص بك أولاً ثم النقر بزر الماوس الأيمن في أي مكان فيه. هناك يمكنك نسخ رابط Steam الخاص بالملف الشخصي. 



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


بعد ذلك افتح إحدى الصفحات التالية والصق رابط ملفك الشخصي هناك: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

سيزودك هذا بمعلومات عامة بالإضافة إلى Steam ID لحسابك. في هذه الحالة نحتاج فقط إلى SteamID64. سيتم تعيين SteamID64 عند **$values**. سيبدو الأمر هكذا:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "weitereSteamID"      
      ]
    }
```



### التفعيل (الدردشة)

بدلاً من ذلك، يمكن أيضًا إضافة المزيد من اللاعبين إلى القائمة البيضاء باستخدام صلاحيات المسؤول داخل اللعبة. يتم إضافة اللاعبين إلى القائمة البيضاء عبر الدردشة/الكونسول باستخدام الأمر التالي:

```
/whitelist [player]
```



## إدارة القائمة البيضاء

يمكن إدارة القائمة البيضاء فقط في ملف الإعداد **Users.eco**، لأنه لا يوجد أمر سيرفر لإزالة لاعب من القائمة البيضاء. إذا أردت إزالة لاعب، كل ما عليك فعله هو حذفه من ملف الإعداد. كما يلزم إعادة تشغيل السيرفر لتطبيق التغيير. 

<InlineVoucher />
