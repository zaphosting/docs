---
id: fivem-esx-disableinventory
title: "FiveM: تعطيل الجرد (F2)"
description: "اكتشف كيف تعطل الجرد الافتراضي في ESX لتخصيص تجربة سيرفرك → تعلّم المزيد الآن"
sidebar_label: تعطيل الجرد (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning دليل مؤرشف
تم أرشفة هذا المستند. يتم أرشفة المستندات إذا لم تعد ذات صلة، أو غير صحيحة، أو قديمة. تم أرشفتها للأسباب التالية:

**السبب**: طريقة التنفيذ خاصة بإصدار ESX قديم. لا يمكن استخدام هذا الأسلوب مع إصدار ESX الحالي، حيث تغيرت البنية.
::::

<InlineVoucher />

## الاتصال عبر FTP

قبل أن نتمكن من تعطيل الجرد، يجب إعداد [الوصول عبر FTP](gameserver-ftpaccess.md).

بعد إتمام الإعداد، يمكنك الآن الاتصال وفتح مجلد السيرفر:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## إجراء التعديلات

الآن نفتح المسار `server-data/resources/[esx]`، هنا نجد مجلد es_extended:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

في هذا المجلد نفتح ملف `config.lua`.

بعد فتح الملف في محرر نصوص، نبحث عن الكود التالي:

```Lua
Config.EnableDefaultInventory   = true -- عرض الجرد الافتراضي ( F2 )
```

نستبدله هنا بـ:

```Lua
Config.EnableDefaultInventory   = false
```


الآن يمكننا حفظ الملف وإعادة تشغيل السيرفر، وبعد الانضمام إلى السيرفر، لن يكون بالإمكان فتح الجرد.

<InlineVoucher />
