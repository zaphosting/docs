---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: ตั้งค่าขีดจำกัดคลาส"
description: "เรียนรู้วิธีตั้งค่าขีดจำกัดคลาสบนเซิร์ฟเวอร์ Over the Top WWI ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ขีดจำกัดคลาส
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

ขีดจำกัดคลาสใน **Over the Top WWI** ควบคุมจำนวนผู้เล่นที่สามารถใช้ยูนิตประเภทต่างๆ เช่น สไนเปอร์, ซาเปอร์ หรือยูนิตหนัก การปรับขีดจำกัดเหล่านี้ช่วยให้เกมบาลานซ์และป้องกันไม่ให้คลาสบางคลาสถูกใช้มากเกินไป

ด้วยการตั้งค่าขีดจำกัดคลาส คุณจะมั่นใจได้ว่าการจัดทีมเป็นธรรมและสร้างประสบการณ์การเล่นที่มีโครงสร้างและเน้นกลยุทธ์มากขึ้น

<InlineVoucher />

## การตั้งค่า

ขีดจำกัดคลาสถูกตั้งค่าในไฟล์คอนฟิกของเซิร์ฟเวอร์ คุณสามารถเข้าถึงและแก้ไขไฟล์นี้ได้ใน **แผงควบคุมเซิร์ฟเวอร์เกม** ของคุณภายใต้เมนู **Configs** ค้นหาและเปิดไฟล์คอนฟิก `ServerConfiguration.ini` ภายในไฟล์นี้ ให้หาพารามิเตอร์ดังต่อไปนี้:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` เปิดหรือปิดการจำกัดคลาส  
- `0` → ปิดใช้งาน  
- `1` → เปิดใช้งาน  

- `PercentofCavPerTeam` กำหนดเปอร์เซ็นต์ของยูนิตม้า (cavalry) ที่อนุญาตต่อทีม  

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` กำหนดจำนวนผู้เล่นที่สามารถเลือกแต่ละคลาสได้  

- `NumberofInfOfficers` ควบคุมจำนวนบทบาทนายทหารที่มีให้  

- `MinimumNumOfPlayerForClassLimits` กำหนดจำนวนผู้เล่นขั้นต่ำบนเซิร์ฟเวอร์ก่อนที่จะเริ่มใช้ขีดจำกัดคลาส  

ปรับค่าตัวเลขเหล่านี้เพื่อควบคุมจำนวนผู้เล่นที่เลือกแต่ละคลาสและบาลานซ์เซิร์ฟเวอร์ของคุณตามสไตล์การเล่นที่ต้องการ

หลังจากแก้ไขไฟล์ `ServerConfiguration.ini` ให้บันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์ ขีดจำกัดคลาสใหม่จะถูกนำไปใช้โดยอัตโนมัติ

## สรุป

ยินดีด้วย! คุณตั้งค่าขีดจำกัดคลาสบน **เซิร์ฟเวอร์ Over the Top WWI** ของคุณสำเร็จแล้ว ซึ่งช่วยให้คุณบาลานซ์การจัดทีมและปรับปรุงประสบการณ์การเล่นโดยรวม

หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ที่พร้อมให้บริการคุณทุกวัน! 🙂

<InlineVoucher />