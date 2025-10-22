---
id: dedicated-windows-foundry
title: "سيرفر مخصص: إعداد سيرفر Foundry مخصص على ويندوز"
description: "اكتشف كيف تضبط سيرفر Foundry مخصص على VPS ويندوز أو سيرفر مخصص بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS ويندوز أو سيرفر مخصص وتريد تثبيت خدمة سيرفر Foundry المخصص عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="كيفية إعداد سيرفر Foundry مخصص على VPS ويندوز!" description="تحس إنك تفهم أفضل لما تشوف الأمور على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء بشكل مبسط. سواء كنت مستعجل أو تحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>

<InlineVoucher />

## التحضير

أولاً، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في ذلك.

بعد ما تدخل على سيرفرك، لازم تضبط **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam، وهو الأداة اللي تسمح لك بسهولة تحميل مجموعة من ملفات ورشة Steam وملفات السيرفر المخصص. حمّل [SteamCMD من موقع Valve الرسمي](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

سوِ مجلد جديد في أي مكان على سيرفرك، في هذا المثال راح نسميه `steamcmd`. اذهب إلى مجلد التنزيلات، ولقِ ملف **steamcmd.zip** اللي حملته للتو وضعه داخل مجلد `steamcmd`. الآن فك الضغط عن الملف عن طريق النقر بزر الفأرة الأيمن واستخدام خاصية فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل 7zip أو Winrar. هذا راح ينتج ملف **steamcmd.exe** مفكوك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى تكتمل عملية التثبيت بالكامل.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

بمجرد ظهور رسالة **Loading Steam API.... OK**، تكون العملية اكتملت بنجاح وتقدر تبدأ بتثبيت سيرفر Foundry المخصص في القسم التالي.

## التثبيت

بعد التثبيت، راح تقدر تنفذ أوامر داخل موجه أوامر **steamcmd.exe** اللي شغلته قبل. لازم تسجل دخول قبل ما تقدر تسوي أي شيء، عن طريق المستخدم **anonymous** باستخدام الأمر: `login anonymous`

بعد تسجيل الدخول، تقدر تبدأ تحميل الملفات.

:::tip
اختياري: تقدر تحدد مجلد التثبيت المفضل لك باستخدام الأمر `force_install_dir [path]`، استبدل `[path]` بالمسار اللي تبي تستخدمه لسيرفرك. مثلاً:
```
force_install_dir C:\Foundry-Server
```
:::

الآن شغّل الأمر `app_update 2915550` اللي راح يبدأ التحميل. رقم التطبيق **2915550** هو تطبيق **Foundry**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
لا تقاطع العملية قبل ما تكتمل لتجنب الأخطاء. ممكن تأخذ شوية وقت، بس الصبر يستاهل! :)
:::

بعد ما ينجح التحميل، اذهب إلى مجلد التنزيل حيث تم تحميل كل ملفات السيرفر. هنا، تقدر تستخدم **FoundryDedicatedServerLauncher.exe** لتشغيل السيرفر. لكن ننصحك تضبط إعدادات فتح المنافذ وتكوين السيرفر أولاً.

### فتح المنافذ لسيرفرك

عشان تتأكد إن سيرفرك متاح للعامة، لازم تغير قواعد فتح المنافذ للمنافذ اللي يستخدمها سيرفر Foundry. تقدر تسوي هذا إما عن طريق أوامر PowerShell مباشرة، وهي أسهل، أو من خلال صفحة جدار الحماية لويندوز ديفندر.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عن طريق PowerShell" default>

افتح مربع البحث في ويندوز وابحث عن **PowerShell**. تأكد من النقر بزر الفأرة الأيمن واختيار **تشغيل كمسؤول** عشان تكون الصلاحيات متاحة وكل شيء يشتغل صح.

:::info
تأكد من تشغيل PowerShell كمسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
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

استخدم خاصية البحث في ويندوز وافتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج تضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

لازم تنشئ قواعد جديدة لسيرفر Foundry. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح وأضف القواعد للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 3724، 27015
- UDP وارد وصادر: 3724، 27015

استخدم دليلنا [فتح المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية في هذا الموضوع.

</TabItem>
</Tabs>

بعد ما تضيف هذه القواعد، سيرفرك راح يكون متاح، يعني تقدر تتصل به عبر عنوان IP الخاص بالسيرفر. تقدر تسوي هذا من خلال الذهاب إلى Multiplayer من القائمة الرئيسية، ثم IP Direct Connect وأدخل عنوان IP والمنفذ المستخدم، وهو 3724 بشكل افتراضي وكما ضبطته.

ننصحك تضبط إعدادات السيرفر أولاً من خلال القسم التالي قبل ما تدخل على السيرفر.

## التكوين

في هذه المرحلة، تكون انتهيت من إعداد سيرفر Foundry. تقدر تضبط إعدادات السيرفر أكثر من خلال ملف تكوين. ارجع إلى مجلد اللعبة، وأنشئ ملف جديد اسمه **app.cfg** (إذا ما كان موجود أصلاً) في الدليل الجذري. لازم يكون هذا الملف في نفس المجلد اللي فيه ملف تشغيل السيرفر **FoundryDedicatedServerLauncher.exe**.

الآن افتح ملف **app.cfg** باستخدام المفكرة أو أي محرر تفضله، وابدأ تضيف خيارات التكوين للمعلمات اللي تبي تعدلها. ببساطة أنشئ سطر جديد لكل معلمة تبي تضيفها مع علامة يساوي، متبوعة بالقيمة اللي تبي تعينها.

كمثال، هنا ثلاث خيارات تكوين مضبوطة:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

شوف دليلنا [تكوين السيرفر](foundry-configuration.md) عشان تطّلع على كل الخيارات المتاحة ووظائفها.

## تشغيل السيرفر والاتصال به

حان الوقت لتشغيل سيرفرك. اذهب إلى الدليل الجذري وشغل **FoundryDedicatedServerLauncher.exe** لبدء عملية التشغيل. هذا راح يفتح وحدة تحكم السيرفر في موجه الأوامر ويبدأ عملية التشغيل.

الآن تقدر تتصل مباشرة بسيرفرك عبر IP من خلال الذهاب إلى **Multiplayer->IP Direct Connect** وإدخال عنوان IP الخاص بسيرفرك والمنفذ 3724، وهو الافتراضي واللي فتحته.

إذا تبي سيرفرك يظهر في قائمة السيرفرات، تأكد من مراجعة دليلنا [تكوين السيرفر](foundry-configuration.md) وأضف المعلمات المناسبة `server_name` و `server_is_public` في ملف التكوين. احفظ الملف بعد التعديل وشغل ملف التشغيل مرة ثانية.

لقد نجحت في تثبيت Foundry على سيرفر مخصص ويندوز الخاص بك.

<InlineVoucher />