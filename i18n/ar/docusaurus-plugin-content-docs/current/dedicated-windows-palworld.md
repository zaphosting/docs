---
id: dedicated-windows-palworld
title: "سيرفر مخصص: إعداد سيرفر Palworld مخصص على ويندوز"
description: "اكتشف كيف تضبط سيرفر Palworld مخصص على VPS أو سيرفرك المخصص بنظام ويندوز بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS أو سيرفر مخصص بنظام ويندوز وتريد تثبيت خدمة سيرفر Palworld المخصص عليه؟ أنت في المكان الصح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="كيفية إعداد سيرفر Palworld مخصص على VPS ويندوز!" description="تحس إنك تفهم أحسن لما تشوف الأمور على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء بطريقة سهلة. سواء كنت مستعجل أو تحب تتعلم بأسلوب ممتع!"/>

<InlineVoucher />

## التحضير

أول شيء، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) لو تحتاج مساعدة في هالخطوة.

بعد ما تدخل على سيرفرك، لازم تثبت **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam، وهو الأداة اللي تتيح لك تحميل ملفات سيرفر الألعاب وملفات ورشة Steam بسهولة. حمّل [SteamCMD من موقع Valve الرسمي](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

سوِ مجلد جديد في أي مكان على سيرفرك، في هذا المثال راح نسميه `steamcmd`. اذهب لمجلد التنزيلات، دور على ملف **steamcmd.zip** اللي حملته وحطه داخل مجلد `steamcmd`. بعدين فك الضغط عن الملف بالضغط يمين واستخدام خاصية فك الضغط في ويندوز، أو باستخدام برامج مثل 7zip أو Winrar. المفروض يطلع لك ملف **steamcmd.exe** بعد الفك.

شغّل **steamcmd.exe** وانتظر لين يكتمل التثبيت بالكامل.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

أول ما تطلع رسالة **Loading Steam API.... OK**، يعني العملية تمت بنجاح وتقدر تبدأ تثبيت سيرفر Palworld المخصص في القسم التالي.

## التثبيت

بعد التثبيت، المفروض تقدر تنفذ أوامر داخل نافذة أوامر **steamcmd.exe** اللي شغلتها قبل. لازم تسجل دخول أولاً باستخدام المستخدم **anonymous**، عن طريق الأمر: `login anonymous`

بعد تسجيل الدخول، تقدر تبدأ تحميل الملفات.

:::tip
اختياري: تقدر تحدد مجلد التثبيت المفضل لك باستخدام الأمر `force_install_dir [path]`، استبدل `[path]` بالمسار اللي تبي تستخدمه لسيرفرك. مثال: 
```
force_install_dir C:\Palworld-Server
```
:::

الآن شغّل الأمر `app_update 2394010` عشان يبدأ التحميل. رقم التطبيق **2394010** هو تطبيق **Palworld**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
لا توقف العملية قبل ما تخلص عشان تتجنب الأخطاء. ممكن ياخذ وقت شوي، بس الصبر يستاهل! :)
:::

بعد ما ينجح التحميل، اذهب لمجلد التنزيل اللي فيه كل ملفات السيرفر. هنا، تقدر تستخدم **PalServer.exe** لتشغيل السيرفر. لكن ننصحك تضبط إعدادات فتح المنافذ وتكوين السيرفر أولاً.

### فتح منافذ السيرفر

عشان تضمن إن سيرفرك متاح للناس، لازم تعدل قواعد فتح المنافذ للمنافذ اللي يستخدمها سيرفر الألعاب. تقدر تسوي هالشي إما بأوامر Powershell اللي أسهل، أو من خلال صفحة جدار الحماية في ويندوز.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عن طريق Powershell" default>

افتح مربع البحث في ويندوز، وابحث عن **Powershell**. تأكد تضغط يمين وتختار **تشغيل كمسؤول** عشان يكون عندك الصلاحيات اللازمة.

:::info
تأكد إنك تشغل Powershell بوضع المسؤول، وإلا الإعدادات ما راح تطبق صح.
:::

بعدها، انسخ والصق الأوامر التالية في نافذة Powershell:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

هالأوامر بتنشئ قواعد جدار ناري تلقائياً ضرورية عشان سيرفر Palworld يكون متاح للناس.

</TabItem>

<TabItem value="windefender" label="عن طريق Windows Defender">

استخدم البحث في ويندوز وافتح **إعدادات جدار الحماية مع الأمان المتقدم**. ممكن تحتاج تضغط على **الإعدادات المتقدمة** عشان تفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

لازم تنشئ قواعد جديدة لسيرفر Palworld. اضغط على قواعد الوارد والصادر كما هو موضح وأضف القواعد للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 8211
- UDP وارد وصادر: 8211

لو تحتاج مساعدة إضافية، استخدم دليلنا [فتح المنافذ (جدار الحماية)](vserver-windows-port.md).

</TabItem>
</Tabs>

بعد ما تضيف هالقواعد، سيرفرك بيصير متاح للاتصال، يعني تقدر تتصل فيه عن طريق عنوان IP الخاص بالسيرفر. تقدر تسوي هذا من خلال متصفح قائمة السيرفرات وتدخل عنوان IP مع المنفذ في البحث بالأسفل. ابحث عن: `[your_ip_address]:8211`

ننصحك تضبط إعدادات السيرفر أولاً من القسم التالي قبل ما تدخل للسيرفر.

## التكوين

بهالمرحلة، انتهيت من إعداد سيرفر Palworld. تقدر تضبط إعدادات السيرفر أكثر من خلال ملف التكوين الموجود داخل مجلد السيرفر.

أولاً، اذهب للمسار التالي:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

راح تلاقي ملف التكوين **PalWorldSettings.ini**. من خلال هالملف، تقدر تضبط مجموعة كبيرة من الإعدادات لسيرفرك. شوف دليلنا [تكوين السيرفر](palworld-configuration.md) عشان تعرف كل الخيارات المتاحة ووظائفها.

:::note
إذا ما شفت الملف، شغّل سيرفرك مرة وحدة على الأقل عشان يتولد تلقائياً. أو تقدر تنسخ الإعدادات الافتراضية من المسار `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### تفعيل وضع Xbox

سيرفرات Palworld المخصصة صار فيها خيار تشتغل كسيرفر مخصص من Microsoft Store/Xbox عشان تتيح للاعبين Xbox ولاعبي Microsoft Store على PC يلعبون مع بعض على نفس السيرفر.

:::note
اللعب المشترك بين نسخ Steam وMicrosoft Store/Xbox ما صار ممكن لحد الآن. سيرفرك يا يكون مخصص لـ Steam أو لـ Microsoft Store/Xbox فقط.
:::

اذهب للمسار التالي وافتح ملف **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

ضيف السطر التالي داخل الملف لتفعيل وضع Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

احفظ الملف، وفي المرة الجاية اللي تشغل فيها السيرفر بيشتغل بوضع Xbox.

:::info
على أجهزة Xbox، ما تقدر تتصل مباشرة عبر عنوان IP، فلو ناوي تلعب على Xbox لازم تخلي سيرفرك مخصص عام.

تقدر تسوي هذا بإنشاء ملف `StartServer.bat` جديد في المجلد الرئيسي وتكتب فيه: `PalServer.exe -publiclobby`. العلامة الخاصة `-publiclobby` تخلي السيرفر في وضع سيرفر المجتمع ويظهر في قائمة السيرفرات.

كمان لازم تضبط اسم للسيرفر يكون سهل العثور عليه، شوف دليلنا [تكوين السيرفر](palworld-configuration.md) عشان تعرف كيف.
:::

## تشغيل السيرفر والاتصال به

الحين جاء وقت تشغيل سيرفرك. ممكن تحتاج تثبت [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) إذا ما كان موجود عندك على سيرفر ويندوز المخصص.

روح للمجلد الرئيسي لسيرفر Palworld وشغّل **PalServer.exe** عشان تبدأ عملية التشغيل. راح تفتح لك نافذة الكونسول وتبدأ عملية التشغيل. إذا كل شيء مشى تمام، سيرفرك بيظهر في قائمة السيرفرات. أو تقدر تتصل مباشرة باستخدام شريط البحث في أسفل قائمة السيرفرات وتكتب: `[your_ip_address]:8211`.

مبروك! أنت ثبتت Palworld على سيرفرك المخصص بنظام ويندوز بنجاح.

<InlineVoucher />