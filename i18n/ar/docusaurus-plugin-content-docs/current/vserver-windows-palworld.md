---
id: vserver-windows-palworld
title: "VPS: إعداد سيرفر مخصص Palworld على ويندوز"
description: "اكتشف كيفية إعداد سيرفر مخصص Palworld على VPS ويندوز الخاص بك لاستضافة لعب سلسة → تعلّم المزيد الآن"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS ويندوز وتريد تثبيت خدمة سيرفر مخصص Palworld عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="كيفية إعداد سيرفر مخصص Palworld على VPS ويندوز!" description="هل تشعر أنك تفهم أفضل عندما ترى الأمور قيد التنفيذ؟ لدينا ما يناسبك! غص في فيديو يشرح كل شيء لك. سواء كنت مستعجلاً أو تفضل استيعاب المعلومات بأكثر الطرق تشويقًا!"/>
<InlineVoucher />

## التحضير

لبداية، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت بحاجة لمساعدة في ذلك.

بمجرد دخولك للسيرفر، ستحتاج إلى إعداد **SteamCMD** لتحميل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam وهو الأداة التي تتيح لك تحميل مجموعة من ملفات ورشة Steam وملفات السيرفر المخصص بسهولة. قم بتحميل [SteamCMD من الموقع الرسمي لشركة Valve](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

أنشئ مجلد جديد في مكان ما على سيرفرك، في هذا المثال سنسميه `steamcmd`. اذهب إلى مجلد التنزيلات، وابحث عن ملف **steamcmd.zip** الذي قمت بتحميله وضعه داخل مجلد `steamcmd`. الآن قم بفك ضغط الملف بالنقر بزر الفأرة الأيمن واستخدام وظيفة فك الضغط في ويندوز مباشرة، أو باستخدام أي برنامج مثل 7zip أو Winrar. يجب أن ينتج عن ذلك ملف **steamcmd.exe** مفكوك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى تكتمل عملية التثبيت بالكامل.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

بمجرد ظهور رسالة **Loading Steam API.... OK**، تكون العملية قد اكتملت بنجاح ويمكنك البدء في تثبيت سيرفر Palworld المخصص في القسم التالي.

## التثبيت

بعد التثبيت، يجب أن تكون قادرًا على تنفيذ الأوامر داخل موجه أوامر **steamcmd.exe** الذي شغلته سابقًا. تحتاج إلى تسجيل الدخول أولاً باستخدام المستخدم **anonymous**، عبر الأمر: `login anonymous`

بمجرد تسجيل الدخول، يمكنك الآن البدء في تحميل الملفات.

:::tip
اختياري: يمكنك تعيين مجلد التثبيت المفضل لديك باستخدام الأمر `force_install_dir [path]`، مع استبدال `[path]` بالمسار الذي ترغب باستخدامه لسيرفرك. على سبيل المثال:
```
force_install_dir C:\Palworld-Server
```
:::

الآن شغّل الأمر `app_update 2394010` الذي سيبدأ عملية التحميل. معرف التطبيق **2394010** هو تطبيق **Palworld**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
يرجى عدم مقاطعة العملية قبل اكتمالها لتجنب الأخطاء. قد يستغرق الأمر بعض الوقت، لكن الصبر يستحق! :)
:::

بمجرد الانتهاء بنجاح، توجه إلى مجلد التنزيل حيث تم تحميل جميع ملفات السيرفر. هنا، يمكنك استخدام **PalServer.exe** لتشغيل السيرفر. لكننا نوصي بإعداد تحويل المنافذ وتكوين السيرفر أولاً.

### تحويل المنافذ لسيرفرك

للتأكد من أن سيرفرك متاح للعامة، يجب تعديل قواعد تحويل المنافذ للمنافذ التي يستخدمها سيرفر الألعاب المخصص. يمكنك فعل ذلك إما عبر أوامر Powershell مباشرة وهو الأسهل، أو عبر صفحة جدار الحماية لويندوز ديفندر.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عبر Powershell" default>

افتح مربع البحث في ويندوز وابحث عن **Powershell**. تأكد من النقر بزر الفأرة الأيمن واختيار **تشغيل كمسؤول** حتى تكون الصلاحيات متاحة وكل شيء يعمل بشكل صحيح.

:::info
تأكد من تشغيل Powershell في وضع المسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في موجه Powershell:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ تلقائيًا قواعد جدار ناري ضرورية لجعل سيرفر Palworld الخاص بك متاحًا للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم وظيفة البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

يجب عليك إنشاء قواعد جديدة لسيرفر Palworld الخاص بك. للقيام بذلك، انقر على قواعد الوارد والصادر كما هو موضح أدناه وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 8211
- UDP وارد وصادر: 8211

يرجى استخدام دليلنا [تحويل المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت بحاجة لمزيد من المساعدة في ذلك.

</TabItem>
</Tabs>

بعد إضافة هذه القواعد، سيكون سيرفرك متاحًا الآن، مما يعني أنه يمكنك الاتصال به عبر عنوان IP الخاص بسيرفرك. يمكنك فعل ذلك من خلال متصفح قائمة السيرفرات وإدخال عنوان IP والمنفذ في البحث في الأسفل. يجب أن تبحث عن: `[your_ip_address]:8211`

ننصحك بتكوين إعدادات سيرفرك أولاً من خلال القسم التالي قبل الوصول للسيرفر.

## التكوين

في هذه المرحلة، تكون قد أنهيت إعداد سيرفر Palworld الخاص بك. يمكنك إجراء المزيد من التكوينات عبر ملف إعدادات موجود داخل مجلد السيرفر.

أولاً، انتقل إلى المسار التالي:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

ستجد ملف التكوين **PalWorldSettings.ini**. من خلال هذا الملف، يمكنك تعديل مجموعة واسعة من الإعدادات لسيرفرك. اطلع على دليلنا [تكوين السيرفر](palworld-configuration.md) لرؤية كل الخيارات المتاحة ووظائفها.

:::note
إذا لم تجد هذا الملف، يرجى تشغيل السيرفر مرة واحدة على الأقل ليتم إنشاؤه تلقائيًا. بدلاً من ذلك، يمكنك نسخ واستخدام الإعدادات الافتراضية من المسار `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### تفعيل وضع Xbox

سيرفرات Palworld المخصصة الآن تأتي مع إمكانية التبديل والعمل كسيرفر مخصص من متجر Microsoft/Xbox للسماح للاعبي Xbox ولاعبي متجر Microsoft على الحاسوب باللعب معًا على نفس السيرفر.

:::note
اللعب المشترك بين نسخ Steam وMicrosoft Store/Xbox غير ممكن حتى الآن. يمكن لسيرفرك أن يعمل إما مع Steam أو مع Microsoft Store/Xbox فقط.
:::

انتقل إلى المسار التالي وافتح ملف **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

أضف إلى هذا الملف المقتطف التالي لتفعيل وضع Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

احفظ الملف وفي المرة القادمة التي تشغل فيها السيرفر سيكون في وضع Xbox.

:::info
على أجهزة Xbox، لا يمكنك الاتصال مباشرة عبر عنوان IP، لذلك إذا كنت تخطط للعب على أجهزة Xbox، يجب أن تجعل سيرفرك المخصص عامًا.

يمكنك فعل ذلك بإنشاء ملف جديد `StartServer.bat` في المجلد الرئيسي وكتابة: `PalServer.exe -publiclobby`. العلامة الخاصة `-publiclobby` تفعّل وضع سيرفر المجتمع مما يجعله متاحًا في قائمة السيرفرات.

يجب أيضًا تعيين اسم سيرفر يمكن العثور عليه بسهولة، اطلع على دليلنا [تكوين السيرفر](palworld-configuration.md) لمعرفة كيفية القيام بذلك.
:::

## تشغيل السيرفر والاتصال به

حان الوقت الآن لتشغيل سيرفرك. قد تحتاج لتثبيت [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) إذا لم يكن مثبتًا مسبقًا على VPS ويندوز الخاص بك.

توجه إلى المجلد الأساسي لسيرفر Palworld وشغّل **PalServer.exe** لبدء عملية التشغيل. سيفتح هذا وحدة تحكم السيرفر في موجه الأوامر ويبدأ التشغيل. إذا سار كل شيء كما هو متوقع، سيكون سيرفرك ظاهرًا في قائمة السيرفرات. بدلاً من ذلك، يمكنك الاتصال مباشرة باستخدام شريط البحث في أسفل قائمة السيرفرات والبحث عن: `[your_ip_address]:8211`.

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين سيرفر Palworld بنجاح على VPS الخاص بك! إذا كان لديك أي أسئلة أو مشاكل أخرى، يرجى التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />