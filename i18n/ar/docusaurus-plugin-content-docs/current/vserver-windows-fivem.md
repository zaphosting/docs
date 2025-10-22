---
id: vserver-windows-fivem
title: "VPS: إعداد سيرفر مخصص لـ FiveM"
description: "اكتشف كيفية تثبيت وتكوين سيرفر مخصص لـ FiveM على VPS لتجربة لعب جماعية سلسة → تعلّم المزيد الآن"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## مقدمة

هل تمتلك VPS وتريد تثبيت وتشغيل سيرفر مخصص خاص بك لـ FiveM باستخدام txAdmin؟ أنت في المكان الصحيح! في التالي، سنشرح جميع الخطوات اللازمة لكيفية التثبيت والتكوين وما يجب أن تأخذه بعين الاعتبار.


## التحضير

لإعداد سيرفر FiveM، هناك خطوات تحضيرية معينة يجب تنفيذها قبل بدء التثبيت الفعلي لسيرفر FiveM المخصص.



### إعداد قاعدة البيانات

إذا كنت تريد استخدام وتثبيت موارد تتطلب قاعدة بيانات، فستحتاج إلى **سيرفر قاعدة بيانات** إضافي. هناك طرق مختلفة لإعداد مثل هذا السيرفر. في دليلنا [تثبيت MySQL](vserver-windows-installmysql.md)، نوضح لك كيفية تثبيت **سيرفر قاعدة بيانات** خاص بك على **VPS** الخاص بك.



### تحميل برنامج سيرفر FiveM

الخطوة التالية هي تحميل برنامج سيرفر FiveM. للقيام بذلك، انتقل إلى موقع [قائمة إصدارات السيرفر](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) الخاص بـ FiveM عبر أي من متصفحات الإنترنت المثبتة لديك وقم بتحميل أحدث إصدار لسيرفر FiveM.

فك ضغط الملف الذي تم تحميله في مجلد التنزيلات وانقل ملفات سيرفر FiveM إلى مجلد منفصل مفضلًا. في هذا المثال، يقع برنامج السيرفر في مجلد باسم **FiveM** على سطح المكتب.

:::warning أداة فك الضغط مطلوبة
لفك ضغط برنامج سيرفر FiveM الذي تم تحميله، تحتاج إلى أداة فك ضغط للملف المضغوط. في هذا المثال، تم استخدام [برنامج 7Zip](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### إنشاء مفتاح ترخيص سيرفر FiveM

كل سيرفر FiveM يحتاج إلى مفتاح ترخيص خاص به، يتم إدارته عبر بوابة [Cfx.re الجديدة](http://portal.cfx.re/). يرتبط مفتاح الترخيص بحسابك على Cfx.re. سجّل الدخول إلى الموقع، انتقل إلى فئة **السيرفر** واضغط على زر **إنشاء مفتاح**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## التكوين

الآن يمكنك البدء بتثبيت سيرفر FiveM وtxAdmin. لبدء هذه الخطوة، افتح مجلد سيرفر FiveM مرة أخرى وشغّل تطبيق `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


بمجرد تشغيل تطبيق السيرفر، ستفتح وحدة تحكم السيرفر وواجهة txAdmin. في واجهة txAdmin، يجب ربط **حساب Cfx.re** الخاص بك مع txAdmin.


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### إعداد txAdmin

أثناء إعداد txAdmin، يتم تثبيت وتكوين سيرفر FiveM الخاص بك في خمس خطوات. اتبع التعليمات في واجهة txAdmin وحدد أولاً **اسم السيرفر**. ثم اختر نوع **السيرفر** المطلوب. هذا المثال يعرض تثبيت سيرفر FiveM مع QBCore مثبت مسبقًا.

اختر خيار **الوصفات الشائعة** في خطوة **نوع النشر** ثم قالب **QBCore Framework Template**. أكد على **مجلد البيانات** المطلوب وابدأ **موزع الوصفات** لإكمال التثبيت.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

أثناء تشغيل موزع الوصفات، يجب إضافة آخر المعلومات اللازمة قبل أن يتم تشغيل السيرفر أخيرًا. أدخل مفتاح ترخيص FiveM الذي أنشأته سابقًا في حقل **مفتاح الترخيص**. ثم اضغط على **إظهار/إخفاء خيارات قاعدة البيانات (متقدم)** وأدخل بيانات تسجيل الدخول لسيرفر قاعدة البيانات الخاص بك. في هذه الحالة، مطلوب فقط كلمة المرور التي تم تعيينها مسبقًا لمستخدم **root**. يمكن ترك باقي الإعدادات كما هي. تحقق من إدخالاتك ثم اضغط على **تشغيل الوصفة** لبدء العملية.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### تكوين جدار الحماية
لضمان وصول السيرفر الخاص بك للعامة، يجب تعديل قواعد إعادة توجيه المنافذ للمنفذات التي يستخدمها سيرفر الألعاب المخصص. يمكنك القيام بذلك إما عبر أوامر Powershell مباشرة، وهو الأسهل، أو عبر صفحة جدار حماية Windows Defender بشكل تقليدي.

<Tabs>
<TabItem value="powershell" label="عبر Powershell" default>

افتح مربع البحث في ويندوز وابحث عن **Powershell**. تأكد من النقر بزر الماوس الأيمن واختيار **تشغيل كمسؤول** حتى تكون الصلاحيات متاحة وكل شيء يعمل بشكل صحيح.

:::info
تأكد من تشغيل Powershell في وضع المسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
:::

بعد ذلك، انسخ والصق الأوامر التالية في نافذة Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ تلقائيًا قواعد جدار ناري ضرورية لجعل سيرفر FiveM الخاص بك متاحًا للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم وظيفة البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

يجب عليك إنشاء قواعد جديدة لسيرفر FiveM الخاص بك. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح أدناه وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 30120
- UDP وارد وصادر: 30120

يرجى استخدام دليلنا [إعادة توجيه المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت بحاجة لمزيد من المساعدة في هذا الأمر.

</TabItem>
</Tabs>

## الخلاصة

لقد قمت بتثبيت وتكوين سيرفر مخصص لـ FiveM بنجاح على VPS الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂


<InlineVoucher />