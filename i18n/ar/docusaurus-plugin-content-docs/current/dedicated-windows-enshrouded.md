---
id: dedicated-windows-enshrouded
title: "سيرفر مخصص: إعداد سيرفر Enshrouded مخصص على ويندوز"
description: "اكتشف كيف تضبط سيرفر Enshrouded مخصص على VPS ويندوز أو سيرفر مخصص بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة
هل لديك VPS ويندوز أو سيرفر مخصص وتريد تثبيت خدمة سيرفر Enshrouded المخصص عليه؟ أنت في المكان الصح. في هذا الدليل، سنشرح لك خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="كيفية إعداد سيرفر Enshrouded مخصص على VPS ويندوز!" description="تحس إنك تفهم أفضل لما تشوف الأشياء عم تشتغل؟ إحنا معك! غوص في الفيديو اللي بيشرح كل شيء بطريقة سهلة. سواء كنت مستعجل أو تحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>



## التحضير

أول شيء، اتصل بـ VPS الخاص فيك عن طريق سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في هالخطوة.

بعد ما تدخل على سيرفرك، لازم تضبط **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam، وهو الأداة اللي بتخليك تحمل بسهولة مجموعة من ملفات ورشة Steam وسيرفرات الألعاب المخصصة. حمّل [SteamCMD من الموقع الرسمي لفالف](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

سوِ مجلد جديد في مكان ما على سيرفرك، في هذا المثال راح نسميه `steamcmd`. اذهب لمجلد التنزيلات، دور على ملف **steamcmd.zip** اللي حملته للتو وحطه داخل مجلد `steamcmd`. الحين فك الضغط عن الملف عن طريق النقر بزر الفأرة الأيمن واستخدام خاصية فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل 7zip أو Winrar. المفروض يطلع لك ملف **steamcmd.exe** بعد فك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر لين يكتمل التثبيت بالكامل.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

بمجرد ما تظهر الرسالة **Loading Steam API.... OK**، العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Enshrouded المخصص في القسم التالي.

## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر داخل نافذة أوامر **steamcmd.exe** اللي شغلتها قبل. لازم تسجل دخول قبل ما تقدر تعمل أي شيء، عن طريق المستخدم **anonymous**، باستخدام الأمر: `login anonymous`

بعد تسجيل الدخول، تقدر تبدأ بتحميل الملفات.

:::tip
اختياري: تقدر تحدد مجلد التثبيت المفضل عندك باستخدام الأمر `force_install_dir [path]`، استبدل `[path]` بالمسار اللي تبي تستخدمه لسيرفرك. مثلاً:
```
force_install_dir C:\Enshrouded-Server
```
:::

الآن شغّل الأمر `app_update 2278520` عشان يبدأ التحميل. رقم التطبيق **2278520** هو تطبيق **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
لا توقف العملية قبل ما تخلص عشان تتجنب الأخطاء. ممكن تاخذ شوي، بس الصبر يستاهل! :)
:::

بعد ما يخلص التحميل، اذهب لمجلد التنزيل اللي فيه كل ملفات السيرفر. هنا، تقدر تستخدم **enshrouded_server.exe** لتشغيل السيرفر. لكن ننصحك تضبط إعدادات فتح المنافذ (port forwarding) لسيرفرك أول.

### فتح المنافذ لسيرفرك

عشان تتأكد إن سيرفرك متاح للناس، لازم تعدل قواعد فتح المنافذ للمنافذ اللي يستخدمها سيرفر الألعاب. تقدر تسوي هالشي إما عن طريق أوامر Powershell اللي أسهل، أو من خلال صفحة جدار الحماية في Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عن طريق Powershell" default>

افتح صندوق البحث في ويندوز، وابحث عن **Powershell**. تأكد إنك تضغط كليك يمين وتختار **تشغيل كمسؤول** عشان يكون عندك الصلاحيات اللازمة وكل شيء يشتغل صح.

:::info
تأكد إنك تشغل Powershell بوضع المسؤول، وإلا الإعدادات ما راح تنطبق بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في نافذة Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

هذي الأوامر راح تنشئ قواعد جدار ناري تلقائياً ضرورية عشان سيرفر Enshrouded يكون متاح للناس.

</TabItem>

<TabItem value="windefender" label="عن طريق Windows Defender">

استخدم البحث في ويندوز وافتح **إعدادات جدار الحماية مع الأمان المتقدم**. ممكن تحتاج تضغط على **الإعدادات المتقدمة** عشان تفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

لازم تنشئ قواعد جديدة لسيرفر Enshrouded. عشان تسوي هذا، اضغط على قواعد الوارد والصادر كما هو موضح تحت وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 15636-15637
- UDP وارد وصادر: 15636-15637

استخدم دليلنا [فتح المنافذ (جدار الحماية)](vserver-windows-port.md) إذا تحتاج مساعدة إضافية.

</TabItem>
</Tabs>

بعد ما تضيف هالقواعد، سيرفرك راح يكون متاح، يعني تقدر تتصل فيه عن طريق عنوان IP الخاص بالسيرفر. تقدر تسوي هذا باختيار شخصيتك في القائمة الرئيسية، وروح لتبويب **البحث عن ألعاب** واضغط **إضافة سيرفر**. هنا، أدخل عنوان IP للسيرفر مع المنفذ (15636 بشكل افتراضي) وكلمة مرور السيرفر (إذا ضبطتها، وإلا اتركها فارغة).

:::tip
اطّلع على دليلنا [تكوين السيرفر](enshrouded-configuration.md) إذا حابب تضيف كلمة مرور لسيرفرك وتعدل الإعدادات.
:::

ننصحك تضبط إعدادات سيرفرك أولاً من القسم التالي قبل ما تدخل للسيرفر.

## التكوين

بهالمرحلة، انتهيت من إعداد سيرفر Enshrouded. تقدر تسوي تكوينات إضافية للسيرفر عن طريق ملف التكوين الموجود داخل مجلد السيرفر.

أولاً، اذهب للمسار التالي:
```
..EnshroudedServer/ (المجلد الرئيسي)
```

راح تلاقي ملف التكوين **enshrouded_server.json**. من خلال هذا الملف، تقدر تضبط بعض الإعدادات لسيرفرك. شوف دليلنا [تكوين السيرفر](enshrouded-configuration.md) عشان تعرف كل الخيارات المتاحة ووظائفها.

## تشغيل والاتصال بسيرفرك

الحين جاء وقت تشغيل سيرفرك. اذهب للمجلد الأساسي لسيرفر Enshrouded وشغل **enshrouded_server.exe** عشان تبدأ عملية التشغيل. هذا راح يفتح كونسول السيرفر في نافذة أوامر ويبدأ التشغيل. تقدر تتصل بالسيرفر مباشرة عن طريق الذهاب لتبويب **البحث عن ألعاب**، اضغط **إضافة سيرفر** وأدخل عنوان IP والمنفذ (الافتراضي 15636).

مبروك! لقد ثبت سيرفر Enshrouded بنجاح على سيرفر ويندوز مخصص خاصتك.