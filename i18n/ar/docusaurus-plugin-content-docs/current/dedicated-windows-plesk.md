---
id: dedicated-windows-plesk
title: "سيرفر مخصص: تثبيت Plesk"
description: "اكتشف كيف تدير المواقع والسيرفرات بكفاءة مع Plesk للمبتدئين والمحترفين → تعلّم المزيد الآن"
sidebar_label: تثبيت Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Plesk هو منصة شاملة لتأجير الخوادم واستضافة المواقع تتيح للمستخدمين إدارة المواقع، السيرفرات، حسابات البريد الإلكتروني والمزيد عبر واجهة سهلة الاستخدام. هو حل متعدد الاستخدامات يناسب المبتدئين وكذلك مطوري الويب المحترفين ومديري الأنظمة.

<InlineVoucher />

## إنشاء اتصال بالسيرفر

لتثبيت Plesk على السيرفر، تحتاج أولاً للاتصال به. كيفية القيام بذلك موضحة بالتفصيل في تعليماتنا المنفصلة: [الوصول الأولي (RDP)](vserver-windows-userdp.md)

## مثبت Plesk

بعدها تحتاج إلى مثبت Plesk، وهو ضروري لتثبيت Plesk. يمكنك تحميله بالنقر على [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

يتم الآن تخزين هذا المثبت في مجلد، في مثالنا نستخدم مجلد "Plesk" تم إنشاؤه على سطح المكتب. مسار هذا الملف سيكون مهمًا للخطوات التالية.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### فتح موجه الأوامر

يجب الآن فتح وحدة تحكم CMD للتثبيت.
يمكنك فعل ذلك عبر الضغط على [Windows] + [R] أو بالبحث عن "command" في قائمة ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### تثبيت Plesk

في وحدة تحكم CMD، يجب التنقل إلى المجلد الذي تم رفع مثبت Plesk فيه. في مثالنا كان مجلد "Plesk" على "سطح المكتب".

يمكن الوصول إلى هذا المجلد عبر CMD باستخدام أمر "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

بعد الوصول الصحيح إلى هذا المجلد، الخطوة الأخيرة هي تنفيذ أمر المثبت. هذا سيشغل plesk-installer.exe وسيتم تثبيت أحدث نسخة من Plesk تلقائيًا.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

الأمر: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
عملية التثبيت قد تستغرق من 30 إلى 60 دقيقة، بعدها سيكون Plesk مثبت وجاهز للاستخدام.
:::

## الخاتمة

مبروك، لقد قمت بتثبيت Plesk بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />