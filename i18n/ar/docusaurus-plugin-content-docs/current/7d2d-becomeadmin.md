---
id: 7d2d-becomeadmin
title: "7 Days to Die: كيف تصبح أدمن في 7 Days to Die"
description: "اكتشف كيفية تعيين وإدارة صلاحيات الأدمن للتحكم الكامل في سيرفرك وأدوار أدمن مخصصة → تعلّم المزيد الآن"
sidebar_label: كيف تصبح أدمن
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة
تعيين صلاحيات الأدمن يتيح لك إدارة سهلة وشاملة مع تحكم كامل في سيرفرك. كأدمن، لديك خيار استخدام جميع الخيارات والوظائف المتاحة التي يوفرها اللعبة مباشرة داخل اللعبة. جميع الخطوات التي تحتاج لاتخاذها لتعيين صلاحيات الأدمن لسيرفرك سيتم شرحها أدناه.  
<InlineVoucher />

## الإعداد
إضافة أدمن تتم عبر ملف **serveradmin.xml** الموجود في واجهة الويب تحت قسم Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

يمكنك العثور على SteamID64 الخاص بك من خلال الذهاب إلى ملفك الشخصي في Steam والنقر بزر الفأرة الأيمن في أي مكان داخل الملف. ثم اضغط على **Copy Steam URL**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

بعدها افتح إحدى الصفحات التالية والصق رابط ملفك الشخصي هناك:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

هذا سيعطيك معلومات عامة بالإضافة إلى Steam ID الخاص بحسابك. في هذه الحالة نحتاج فقط إلى SteamID64. يتم تحديد SteamID64 تحت ``<admins>...</admins>``. الشكل سيكون كالتالي:

```
 <users>
    <user steamID="76561198021925107" name="تلميح عن من هو هذا المستخدم" permission_level="0" />
  </users>
```

:::danger  سجل الأدمن غير معترف به؟ 
تأكد من إزالة علامات التعليق `<!--` و `-->` لجعل السطر صالحًا. وإلا سيبقى السطر مجرد تعليق ولن يتم تطبيقه. فقط قم بحذف هذه العلامات من بداية ونهاية السطر لتفعيله.
:::

اللعبة تتيح إمكانية تحديد مستويات صلاحيات مختلفة لصلاحيات الأدمن. هذا يعني أنه يمكن تعريف مجموعات أدمن مختلفة بصلاحيات مختلفة. المستوى يتم تحديده عبر خيار ``permission_level``. يمكن تعيينه من 0 إلى 1000. بناءً على هذا الإعداد، يحصل الأدمنز على الصلاحيات المعينة لهم. بمجرد الانتهاء من ذلك، تكون صلاحيات الأدمن قد تم تعيينها بنجاح.

## الصلاحيات

يمكن تعريف صلاحيات جميع أوامر الأدمن تحت ``permissions``. لهذا، يجب تعديل ``permission_level`` تمامًا كما عند إضافة الأدمنز. الشكل سيكون كالتالي:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

مستوى الصلاحية هو قيمة بين 0 و 1000 ويحدد ما هي الصلاحيات التي يمتلكها اللاعب. 1000 هو الأدنى (بدون صلاحيات) و0 هو الأعلى (صلاحيات أدمن كاملة). بناءً على كيف تريد أن تكون الصلاحيات، يجب تعديل هذا الإعداد وفقًا لذلك.

## الخلاصة

مبروك، لقد قمت بتكوين صلاحيات الأدمن بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />