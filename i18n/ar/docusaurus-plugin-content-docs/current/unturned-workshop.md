---
id: unturned-workshop
title: "Unturned: تثبيت محتوى الورشة على السيرفر"
description: "اكتشف كيف تعزز سيرفر ألعاب Unturned الخاص بك بمحتوى مخصص من Steam Workshop لتجربة لعب شخصية → تعلّم المزيد الآن"
sidebar_label: محتوى الورشة
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

ورشة Steam تعطيك فرصة لتخصيص سيرفرك أكثر. في التالي راح نشرح كيف تضيف محتوى أكثر لسيرفرك باستخدام Steam Workshop.

### التحضير

في مصادر مختلفة تقدر تحمل منها مودات، خرائط، موديلات، وغيرها. أشهرها هو Steam Workshop. هناك تلاقي موارد كثيرة تقدر تثبتها على سيرفرك. أول شيء لازم تلاقي العناصر اللي تبغاها من الورشة. ورشة Steam لـ Unturned تقدر تلاقيها هنا:  [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

بعد ما تختار، لازم تنسخ معرّف العنصر (ID) وتضيفه في الواجهة. سواء كنت تتصفح Steam Workshop من خلال المتصفح أو Steam Client، تقدر تنسخ الـ ID كما هو موضح تحت:

- **Steam Client**

  اضغط كليك يمين على صفحة العنصر في Steam Workshop واختر Copy page url. انسخ الـ ID من الرابط.

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

  

- **المتصفح**

  بتلقى مجموعة أرقام بعد **.../?id=** في شريط العنوان. انسخها.

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)





### إضافة المحتوى

بعد ما تجمع المحتويات اللي تبغاها، الحين تضيفها للسيرفر. المحتويات المطلوبة بتحددها في ملف **WorkshopDownloadConfig.json** الموجود في الواجهة تحت Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

الحين نضيف معرّفات Steam Workshop لكل عنصر في 'FileIDs'. النتيجة النهائية ممكن تكون مثل كذا:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // مثال (Placeholder)
    0987654321  // مثال (Placeholder)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "تم اكتشاف تحديث لملف الورشة، الإغلاق خلال: {0}",
  "Shutdown_Kick_Message": "إغلاق بسبب تحديث ملف الورشة."
}
```

بعدها لازم تشغل السيرفر. المحتوى اللي ضفته راح ينزل تلقائياً أثناء عملية التشغيل. تقدر تشوف هذا في الـ Live Console. المفروض تطلع لك رسالة مثل هذي:

```
1 workshop item(s) to download...
Downloading workshop item 1567256534
Successfully downloaded workshop item: 1567256534
```

الحين تم تنزيل المحتوى بنجاح، تم إعداده، ولازم يكون شغال.

<InlineVoucher />