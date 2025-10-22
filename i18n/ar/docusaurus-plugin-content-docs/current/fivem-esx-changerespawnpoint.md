---
id: fivem-esx-changerespawnpoint
title: "FiveM: تعيين نقطة إعادة الظهور"
description: "اكتشف كيفية تحديث نقاط إعادة الظهور لسيارات الإسعاف في ESX لتخصيص طريقة اللعب وتحسين إدارة السيرفر → تعلّم المزيد الآن"
sidebar_label: تغيير نقطة إعادة الظهور
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning دليل مؤرشف
تم أرشفة هذا المستند. يتم أرشفة المستندات إذا لم تعد ذات صلة، أو غير صحيحة، أو قديمة. تم أرشفتها للأسباب التالية:

**السبب**: طريقة التنفيذ خاصة بإصدار قديم من ESX. لا يمكن استخدام هذا الأسلوب مع إصدار ESX الحالي، حيث تغيرت البنية.
::::



:::info
يجب تثبيت ESX
:::

<InlineVoucher />

📔 التحضيرات

للعثور على الإحداثيات نحتاج إلى سكربت Coords مثل هذا:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
قم بتثبيته بهذه الطريقة: [تثبيت الموارد](fivem-installresources.md)
هل قمنا بتثبيت هذا السكربت؟ ثم اضغط داخل اللعبة على */coords*
سيعطينا هذا الإحداثيات.

📑 تعديل الإعدادات

بمجرد حصولنا على الإحداثيات نذهب إلى تبويب الإعدادات (Config)

هنا نضغط **CTRL + F** ونبحث عن **ambulance**
سيفتح لنا هذا الملف.
نقوم بالتمرير للأسفل حتى نجد **Config_RespawnPoint**.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

الآن سنقوم بتعديل هذه الإحداثيات واستبدالها.
بعد ذلك فقط نضغط على حفظ وهكذا.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
بعد إعادة تشغيل السيرفر، ستصبح التغييرات فعالة.
:::

<InlineVoucher />