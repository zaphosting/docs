---
id: dedicated-windows-valheim
title: "سيرفر مخصص: إعداد سيرفر Valheim مخصص على ويندوز"
description: "اكتشف كيف تضبط سيرفر Valheim مخصص على سيرفرك الخاص لتجربة لعب جماعية سلسة → تعلّم المزيد الآن"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة
عندك سيرفر مخصص وبدك تثبت عليه سيرفرات ألعاب؟ مثلاً سيرفر Valheim مخصص؟ أنت في المكان الصح! في السطور الجاية رح نشرحلك خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="إعداد سيرفر Valheim مخصص على VPS ويندوز" description="حسّ حالك بتفهم أحسن لما تشوف الأمور عم تصير؟ عنا الفيديو المناسب إلك! غطس معنا بالفيديو اللي بيشرح كل شي بطريقة سهلة. سواء كنت مستعجل أو بتحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>

<InlineVoucher />

## التحضير
لتثبيت سيرفر Valheim، لازم تستخدم SteamCMD. SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. فيك تحصل على SteamCMD من موقع مطوري Valve الرسمي: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التنزيل. الملف اللي رح ينزل هو **steamcmd.zip**، ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص لتفك فيه الملف. بعد الفك، لازم تشوف ملف **steamcmd.exe**. شغّله واستنى لين يخلص التثبيت.
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

لما تطلعلك الرسالة **Loading Steam API.... OK**، معناته العملية تمت بنجاح وصرت جاهز تبدأ تثبيت سيرفر Valheim.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هون لازم تسجل دخول. بتسجل كـ **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتستخدم الأمر `app_update 896660`. رقم التطبيق **896660** هو الخاص بـ **سيرفر Valheim المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
لا توقف العملية قبل ما تخلص لتجنب الأخطاء. ممكن تاخد وقت شوي، بس الصبر بيستاهل! :)
:::


روح للمجلد اللي ثبت فيه السيرفر وادخل على المجلد الفرعي التالي:  **../steamapps/common/Valheim dedicated Server**/

هون لازم تنشئ ملف بدء التشغيل اللي بيشغّل برنامج السيرفر. اعمل ملف بالاسم التالي: start_headless.bat

:::info
تأكد إن خيار عرض امتدادات الملفات مفعل حتى تستخدم الامتداد الصحيح.
:::

افتح الملف، ضيف المحتوى التالي واحفظ التغييرات:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

لتخلي السيرفر ظاهر وقابل للوصول من الخارج، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

لازم تضيف قواعد جديدة بالإعدادات. اضغط على قواعد الوارد والصادر مثل ما موضح تحت، وضيف القواعد للمنافذ التالية: 2456-2458 لبروتوكولات TCP/UDP.




## التهيئة

الإعداد الأساسي صار جاهز. فيك تعدل إعدادات إضافية بملف **start_headless_server.bat**. هون فيك تغيّر اسم السيرفر، كلمة السر، كلمة سر الأدمن، وكمان خيارات كثيرة. لتعديلها، روح للمجلد التالي:

```
../steamapps/common/Valheim dedicated Server/
```



## اللعب

بنهاية الإعداد، فيك تشغّل السيرفر بتنفيذ ملف **start_headless_server.bat** اللي عملته قبل. هالشي رح يفتح كونسول السيرفر ويبدأ عملية تشغيل السيرفر. إذا كل شي مشى تمام، رح يظهر السيرفر بقائمة السيرفرات بعد ما يشتغل بنجاح.

<InlineVoucher />