---
id: cs16-plugins
title: "CS 1.6: تثبيت الإضافات على سيرفرك الخاص"
description: "اكتشف كيف تعزز سيرفر ألعاب Counter-Strike 1.6 الخاص بك باستخدام AMXmodX و Metamod لتخصيص وإدارة متقدمة → تعلّم المزيد الآن"
sidebar_label: تثبيت الإضافات
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## مقدمة

**AMXmodX** و **Metamod** ضروريان لاستخدام الإضافات على سيرفر ألعاب Counter-Strike 1.6. هذان امتدادان للعبة Half Life يسمحان لك بتخصيص السيرفر أكثر من المعتاد. يشمل ذلك مثلاً استخدام الإضافات وإدارة موسعة لسيرفرك.

<InlineVoucher />

## تثبيت AMXmodX / Metamod

### التحضير

أولاً وقبل كل شيء، تحتاج إلى تحميل الامتدادات الفعلية. يمكن تحميل الامتدادات من [amxmodx.org](https://amxmodx.org/downloads-new.php). يُرجى دائماً استخدام أحدث الإصدارات (**المستقرة**) لضمان عملها بشكل كامل ومتوافق.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

تحتاج إلى حزم Linux التالية: **AMX Mod X Base, Counter-Strike Addon و Metamod**. يمكن تحميلها من هناك. بعد التحميل، يجب أن يكون لديك ثلاث ملفات مضغوطة. فك ضغطها على جهازك. يجب أن تحصل على مجلد **addons** يحتوي على مجلدين **amxmodx** و **metamod**:

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)

### التثبيت

بعد إتمام الخطوات السابقة، حان وقت التثبيت الفعلي. يجب رفع الملفات إلى سيرفرك عبر FTP. تحتاج إلى برنامج FTP لتتمكن من رفع الملفات إلى سيرفرك. إذا لم تكن تعرف ما هو FTP وكيف يعمل، يمكنك الاطلاع على الدليل التالي: [الوصول عبر FTP](gameserver-ftpaccess.md)

الآن، يجب رفع مجلد **addons** إلى الدليل الرئيسي للسيرفر. يجب أن تبدو بنية الملفات في المجلد هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)

تم الآن إعداد **AMXmodX** و **Metamod** بنجاح. يمكنك الاتصال بسيرفرك داخل اللعبة واستخدام الأمر ``amxx version`` في الكونسول للتحقق من نجاح تثبيت AMX. يجب أن تظهر النتيجة كالتالي:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

إذا ظهرت رسالة **Unknown command**، فهذا يعني أن هناك خطأ حدث أثناء التثبيت.

## تثبيت الإضافات

### التحضير

بعد الانتهاء من إعداد **AMXmodX** و **Metamod** وتشغيلهما بنجاح، يمكنك البدء بتثبيت الإضافات. أولاً، عليك تحميل الإضافات التي تريد تثبيتها على السيرفر. يمكنك العثور على مجموعة كبيرة من الإضافات على [amxmodx.org](https://www.amxmodx.org/compiler.php). تم نشر العديد من الإضافات هناك على مر السنين ولا تزال تضاف المزيد بانتظام. تحتاج إلى ملف **.amxx** الخاص بكل إضافة.

### التثبيت

بعد تحميل الإضافات المطلوبة، يمكنك بدء التثبيت الفعلي. يتم تثبيت الإضافات أيضاً عبر FTP. يجب رفع ملفات الإضافات إلى مجلد الإضافات تحت ``../addons/amx``.

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)

عند إعادة تشغيل السيرفر، يجب أن تُحمّل الإضافات التي رفعتها تلقائياً.

## الإضافات الشهيرة

لا تزال تبحث عن الإضافات المثالية لسيرفرك؟
تصفح قائمتنا المختارة بعناية لأكثر الإضافات شهرة وتوصية لتعزيز تجربتك وإضافة اللمسة النهائية التي يستحقها سيرفرك. استلهم وابحث عن الإضافات التي تناسب مشروعك بالضبط.

<SearchableItemList items={items} />

## الخلاصة

إذا اتبعت جميع الخطوات، يجب أن تكون قد نجحت في تثبيت AMXmodX / Metamod والإضافات التي تريدها. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يومياً لمساعدتك! 🙂

<InlineVoucher />