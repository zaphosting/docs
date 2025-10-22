---
id: voiceserver-query
title: "سيرفر صوتي: الوصول إلى TeamSpeak Query"
description: "اكتشف كيف تدير سيرفر TeamSpeak الخاص بك خارجيًا باستخدام تسجيل دخول Query للتحكم والإدارة الفعالة للسيرفر → تعلّم المزيد الآن"
sidebar_label: تسجيل دخول Query
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

تسجيل دخول query في TeamSpeak يتيح لك الوصول إلى واجهة استعلام السيرفر، حيث يمكنك إدارة سيرفر TeamSpeak الخاص بك خارجيًا عبر الأوامر.

:::warning وصول مسؤول السيرفر عبر Query
منتجات سيرفر TeamSpeak لدينا لا تتضمن وصول مسؤول السيرفر عبر Query. 
:::

<InlineVoucher />

## تفاصيل تسجيل الدخول

<Tabs>
<TabItem value="Webinterface" label="منتج سيرفر TeamSpeak" default>

لأسباب أمنية، تسجيل دخول **مسؤول السيرفر عبر Query** غير متوفر مع **منتج سيرفر TeamSpeak**. لكن إذا كنت تملك صلاحيات المسؤول على سيرفر TeamSpeak الخاص بك، يمكنك إنشاء تسجيل دخول Query خاص بك باتباع الخطوات التالية.

:::info
ميزات مثل استيراد اللقطة، تغيير عدد الأماكن/المنافذ وما شابه غير متوفرة. هذه الإعدادات محددة مسبقًا من قبلنا ولا يمكن تعديلها يدويًا. 
:::

لإنشاء تسجيل دخول Query خاص بك، عليك الضغط على "Server Query Login" في عميل Teamspeak تحت قسم الأدوات.
بعدها يجب إدخال اسم لتسجيل الدخول، وهو أيضًا اسم تسجيل الدخول مثلًا "MyQueryLogin":

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

بعد تأكيد ذلك بالضغط على "موافق"، سيتم عرض كلمة مرور. يجب حفظها لأنها لا يمكن تغييرها لاحقًا.

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)

ببيانات تسجيل الدخول التي تم إنشاؤها الآن يمكن إنشاء اتصال مثلاً عبر [YaTQA](https://yat.qa). لهذا الغرض، تحتاج إلى عنوان IP للسيرفر، منفذ Query، منفذ السيرفر، واسم تسجيل دخول Query وكلمة المرور.

يمكنك مشاهدة عنوان IP للسيرفر، منفذ Query ومنفذ السيرفر في لوحة المعلومات ضمن واجهة الويب:

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="استضافة ذاتية (VPS/سيرفر مخصص)">

إذا تم تثبيت سيرفر Teamspeak على VPS أو سيرفر مخصص خاص بك عبر واجهة الويب، يمكن استخدام "مسؤول السيرفر عبر Query" العادي. يمكن العثور على بيانات تسجيل الدخول في واجهة الويب الخاصة بنسخة Teamspeak.

</TabItem>
</Tabs>

## الوصول إلى Query

املأ بيانات تسجيل الدخول المقدمة/التي أنشأتها لتسجيل دخول Query تحت خيار الاتصال السريع في تطبيق **YatQA** ثم اضغط على زر **الاتصال**.

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning خطأ منفذ Query مخصص
بشكل افتراضي، قد يظهر خطأ بعد التثبيت الأولي إذا قمت بتحديد منفذ غير المنفذ الافتراضي لـ Query. هذا أمر طبيعي ويمكن حله كما يلي:

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## الخلاصة

لقد نجحت في إنشاء اتصال بـ Query باستخدام YatQA. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />