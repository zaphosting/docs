---
id: vserver-windows-css
title: "VPS: إعداد سيرفر مخصص لـ Counter-Strike: Source على ويندوز"
description: "اكتشف كيف تضبط سيرفر مخصص لـ Counter-Strike: Source على VPS أو سيرفرك بسرعة وسهولة → تعلّم المزيد الآن"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر مخصص لـ Counter-Strike: Source؟ أنت في المكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<InlineVoucher />

## التحضير

لتثبيت سيرفر Counter-Strike: Source، لازم تستخدم SteamCMD. الـ SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التنزيل. الملف اللي بينزل هو **steamcmd.zip** ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. لازم تشوف ملف **steamcmd.exe** بعد فك الضغط. شغّله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

لما تطلعلك رسالة **Loading Steam API.... OK**، معناته العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Counter-Strike: Source.

## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هناك لازم تسجل دخول. التسجيل بيكون بالمستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتستخدم الأمر `app_update 232330`. رقم التطبيق **232330** هو معرف تطبيق **سيرفر Counter-Strike: Source المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

اصبر شوي لين يخلص التنزيل، ممكن ياخد وقت خصوصاً للألعاب الكبيرة. لما يخلص بنجاح، رح تطلعلك رسالة تأكيد.

عشان السيرفر يكون ظاهر ومتصل من برة، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة. اضغط على قواعد الواردة والصادرة زي ما موضح تحت، وأضف المنافذ التالية: 27015-27020 لبروتوكولات TCP/UDP.

## التهيئة

بهالمرحلة، خلصت إعداد سيرفر Counter-Strike: Source. تقدر تعدل إعدادات السيرفر أكثر عن طريق تحرير ملف الإطلاق مباشرة. روح لمجلد الجذر. داخل هالمجلد، ادخل على مجلد cfg وافتح ملف `server.cfg`. هناك تقدر تعدل خيارات السيرفر.

```
../steamapps/common/css-ds/cstrike/cfg/server.cfg
```

## تسجيل رمز GSL

عشان اللاعبين التانيين يقدروا ينضموا لسيرفرك، لازم تولد وتضيف رمز تسجيل دخول سيرفر الألعاب (GSLT). هالرمز بيصادق سيرفرك مع Steam. لتوليد رمز GSLT، زور http://steamcommunity.com/dev/managegameservers واصنع رمز باستخدام معرف اللعبة 232330، اللي هو Counter-Strike: Source.

بعد ما تحصل على الرمز، ضيفه في باراميترات تشغيل السيرفر مع `+sv_setsteamaccount <TOKEN>`.

## تشغيل والاتصال بسيرفرك

هلا وقت تشغيل السيرفر. روح لمجلد اللعبة الرئيسي ونفذ أمر التشغيل التالي:

```
start srcds.exe -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

رح تشوف سجلات تظهر في نافذة الأوامر بتدل على نجاح التشغيل. خليك بالصبر لأن أول تشغيل ممكن ياخد وقت عشان كل شي يضبط. كبديل، تقدر تتصل مباشرة باستخدام شريط البحث في قائمة السيرفرات وابحث عن: `[your_ip_address]:2456`.

## الخلاصة

مبروك، ثبت وضبطت سيرفر Counter-Strike: Source على VPS بنجاح! لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لمساعدتك! 🙂

<InlineVoucher />