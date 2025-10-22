---
id: rust-plugins
title: "Rust: تثبيت الإضافات"
description: "اكتشف كيف تعزز سيرفر ألعاب Rust الخاص بك بإضافات شهيرة للتخصيص وتحسين تجربة اللعب → تعلّم المزيد الآن"
sidebar_label: تثبيت الإضافات
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## مقدمة

تسمح لك الإضافات بتوسيع وتخصيص سيرفرك أكثر. في ما يلي، سنشرح أين تجد الإضافات الأكثر استخدامًا وكيف تقوم بإعدادها.

<InlineVoucher />


## التحضير

أولاً، تحتاج إلى تحميل الإضافات التي تريد تثبيتها على السيرفر. يمكنك العثور على مجموعة كبيرة من الإضافات على [umod.org (المعروفة سابقًا باسم OXIDE)](https://umod.org/plugins). أثناء التحميل ستحصل على ملف `.cs`.  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## التثبيت

بمجرد تحميل الإضافات المطلوبة، يمكنك البدء بالتثبيت. يتم ذلك عبر **FTP**، لذا ستحتاج إلى برنامج FTP لرفع الملفات إلى سيرفرك. إذا لم تكن معتادًا على FTP وكيفية عمله، يرجى مراجعة دليل [وصول FTP](gameserver-ftpaccess.md).

ستجد مجلد الإضافات الصحيح تحت المسار: `/gXXXXXX/rust-oxide/oxide/plugins`. فقط قم برفع ملفات الإضافات `.cs` التي قمت بتحميلها إلى هذا المجلد. يجب أن يبدو الأمر مشابهًا لهذا بعد الرفع:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

لا حاجة لفعل أي شيء آخر. هذا يكمل التثبيت بالفعل. بعد ذلك يمكنك التحقق في الكونسول المباشر إذا تم تجميع وتحميل الإضافة بنجاح. يجب أن تظهر النتيجة بهذا الشكل:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## الإضافات الشهيرة

لا تزال تبحث عن الإضافات المثالية لسيرفرك؟

تصفح قائمتنا المختارة بعناية لأكثر الإضافات شعبية وتوصية لتعزيز تجربة اللعب وإضافة اللمسة النهائية التي يستحقها سيرفرك. استلهم وابحث عن الإضافات التي تناسب مشروعك بالضبط.

<SearchableItemList items={items} />


## الخاتمة

إذا اتبعت جميع الخطوات، يجب أن تكون قد ثبت الإضافة بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />