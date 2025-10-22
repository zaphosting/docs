---
id: spaceengineers-addmods
title: "Space Engineers: تثبيت المودات"
description: "اكتشف كيف تضبط وتضيف المودات بأمان على سيرفر ألعاب Space Engineers لتجربة لعب مخصصة → تعلّم المزيد الآن"
sidebar_label: تثبيت المودات
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### التحضير

عشان تقدر تضيف مودات على السيرفر، لازم تعدل ملف الإعدادات. عشان ما تواجه مشاكل بتطبيق التغييرات، تأكد إن السيرفر متوقف قبل ما تبدأ!

عشان يتم معالجة الإعدادات الصحيحة لاحقًا، لازم تعرف اسم ملف الحفظ (savegame) مسبقًا. إذا ما عدلت الإعدادات الخاصة به، الاسم الافتراضي هو "zap001". لكن عشان تكون على الجانب الآمن، تحقق من هذا كما هو موضح الآن::

عشان توصل لإعدادات السيرفر، افتح عنصر "الإعدادات" في القائمة اليسارية تحت تبويب "الإعدادات"

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

تقدر تشوف أو تعدل اسم ملف الحفظ في أول خانة في هذي الصفحة. لازم تحفظ هذا الاسم عشان تعدل ملف الإعدادات الصحيح لاحقًا.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

تثبيت **Notepad++** شرط أساسي لهالدليل عشان تقدر تنفذ الخطوات بنفس الطريقة بالضبط!

## اختيار المودات

في مودات كثيرة تلاقيها في ورشة عمل Space Engineers. تقدر تدخل الورشة من [هنا](https://steamcommunity.com/workshop/about/?appid=244850).

بعد ما تلاقي مود يعجبك، اضغط عليه مرة عشان تشوف كل التفاصيل. إذا عجبك المود، لازم تحفظ رقم المود (Mod-ID). عادةً رقم المود يكون مكتوب بخط عريض على الجانب أو في أعلى شريط العنوان URL:

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## فتح ملفات الإعدادات

في طريقتين لتعديل ملفات السيرفر. الأولى عن طريق [الوصول عبر FTP](gameserver-ftpaccess.md) والثانية عن طريق محرر الإعدادات في واجهة الويب نفسها.

في هالحالة، بنعدل الإعدادات يدويًا عبر FTP عشان نتجنب أخطاء الصياغة في ملف الإعدادات. كيف تتصل عبر FTP موضح بالتفصيل في الدليل المرتبط فوق.

بعد ما تتصل عبر FTP، لازم تروح للمجلد التالي:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

هذا المجلد يحتوي على كل ملفات الحفظ اللي تم إنشاؤها على السيرفر. عشان تعدل إعدادات ملف الحفظ المطلوب، افتح المجلد المناسب. في مثالنا هذا المجلد هو "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

الملف sandbox لازم يتعدل داخل هذا المجلد. بالضبط هذا الملف هو اللي لازم تفتحه كما في الصورة!

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## إضافة المودات

في ملف الإعدادات فيه قسم خاص بالمودات، موجود في نهاية الملف. ظلل هذا الجزء بالفأرة وبعدين احذفه. بعدها أضف المحتوى التالي:

`<Mods></Mods>`

بعد ما تلصق المحتوى، حرك المؤشر بين "&gt;" و "&lt;" واضغط ENTER مرة. هذا بيضبط الصياغة بشكل صحيح تلقائيًا ونقدر نكمل.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

في الخطوة الجاية نضيف أول مود. بنستخدم عنصر "ModItem" اللي يمثل مود. انسخ المحتوى التالي والصقه في ملف الإعدادات كما في الـ GIF:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
لازم تستبدل 12345 برقم المود الخاص بالمود اللي اخترته!
:::

مثل ما واضح في الـ GIF، نفس الخطوات تتكرر لكل مود تبغى تضيفه. بعد ما تضيف كل المودات اللي تبيها، احفظ ملف الإعدادات بـ **CTRL+S** وقفل الملف. بعدها تقدر تشغل السيرفر عادي والمودات بتتنزل وتتثبت تلقائيًا.

<InlineVoucher />