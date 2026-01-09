---
id: dedicated-windows-openmp
title: "سيرفر مخصص: إعداد سيرفر Open.mp مخصص على ويندوز"
description: "اكتشف كيفية إعداد وتشغيل سيرفر Open.mp مخصص على ويندوز لتجربة ألعاب متعددة اللاعبين سلسة → تعلّم المزيد الآن"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## المقدمة

هل لديك سيرفر مخصص بنظام ويندوز وتريد تثبيت خدمة سيرفر Open.mp المخصصة عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

## التحضير

أولاً، اتصل بسيرفرك المخصص عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت بحاجة لمساعدة في ذلك.

بمجرد دخولك للسيرفر، قم بتحميل أحدث إصدار من [مستودع Open.mp على GitHub](https://github.com/openmultiplayer/open.mp/releases). تأكد من اختيار نسخة **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## التثبيت

بعد تحميل الإصدار، فك ضغط الملفات باستخدام أداة مثل 7zip أو WinRAR. ستظهر لك مجلد **Server** يحتوي على جميع ملفات السيرفر الضرورية.

لتشغيل السيرفر، فقط شغّل **omp-server.exe** وسيبدأ السيرفر بالاقلاع. لكن ننصحك أولاً بإعداد تحويل المنافذ وتكوين السيرفر.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### تحويل المنافذ لسيرفرك

لكي يكون سيرفرك متاحًا للعامة، يجب تعديل قواعد تحويل المنافذ للمنافذ التي يستخدمها سيرفر الألعاب. يمكنك فعل ذلك إما عبر أوامر PowerShell مباشرة، وهو الأسهل، أو عبر صفحة جدار الحماية في ويندوز ديفندر.

:::tip
تشغيل السيرفر لأول مرة يجب أن يعرض نافذة تحكم حساب المستخدم (UAC). إذا قبلت، سيتم إعداد قواعد الجدار الناري تلقائيًا، ويمكنك متابعة القسم التالي. إذا لم يحدث ذلك، اتبع إحدى الطرق أدناه.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عن طريق PowerShell" default>

افتح مربع البحث في ويندوز وابحث عن **PowerShell**. تأكد من النقر بزر الفأرة الأيمن واختيار **تشغيل كمسؤول** حتى تحصل على الصلاحيات اللازمة ويعمل كل شيء بشكل صحيح.

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

هذه الأوامر ستنشئ قواعد جدار ناري تلقائيًا ضرورية لجعل سيرفر Open.mp متاحًا للعامة.

</TabItem>

<TabItem value="windefender" label="عن طريق Windows Defender">

استخدم البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

يجب عليك إنشاء قواعد جديدة لسيرفر Open.mp. للقيام بذلك، اضغط على قواعد الواردة والصادرة كما هو موضح أدناه وأضفها للبروتوكولات والمنافذ التالية:
- TCP وارد وصادر: 7777
- UDP وارد وصادر: 7777

استخدم دليلنا [تحويل المنافذ (جدار الحماية)](vserver-windows-port.md) إذا احتجت مساعدة إضافية.

</TabItem>
</Tabs>

بعد إضافة هذه القواعد، سيكون سيرفرك متاحًا، مما يعني أنه يمكنك الاتصال به عبر عنوان IP الخاص بالسيرفر.

ننصحك بتكوين إعدادات السيرفر أولاً من خلال القسم التالي قبل الوصول للسيرفر.

## التكوين

حتى الآن، أنهيت إعداد سيرفر Open.mp الخاص بك. يمكنك إجراء المزيد من التعديلات على السيرفر عبر ملف التكوين.

ارجع إلى المجلد الرئيسي. ابحث وافتح ملف التكوين **config.json**. في هذا الملف، يمكنك تعديل مجموعة واسعة من إعدادات السيرفر مثل المنفذ، كلمة المرور، وأكثر.

كمثال، هذه بعض خيارات التكوين المعينة:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

اطلع على دليلنا [تكوين السيرفر](openmp-configuration.md) لرؤية كل الخيارات المتاحة ووظائفها.

## بدء الاتصال بسيرفرك

حان الوقت لتشغيل السيرفر. اذهب إلى المجلد الرئيسي وشغّل **omp-server.exe** لبدء عملية الإقلاع. ستفتح وحدة تحكم السيرفر في نافذة الأوامر وتبدأ عملية التشغيل.

الآن يمكنك الاتصال مباشرة بسيرفرك داخل اللعبة عبر لانشر Open.mp. إذا أردت عرض معلومات السيرفر في قائمة السيرفرات، تحقق من دليلنا [تكوين السيرفر](openmp-configuration.md) وتأكد من تعيين المعامل `enable_query` إلى true (يجب أن يكون هذا الإعداد افتراضيًا). احفظ الملف ثم شغّل ملف السيرفر التنفيذي مرة أخرى.

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين سيرفر Open.mp بنجاح على سيرفرك المخصص! إذا كان لديك أي أسئلة أو مشاكل، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!