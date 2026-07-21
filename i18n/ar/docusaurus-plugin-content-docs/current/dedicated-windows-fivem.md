---
id: dedicated-windows-fivem
title: "إعداد سيرفر مخصص FiveM"
description: "اكتشف كيفية إعداد وتشغيل سيرفر مخصص FiveM الخاص بك مع txAdmin لتجربة لعب جماعية سلسة → تعلّم المزيد الآن"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة

هل تمتلك سيرفر مخصص وتريد تثبيت وتشغيل خدمة سيرفر مخصص FiveM الخاصة بك باستخدام txAdmin؟ أنت في المكان الصحيح! في هذا الدليل، سنشرح جميع الخطوات اللازمة لكيفية التثبيت والتكوين وما يجب مراعاته.

:::warning تم اختيار نظام التشغيل وتثبيته
يفترض أنك قد قمت باختيار وتثبيت نظام التشغيل الخاص بـ VPS/السيرفر المخصص الخاص بك. إذا لم تكمل هذه الخطوة بعد، يجب عليك أولاً اتباع الخطوات في دليل [الإعداد الأولي](dedicated-setup.md) للسيرفرات المخصصة.
:::

## التحضير

لكي تقوم بإعداد سيرفر FiveM، هناك بعض خطوات التحضير التي يجب تنفيذها قبل بدء الإعداد الفعلي لسيرفر مخصص FiveM.

### إعداد قاعدة البيانات

إذا كنت تريد استخدام وتثبيت موارد تتطلب قاعدة بيانات، فستحتاج إلى **سيرفر قاعدة بيانات** إضافي. هناك عدة طرق لإعداد مثل هذا السيرفر. في دليلنا [تثبيت MySQL](dedicated-windows-installmysql.md)، نوضح لك كيفية تثبيت **سيرفر قاعدة بيانات** خاص بك على **السيرفر المخصص**.

### تحميل برنامج سيرفر FiveM

الخطوة التالية هي تحميل برنامج سيرفر FiveM. للقيام بذلك، انتقل إلى موقع [قائمة إصدارات السيرفر](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) الخاص بـ FiveM عبر أحد متصفحات الإنترنت المثبتة لديك وقم بتحميل أحدث إصدار من سيرفر FiveM.

قم بفك ضغط الملف الذي تم تحميله في مجلد التنزيلات وانقل ملفات سيرفر FiveM إلى مجلد منفصل مفضلًا. في هذا المثال، يقع برنامج السيرفر في مجلد باسم **FiveM** على سطح المكتب.

:::warning أداة فك الضغط مطلوبة
لفك ضغط برنامج سيرفر FiveM الذي تم تحميله، تحتاج إلى أداة فك ضغط للملف المضغوط. في هذا المثال، تم استخدام [برنامج 7Zip](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)

### إنشاء مفتاح ترخيص سيرفر FiveM

كل سيرفر FiveM يحتاج إلى مفتاح ترخيص خاص به، يتم إدارته عبر بوابة [Cfx.re Portal](http://portal.cfx.re/) الجديدة. يرتبط مفتاح الترخيص بحسابك على Cfx.re. سجّل الدخول إلى الموقع، انتقل إلى فئة **السيرفر** واضغط على زر **إنشاء مفتاح**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)

## التكوين

يمكنك الآن البدء بتثبيت سيرفر FiveM وtxAdmin. لبدء هذه الخطوة، افتح مجلد سيرفر FiveM مرة أخرى وقم بتشغيل تطبيق `cfx-server.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)

بمجرد تشغيل تطبيق السيرفر، ستفتح وحدة تحكم السيرفر وواجهة txAdmin. في واجهة txAdmin، يجب ربط **حساب Cfx.re** الخاص بك مع txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)

### إعداد txAdmin

أثناء إعداد txAdmin، يتم تثبيت وتكوين سيرفر FiveM الخاص بك في خمس خطوات. اتبع التعليمات في واجهة txAdmin وحدد أولاً **اسم السيرفر**. ثم اختر نوع **السيرفر** المطلوب. يظهر هذا المثال تثبيت سيرفر FiveM مع QBCore مثبت مسبقًا.

اختر خيار **الوصفات الشائعة** في خطوة **نوع النشر** ثم قالب **QBCore Framework Template**. أكد على **مجلد البيانات** المطلوب وابدأ **نشر الوصفة** لإكمال التثبيت.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

أثناء نشر الوصفة، يجب إضافة آخر المعلومات اللازمة قبل أن يتم تشغيل السيرفر أخيرًا. أدخل مفتاح ترخيص FiveM الذي أنشأته سابقًا في حقل **مفتاح الترخيص**. ثم اضغط على **إظهار/إخفاء خيارات قاعدة البيانات (متقدم)** وأدخل بيانات تسجيل الدخول لسيرفر قاعدة البيانات الخاص بك. في هذه الحالة، مطلوب فقط كلمة المرور التي تم تعيينها مسبقًا لمستخدم **root**. يمكن ترك باقي الإعدادات كما هي. تحقق من مدخلاتك ثم اضغط على **تشغيل الوصفة** لبدء العملية.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)

### تكوين جدار الحماية

لضمان وصول السيرفر الخاص بك للعامة، يجب تعديل قواعد إعادة توجيه المنافذ للمنفذات التي يستخدمها VPS/السيرفر المخصص. يمكنك القيام بذلك إما عبر أوامر Powershell مباشرة وهو الأسهل، أو عبر صفحة جدار حماية Windows Defender بشكل تقليدي.

<Tabs>
<TabItem value="powershell" label="عبر Powershell" default>

افتح مربع البحث في Windows وابحث عن **Powershell**. تأكد من النقر بزر الماوس الأيمن واختيار **تشغيل كمسؤول** حتى تتوفر الأذونات ويعمل كل شيء بشكل صحيح.

:::info
تأكد من تشغيل Powershell في وضع المسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
:::

بعد ذلك، انسخ والصق الأوامر التالية في موجه Powershell:
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

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

يجب عليك إنشاء قواعد جديدة لسيرفر FiveM الخاص بك. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح أدناه وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 30120
- UDP وارد وصادر: 30120

يرجى استخدام دليلنا [إعادة توجيه المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت بحاجة لمزيد من المساعدة في ذلك.

</TabItem>
</Tabs>

## الخاتمة

لقد قمت بتثبيت وتكوين خدمة سيرفر مخصص FiveM بنجاح على VPS/السيرفر المخصص الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂