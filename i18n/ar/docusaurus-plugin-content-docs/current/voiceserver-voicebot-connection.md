---
id: voiceserver-voicebot-connection
title: "سيرفر صوتي: ربط البوت الصوتي بسيرفرك الصوتي"
description: "اكتشف كيف تربط بوتك الصوتي بسيرفرات TeamSpeak وDiscord لتواصل وتحكم سلس → تعلّم المزيد الآن"
sidebar_label: الربط بسيرفر صوتي
services:
  - voiceserver
  - voicebot
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## مقدمة

هل تريد ربط بوتك الصوتي بسيرفر TeamSpeak الخاص بك، لكن مش متأكد إزاي تعمل ده؟ ولا يهمك، في السطور الجاية هنشرحلك بالتفصيل إزاي تعملها!



## ربط البوت بسيرفر TeamSpeak

عشان تربط البوت الصوتي بسيرفر TeamSpeak 3 بتاعك، لازم تدخل عليه من لوحة التحكم. بعدين، هتروح على **السيرفر** على الشمال زي ما موضح تحت:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

دلوقتي تقدر تختار سيرفر TeamSpeak تحت **السيرفر** لو كنت حجزته مع حسابك. ولو السيرفر مستضاف خارجي، تقدر تختار كمان **سيرفر TeamSpeak مخصص**.

بعد كده تدخل البيانات تحت، وبس تحفظ، والبوت الصوتي هيتصل بسيرفر TeamSpeak 3 بتاعك، هنا مثال:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## ربط البوت بسيرفر Discord

عشان تربط البوت الصوتي بسيرفر Discord، لازم تروح على **السيرفر**، وبعدين تختار **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

لازم تدخل **رمز بوت Discord** و**معرّف عميل بوت Discord**. بعدها، البوت الصوتي هيتصل بسيرفر Discord بتاعك.


## الحصول على رمز بوت Discord ومعرّف العميل

بما إن سيرفر Discord مش ليه عنوان IP مباشر أو منفذ، في شوية خطوات لازم تعملها قبل ما تقدر تستخدم البوت على سيرفر Discord.


### إنشاء تطبيق Discord

أول حاجة لازم تعملها هي إنشاء تطبيق Discord. البوت بتاعك هيتربط بيه وهيشتغل باسمه. عشان تعمل التطبيق ده، ادخل على [بوابة مطوري Discord](https://discord.com/developers/applications/).

دلوقتي، هتعمل تطبيق جديد بالضغط على **تطبيق جديد** وتقدر تسميه زي ما تحب زي ما موضح تحت:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

بعدها، اضغط على **إنشاء**. في الخطوات الجاية، لازم تكتب رقم معرّف التطبيق:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### إعداد البوت والحصول على الرمز

لما تعمل التطبيق، بوت بيتعمل تلقائيًا كمان. تقدر تجيب الرمز بسهولة بالضغط على **إعادة تعيين الرمز**. بعدها، هتاخد رمز مستخدم لازم تكتبه أو تحتفظ بيه في مكان آمن:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
ما تفصحش عن رمز البوت لأي حد عشان يشتغل البوت بدون مشاكل وما يسببش أي ثغرة أمنية. الرمز ده زي مفتاح سري وممنوع تشاركه.
:::

في نفس الصفحة، انزل شوية وفعل **نية التواجد**، **نية أعضاء السيرفر** و**نية محتوى الرسائل**، وبعدين احفظ التغييرات:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### دعوة البوت لسيرفر Discord

عشان تدعو البوت، لازم تحط معرّف العميل اللي سجلته قبل كده في الرابط ده في المكان المناسب، وبعدين تفتح الرابط في المتصفح وتضيف البوت لسيرفر Discord بتاعك. هيبقى شكله زي المثال ده:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### إعداد لوحة البوت

دلوقتي، حط الرمز اللي سجلته قبل كده ومعرّف العميل في الحقول المخصصة في لوحة تحكم ZAP-Hosting واضغط **حفظ** تحت:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

بعدها، تقدر تشغل البوت. المفروض يتصل بسيرفر Discord خلال حوالي 10 ثواني.


## الخلاصة

البوت الصوتي منتج مفيد وممتع لكثير من الناس. تقدر تستخدمه على سيرفر TeamSpeak أو على Discord. لو عندك أي أسئلة أو محتاج مساعدة، فريق الدعم بتاعنا متاح يوميًا عشان يساعدك! 🙂 

<InlineVoucher />