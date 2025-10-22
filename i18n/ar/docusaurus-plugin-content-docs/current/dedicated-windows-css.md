---
id: dedicated-windows-css
title: "سيرفر مخصص: إعداد سيرفر Counter-Strike: Source مخصص على ويندوز"
description: "اكتشف كيف تضبط سيرفر Counter-Strike: Source مخصص على VPS أو سيرفرك بسرعة وسهولة → تعلّم المزيد الآن"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر Counter-Strike: Source مخصص؟ إذاً أنت في المكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<InlineVoucher />

## التحضير

لتثبيت سيرفر Counter-Strike: Source، تحتاج أداة SteamCMD. SteamCMD هي **نسخة سطر الأوامر من عميل Steam**. هالأداة بتسمح لك تحمل سيرفرات الألعاب المخصصة الشهيرة على Steam بسرعة وسهولة. تقدر تحصل على SteamCMD من موقع مطوري Valve الرسمي: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم تحميل الملف. الملف يحتوي على **steamcmd.zip**، ولازم تفك الضغط عنه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. بعد فك الضغط، لازم تشوف ملف **steamcmd.exe**. شغّله وانتظر لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

لما تطلع رسالة **Loading Steam API.... OK**، يعني العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Counter-Strike: Source.

## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هناك لازم تسجل دخول. تسجيل الدخول بيكون باستخدام المستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. يتم باستخدام الأمر `app_update 232330`. رقم التطبيق **232330** هو معرف تطبيق **سيرفر Counter-Strike: Source المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

اصبر شوي لين يخلص التحميل، ممكن ياخذ وقت خصوصاً للألعاب الكبيرة. لما ينجح، رح تشوف رسالة نجاح بتأكد هالشي.

عشان يكون السيرفر ظاهر ومتصل من الخارج، لازم تفتح/تعيد توجيه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة في الإعدادات. اضغط على قواعد الوارد والصادر مثل ما موضح تحت، وأضف القواعد للمنافذ التالية: 27015-27020 لبروتوكولات TCP/UDP.

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

رح تشوف سجلات تظهر في نافذة الأوامر بتدل على نجاح التشغيل. خليك بالصبر لأن أول تشغيل ممكن ياخذ وقت عشان كل شيء يضبط. كبديل، تقدر تتصل مباشرة باستخدام شريط البحث في قائمة السيرفرات وابحث عن: `[your_ip_address]:2456`.

## الخلاصة

مبروك، ثبت وضبطت سيرفر Counter-Strike: Source بنجاح على VPS تبعك! لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لمساعدتك! 🙂

<InlineVoucher />