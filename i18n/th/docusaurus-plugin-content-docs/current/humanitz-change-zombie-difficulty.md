---
id: humanitz-change-zombie-difficulty
title: "HumanitZ: เปลี่ยนความยากของซอมบี้"
description: "เรียนรู้วิธีปรับความยากของซอมบี้และ AI บนเซิร์ฟเวอร์ HumanitZ ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: "เปลี่ยนความยากของซอมบี้"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## แนะนำ

ความยากของซอมบี้มีบทบาทสำคัญในการกำหนดประสบการณ์การเอาชีวิตรอดใน HumanitZ ตั้งแต่ความแข็งแกร่งและความเร็วของซอมบี้ ไปจนถึงตัวคูณการเกิดและเหตุการณ์บุกของ AI การตั้งค่าเหล่านี้จะกำหนดว่าระดับความอันตรายของโลกจะเป็นอย่างไร

ตัวเลือกความยากที่เกี่ยวข้องกับซอมบี้และ AI ทั้งหมดถูกตั้งค่าในไฟล์ `GameServerSettings.ini` ซึ่งช่วยให้คุณควบคุมความเข้มข้นของการเผชิญหน้ากับ PvE บนเซิร์ฟเวอร์ของคุณได้อย่างเต็มที่

<InlineVoucher />

## การตั้งค่า

การตั้งค่าความยากของซอมบี้ถูกควบคุมในไฟล์ `GameServerSettings.ini` คุณสามารถเข้าถึงไฟล์นี้ได้ในแผงควบคุมเซิร์ฟเวอร์ของคุณภายใต้ **Configs** ในไฟล์คอนฟิก ให้ค้นหาพารามิเตอร์ดังต่อไปนี้:

```
;Health difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffHealth=1

;Speed difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffSpeed=2

;Damage difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffDamage=3

;Zombie amount multiplier 2 for example would mean twice as many zombies. 0.5 would mean half as many zombies.
ZombieAmountMulti=1

;Human bandit amount multiplier 2 for example would mean twice as many human bandits. 0.5 would mean half as many human bandits.
HumanAmountMulti=1

;Zombie dog mainly appear at night. 2 for example would mean twice as many zombie dogs. 0.5 would mean half as many zombie dogs.
ZombieDogMulti=1

;The time in minutes it takes for zombies to respawn, set to 0 to disable zombie respawning.
ZombieRespawnTimer=90

;The game will sometimes spawn AI events such as zombies or humans raiding your location. 0 = Disabled, 1 = Low, 2 = Default, 3 = High, 4 = Insane
AIEvent=2
```

ด้านล่างนี้คือคำอธิบายของแต่ละการตั้งค่า:

- `ZombieDiffHealth` – ควบคุมความยากของพลังชีวิตซอมบี้  
- `ZombieDiffSpeed` – ควบคุมความเร็วการเคลื่อนที่ของซอมบี้  
- `ZombieDiffDamage` – ควบคุมความเสียหายที่ซอมบี้ทำได้  
- `ZombieAmountMulti` – ตัวคูณจำนวนซอมบี้ที่เกิดขึ้นทั้งหมด  
- `HumanAmountMulti` – ตัวคูณจำนวนโจรมนุษย์ที่เกิดขึ้น  
- `ZombieDogMulti` – ตัวคูณจำนวนสุนัขซอมบี้ที่เกิดขึ้น  
- `ZombieRespawnTimer` – กำหนดเวลาที่ใช้ในการเกิดซอมบี้ใหม่ (ตั้งค่าเป็น 0 เพื่อปิดการเกิดซอมบี้ใหม่)  
- `AIEvent` – ควบคุมความถี่ของเหตุการณ์บุกของ AI  

หลังจากแก้ไขแล้ว ให้บันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การตั้งค่าใหม่มีผล



## ตัวอย่างการตั้งค่าความยาก

### การตั้งค่าซอมบี้แบบง่าย

การตั้งค่านี้จะสร้างประสบการณ์ PvE ที่ง่ายขึ้นด้วยจำนวนศัตรูน้อยลงและระดับภัยคุกคามที่ลดลง

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### การตั้งค่าซอมบี้แบบยาก

การตั้งค่านี้จะเพิ่มความแข็งแกร่งของศัตรู อัตราการเกิด และความถี่ของเหตุการณ์ เพื่อโลกที่อันตรายขึ้นมาก

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## สรุป

ยินดีด้วย! โดยการปรับค่าที่เกี่ยวข้องกับซอมบี้ในไฟล์ `GameServerSettings.ini` คุณได้ปรับแต่งการตั้งค่าความยากของซอมบี้บนเซิร์ฟเวอร์ HumanitZ ของคุณเรียบร้อยแล้ว หากมีคำถามหรือขอความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂

<InlineVoucher />