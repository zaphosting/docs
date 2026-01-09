---
id: vserver-windows-mythofempires
title: "VPS: إعداد سيرفر مخصص لـ Myth of Empires على ويندوز"
description: "اكتشف كيف تضبط سيرفر مخصص لـ Myth of Empires على VPS ويندوز بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: إعداد سيرفر MOE المخصص
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة
هل لديك VPS بنظام ويندوز وتريد تثبيت سيرفر MOE مخصص عليه؟ أنت في المكان الصحيح. في هذا الدليل سنشرح لك خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4WnZSyGqLyN7pmG/preview" title="كيفية إعداد سيرفر Myth Of Empires على VPS ويندوز!" description="تحب تفهم الأمور بشكل أفضل لما تشوفها على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء بطريقة سهلة. سواء كنت مستعجل أو تحب تتعلم بأكثر طريقة ممتعة!"/>

<InlineVoucher />

## التحضير
أول شيء، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في هذا.

بعد ما تدخل على السيرفر، لازم تثبت **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam، وهو الأداة اللي تتيح لك تحميل ملفات سيرفرات مخصصة وملفات ورش Steam بسهولة. حمّل [SteamCMD من موقع Valve الرسمي](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

سوِ مجلد جديد في أي مكان على سيرفرك، في هذا المثال راح نسميه `steamcmd`. اذهب إلى مجلد التنزيلات، ولقِ ملف **steamcmd.zip** اللي حملته وحطه داخل مجلد `steamcmd`. الآن فك الضغط عن الملف عن طريق النقر بزر الفأرة الأيمن واستخدام خاصية فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل 7zip أو Winrar. المفروض يطلع لك ملف **steamcmd.exe** بعد فك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى يكتمل التثبيت بالكامل.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

بمجرد ظهور رسالة **Loading Steam API.... OK**، يعني العملية تمت بنجاح وتقدر تبدأ تثبيت سيرفر MOE المخصص في القسم التالي.

## التثبيت

بعد التثبيت، راح تقدر تنفذ أوامر داخل نافذة أوامر **steamcmd.exe** اللي شغلتها قبل. لازم تسجل دخول أولاً باستخدام المستخدم **anonymous** عن طريق الأمر: `login anonymous`

بعد تسجيل الدخول، تقدر تبدأ تحميل الملفات.

:::tip
اختياري: تقدر تحدد مجلد التثبيت المفضل عندك باستخدام الأمر `force_install_dir [path]`، استبدل `[path]` بالمسار اللي تبي تستخدمه لسيرفرك. مثال: 
```
force_install_dir C:\MOE-Server
```
:::

الآن شغّل الأمر `app_update 1794810` عشان يبدأ التحميل. رقم التطبيق **1794810** هو تطبيق **MOE**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
لا توقف العملية قبل ما تخلص عشان تتجنب الأخطاء. ممكن تاخذ شوية وقت، بس الصبر يستاهل! :)
:::

بعد ما ينجح التحميل، اذهب إلى مجلد التنزيل حيث تم تحميل كل ملفات السيرفر.

### الوصول إلى PrivateServerTool

على عكس تثبيتات SteamCMD العادية، MOE يحتاج منك تنسخ مجلد من تثبيت لعبتك المحلي على Steam عشان تقدر تشغل السيرفر على ويندوز.

افتح Steam على جهازك، اضغط كليك يمين على لعبة **Myth of Empires** واختر **تصفح الملفات المحلية** (Browse local files) وأنت واقف على قسم **إدارة** (Manage).

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

في المجلد الرئيسي اللي يفتح، دور على مجلد **PrivateServerTool**. هذا هو المجلد اللي لازم تنسخه إلى سيرفرك. تقدر تسويها بسهولة عن طريق `CTRL+C` للنسخ على جهازك المحلي، و`CTRL+V` للصق داخل سيرفر ويندوز عبر RDP. تأكد تلصقه في المجلد الرئيسي لسيرفرك المخصص.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

بعدها، انتقل للقسم التالي عشان تفتح المنافذ وتضبط إعدادات السيرفر.

### فتح المنافذ لسيرفرك

عشان تضمن أن سيرفرك متاح للعامة، لازم تعدل قواعد فتح المنافذ (Port Forwarding) للمنافذ اللي يستخدمها سيرفر MOE. تقدر تسويها إما عن طريق أوامر Powershell مباشرة (وهي أسهل)، أو من خلال صفحة جدار الحماية لويندوز (Windows Defender Firewall).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عن طريق Powershell" default>

افتح مربع البحث في ويندوز، وابحث عن **Powershell**. تأكد تضغط كليك يمين وتشغلها كـ **مسؤول** (Run as Administrator) عشان تكون الصلاحيات متاحة وكل شيء يشتغل صح.

:::info
تأكد تشغل Powershell بوضع المسؤول، وإلا ممكن الإعدادات ما تنطبق بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في نافذة Powershell:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

هذه الأوامر راح تنشئ قواعد جدار ناري تلقائياً ضرورية عشان سيرفر MOE يكون متاح للعامة.

</TabItem>

<TabItem value="windefender" label="عن طريق Windows Defender">

استخدم البحث في ويندوز وافتح **إعدادات جدار الحماية مع الأمان المتقدم** (Windows Firewall Settings with Advanced Security). ممكن تحتاج تضغط على **الإعدادات المتقدمة** (Advanced Settings) عشان تفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

لازم تنشئ قواعد جديدة لسيرفر MOE. عشان تسوي هذا، اضغط على قواعد الوارد والصادر كما هو موضح تحت وأضف القواعد للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 11888, 12888
- UDP وارد وصادر: 11888, 12888

استخدم دليلنا [فتح المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية.

</TabItem>
</Tabs>

اذهب للقسم التالي قبل ما تدخل على سيرفرك عشان تنشئ ملف الإعدادات وملف بدء التشغيل `.bat`.

## الإعداد

الآن راح تستخدم أداة السيرفر الموجودة في المجلد اللي نسخته من ملفات لعبتك، عشان تنشئ ملف الإعدادات وملف بدء التشغيل `.bat` اللي راح تستخدمه لتشغيل السيرفر.

اذهب إلى المسار التالي (المجلد اللي نسخته سابقاً):
```
../MOE/PrivateServerTool
```

في هذا المجلد، شغّل ملف **PrivateServerTool.exe**. باستخدام هذه الأداة، اضبط خيارات السيرفر حسب رغبتك بما في ذلك الإضافات (mods)، إعدادات اللعبة وأكثر.

ننصح تضبط على الأقل الإعدادات الأساسية مثل **اسم السيرفر** قبل المتابعة.

لما تكون جاهز، اذهب إلى تبويب **Start Console** في الأداة، واضغط على زر **Save Config** ثم زر **Start Server**. هذا راح يولد ملف `StartPrivateServer.bat` اللي راح تستخدمه لتشغيل السيرفر.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

ننصحك تسوي اختصار لملف `StartPrivateServer.bat` عن طريق النقر بزر الفأرة الأيمن واختيار **إنشاء اختصار**، عشان تسهل عليك التشغيل.

:::note
ممكن تحتاج تعدل المسار لمجلد لعبتك داخل ملف `StartPrivateServer.bat` اللي تم إنشاؤه تلقائياً. افتح الملف باستخدام برنامج مثل Notepad وتأكد أن المسار في بداية الملف يطابق مسار السيرفر الموجود عندك.

إذا كان المسار غير صحيح، تقدر تضغط مرتين على شريط المسار العلوي لما تكون داخل المجلد الرئيسي لسيرفر MOE المخصص عشان تنسخ المسار الحالي، وتلصقه في الملف في المكان المناسب.
:::

## بدء الاتصال بسيرفرك

حان الوقت لتشغيل سيرفرك. اذهب إلى مجلد سيرفر Myth of Empires وشغّل **StartPrivateServer.bat** (أو الاختصار إذا سويته) لبدء عملية التشغيل. هذا راح يفتح وحدة تحكم السيرفر في نافذة الأوامر ويبدأ التشغيل. تقدر الآن تتصل بسيرفرك مباشرة من خلال التبويب **Custom Server** وابحث عن سيرفرك عبر مربع البحث.

:::tip
إذا واجهت مشاكل في الاتصال بالسيرفر، افتح ملف `StartPrivateServer.bat` باستخدام برنامج مثل Notepad وتأكد أن معلمات IP الاثنين تطابق عنوان IP الخاص بسيرفر ويندوز. المفروض الأداة تعبيها تلقائياً، لكن هذه خطوة ممتازة للتأكد وحل المشاكل.
:::

## الخاتمة

مبروك، لقد ثبت وضبطت سيرفر Myth of Empires بنجاح على VPS الخاص بك! إذا عندك أي أسئلة أو مشاكل إضافية، تواصل مع فريق الدعم عندنا، متوفرين لمساعدتك كل يوم!

<InlineVoucher />