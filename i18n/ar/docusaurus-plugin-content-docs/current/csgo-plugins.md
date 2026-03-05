---
id: csgo-plugins
title: "CS:GO: تثبيت الإضافات"
description: "اكتشف عالم إضافات CS:GO ومشاريع المجتمع المتطورة لتحسين تجربتك في Counter-Strike → تعلّم المزيد الآن"
sidebar_label: تثبيت الإضافات
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## مقدمة

تواصل CS:GO تقليد التخصيص المدفوع من قبل المجتمع لسيرفر الألعاب. تتيح الإضافات لأصحاب السيرفر توسيع طريقة اللعب، إضافة ميزات لتحسين تجربة المستخدم، تنفيذ قواعد مخصصة، أو بناء أوضاع لعب جديدة بالكامل.

مع الانتقال إلى Source 2، تغير نظام الإضافات بشكل كبير. بالنسبة لـ CS:GO، أصبح **CounterStrikeSharp** الإطار الأساسي والأكثر نشاطًا لصيانة تطوير الإضافات على جانب السيرفر.

<InlineVoucher />



## تثبيت Metamod:Source

يجب تثبيت Metamod أولًا، لأن CounterStrikeSharp يعتمد عليه. بعد تحميل [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev)، فك ضغط الأرشيف. داخل الأرشيف، ستجد مجلد `addons`. يجب رفع هذا المجلد مباشرة إلى مجلد لعبة CS:GO عبر [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

بعد نسخ الملفات، ابحث عن ملف `gameinfo.gi` داخل `/game/csgo/`. افتح الملف باستخدام محرر نصوص. داخل الملف، ابحث عن السطر الذي يحتوي على `Game_LowViolence csgo_lv`. أسفل هذا السطر مباشرةً، أضف السطر التالي:

```
Game csgo/addons/metamod
```

<Button label="تحميل Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## تثبيت CounterStrikeSharp

بعد التأكد من تشغيل Metamod، يمكن تثبيت CounterStrikeSharp. يتم توزيع CounterStrikeSharp عبر مستودع GitHub الرسمي ويُقدم كحزمة إصدار مسبقة التجميع. قم بتحميل إصدار CounterStrikeSharp الذي يتضمن وقت التشغيل. فك ضغط الأرشيف وانسخ مجلد `addons` الموجود بداخله إلى نفس مجلد لعبة CS:GO عبر [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

لا تقم بدمج أو إعادة تسمية المجلدات يدويًا. يجب الحفاظ على الهيكلية كما هي في الأرشيف. بعد رفع الملفات، أعد تشغيل السيرفر. أثناء بدء التشغيل، سيقوم Metamod بتحميل CounterStrikeSharp تلقائيًا. للتحقق من التثبيت، افتح وحدة تحكم السيرفر ونفذ الأمر:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="تحميل CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## تثبيت الإضافات

تُقدم إضافات CounterStrikeSharp كملفات `.dll` مُجمعة. توضع هذه الملفات داخل مجلد `plugins` ضمن مسار تثبيت CounterStrikeSharp.

بعد نسخ الإضافة إلى هذا المجلد وإعادة تشغيل السيرفر، يقوم CounterStrikeSharp بتحميل جميع الإضافات المتاحة تلقائيًا. إذا فشلت إضافة في التحميل، يجب مراجعة سجلات السيرفر للبحث عن رسائل خطأ متعلقة بـ CounterStrikeSharp أو الإضافة نفسها.




## الإضافات الشهيرة

<SearchableItemList items={items} />



## الخاتمة

إذا اتبعت جميع الخطوات، فمن المفترض أنك قد نجحت في تثبيت Metamod/CounterStrikeSharp والإضافات التي تريدها. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂




<InlineVoucher />