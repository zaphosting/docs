---
id: dst-create-cave
title: "Don't Starve Together: إنشاء الكهوف على السيرفرات"
description: "اكتشف كيفية إعداد سيرفر رئيسي وسيرفر تابع للكهوف في Don't Starve Together لتحسين تجربة اللعب → تعلّم المزيد الآن"
sidebar_label: إنشاء الكهوف
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## التحضير للكهوف

لاستخدام الكهوف في Don't Starve Together، تحتاج إلى سيرفرين يتم طلبهما من خلالنا. أحد السيرفرات سيكون "الرئيسي" ويُستخدم للعالم العلوي، والسيرفر الثاني سيكون "تابع" ويُستخدم فقط للكهوف. أي سيرفر تختاره ليكون "الرئيسي" وأي واحد يصبح "تابع" يتم تحديده من خلال إعدادات server.ini و cluster.ini.

يمكنك رؤية كلا الإعدادين في الواجهة تحت "**Configs**" ويمكن تعديلهما هناك.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

يتم تعديل فقط جزء "**[SHARD]**" في كلا ملفي .ini

## السيرفر الرئيسي (Master)

السيرفر الرئيسي هو سيرفر العالم العلوي، ويجب تعيينه كـ master في الإعدادات.

### server.ini

:::info
**مهم** "**MASTERIP**" تعني عنوان IP الخاص بالسيرفر الرئيسي، إذا كان هذا العنوان 123.123.123.123 فيجب إدخال "bind_ip = 123.123.123.123" هناك.

"**MASTERIP**" ليست قيمة ثابتة يمكن إدخالها مباشرة في server.ini عند "bind_ip = ".
:::

افتراضيًا، يحتوي "**[SHARD]**" في server.ini فقط على "is_master = true"، الآن يتم إضافة الأوامر التالية هناك:
```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

افتراضيًا، يحتوي "**[SHARD]**" في cluster.ini فقط على "is_master = true"، ويتم إضافة الأوامر التالية هناك:

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## السيرفر التابع (Slave)

السيرفر التابع هو سيرفر الكهوف، حيث يجب إدخال بيانات السيرفر الرئيسي في الإعدادات.

### server.ini

:::info
**مهم** "**SLAVEIP**" تعني عنوان IP الخاص بالسيرفر التابع، إذا كان هذا العنوان 123.123.123.123 فيجب إدخال "bind_ip = 123.123.123.123" هناك.

"**SLAVEIP**" ليست قيمة ثابتة يمكن إدخالها مباشرة في server.ini عند "bind_ip = ".

"**MASTERIP**" ليست قيمة ثابتة يمكن إدخالها مباشرة في server.ini عند "master_ip = ".
:::

افتراضيًا، يحتوي "**[SHARD]**" في server.ini فقط على "is_master = true"، الآن يتم إضافة الأوامر التالية هناك:

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

افتراضيًا، يحتوي "**[SHARD]**" في cluster.ini فقط على "is_master = true"، ويتم إضافة الأوامر التالية هناك:

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### إنشاء عالم جديد

إذا تم إعداد جميع الإعدادات بشكل صحيح، يجب إنشاء عالم جديد للسيرفر التابع. ملف جديد مطلوب لكي تُنشأ الكهوف بشكل صحيح.

استخدم [دليل الوصول عبر FTP](gameserver-ftpaccess.md) للتنقل إلى السيرفر التابع في المسار: */starve/Save/Cluster_1/Master/*
قم بإنشاء ملف جديد باسم "*worldgenoverride.lua*" في هذا المسار.
املأ هذا الملف بالمحتوى التالي:

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

بعد ذلك، اضغط مع الاستمرار على زر "**TAB**" في السيرفر للحصول على حالة السيرفر. هنا يمكنك الضغط على الثلاث نقاط في الأعلى على اليسار وإعادة توليد العالم مرة واحدة باستخدام المعاملات المعدلة عبر "**Regenerate World**".

بمجرد إعادة التحميل، يكون كل شيء جاهز ويمكنك اللعب مع الكهوف على سيرفرك.

<InlineVoucher />