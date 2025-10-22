---
id: gameserver-database-external-access
title: 'سيرفر ألعاب: الوصول الخارجي لقاعدة البيانات'
description: "اكتشف كيفية إدارة قواعد بيانات MySQL الخاصة بـ ZAP-Hosting لسيرفرات الألعاب باستخدام أدوات مثل Navicat أو HeidiSQL → تعلّم المزيد الآن"
sidebar_label: الوصول الخارجي لقاعدة البيانات
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

تقدم ZAP-Hosting قواعد بيانات MySQL مدمجة مع منتجات سيرفر الألعاب. يمكن إدارتها داخليًا عبر phpMyAdmin أو خارجيًا باستخدام أدوات إدارة MySQL مثل Navicat أو HeidiSQL.

تحتاج إلى بيانات اعتماد المستخدم للوصول إلى قاعدة البيانات لهذا الغرض. يمكن العثور عليها في إدارة سيرفر الألعاب تحت قسم قواعد البيانات. ستحتاج إلى المعلومات التالية: **الخادم/عنوان IP**، **قاعدة البيانات**، **المستخدم**، **كلمة المرور**، والمنفذ الافتراضي **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## التحضير

أولًا، نحتاج إلى برنامج، في هذا المثال نعرض [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) أو [HeidiSQL](https://www.heidisql.com/download.php). بعد تحميل الملف، يجب تشغيله واتباع خطوات التثبيت. عند الانتهاء، يمكن تشغيل البرنامج وتكوين الاتصال بقاعدة البيانات.

## HeidiSQL

لإنشاء الاتصال في HeidiSQL، ننشئ اتصالًا جديدًا بالضغط على "New".

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

في خانة اسم المضيف / IP، ندخل اسم قاعدة البيانات، في مثالنا "mysql-mariadb-5-101.zap-hosting.com".
اسم المستخدم وكلمة المرور تؤخذ أيضًا من البيانات، والمنفذ يبقى على 3306.

بعد ذلك نضغط على "Open" لفتح الاتصال.

## Navicat

لإنشاء الاتصال في Navicat، ننشئ اتصالًا جديدًا. تحت **Connection** نختار **MySQL**. بعدها تظهر نافذة منبثقة حيث يجب إدخال معلومات قاعدة البيانات.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

اسم الاتصال (**Connection Name**) يستخدم فقط للتمييز بين قواعد البيانات ويمكنك اختياره كما تريد. باقي المعلومات تؤخذ من الواجهة كما هو موضح أعلاه. بعد ذلك نضغط على **OK** وينتهي الإعداد. يمكن بعد ذلك فتح الاتصال من اليسار في قائمة قواعد البيانات. للقيام بذلك، انقر مرتين على قاعدة البيانات أو انقر بزر الفأرة الأيمن واختر "Open connection":

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

بعدها تفتح قاعدة البيانات مع جميع الجداول الموجودة. يمكنك الآن تعديل أو إدارة قاعدة البيانات بنفس سهولة phpMyAdmin سواء بالنقر أو باستخدام أوامر SQL.

![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## الخلاصة

لقد نجحت في إنشاء اتصال بقاعدة بياناتك ويمكنك الآن إدارتها بكل سهولة. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂 

<InlineVoucher />