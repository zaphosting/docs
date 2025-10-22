---
id: vserver-windows-valheim
title: "VPS: إعداد سيرفر Valheim مخصص على ويندوز"
description: "اكتشف كيف تضبط سيرفر Valheim مخصص على VPS أو سيرفر مخصص بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر Valheim مخصص؟ أنت في المكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="إعداد سيرفر Valheim مخصص على VPS ويندوز" description="حسّ حالك بتفهم أحسن لما تشوف الأمور عم تصير؟ عنا الفيديو المناسب إلك! غطس معنا بالفيديو اللي بيشرح كل شي بطريقة سهلة. سواء كنت مستعجل أو بتحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>
<InlineVoucher />

## التحضير
لتثبيت سيرفر Valheim، لازم تستخدم SteamCMD. SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفرات المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التنزيل. الملف اللي رح ينزل هو **steamcmd.zip**، ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. لازم تشوف ملف **steamcmd.exe** بعد فك الضغط. شغّله واستنى لين يخلص التثبيت.
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

لما تطلعلك رسالة **Loading Steam API.... OK**، معناها العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Valheim.

## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هون لازم تسجل دخول. بتسجل دخول كمستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتتم عن طريق الأمر `app_update 896660`. رقم التطبيق **896660** هو معرف تطبيق **سيرفر Valheim المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
لا توقف العملية قبل ما تخلص لتجنب الأخطاء. ممكن تاخد شوي وقت، بس الصبر بيستاهل! :)
:::

روح للمجلد اللي ثبت فيه السيرفر وادخل للمجلد الفرعي التالي:  **../steamapps/common/Valheim dedicated Server/**

هون لازم تنشئ ملف بدء التشغيل اللي بيشغّل برنامج السيرفر. أنشئ ملف بالاسم: start_headless.bat

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

عشان يكون السيرفر ظاهر ومتصل من الخارج، لازم تفتح/تعيد توجيه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة بالإعدادات. اضغط على قواعد الوارد والصادر زي ما موضح تحت، وأضف القواعد للمنافذ التالية: 2456-2458 لبروتوكولات TCP/UDP.

## التهيئة

الإعداد الأساسي صار جاهز. فيك تعدل إعدادات إضافية في ملف **start_headless_server.bat**. في هالملف فيك تغيّر اسم السيرفر، كلمة مرور السيرفر، كلمة مرور الأدمن، وكثير خيارات ثانية. لتعديلها، روح للمجلد:

```
../steamapps/common/Valheim dedicated Server/
```

## اللعب

بنهاية الإعداد، فيك تشغّل السيرفر عن طريق تنفيذ ملف **start_headless_server.bat** اللي أنشأته. هالشي رح يفتح كونسول السيرفر ويبدأ عملية تشغيل السيرفر. إذا كل شي مشى تمام، رح يظهر السيرفر بقائمة السيرفرات بعد ما يشتغل بنجاح.

## الخاتمة

مبروك، أنت ثبت وضبط سيرفر Valheim على VPS تبعك بنجاح! إذا عندك أي أسئلة أو مشاكل، تواصل مع فريق الدعم تبعنا، موجودين ليساعدوك كل يوم!

<InlineVoucher />