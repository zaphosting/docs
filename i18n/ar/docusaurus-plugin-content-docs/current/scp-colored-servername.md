---
id: scp-colored-servername
title: "SCP Secret Laboratory: اسم السيرفر الملون"
description: "تعلم كيف تخصص اسم سيرفرك بنص ملون لتحسين الرؤية والأسلوب → تعلّم المزيد الآن"
sidebar_label: اسم السيرفر الملون
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
لعرض سيرفرك في قائمة السيرفرات العامة، يجب تعيين معرف Pastebin. يمكنك العثور على دليلنا [معرف Pastebin](scp-pastebin.md).

يجب إيقاف تشغيل السيرفر لتطبيق التغييرات.
:::

<InlineVoucher />

افتح إعدادات سيرفرك وتحقق إذا كان 'SCP Servername' فارغًا.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

عندما تتأكد أنه لا يوجد شيء مدخل، انتقل إلى تبويب 'Configs'، وهو القائمة أسفل الإعدادات مباشرة.

افتح الآن ملف config_gameplay.txt بالضغط على الزر الأزرق.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

محرر الإعدادات الخاص بنا مفتوح الآن، يمكنك تعديل اسم السيرفر باستخدام "server_name" وباستخدام [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) يمكنك استخدام عدة ألوان مختلفة.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

في هذا المثال، أود أن يظهر "النص الأخضر"، "النص الأزرق" و"النص الأحمر" بالألوان المطابقة.

للقيام بذلك، يجب استخدام الوسم `<color="COLOR">نصك</color>`، يمكنك رؤية جميع الألوان المتاحة [هنا](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) كما يمكن تغيير خصائص أخرى مثل الحجم.
:::info
من المهم أن تتذكر أن علامات الاقتباس " " مطلوبة حول اللون داخل الوسم، كما في المثال أعلاه.
:::

عند الانتهاء من التخصيص، احفظ التغييرات.

:::info
شغّل سيرفرك، وسيظهر اسم السيرفر ملونًا الآن.
:::

<InlineVoucher />