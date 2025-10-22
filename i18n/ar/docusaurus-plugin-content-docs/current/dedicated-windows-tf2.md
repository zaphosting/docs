---
id: dedicated-windows-tf2
title: "سيرفر مخصص: إعداد سيرفر Team Fortress 2 مخصص على ويندوز"
description: "اكتشف كيف تضبط سيرفر Team Fortress 2 مخصص على VPS أو سيرفر مخصص بسرعة وسهولة → تعلّم المزيد الآن"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر Team Fortress 2 مخصص؟ أنت بالمكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<InlineVoucher />

## التحضير

لتثبيت سيرفر Team Fortress 2، لازم تستخدم SteamCMD. SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التنزيل. الملف اللي بتنزله هو **steamcmd.zip** ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. بعد فك الضغط، لازم تشوف ملف **steamcmd.exe**. شغّله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

لما تطلعلك رسالة **Loading Steam API.... OK**، معناته العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Team Fortress 2.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هناك لازم تسجل دخول. بتسجل دخول كمستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتستخدم الأمر `app_update 232250`. رقم التطبيق **232250** هو معرف تطبيق **سيرفر Team Fortress 2 المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

اصبر شوي لين يخلص التنزيل، ممكن ياخد وقت خصوصاً للألعاب الكبيرة. لما ينجح، رح تطلعلك رسالة نجاح بتأكد هالشي.

عشان يكون السيرفر ظاهر ومتصل من برة، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة. اضغط على قواعد الواردة والصادرة مثل ما موضح تحت، وأضف المنافذ التالية: 27015-27020 لبروتوكولات TCP/UDP.



## التهيئة

بهالمرحلة، خلصت إعداد سيرفر Team Fortress 2. تقدر تعدل إعدادات السيرفر أكثر بتعديل ملف الإطلاق مباشرة. روح لمجلد الجذر. داخل هالمجلد، افتح مجلد cfg وحرر ملف `server.cfg`. هناك تقدر تعدل خيارات السيرفر.

```
../steamapps/common/tf2-ds/tf2/tf/cfg/server.cfg
```

## تسجيل رمز GSL

عشان اللاعبين يقدروا ينضموا لسيرفرك، لازم تولد وتضيف رمز تسجيل دخول سيرفر الألعاب (GSLT). هالرمز يثبت سيرفرك مع Steam. لتوليد GSLT، زور http://steamcommunity.com/dev/managegameservers واصنع رمز باستخدام معرف اللعبة 232250، اللي هو Team Fortress 2.

بعد ما تحصل على الرمز، ضيفه في باراميترات تشغيل السيرفر مع `+sv_setsteamaccount <TOKEN>`.



## تشغيل والاتصال بسيرفرك

هلا وقت تشغيل السيرفر. روح لمجلد اللعبة الرئيسي ونفذ أمر التشغيل التالي:

```
start srcds.exe -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

رح تشوف سجلات تظهر في نافذة الأوامر بتدل على نجاح التشغيل. خليك بالصبر، أول تشغيل ممكن ياخد وقت عشان كل شي يتضبط. كبديل، تقدر تتصل مباشرة باستخدام شريط البحث في قائمة السيرفرات وابحث عن: `[your_ip_address]:2456`.


## الخلاصة

مبروك، ثبت وضبط سيرفر Team Fortress 2 بنجاح على VPS تبعك! لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم، متوفرين يومياً ليساعدوك! 🙂

<InlineVoucher />