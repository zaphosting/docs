---
id: tf2-plugins
title: "Team Fortress 2: تثبيت الإضافات على سيرفرك الخاص"
description: "اكتشف كيف تخصص وتحسن سيرفر ألعابك باستخدام إضافات Sourcemod و Metamod لإدارة وميزات أفضل → تعلّم المزيد الآن"
sidebar_label: تثبيت الإضافات
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/tf2-plugins.json';


## مقدمة

تعرف على كيفية تثبيت Sourcemod و Metamod وكيفية استخدام الإضافات على سيرفرك. كلا الامتدادين يتيحان لك تخصيص ألعاب مثل CS:S، CS:GO، DoD:S، أو TF2 ويوسّعان بشكل كبير خيارات إدارة السيرفر المتاحة.

مع Sourcemod و Metamod، يمكنك إضافة إضافات، تفعيل ميزات خاصة، وتخصيص سيرفرك تمامًا حسب تفضيلاتك.

<InlineVoucher />



## تثبيت Sourcemod / Metamod

### التحضير

يمكنك تحميل الامتدادات المطلوبة من [Sourcemod](https://sourcemod.net/) و [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). استخدم دائمًا أحدث الإصدارات **الثابتة** لضمان الوظائف الكاملة والتوافق.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

تحتاج إلى حزم Linux الخاصة بـ **Sourcemod** و **Metamod**. قم بتحميلها من المصدر المحدد. بعد التنزيل، يجب أن يكون لديك ملفان مضغوطان. فك ضغطهما على جهازك لتحصل على مجلد addons يحتوي على مجلدات `sourcemod` و `metamod`.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### التثبيت

بعد إتمام الخطوات السابقة، يمكنك المتابعة بالتثبيت. ارفع الملفات إلى سيرفرك عبر FTP باستخدام برنامج FTP. إذا لم تكن تعرف كيفية استخدام FTP، راجع الدليل التالي: [الوصول عبر FTP](gameserver-ftpaccess.md)

بعدها، ارفع مجلد **addons** إلى الدليل الرئيسي لسيرفرك. يجب أن يكون هيكل المجلدات كالتالي:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

تم الآن إعداد **Sourcemod** و **Metamod**. يمكنك الاتصال بسيرفرك داخل اللعبة واستخدام الأمر ``sm version`` في الكونسول للتحقق من نجاح التثبيت. يجب أن تظهر النتيجة كالتالي:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

إذا ظهرت رسالة **Unknown command**، فهذا يعني أن هناك خطأ حدث أثناء التثبيت.



## تثبيت الإضافات

### التحضير

بعد تثبيت Sourcemod و Metamod وتشغيلهما بشكل صحيح، يمكنك البدء بإضافة الإضافات. حمّل الإضافات التي تريد تثبيتها على سيرفرك من [Sourcemod](https://sourcemod.net/) حيث ستجد مجموعة كبيرة ومتزايدة من الإضافات المنشورة على مر السنين. تأكد من الحصول على ملف .smx الخاص بكل إضافة.

### التثبيت

بعد تحميل الإضافات المطلوبة، يمكنك المتابعة بتثبيتها. يتم ذلك عبر FTP برفع ملفات الإضافات إلى الدليل:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## الإضافات الشهيرة
لا زلت تبحث عن الإضافات المثالية لسيرفرك؟ تصفح قائمتنا المختارة بعناية لأكثر الإضافات شعبية وتوصية لتعزيز تجربتك وإعطاء سيرفرك اللمسة النهائية التي يستحقها. استلهم وابحث عن الإضافات التي تناسب مشروعك بالضبط.
<SearchableItemList items={items} />


## الخاتمة

إذا اتبعت جميع الخطوات، يجب أن تكون قد نجحت في تثبيت Sourcemod/Metamod والإضافات التي تريدها. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />