---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: เปิด/ปิด โหมด Permadeath"
description: "เรียนรู้วิธีเปิดหรือปิดโหมด permadeath บนเซิร์ฟเวอร์ HumanitZ ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: "เปิด/ปิด Permadeath"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## แนะนำ

Permadeath เพิ่มความยากและความตึงเครียดในการเล่นเซิร์ฟเวอร์เกมแนวเอาชีวิตรอดใน HumanitZ อย่างมาก เมื่อเปิดใช้งาน ผู้เล่นจะสูญเสียตัวละครถาวรเมื่อเสียชีวิตและต้องสร้างตัวละครใหม่ การตั้งค่านี้มักใช้ในเซิร์ฟเวอร์เกมแนวฮาร์ดคอร์หรือเซิร์ฟเวอร์เอาชีวิตรอดที่มีความเสี่ยงสูง

<InlineVoucher />

## การตั้งค่า

Permadeath ถูกควบคุมในไฟล์ `GameServerSettings.ini` คุณสามารถเข้าถึงไฟล์นี้ได้จากแผงควบคุมเซิร์ฟเวอร์ของคุณในเมนู **Configs** ภายในไฟล์ config ให้ค้นหาพารามิเตอร์ดังนี้:

```
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false
```

- `PermaDeath=true` – เปิดใช้งาน permadeath ผู้เล่นจะสูญเสียตัวละครถาวรเมื่อเสียชีวิต  
- `PermaDeath=false` – ปิดการใช้งาน permadeath ผู้เล่นสามารถเกิดใหม่พร้อมตัวละครเดิมได้

ถ้าคุณต้องการเปิดใช้งาน permadeath ให้เปลี่ยนค่าเป็น:

```
PermaDeath=true
```

หลังจากแก้ไขไฟล์แล้ว ให้บันทึกการเปลี่ยนแปลงและรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การตั้งค่าใหม่มีผล



## สรุป

ยินดีด้วย! โดยการแก้ไขค่า `PermaDeath` ในไฟล์ `GameServerSettings.ini` คุณได้เปิดหรือปิดโหมด permadeath บนเซิร์ฟเวอร์ HumanitZ ของคุณเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการคุณทุกวัน! 🙂

<InlineVoucher />