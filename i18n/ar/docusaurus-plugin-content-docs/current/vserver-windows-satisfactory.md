---
id: vserver-windows-satisfactory
title: "VPS: إعداد سيرفر مخصص لـ Satisfactory على ويندوز"
description: "اكتشف كيف تضبط سيرفر مخصص لـ Satisfactory على VPS أو سيرفر مخصص بسرعة وسهولة → تعلّم المزيد الآن"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
عندك VPS أو سيرفر مخصص وبدك تثبت سيرفرات ألعاب عليه؟ مثلاً سيرفر مخصص لـ Satisfactory؟ أنت بالمكان الصح! بالأسفل رح نشرح خطوة بخطوة كيف تثبت هالخدمة على سيرفرك.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="إعداد سيرفر مخصص لـ Satisfactory على VPS ويندوز" description="حسّ حالك بتفهم أحسن لما تشوف الأمور عم تصير؟ عنا الفيديو المناسب! غطس معنا بالفيديو اللي بيشرح كل شي بطريقة سهلة. سواء كنت مستعجل أو بتحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>
<InlineVoucher />

## التحضير

لتثبيت سيرفر Satisfactory، لازم تستخدم SteamCMD. SteamCMD هو **نسخة سطر الأوامر من عميل Steam**. هالأداة بتخليك تنزل تطبيقات السيرفر المخصصة لألعاب Steam الشهيرة بسرعة وسهولة. بتلاقي SteamCMD على الموقع الرسمي لمطوري Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

بعدها، رح تنزل الملف. الملف يحتوي على **steamcmd.zip**، ولازم تفك الضغط عنه أولاً. يُفضل تعمل مجلد خاص لتفكيك الملف فيه. لازم تشوف ملف **steamcmd.exe** بعد فك الضغط. شغّله واستنى لين يخلص التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

لما تطلعلك رسالة **Loading Steam API.... OK**، معناته العملية تمت بنجاح وتقدر تبدأ بتثبيت سيرفر Satisfactory.



## التثبيت

بعد التثبيت، لازم تقدر تنفذ أوامر في **سطر أوامر Steam (steamcmd.exe)**. هون لازم تسجل دخول. بتسجل دخول كـ **anonymous**. نفذ الأمر التالي: `login anonymous`

الخطوة الجاية هي التثبيت. بتستخدم الأمر `app_update 1690800`. رقم التطبيق **1690800** هو الخاص بـ **سيرفر Satisfactory المخصص**.

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
لا توقف العملية قبل ما تخلص لتجنب الأخطاء. ممكن تاخد شوية وقت، بس الصبر بيستاهل! :)
:::



روح للمجلد اللي نفذت فيه التثبيت وادخل للمجلد الفرعي التالي: **../steamapps/common/SatisfactoryDedicatedServer**

هون لازم تنشئ ملف بدء التشغيل اللي بيشغّل برنامج السيرفر. اعمل ملف بالاسم التالي: server-start.bat

:::info
تأكد إن خيار عرض امتدادات الملفات مفعل حتى تستخدم الامتداد الصحيح.
:::

افتح الملف، ضيف المحتوى التالي واحفظ التغييرات:

```
Factoryserver.exe -log -unattended
```



شغّل الملف. عند أول تشغيل، رح تطلع نافذة منبثقة بتقولك إنه في مكونات ضرورية لتشغيل البرنامج. اللعبة بتحتاج Visual C++ Runtime. اضغط نعم وكمل التثبيت.

لتخلي السيرفر ظاهر ومتصل من الخارج، لازم تفتح/توجه منافذ السيرفر في جدار الحماية. افتح إعدادات جدار حماية ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


لازم تضيف قواعد جديدة بالإعدادات. اضغط على قواعد الواردة والصادرة مثل ما موضح تحت، وأضفهم لبروتوكول UDP والمنفذ 15000.



## الإعدادات

الآن الإعداد الأساسي خلص. فيك تعدل إعدادات إضافية بملف **ServerSettings.ini**. فيه تقدر تغير اسم السيرفر، كلمة المرور، وخيارات ثانية. روح للمجلد التالي:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## اللعب

بنهاية الإعداد، فيك تشغل السيرفر عن طريق تنفيذ ملف **server-start.bat** اللي أنشأته قبل. هالشي رح يفتح كونسول السيرفر ويبدأ عملية تشغيل السيرفر. إذا كل شي مشى تمام، السيرفر رح يطلع بقائمة السيرفرات بعد ما يشتغل بنجاح.



## الخلاصة

مبروك، أنت ثبت وضبط سيرفر Satisfactory على VPS بنجاح! إذا عندك أي أسئلة أو مشاكل، تواصل مع فريق الدعم عندنا، متوفرين ليساعدوك كل يوم!

<InlineVoucher />