---
id: minecraft-whitelist
title: "ماينكرافت: تفعيل وتعديل القائمة البيضاء للسيرفر"
description: "اكتشف كيف تحمي سيرفر ألعاب ماينكرافت الخاص بك عن طريق إدارة وصول اللاعبين باستخدام ميزات القائمة البيضاء وحماية تجربتك → تعلّم المزيد الآن"
sidebar_label: القائمة البيضاء
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
**القائمة البيضاء في ماينكرافت** هي خيار لحماية سيرفرك عن طريق السماح فقط للاعبين المختارين المدرجين في القائمة بالاتصال بسيرفرك. بشكل افتراضي، ماينكرافت لا يقدم خيار كلمة مرور للسيرفر مثل الألعاب الأخرى.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="كيفية تفعيل القائمة البيضاء على سيرفر ماينكرافت الخاص بك" description="تحب تفهم الأمور بشكل أفضل لما تشوفها على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء خطوة بخطوة. سواء كنت مستعجل أو تحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>

<InlineVoucher />

## تفعيل القائمة البيضاء



### التفعيل (الإعدادات)

لتفعيل القائمة البيضاء، لازم قيمة الأمر في ملف **server.properties** تكون مضبوطة على **true**. لازم تعيد تشغيل السيرفر عشان التغيير يشتغل.

```
white-list=true
```



### التفعيل (الدردشة)

بدلًا من كده، تقدر تفعل خيار القائمة البيضاء داخل اللعبة أو عبر الكونسول المباشر:

```
/whitelist on			(تفعيل خيار القائمة البيضاء)
/whitelist off			(تعطيل خيار القائمة البيضاء)
```



لتفعيل القائمة البيضاء من داخل اللعبة، لازم يكون عندك صلاحيات مشغل! وإذا ما عندك، تقدر تستخدم الكونسول المباشر (الواجهة). خليك عارف إن الأوامر لازم تنفذ بدون رمز **/** هناك.


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## إدارة القائمة البيضاء



### إضافة / إزالة لاعبين



**الدردشة**

تقدر تضيف أو تحذف لاعبين من القائمة البيضاء باستخدام الأوامر التالية:

```
/whitelist add SpielerName
/whitelist remove SpielerName
```



**white-list.json**

لو كنت تعرف UUID الخاص باللاعب، تقدر تضيفه يدويًا عبر ملف **white-list.json**. تقدر توصل للملف وتعدله باستخدام FTP. تلاقي شرح الاتصال عبر FTP هنا: [الوصول عبر FTP](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler3"
  }
]
```



### تحديث القائمة

لو ضفت لاعبين يدويًا، لازم تعيد تحميل القائمة البيضاء داخل اللعبة. تقدر تسوي هذا باستخدام أمر لتجنب إعادة تشغيل السيرفر:

```
 /whitelist reload
```



### عرض القائمة

لو ما حابب تفتح ملف القائمة البيضاء عبر FTP كل مرة، تقدر تعرض كل اللاعبين الموجودين في القائمة باستخدام الأمر التالي:

```
/whitelist list
```


<InlineVoucher />
