---
id: dedicated-windows-openmp
title: "سيرفر مخصص: إعداد سيرفر Open.mp مخصص على ويندوز"
description: "اكتشف كيفية إعداد وتشغيل سيرفر Open.mp مخصص على ويندوز لتجربة لعب متعددة اللاعبين سلسة → تعلّم المزيد الآن"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة

هل لديك سيرفر مخصص بنظام ويندوز وتريد تثبيت خدمة سيرفر Open.mp المخصصة عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح لك خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<InlineVoucher />

## التحضير

أولاً، اتصل بسيرفرك المخصص عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في ذلك.

بعد دخولك للسيرفر، قم بتحميل أحدث إصدار من [مستودع open.mp على GitHub](https://github.com/openmultiplayer/open.mp/releases). تأكد من اختيار نسخة **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## التثبيت

بعد تحميل الإصدار، فك ضغط الملفات باستخدام أداة مثل 7zip أو WinRAR. ستجد مجلد **Server** يحتوي على جميع ملفات السيرفر اللازمة.

لتشغيل السيرفر، فقط شغّل **omp-server.exe** وسيبدأ السيرفر بالاقلاع. لكن ننصحك أولاً بإعداد تحويل المنافذ وتكوين السيرفر.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### تحويل المنافذ لسيرفرك

لتضمن وصول السيرفر للعامة، يجب تعديل قواعد تحويل المنافذ للمنافذ التي يستخدمها سيرفر الألعاب. يمكنك فعل ذلك إما عبر أوامر PowerShell مباشرة، وهو الأسهل، أو عبر صفحة جدار الحماية في Windows Defender.

:::tip
عند تشغيل السيرفر لأول مرة، قد يظهر لك طلب UAC. إذا قبلته، سيتم إعداد قواعد الجدار الناري تلقائيًا، ويمكنك متابعة القسم التالي. إذا لم تقبل، اتبع إحدى الطرق أدناه.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عبر PowerShell" default>

افتح مربع البحث في ويندوز وابحث عن **PowerShell**. تأكد من الضغط بالزر الأيمن واختيار **تشغيل كمسؤول** حتى تحصل على الصلاحيات اللازمة ويعمل كل شيء بشكل صحيح.

:::info
تأكد من تشغيل PowerShell بوضع المسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
:::

بعدها، انسخ والصق الأوامر التالية في نافذة PowerShell:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ قواعد جدار ناري تلقائيًا ضرورية لجعل سيرفر open.mp متاح للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

يجب عليك إنشاء قواعد جديدة لسيرفر open.mp. للقيام بذلك، اضغط على قواعد الواردة والصادرة كما هو موضح وأضف القواعد التالية للبروتوكولات والمنافذ:
- TCP وارد وصادر: 7777
- UDP وارد وصادر: 7777

استخدم دليلنا [تحويل المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية.

</TabItem>
</Tabs>

بعد إضافة هذه القواعد، سيكون سيرفرك متاحًا للاتصال عبر عنوان IP الخاص به.

ننصحك بضبط إعدادات السيرفر أولاً من خلال القسم التالي قبل الدخول للسيرفر.

## التكوين

الآن، انتهيت من إعداد سيرفر open.mp الخاص بك. يمكنك إجراء المزيد من التعديلات عبر ملف التكوين.

ارجع إلى المجلد الرئيسي، وابحث عن ملف التكوين **config.json** وافتحه. في هذا الملف، يمكنك تعديل مجموعة واسعة من إعدادات السيرفر مثل المنفذ، كلمة المرور، وأكثر.

كمثال، هذه بعض خيارات التكوين الافتراضية:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

اطلع على دليلنا [تكوين السيرفر](openmp-configuration.md) لرؤية كل الخيارات المتاحة ووظائفها.

## تشغيل والاتصال بسيرفرك

حان الوقت لتشغيل السيرفر. اذهب إلى المجلد الرئيسي وشغّل **omp-server.exe** لبدء عملية الإقلاع. ستفتح نافذة الكونسول في موجه الأوامر وتبدأ عملية التشغيل.

يمكنك الآن الاتصال مباشرة بسيرفرك داخل اللعبة عبر لانشر open.mp. إذا أردت عرض معلومات السيرفر في قائمة السيرفرات، تأكد من ضبط خيار `enable_query` على true (عادة يكون الافتراضي). احفظ الملف وأعد تشغيل السيرفر.

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين سيرفر open.mp بنجاح على سيرفرك المخصص! إذا كان لديك أي أسئلة أو مشاكل، تواصل مع فريق الدعم الخاص بنا، متوفرين لمساعدتك يوميًا!

<InlineVoucher />