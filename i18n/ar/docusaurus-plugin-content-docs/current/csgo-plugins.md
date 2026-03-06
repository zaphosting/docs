---
id: csgo-plugins
title: "CS:GO: تثبيت الإضافات"
description: "تعرف على كيفية تثبيت إضافات Sourcemod على سيرفر ألعاب CS:GO الخاص بك ووسع تجربة اللعب بميزات مخصصة → تعلّم المزيد الآن"
sidebar_label: تثبيت الإضافات
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## مقدمة

تواصل CS:GO تقليد طويل في تخصيص السيرفرات بقيادة المجتمع. تتيح الإضافات لمالكي السيرفرات توسيع تجربة اللعب، إضافة ميزات لتحسين جودة الحياة، تنفيذ قواعد مخصصة، أو بناء أوضاع لعب جديدة بالكامل.

بالنسبة لسيرفرات CS:GO، **Sourcemod** هو الإطار الأكثر استخدامًا لإضافات جانب السيرفر. يعمل Sourcemod مع **Metamod:Source**، الذي يعمل كطبقة أساسية تسمح للإضافات بالتكامل مع محرك اللعبة. من خلال تثبيت كلا المكونين، يمكن لمسؤولي السيرفر إدارة الإضافات بسهولة وتوسيع وظائف السيرفر.

<InlineVoucher />



## تثبيت Metamod:Source

يجب تثبيت Metamod:Source أولًا، لأن Sourcemod يعتمد عليه. ابدأ بتحميل أحدث إصدار من Metamod:Source من الموقع الرسمي. فك ضغط الأرشيف الذي تم تحميله على جهازك.

داخل الأرشيف ستجد مجلد `addons`. قم برفع هذا المجلد إلى سيرفر ألعاب CS:GO الخاص بك باستخدام [FTP](gameserver-ftpaccess.md) ليتم دمجه مع مجلد اللعبة الموجود `../csgo/`.


بعد رفع الملفات، أعد تشغيل السيرفر. للتحقق من أن Metamod يعمل بشكل صحيح، افتح وحدة تحكم السيرفر ونفذ الأمر التالي:

```
meta version
```


إذا تم تثبيت Metamod بشكل صحيح، ستعرض وحدة التحكم الإصدار المثبت ومعلومات إضافية.

<Button label="تحميل Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## تثبيت Sourcemod

بعد تثبيت Metamod:Source، يمكنك تثبيت Sourcemod. قم بتحميل أحدث إصدار مستقر من Sourcemod من الموقع الرسمي وفك ضغط الأرشيف. ارفع مجلدات `addons` و `cfg` المرفقة إلى سيرفر ألعاب CS:GO الخاص بك باستخدام [FTP](gameserver-ftpaccess.md). يجب وضع هذه المجلدات داخل مجلد اللعبة `../csgo/`. بعد رفع الملفات، أعد تشغيل السيرفر. سيتم تحميل Sourcemod تلقائيًا عبر Metamod.

لتأكيد أن Sourcemod يعمل، افتح وحدة تحكم السيرفر ونفذ:

```
sm version
```


إذا تم التثبيت بنجاح، سيعرض السيرفر إصدار Sourcemod الحالي ومعلومات البناء.

<Button label="تحميل Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## تثبيت الإضافات

عادةً ما يتم توزيع إضافات Sourcemod كملفات `.smx`. يجب رفع هذه الملفات المجمعة إلى مجلد `plugins` داخل تثبيت Sourcemod.

```
../csgo/addons/sourcemod/plugins/
```


بعد رفع ملف الإضافة، أعد تشغيل السيرفر أو أعد تحميل الإضافة مباشرة عبر وحدة تحكم السيرفر باستخدام الأمر التالي:

```
sm plugins load <pluginname>
```


إذا لم يتم تحميل الإضافة بشكل صحيح، تحقق من سجلات السيرفر الموجودة في مجلد `logs` الخاص بـ Sourcemod للبحث عن رسائل خطأ محتملة.

بعض الإضافات قد تتضمن أيضًا ملفات إعدادات إضافية. عادةً ما توضع هذه الملفات داخل:

```
../csgo/addons/sourcemod/configs/
```


دائمًا اتبع تعليمات التثبيت المقدمة من مطور الإضافة لضمان عملها بشكل صحيح.



## الإضافات الشهيرة

<SearchableItemList items={items} />



## الخلاصة

إذا اتبعت جميع الخطوات، يجب أن تكون قد نجحت في تثبيت Metamod:Source و Sourcemod والإضافات التي تريدها على سيرفر ألعاب CS:GO الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />