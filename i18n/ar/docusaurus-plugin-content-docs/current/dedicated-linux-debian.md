---
id: dedicated-linux-debian
title: "سيرفر مخصص: تثبيت Debian"
description: "تعلم كيفية تثبيت وتكوين نظام Debian على سيرفرك المخصص لأداء وموثوقية مثالية → تعلّم المزيد الآن"
sidebar_label: تثبيت Debian
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

فيما يلي شرح خطوة بخطوة لكيفية تثبيت وتكوين نظام التشغيل Debian على سيرفرك المخصص. اتبع هذه التعليمات بعناية لضمان إعداد نظام التشغيل بنجاح واستخدامه بأفضل شكل ممكن.

:::info

هيكل هذا الدليل مبني على استخدام نظام التشغيل Debian 10. قد تختلف عمليات التثبيت من الإصدارات السابقة أو الأحدث قليلاً من حيث الخطوات.

:::

<InlineVoucher />

## التحضير

لتثبيت وتكوين نظام التشغيل، من المهم في البداية تركيب ملف ISO الخاص بنظام التشغيل. هناك عدة طرق ممكنة لتركيبه:

1. التركيب عبر الإعداد الأولي
2. التركيب عبر iLO (الوسائط الافتراضية)
3. التركيب عبر iLO (الكونسول عن بُعد)

إذا لم تكن معتادًا على تركيب ملف ISO بعد، فمن الأفضل الرجوع إلى [الإعداد الأولي](dedicated-setup.md) أو [ملف ISO الخاص](dedicated-iso.md) في دليلنا.



## التثبيت

عند تحميل ملف ISO بنجاح، يكون السيرفر في مرحلة الإعداد.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

في هذا المثال، سنمر بعملية التثبيت باستخدام خيار "التثبيت الكلاسيكي".

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

اختر اللغة التي تريد أن يظهر بها معالج التثبيت. تذكر أن هذه اللغة ستؤثر لاحقًا على النظام المثبت.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

موقعنا المطلوب غير موجود في صفحة الاختيار الأولى، لذا ننتقل إلى الصفحة التالية عبر "أخرى".

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

في مثالنا نختار خيار "أوروبا".

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

حسب المنطقة الزمنية المطلوبة، نختار المنطقة الزمنية الألمانية في هذا المثال.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

نختار الولايات المتحدة كلغة محلية.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

في حالتنا نختار تخطيط لوحة المفاتيح الألمانية وهو تخطيط QWERTZ. إذا كنت من أمريكا، سيكون التخطيط الافتراضي QWERTY.

:::info
سيرفرك الآن يقوم بتحضير بعض المكونات اللازمة للتثبيت، قد يستغرق ذلك بضع دقائق.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

يقوم سيرفرك تلقائيًا بتكوين واجهة الشبكة باستخدام DHCP. اختر `eno1` وهو محول الشبكة الافتراضي لسيرفر ZAP المخصص الخاص بك. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

يمكن تعديل اسم المضيف إذا أردت، لكنه ليس ضروريًا تغييره.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

لا يلزم تغيير اسم النطاق أيضًا.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

هنا عليك تعيين كلمة مرور لحساب "root" الخاص بك. احتفظ بكلمة المرور المختارة.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

لتأكيد كلمة المرور، يجب إدخالها مرة أخرى.

:::info
معالج التثبيت يطلب منك إنشاء حساب مستخدم ثاني
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

الآن أدخل اسم مالك لحساب مستخدم عادي. يمكنك بالطبع اختيار ما تريد إدخاله هنا بحرية.

:::info
يمكنك بالطبع استخدام حساب "root" في النهاية
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

الآن أدخل اسم المستخدم للحساب. اختر أيضًا كلمة مرور من اختيارك وأكدها مرة أخرى. سيرفرك الآن يحضر الخطوات التالية للتثبيت.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

لديك الآن إمكانية إنشاء أقسام أو استخدام كامل SSD كقسم واحد. إذا لم ترغب في تغيير شيء في التقسيم، اختر "موجه - استخدام القرص بالكامل".

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

اختر SSD المثبت في سيرفرك. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

بشكل عام، من الجيد أن يكون الهيكل الكامل مخزنًا على قسم واحد. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

نؤكد التكوين بـ "إنهاء التقسيم وكتابة التغييرات على القرص".

:::info
إذا كانت هناك أقسام قديمة على SSD الخاص بك، نؤكد الكتابة فوقها بـ "نعم".
:::

سيرفرك الآن يقوم بالتقسيم ويجهز تثبيت النظام.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

إذا أردت تضمين وسائط تثبيت أخرى، مثلاً لحزم معينة، يمكن القيام بذلك الآن. عادةً، يمكنك تحميل كل الحزم لاحقًا بسهولة عبر مدير الحزم (apt).

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

سيرفراتنا المخصصة موجودة في ألمانيا، لذا يُنصح باختيار موقع المرآة الألمانية لتحقيق أفضل سرعات تحميل ممكنة.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

بشكل عام نوصي باستخدام مستودع Debian الافتراضي.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

إذا أردت استخدام بروكسي HTTP، يمكنك إدخال البيانات. (هذا غير مطلوب)

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

النظام يريد جمع إحصائيات مجهولة المصدر، يمكنك رفضها أو تأكيدها.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

الآن اختر الحزم التي تريد تثبيتها:

* بيئة سطح مكتب Debian  
تُنشئ واجهة مستخدم رسومية على سيرفرك، لكن في هذا المثال نستخدم فقط مستوى الصدفة (shell).

* سيرفر SSH  
مطلوب، مثلاً للاتصال عبر PuTTY.

* أدوات النظام القياسية  
مطلوبة لتوفير عدد من الحزم الأساسية.

يتم اختيار الحزم المختلفة باستخدام `TAB` ومفاتيح الأسهم. يتم تحديد أو إلغاء تحديد الحزم بمفتاح المسافة.  
عندما تكون راضيًا عن اختيارك، اضغط `TAB` حتى تصل إلى متابعة واضغط Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

أكد أن هذا نظام التشغيل الوحيد على السيرفر الحالي بـ `نعم`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

كموقع تخزين نختار الموقع الافتراضي على SSD الخاص بنا.

:::info
🎉 تم الآن الانتهاء من تثبيت نظام Debian الخاص بك.
:::

افتح "الوسائط الافتراضية" في iLO واضغط على "إخراج الوسائط" لإزالة ملف ISO من النظام.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

عند الانتهاء بنجاح، نختار متابعة، وسيقوم السيرفر بإعادة التشغيل.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## التكوين

### تسجيل الدخول عبر SSH

بعد إعادة تشغيل السيرفر وإتمام التثبيت بنجاح، سيُطلب منك تسجيل الدخول.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

بالطبع تريد إدارة سيرفرك عبر SSH، مثلاً باستخدام PuTTY، لذلك نحتاج لتمكين تسجيل الدخول لهذا الغرض:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

افتح ملف تكوين خدمة SSH باستخدام nano `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

ابحث عن `#PermitRootLogin no` وغيّره إلى `PermitRootLogin yes`.

الآن اضغط `CTRL + X` وأكد التغييرات بـ `Y`.

بعد ذلك، أعد تشغيل خدمة SSH بكتابة `service ssh restart`.

تم تفعيل تسجيل الدخول عبر SSH ويمكنك الاتصال عبر PuTTY، مثلاً.  
أدخل عنوان IP الخاص بسيرفرك، الذي تراه في لوحة المعلومات الخاصة بك في ZAP، واستخدم بيانات الاعتماد التي حددتها سابقًا.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
إذا كان لديك أي أسئلة أو مشاكل أخرى، فريق الدعم لدينا سعيد بمساعدتك!
:::





## الخاتمة

مبروك، لقد قمت بتثبيت نظام Debian بنجاح على سيرفرك المخصص. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />