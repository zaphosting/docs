---
id: vserver-windows-ragemp
title: "VPS: إعداد سيرفر RageMP مخصص على ويندوز"
description: "تعلم كيفية تثبيت وإعداد سيرفر RageMP المخصص على VPS ويندوز الخاص بك لتجربة لعب جماعية سلسة → تعلّم المزيد الآن"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل لديك VPS يعمل بنظام ويندوز وتريد تثبيت خدمة سيرفر RageMP المخصص عليه؟ أنت في المكان الصحيح. في هذا الدليل، سنشرح خطوة بخطوة كيفية تثبيت هذه الخدمة على سيرفرك.

<InlineVoucher />

## التحضير

أولاً، اتصل بـ VPS الخاص بك عبر سطح المكتب البعيد (RDP). استخدم دليلنا [الوصول الأولي (RDP)](vserver-windows-userdp.md) إذا كنت تحتاج مساعدة في ذلك.

بمجرد دخولك للسيرفر، ابدأ بتثبيت [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe) لأنه متطلب أساسي لـ RageMP. تأكد من تثبيته قبل المتابعة. إذا لم تكن متأكدًا من وجوده، شغّل المثبت وسيخبرك أثناء التثبيت.

بعد تثبيت هذا المتطلب، قم بتحميل أحدث إصدار للسيرفر من [موقع RageMP الرسمي](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
إذا كان لديك RageMP مثبتًا بالفعل، يمكنك الانتقال مباشرة إلى قسم **التبديل إلى فرع السيرفر**. لا تحتاج لإعادة تثبيت RageMP.
:::

## التثبيت

بعد تحميل الإصدار، شغّل ملف **RAGEMultiplayer_Setup.exe** واتبع خطوات التثبيت. يمكنك تعديل مسار التثبيت أثناء العملية، وهذا ما ننصح به.

الآن بعد تثبيت RageMP، شغّل تطبيق **RAGE Multiplayer** الذي سيكون متاحًا ضمن تطبيقات ويندوز.

عند التشغيل لأول مرة، سيُطلب منك تحديد مسار تثبيت لعبة GTA:V. يعتمد مسار التثبيت على اللانشر الذي استخدمته لتحميل اللعبة، وعادةً يكون ضمن `C:/Program Files` أو `C:/Program Files (x86)`.

الآن عليك تعديل الفرع لتحميل ملفات السيرفر.

### التبديل إلى فرع السيرفر

انتقل إلى مجلد تثبيت RageMP. ابحث عن ملف **config.xml** داخل هذا المجلد. عدّل قيمة `channel` من `prerelease` إلى `prerelease_server` واحفظ الملف.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

شغّل ملف **updater.exe** الذي سيحمّل ملفات السيرفر اللازمة بناءً على تغيير الفرع. ستلاحظ ظهور مجلد جديد باسم **server-files** داخل مجلد RageMP، وهو ما ستحتاجه.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

يمكنك الآن إعادة قيمة `channel` إلى `prerelease` وتشغيل **update.exe** مرة أخرى للعودة إلى نسخة العميل لتتمكن من اللعب.

:::tip
يمكنك نقل ملفات السيرفر وإعادة تسمية المجلد لأي مكان تريده، مثلاً على سطح المكتب. ليس من الضروري تشغيله داخل مجلد `RAGEMP`.
:::

لتشغيل السيرفر، فقط شغّل **ragemp-server.exe** الموجود في مجلد `server-files` أو مجلد السيرفر الخاص بك، وسيبدأ السيرفر بالاقلاع. لكن ننصحك أولًا بإعداد تحويل المنافذ وتكوين السيرفر.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### تحويل المنافذ لسيرفرك

لكي يكون سيرفرك متاحًا للعامة، يجب تعديل قواعد تحويل المنافذ للمنافذ التي يستخدمها سيرفر RageMP. يمكنك فعل ذلك إما عبر أوامر PowerShell مباشرة، وهو الأسهل، أو عبر صفحة جدار الحماية في Windows Defender.

:::tip
تشغيل السيرفر لأول مرة يجب أن يعرض نافذة تحكم حساب المستخدم (UAC). إذا قبلت، سيتم إعداد قواعد الجدار الناري تلقائيًا، ويمكنك متابعة القسم التالي. وإلا، اتبع إحدى الطرق أدناه.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="عبر PowerShell" default>

افتح مربع البحث في ويندوز وابحث عن **PowerShell**. تأكد من النقر بزر الفأرة الأيمن واختيار **تشغيل كمسؤول** حتى تحصل على الصلاحيات اللازمة ويعمل كل شيء بشكل صحيح.

:::info
تأكد من تشغيل PowerShell بوضع المسؤول، وإلا قد لا تُطبق الإعدادات بشكل صحيح.
:::

انسخ والصق الأوامر التالية في نافذة PowerShell:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

هذه الأوامر ستنشئ قواعد جدار ناري تلقائيًا ضرورية لجعل سيرفر RageMP متاحًا للعامة.

</TabItem>

<TabItem value="windefender" label="عبر Windows Defender">

استخدم البحث في ويندوز لفتح **إعدادات جدار الحماية مع الأمان المتقدم**. قد تحتاج للنقر على **الإعدادات المتقدمة** لفتح النافذة المطلوبة إذا فتحت صفحة جدار الحماية الأساسية.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

يجب عليك إنشاء قواعد جديدة لسيرفر RageMP. للقيام بذلك، اضغط على قواعد الوارد والصادر كما هو موضح وأضف القواعد للبروتوكولات والمنافذ التالية:

- TCP وارد وصادر: 22005
- UDP وارد وصادر: 22005

استخدم دليلنا [تحويل المنافذ (جدار الحماية)](vserver-windows-port.md) إذا كنت تحتاج مساعدة إضافية.

</TabItem>
</Tabs>

بعد إضافة هذه القواعد، سيكون سيرفرك متاحًا، مما يعني أنه يمكنك الاتصال به عبر عنوان IP الخاص بالسيرفر.

ننصحك بتكوين إعدادات السيرفر أولًا من خلال القسم التالي قبل الوصول للسيرفر.

## التكوين

حتى الآن، انتهيت من إعداد سيرفر RageMP الخاص بك. يمكنك إجراء المزيد من التعديلات عبر ملف التكوين.

ارجع إلى المجلد الرئيسي. ابحث وافتح ملف التكوين **conf.json**. في هذا الملف، يمكنك تعديل بعض معلمات السيرفر مثل المنفذ، اسم السيرفر، والمزيد.

كمثال، هذه بعض خيارات التكوين المعينة:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## تشغيل والاتصال بسيرفرك

حان الوقت لتشغيل السيرفر. اذهب إلى مجلد `server-files` أو مجلد السيرفر الخاص بك وشغّل **ragemp-server.exe** لبدء عملية الإقلاع. ستفتح وحدة تحكم السيرفر في نافذة الأوامر وتبدأ عملية التشغيل.

الآن يمكنك الاتصال مباشرة بسيرفرك داخل اللعبة عبر لانشر RageMP.

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين سيرفر RageMP بنجاح على VPS الخاص بك! إذا كان لديك أي أسئلة أو مشاكل أخرى، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />