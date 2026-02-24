---
id: vserver-windows-plesk
title: "تثبيت Plesk على سيرفر ويندوز - إدارة المواقع بسهولة مع لوحة تحكم قوية"
description: "اكتشف كيف تدير المواقع والسيرفرات بكفاءة مع منصة Plesk المتعددة الاستخدامات للمبتدئين والمحترفين → تعلّم المزيد الآن"
sidebar_label: تثبيت Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Plesk هو منصة شاملة لتأجير الخوادم واستضافة المواقع تتيح للمستخدمين إدارة المواقع، السيرفرات، حسابات البريد الإلكتروني والمزيد من خلال واجهة سهلة الاستخدام. هو حل متعدد الاستخدامات يناسب المبتدئين وكذلك مطوري الويب المحترفين ومديري الأنظمة.  
<InlineVoucher />


## إنشاء اتصال بالسيرفر

لتثبيت Plesk على السيرفر، تحتاج أولاً للاتصال به. كيفية القيام بذلك موضحة بالتفصيل في دليلنا المنفصل: [الوصول الأولي (RDP)](vserver-windows-userdp.md)

## مثبت Plesk

بعدها تحتاج إلى مثبت Plesk، وهو ضروري لتثبيت Plesk. يمكنك تحميله بالنقر على [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

يتم الآن حفظ هذا المثبت في مجلد، في مثالنا نستخدم مجلد "Plesk" تم إنشاؤه على سطح المكتب. مسار هذا الملف سيكون مهمًا للخطوات التالية.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### فتح موجه الأوامر

يجب الآن فتح وحدة التحكم CMD للتثبيت.  
يمكنك فعل ذلك عبر الضغط على مجموعة المفاتيح [Windows] + [R] أو البحث عن "command" في قائمة ويندوز.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### تثبيت Plesk

في وحدة التحكم CMD، يجب التنقل إلى المجلد الذي تم رفع مثبت Plesk فيه. في مثالنا كان مجلد "Plesk" على "سطح المكتب".

يمكن الوصول لهذا المجلد عبر CMD باستخدام الأمر "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

بعد الوصول للمجلد الصحيح، الخطوة الأخيرة هي تنفيذ أمر التثبيت. هذا سيشغّل plesk-installer.exe وسيتم تثبيت أحدث نسخة من Plesk تلقائيًا.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

الأمر: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
عملية التثبيت قد تستغرق من 30 إلى 60 دقيقة، بعدها سيكون Plesk مثبت وجاهز للاستخدام.
:::


## الخلاصة

مبروك، لقد قمت بتثبيت وتكوين Plesk بنجاح على VPS/سيرفر مخصص الخاص بك! إذا كان لديك أي أسئلة أو مشاكل إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر لمساعدتك يوميًا! 

<InlineVoucher />