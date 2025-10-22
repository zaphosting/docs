---
id: voiceserver-ts3backup
title: "سيرفر صوتي: إنشاء، تحميل واستيراد النسخ الاحتياطية"
description: "اكتشف كيف تنشئ وتدير النسخ الاحتياطية بسهولة مع مساحة تخزين مجانية وخيارات ترقية لحماية بياناتك بأمان → تعلّم المزيد الآن"
sidebar_label: النسخ الاحتياطية
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

نقدم لك إمكانية إنشاء نسخ احتياطية فردية بنقرة واحدة. هذا يتيح لك إنشاء النسخ الاحتياطية بسهولة ودون جهد كبير، بالإضافة إلى استيرادها في أي وقت لاحق. جميع النسخ الاحتياطية تُخزن على سيرفر التخزين الخاص بك، والذي يتضمن 10 جيجابايت من مساحة التخزين المجانية بشكل افتراضي. إذا كنت بحاجة إلى المزيد، يمكنك الترقية إلى التخزين المميز.

<InlineVoucher />

## إنشاء النسخ الاحتياطية

<Tabs>

<TabItem value="Webinterface" label="منتج سيرفر TeamSpeak" default>

لإنشاء نسخة احتياطية على موقعنا، يجب عليك فتح خدمة السيرفر الصوتي الخاصة بك في واجهة الويب والانتقال إلى **اللقطات (Snapshots)** في الإدارة. بمجرد الوصول هناك، اضغط على زر **إنشاء لقطة** الأخضر لإنشاء نسخة احتياطية.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning النسخ الاحتياطية الخارجية
استيراد النسخ الاحتياطية الخارجية (اللقطات) غير ممكن لأسباب أمنية. لا توجد استثناءات.
:::

</TabItem>
<TabItem value="self_hosted" label="استضافة ذاتية (VPS/سيرفر مخصص)">

كما هو الحال مع منتج سيرفر TeamSpeak، إذا كنت تستخدم واجهة GS/TS3، يمكنك إنشاء نسخة احتياطية (لقطة) بنقرة عبر إدارة خدمة سيرفر TeamSpeak. ومع ذلك، يمكنك أيضًا إنشاء نسخة احتياطية يدويًا باستخدام بيانات تسجيل الدخول الخاصة بواجهة TeamSpeak (Query) وتطبيق YatQA الخارجي.

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

لإنشاء لقطة في YatQA، عليك الذهاب إلى **متفرقات (Miscellaneous)** في أعلى التطبيق ثم الضغط على **إنشاء وحفظ لقطة**.

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## تحميل النسخ الاحتياطية

يمكن تحميل النسخ الاحتياطية (اللقطات) التي تم إنشاؤها من سيرفر التخزين الخاص بك عبر FTP. يمكنك العثور على بيانات تسجيل الدخول في واجهة الويب ضمن خدمة سيرفر التخزين الخاصة بك. إذا لم تكن تعرف كيفية استخدام FTP، ننصحك باستخدام [دليل وصول FTP](gameserver-ftpaccess.md) العام الخاص بنا.

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## الخلاصة

لقد أنشأت نسخة احتياطية بنجاح إذا اتبعت جميع الخطوات المذكورة. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />