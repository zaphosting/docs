---
id: vserver-windows-foundry
title: "VPS: إعداد سيرفر مخصص Foundry على ويندوز"
description: "اكتشف كيفية إعداد سيرفر مخصص Foundry على VPS ويندوز الخاص بك لاستضافة ألعاب سلسة → تعلّم المزيد الآن"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS ويندوز وتريد تثبيت خدمة سيرفر مخصص Foundry عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="كيفية إعداد سيرفر مخصص Foundry على VPS ويندوز!" description="تحب تفهم الأمور بشكل أفضل لما تشوفها على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء بطريقة سهلة. سواء كنت مستعجل أو تحب تتعلم بأكثر طريقة ممتعة!"/>
<InlineVoucher />

## التحضير

أول شيء، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في هذا.

بعد ما تدخل على سيرفرك، لازم تثبت **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam، وهو الأداة اللي تتيح لك تحميل ملفات ورشة Steam وسيرفرات مخصصة بسهولة. حمّل [SteamCMD من موقع Valve الرسمي](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

سوِ مجلد جديد في أي مكان على سيرفرك، في هذا المثال راح نسميه `steamcmd`. اذهب إلى مجلد التنزيلات، ولقِ ملف **steamcmd.zip** اللي حملته وحطه داخل مجلد `steamcmd`. الآن فك الضغط عن الملف بالضغط يمين واستخدام خاصية فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل .7zip أو Winrar. المفروض يطلع لك ملف **steamcmd.exe** بعد فك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى يكتمل التثبيت بالكامل.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

بمجرد ظهور رسالة **Loading Steam API.... OK**، تكون العملية تمت بنجاح وتقدر تبدأ تثبيت سيرفر Foundry المخصص في القسم التالي.

## التثبيت

بعد التثبيت، راح تقدر تنفذ أوامر داخل موجه أوامر **steamcmd.exe** اللي شغلته قبل. لازم تسجل دخول أولاً باستخدام المستخدم **anonymous**، عن طريق الأمر: `login anonymous`

بعد تسجيل الدخول، تقدر تبدأ تحميل الملفات.

:::tip
اختياري: تقدر تحدد مجلد التثبيت المفضل عندك باستخدام الأمر `force_install_dir [path]`، استبدل `[path]` بالمسار اللي تبي تستخدمه لسيرفرك. مثال: 
```
force_install_dir C:\Foundry-Server
```
:::

الآن شغّل الأمر `app_update 2915550` اللي راح يبدأ التحميل. رقم التطبيق **2915550** هو تطبيق **Foundry**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
لا توقف العملية قبل ما تكتمل عشان تتجنب الأخطاء. ممكن ياخذ وقت شوي، بس الصبر يستاهل! :)
:::

بعد ما يكتمل التحميل، اذهب إلى مجلد التنزيل، حيث تم تحميل كل ملفات السيرفر. هنا، تقدر تستخدم **FoundryDedicatedServerLauncher.exe** لتشغيل السيرفر. لكن ننصحك تضبط إعدادات فتح المنافذ وتكوين السيرفر أولاً.

### فتح المنافذ لسيرفرك

عشان تضمن وصول السيرفر للعامة، لازم تعدل قواعد فتح المنافذ للمنافذ اللي يستخدمها سيرفر Foundry. تقدر تسوي هذا إما عن طريق أوامر PowerShell مباشرة، وهي أسهل، أو من خلال صفحة جدار الحماية في Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عن طريق PowerShell" default>

افتح مربع البحث في ويندوز، وابحث عن **PowerShell**. تأكد تضغط يمين وتختار **تشغيل كمسؤول** عشان تكون الصلاحيات متاحة وكل شيء يشتغل صح.

:::info
تأكد إنك تشغل PowerShell بوضع المسؤول، وإلا الإعدادات ممكن ما تتطبق بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في موجه PowerShell:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

هذه الأوامر راح تنشئ قواعد جدار ناري تلقائياً ضرورية عشان سيرفر Foundry يكون متاح للعامة.

</TabItem>

<TabItem value="windefender" label="عن طريق Windows Defender">

استخدم البحث في ويندوز وافتح **إعدادات جدار الحماية مع الأمان المتقدم**. ممكن تحتاج تضغط على **الإعدادات المتقدمة** عشان تفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

لازم تنشئ قواعد جديدة لسيرفر Foundry. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح وأضف القواعد للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 3724، 27015
- UDP وارد وصادر: 3724، 27015

إذا تحتاج مساعدة إضافية، استخدم دليلنا [فتح المنافذ (جدار الحماية)](vserver-windows-port.md).

</TabItem>
</Tabs>

بعد ما تضيف هذه القواعد، سيرفرك راح يكون متاح، يعني تقدر تتصل فيه عبر عنوان IP الخاص بالسيرفر. تقدر تسوي هذا من خلال الذهاب إلى Multiplayer من القائمة الرئيسية، ثم IP Direct Connect وأدخل عنوان IP والمنفذ المستخدم، اللي هو 3724 بشكل افتراضي وكما ضبطته.

ننصحك تضبط إعدادات السيرفر أولاً من خلال القسم التالي قبل ما تدخل على السيرفر.

## التكوين

في هذه المرحلة، تكون انتهيت من إعداد سيرفر Foundry. تقدر تسوي تكوين إضافي للسيرفر عن طريق ملف تكوين. ارجع لمجلد اللعبة، وأنشئ ملف جديد اسمه **app.cfg** (إذا ما كان موجود أصلاً) في الدليل الرئيسي. لازم يكون في نفس المجلد مع ملف تشغيل السيرفر **FoundryDedicatedServerLauncher.exe**.

الآن افتح ملف **app.cfg** باستخدام المفكرة أو أي محرر تفضله، وابدأ تضيف خيارات التكوين للمعلمات اللي تبي تعدلها. كل معلمة تكتبها في سطر جديد بصيغة: اسم_المعلمة=القيمة.

كمثال، هنا ثلاث خيارات تكوين مضبوطة:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

شوف دليلنا [تكوين السيرفر](foundry-configuration.md) عشان تعرف كل الخيارات المتاحة ووظائفها.

## تشغيل السيرفر والاتصال به

حان الوقت لتشغيل سيرفرك. اذهب إلى الدليل الرئيسي وشغل **FoundryDedicatedServerLauncher.exe** لبدء التشغيل. هذا راح يفتح وحدة تحكم السيرفر في موجه الأوامر ويبدأ عملية التشغيل.

الآن تقدر تتصل بالسيرفر مباشرة عبر IP من خلال الذهاب إلى **Multiplayer->IP Direct Connect** وإدخال عنوان IP للسيرفر والمنفذ 3724، اللي هو الافتراضي واللي فتحته.

إذا تبي سيرفرك يظهر في قائمة السيرفرات، تأكد من مراجعة دليلنا [تكوين السيرفر](foundry-configuration.md) وأضف المعلمات `server_name` و `server_is_public` المناسبة في ملف التكوين. احفظ الملف وشغل ملف التشغيل مرة ثانية.

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين سيرفر Foundry بنجاح على VPS الخاص بك! إذا عندك أي أسئلة أو مشاكل إضافية، تواصل مع فريق الدعم عندنا، متوفرين لمساعدتك كل يوم!

<InlineVoucher />