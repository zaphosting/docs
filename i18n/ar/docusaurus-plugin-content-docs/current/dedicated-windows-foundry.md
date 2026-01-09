---
id: dedicated-windows-foundry
title: "سيرفر مخصص: إعداد سيرفر Foundry مخصص على ويندوز"
description: "اكتشف كيفية إعداد سيرفر Foundry مخصص على VPS ويندوز أو سيرفر مخصص بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة

هل لديك VPS ويندوز أو سيرفر مخصص وتريد تثبيت خدمة سيرفر Foundry المخصص عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="كيفية إعداد سيرفر Foundry مخصص على VPS ويندوز!" description="تحس إنك تفهم أفضل لما تشوف الأشياء عمليًا؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء بطريقة سهلة. سواء كنت مستعجل أو تحب تتعلم بأسلوب ممتع!"/>



## التحضير

أول شيء، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في ذلك.

بعد ما تدخل على سيرفرك، تحتاج تثبت **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam، وهو الأداة اللي تسمح لك بسهولة تحميل ملفات ورشة Steam وسيرفرات مخصصة. حمّل [SteamCMD من موقع Valve الرسمي](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

أنشئ مجلد جديد في مكان ما على سيرفرك، في هذا المثال سنسميه `steamcmd`. اذهب إلى مجلد التنزيلات، وابحث عن ملف **steamcmd.zip** الذي حملته للتو وضعه داخل مجلد `steamcmd`. الآن فك ضغط الملف عن طريق النقر بزر الفأرة الأيمن واستخدام وظيفة فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل 7zip أو Winrar. هذا سينتج عنه ملف **steamcmd.exe** مفكوك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى تكتمل عملية التثبيت بالكامل.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

بمجرد ظهور رسالة **Loading Steam API.... OK**، تكون العملية قد اكتملت بنجاح ويمكنك البدء في تثبيت سيرفر Foundry المخصص في القسم التالي.

## التثبيت

بعد التثبيت، يجب أن تكون قادرًا على تنفيذ الأوامر داخل موجه أوامر **steamcmd.exe** الذي شغلته سابقًا. تحتاج لتسجيل الدخول قبل أن تتمكن من فعل أي شيء، عبر المستخدم **anonymous**، باستخدام الأمر: `login anonymous`

بعد تسجيل الدخول، يمكنك الآن البدء في تحميل الملفات.

:::tip
اختياري: يمكنك تعيين مجلد التثبيت المفضل لديك باستخدام الأمر `force_install_dir [path]`، مع استبدال `[path]` بالمسار الذي تريد استخدامه لسيرفرك. على سبيل المثال:
```
force_install_dir C:\Foundry-Server
```
:::

الآن شغّل الأمر `app_update 2915550` الذي سيبدأ عملية التحميل. رقم التطبيق **2915550** هو تطبيق **Foundry**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
يرجى عدم مقاطعة العملية قبل اكتمالها لتجنب الأخطاء. قد تستغرق بعض الوقت، لكن الصبر يستحق! :)
:::

بعد النجاح، اذهب إلى مجلد التنزيل حيث تم تحميل جميع ملفات السيرفر. هنا، يمكنك استخدام **FoundryDedicatedServerLauncher.exe** لتشغيل السيرفر. لكن ننصحك أولًا بإعداد تحويل المنافذ وتكوين السيرفر.

### تحويل المنافذ لسيرفرك

لتضمن أن سيرفرك متاح للعامة، يجب تعديل قواعد تحويل المنافذ للمنافذ التي يستخدمها سيرفر Foundry. يمكنك فعل ذلك إما عبر أوامر PowerShell مباشرة، وهو الأسهل، أو عبر صفحة جدار حماية Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عبر PowerShell" default>

افتح مربع البحث في ويندوز وابحث عن **PowerShell**. تأكد من النقر بزر الفأرة الأيمن واختيار **تشغيل كمسؤول** حتى تكون الصلاحيات متاحة وكل شيء يعمل بشكل صحيح.

:::info
تأكد من تشغيل PowerShell بوضع المسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في موجه PowerShell:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ قواعد جدار ناري تلقائيًا ضرورية لجعل سيرفر Foundry متاحًا للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم وظيفة البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

يجب عليك إنشاء قواعد جديدة لسيرفر Foundry. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح أدناه وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 3724، 27015
- UDP وارد وصادر: 3724، 27015

يرجى استخدام دليلنا [تحويل المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية في ذلك.

</TabItem>
</Tabs>

بعد إضافة هذه القواعد، سيكون سيرفرك متاحًا الآن، مما يعني أنه يمكنك الاتصال به عبر عنوان IP الخاص بسيرفرك. يمكنك فعل ذلك من خلال الذهاب إلى Multiplayer من القائمة الرئيسية، ثم اختيار IP Direct Connect وإدخال عنوان IP والمنفذ المستخدم، وهو 3724 بشكل افتراضي وكما قمت بإعداده.

ننصحك بتكوين إعدادات سيرفرك أولًا من خلال القسم التالي قبل الوصول إلى السيرفر.

## التكوين

في هذه المرحلة، تكون قد أنهيت إعداد سيرفر Foundry الخاص بك. يمكنك إجراء المزيد من التكوين عبر ملف إعدادات. عد إلى مجلد اللعبة، وأنشئ ملف جديد باسم **app.cfg** (إذا لم يكن موجودًا بالفعل) في الدليل الجذري. يجب أن يُنشأ هذا الملف في نفس المجلد الذي يحتوي على ملف تشغيل السيرفر **FoundryDedicatedServerLauncher.exe**.

الآن يمكنك فتح ملف **app.cfg** باستخدام المفكرة أو أي محرر تختاره، وبدء إضافة خيارات التكوين للمعلمات التي تريد تعديلها. ببساطة أنشئ سطرًا جديدًا لكل معلمة تريد إضافتها مع علامة يساوي، متبوعة بالقيمة التي تريد تعيينها.

كمثال، هنا ثلاث خيارات تكوين تم تعيينها:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

اطلع على دليلنا [تكوين السيرفر](foundry-configuration.md) لرؤية جميع الخيارات المتاحة وما تقوم به كل واحدة.

## بدء الاتصال بسيرفرك

حان الوقت الآن لتشغيل سيرفرك. اذهب إلى الدليل الجذري وشغل **FoundryDedicatedServerLauncher.exe** لبدء عملية التشغيل. هذا سيفتح وحدة تحكم السيرفر في موجه الأوامر ويبدأ عملية التشغيل.

الآن يمكنك الاتصال المباشر بسيرفرك عبر IP من خلال الذهاب إلى **Multiplayer->IP Direct Connect** وإدخال عنوان IP الخاص بسيرفرك والمنفذ 3724، وهو الافتراضي والمنفذ الذي قمت بتحويله.

إذا كنت تريد أن يظهر سيرفرك في قائمة السيرفرات، يرجى مراجعة دليلنا [تكوين السيرفر](foundry-configuration.md) وإضافة المعلمات المناسبة `server_name` و `server_is_public` في ملف التكوين. احفظ الملف بعد الانتهاء وشغل ملف السيرفر التنفيذي مرة أخرى.

لقد قمت بتثبيت Foundry بنجاح على سيرفرك المخصص بنظام ويندوز.