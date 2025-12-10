---
id: domain-cloudflare-setup
title: "النطاق: إعداد النطاق مع Cloudflare"
description: "اكتشف كيف تعزز أمان وأداء موقعك باستخدام Cloudflare مع نطاقات ZAP-Hosting → تعلّم المزيد الآن"
sidebar_label: إعداد Cloudflare
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Cloudflare هو مزود CDN (شبكة توصيل المحتوى) شهير جداً يعزز مواقعك الإلكترونية بحماية أمنية محسّنة، وتخفيف هجمات DDoS، ويوفر إدارة سهلة عبر لوحة المعلومات الخاصة بهم. هذا الدليل سيقدم لك معلومات حول كيفية إعداد نطاقك في ZAP-Hosting لاستخدامه مع Cloudflare من خلال خيار ExpertDNS وتعديل خوادم الأسماء.

<InlineVoucher />

## التحضير
لتتمكن من اتباع هذا الدليل، ستحتاج إلى:
- نطاق على حسابك في ZAP-Hosting
- حساب Cloudflare
  
## الخطوة 1: تفعيل خيار ExpertDNS

ابدأ بالتوجه إلى لوحة التحكم الخاصة بالنطاق الذي اخترته على حسابك في ZAP-Hosting. ابحث عن خيار **ExpertDNS** وقم بتفعيله عبر وضع علامة الصح ثم اضغط على زر الحفظ.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## الخطوة 2: إعداد نطاقك على Cloudflare

الخطوات التالية ستتطلب استخدام Cloudflare، لذا قم بتسجيل الدخول إلى حسابك في Cloudflare. بعد تسجيل الدخول، أضف موقعك إلى لوحة المعلومات باتباع خطوات الإعداد التي يوفرها Cloudflare مباشرة.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

عند وصولك للخطوة 4 من العملية، سيتم تزويدك بخوادم أسماء يجب عليك إعدادها.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

ارجع إلى لوحة التحكم الخاصة بنطاقك وادخل إلى قسم **ExpertDNS**. في هذا القسم، قم بحذف خوادم أسماء ZAP-Hosting الافتراضية واستبدلها بتلك التي زودك بها Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

تأكد من حفظ التغييرات بعد الانتهاء.

## الخطوة 3: إكمال الإعداد على Cloudflare

ارجع إلى لوحة المعلومات في Cloudflare. في صفحة الإعداد السابقة لنطاقك، يجب أن ترى زرًا لإجبار Cloudflare على التحقق من خوادم الأسماء مرة أخرى.

:::info
قد يستغرق التعرف على تغييرات خوادم الأسماء حتى 24 ساعة، لكن عادةً ما يحدث ذلك في وقت أقصر بكثير.
:::

بمجرد أن يتعرف Cloudflare على تغييرات خوادم الأسماء، ستتلقى رسالة بريد إلكتروني تخبرك بأن الإعداد جاهز. يمكنك أيضاً التحقق من لوحة المعلومات في Cloudflare. الإعداد الناجح سيعرض حالة **نشط** تحت النطاق الذي قمت بإعداده.

لقد قمت بدمج نطاقك مع Cloudflare بنجاح، مما يفتح أمامك أداءً محسنًا، أمانًا أعلى، وسهولة إدارة لموقعك.

<InlineVoucher />