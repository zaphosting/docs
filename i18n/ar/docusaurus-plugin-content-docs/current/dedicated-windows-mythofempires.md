---
id: dedicated-windows-mythofempires
title: "سيرفر مخصص: إعداد سيرفر Myth of Empires مخصص على ويندوز"
description: "اكتشف كيفية إعداد سيرفر Myth of Empires مخصص على VPS ويندوز بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: إعداد سيرفر MOE المخصص
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
هل لديك VPS ويندوز وتريد تثبيت سيرفر MOE مخصص عليه؟ أنت في المكان الصحيح. في هذا الدليل سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="كيفية إعداد سيرفر Myth Of Empires على VPS ويندوز!" description="تحب تفهم الأمور بشكل أفضل لما تشوفها عمليًا؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء بطريقة سهلة. سواء كنت مستعجل أو تحب تستوعب المعلومات بأكثر الطرق تشويقًا!"/>



## التحضير
أول شيء، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في ذلك.

بعد ما تدخل على سيرفرك، تحتاج تثبت **SteamCMD** عشان تقدر تحمل ملفات السيرفر المخصص اللازمة. SteamCMD هو نسخة **سطر الأوامر (CLI)** من عميل Steam وهو الأداة اللي تسمح لك بسهولة تحميل ملفات ورشة Steam وسيرفرات مخصصة. حمّل [SteamCMD من موقع Valve الرسمي](https://developer.valvesoftware.com/wiki/SteamCMD) أو مباشرة [من هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

سوِ مجلد جديد في أي مكان على سيرفرك، في هذا المثال راح نسميه `steamcmd`. اذهب إلى مجلد التنزيلات، ولقِ ملف **steamcmd.zip** اللي حملته للتو وضعه داخل مجلد `steamcmd`. الآن فك الضغط عن الملف عن طريق النقر بزر الفأرة الأيمن واستخدام خاصية فك الضغط في ويندوز مباشرة، أو باستخدام برامج مثل 7zip أو Winrar. هذا راح ينتج ملف **steamcmd.exe** مفكوك الضغط.

شغّل ببساطة **steamcmd.exe** وانتظر حتى يكتمل التثبيت بالكامل.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

بمجرد ظهور رسالة **Loading Steam API.... OK**، تكون العملية اكتملت بنجاح وتقدر تبدأ بتثبيت سيرفر MOE المخصص في القسم التالي.

## التثبيت

بعد التثبيت، يجب أن تكون قادرًا على تنفيذ الأوامر داخل موجه أوامر **steamcmd.exe** الذي شغلته سابقًا. تحتاج لتسجيل الدخول أولًا باستخدام المستخدم **anonymous**، عن طريق الأمر: `login anonymous`

بعد تسجيل الدخول، يمكنك الآن البدء بتحميل الملفات.

:::tip
اختياري: يمكنك تحديد مجلد التثبيت المفضل لديك باستخدام الأمر `force_install_dir [path]`، مع استبدال `[path]` بالمسار الذي تريد استخدامه لسيرفرك. على سبيل المثال:
```
force_install_dir C:\MOE-Server
```
:::

الآن شغّل الأمر `app_update 1794810` الذي سيبدأ التحميل. معرف التطبيق **1794810** هو تطبيق **MOE**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
يرجى عدم مقاطعة العملية قبل اكتمالها لتجنب الأخطاء. قد يستغرق الأمر بعض الوقت، لكن الصبر يستحق! :)
:::

بعد النجاح، اذهب إلى مجلد التنزيل حيث تم تحميل جميع ملفات السيرفر.

### الوصول إلى PrivateServerTool

على عكس تثبيتات SteamCMD العادية، MOE يتطلب منك نسخ مجلد من تثبيت لعبتك المحلي على Steam لتتمكن من تشغيل السيرفر على ويندوز.

افتح Steam على جهازك، انقر بزر الفأرة الأيمن على لعبة **Myth of Empires** واختر **تصفح الملفات المحلية** أثناء التمرير فوق قسم **إدارة**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

في المجلد الجذري الذي يفتح، ابحث عن مجلد **PrivateServerTool**. هذا هو المجلد الذي يجب نسخه إلى سيرفرك. يمكنك نسخه بسهولة باستخدام `CTRL+C` على جهازك المحلي، ولصقه باستخدام `CTRL+V` في سيرفر ويندوز عبر RDP. تأكد من لصقه في المجلد الجذري لسيرفرك المخصص.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

بعدها، انتقل إلى القسم التالي لتوجيه المنافذ وضبط سيرفرك.

### توجيه المنافذ لسيرفرك

لكي تتأكد أن سيرفرك متاح للعامة، يجب تعديل قواعد توجيه المنافذ للمنافذ التي يستخدمها سيرفر MOE. يمكنك فعل ذلك إما عبر أوامر Powershell مباشرة (وهي أسهل)، أو عبر صفحة جدار الحماية لويندوز ديفندر.

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
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ تلقائيًا قواعد جدار ناري ضرورية ليكون سيرفر MOE متاحًا للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم وظيفة البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

يجب عليك إنشاء قواعد جديدة لسيرفر MOE. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح أدناه وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 11888, 12888
- UDP وارد وصادر: 11888, 12888

يرجى استخدام دليلنا [توجيه المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية في ذلك.

</TabItem>
</Tabs>

انتقل إلى القسم التالي قبل الدخول على سيرفرك لإنشاء ملف الإعدادات وملف بدء التشغيل `.bat`.

## الإعداد

الآن ستستخدم أداة السيرفر الموجودة في المجلد الذي نسخته سابقًا من ملفات لعبتك، لإنشاء ملف الإعدادات وملف بدء التشغيل `.bat` الذي ستستخدمه لتشغيل سيرفرك.

انتقل إلى المسار التالي (المجلد الذي نسخته سابقًا):
```
../MOE/PrivateServerTool
```

في هذا المجلد، شغّل ملف **PrivateServerTool.exe**. باستخدام هذه الأداة، قم بضبط خيارات السيرفر حسب رغبتك بما في ذلك الإضافات، إعدادات اللعبة والمزيد.

ننصح بضبط على الأقل المعايير الأساسية مثل **اسم السيرفر** قبل المتابعة.

عندما تكون جاهزًا، اذهب إلى تبويب **Start Console** في الأداة، واضغط على زر **Save Config** ثم زر **Start Server**. هذا سينشئ ملف `StartPrivateServer.bat` الذي ستستخدمه لتشغيل سيرفرك.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

ننصح بإنشاء اختصار لملف `StartPrivateServer.bat` عن طريق النقر بزر الفأرة الأيمن واختيار **إنشاء اختصار**، لتسهيل عملية التشغيل.

:::note
قد تحتاج لتعديل مسار مجلد لعبتك داخل ملف `StartPrivateServer.bat` الذي تم إنشاؤه تلقائيًا. ببساطة افتح الملف باستخدام أداة مثل المفكرة وتأكد أن المسار في بداية الملف يطابق مسار السيرفر الخاص بك.

إذا كان المسار غير صحيح، يمكنك النقر المزدوج على شريط المسار العلوي عندما تكون داخل المجلد الجذري لسيرفر MOE المخصص لنسخ المسار الحالي، ولصقه في المكان المناسب داخل الملف.
:::

## بدء الاتصال بسيرفرك

حان الوقت لتشغيل سيرفرك. اذهب إلى مجلد سيرفر Myth of Empires وشغّل **StartPrivateServer.bat** (أو الاختصار إذا أنشأته) لبدء عملية التشغيل. هذا سيفتح وحدة تحكم السيرفر في نافذة موجه الأوامر ويبدأ عملية التشغيل. الآن يمكنك الاتصال مباشرة بسيرفرك من خلال التوجه إلى تبويب **Custom Server** والبحث عن سيرفرك عبر مربع البحث.

:::tip
إذا واجهت مشاكل في الاتصال بالسيرفر، افتح ملف `StartPrivateServer.bat` باستخدام أداة مثل المفكرة وتأكد أن معلمتي IP تطابقان عنوان IP الخاص بسيرفر ويندوز. يجب أن يتم ملؤهما تلقائيًا بواسطة الأداة المستخدمة، لكن هذه خطوة جيدة للتحقق وحل المشاكل.
:::

لقد قمت بتثبيت Myth of Empires بنجاح على سيرفر مخصص ويندوز الخاص بك.