---
id: vserver-windows-fs-22-epic
title: "VPS: إعداد سيرفر مخصص لـ Farming Simulator 2022 (Epic Games) على ويندوز"
description: "اكتشف كيفية إعداد سيرفر مخصص لـ Farming Simulator 22 على Epic Games لتحسين تجربة اللعب والاستضافة → تعلّم المزيد الآن"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
إعداد سيرفر لـ Farming Simulator 22 نسخة Epic Games يختلف قليلاً عن سيرفر عادي. هذا الدليل سيرشدك خلال العملية، مع التركيز على الجوانب الفريدة لنسخة Epic Games.
<InlineVoucher />

## التحضير

قبل البدء، تأكد أن إعدادك يفي بالمتطلبات التالية:
- **نظام التشغيل:** Windows Server 2016/2019 (64-بت)
- **المعالج:** على الأقل 4x 2.4 GHz (AMD/Intel)
- **الذاكرة RAM:** على الأقل 4GB (DDR3/4)
- **مساحة القرص:** على الأقل 50GB فارغة (يفضل SSD أو أفضل)
- **حساب Epic Games:** حساب Epic Games يمتلك Farming Simulator 22.

:::info
عند تشغيل السيرفر، لا يمكنك استضافة السيرفر واللعب على نفس حساب Epic Games. هذا يعني أنك ستحتاج نسخة ثانية من اللعبة على حساب آخر إذا كنت ترغب باللعب على السيرفر.
:::

## الخطوة 1: التحضير لتثبيت السيرفر
ابدأ بالاتصال بسيرفرك عبر سطح المكتب البعيد (RDP). إذا كنت تحتاج مساعدة، يرجى مراجعة [دليل الوصول الأولي (RDP)](vserver-windows-userdp.md).

بعد الاتصال، عليك تثبيت متطلب ضروري، Microsoft Visual C++ Redistribute، يمكن تحميله من [موقع مايكروسوفت](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). بعد التحميل، اتبع التعليمات على الشاشة لإكمال التثبيت.

:::tip
من الممكن أن تكون أدوات C++ Redistribute مثبتة لديك مسبقاً، في هذه الحالة قد يظهر خطأ من المثبت. يمكنك تجاهله بأمان والمتابعة.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

الآن عليك تثبيت مشغل Epic Games، يمكن تحميله من [موقع Epic Games](https://store.epicgames.com/en-US/download). مرة أخرى، اتبع التعليمات على الشاشة لإكمال التثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

بعد التثبيت، من المحتمل أن يحتاج المشغل لتحميل بعض الملفات والتحديثات الإضافية قبل الإطلاق.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

بعد فتح المشغل، يجب تسجيل الدخول بحساب Epic Games الذي يمتلك Farming Simulator 2022 في مكتبته.

## الخطوة 2: تحميل Farming Simulator 2022

في مشغل Epic Games، اضغط على تبويب **المكتبة** وابحث عن Farming Simulator 22. استخدم زر **تثبيت** واختر الموقع الذي تريد تحميل اللعبة فيه.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

الآن عليك الانتظار حتى يكتمل التحميل والتثبيت. سرعة التحميل تعتمد على عرض النطاق الخاص بسيرفرك.

## الخطوة 3: إعداد خيارات الإطلاق

بعد تثبيت اللعبة، عد إلى تبويب **المكتبة** في مشغل Epic Games. ابحث عن Farming Simulator 22، اضغط على الثلاث نقاط بجانبه واختر **إدارة**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

انزل إلى قسم **خيارات الإطلاق** وفعلها. في مربع النص الذي يظهر، اكتب `-server` ثم أغلق القائمة.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## الخطوة 4: تشغيل السيرفر

يمكنك الآن تشغيل Farming Simulator 2022 من مشغل Epic Games أو من الاختصار على سطح المكتب. يجب أن تُفتح اللعبة عبر نافذة أوامر (CMD) في وضع السيرفر المخصص. إذا لم يحدث ذلك، تأكد من إعداد خيار الإطلاق بشكل صحيح.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## الخطوة 5: تفعيل واجهة الويب (اختياري)

سيرفرات Farming Simulator 22 المخصصة تأتي مع واجهة ويب يمكنك تفعيلها لسيرفرك. هذا اختياري، لكن قد تجدها مفيدة لضبط الإعدادات ومعلومات أخرى كثيرة، لذلك ننصح بتفعيلها.

قبل المتابعة، تأكد من إغلاق السيرفر عن طريق الخروج من نافذة الأوامر. هذا لضمان أن التغييرات التي ستجريها في هذه الخطوة لن تُلغى.

انتقل إلى مسار تثبيت اللعبة، عادةً يكون `C:\Program Files\Epic Games\FarmingSimulator22` إذا ثبتت في المجلد الافتراضي.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

ابحث وافتح ملف `dedicatedServer.xml` الموجود في المجلد الجذري باستخدام محرر نصوص مثل Notepad.

قم بتعيين اسم المستخدم وكلمة المرور للمشرف بتعديل الحقول المناسبة.
```xml
  <initial_admin>
    <username>admin</username> //اسم المستخدم
    <passphrase>your_password</passphrase> //كلمة المرور
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

تأكد من حفظ الملف قبل الإغلاق وشغل `dedicatedServer.exe` الموجود في نفس المجلد الجذري.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

الآن يجب أن تتمكن من الوصول إلى واجهة الويب عبر المتصفح بزيارة `http://[عنوان_IP_لسيرفرك]:8080` مع استبدال `[عنوان_IP_لسيرفرك]` بعنوان IP الخاص بسيرفرك. إذا أردت الوصول للوحة مباشرة من نفس السيرفر، يمكنك ببساطة استخدام `http://127.0.0.1:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
بسبب الإعداد الفريد لنسخة Epic Games، قد تواجه صعوبات في استخدام واجهة الويب بشكل كامل. يمكنك إجراء تغييرات وإيقاف السيرفر من خلال الواجهة، لكن لا يمكنك تشغيل السيرفر من خلالها مثلاً.

إذا واجهت مشاكل، أوقف أولاً dedicatedServer.exe، ثم شغل Farming Simulator 22 مباشرة لضمان تشغيل السيرفر. بعد ذلك، شغل dedicatedServer.exe لتفعيل واجهة الويب.

من المهم تشغيل السيرفر **أولاً** ثم واجهة الويب **بعدها**، وإلا قد يكتشف Epic Games كلاهما كملف واحد ويمنعك من تشغيل السيرفر الرئيسي.
:::

## الخطوة 6: إعادة توجيه المنافذ

لتضمن وصول السيرفر للعامة، يجب تعديل قواعد إعادة توجيه المنافذ للمنافذ التي يستخدمها سيرفر الألعاب المخصص. يمكنك فعل ذلك إما عبر أوامر PowerShell مباشرة، وهو الأسهل، أو عبر صفحة جدار الحماية في Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عبر PowerShell" default>

افتح مربع البحث في ويندوز وابحث عن **PowerShell**. تأكد من النقر بزر الفأرة الأيمن واختيار **تشغيل كمسؤول** حتى تكون الصلاحيات متاحة وكل شيء يعمل بشكل صحيح.

:::info
تأكد من تشغيل PowerShell كمسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
:::

انسخ والصق الأوامر التالية في نافذة PowerShell:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ قواعد جدار ناري تلقائياً ضرورية لجعل سيرفر Farming Simulator 22 متاح للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

يجب إنشاء قواعد جديدة لسيرفر Farming Simulator 22. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 3724, 27015
- UDP وارد وصادر: 3724, 27015

يرجى استخدام دليلنا [إعادة توجيه المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية.

</TabItem>
</Tabs>

## الخطوة 7: الاتصال بالسيرفر
شغل اللعبة واذهب إلى قائمة اللعب الجماعي. ابحث عن اسم السيرفر، الذي يمكنك إيجاده في واجهة الويب ويمكنك تخصيصه.

عند إيجاد السيرفر، اضغط عليه للاتصال. إذا طلب منك، أدخل كلمة المرور، التي ستكون أيضاً ظاهرة في واجهة الويب.

## الخاتمة

مبروك، لقد قمت بتثبيت وضبط سيرفر Farming Simulator 2022 بنجاح على VPS الخاص بك! إذا كان لديك أي أسئلة أو مشاكل إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يومياً!

<InlineVoucher />