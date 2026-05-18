---
id: beammp-authkey
title: "BeamMP: إنشاء مفتاح مصادقة"
description: "اكتشف كيف تنشئ وتطبق مفتاح مصادقة ليظهر سيرفرك في القائمة العامة وتتحكم بالوصول بفعالية → تعلّم المزيد الآن"
sidebar_label: إنشاء مفتاح مصادقة
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ليش أحتاج مفتاح؟

مفتاح المصادقة مطلوب إذا حبيت يظهر سيرفرك في قائمة السيرفرات، وإلا بيكون متاح بس عن طريق الاتصال المباشر.

<InlineVoucher />

## التحضير
عشان تنشئ مفتاح المصادقة الخاص فيك، أول شيء نسجل دخول في `https://beammp.com/keymaster`، وده يحتاج حساب Discord.
بعد ما نسجل دخول، نضغط على "Keys" على اليسار، وده بياخدنا لصفحة نظرة عامة على مفاتيح الترخيص:

![](https://screensaver01.zap-hosting.com/index.php/s/Zp72q2WR85pxJgq/preview)

هنا نضغط على "here" الزر الأزرق عشان ننشئ المفتاح:

![](https://screensaver01.zap-hosting.com/index.php/s/ARqCQyEbF6BYnH4/preview)


## تحديد البيانات

دلوقتي نقدر نعبي البيانات كالتالي:

- **اسم السيرفر:** اسم لسيرفرك، مش لازم يكون نفس الاسم الموجود في الإعدادات.
- **IP السيرفر:** عنوان IP لسيرفرك، بدون المنفذ.


### تحديد IP

لازم تحدد الـ IP بدون المنفذ، تقدر تلاقيه فوق في واجهة التحكم:

![](https://screensaver01.zap-hosting.com/index.php/s/8MJeXxm87EdLykg/preview)

## إنشاء المفتاح

دلوقتي نضغط على "Create"، وهيتم توليد المفتاح.

![](https://screensaver01.zap-hosting.com/index.php/s/Ebyk5tPCHnppcWC/preview)

## تعيين المفتاح

نفتح إعدادات سيرفر الألعاب وننزل تحت، هنا نقدر نحط المفتاح تحت "Auth Key"، والنتيجة النهائية لازم تكون كده.

![](https://screensaver01.zap-hosting.com/index.php/s/5p7LdSDCJzrxKDy/preview)

بعد كده نحفظ الإعدادات ونعيد تشغيل السيرفر.

تم! المفتاح اتطبق ودلوقتي السيرفر هيظهر في القائمة قريبًا.

<InlineVoucher />