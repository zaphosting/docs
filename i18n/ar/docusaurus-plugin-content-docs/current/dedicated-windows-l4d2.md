---
id: dedicated-windows-l4d2
title: "سيرفر مخصص: إعداد سيرفر Left 4 Dead 2 مخصص على ويندوز"
description: "تعلم كيف تضبط سيرفر Left 4 Dead 2 مخصص على VPS أو سيرفر مخصص بسرعة وسهولة → تعرّف أكثر الآن"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر Left 4 Dead 2 مخصص؟ أنت في المكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<InlineVoucher />

## التحضير

لتثبيت سيرفر Left 4 Dead 2، لازم يكون عندك SteamCMD. الـ SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصص لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح تنزل الملف. الملف يحتوي على **steamcmd.zip**، ولازم تفك الضغط عنه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. المفروض تشوف ملف **steamcmd.exe** بعد فك الضغط. شغله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

أول ما تطلع رسالة **Loading Steam API.... OK**، يعني العملية تمت بنجاح وتقدر تبدأ تثبيت سيرفر Left 4 Dead 2.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هناك لازم تسجل دخول. بتسجل دخول باستخدام المستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتستخدم الأمر `app_update 222840`. رقم التطبيق **222840** هو معرف تطبيق **سيرفر Left 4 Dead 2 المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

اصبر شوي لين يخلص التنزيل، ممكن ياخد وقت مع الألعاب الكبيرة. لما يخلص بنجاح، رح تشوف رسالة تأكيد النجاح.

عشان السيرفر يكون ظاهر ومتصل من برة، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة في الإعدادات. اضغط على قواعد الوارد والصادر مثل ما موضح تحت، وأضف القواعد للمنافذ التالية: 27015-27020 لبروتوكولات TCP/UDP.



## التهيئة

بهالمرحلة، خلصت إعداد سيرفر Left 4 Dead 2. تقدر تعدل إعدادات السيرفر أكثر بتعديل ملف الإطلاق مباشرة. روح لمجلد الجذر. داخل المجلد، افتح مجلد cfg وافتح ملف `server.cfg`. هناك تقدر تعدل خيارات السيرفر.

```
../steamapps/common/l4d2-ds/l4d2/cfg/server.cfg
```

## تسجيل رمز GSL

عشان اللاعبين التانيين يقدروا ينضموا لسيرفرك، لازم تولد وتضيف رمز تسجيل دخول سيرفر الألعاب (GSLT). هالرمز بيصادق سيرفرك مع Steam. لتوليد رمز GSLT، زور http://steamcommunity.com/dev/managegameservers واصنع رمز باستخدام معرف اللعبة 222840، اللي هو Left 4 Dead 2.

بعد ما تحصل على الرمز، ضيفه في باراميترات تشغيل السيرفر مع `+sv_setsteamaccount <TOKEN>`.



## تشغيل والاتصال بسيرفرك

هلا وقت تشغيل السيرفر. روح لمجلد اللعبة الرئيسي ونفذ أمر التشغيل التالي:

```
start srcds.exe -console -game l4d2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

رح تشوف سجلات تظهر في نافذة الأوامر بتدل على نجاح التشغيل. خليك بالصبر لأن أول تشغيل ممكن ياخد وقت عشان كل شي يضبط. كبديل، تقدر تتصل مباشرة باستخدام شريط البحث في قائمة السيرفرات بالأسفل وابحث عن: `[your_ip_address]:2456`.


## الخلاصة

مبروك، ثبت وضبط سيرفر Left 4 Dead 2 بنجاح على VPS تبعك! لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لخدمتك! 🙂

<InlineVoucher />