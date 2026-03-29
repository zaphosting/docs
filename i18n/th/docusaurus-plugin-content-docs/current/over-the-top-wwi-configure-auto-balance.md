---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI: ตั้งค่า Auto Team Balance"
description: "เรียนรู้วิธีตั้งค่าอัตโนมัติสำหรับการบาลานซ์ทีมในเซิร์ฟเวอร์ Over the Top WWI ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Auto Team Balance
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

การบาลานซ์ทีมเป็นสิ่งสำคัญสำหรับแมตช์ที่ยุติธรรมและสนุกใน **Over the Top WWI** ถ้าไม่มีการบาลานซ์ที่เหมาะสม ทีมหนึ่งอาจได้เปรียบอย่างมาก ทำให้เกมไม่สมดุลและประสบการณ์ผู้เล่นแย่ลง

ระบบ auto-balance จะช่วยรักษาความยุติธรรมโดยการกระจายผู้เล่นระหว่างทีมโดยอัตโนมัติเมื่อเงื่อนไขบางอย่างถูกตอบสนอง

<InlineVoucher />

## การตั้งค่า

การตั้งค่า auto team balance จะอยู่ในไฟล์คอนฟิกของเซิร์ฟเวอร์ คุณสามารถเข้าถึงและแก้ไขไฟล์นี้ได้ใน **แผงควบคุมเซิร์ฟเวอร์เกม** ของคุณภายใต้เมนู **Configs** ค้นหาและเปิดไฟล์คอนฟิก `ServerConfiguration.ini` ภายในไฟล์นี้ ให้หาพารามิเตอร์ดังต่อไปนี้:

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` เปิดหรือปิดการบาลานซ์ทีมอัตโนมัติ

- `0` → ปิดใช้งาน
- `1` → เปิดใช้งาน

- `TeamPercentsAutoBalance` กำหนดสัดส่วนทีมที่ต้องการ เช่น `50` = ขนาดทีมเท่ากัน
- `AutoBalanceThreshold` กำหนดระดับความไม่สมดุลที่ยอมรับได้ก่อนจะเริ่มบาลานซ์
- `MinAutoBalanceCount` กำหนดจำนวนผู้เล่นขั้นต่ำที่ต้องมีเพื่อให้ระบบ auto-balance ทำงาน
- `LimitTeamSelection` จำกัดการเลือกทีมด้วยตัวเองของผู้เล่น

- `0` → ไม่มีข้อจำกัด
- `1–3` → จำกัดการเลือกทีมตามค่าที่ตั้งไว้

หลังจากแก้ไขไฟล์ `ServerConfiguration.ini` แล้ว ให้บันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์ ระบบ auto-balance จะจัดการการกระจายทีมโดยอัตโนมัติในระหว่างแมตช์

## สรุป

ยินดีด้วย! คุณตั้งค่า auto team balance บน **เซิร์ฟเวอร์ Over the Top WWI** ของคุณเรียบร้อยแล้ว ซึ่งจะช่วยให้แมตช์ยุติธรรมและเพิ่มประสบการณ์ที่ดีให้กับผู้เล่นทุกคน

ถ้ามีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />