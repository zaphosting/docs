---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: ตั้งค่าการสุ่มแผนที่"
description: "เรียนรู้วิธีตั้งค่าการสุ่มสร้างแผนที่บนเซิร์ฟเวอร์ Over the Top WWI ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: แผนที่สุ่ม
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

การตั้งค่าแผนที่สุ่มใน **Over the Top WWI** ช่วยให้คุณสร้างแผนที่แบบไดนามิกที่มีภูมิประเทศ พืชพรรณ และลักษณะสิ่งแวดล้อมที่แตกต่างกัน ซึ่งจะเพิ่มความสนุกในการเล่นซ้ำและสร้างสนามรบที่ไม่ซ้ำใครในแต่ละแมตช์

โดยการปรับค่าต่างๆ เหล่านี้ คุณสามารถควบคุมขนาดแผนที่ ความซับซ้อนของภูมิประเทศ และจำนวนวัตถุต่างๆ เช่น ป่า หิน หรืออาคาร

<InlineVoucher />

## การตั้งค่า

การตั้งค่าแผนที่สุ่มจะถูกกำหนดในไฟล์คอนฟิกของเซิร์ฟเวอร์ คุณสามารถเข้าถึงและแก้ไขไฟล์นี้ได้ใน **แผงควบคุมการจัดการเซิร์ฟเวอร์เกม** ของคุณภายใต้เมนู **Configs** ค้นหาและเปิดไฟล์คอนฟิก `ServerConfiguration.ini` ภายในไฟล์นี้ ให้หาพารามิเตอร์ดังต่อไปนี้:

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

- `RandomMapSizee` กำหนดขนาดโดยรวมของแผนที่ที่สร้างขึ้น
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` ควบคุมจำนวนขององค์ประกอบธรรมชาติที่ปรากฏบนแผนที่
- `RandomCivBuildings` และ `RandomMilBuildings` กำหนดจำนวนอาคารพลเรือนและอาคารทหาร
- `RandomSingleTrees` ควบคุมการวางต้นไม้เดี่ยวๆ
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity`, และ `RandomPersistence` มีผลต่อการสร้างภูมิประเทศและความหลากหลาย
- `RandomWaterHeight` กำหนดระดับน้ำ
- `RandomMaxTerrainHeight` ควบคุมความสูงของภูมิประเทศและระดับความสูง
- `RandomDesert` กำหนดว่าภูมิประเทศแบบทะเลทรายจะปรากฏหรือไม่

- `0` → ปิดใช้งาน
- `1` → เปิดใช้งาน
- `2` → สุ่ม

ปรับค่าต่างๆ เหล่านี้เพื่อสร้างแผนที่ในรูปแบบต่างๆ ตั้งแต่ป่าทึบ สนามรบเปิด หรือภูมิประเทศที่หลากหลาย

หลังจากแก้ไขไฟล์ `ServerConfiguration.ini` แล้ว ให้บันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์ของคุณ การตั้งค่าแผนที่ใหม่จะถูกนำไปใช้เมื่อมีการสร้างแผนที่สุ่ม

## สรุป

ยินดีด้วย! คุณได้ตั้งค่าการสุ่มแผนที่บน **เซิร์ฟเวอร์ Over the Top WWI** ของคุณเรียบร้อยแล้ว ซึ่งจะช่วยให้คุณสร้างสนามรบที่ไม่ซ้ำใครและไดนามิก เพิ่มความสนุกและประสบการณ์การเล่นให้กับผู้เล่น

หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ที่พร้อมให้บริการคุณทุกวัน! 🙂

<InlineVoucher />