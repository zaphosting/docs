---
id: dedicated-windows-fivem
title: "سيرفر مخصص: إعداد سيرفر FiveM مخصص"
description: "اكتشف كيفية إعداد وتشغيل سيرفر FiveM مخصص خاص بك مع txAdmin لتجربة لعب جماعية سلسة → تعلّم المزيد الآن"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## مقدمة

هل تمتلك سيرفر مخصص وتريد تثبيت وتشغيل سيرفر FiveM مخصص خاص بك باستخدام txAdmin؟ أنت في المكان الصحيح! في السطور التالية، سنشرح جميع الخطوات اللازمة لكيفية التثبيت والتكوين وما الذي يجب أن تأخذه بعين الاعتبار.



:::warning  نظام التشغيل محدد ومثبت
يفترض أنك قد قمت بالفعل باختيار وتثبيت نظام تشغيل لسيرفرك المخصص. إذا لم تكمل هذه الخطوة بعد، يجب عليك أولاً اتباع الخطوات في [الإعداد الأولي](dedicated-setup.md) الخاص بالسيرفرات المخصصة.
:::



## التحضير

لكي تقوم بإعداد سيرفر FiveM، هناك بعض خطوات التحضير الضرورية التي يجب تنفيذها قبل بدء الإعداد الفعلي لسيرفر FiveM المخصص.



### إعداد قاعدة البيانات

إذا كنت ترغب في استخدام وتثبيت موارد تتطلب قاعدة بيانات، فستحتاج إلى **سيرفر قاعدة بيانات** إضافي. هناك طرق مختلفة لإعداد مثل هذا السيرفر. في دليلنا [تثبيت MySQL](dedicated-windows-installmysql.md)، نوضح لك كيفية تثبيت **سيرفر قاعدة بيانات** خاص بك على **السيرفر المخصص**.



### تحميل برنامج سيرفر FiveM

الخطوة التالية هي تحميل برنامج سيرفر FiveM. للقيام بذلك، انتقل إلى موقع [قائمة إصدارات السيرفر](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) الخاص بـ FiveM عبر أي من متصفحات الإنترنت المثبتة لديك وقم بتحميل أحدث إصدار لسيرفر FiveM.

قم بفك ضغط الملف الذي تم تحميله في مجلد التنزيلات وانقل ملفات سيرفر FiveM إلى مجلد منفصل مفضلًا. في هذا المثال، يقع برنامج السيرفر في مجلد باسم **FiveM** على سطح المكتب.

:::warning أداة فك الضغط مطلوبة
لفك ضغط برنامج سيرفر FiveM الذي تم تحميله، تحتاج إلى أداة فك ضغط للملف المضغوط. في هذا المثال، تم استخدام [برنامج 7Zip](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### إنشاء مفتاح ترخيص سيرفر FiveM

كل سيرفر FiveM يحتاج إلى مفتاح ترخيص خاص به، يتم إدارته عبر بوابة [Cfx.re الجديدة](http://portal.cfx.re/). يرتبط مفتاح الترخيص بحسابك على Cfx.re. سجّل الدخول إلى الموقع، اذهب إلى قسم **السيرفر** واضغط على زر **إنشاء مفتاح**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## التكوين

الآن يمكنك البدء بتثبيت سيرفر FiveM وtxAdmin. لبدء هذه الخطوة، افتح مجلد سيرفر FiveM مرة أخرى وشغّل تطبيق `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


بمجرد تشغيل تطبيق السيرفر، ستفتح وحدة تحكم السيرفر وواجهة txAdmin. في واجهة txAdmin، يجب ربط **حساب Cfx.re** الخاص بك مع txAdmin.



![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### إعداد txAdmin

خلال إعداد txAdmin، يتم تثبيت وتكوين سيرفر FiveM الخاص بك في خمس خطوات. اتبع التعليمات في واجهة txAdmin وابدأ بتحديد **اسم السيرفر** أولاً. ثم اختر نوع **السيرفر** المطلوب. هذا المثال يعرض تثبيت سيرفر FiveM مع QBCore مثبت مسبقًا.

اختر خيار **الوصفات الشائعة** في خطوة **نوع النشر** ثم اختر **قالب إطار عمل QBCore**. أكد على **مجلد البيانات** المطلوب وابدأ **مشغل الوصفات** لإكمال التثبيت.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

أثناء تشغيل مشغل الوصفات، يجب إضافة آخر المعلومات الضرورية قبل أن يتم تشغيل السيرفر أخيرًا. أدخل مفتاح الترخيص الذي أنشأته سابقًا في حقل **مفتاح الترخيص**. ثم اضغط على **إظهار/إخفاء خيارات قاعدة البيانات (متقدم)** وأدخل بيانات الدخول لسيرفر قاعدة البيانات الخاص بك. في هذه الحالة، مطلوب فقط كلمة المرور التي تم تحديدها مسبقًا لمستخدم **root**. يمكن ترك باقي الإعدادات كما هي. تحقق من بياناتك ثم اضغط على **تشغيل الوصفة** لبدء العملية.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### تكوين جدار الحماية
لكي تتأكد من أن سيرفرك متاح للعامة، يجب تعديل قواعد إعادة توجيه المنافذ للمنفذات التي يستخدمها سيرفر الألعاب المخصص. يمكنك القيام بذلك إما عبر أوامر Powershell مباشرة (وهي أسهل)، أو عبر صفحة جدار حماية Windows Defender بشكل تقليدي.

<Tabs>
<TabItem value="powershell" label="عبر Powershell" default>

افتح مربع البحث في Windows وابحث عن **Powershell**. تأكد من النقر بزر الماوس الأيمن واختيار **تشغيل كمسؤول** حتى تكون الصلاحيات متاحة وكل شيء يعمل بشكل صحيح.

:::info
تأكد من تشغيل Powershell في وضع المسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في نافذة Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ تلقائيًا قواعد جدار ناري ضرورية لجعل سيرفر FiveM الخاص بك متاحًا للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم وظيفة البحث في Windows لفتح **إعدادات جدار حماية Windows مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

يجب عليك إنشاء قواعد جديدة لسيرفر FiveM الخاص بك. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح أدناه وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 30120
- UDP وارد وصادر: 30120

يرجى استخدام دليلنا [إعادة توجيه المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت بحاجة لمزيد من المساعدة في هذا الأمر.

</TabItem>
</Tabs>

## الخاتمة

لقد قمت بتثبيت وتكوين خدمة سيرفر FiveM مخصص بنجاح على سيرفرك المخصص. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂


<InlineVoucher />