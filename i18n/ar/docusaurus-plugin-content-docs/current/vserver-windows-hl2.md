---
id: vserver-windows-hl2
title: "VPS: إعداد سيرفر مخصص لـ Half-Life 2 على ويندوز"
description: "تعلم كيف تثبت سيرفر مخصص لـ Half-Life 2 على VPS أو سيرفر مخصص بسرعة وسهولة → تعلّم المزيد الآن"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر مخصص لـ Half-Life 2؟ أنت بالمكان الصح! بالأسفل رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<InlineVoucher />

## التحضير

لتثبيت سيرفر Half-Life 2، لازم تستخدم SteamCMD. SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. تقدر تحصل على SteamCMD من الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التنزيل. الملف اللي رح ينزل هو **steamcmd.zip** ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. بعد فك الضغط، لازم تشوف ملف **steamcmd.exe**. شغله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

لما تطلع رسالة **Loading Steam API.... OK**، معناته العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Half-Life 2.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هناك لازم تسجل دخول. استخدم المستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. نفذ الأمر `app_update 232370`. رقم التطبيق **232370** هو معرف تطبيق **سيرفر Half-Life 2 المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

اصبر شوي لين يخلص التنزيل، ممكن ياخد وقت مع الألعاب الكبيرة. لما ينجح، رح تشوف رسالة تأكيد النجاح.

عشان يكون السيرفر ظاهر ومتصل من برة، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة. اضغط على قواعد الوارد والصادر مثل ما موضح تحت وأضف المنافذ التالية: 27015-27020 لبروتوكولات TCP/UDP.



## التهيئة

بهالمرحلة، خلصت إعداد سيرفر Half-Life 2. تقدر تعدل إعدادات السيرفر أكثر بتعديل ملف الإطلاق مباشرة. روح لمجلد الجذر. داخل المجلد، افتح مجلد cfg وحرر ملف `server.cfg`. هناك تقدر تعدل خيارات السيرفر.

```
../steamapps/common/hl2-ds/hl2mp/cfg/server.cfg
```

## تسجيل رمز GSL

عشان اللاعبين يقدروا ينضموا لسيرفرك، لازم تولد وتضيف رمز تسجيل دخول سيرفر الألعاب (GSLT). هالرمز يثبت سيرفرك مع Steam. لتوليد GSLT، زور http://steamcommunity.com/dev/managegameservers واصنع رمز باستخدام معرف اللعبة 232370، اللي هو Half-Life 2.

بعد ما تحصل على الرمز، ضيفه في باراميترات تشغيل السيرفر مع `+sv_setsteamaccount <TOKEN>`.



## تشغيل والاتصال بسيرفرك

هلا وقت تشغيل السيرفر. روح لمجلد اللعبة الرئيسي ونفذ أمر التشغيل التالي:

```
start srcds.exe -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

رح تشوف سجلات تظهر في نافذة الأوامر بتدل على نجاح التشغيل. خليك بالصبر لأن أول تشغيل ممكن ياخد وقت عشان كل شي يتجهز. كبديل، تقدر تتصل مباشرة باستخدام شريط البحث في قائمة السيرفرات وابحث عن: `[your_ip_address]:2456`.


## الخلاصة

مبروك، ثبت وضبط سيرفر Half-Life 2 على VPS بنجاح! لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لخدمتك! 🙂

<InlineVoucher />