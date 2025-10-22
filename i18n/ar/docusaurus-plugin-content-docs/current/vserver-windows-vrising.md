---
id: vserver-windows-vrising
title: "VPS: إعداد سيرفر مخصص V-Rising على ويندوز"
description: "اكتشف كيفية إعداد سيرفر مخصص V Rising على ويندوز لأداء ألعاب مثالي واستضافة سلسة → تعلّم المزيد الآن"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="كيفية إعداد سيرفر مخصص V RISING على ويندوز!" description="تحس إنك تفهم أفضل لما تشوف الأشياء عم تشتغل؟ إحنا معك! غص في الفيديو اللي بيشرح كل شيء خطوة بخطوة. سواء كنت مستعجل أو بتحب تستوعب المعلومات بطريقة ممتعة!"/>
<InlineVoucher />

## معلومات أساسية: 
مطلوب سيرفر مبني على Windows Server 2016/2019 مع معالج رباعي النوى بسرعة 2.4 جيجاهرتز على الأقل (AMD/Intel) وذاكرة RAM بسعة 4 جيجابايت على الأقل (DDR3/4) و6 جيجابايت مساحة خالية على القرص (SSD أو أفضل، مفضل). يجب أن يعمل السيرفر على بنية 64 بت.

## الخطوة 1: إنشاء مجلد لـ V-Rising

أولاً، تحتاج تتصل بسيرفرك باستخدام [الوصول الأولي (RDP)](vserver-windows-userdp.md). بعد الاتصال، تحتاج تنشئ مجلد جديد على السيرفر لتحط فيه ملفات V-Rising.
في هذا المثال، سننشئ المجلد على سطح المكتب.
تقدر تعمل كليك يمين بالفأرة.
بعدين تختار "جديد -> مجلد".

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

سميه اللي بدك إياه. في مثالنا سميناه "VRising"

## الخطوة 2: تحميل SteamCMD على سيرفر ويندوز

افتح المتصفح وروح للرابط [هنا](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). هذا راح يحمل SteamCMD لويندوز على سيرفرك.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

الملف بينزل وبيكون موجود في مجلد التنزيلات. (مجلد التنزيلات ممكن يختلف)

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

لتسهيل الأمور، ننسخ ملف steamcmd.zip لمجلد VRising اللي أنشأناه على سطح المكتب.
اضغط على الملف وبعدين اضغط "CTRL+C".
افتح مجلد VRising على سطح المكتب واضغط "CTRL+V".
الآن تقدر تشوف الملف داخل مجلد VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

اعمل كليك يمين على ملف steamcmd.zip واختر Extract All. وافق على الرسالة اللي تطلع بالضغط على زر Extract.

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

بعد ما يخلص، اضغط دبل كليك على ملف steamcmd.
راح تفتح نافذة جديدة تثبت ملفات steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## الخطوة 3: تحميل ملفات V Rising

بعد تثبيت ملفات steamcmd، راح تشوف هالشاشة في النافذة الجديدة.

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

هنا تحدد مكان تحميل الملفات.
تستخدم أمر "force_install_dir".
الأمر الكامل في مثالنا هو:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

بعدين، تحتاج تسجل دخول كمستخدم مجهول.
تكتب الأمر "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

بعدها، نقدر نحمل الملفات.
الأمر هو:
app_update 1829350 validate

الملفات راح تنزل، وهذا ممكن ياخذ كم دقيقة.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

بعد ما يخلص التنزيل، تقدر تشوف كل الملفات على السيرفر داخل مجلد VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## الخطوة 4: تشغيل وتكوين سيرفر V Rising

تقدر تعدل ملف start_server_example.bat لتغييرات بسيطة.
اعمل كليك يمين على الملف واختر تحرير.
تقدر تغير اسم السيرفر ومسار حفظ البيانات.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

تقدر تعدل أكثر في ملفات الإعدادات.
الملفات موجودة في المجلد VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

في ملف ServerHostSettings.json تقدر تغير إعدادات عامة.
مثل تحديد المنافذ، وصف السيرفر، فترة الحفظ، وكلمة مرور سيرفر الألعاب.
غيرت اسم السيرفر هناك لـ "ZAP-Hosting Test Server".

لتشغيل السيرفر، اضغط دبل كليك على ملف start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

عملية التشغيل بتاخد وقت.
لو المنافذ تم فتحها صح في الخطوة الجاية، راح تلاقي السيرفر في قائمة السيرفرات.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## الخطوة 5: فتح المنافذ في جدار الحماية

طبعاً السيرفر لازم يكون متاح للعب مع الأصدقاء. عشان هيك لازم تفتح منافذ السيرفر في جدار حماية ويندوز. المنافذ 9876 و9877 لازم تكون مفتوحة لبروتوكولات TCP وUDP. 9876 هو منفذ سيرفر الألعاب و9877 هو منفذ الاستعلام (Query Port).
كيف تفتح المنافذ على ويندوز، شوف [توجيه المنافذ (جدار الحماية)](vserver-windows-port.md).

بعد فتح المنافذ، السيرفر بيصير متاح للعامة إذا كان شغّال.

## الخلاصة

مبروك، أنت الآن ثبت وضبط سيرفر V-Rising على VPS الخاص فيك! لو عندك أي أسئلة أو مشاكل، تواصل مع فريق الدعم عندنا، متوفرين لمساعدتك كل يوم!

<InlineVoucher />