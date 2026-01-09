---
id: dedicated-windows-palworld
title: "سيرفر مخصص: إعداد سيرفر Palworld مخصص على ويندوز"
description: "اكتشف كيفية إعداد سيرفر Palworld مخصص على VPS أو سيرفرك المخصص بنظام ويندوز بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS أو سيرفر مخصص بنظام ويندوز وتريد تثبيت خدمة سيرفر Palworld المخصص عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="كيفية إعداد سيرفر Palworld مخصص على VPS ويندوز!" description="هل تشعر بأنك تفهم أفضل عندما ترى الأمور قيد التنفيذ؟ لدينا ما يناسبك! استمتع بفيديو يشرح كل شيء لك. سواء كنت مستعجلاً أو تفضل التعلم بطريقة ممتعة وتفاعلية!"/>



## التحضير

لبداية، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت بحاجة لمساعدة في ذلك.

بمجرد دخولك إلى السيرفر، ستحتاج إلى إعداد **SteamCMD** لتتمكن من تحميل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam، وهو الأداة التي تتيح لك تحميل مجموعة من ملفات ورشة Steam وسيرفرات الألعاب المخصصة بسهولة. قم بتحميل [SteamCMD من الموقع الرسمي لشركة Valve](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

أنشئ مجلدًا جديدًا في مكان ما على سيرفرك، في هذا المثال سنسميه `steamcmd`. اذهب إلى مجلد التنزيلات، وابحث عن ملف **steamcmd.zip** الذي قمت بتحميله وضعه داخل مجلد `steamcmd`. الآن قم بفك ضغط الملف بالنقر بزر الفأرة الأيمن واستخدام وظيفة فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل 7zip أو Winrar. يجب أن ينتج عن ذلك ملف **steamcmd.exe** مفكوك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى تكتمل عملية التثبيت بالكامل.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

بمجرد ظهور الرسالة **Loading Steam API.... OK**، تكون العملية قد اكتملت بنجاح ويمكنك البدء في تثبيت سيرفر Palworld المخصص في القسم التالي.

## التثبيت

بعد التثبيت، يجب أن تكون قادرًا على تنفيذ الأوامر داخل موجه أوامر **steamcmd.exe** الذي شغلته سابقًا. تحتاج إلى تسجيل الدخول أولاً قبل أن تتمكن من فعل أي شيء، وذلك عبر المستخدم **anonymous** باستخدام الأمر: `login anonymous`

بمجرد تسجيل الدخول، يمكنك الآن البدء في تحميل الملفات.

:::tip
اختياري: يمكنك تعيين مجلد التثبيت المفضل لديك باستخدام الأمر `force_install_dir [path]`، مع استبدال `[path]` بالمسار الذي ترغب باستخدامه لسيرفرك. على سبيل المثال:
```
force_install_dir C:\Palworld-Server
```
:::

الآن شغّل الأمر `app_update 2394010` الذي سيبدأ عملية التحميل. معرف التطبيق **2394010** هو تطبيق **Palworld**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
يرجى عدم مقاطعة العملية قبل اكتمالها لتجنب الأخطاء. قد يستغرق الأمر بعض الوقت، لكن الصبر يستحق! :)
:::

بمجرد الانتهاء بنجاح، انتقل إلى مجلد التنزيل حيث تم تحميل جميع ملفات السيرفر. هنا، يمكنك استخدام **PalServer.exe** لتشغيل السيرفر. مع ذلك، نوصي بإعداد إعادة توجيه المنافذ وتكوين السيرفر أولاً.

### إعادة توجيه المنافذ لسيرفرك

للتأكد من أن سيرفرك متاح للعامة، يجب تعديل قواعد إعادة توجيه المنافذ للمنافذ التي يستخدمها سيرفر الألعاب المخصص. يمكنك فعل ذلك إما عبر أوامر Powershell مباشرة وهو الأسهل، أو عبر صفحة جدار الحماية لويندوز ديفندر.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عبر Powershell" default>

افتح مربع البحث في ويندوز وابحث عن **Powershell**. تأكد من النقر بزر الفأرة الأيمن واختيار **تشغيل كمسؤول** حتى تكون الصلاحيات متاحة وكل شيء يعمل بشكل صحيح.

:::info
تأكد من تشغيل Powershell بوضع المسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في موجه Powershell:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ قواعد جدار ناري تلقائيًا ضرورية لجعل سيرفر Palworld الخاص بك متاحًا للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم وظيفة البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

يجب عليك إنشاء قواعد جديدة لسيرفر Palworld الخاص بك. للقيام بذلك، انقر على قواعد الواردة والصادرة كما هو موضح أدناه وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 8211
- UDP وارد وصادر: 8211

يرجى استخدام دليلنا [إعادة توجيه المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت بحاجة لمزيد من المساعدة في ذلك.

</TabItem>
</Tabs>

بعد إضافة هذه القواعد، سيكون سيرفرك متاحًا الآن مما يعني أنه يمكنك الاتصال به عبر عنوان IP الخاص بسيرفرك. يمكنك فعل ذلك من خلال متصفح قائمة السيرفرات وإدخال عنوان IP والمنفذ في البحث في الأسفل. يجب أن تبحث عن: `[your_ip_address]:8211`

ننصحك بتكوين إعدادات سيرفرك أولاً من خلال القسم التالي قبل الوصول إلى السيرفر.

## التكوين

في هذه المرحلة، تكون قد أنهيت إعداد سيرفر Palworld الخاص بك. يمكنك إجراء المزيد من التكوينات للسيرفر عبر ملف التكوين الموجود داخل مجلد سيرفرك.

أولاً، انتقل إلى المسار التالي:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

ستجد ملف التكوين **PalWorldSettings.ini**. من خلال هذا الملف، يمكنك تعديل مجموعة واسعة من الإعدادات لسيرفرك. اطلع على دليلنا [تكوين السيرفر](palworld-configuration.md) للاطلاع على جميع الخيارات المتاحة ووظائفها.

:::note
إذا لم تجد هذا الملف، يرجى تشغيل السيرفر مرة واحدة على الأقل ليتم إنشاؤه تلقائيًا. بدلاً من ذلك، يمكنك نسخ واستخدام الإعدادات الافتراضية من المسار `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### تفعيل وضع Xbox

سيرفرات Palworld المخصصة الآن تدعم إمكانية التغيير لتعمل كسيرفر مخصص من متجر Microsoft/Xbox للسماح للاعبي Xbox ولاعبي متجر Microsoft على الحاسوب باللعب معًا على نفس السيرفر.

:::note
اللعب المشترك بين نسخ Steam وMicrosoft Store/Xbox غير ممكن حتى الآن. يمكن لسيرفرك أن يعمل إما لنسخة Steam أو لنسخة Microsoft Store/Xbox فقط.
:::

انتقل إلى المسار التالي وافتح ملف **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

أضف المقتطف التالي داخل الملف لتفعيل وضع Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

احفظ الملف، وفي المرة القادمة التي تشغل فيها السيرفر، سيكون في وضع Xbox.

:::info
على أجهزة Xbox، لا يمكنك الاتصال مباشرة عبر عنوان IP، لذلك إذا كنت تخطط للعب على أجهزة Xbox، يجب أن تجعل سيرفرك المخصص عامًا.

يمكنك فعل ذلك بإنشاء ملف جديد `StartServer.bat` في المجلد الرئيسي وكتابة: `PalServer.exe -publiclobby`. العلامة الخاصة `-publiclobby` تفعّل وضع سيرفر المجتمع مما يجعله متاحًا في قائمة السيرفرات.

يجب أيضًا تعيين اسم سيرفر يمكن العثور عليه بسهولة، اطلع على دليلنا [تكوين السيرفر](palworld-configuration.md) لمعرفة كيفية القيام بذلك.
:::

## تشغيل السيرفر والاتصال به

حان الوقت الآن لتشغيل سيرفرك. قد تحتاج إلى تثبيت [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) إذا لم يكن مثبتًا بالفعل على سيرفرك المخصص بنظام ويندوز.

اذهب إلى المجلد الأساسي لسيرفر Palworld وشغّل **PalServer.exe** لبدء عملية التشغيل. سيفتح هذا وحدة تحكم السيرفر في نافذة موجه الأوامر ويبدأ عملية التشغيل. إذا سار كل شيء كما هو متوقع، سيكون سيرفرك ظاهرًا في قائمة السيرفرات. بدلاً من ذلك، يمكنك الاتصال مباشرة باستخدام شريط البحث في أسفل قائمة السيرفرات والبحث عن: `[your_ip_address]:8211`.

لقد قمت بتثبيت Palworld بنجاح على سيرفرك المخصص بنظام ويندوز.