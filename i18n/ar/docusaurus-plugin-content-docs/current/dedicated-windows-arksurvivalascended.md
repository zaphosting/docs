---
id: dedicated-windows-arksurvivalascended
title: "سيرفر مخصص: إعداد سيرفر ARK Survival Ascended مخصص على ويندوز"
description: "اكتشف كيفية إعداد سيرفر ARK: Survival Ascended مخصص على VPS ويندوز أو سيرفر مخصص بسرعة وسهولة → تعلّم المزيد الآن"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة
هل لديك VPS ويندوز أو سيرفر مخصص وتريد تثبيت خدمة سيرفر ARK: Survival Ascended المخصص عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/RpJWENYeqgTQaee/preview" title="إعداد سيرفر ARK: Survival Ascended مخصص على VPS ويندوز" description="تحس إنك تفهم أفضل لما تشوف الأشياء عمليًا؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء بطريقة سهلة. سواء كنت مستعجل أو تحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>



## التحضير

أول شيء، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في هذا.

بعد ما تدخل على سيرفرك، لازم تثبت **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam وهو الأداة اللي تتيح لك تحميل مجموعة من ملفات ورشة Steam وملفات السيرفر المخصص بسهولة. حمّل [SteamCMD من موقع Valve الرسمي](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

أنشئ مجلد جديد في مكان ما على سيرفرك، في هذا المثال سنسميه `steamcmd`. اذهب إلى مجلد التنزيلات، وابحث عن ملف **steamcmd.zip** الذي حملته للتو وضعه داخل مجلد `steamcmd`. الآن فك الضغط عن الملف بالنقر بزر الفأرة الأيمن واستخدام خاصية فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل 7zip أو Winrar. هذا سينتج عنه ملف **steamcmd.exe** مفكوك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى تكتمل عملية التثبيت بالكامل.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

بمجرد ظهور رسالة **Loading Steam API.... OK**، تكون العملية قد اكتملت بنجاح ويمكنك البدء بتثبيت سيرفر ARK: Survival Ascended المخصص في القسم التالي.

## التثبيت

بعد التثبيت، يجب أن تكون قادرًا على تنفيذ الأوامر داخل موجه أوامر **steamcmd.exe** الذي شغلته سابقًا. تحتاج لتسجيل الدخول أولًا قبل أن تتمكن من فعل أي شيء، عبر المستخدم **anonymous**، باستخدام الأمر: `login anonymous`

بعد تسجيل الدخول، يمكنك الآن البدء بتحميل الملفات.

:::tip
اختياري: يمكنك تحديد مجلد التثبيت المفضل لديك باستخدام الأمر `force_install_dir [path]`، مع استبدال `[path]` بالمسار الذي تريد استخدامه لسيرفرك. على سبيل المثال: 
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

الآن شغّل الأمر `app_update 2430930` الذي سيبدأ التحميل. معرف التطبيق **2430930** هو تطبيق **سيرفر ARK: Survival Ascended المخصص**.

![](https://github.com/zaphosting/docs/assets/42719082/98d7c643-04be-488b-8831-86606363f98c)

:::info
يرجى عدم مقاطعة العملية قبل اكتمالها لتجنب الأخطاء. قد يستغرق الأمر بعض الوقت، لكن الصبر يستحق! :)
:::

### إنشاء ملف بدء التشغيل

بعد الانتهاء من التحميل بنجاح، انتقل إلى المجلد الذي قمت بالتثبيت فيه واذهب إلى المجلد الفرعي التالي:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

في هذا المجلد الفرعي، ستحتاج لإنشاء ملف بدء التشغيل اللازم لتشغيل السيرفر المخصص. أنشئ ملفًا باسم: `start-ark.bat`. يمكنك إنشاء مستند نصي أولًا ثم إعادة تسميته لاحقًا إلى امتداد `.bat`.

:::info
تأكد من تفعيل خيار "عرض امتدادات الملفات" في مستكشف الملفات حتى تستخدم الامتداد الصحيح.
:::

افتح الملف باستخدام محرر نصوص (مثل Notepad++) وأضف المحتويات التالية بداخله:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

في هذا الأمر، يجب استبدال `[server_name]`، `[admin_password]` و `[max_players]` بما ترغب به.

إذا أردت أيضًا تعيين كلمة مرور للأشخاص العاديين للانضمام، يمكنك إضافة `?ServerPassword=[join_password]` إلى الأمر في الملف أعلاه. سيصبح الأمر كالتالي:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

تأكد من تعيين المتغيرات وحفظ التغييرات قبل إغلاق الملف.

الآن سيكون سيرفرك متاحًا محليًا عبر `127.0.0.1:7777` بمجرد تشغيل ملف بدء التشغيل وتشغيل السيرفر. لكن، يجب عليك إضافة قواعد إعادة توجيه المنافذ في جدار حماية ويندوز إذا أردت أن يكون السيرفر متاحًا للعامة، وهذا ما سنغطيه في القسم التالي.

### إعادة توجيه المنافذ لسيرفرك

لتضمن أن سيرفرك متاح للعامة، يجب تعديل قواعد إعادة توجيه المنافذ للمنافذ التي يستخدمها سيرفر الألعاب المخصص. يمكنك فعل ذلك إما عبر أوامر Powershell مباشرة (وهي أسهل)، أو عبر صفحة جدار حماية ويندوز Defender.

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
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ تلقائيًا قواعد جدار ناري ضرورية ليكون سيرفر Ark: Survival Ascended متاحًا للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم وظيفة البحث في ويندوز لفتح **إعدادات جدار حماية ويندوز مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

يجب عليك إنشاء قواعد جديدة لسيرفر Ark: Survival Ascended. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح أدناه وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 27020
- UDP وارد وصادر: 27015
- UDP وارد وصادر: 7777-7778

يرجى استخدام دليلنا [إعادة توجيه المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية في هذا.

</TabItem>
</Tabs>

بعد إضافة هذه القواعد، سيكون سيرفرك متاحًا، مما يعني أنه يمكنك الاتصال به عبر عنوان IP الخاص بسيرفرك. يمكنك فعل ذلك بفتح الكونسول داخل اللعبة في Ark: Survival Ascended وتشغيل الأمر `open [your_ip_address]:7777`.

ننصحك بضبط إعدادات السيرفر أولًا من خلال القسم التالي قبل الوصول للسيرفر.

## التهيئة

في هذه المرحلة، تكون قد أنهيت إعداد سيرفر Ark: Survival Ascended المخصص. يمكنك إجراء المزيد من التهيئة للسيرفر عبر ملفين للتهيئة موجودين داخل مجلد السيرفر.

أولًا، انتقل إلى المجلدات التالية:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

ستجد ملفات التهيئة **DefaultGameUserSettings.ini** و **Gameusersettings.ini**. في هذه الملفات، يمكنك تعديل مجموعة واسعة من المتغيرات والخيارات المتعلقة بسيرفرك.


:::warning[دعم اللعب المشترك (CROSSPLAY)]
منذ 18 نوفمبر 2023، يحتاج مالكو السيرفرات لتثبيت قائمة إبطال الشهادات يدويًا والتي يمكن الحصول عليها من https://dev.epicgames.com/ (أو مباشرة من http://crl.r2m02.amazontrust.com/r2m02.crl). يجب تثبيت ملف r2m02.crl الذي تم تحميله (انقر بزر الفأرة الأيمن على الملف) باختيار "وضع كل الشهادات في المخزن التالي" واختيار "سلطات الشهادات الجذرية الموثوقة". قد تحتاج لإعادة تشغيل النظام.

إذا كان مالكو السيرفرات قد ثبتوا ملف الشهادة r2m02.cer قبل 18 نوفمبر 2023 والسيرفر لا يظهر، يجب إزالة تلك الشهادة من النظام للسماح للسيرفرات بالظهور مجددًا بشكل صحيح. لإزالة الشهادة الملغاة، شغّل (Windows + R) واكتب certmgr.msc وابحث عن Amazon RSA 2048 M02 في "سلطات الشهادات الجذرية الموثوقة". يجب فعل نفس الشيء بتشغيل certlm.msc. وأخيرًا، قد تحتاج لإعادة تشغيل النظام.
:::





## تشغيل والاتصال بسيرفرك

حان الوقت الآن لتشغيل سيرفرك. لكن، لكي يبدأ السيرفر بنجاح، يجب عليك تثبيت [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) على VPS ويندوز الخاص بك.

:::info
يجب تثبيت [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) على VPS ويندوز قبل محاولة تشغيل السيرفر إذا لم يكن مثبتًا لديك بعد، لأنه يعتمد عليه. قد لا يبدأ السيرفر بدون هذا التثبيت.
:::

بعد تثبيته على VPS، يمكنك المتابعة لتشغيل السيرفر بتنفيذ ملف **start-ark.bat** الذي أنشأته سابقًا.

هذا سيفتح كونسول السيرفر في موجه الأوامر ويبدأ عملية التشغيل. إذا سار كل شيء كما هو متوقع، سيكون سيرفرك ظاهرًا في قائمة السيرفرات. بدلاً من ذلك، يمكنك الاتصال مباشرة بفتح الكونسول داخل اللعبة وتشغيل الأمر `open [your_ip_address]:7777`.

لقد قمت بتثبيت Ark: Survival Ascended بنجاح على سيرفر ويندوز مخصص خاص بك.