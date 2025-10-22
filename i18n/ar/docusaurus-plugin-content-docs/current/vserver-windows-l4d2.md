---
id: vserver-windows-l4d2
title: "VPS: إعداد سيرفر مخصص Left 4 Dead 2 على ويندوز"
description: "تعلم كيف تضبط سيرفر مخصص للعبة Left 4 Dead 2 على VPS أو سيرفر مخصص بسرعة وكفاءة → تعرّف أكثر الآن"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر مخصص للعبة Left 4 Dead 2؟ أنت بالمكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<InlineVoucher />

## التحضير

لتثبيت سيرفر Left 4 Dead 2، لازم تستخدم SteamCMD. الـ SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصص لألعاب Steam الشهيرة بسرعة وسهولة. تقدر تحصل على SteamCMD من موقع Valve الرسمي للمطورين: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التنزيل. الملف اللي رح ينزل هو **steamcmd.zip**، ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. بعد فك الضغط، لازم تشوف ملف **steamcmd.exe**. شغله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

لما تطلعلك رسالة **Loading Steam API.... OK**، يعني العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Left 4 Dead 2.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هناك لازم تسجل دخول. تسجيل الدخول بيكون باستخدام المستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. يتم باستخدام الأمر `app_update 222840`. رقم التطبيق **222840** هو معرف تطبيق **سيرفر مخصص Left 4 Dead 2**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

اصبر شوي لين يخلص التنزيل، ممكن ياخذ وقت خصوصاً للألعاب الكبيرة. لما يخلص بنجاح، رح تطلعلك رسالة تأكيد.

عشان السيرفر يكون ظاهر ومتصل من الخارج، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة. اضغط على قواعد الواردة والصادرة زي ما موضح تحت، وأضف المنافذ التالية: 27015-27020 لبروتوكولات TCP/UDP.



## التهيئة

بهالمرحلة، خلصت إعداد سيرفر Left 4 Dead 2. تقدر تعدل إعدادات السيرفر أكثر عن طريق تحرير ملف الإطلاق. روح لمجلد الجذر. داخل هالمجلد، ادخل على مجلد cfg وافتح ملف `server.cfg`. هناك تقدر تعدل خيارات السيرفر.

```
../steamapps/common/l4d2-ds/l4d2/cfg/server.cfg
```

## تسجيل رمز GSL

عشان اللاعبين يقدروا ينضموا لسيرفرك، لازم تولد وتضيف رمز تسجيل دخول سيرفر الألعاب (GSLT). هالرمز بيصادق سيرفرك مع Steam. لتوليد رمز GSLT، زور http://steamcommunity.com/dev/managegameservers واصنع رمز باستخدام معرف اللعبة 222840، اللي هو Left 4 Dead 2.

بعد ما تحصل على الرمز، ضيفه في باراميترات تشغيل السيرفر مع `+sv_setsteamaccount <TOKEN>`.



## تشغيل والاتصال بسيرفرك

هلا وقت تشغيل السيرفر. روح لمجلد اللعبة الرئيسي ونفذ أمر التشغيل التالي:

```
start srcds.exe -console -game l4d2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

رح تشوف سجلات تظهر في نافذة الأوامر بتدل على نجاح التشغيل. خليك بالصبر، أول تشغيل ممكن ياخذ وقت عشان كل شيء يضبط. كبديل، تقدر تتصل مباشرة باستخدام شريط البحث في قائمة السيرفرات وابحث عن: `[your_ip_address]:2456`.


## الخلاصة

مبروك، نجحت بتثبيت وضبط سيرفر Left 4 Dead 2 على VPS تبعك! لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لخدمتك! 🙂

<InlineVoucher />