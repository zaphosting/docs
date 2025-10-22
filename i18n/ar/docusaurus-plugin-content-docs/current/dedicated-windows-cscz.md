---
id: dedicated-windows-cscz
title: "سيرفر مخصص: إعداد سيرفر Counter-Strike: Condition Zero مخصص على ويندوز"
description: "تعلم كيف تثبت سيرفر Counter-Strike: Condition Zero مخصص على VPS أو سيرفر مخصص بسرعة وسهولة → تعلّم المزيد الآن"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر Counter-Strike: Condition Zero مخصص؟ أنت بالمكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<InlineVoucher />

## التحضير

لتثبيت سيرفر Counter-Strike: Condition Zero، لازم تستخدم SteamCMD. الـ SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التنزيل. الملف اللي بتنزله بيكون **steamcmd.zip**، ولازم تفك الضغط عنه أولاً. يُنصح تعمل مجلد منفصل عشان تفك الضغط فيه. لازم تشوف ملف **steamcmd.exe** بعد فك الضغط. شغّله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

أول ما تطلع رسالة **Loading Steam API.... OK**، يعني العملية تمت بنجاح وتقدر تبدأ تثبيت سيرفر Counter-Strike: Condition Zero.

## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هناك لازم تسجل دخول. تسجيل الدخول بيكون باستخدام المستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. يتم باستخدام الأمر `app_update 90`. رقم التطبيق **90** هو الخاص بـ **سيرفر Counter-Strike: Condition Zero المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

اصبر شوي لين يخلص التنزيل، ممكن ياخد وقت مع الألعاب الكبيرة. لما ينجح، رح تشوف رسالة تأكيد النجاح.

عشان يكون السيرفر ظاهر ومتصل من الخارج، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

لازم تضيف قواعد جديدة في الإعدادات. اضغط على قواعد الوارد والصادر مثل ما موضح تحت، وأضف المنافذ التالية: 27015-27020 لبروتوكولات TCP/UDP.

## التهيئة

بهالمرحلة، خلصت إعداد سيرفر Counter-Strike: Condition Zero. تقدر تعدل إعدادات السيرفر أكثر عن طريق تحرير ملف الإطلاق مباشرة. روح لمجلد الجذر. داخل هالمجلد، افتح مجلد cfg وحرر ملف `server.cfg`. هناك تقدر تعدل خيارات السيرفر.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```

## تشغيل والاتصال بسيرفرك

هلا وقت تشغيل السيرفر. روح لمجلد اللعبة الرئيسي ونفذ أمر الإطلاق التالي:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

رح تشوف سجلات تظهر في نافذة الأوامر بتدل على نجاح التشغيل. خليك عارف إن أول تشغيل ممكن ياخد وقت لأنه عم يتم الإعداد. كبديل، تقدر تتصل مباشرة باستخدام شريط البحث في قائمة السيرفرات وابحث عن: `[your_ip_address]:2456`.

## الخلاصة

مبروك، ثبت وتهيأ سيرفر Counter-Strike: Condition Zero بنجاح على VPS تبعك! لأي أسئلة أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لمساعدتك! 🙂

<InlineVoucher />