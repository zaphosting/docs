---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI: ตั้งค่า Bots"
description: "เรียนรู้วิธีตั้งค่า bot บนเซิร์ฟเวอร์ Over the Top WWI ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Bots
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Bots สามารถใช้บน **เซิร์ฟเวอร์เกม Over the Top WWI** เพื่อเติมช่องว่างผู้เล่น จำลองการรบขนาดใหญ่ และรักษากิจกรรมแม้มีผู้เล่นน้อย โดยการปรับแต่งการตั้งค่า bot คุณจะควบคุมความยาก พฤติกรรม และความเข้มข้นโดยรวมของแมตช์ได้

ซึ่งช่วยให้คุณสร้างได้ตั้งแต่การปะทะเล็กๆ ที่ควบคุมได้ ไปจนถึงการรบที่วุ่นวายขนาดใหญ่ที่มีหน่วย AI ควบคุมจำนวนมาก

<InlineVoucher />

## การตั้งค่า

การตั้งค่า bot จะถูกกำหนดในไฟล์คอนฟิกเซิร์ฟเวอร์ คุณสามารถเข้าถึงและแก้ไขไฟล์นี้ได้ใน **แผงควบคุมการจัดการเซิร์ฟเวอร์เกม** ของคุณภายใต้เมนู **Configs** ค้นหาและเปิดไฟล์คอนฟิก `ServerConfiguration.ini` ภายในไฟล์นี้ ให้หาพารามิเตอร์ดังต่อไปนี้:

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` กำหนดจำนวน bot ในทีมโจมตี
- `DefenderBots` กำหนดจำนวน bot ในทีมป้องกัน
- `AutoAssignBots` กระจาย bot อัตโนมัติในแต่ละทีม
- `0` → ปิดใช้งาน
- `1` → เปิดใช้งาน

- `BotCallinMulti` ควบคุมความถี่ในการเกิดหรือเสริม bot
- `SubBotForPlayer` แทนที่ bot ด้วยผู้เล่นจริงเมื่อมีคนเข้าร่วม
- `1` → เปิดใช้งาน
- `0` → ปิดใช้งาน

### การตั้งค่า bot ขั้นสูง

คุณสามารถปรับแต่งพฤติกรรม bot เพิ่มเติมด้วยพารามิเตอร์เสริม:

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

ค่านี้ควบคุมความถี่ในการเลือกประเภทหน่วยต่างๆ เมื่อ bot ถูกสร้างขึ้น การเพิ่มค่านี้จะทำให้ bot ประเภทนั้นๆ ปรากฏในแมตช์มากขึ้น

### การตั้งค่าเวฟและการปรับขนาด

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` ควบคุมระยะเวลาของเวฟ bot
- `WaveBuildUpTime` กำหนดเวลาที่ใช้ในการสร้างเวฟให้เต็ม
- `AutoAssignBotsScaleMulti` ปรับจำนวน bot ตามจำนวนผู้เล่น

หลังจากแก้ไขไฟล์ `ServerConfiguration.ini` ให้บันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์ของคุณ การตั้งค่า bot ใหม่จะถูกนำไปใช้ในเกม

## สรุป

ยินดีด้วย! คุณตั้งค่า bot บน **เซิร์ฟเวอร์เกม Over the Top WWI** ของคุณสำเร็จแล้ว การปรับแต่งการตั้งค่าเหล่านี้ช่วยให้คุณควบคุมความเข้มข้นของแมตช์ ปรับปรุงประสบการณ์ผู้เล่น และรักษาความเคลื่อนไหวของเซิร์ฟเวอร์ได้ตลอดเวลา

หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการคุณทุกวัน! 🙂

<InlineVoucher />