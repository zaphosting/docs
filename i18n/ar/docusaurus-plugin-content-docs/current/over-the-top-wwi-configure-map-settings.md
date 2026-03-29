---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: إعدادات الخرائط العشوائية"
description: "تعلم كيفية إعداد توليد الخرائط العشوائية على سيرفر Over the Top WWI الخاص بك → تعلّم المزيد الآن"
sidebar_label: الخرائط العشوائية
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

تسمح لك إعدادات الخرائط العشوائية في **Over the Top WWI** بتوليد خرائط ديناميكية تحتوي على تضاريس مختلفة، نباتات، وميزات بيئية متنوعة. هذا يزيد بشكل كبير من إمكانية إعادة اللعب ويخلق ساحات معارك فريدة لكل مباراة.

من خلال تعديل هذه القيم، يمكنك التحكم في حجم الخريطة، تعقيد التضاريس، وكمية العناصر مثل الغابات، الصخور، أو المباني.

<InlineVoucher />

## الإعدادات

يتم إعداد إعدادات الخرائط العشوائية داخل ملف إعدادات السيرفر. يمكنك الوصول إلى هذا الملف وتعديله من خلال **لوحة التحكم الخاصة بسيرفر الألعاب** تحت قسم **Configs**. ابحث وافتح ملف الإعدادات `ServerConfiguration.ini`. داخل هذا الملف، ابحث عن المعاملات التالية:

```
RandomMapSizee = 450
RandomFields = 8.25
RandomCivBuildings = 0
RandomMilBuildings = 0
RandomForests = 8.5
RandomSingleTrees = 1.1
RandomBush = 5
RandomRocks = 1.1
RandomNoiseSetting = 0
RandomWaterHeight = 12.25
RandomMaxTerrainHeight = 26
RandomFrequency = 5
RandomLacunarity = 3
RandomPersistence = 32
RandomDesert = 0
```

- `RandomMapSizee` يحدد الحجم الكلي للخريطة المولدة  
- `RandomFields`، `RandomForests`، `RandomBush`، `RandomRocks` تتحكم في عدد العناصر الطبيعية التي تظهر على الخريطة  
- `RandomCivBuildings` و `RandomMilBuildings` تحدد عدد المباني المدنية والعسكرية  
- `RandomSingleTrees` يتحكم في توزيع الأشجار المنفردة  
- `RandomNoiseSetting`، `RandomFrequency`، `RandomLacunarity`، و `RandomPersistence` تؤثر على توليد التضاريس وتنوعها  
- `RandomWaterHeight` يحدد مستوى المياه  
- `RandomMaxTerrainHeight` يتحكم في ارتفاع التضاريس والارتفاعات  
- `RandomDesert` يحدد ما إذا كانت بيئات الصحراء يمكن أن تظهر  

- `0` → معطل  
- `1` → مفعّل  
- `2` → عشوائي  

قم بتعديل هذه القيم لإنشاء أنواع مختلفة من الخرائط، من الغابات الكثيفة إلى ساحات المعارك المفتوحة أو تضاريس متنوعة.

بعد تعديل ملف `ServerConfiguration.ini`، احفظ التغييرات وأعد تشغيل السيرفر. سيتم تطبيق إعدادات الخريطة الجديدة عند توليد خريطة عشوائية.

## الخاتمة

مبروك! لقد قمت بإعداد إعدادات الخرائط العشوائية بنجاح على **سيرفر Over the Top WWI** الخاص بك. هذا يتيح لك إنشاء ساحات معارك فريدة وديناميكية، مما يعزز إمكانية إعادة اللعب وتجربة اللاعبين.

لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />