---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: เปิด/ปิด การแจ้งเตือนการตาย"
description: "เรียนรู้วิธีเปิดหรือปิดการแจ้งเตือนการตายของผู้เล่นบนเซิร์ฟเวอร์ HumanitZ ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: "เปิด/ปิด การแจ้งเตือนการตาย"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## แนะนำ

การแจ้งเตือนการตายจะแจ้งให้ผู้เล่นทราบเมื่อมีคนในเซิร์ฟเวอร์ตาย แม้ว่าจะช่วยติดตามกิจกรรมได้ดี แต่บางเซิร์ฟเวอร์อาจต้องการประสบการณ์ที่สมจริงหรือแข่งขันมากขึ้นโดยไม่มีข้อความแจ้งเตือนการตายแบบสาธารณะ

HumanitZ ให้คุณเปิดหรือปิดการแจ้งเตือนการตายของผู้เล่นได้โดยตรงผ่านไฟล์การตั้งค่าเซิร์ฟเวอร์

<InlineVoucher />

## การตั้งค่า

การตั้งค่าการแจ้งเตือนการตายจะถูกควบคุมในไฟล์ `GameServerSettings.ini` คุณสามารถเข้าถึงไฟล์นี้ได้ในแผงควบคุมเซิร์ฟเวอร์ของคุณภายใต้ **Configs**  
ในไฟล์ config ให้ค้นหาพารามิเตอร์ดังนี้:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – ปิดการแจ้งเตือนการตายสำหรับผู้เล่นทั่วไป แต่แอดมินยังเห็นได้อยู่  
- `NoDeathFeedback=false` – เปิดการแจ้งเตือนการตายสำหรับผู้เล่นทุกคน

ถ้าคุณต้องการให้การแจ้งเตือนการตายแสดงผลกับทุกคน ให้ตั้งค่าเป็น:

```
NoDeathFeedback=false
```

หลังจากแก้ไขไฟล์แล้ว ให้บันทึกการเปลี่ยนแปลงและรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การตั้งค่าใหม่มีผล

## สรุป

เยี่ยมมาก! โดยการแก้ไขค่า `NoDeathFeedback` ในไฟล์ `GameServerSettings.ini` คุณได้ตั้งค่าการแจ้งเตือนการตายบนเซิร์ฟเวอร์ HumanitZ ของคุณเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />