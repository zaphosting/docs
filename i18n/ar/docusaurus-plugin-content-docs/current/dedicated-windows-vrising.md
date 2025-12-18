---
id: dedicated-windows-vrising
title: "سيرفر مخصص: إعداد سيرفر V-Rising مخصص على ويندوز"
description: "اكتشف كيفية إعداد سيرفر V Rising مخصص على ويندوز لأداء ألعاب مثالي وإدارة السيرفر → تعلّم المزيد الآن"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="كيفية إعداد سيرفر V RISING مخصص على ويندوز!" description="تحس إنك تفهم أفضل لما تشوف الأمور على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي يشرح كل شيء خطوة بخطوة. سواء كنت مستعجل أو تحب تستوعب المعلومات بأكثر طريقة ممتعة!"/>



## معلومات أساسية: 
مطلوب سيرفر يعمل بنظام Windows Server 2016/2019 مع معالج رباعي النوى بسرعة 2.4 جيجاهرتز (AMD/Intel) على الأقل وذاكرة RAM بسعة 4 جيجابايت (DDR3/4) ومساحة قرص حرة 6 جيجابايت (SSD أو أفضل، مفضل). يجب أن يكون السيرفر بنظام 64 بت.

## الخطوة 1: إنشاء مجلد لـ V-Rising

أولاً، تحتاج تتصل بسيرفرك باستخدام [الوصول الأولي (RDP)](vserver-windows-userdp.md). بعد الاتصال، تحتاج تنشئ مجلد جديد على السيرفر لتثبيت ملفات V-Rising فيه.
في هذا المثال، سننشئ مجلد جديد على سطح المكتب.
تقدر تسوي هذا عن طريق الضغط بالزر الأيمن للفأرة.
بعدين اختار "جديد -> مجلد".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

سميه اللي تحبه. في مثالنا سميناه "VRising"

## الخطوة 2: تحميل SteamCMD على سيرفر ويندوز

افتح المتصفح وروح للرابط [الرابط](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). هذا راح يحمل SteamCMD لويندوز على سيرفرك.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

راح ينزل الملف ويكون موجود في مجلد التنزيلات. (مجلد التنزيلات ممكن يختلف)

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

للتنظيم، ننسخ ملف steamcmd.zip لمجلد VRising اللي أنشأناه على سطح المكتب.
لتسوي هذا، اضغط على الملف وبعدين اضغط "CTRL+C".
افتح مجلد VRising على سطح المكتب واضغط "CTRL+V".
الحين تقدر تشوف الملف داخل مجلد VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

اضغط بالزر الأيمن على ملف steamcmd.zip واختر Extract All. وافق على الرسالة اللي تطلع بالضغط على زر Extract.

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

بعد ما يخلص، اضغط مرتين على ملف steamcmd.
راح تفتح نافذة جديدة تثبت ملفات steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## الخطوة 3: تحميل ملفات V Rising

بعد تثبيت ملفات steamcmd، راح تشوف هذا في النافذة المفتوحة.

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

الحين تحدد مكان تحميل الملفات.
تقدر تسوي هذا بأمر "force_install_dir".
الأمر الكامل في مثالنا هو:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

بعدين، تحتاج تسجل دخول كمستخدم مجهول.
اكتب الأمر "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

بعدها، نقدر نحمل الملفات.
استخدم الأمر:
app_update 1829350 validate

راح تبدأ الملفات بالتحميل.
ممكن ياخذ كم دقيقة.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

بعد ما يخلص، تقدر تشوف كل الملفات في مجلد VRising على السيرفر.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## الخطوة 4: تشغيل وتكوين سيرفر V Rising

تقدر تعدل ملف start_server_example.bat لتغييرات بسيطة.
اضغط عليه بالزر الأيمن واختر تحرير.
تقدر تعدل اسم السيرفر ومسار حفظ البيانات.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

تقدر تسوي تغييرات أكثر في ملفات الإعدادات.
الملفات موجودة في مجلد VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

في ملف ServerHostSettings.json تقدر تسوي تغييرات عامة.
مثل تحديد المنافذ، وصف السيرفر، فترة الحفظ، وكلمة مرور سيرفر الألعاب.
غيرت اسم السيرفر هناك لـ "ZAP-Hosting Test Server".

لتشغيل السيرفر، اضغط مرتين على ملف start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

عملية التشغيل تاخذ وقت.
لو تم فتح المنافذ صح، تقدر تلاقي السيرفر في قائمة السيرفرات.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## الخطوة 5: فتح المنافذ في الجدار الناري

طبعاً السيرفر لازم يكون متاح للعب مع الأصدقاء. عشان كذا لازم تفتح منافذ السيرفر في جدار ويندوز الناري. المنافذ 9876 و9877 لازم تكون مفتوحة لبروتوكولات TCP و UDP. 9876 هو منفذ سيرفر الألعاب و9877 هو منفذ الاستعلام (Query Port).
كيفية فتح المنافذ على ويندوز: [فتح المنافذ (جدار ناري)](vserver-windows-port.md).

بعد فتح المنافذ، السيرفر بيكون متاح للعب إذا كان شغّال.