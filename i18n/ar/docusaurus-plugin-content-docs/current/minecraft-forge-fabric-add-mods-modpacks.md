---
id: minecraft-forge-fabric-add-mods-modpacks
title: "ماينكرافت: تثبيت المودات / مودباكات"
description: "اكتشف كيف تحمل وتثبت مودات وماودباكات ماينكرافت لتعزيز تجربة اللعب على سيرفرك → تعلّم المزيد الآن"
sidebar_label: تثبيت المودات / المودباكات
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## مقدمة

راح تتعلم كيف تحمل وتثبت مود أو مودباك على سيرفر ألعاب ماينكرافت الخاص فيك.

<InlineVoucher />

## التحضير

- سيرفر ألعاب ([تقدر تحصل عليه من هنا](https://zap-hosting.com/en/gameserver-hosting/))
- برنامج FTP (مثل WinSCP أو FileZilla)
- اتصل بسيرفرك عن طريق FTP: ([الوصول عبر FTP](gameserver-ftpaccess.md))



## البحث وتحميل المودات أو المودباكات

فيه أماكن كثيرة على الإنترنت تقدر تلاقي فيها مودات ومودباكات. أكبر منصة للمودات والمودباكات هي CurseForge. تقريبًا 99% من كل مودات ومودباكات ماينكرافت تقدر تلاقيها هناك وتحملها بنقرات بسيطة. هذا الدليل بيركز على استخدام CurseForge. تقدر تبحث عن المودات [هنا](https://www.curseforge.com/minecraft/mc-mods) وعن المودباكات [هنا](https://curseforge.com/minecraft/modpacks).

:::note
المودات تشتغل بس مع نسخة معينة من مودلودر. لازم تتأكد من صفحة المود أي نسخة تحتاج. لو بتثبت أكثر من مود، تأكد إنهم كلهم يستخدمون نفس النسخة. كمان، مودات Forge ما تشتغل مع مودات Fabric، والعكس صحيح.
:::

روح لصفحة المود أو المودباك اللي اخترته واضغط على تبويب "Files".

![](https://screensaver01.zap-hosting.com/index.php/s/abryep5KdQcqpAi/preview)


دور على النسخة اللي تبيها واضغط عليها عشان تروح لقسم "تفاصيل الملف".

:::tip
تقدر تصفي حسب النسخة ومودلودر باستخدام القائمة المنسدلة في أعلى تبويب "Files" المختار.

![](https://screensaver01.zap-hosting.com/index.php/s/HoJYzW7bkC4Z6oL/preview)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="للمودات" default>
في قسم "تفاصيل الملف"، اضغط على زر "Download". احفظ الملف في مكان تعرفه، راح تحتاجه لاحقًا.

![](https://screensaver01.zap-hosting.com/index.php/s/7ZcEHsmmqZWdZB5/preview)

</TabItem>

<TabItem value="Modpacks" label="للمودباكات">
في قسم "تفاصيل الملف"، انزل تحت حتى تشوف "ملفات إضافية" واضغط على الثلاث نقاط، اختار "Download file". احفظ الملف في مكان تعرفه، راح تحتاجه لاحقًا.

![](https://screensaver01.zap-hosting.com/index.php/s/YzH5Gz4w3yJZjx3/preview)

</TabItem>
</Tabs>

## الخطوة 2 - فك ضغط الملفات المحملة (فقط للمودباكات)

دور على الملف اللي حملته على جهازك واضغط عليه بالزر اليمين، اختار "Extract All...". اختار مجلد تحب تفك فيه الملفات. احفظ مكانه!

![](https://screensaver01.zap-hosting.com/index.php/s/y9SWDpX2HYgekbQ/preview)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

المجلد المفكوك لازم يحتوي على مجلدات mods و config و defaultconfig. ممكن يكون فيه مجلدات أكثر من اللي ظاهر هنا.

:::note
بعض المودباكات تحتاج خطوات إضافية، مثل AllOfFabric6. في حالة AllOfFabric6، لازم تشغل "startserver.bat" (ويندوز) أو "startserver.sh" (لينكس / ماك) عشان تحصل على المجلدات المذكورة. السكريبت راح يحمل المجلدات لك. لكن في أغلب الحالات المجلدات بتكون موجودة بدون خطوات إضافية. لو ما فيه سكريبت في المجلد المفكوك، ابحث بسرعة على الإنترنت عن طريقة الحصول على ملفات السيرفر لمودباكك.
:::


## الخطوة 3 - تثبيت نسخة السيرفر الصحيحة

في واجهة الويب الخاصة بـ Zap-Hosting، اختار سيرفر الألعاب الخاص فيك وروح لـ "الألعاب" في قسم الإعدادات.

![](https://screensaver01.zap-hosting.com/index.php/s/Ne5B9CnHrbwgmfW/preview)

وسع قسم "الألعاب المتاحة" وابحث عن مودلودر اللي تحتاجه (Forge لمودات / مودباكات Forge، Fabric لمودات / مودباكات Fabric). اضغط على زر التحميل الأخضر.

![](https://screensaver01.zap-hosting.com/index.php/s/dnBCddmXGAMpMj8/preview)


اضغط على القائمة المنسدلة تحت "نسخة اللعبة" واختر نسخة ماينكرافت اللي تناسب نسخة المود أو المودباك. بالنسبة لـ Forge، تقدر تختار أحدث نسخة أو النسخة الموصى بها. جرب أحدث نسخة أول، وإذا ما اشتغل السيرفر مثل ما تتوقع، ارجع وجرب النسخة الموصى بها. اضغط على زر "قبول وتثبيت".

![](https://screensaver01.zap-hosting.com/index.php/s/gCdcwLzc4Hxptqp/preview)


:::tip
لو ما تعرف أي نسخة ماينكرافت تحتاج، ارجع لصفحة "تفاصيل الملف" على CurseForge. جنب أيقونة يد التحكم تقدر تشوف النسخة.

![](https://screensaver01.zap-hosting.com/index.php/s/9TsCBRP9PGQL2fC/preview)

:::

بعد ما يخلص تثبيت اللعبة، راح تشوف زر أزرق جنب اسم لعبتك (مثلاً Forge، Fabric). اضغط على الزر هذا لتفعيل اللعبة.

![](https://screensaver01.zap-hosting.com/index.php/s/YzzBzSJjnsaqKS2/preview)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## الخطوة 4 - الاتصال ورفع المودات / المودباك عبر FTP

اتصل بسيرفرك باستخدام برنامج FTP اللي اخترته. تأكد إن السيرفر متوقف.

### رفع مود

بعد ما تتصل، ادخل لمجلد لعبتك (مثلاً minecraft-forge، minecraft-fabric). افتح مجلد mods وبس اسحب ملفات المود اللي حملتها وحطها داخل المجلد.
![](https://screensaver01.zap-hosting.com/index.php/s/Zwm9SYdgK6MKBdz/preview)

بعد ما يخلص الرفع، تقدر تشغل سيرفرك.

### رفع مودباك

بعد ما تتصل، ادخل لمجلد لعبتك (مثلاً minecraft-forge، minecraft-fabric). احذف مجلدات world و mods و config و defaultconfig من سيرفرك. الحين ارفع كل المجلدات من المجلد المفكوك اللي حملته قبل، ما عدا مجلدات jre و libraries. بس اختار كل المجلدات واسحبها لمجلد السيرفر.

![](https://screensaver01.zap-hosting.com/index.php/s/PEyqrSES4xPGaFz/preview)

بعد ما يخلص الرفع، تقدر تشغل سيرفرك.



## مودات مشهورة

لا زلت تدور على المودات المثالية لسيرفرك؟ تصفح قائمتنا المختارة بعناية لأكثر المودات شعبية وتوصية لتعزيز تجربة لعبك وإعطاء سيرفرك اللمسة النهائية اللي يستحقها. خذ فكرة ولقط الإضافات اللي تناسب مشروعك بالضبط.

<SearchableItemList items={mods} />

## مودباكات مشهورة

لا زلت تدور على المودات المثالية لسيرفرك؟ تصفح قائمتنا المختارة بعناية لأكثر المودات شعبية وتوصية لتعزيز تجربة لعبك وإعطاء سيرفرك اللمسة النهائية اللي يستحقها. خذ فكرة ولقط الإضافات اللي تناسب مشروعك بالضبط.

<SearchableItemList items={modpacks} />

<InlineVoucher />