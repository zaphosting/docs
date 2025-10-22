---
id: vserver-windows-plesk
title: "VPS: تثبيت Plesk"
description: "اكتشف كيف تدير المواقع والسيرفرات بكفاءة مع منصة Plesk المتعددة الاستخدامات للمبتدئين والمحترفين → تعلّم المزيد الآن"
sidebar_label: تثبيت Plesk
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Plesk هو منصة شاملة لتأجير الخوادم واستضافة المواقع تتيح للمستخدمين إدارة المواقع، السيرفرات، حسابات البريد الإلكتروني والمزيد عبر واجهة سهلة الاستخدام. هو حل متعدد الاستخدامات مناسب للمبتدئين وكذلك لمطوري الويب المحترفين ومديري الأنظمة.  
<InlineVoucher />


## إنشاء اتصال بالسيرفر

لتثبيت Plesk على السيرفر، تحتاج أولاً للاتصال به. كيف يتم ذلك موضح بالتفصيل في دليلنا المنفصل: [الوصول الأولي (RDP)](vserver-windows-userdp.md)

## مثبت Plesk

بعدها تحتاج إلى مثبت Plesk، وهو ضروري لتثبيت Plesk. يمكنك تحميله بالنقر على [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

يتم الآن تخزين هذا المثبت في مجلد، في مثالنا نستخدم مجلد "Plesk" تم إنشاؤه على سطح المكتب. مسار هذا الملف سيكون مهم للخطوات التالية.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### فتح موجه الأوامر

يجب الآن فتح وحدة تحكم CMD للتثبيت.  
يمكنك فعل ذلك عبر الضغط على مجموعة المفاتيح [Windows] + [R] أو البحث عن "command" في قائمة ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### تثبيت Plesk

في وحدة تحكم CMD، يجب التنقل إلى المجلد الذي تم رفع مثبت Plesk فيه. في مثالنا كان مجلد "Plesk" على "سطح المكتب".

يمكن الوصول إلى هذا المجلد عبر CMD باستخدام أمر "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

بعد الوصول الصحيح إلى هذا المجلد، الخطوة الأخيرة هي تنفيذ أمر التثبيت. هذا سيشغل plesk-installer.exe وسيتم تثبيت أحدث إصدار من Plesk تلقائيًا.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

الأمر: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
عملية التثبيت قد تستغرق من 30 إلى 60 دقيقة، بعدها سيكون Plesk مثبت وجاهز للاستخدام.
:::


## الخلاصة

مبروك، لقد قمت بتثبيت وتكوين Plesk بنجاح على VPS الخاص بك! إذا كان لديك أي أسئلة أو مشاكل إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />