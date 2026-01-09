---
id: vserver-windows-enshrouded
title: "VPS: إعداد سيرفر مخصص Enshrouded على ويندوز"
description: "اكتشف كيفية إعداد سيرفر مخصص Enshrouded على VPS ويندوز الخاص بك لتجربة لعب سلسة وتحكم كامل → تعلّم المزيد الآن"
sidebar_label: Enshrouded
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
هل لديك VPS بنظام ويندوز وتريد تثبيت خدمة سيرفر مخصص Enshrouded عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح لك خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qQy4x4cS5Rz8WR4/preview" title="كيفية إعداد سيرفر مخصص Enshrouded على VPS ويندوز!" description="تحب تفهم الأمور بشكل أفضل لما تشوفها على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء بطريقة سهلة. سواء كنت مستعجل أو تحب تتعلم بأسلوب ممتع!"/>
<InlineVoucher />

## التحضير

أول شيء، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في هذا.

بعد ما تدخل على سيرفرك، لازم تثبت **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam، وهو الأداة اللي تتيح لك تحميل ملفات سيرفر الألعاب وملفات ورشة Steam بسهولة. حمّل [SteamCMD من موقع Valve الرسمي](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

سوِ مجلد جديد في أي مكان على سيرفرك، في هذا المثال راح نسميه `steamcmd`. اذهب إلى مجلد التنزيلات، وابحث عن ملف **steamcmd.zip** اللي حملته للتو وضعه داخل مجلد `steamcmd`. الآن فك الضغط عن الملف عن طريق النقر بزر الفأرة الأيمن واستخدام خاصية فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل 7zip أو Winrar. هذا راح ينتج ملف **steamcmd.exe** مفكوك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى تكتمل عملية التثبيت بالكامل.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

بمجرد ظهور رسالة **Loading Steam API.... OK**، تكون العملية اكتملت بنجاح وتقدر تبدأ بتثبيت سيرفر Enshrouded المخصص في القسم التالي.

## التثبيت

بعد التثبيت، راح تقدر تنفذ أوامر داخل نافذة أوامر **steamcmd.exe** اللي شغلتها قبل. لازم تسجل دخول قبل ما تقدر تسوي أي شيء، عن طريق المستخدم **anonymous**، باستخدام الأمر: `login anonymous`

بعد تسجيل الدخول، تقدر تبدأ بتحميل الملفات.

:::tip
اختياري: تقدر تحدد مجلد التثبيت المفضل لك باستخدام الأمر `force_install_dir [path]`، استبدل `[path]` بالمسار اللي تبي تستخدمه لسيرفرك. مثال: 
```
force_install_dir C:\Enshrouded-Server
```
:::

الآن شغّل الأمر `app_update 2278520` اللي راح يبدأ تحميل الملفات. رقم التطبيق **2278520** هو تطبيق **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
لا توقف العملية قبل ما تكتمل عشان تتجنب الأخطاء. ممكن تاخذ شوية وقت، بس الصبر يستاهل! :)
:::

بعد ما يكتمل التحميل بنجاح، اذهب إلى مجلد التنزيل حيث تم تحميل كل ملفات السيرفر. هنا، تقدر تستخدم **enshrouded_server.exe** لتشغيل السيرفر. لكن ننصحك أولًا بعمل تحويل المنافذ وضبط إعدادات السيرفر.

### تحويل المنافذ لسيرفرك

عشان تضمن إن سيرفرك متاح للجمهور، لازم تعدل قواعد تحويل المنافذ للمنافذ اللي يستخدمها سيرفر الألعاب. تقدر تسوي هذا إما عن طريق أوامر Powershell اللي هي أسهل، أو من خلال صفحة جدار الحماية في Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عن طريق Powershell" default>

افتح مربع البحث في ويندوز وابحث عن **Powershell**. تأكد من النقر بزر الفأرة الأيمن واختيار **تشغيل كمسؤول** عشان تحصل على الصلاحيات اللازمة ويشتغل كل شيء صح.

:::info
تأكد إنك تشغل Powershell بوضع المسؤول، وإلا ممكن الإعدادات ما تتطبق بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في نافذة Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

هذه الأوامر راح تنشئ قواعد جدار ناري تلقائيًا ضرورية عشان سيرفر Enshrouded يكون متاح للجمهور.

</TabItem>

<TabItem value="windefender" label="عن طريق Windows Defender">

استخدم البحث في ويندوز وافتح **إعدادات جدار الحماية مع الأمان المتقدم**. ممكن تحتاج تضغط على **الإعدادات المتقدمة** عشان تفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

لازم تنشئ قواعد جديدة لسيرفر Enshrouded. للقيام بذلك، اضغط على قواعد الواردة والصادرة كما هو موضح وأضف القواعد للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 15636-15637
- UDP وارد وصادر: 15636-15637

استخدم دليلنا [تحويل المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية.

</TabItem>
</Tabs>

بعد ما تضيف هذه القواعد، سيرفرك راح يكون متاح، يعني تقدر تتصل به عن طريق عنوان IP الخاص بالسيرفر. تقدر تسوي هذا عن طريق اختيار شخصيتك في القائمة الرئيسية، ثم التوجه إلى تبويب **البحث عن ألعاب** والضغط على **إضافة سيرفر**. هنا، أدخل عنوان IP للسيرفر مع المنفذ (15636 بشكل افتراضي) وكلمة مرور السيرفر (إذا ضبطتها، وإلا اتركها فارغة).

:::tip
اطّلع على دليلنا [تكوين السيرفر](enshrouded-configuration.md) إذا حابب تضيف كلمة مرور لسيرفرك وتضبط الإعدادات.
:::

ننصحك تضبط إعدادات السيرفر أولًا من خلال القسم التالي قبل ما تدخل على السيرفر.

## التكوين

في هذه المرحلة، تكون انتهيت من إعداد سيرفر Enshrouded. تقدر تسوي تكوينات إضافية للسيرفر من خلال ملف التكوين الموجود داخل مجلد السيرفر.

أولًا، انتقل إلى المسار التالي:
```
..EnshroudedServer/ (المجلد الجذري)
```

راح تلاقي ملف التكوين **enshrouded_server.json**. من خلال هذا الملف، تقدر تضبط بعض الإعدادات لسيرفرك. شوف دليلنا [تكوين السيرفر](enshrouded-configuration.md) عشان تعرف كل الخيارات المتاحة ووظائفها.

## تشغيل والتواصل مع سيرفرك

حان الوقت لتشغيل سيرفرك. اذهب إلى المجلد الأساسي لسيرفر Enshrouded وشغّل **enshrouded_server.exe** لبدء التشغيل. هذا راح يفتح وحدة تحكم السيرفر في نافذة الأوامر ويبدأ عملية التشغيل. بعدها تقدر تتصل بالسيرفر مباشرة من خلال تبويب **البحث عن ألعاب**، اضغط على **إضافة سيرفر** وأدخل عنوان IP والمنفذ (الافتراضي 15636).

## الخاتمة

مبروك، لقد نجحت في تثبيت وتكوين سيرفر Enshrouded على VPS الخاص بك! إذا عندك أي أسئلة أو مشاكل، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين لمساعدتك كل يوم!

<InlineVoucher />