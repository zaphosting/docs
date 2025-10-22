---
id: fivem-useprofiler
title: "FiveM: استخدام الـ Profiler لتحديد مشاكل السيرفر"
description: "اكتشف كيف تحلل أداء السيرفر وتحدد مشاكل الموارد باستخدام FiveM Profiler لتجربة لعب أكثر سلاسة → تعلّم المزيد الآن"
sidebar_label: استخدام الـ Profiler
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## مقدمة

الـ Profiler هو أداة لعبة مفيدة وسهلة الاستخدام لقياس أداء السيرفر. يمكن استخدامها لفحص الأكواد والعمليات التي قد تسبب مشاكل في الأداء. على سبيل المثال، قد يكون السبب موارد مطورة بشكل سيء أو ما شابه. الـ Profiler مدمج مباشرة في برنامج السيرفر.

<InlineVoucher />

## كيفية استخدام الـ Profiler
طريقة استخدام FiveM Profiler بسيطة جدًا. فقط نفّذ الأوامر `profiler record 100` و `profiler view` في الكونسول المباشر. سيتم إنشاء ملف تعريف يحتوي على 100 إطار، ويمكنك الوصول إليه عبر الرابط الموجود في الكونسول. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## تحديد المشاكل
الـ Profiler يحتوي على معلومات عن الأنشطة الفردية (ticks) التي تحتاج لفحص أدق. اختر منطقة tick وقم بالتكبير عليها. بناءً على الـ tick، يمكنك الآن رؤية العمليات التي تم تنفيذها ومدة كل منها.

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

بهذه الطريقة، يمكنك مثلاً التعرف على الموارد التي تستهلك وقتًا كبيرًا. الموارد التي تستهلك أكثر من 6 مللي ثانية إجمالًا قد تسبب مشاكل محتملة.
:::



## الخلاصة

مبروك، لقد أنشأت ملف تعريف FiveM بنجاح يسمح لك بتحديد المشاكل المحتملة. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />