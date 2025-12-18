---
id: vserver-windows-ark
title: "VPS: إعداد سيرفر مخصص لـ ARK Survival Evolved على ويندوز"
description: "اكتشف كيف تضبط سيرفر مخصص لـ ARK: Survival Evolved على VPS ويندوز بسرعة وسهولة → تعلّم المزيد الآن"
sidebar_label: إعداد سيرفر مخصص لـ ARK Survival Evolved
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## مقدمة
عندك VPS ويندوز وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر مخصص لـ ARK: Survival Evolved؟ أنت في المكان الصح! في السطور الجاية رح نشرحلك خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="إعداد سيرفر مخصص لـ ARK: Survival Evolved على VPS ويندوز" description="حسّ حالك بتفهم أحسن لما تشوف الأمور عم تصير؟ عنا الفيديو المناسب! غطس معنا بالفيديو اللي بيشرح كل شي خطوة بخطوة. سواء كنت مستعجل أو بتحب تستوعب المعلومات بطريقة ممتعة!"/>

اتصل بـ VPS عبر RDP لتضبط سيرفر مخصص لـ ARK: Survival Evolved. إذا ما بتعرف كيف تتصل بالسيرفر عبر RDP، بنصحك تطّلع على [دليل الوصول الأولي (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## التحضير

لتثبيت سيرفر ARK، لازم تستخدم SteamCMD. SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصص لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

بعدها، رح تنزل ملف **steamcmd.zip**، ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. لازم تشوف ملف **steamcmd.exe** بعد فك الضغط. شغّله واستنى لين تخلص عملية التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

لما تطلعلك رسالة **Loading Steam API.... OK**، معناته العملية تمت بنجاح وصرت جاهز تبدأ تثبيت سيرفر ARK.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هون لازم تسجل دخول. بتسجل دخول كمستخدم **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتستخدم الأمر `app_update 376030`. رقم التطبيق **376030** هو الخاص بـ **سيرفر مخصص ARK: Survival Evolved**.

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
لا توقف العملية قبل ما تخلص لتجنب الأخطاء. ممكن تاخد وقت شوي، بس الصبر بيستاهل! :)
:::



روح للمجلد اللي ثبت فيه السيرفر وادخل على المسار الفرعي التالي: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

هون لازم تنشئ ملف بدء التشغيل اللي بيشغّل برنامج السيرفر. اعمل ملف بالاسم: start-ark.bat

:::info
تأكد إن خيار عرض امتدادات الملفات مفعل حتى تستخدم الامتداد الصحيح.
:::

افتح الملف، ضيف المحتوى التالي واحفظ التغييرات:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



لتخلي السيرفر ظاهر وقابل للوصول من الخارج، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


لازم تضيف قواعد جديدة في الإعدادات. اضغط على قواعد الواردة والصادرة زي ما موضح تحت وأضف القواعد للبروتوكولات والمنافذ التالية:

- TCP وارد وصادر: 27020
- UDP وارد وصادر: 27015
- UDP وارد وصادر: 7777-7778



## التهيئة

الآن التثبيت الأساسي خلص. ممكن تعدل إعدادات إضافية في ملفات التهيئة **DefaultGameUserSettings.ini** و **Gameusersettings.ini**. هون فيك تغيّر اسم السيرفر، كلمة مرور الدخول، كلمة مرور المدير، وكثير خيارات تانية. روح للمسارات التالية:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## اللعب

بنهاية الإعداد، فيك تشغّل السيرفر عن طريق تنفيذ ملف **start-ark.bat** اللي عملته قبل شوي. هالشي رح يفتح كونسول السيرفر ويبدأ عملية تشغيل السيرفر. إذا كل شي مشى تمام، رح يظهر السيرفر بقائمة السيرفرات بعد ما يشتغل بنجاح.

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## الخلاصة

مبروك، انت ثبت وضبط سيرفر ARK Survival على VPS بنجاح! إذا عندك أي أسئلة أو مشاكل، تواصل مع فريق الدعم تبعنا، موجودين ليساعدوك كل يوم! 

<InlineVoucher />