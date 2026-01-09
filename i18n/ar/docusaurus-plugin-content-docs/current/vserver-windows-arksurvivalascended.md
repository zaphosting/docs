---
id: vserver-windows-arksurvivalascended
title: "VPS: إعداد سيرفر مخصص لـ ARK Survival Ascended على ويندوز"
description: "اكتشف كيفية إعداد سيرفر مخصص لـ ARK: Survival Ascended على VPS بنظام ويندوز لتجربة لعب سلسة وتحكم كامل بالسيرفر → تعلّم المزيد الآن"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
هل لديك VPS بنظام ويندوز وتريد تثبيت خدمة سيرفر مخصص لـ ARK: Survival Ascended عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="إعداد سيرفر مخصص لـ ARK: Survival Ascended على VPS ويندوز" description="تحس إنك تفهم أفضل لما تشوف الأمور على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء بطريقة سهلة. سواء كنت مستعجل أو تحب تتعلم بطريقة ممتعة!"/>
<InlineVoucher />

## التحضير

أولاً، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في ذلك.

بعد ما تدخل على السيرفر، لازم تثبت **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam، وهو الأداة اللي تتيح لك تحميل ملفات سيرفر مخصصة وملفات ورشة Steam بسهولة. حمّل [SteamCMD من موقع Valve الرسمي](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

سوّي مجلد جديد في مكان ما على السيرفر، في هذا المثال راح نسميه `steamcmd`. اذهب إلى مجلد التنزيلات، ولقِ ملف **steamcmd.zip** اللي حملته وحطه داخل مجلد `steamcmd`. الآن فك الضغط عن الملف بالضغط يمين واستخدام خاصية فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل 7zip أو Winrar. المفروض يطلع لك ملف **steamcmd.exe** بعد فك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى يكتمل التثبيت بالكامل.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

بمجرد ظهور رسالة **Loading Steam API.... OK**، يعني العملية تمت بنجاح وتقدر تبدأ تثبيت سيرفر ARK: Survival Ascended المخصص في القسم التالي.

## التثبيت

بعد التثبيت، راح تقدر تنفذ أوامر داخل نافذة أوامر **steamcmd.exe** اللي شغلتها قبل. لازم تسجل دخول أولاً باستخدام المستخدم **anonymous**، عن طريق الأمر: `login anonymous`

بعد تسجيل الدخول، تقدر تبدأ تحميل الملفات.

:::tip
اختياري: تقدر تحدد مجلد التثبيت المفضل لك باستخدام الأمر `force_install_dir [path]`، استبدل `[path]` بالمسار اللي تبي تستخدمه للسيرفر. مثلاً:
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

الآن شغّل الأمر `app_update 2430930` عشان يبدأ التحميل. رقم التطبيق **2430930** هو تطبيق **سيرفر ARK: Survival Ascended المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
لا توقف العملية قبل ما تخلص عشان تتجنب الأخطاء. ممكن ياخذ وقت شوي، بس الصبر يستاهل! :)
:::

### إنشاء ملف بدء التشغيل

بعد ما يكتمل التحميل بنجاح، اذهب إلى المجلد اللي ثبت فيه السيرفر وادخل إلى المجلد الفرعي التالي:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

في هذا المجلد الفرعي، لازم تنشئ ملف بدء التشغيل اللي تحتاجه عشان تشغل السيرفر المخصص. أنشئ ملف باسم: `start-ark.bat`. تقدر تنشئ ملف نصي أولاً وبعدين تغير امتداده إلى `.bat`.

:::info
تأكد إن خيار "عرض امتدادات الملفات" مفعل في مستكشف الملفات عشان تستخدم الامتداد الصحيح.
:::

افتح الملف باستخدام محرر نصوص (مثل Notepad++) وأضف المحتويات التالية:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

في هذا الأمر، استبدل `[server_name]`، `[admin_password]` و `[max_players]` بالقيم اللي تبيها.

إذا تبي تضبط كلمة مرور للناس العادية عشان يقدرون ينضمون، أضف `?ServerPassword=[join_password]` للأمر في الملف أعلاه. بيصير كالتالي:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

تأكد إنك ضبطت المتغيرات وحفظت التغييرات قبل ما تقفل الملف.

السيرفر راح يكون متاح محلياً عبر `127.0.0.1:7777` لما تشغل ملف بدء التشغيل ويشتغل السيرفر. لكن لازم تضيف قواعد تحويل المنافذ في جدار حماية ويندوز إذا تبي السيرفر يكون متاح للعامة، وراح نشرحها في القسم التالي.

### تحويل المنافذ للسيرفر

عشان تضمن إن السيرفر متاح للعامة، لازم تعدل قواعد تحويل المنافذ للمنافذ اللي يستخدمها سيرفر ARK المخصص. تقدر تسويها إما بأوامر Powershell اللي أسهل، أو من خلال صفحة جدار حماية ويندوز.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عن طريق Powershell" default>

افتح مربع البحث في ويندوز، وابحث عن **Powershell**. تأكد تضغط يمين وتختار **تشغيل كمسؤول** عشان تكون الصلاحيات متاحة وكل شيء يشتغل صح.

:::info
تأكد إنك تشغل Powershell بوضع المسؤول، وإلا الإعدادات ممكن ما تتطبق بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في نافذة Powershell:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

هذه الأوامر راح تنشئ قواعد جدار ناري تلقائياً ضرورية عشان سيرفر Ark: Survival Ascended يكون متاح للعامة.

</TabItem>

<TabItem value="windefender" label="عن طريق Windows Defender">

استخدم البحث في ويندوز وافتح **إعدادات جدار الحماية مع الأمان المتقدم**. ممكن تحتاج تضغط على **الإعدادات المتقدمة** عشان تفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

لازم تنشئ قواعد جديدة لسيرفر Ark: Survival Ascended. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح وأضف القواعد للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 27020
- UDP وارد وصادر: 27015
- UDP وارد وصادر: 7777-7778

استخدم دليلنا [تحويل المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية.

</TabItem>
</Tabs>

بعد ما تضيف هذه القواعد، سيرفرك راح يكون متاح، يعني تقدر تتصل فيه عبر عنوان IP الخاص بالسيرفر. تقدر تسوي هذا بفتح الكونسول داخل لعبة Ark: Survival Ascended وتشغيل الأمر `open [your_ip_address]:7777`.

ننصحك تضبط إعدادات السيرفر أولاً من خلال القسم التالي قبل ما تدخل للسيرفر.

## التهيئة

بهذه المرحلة، تكون خلصت إعداد سيرفر ARK: Survival Ascended المخصص. تقدر تضبط إعدادات السيرفر أكثر من خلال ملفين للتهيئة موجودين داخل مجلد السيرفر.

أولاً، اذهب إلى المجلدات التالية:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

راح تلاقي ملفات التهيئة **DefaultGameUserSettings.ini** و **Gameusersettings.ini**. في هذه الملفات، تقدر تعدل مجموعة واسعة من المتغيرات والخيارات المتعلقة بسيرفرك.

:::warning[دعم اللعب المشترك (CROSSPLAY)]
منذ 18 نوفمبر 2023، يحتاج مالكو السيرفرات لتثبيت قائمة إلغاء الشهادات يدوياً والتي يمكن الحصول عليها من https://dev.epicgames.com/ (أو مباشرة من http://crl.r2m02.amazontrust.com/r2m02.crl). يجب تثبيت ملف r2m02.crl المحمّل (انقر يمين على الملف) باختيار "وضع كل الشهادات في المخزن التالي" واختيار "سلطات الشهادات الجذرية الموثوقة". قد تحتاج لإعادة تشغيل النظام.

إذا كان مالكو السيرفرات قد ثبتوا ملف الشهادة r2m02.cer قبل 18 نوفمبر 2023 والسيرفر لا يظهر، يجب إزالة تلك الشهادة من النظام للسماح للسيرفرات بالظهور مجدداً. لإزالة الشهادة الملغاة، شغّل (Windows + R) واكتب certmgr.msc وابحث عن Amazon RSA 2048 M02 في "سلطات الشهادات الجذرية الموثوقة". يجب تكرار نفس الخطوة باستخدام certlm.msc. وأخيراً، قد تحتاج لإعادة تشغيل النظام.
:::

## تشغيل والاتصال بسيرفرك

حان الوقت لتشغيل السيرفر. لكن، عشان السيرفر يشتغل بنجاح، لازم تثبت [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) على VPS ويندوز الخاص بك.

:::info
لازم تثبت [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) على VPS ويندوز قبل محاولة تشغيل السيرفر إذا ما كان مثبت عندك، لأنه يعتمد عليه. السيرفر قد لا يبدأ بدون هذا التثبيت.
:::

بعد ما تثبتها على VPS، تقدر تبدأ تشغيل السيرفر بتنفيذ ملف **start-ark.bat** اللي أنشأته سابقاً.

هذا راح يفتح كونسول السيرفر في نافذة أوامر ويبدأ عملية التشغيل. إذا كل شيء تم كما هو متوقع، سيرفرك راح يظهر في قائمة السيرفرات. أو تقدر تتصل مباشرة بفتح الكونسول داخل اللعبة وتشغيل الأمر `open [your_ip_address]:7777`.

## الخاتمة

مبروك، لقد نجحت في تثبيت وضبط سيرفر ARK-Survival-Ascended على VPS الخاص بك! إذا عندك أي أسئلة أو مشاكل إضافية، تواصل مع فريق الدعم عندنا، متوفرين لمساعدتك كل يوم!

<InlineVoucher />