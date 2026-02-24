---
id: humanitz-change-weather
title: "HumanitZ: تغيير الطقس"
description: "تعلم كيف تعدل وتخصص تكرار وأنواع الطقس على سيرفر HumanitZ الخاص بك → تعلّم المزيد الآن"
sidebar_label: "تغيير الطقس"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## مقدمة

أنماط الطقس تؤثر على طريقة اللعب في البقاء، الرؤية، وجو العالم في HumanitZ. سواء كنت تفضل بيئة أكثر هدوءًا مع سماء صافية في الغالب أو عالمًا أكثر قسوة مع عواصف وعواصف ثلجية متكررة، تعديل إعدادات الطقس يتيح لك التحكم في مدى تكرار ظهور أنواع الطقس المختلفة.

<InlineVoucher />

## الإعدادات

يتم التحكم في إعدادات الطقس من خلال ملف `GameServerSettings.ini`. يمكنك الوصول لهذا الملف من خلال لوحة التحكم الخاصة بسيرفرك تحت قسم **Configs**. داخل ملف الإعدادات، ابحث عن المعاملات التالية:

```
;Below you can tweak the odds of each weather type. The current season will still dictate which weather types can spawn.
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=1
Weather_Thunderstorm=1
Weather_LightSnow=1
Weather_Snow=1
Weather_Blizzard=1
```

كل إعداد يمثل **احتمالية نسبية** لحدوث نوع الطقس المقابل. القيم الأعلى تزيد من احتمال اختيار ذلك النوع من الطقس أثناء توليد الطقس، والقيم الأقل تقلل من احتماله.

على سبيل المثال:

- تعيين `Weather_ClearSky=3` يزيد من فرصة السماء الصافية مقارنة بأنواع الطقس الأخرى  
- تقليل `Weather_Blizzard=0` يعطل فعليًا ظهور العواصف الثلجية (إلا إذا أجبرها منطق الموسم على الظهور)



### طقس هادئ

هذا المثال يعطي أولوية للطقس الهادئ ويقلل من الظروف القاسية:

```
Weather_ClearSky=3
Weather_Cloudy=2
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=0
Weather_Thunderstorm=0
Weather_LightSnow=1
Weather_Snow=0
Weather_Blizzard=0
```



### طقس قاسٍ

هذا المثال يزيد من احتمالية الطقس القاسي والديناميكي:
```
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=2
Weather_LightRain=2
Weather_Rain=3
Weather_Thunderstorm=2
Weather_LightSnow=1
Weather_Snow=2
Weather_Blizzard=2
```

بعد تعديل الملف، احفظ التغييرات وأعد تشغيل السيرفر لتطبيق إعدادات الطقس الجديدة.



## الخاتمة

مبروك! من خلال تعديل قيم تكرار الطقس في ملف `GameServerSettings.ini`، لقد خصصت بنجاح كيف يتصرف الطقس على سيرفر HumanitZ الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />