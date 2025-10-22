---
id: fivem-mastodon
title: "FiveM: إعداد تغذية النشاط لسيرفرك"
description: "اكتشف كيف تدمج تغذية نشاط Mastodon في سيرفرك لتحديثات فورية وتفاعل مجتمعي أفضل → تعلّم المزيد الآن"
sidebar_label: إعداد تغذية النشاط
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## التحضير

لإعداد تغذية النشاط على سيرفرنا، أول شيء لازم نسجل حساب على Mastodon.

## الإعداد

هسة نفتح بروفايل Mastodon وننسخ اسم المستخدم، في حالتنا هو `zaphosting@mstdn.instance`

هسة نقدر نفتح "الإعدادات" على سيرفر FiveM ونعدل ملف server.cfg.

نضيف السطر التالي في آخر الملف:

```
sets activitypubFeed username
```

لازم تستبدل "username" باسم مستخدم Mastodon الخاص فيك.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

هسة نحفظ الملف ونعيد تشغيل السيرفر، بعد حوالي 20 دقيقة راح تظهر تبويب "التغذية" بعد ما يفتح السيرفر.


<InlineVoucher />