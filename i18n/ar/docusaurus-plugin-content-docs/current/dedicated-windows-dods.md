---
id: dedicated-windows-dods
title: "سيرفر مخصص: إعداد سيرفر Day of Defeat: Source مخصص على ويندوز"
description: "اكتشف كيف تضبط سيرفر Day of Defeat: Source مخصص على VPS أو سيرفرك بسرعة وكفاءة → تعلّم المزيد الآن"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر Day of Defeat: Source مخصص؟ إذاً أنت في المكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<InlineVoucher />

## التحضير

لتثبيت سيرفر Day of Defeat: Source، لازم تستخدم SteamCMD. الـ SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تحمل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. تقدر تحصل على SteamCMD من موقع مطوري Valve الرسمي: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التحميل. الملف اللي رح ينزل هو **steamcmd.zip**، ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. بعد فك الضغط، لازم تشوف ملف **steamcmd.exe**. شغّله وانتظر لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

أول ما تطلع رسالة **Loading Steam API.... OK**، يعني العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Day of Defeat: Source.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هون لازم تسجل دخول. بتسجل كـ **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتستخدم الأمر `app_update 232290`. رقم التطبيق **232290** هو معرف تطبيق **سيرفر Day of Defeat: Source المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

اصبر شوي لين يخلص التحميل، ممكن ياخد وقت خصوصاً للألعاب الكبيرة. لما ينجح، رح تشوف رسالة تأكيد النجاح.

عشان السيرفر يكون ظاهر ومتصل من برة، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة. اضغط على قواعد الوارد والصادر زي ما موضح تحت، وأضف المنافذ التالية: 27015-27020 لبروتوكولات TCP/UDP.



## التهيئة

بهالمرحلة، خلصت إعداد سيرفر Day of Defeat: Source. تقدر تعدل إعدادات السيرفر أكثر بتعديل ملف الإطلاق مباشرة. روح لمجلد الجذر. داخل هالمجلد، افتح مجلد cfg وحرر ملف `server.cfg`. هون تقدر تعدل خيارات السيرفر.

```
../steamapps/common/dod-ds/dod/cfg/server.cfg
```

## تسجيل رمز GSL

عشان اللاعبين يقدروا ينضموا لسيرفرك، لازم تولد وتضيف رمز تسجيل دخول سيرفر الألعاب (GSLT). هالرمز بيصادق سيرفرك مع Steam. لتوليد GSLT، زور http://steamcommunity.com/dev/managegameservers واصنع رمز باستخدام معرف اللعبة 232290، اللي هو Day of Defeat: Source.

بعد ما تحصل على الرمز، ضيفه في باراميترات تشغيل السيرفر مع `+sv_setsteamaccount <TOKEN>`.



## تشغيل والاتصال بسيرفرك

هلا وقت تشغيل السيرفر. روح لمجلد اللعبة الرئيسي ونفذ أمر الإطلاق التالي:

```
start srcds.exe -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

رح تشوف سجلات تظهر في نافذة الأوامر بتدل على نجاح التشغيل. خليك بالصبر، أول تشغيل ممكن ياخد وقت عشان كل شي يتضبط. كبديل، تقدر تتصل مباشرة باستخدام شريط البحث في قائمة السيرفرات وابحث عن: `[your_ip_address]:2456`.


## الخلاصة

مبروك، نجحت بتثبيت وضبط سيرفر Day of Defeat: Source على VPS تبعك! لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً ليساعدوك! 🙂

<InlineVoucher />