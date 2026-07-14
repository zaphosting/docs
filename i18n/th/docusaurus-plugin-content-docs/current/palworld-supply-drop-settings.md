---
id: palworld-supply-drop-settings
title: "Palworld: การตั้งค่า Supply Drop"
description: "เรียนรู้วิธีเปลี่ยนความถี่ของ Supply Drop ใน Palworld บนเซิร์ฟเวอร์เกม Palworld ของคุณโดยการแก้ไขการตั้งค่า SupplyDropSpan ด้วยตนเอง -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld: การตั้งค่า Supply Drop
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld มีระบบ supply drops ที่จะปรากฏเป็นระยะ ๆ และอาจมีทรัพยากรที่มีประโยชน์ ในคู่มือนี้ คุณจะได้เรียนรู้วิธีเปลี่ยนความถี่ของ supply drop ด้วยตนเองบนเซิร์ฟเวอร์เกม Palworld ของคุณที่ ZAP-Hosting โดยการแก้ไขไฟล์คอนฟิกที่ถูกต้องและนำการเปลี่ยนแปลงไปใช้ให้ถูกต้อง

## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณสามารถเข้าถึงเซิร์ฟเวอร์เกม Palworld ของคุณผ่านทางเว็บอินเทอร์เฟซของ ZAP-Hosting และเซิร์ฟเวอร์นั้นพร้อมใช้งานในระบบจัดการเซิร์ฟเวอร์เกมของคุณ

:::info การตั้งค่าด้วยตนเองจำเป็นต้องใช้
การตั้งค่านี้ต้องทำโดยการแก้ไขคอนฟิกเซิร์ฟเวอร์ Palworld ด้วยตนเอง คุณจะต้องเปิดไฟล์คอนฟิกผ่านส่วน **Configs** ในระบบจัดการเซิร์ฟเวอร์เกมของคุณ
:::

## Locate the Configuration File

เพื่อเปลี่ยนช่วงเวลาของ supply drop คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

ในระบบจัดการเซิร์ฟเวอร์เกม ZAP-Hosting ของคุณ:

1. เปิดเซิร์ฟเวอร์ Palworld ของคุณ
2. ไปที่ **Configs**
3. เปิดไฟล์ `PalWorldSettings.ini`

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note ตำแหน่งไฟล์คอนฟิก
บน ZAP-Hosting การตั้งค่า Palworld ที่เกี่ยวข้องกับการเล่นเกมมักจะถูกจัดการผ่านไฟล์ `PalWorldSettings.ini` ในส่วน **Configs** ของระบบจัดการเซิร์ฟเวอร์ของคุณ หากอินเทอร์เฟซของคุณแตกต่างเล็กน้อย ให้ใช้รายการไฟล์คอนฟิกที่มีและค้นหาไฟล์ `PalWorldSettings.ini` โดยเฉพาะ
:::

## Edit the Supply Drop Setting

การตั้งค่าที่ใช้สำหรับความถี่ของ supply drop คือ `SupplyDropSpan`

ค่านี้กำหนดช่วงเวลาระหว่าง supply drops เป็นหน่วย **นาที**

### Find the Correct Section

ในไฟล์ `PalWorldSettings.ini` การตั้งค่าเซิร์ฟเวอร์ Palworld มักจะถูกเก็บไว้ในบรรทัด `OptionSettings` คุณต้องค้นหาบล็อกการตั้งค่าที่มีอยู่แล้วและตรวจสอบว่า `SupplyDropSpan` มีอยู่แล้วหรือไม่

ถ้ามีอยู่แล้ว ให้เปลี่ยนค่า

ถ้าไม่มี ให้เพิ่มเข้าไปในส่วน `OptionSettings=(...)` ร่วมกับการตั้งค่าอื่น ๆ ที่คั่นด้วยเครื่องหมายจุลภาค

### Configuration Entry

ใช้รูปแบบดังนี้:

```ini
SupplyDropSpan=[your_value]
```

แทนที่ `[your_value]` ด้วยจำนวนเวลาที่คุณต้องการเป็นนาที

### Example Values

| การตั้งค่า | ความหมาย |
| --- | --- |
| `SupplyDropSpan=180` | ช่วงเวลาปกติ 3 ชั่วโมง |
| `SupplyDropSpan=60` | supply drop ทุก 1 ชั่วโมง |
| `SupplyDropSpan=360` | supply drop ทุก 6 ชั่วโมง |
| `SupplyDropSpan=30` | supply drop บ่อยมาก |

ตัวอย่างการตั้งค่าในบล็อก `OptionSettings` เต็มรูปแบบ:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution อย่าทำให้ไวยากรณ์เสียหาย
อย่าลบเครื่องหมายจุลภาค วงเล็บ หรือค่าที่มีอยู่ในบรรทัด `OptionSettings` การผิดพลาดในการจัดรูปแบบบรรทัดนี้อาจทำให้เซิร์ฟเวอร์ไม่สามารถโหลดคอนฟิกได้อย่างถูกต้อง
:::

## Save and Apply the Changes

หลังจากแก้ไขค่าแล้ว:

1. บันทึกการเปลี่ยนแปลงในไฟล์ `PalWorldSettings.ini`
2. รีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณจากระบบจัดการเซิร์ฟเวอร์เกม ZAP-Hosting

ต้องรีสตาร์ทเซิร์ฟเวอร์เพราะ Palworld จะไม่โหลดการตั้งค่า gameplay นี้แบบสด ๆ ขณะที่เซิร์ฟเวอร์กำลังทำงานอยู่

### ต้องใช้คำสั่งเพิ่มเติมไหม?

โดยปกติไม่ต้องใช้คำสั่งในเกมหรือคอนโซลเพิ่มเติมสำหรับการเปลี่ยนแปลงนี้ ขั้นตอนที่ต้องทำคือรีสตาร์ทเซิร์ฟเวอร์เพื่อโหลดค่า `SupplyDropSpan` ที่อัปเดต

| การกระทำ | จำเป็นหรือไม่ |
| --- | --- |
| แก้ไขไฟล์ `PalWorldSettings.ini` | ใช่ |
| เพิ่มหรือเปลี่ยนค่า `SupplyDropSpan` | ใช่ |
| รันคำสั่งคอนโซลเพิ่มเติม | ไม่ |
| รีสตาร์ทเซิร์ฟเวอร์หลังบันทึก | ใช่ |

## Verify the Setting

เมื่อเซิร์ฟเวอร์รีสตาร์ทแล้ว ช่วงเวลาของ supply drop ใหม่จะเริ่มทำงาน

เนื่องจากการตั้งค่านี้ควบคุมเหตุการณ์โลกตามเวลา คุณอาจต้องรอรอบการเกิด supply drop ครั้งถัดไปเพื่อยืนยันการเปลี่ยนแปลงในเกมอย่างเต็มที่ หากตั้งค่าช่วงเวลาสั้น เช่น `60` หรือ `30` จะตรวจสอบได้ง่ายขึ้น

:::tip ทดสอบการเปลี่ยนแปลงได้เร็วขึ้น
ถ้าคุณต้องการยืนยันว่าการตั้งค่านี้ทำงานโดยไม่ต้องรอนานหลายชั่วโมง ให้ตั้งค่า `SupplyDropSpan=30` ชั่วคราว หลังทดสอบเสร็จแล้ว คุณสามารถเปลี่ยนกลับเป็นค่าที่ต้องการใช้ระยะยาวได้
:::

## Troubleshooting

### การตั้งค่าไม่ถูกนำไปใช้

ถ้าความถี่ของ supply drop ดูเหมือนไม่เปลี่ยนแปลง ให้ตรวจสอบดังนี้:

- ตรวจสอบว่าเขียน `SupplyDropSpan` ถูกต้องตามที่แสดง
- ยืนยันว่าค่าอยู่ในส่วน `OptionSettings=(...)`
- ตรวจสอบว่าไม่มีจุลภาคขาดหรือวงเล็บหาย
- รีสตาร์ทเซิร์ฟเวอร์หลังบันทึกไฟล์

### เซิร์ฟเวอร์มีข้อผิดพลาดในการตั้งค่า

ถ้าเซิร์ฟเวอร์ไม่สามารถเริ่มทำงานหลังแก้ไขไฟล์ ให้คืนค่าคอนฟิกเดิมและตรวจสอบไวยากรณ์อย่างละเอียด

:::danger ไวยากรณ์ INI ผิดพลาด
Palworld เก็บการตั้งค่า gameplay หลายอย่างไว้ในบรรทัด `OptionSettings` เดียว ตัวอักษรผิดตำแหน่งเพียงตัวเดียวก็อาจทำให้คอนฟิกเสียได้ ควรตรวจสอบการเปลี่ยนแปลงอย่างละเอียดก่อนบันทึกเสมอ
:::

## Conclusion

ยินดีด้วย คุณได้เปลี่ยนการตั้งค่า supply drop ใน Palworld สำเร็จแล้ว สำหรับคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ กรุณาติดต่อทีมซัพพอร์ตของเราได้เลย ทีมงานพร้อมให้บริการทุกวัน! 🙂