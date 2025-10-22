---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione: เงื่อนไขการใช้ช่องรถ"
description: "ค้นพบวิธีปลดล็อกช่องรถมากกว่า 10 ช่องใน Assetto Corsa โดยการทำตามเงื่อนไขสำคัญเพื่อประสบการณ์การเล่นที่ดียิ่งขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เงื่อนไขการใช้ช่องรถ
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

ใน Assetto Corsa สามารถใช้ช่องรถได้ 10 ช่องโดยไม่ต้องแก้ไขอะไรเพิ่มเติม แต่ถ้าต้องการใช้ช่องรถมากกว่า 10 ช่อง จะต้องทำตามเงื่อนไขบางอย่าง เงื่อนไขเหล่านี้จะตั้งค่าไว้ใน "**Configs**" และในนั้นต้องแก้ไขไฟล์ "**settings.json**"

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## การเตรียมตัวและขีดจำกัดช่องรถ

ถ้าต้องการใช้ช่องรถมากกว่า 10 ช่อง ค่าของ **"trackMedalsRequirement": X,** และ **"safetyRatingRequirement": X,** ต้องถูกปรับแต่ง
ค่าที่ต้องตั้งสูงแค่ไหน สามารถคำนวณได้จากสูตรนี้
สูตรเดียวกันนี้ยังใช้คำนวณค่าที่ต้องการของ trackMedalRequirement และ safetyRatingRequirement ได้ด้วย

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### รายการชุดค่าที่เป็นไปได้

ด้านล่างนี้คือรายการชุดค่าที่เป็นไปได้ซึ่งสามารถใช้เพื่อให้ใช้จำนวนช่องรถที่ต้องการได้
นอกจากนี้ยังมีหลายวิธีแก้ไขเพื่อให้ได้เงื่อนไขช่องรถที่จำเป็น
ดังนั้นจึงแสดงตัวเลือกต่าง ๆ ในรายการนี้ด้วย

:::info
โปรดทราบว่า สำหรับ safetyRatingRequirement และ trackMedalRequirement ได้ใส่เงื่อนไขขั้นต่ำไว้แล้ว แน่นอนว่าสามารถโฮสต์ช่องรถน้อยกว่านี้โดยตั้งค่าสูงกว่าสำหรับ safetyRatingRequirement และ trackMedalRequirement ได้เช่นกัน
:::

ช่องรถ | safetyRatingRequirement | trackMedalRequirement
-----|-------|---------
10-16 | 24 | 0
18 | 40 | 0
18 | 24 | 2
20 | 40 | 0
20 | 30 | 3
22 | 50 | 0
22 | 40 | 2
24 | 60 | 0
24 | 50 | 2
26 | 70 | 0
26 | 60 | 1
28 | 80 | 0
28 | 70 | 1
30 | 90 | 0
30 | 80 | 1

<InlineVoucher />