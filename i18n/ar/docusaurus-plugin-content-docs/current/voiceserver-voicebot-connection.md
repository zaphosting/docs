---
id: voiceserver-voicebot-connection
title: "سيرفر صوتي: ربط البوت الصوتي بسيرفرك الصوتي"
description: "اكتشف كيف تربط بوتك الصوتي بسيرفرات TeamSpeak وDiscord لتواصل وتحكم سلس → تعلّم المزيد الآن"
sidebar_label: الربط بسيرفر صوتي
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## مقدمة

هل تريد ربط بوتك الصوتي بسيرفر TeamSpeak الخاص بك، لكن مش متأكد إزاي تعمل ده؟ ولا يهمك، في السطور الجاية هنشرحلك بالتفصيل إزاي تعملها!



## ربط البوت بسيرفر TeamSpeak

عشان تربط البوت الصوتي بسيرفر TeamSpeak 3، لازم تفتحه من لوحة التحكم. بعدين، هتروح لـ **السيرفر** على الشمال زي ما موضح تحت:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

دلوقتي تقدر تختار سيرفر TeamSpeak تحت **السيرفر** لو كنت حاجز السيرفر ده مع حسابك. ولو السيرفر مستضاف خارجيًا، تقدر تختار كمان **Custom Teamspeak Server**.

بعد كده تدخل البيانات تحت، وبس تحفظ، والبوت الصوتي هيتصل بسيرفر TeamSpeak 3 بتاعك، هنا مثال:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## ربط البوت بسيرفر Discord

عشان تربط البوت الصوتي بسيرفر Discord، لازم تروح لـ **السيرفر**، وبعدين تختار **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

لازم تدخل **Discord Bot Token** و **Discord Bot Client ID**. بعد كده، البوت الصوتي هيتصل بسيرفر Discord بتاعك.


## الحصول على Discord Bot Token و Client ID

بما إن سيرفر Discord مش ليه عنوان IP مباشر أو منفذ، في شوية خطوات لازم تعملها قبل ما تقدر تستخدم البوت على سيرفر Discord.


### إنشاء تطبيق Discord

أول حاجة لازم تعملها هي إنشاء تطبيق على Discord. البوت بتاعك هيتم ربطه بالتطبيق ده وهيشتغل باسمه. عشان تعمل التطبيق ده، ادخل على [بوابة مطوري Discord](https://discord.com/developers/applications/).

دلوقتي، هتعمل تطبيق جديد بالضغط على **New Application** وتقدر تسميه زي ما تحب زي ما موضح تحت:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

بعد كده، اضغط على **Create** عشان تنشئ التطبيق. في الخطوات الجاية، لازم تكتب رقم تعريف التطبيق (Application ID):

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### إعداد البوت والحصول على التوكن

لما تنشئ التطبيق، بوت بيتعمل تلقائيًا كمان. تقدر تجيب التوكن بسهولة بالضغط على **Reset Token**. بعد كده، هتاخد توكن المستخدم ولازم تحتفظ بيه أو تكتبه في مكان آمن:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
ما تفصحش عن توكن البوت لأي حد عشان يشتغل البوت بدون مشاكل وما يسببش أي ثغرة أمنية. التوكن ده زي مفتاح سري ولازم تخلّيه سر.
:::

في نفس الصفحة، انزل شوية وفعل **Presence Intent**، **Server Members Intent** و **Message Content Intent**، وبعدين احفظ التغييرات:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### دعوة البوت لسيرفر Discord بتاعك

عشان تدعو البوت، لازم تحط Client ID اللي سجلته قبل كده في اللينك ده في المكان المناسب، وبعدين تفتح اللينك في المتصفح وتضيف البوت لسيرفر Discord بتاعك. اللينك هيبقى شكله كده:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### إعداد لوحة تحكم البوت

دلوقتي، حط التوكن وClient ID اللي سجلتهم في الحقول المخصصة في لوحة تحكم ZAP-Hosting واضغط **حفظ** في الأسفل:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

بعد كده، تقدر تشغل البوت. المفروض يتصل بسيرفر Discord خلال حوالي 10 ثواني.


## الخلاصة

البوت الصوتي منتج مفيد وممتع لكثير من الناس. تقدر تستخدمه على سيرفر TeamSpeak أو على Discord. لو عندك أي أسئلة أو محتاج مساعدة، فريق الدعم بتاعنا متاح يوميًا لمساعدتك! 🙂 

<InlineVoucher />