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

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="كيفية إعداد سيرفر V RISING مخصص على ويندوز!" description="تحس إنك تفهم أفضل لما تشوف الأمور على أرض الواقع؟ إحنا معاك! غص في الفيديو اللي بيشرح كل حاجة خطوة بخطوة. سواء كنت مستعجل أو بتحب تستوعب المعلومات بأحلى طريقة ممكنة!"/>

<InlineVoucher />

## معلومات أساسية: 
مطلوب سيرفر مبني على Windows Server 2016/2019 مع معالج رباعي النواة بسرعة 2.4 جيجاهرتز على الأقل (AMD/Intel) وذاكرة RAM بسعة 4 جيجابايت على الأقل (DDR3/4) و6 جيجابايت مساحة خالية على القرص (SSD أو أفضل، مفضل). يجب أن يعمل السيرفر على بنية 64 بت.

## الخطوة 1: إنشاء مجلد لـ V-Rising

أولاً، لازم تتصل بسيرفرك باستخدام [الوصول الأولي (RDP)](vserver-windows-userdp.md). بعد ما تتصل، لازم تنشئ مجلد جديد على السيرفر لتحط فيه ملفات V-Rising.
في هذا المثال، هننشئ مجلد جديد على سطح المكتب.
تقدر تعمل كليك يمين بالفأرة.
بعدين تختار "جديد -> مجلد".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

ممكن تسميه أي اسم تحبه. في مثالنا هنسمّيه "VRising"

## الخطوة 2: تحميل SteamCMD على سيرفر ويندوز

افتح المتصفح وروح للرابط ده [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). ده هيحمّل SteamCMD لويندوز على سيرفرك.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

الملف هيتحمّل وهيكون موجود في مجلد التنزيلات. (مجلد التنزيلات ممكن يختلف)

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

عشان تسهّل عليك، هننسخ ملف steamcmd.zip لمجلد VRising اللي عملناه على سطح المكتب.
علشان تعمل كده، اضغط على الملف وبعدين اضغط على تركيبة المفاتيح "CTRL+C".
بعدين افتح مجلد VRising على سطح المكتب واضغط "CTRL+V".
دلوقتي هتلاقي الملف جوه مجلد VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

اعمل كليك يمين على ملف steamcmd.zip واختار Extract All. وافق على الرسالة اللي هتظهر بالضغط على زر Extract.

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

بعد ما يخلص، اعمل دبل كليك على ملف steamcmd.
هتفتح نافذة جديدة بتثبت ملفات steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## الخطوة 3: تحميل ملفات V Rising

بعد تثبيت ملفات steamcmd، هتشوف النافذة دي.

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

دلوقتي هتحدد مكان تحميل الملفات.
ده بيتم باستخدام أمر "force_install_dir".
الأمر الكامل في مثالنا هو:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

بعدها، لازم تسجل دخول كمستخدم مجهول.
عشان كده، اكتب "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

بعد كده، نقدر نحمل الملفات.
استخدم الأمر ده:
app_update 1829350 validate

الملفات هتتحمل دلوقتي.
وده ممكن ياخد كام دقيقة.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

بعد ما يخلص، هتلاقي كل الملفات على السيرفر في مجلد VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## الخطوة 4: تشغيل وتكوين سيرفر V Rising

تقدر تعدل ملف start_server_example.bat عشان تعمل شوية تغييرات.
اعمل كليك يمين على الملف وبعدين اختار تحرير.
تقدر تعدل اسم السيرفر ومسار حفظ البيانات.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

تقدر تعمل تغييرات أكتر في ملفات الإعدادات.
الملفات دي موجودة في المجلد VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

في ملف ServerHostSettings.json تقدر تعمل تغييرات عامة.
زي تحديد المنافذ، وصف السيرفر، فترة الحفظ، وكلمة مرور سيرفر الألعاب.
أنا غيرت اسم السيرفر هناك لـ "ZAP-Hosting Test Server".

لتشغيل السيرفر، اعمل دبل كليك على ملف start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

عملية التشغيل هتاخد شوية وقت.
لو المنافذ اتفتحت صح في الخطوة الجاية، هتلاقي السيرفر في قائمة السيرفرات.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## الخطوة 5: فتح المنافذ في الجدار الناري

طبعًا لازم السيرفر يكون متاح للعب مع أصحابك. عشان كده، لازم تفتح منافذ السيرفر في جدار ويندوز الناري. المنافذ 9876 و9877 لازم تتفتح لبروتوكولات TCP وUDP. 9876 هو منفذ سيرفر الألعاب و9877 هو منفذ الاستعلام (Query Port).
طريقة فتح المنافذ على ويندوز: [فتح المنافذ (جدار ناري)](vserver-windows-port.md).

بعد فتح المنافذ، السيرفر هيبقى متاح للعب لو كان شغال.

<InlineVoucher />