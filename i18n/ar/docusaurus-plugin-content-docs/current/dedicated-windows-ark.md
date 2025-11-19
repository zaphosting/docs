---
id: dedicated-windows-ark
title: "سيرفر مخصص: إعداد سيرفر ARK Survival Evolved مخصص على ويندوز"
description: "اكتشف كيفية إعداد سيرفر ARK: Survival Evolved مخصص على VPS ويندوز لتجربة لعب جماعية سلسة → تعلّم المزيد الآن"
sidebar_label: إعداد سيرفر ARK Survival Evolved المخصص
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

عندك VPS ويندوز وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر ARK: Survival Evolved مخصص؟ أنت في المكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك. اتصل بـ VPS عبر RDP لتثبيت سيرفر ARK: Survival Evolved المخصص. إذا ما بتعرف كيف تتصل بالسيرفر عبر RDP، بننصحك تطّلع على [دليل الوصول الأولي (RDP)](vserver-windows-userdp.md).

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="إعداد سيرفر ARK: Survival Evolved مخصص على VPS ويندوز" description="بتحس إنك بتفهم أحسن لما تشوف الأمور عم تصير؟ عنا الفيديو المناسب! غطس معنا بالفيديو اللي بيشرح كل شي خطوة بخطوة. سواء كنت مستعجل أو بتحب تتعلم بطريقة ممتعة وتفاعلية!"/>



## التحضير

لتثبيت سيرفر ARK، لازم تستخدم SteamCMD. SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

بعدها، رح يتم التنزيل. الملف اللي بتنزله هو **steamcmd.zip**، ولازم تفك ضغطه أولاً. بننصحك تعمل مجلد خاص عشان تفك الضغط فيه. لازم تشوف ملف **steamcmd.exe** بعد الفك. شغّله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

لما تطلعلك رسالة **Loading Steam API.... OK**، يعني العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر ARK.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هون لازم تسجل دخول. بتسجل دخول كمستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتستخدم الأمر `app_update 376030`. رقم التطبيق **376030** هو الخاص بـ **سيرفر ARK: Survival Evolved المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
لا توقف العملية قبل ما تخلص لتجنب الأخطاء. ممكن تاخد شوي وقت، بس الصبر بيستاهل! :)
:::



روح للمجلد اللي ثبت فيه السيرفر وادخل على المجلد الفرعي التالي: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

هون لازم تنشئ ملف بدء التشغيل اللي بيشغّل برنامج السيرفر. أنشئ ملف بالاسم التالي: start-ark.bat

:::info
تأكد إن خيار عرض امتدادات الملفات مفعل عشان تستخدم الامتداد الصحيح.
:::

افتح الملف، ضيف المحتوى التالي واحفظ التغييرات:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



لتخلي السيرفر ظاهر وقابل للوصول من الخارج، لازم تفتح/توجه منافذ السيرفر في الجدار الناري. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


لازم تضيف قواعد جديدة في الإعدادات. اضغط على قواعد الواردة والصادرة مثل ما موضح تحت وأضف القواعد للبروتوكولات والمنافذ التالية:

- TCP وارد وصادر: 27020
- UDP وارد وصادر: 27015
- UDP وارد وصادر: 7777-7778



## التهيئة

الإعداد الأساسي صار جاهز. فيك تعدل إعدادات إضافية في ملفات التهيئة **DefaultGameUserSettings.ini** و **Gameusersettings.ini**. هون فيك تغيّر اسم السيرفر، كلمة مرور الدخول، كلمة مرور المدير، وغيرها من الخيارات. روح للمجلدات التالية:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## اللعب

بنهاية الإعداد، فيك تشغّل السيرفر بتنفيذ ملف **start-ark.bat** اللي أنشأته قبل. هالشي رح يفتح كونسول السيرفر ويبدأ عملية تشغيل السيرفر. إذا كل شي مشى تمام، رح يظهر السيرفر بقائمة السيرفرات بعد ما يشتغل بنجاح.

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)