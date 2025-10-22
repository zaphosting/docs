---
id: dedicated-windows-cs16
title: "سيرفر مخصص: إعداد سيرفر Counter-Strike 1.6 مخصص على ويندوز"
description: "تعلم كيف تثبت سيرفر Counter-Strike 1.6 مخصص على VPS أو سيرفر مخصص بسرعة وسهولة → تعرّف أكثر الآن"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر Counter-Strike 1.6 مخصص؟ أنت بالمكان الصح! بالأسفل رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<InlineVoucher />

## التحضير

لتثبيت سيرفر Counter-Strike 1.6، لازم تستخدم SteamCMD. الـ SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التنزيل. الملف اللي بينزل هو **steamcmd.zip** ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. بعد فك الضغط، لازم تشوف ملف **steamcmd.exe**. شغله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

لما تطلعلك رسالة **Loading Steam API.... OK**، معناته العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Counter-Strike 1.6.

## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هناك لازم تسجل دخول. بتسجل دخول كمستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتستخدم الأمر `app_update 90`. رقم التطبيق **90** هو معرف تطبيق **سيرفر Counter-Strike 1.6 المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

اصبر شوي لين يخلص التنزيل، ممكن ياخد وقت خصوصاً للألعاب الكبيرة. لما ينجح، رح تشوف رسالة نجاح بتأكد هالشي.

عشان السيرفر يكون ظاهر ومتصل من برة، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة. اضغط على قواعد الواردة والصادرة مثل ما موضح تحت، وأضف المنافذ التالية: 27015-27020 لبروتوكولات TCP/UDP.

## الإعداد

بهالمرحلة، خلصت إعداد سيرفر Counter-Strike 1.6. تقدر تعدل إعدادات السيرفر أكثر بتعديل ملف الإطلاق مباشرة. روح لمجلد الجذر. داخل هالمجلد، ادخل على مجلد cfg وافتح ملف `server.cfg`. هناك تقدر تعدل خيارات السيرفر.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```

## تسجيل رمز GSL

عشان اللاعبين التانيين يقدروا ينضموا لسيرفرك، لازم تولد وتضيف رمز تسجيل دخول سيرفر الألعاب (GSLT). هالرمز بيصادق سيرفرك مع Steam. لتوليد رمز GSLT، زور http://steamcommunity.com/dev/managegameservers واطلع رمز باستخدام معرف اللعبة 90، اللي هو Counter-Strike 1.6.

بعد ما تحصل على الرمز، ضيفه في باراميترات تشغيل السيرفر مع `+sv_setsteamaccount <TOKEN>`.

## تشغيل والاتصال بسيرفرك

هلا وقت تشغيل السيرفر. روح لمجلد اللعبة الرئيسي ونفذ أمر التشغيل التالي:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

رح تشوف سجلات تظهر في نافذة الأوامر بتدل على نجاح التشغيل. خليك بالصبر لأن أول تشغيل ممكن ياخد وقت عشان كل شي يجهز. كبديل، تقدر تتصل مباشرة باستخدام شريط البحث في قائمة السيرفرات وابحث عن: `[your_ip_address]:2456`.

## الخلاصة

مبروك، ثبت وضبط سيرفر Counter-Strike 1.6 على VPS بنجاح! لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لمساعدتك! 🙂

<InlineVoucher />