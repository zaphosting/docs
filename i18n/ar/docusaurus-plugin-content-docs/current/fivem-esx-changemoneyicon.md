---
id: fivem-esx-changemoneyicon
title: "FiveM: تغيير أيقونة المال"
description: "اكتشف كيف تخصص أيقونة المال في سيرفرك لتجربة لعب مميزة → تعلّم المزيد الآن"
sidebar_label: تغيير أيقونة المال
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
تم أرشفة هذا الدليل. يتم أرشفة الوثائق إذا لم تعد ذات صلة، أو غير صحيحة، أو قديمة. تم أرشفتها للأسباب التالية:

**السبب**: طريقة التنفيذ خاصة بإصدار ESX قديم. لا يمكن استخدام هذا الأسلوب مع إصدار ESX الحالي بسبب تغيّر الهيكل.
::::



<InlineVoucher />

## الاتصال عبر FTP

أولاً يجب إعداد [الوصول عبر FTP](gameserver-ftpaccess.md).

بعد الإعداد، يمكنك الآن الاتصال وفتح مجلد السيرفر.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


هنا نفتح ملف `server.cfg` داخل مجلد `server-data`.

## تعديل الإعدادات

الآن نضيف السطر التالي فوق سطر `start essentialmode`:

```Lua
set es_moneyIcon "$"
```

يمكننا هنا استبدال علامة $ بالأيقونة التي نريدها.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


بعد حفظ الملف وإعادة تشغيل السيرفر، ستتغير أيقونة المال داخل اللعبة.

<InlineVoucher />