---
id: vserver-windows-openmp
title: "VPS: إعداد سيرفر مخصص Open.mp على ويندوز"
description: "تعلم كيفية إعداد وتكوين سيرفر مخصص open.mp على VPS ويندوز الخاص بك لتجربة لعب جماعية سلسة → تعرّف على المزيد الآن"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS بنظام ويندوز وتريد تثبيت خدمة سيرفر مخصص open.mp عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<InlineVoucher />

## التحضير

أولاً، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت بحاجة لمساعدة في ذلك.

بمجرد دخولك إلى السيرفر، قم بتحميل أحدث إصدار من [مستودع open.mp على GitHub](https://github.com/openmultiplayer/open.mp/releases). تأكد من اختيار نسخة **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## التثبيت

بعد تحميل الإصدار، فك ضغط الملفات باستخدام أداة مثل 7zip أو WinRAR. ستجد مجلد **Server** يحتوي على جميع ملفات السيرفر الضرورية.

لتشغيل السيرفر، فقط شغّل **omp-server.exe** وسيبدأ السيرفر بالاقلاع. لكن ننصحك أولاً بإعداد تحويل المنافذ وتكوين السيرفر.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### تحويل المنافذ لسيرفرك

لتضمن وصول السيرفر للعامة، يجب تعديل قواعد تحويل المنافذ للمنافذ التي يستخدمها سيرفر الألعاب. يمكنك فعل ذلك إما عبر أوامر PowerShell مباشرة (وهي أسهل)، أو من خلال صفحة جدار الحماية لويندوز ديفندر.

:::tip
تشغيل السيرفر لأول مرة يجب أن يعرض نافذة تأكيد UAC. إذا قبلت، سيتم إعداد قواعد الجدار الناري تلقائياً، ويمكنك المتابعة للقسم التالي. إذا لم يحدث ذلك، اتبع إحدى الطرق أدناه.
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

هذه الأوامر ستنشئ قواعد جدار ناري تلقائياً ضرورية لجعل سيرفر open.mp متاح للعامة.

</TabItem>

<TabItem value="windefender" label="عن طريق Windows Defender">

استخدم البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للضغط على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

يجب عليك إنشاء قواعد جديدة لسيرفر open.mp. للقيام بذلك، اضغط على قواعد الواردة والصادرة كما هو موضح وأضف القواعد التالية للبروتوكولات والمنافذ:
- TCP وارد وصادر: 7777
- UDP وارد وصادر: 7777

استخدم دليلنا [تحويل المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت بحاجة لمزيد من المساعدة.

</TabItem>
</Tabs>

بعد إضافة هذه القواعد، سيكون سيرفرك متاحًا للاتصال عبر عنوان IP الخاص به.

ننصحك بتكوين إعدادات السيرفر أولاً في القسم التالي قبل الوصول إليه.

## التكوين

الآن بعد أن أنهيت إعداد سيرفر open.mp، يمكنك إجراء المزيد من التعديلات عبر ملف التكوين.

ارجع إلى المجلد الرئيسي وابحث عن ملف **config.json** وافتحه. في هذا الملف، يمكنك تعديل مجموعة واسعة من إعدادات السيرفر مثل المنفذ، كلمة المرور، والمزيد.

كمثال، هذه بعض الخيارات التي تم تعيينها:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

اطلع على دليلنا [تكوين السيرفر](openmp-configuration.md) لرؤية كل الخيارات المتاحة ووظائفها.

## تشغيل والاتصال بسيرفرك

حان الوقت لتشغيل السيرفر. اذهب إلى المجلد الرئيسي وشغّل **omp-server.exe** لبدء عملية الإقلاع. ستفتح نافذة الكونسول في موجه الأوامر وتبدأ عملية التشغيل.

يمكنك الآن الاتصال بسيرفرك مباشرة داخل اللعبة عبر لانشر open.mp. إذا أردت عرض معلومات السيرفر في قائمة السيرفرات، تحقق من دليلنا [تكوين السيرفر](openmp-configuration.md) وتأكد من تعيين `enable_query` إلى true (عادة يكون هذا الإعداد افتراضي). احفظ الملف وأعد تشغيل السيرفر.

## الخاتمة

مبروك! لقد قمت بتثبيت وتكوين سيرفر open.mp بنجاح على VPS الخاص بك! إذا كان لديك أي أسئلة أو مشاكل، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />