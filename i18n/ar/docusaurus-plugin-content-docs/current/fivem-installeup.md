---
id: fivem-installeup
title: "FiveM: تثبيت EUP (حزمة الزي الطارئ)"
description: "اكتشف كيفية إعداد حزمة الزي الطارئ لشخصيات الوضع الحر مع اشتراك Element Club المطلوب → تعلّم المزيد الآن"
sidebar_label: تثبيت EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## مقدمة

**EUP** المعروف أيضًا باسم حزمة الزي الطارئ يتيح لك الحصول على أزياء خدمات الطوارئ لشخصيات الوضع الحر. يشرح التالي بالتفصيل كيف يمكنك تثبيته بالضبط.

:::warning اشتراك Element Club مطلوب
لتثبيت واستخدام EUP، يلزم وجود اشتراك في Element Club. احصل على اشتراكك الخاص من خلال [بوابة Cfx.re](https://portal.cfx.re/subscriptions/element-club)!
:::

<InlineVoucher />



## التحضير

لبدء تثبيت **EUP**، يجب أولاً إجراء بعض التحضيرات. لهذا، يجب تنزيل وفك ضغط [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) و [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip) على جهاز الكمبيوتر الخاص بك. بمجرد تنزيل الملفات، يجب أن تكون قد حصلت على ملفات ZIP التالية:

- `eup-ui.7z`
- `eup-stream.7z`
- `NativeUI-master.zip`

الآن فك ضغط هذه الملفات محليًا على جهاز الكمبيوتر الخاص بك. يجب أن تحتوي الآن على `__resource.lua` أو `fxmanifest.lua` وملفات/مجلدات السكربت.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
بالنسبة لـ NativeUI، يجب عليك أولاً فتح مجلد "NativeUI-master"، هناك ستجد السكربتات الصحيحة. إذا لم يكن الأمر كذلك، فقد تكون في مجلد فرعي، عادةً بنفس الاسم.
:::

## التثبيت
الآن أنت جاهز لبدء التثبيت. للقيام بذلك، اتصل بسيرفرك عبر [FTP](gameserver-ftpaccess.md) وارفع الملفات. يجب رفع الملفات/المجلدات إلى مجلد `resources`. ستجد هذا المجلد ضمن هيكل المجلدات التالي:

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## الإعداد

لكي يتم تحميل الموارد المثبتة، يجب تحديدها في ملف إعدادات السيرفر. للقيام بذلك، سجّل الدخول إلى واجهة txAdmin وانتقل إلى محرر CFG.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## الخاتمة

لقد قمت بتثبيت EUP بنجاح على سيرفر FiveM الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂


<InlineVoucher />