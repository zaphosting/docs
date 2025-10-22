---
id: minecraft-add-own-world
title: "ماينكرافت: إضافة عالمك الخاص إلى السيرفر"
description: "تعلم كيف ترفع وتضبط عوالم ماينكرافت المخصصة على سيرفرك لتجربة لعب شخصية → تعلّم المزيد الآن"
sidebar_label: أضف عالمك الخاص
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

حابب تستخدم عالمك الخاص أو عالم نزلته من الإنترنت على سيرفرك؟ إذن أنت في المكان الصح! كل اللي تحتاجه هو عالمك وعميل FTP. إذا ما تعرف شو هو عميل FTP وكيف تستخدمه، شوف الدليل التالي: [الوصول عبر FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="كيف ترفع خرائط مخصصة على سيرفر ماينكرافت" description="تحس إنك تفهم أحسن لما تشوف الأشياء عم تصير؟ إحنا معك! غوص في الفيديو اللي بيشرح كل شي خطوة بخطوة. سواء كنت مستعجل أو بتحب تتعلم بطريقة ممتعة وتفاعلية!"/>

بعد ما تتصل بالسيرفر عبر FTP، فيك تبدأ تضبط عالمك الخاص. أول شي لازم تروح للمجلد المناسب اللي فيه العالم الحالي. هو موجود في المسار التالي: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

هلا لازم ترفع العالم الجديد للمجلد. فيك تحذف وتستبدل مجلد **world** القديم أو ترفع العالم الجديد باسم مختلف. في هالمثال رفعنا العالم باسم جديد:

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

هلا العالم اللي رفعناه لازم يتضبط في ملف **server.properties**. بتلاقيه في **إدارة سيرفر الألعاب** تحت قسم **Configs**. هناك لازم تعدل قيمة الأمر **level-name=**:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

بعد ما تعيد تشغيل السيرفر، لازم يشتغل العالم الجديد. استمتع بعالمك الجديد! 🙂

<InlineVoucher />

<InlineVoucher />