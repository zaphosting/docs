---
id: dedicated-windows-satisfactory
title: "سيرفر مخصص: إعداد سيرفر Satisfactory مخصص على ويندوز"
description: "تعلم كيفية إعداد سيرفر Satisfactory مخصص على سيرفرك لتجربة لعب وإدارة سلسة → تعلّم المزيد الآن"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك سيرفر مخصص وبدك تثبت عليه سيرفرات ألعاب؟ مثلاً سيرفر Satisfactory مخصص؟ أنت في المكان الصح! في التالي رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="إعداد سيرفر Satisfactory مخصص على VPS ويندوز" description="حسّ حالك بتفهم أحسن لما تشوف الأشياء عم تشتغل؟ عنا الفيديو المناسب إلك! غطس معنا بالفيديو اللي بيشرح كل شي بطريقة سهلة. سواء كنت مستعجل أو بتحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>

<InlineVoucher />

## التحضير

لتثبيت سيرفر Satisfactory، لازم تستخدم SteamCMD. SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح يتم التنزيل. الملف اللي بتنزله بيكون **steamcmd.zip** ولازم تفك ضغطه أولاً. يُفضل تعمل مجلد خاص عشان تفك الضغط فيه. لازم تشوف ملف **steamcmd.exe** بعد فك الضغط. شغله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

لما تطلعلك الرسالة **Loading Steam API.... OK**، معناته العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Satisfactory.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هون لازم تسجل دخول. بتسجل دخول كـ **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتتم عن طريق الأمر `app_update 1690800`. رقم التطبيق **1690800** هو الخاص بـ **سيرفر Satisfactory المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
لا توقف العملية قبل ما تخلص لتجنب الأخطاء. ممكن تاخد شوي وقت، بس الصبر بيستاهل! :)
:::



روح للمجلد اللي ثبت فيه السيرفر وادخل على المجلد الفرعي التالي: **../steamapps/common/SatisfactoryDedicatedServer**

هون لازم تنشئ ملف بدء التشغيل اللي بيشغل برنامج السيرفر. اعمل ملف بالاسم التالي: server-start.bat

:::info
تأكد إن خيار عرض امتدادات الملفات مفعل عشان تستخدم الامتداد الصحيح.
:::

افتح الملف، ضيف المحتوى التالي واحفظ التغييرات:

```
Factoryserver.exe -log -unattended
```



شغل الملف بعدها. عند أول تشغيل، رح يطلعلك نافذة منبثقة بتقول إن في مكونات ضرورية لتشغيل البرنامج. اللعبة بتحتاج Visual C++ Runtime. اضغط نعم وكمل التثبيت.

عشان يكون السيرفر ظاهر ومتصل من الخارج، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


لازم تضيف قواعد إضافية بالإعدادات. اضغط على قواعد الواردة والصادرة مثل ما موضح تحت، وضيفها لبروتوكول UDP والمنفذ 15000.



## التهيئة

الآن الإعداد الأساسي خلص. فيك تعدل إعدادات إضافية بملف التهيئة **ServerSettings.ini**. فيه تقدر تغير اسم السيرفر، كلمة المرور وخيارات ثانية. روح للمجلد التالي:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## اللعب

بنهاية الإعداد، فيك تشغل السيرفر عن طريق تنفيذ ملف **server-start.bat** اللي عملته قبل. هالشي رح يفتح كونسول السيرفر ويبدأ عملية تشغيل السيرفر. إذا كل شي مشى تمام، السيرفر رح يطلع بقائمة السيرفرات بعد ما يشتغل بنجاح.


<InlineVoucher />