---
id: humanitz-airdrop-management
title: "HumanitZ: การจัดการ Airdrop"
description: "เรียนรู้วิธีเปิด ปิด และตั้งค่า airdrop บนเซิร์ฟเวอร์ HumanitZ ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: "การจัดการ Airdrop"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## แนะนำ

Airdrop ใน HumanitZ มอบของรางวัลสุดเจ๋งและมีผลกระทบอย่างมากต่อการเคลื่อนไหวของผู้เล่น โซนความขัดแย้ง และไดนามิกโดยรวมของเซิร์ฟเวอร์ ขึ้นอยู่กับสไตล์การเล่นของเซิร์ฟเวอร์คุณ คุณอาจอยากให้มีการปล่อยซัพพลายบ่อย ๆ เพื่อเพิ่มความมันส์ หรือปิดการใช้งานเพื่อให้ประสบการณ์เอาชีวิตรอดมีทรัพยากรจำกัดมากขึ้น

<InlineVoucher />

## การตั้งค่า

การตั้งค่า airdrop ควบคุมผ่านไฟล์ `GameServerSettings.ini` คุณสามารถเข้าถึงไฟล์นี้ได้ในแผงควบคุมเซิร์ฟเวอร์ของคุณภายใต้เมนู **Configs** ในไฟล์ config ให้ค้นหาพารามิเตอร์ดังนี้:

```
; กำหนดว่าจะเปิดหรือปิดการปล่อย airdrop
AirDrop=true
; จำนวนวันในเกมระหว่างแต่ละการปล่อย AirDrop
AirDropInterval=1
```

การตั้งค่าทำงานดังนี้:

- `AirDrop=true` – เปิดใช้งาน airdrop  
- `AirDrop=false` – ปิดการใช้งาน airdrop ทั้งหมด  
- `AirDropInterval` – กำหนดจำนวนวันในเกมที่ผ่านไประหว่างแต่ละการปล่อย airdrop  

ตัวอย่างเช่น หากคุณต้องการให้ airdrop เกิดขึ้นทุก 3 วันในเกม:

```
AirDrop=true
AirDropInterval=3
```

ถ้าคุณต้องการปิดการใช้งาน airdrop อย่างสมบูรณ์:

```
AirDrop=false
```

หลังจากแก้ไขไฟล์แล้ว ให้บันทึกการเปลี่ยนแปลงและรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การตั้งค่าใหม่มีผล

## สรุป

ยินดีด้วย! โดยการแก้ไขค่า `AirDrop` และ `AirDropInterval` ในไฟล์ `GameServerSettings.ini` คุณได้ตั้งค่าพฤติกรรม airdrop บนเซิร์ฟเวอร์ HumanitZ ของคุณเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการคุณทุกวัน! 🙂

<InlineVoucher />