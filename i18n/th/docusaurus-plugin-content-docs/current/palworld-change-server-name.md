---
id: palworld-change-server-name
title: "Palworld: เปลี่ยนชื่อเซิร์ฟเวอร์"
description: "เรียนรู้วิธีเปลี่ยนชื่อเซิร์ฟเวอร์ Palworld ของคุณและอัปเดตชื่อที่แสดงในตัวเลือกเซิร์ฟเวอร์เกมโดยแก้ไขไฟล์คอนฟิกที่ถูกต้องด้วยตนเอง -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: "เปลี่ยนชื่อเซิร์ฟเวอร์"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ใช้ไฟล์คอนฟิกเพื่อกำหนดชื่อเซิร์ฟเวอร์ที่แสดงในตัวเลือกเซิร์ฟเวอร์เกม ในคู่มือนี้ คุณจะได้เรียนรู้วิธีเปลี่ยนชื่อเซิร์ฟเวอร์ที่แสดงด้วยตนเองผ่านแผงควบคุม ZAP-Hosting และนำการเปลี่ยนแปลงไปใช้ให้ถูกต้อง



## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณสามารถเข้าถึงเซิร์ฟเวอร์เกม Palworld ของคุณในแผงควบคุม ZAP-Hosting และมีสิทธิ์แก้ไขไฟล์คอนฟิกของเซิร์ฟเวอร์

:::info ต้องแก้ไขคอนฟิกด้วยตนเอง
การเปลี่ยนแปลงนี้ต้องทำโดยการแก้ไขไฟล์คอนฟิกเซิร์ฟเวอร์ Palworld ด้วยตนเอง ไฟล์ที่เกี่ยวข้องสามารถเข้าถึงได้ผ่านการจัดการเซิร์ฟเวอร์เกมของคุณในส่วน `Configs`
:::

## เปิดไฟล์คอนฟิก Palworld

เพื่อเปลี่ยนชื่อเซิร์ฟเวอร์ คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

ในแผงควบคุม ZAP-Hosting:

1. เปิดเซิร์ฟเวอร์เกม **Palworld** ของคุณ
2. ไปที่เมนู **Configs** ในการจัดการเซิร์ฟเวอร์
3. เปิดไฟล์ `PalWorldSettings.ini`

:::note ตำแหน่งไฟล์คอนฟิก
บนเซิร์ฟเวอร์เฉพาะ Palworld การตั้งค่าที่เกี่ยวข้องมักจะเก็บไว้ในไฟล์ `PalWorldSettings.ini` ในแผงควบคุม ZAP-Hosting คุณควรแก้ไขไฟล์นี้ผ่านส่วน `Configs` แทนการเปลี่ยนแปลงเส้นทางไฟล์ด้วยตนเอง
:::

## แก้ไขชื่อเซิร์ฟเวอร์

ในไฟล์ `PalWorldSettings.ini` ให้ค้นหาส่วน `OptionSettings` ชื่อที่แสดงในตัวเลือกเซิร์ฟเวอร์เกมจะถูกควบคุมโดยรายการ `ServerName`

คุณยังสามารถตั้งคำอธิบายเซิร์ฟเวอร์เพิ่มเติมได้โดยใช้ `ServerDescription`

### ตัวอย่างคอนฟิก

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="คำอธิบายเซิร์ฟเวอร์ Palworld ของคุณ")
```

ถ้าไฟล์ของคุณมีบรรทัด `OptionSettings=(...)` ที่ยาวอยู่แล้ว คุณเพียงแค่เปลี่ยนค่าที่มีอยู่สำหรับ `ServerName` และถ้าต้องการ `ServerDescription`

### ค่าที่ต้องแก้ไข

| คีย์คอนฟิก | คำอธิบาย | ตัวอย่างค่า |
| --- | --- | --- |
| `ServerName` | ชื่อที่แสดงในตัวเลือกเซิร์ฟเวอร์ Palworld | `"zaphosting"` |
| `ServerDescription` | ข้อความคำอธิบายเพิ่มเติมที่แสดงกับเซิร์ฟเวอร์ (ไม่บังคับ) | `"เซิร์ฟเวอร์เอาชีวิตรอดสาธารณะ"` |

:::caution รักษาการตั้งค่าเดิมไว้
`OptionSettings` มักจะมีการตั้งค่าเซิร์ฟเวอร์อื่นๆ อีกมากในบรรทัดเดียวกัน อย่าเปลี่ยนค่าอื่นนอกจาก `ServerName` และ `ServerDescription` เว้นแต่คุณตั้งใจจะแก้ไขตัวเลือกอื่นด้วย
:::

## บันทึกการเปลี่ยนแปลง

หลังจากแก้ไขค่าแล้ว:

1. บันทึกไฟล์ `PalWorldSettings.ini` ในส่วน **Configs**
2. ตรวจสอบให้แน่ใจว่าเครื่องหมายคำพูดและเครื่องหมายจุลภาคยังคงถูกต้องตามรูปแบบ

### ตัวอย่างบรรทัดที่มีอยู่แล้ว

ถ้าไฟล์ของคุณมีบรรทัดคล้ายตัวอย่างด้านล่าง ให้แก้ไขเฉพาะข้อความที่เกี่ยวข้องเท่านั้น:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Public survival server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## รีสตาร์ทเซิร์ฟเวอร์

หลังจากบันทึกคอนฟิกแล้ว คุณต้องรีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณเพื่อให้ชื่อใหม่ถูกโหลด

### นำคอนฟิกใหม่ไปใช้

ใช้ฟังก์ชันรีสตาร์ทในแผงควบคุมการจัดการเซิร์ฟเวอร์เกม ZAP-Hosting ของคุณ

| การกระทำ | จำเป็นต้องทำ |
| --- | --- |
| บันทึกไฟล์ `PalWorldSettings.ini` | ใช่ |
| รีสตาร์ทเซิร์ฟเวอร์ | ใช่ |
| รันคำสั่งคอนโซลเพิ่มเติม | ไม่จำเป็น |

:::tip ชื่อเซิร์ฟเวอร์อัปเดตช้าในตัวเลือกเกม
หลังรีสตาร์ท ชื่อเซิร์ฟเวอร์ที่อัปเดตอาจไม่แสดงทันทีสำหรับผู้เล่นทุกคนในตัวเลือกเซิร์ฟเวอร์เกม หากจำเป็น ให้รอสักครู่แล้วรีเฟรชรายการเซิร์ฟเวอร์
:::

## ตรวจสอบชื่อเซิร์ฟเวอร์ใหม่

เมื่อเซิร์ฟเวอร์รีสตาร์ทเสร็จ:

1. เปิดเกม Palworld
2. เข้าไปที่ตัวเลือกเซิร์ฟเวอร์มัลติเพลเยอร์
3. ค้นหาชื่อที่คุณตั้งค่าใน `ServerName`

ถ้าชื่อเก่ายังแสดงอยู่ ให้เปิดไฟล์ `PalWorldSettings.ini` อีกครั้งและตรวจสอบว่า:
- ค่า `ServerName` ถูกเปลี่ยนแปลงอย่างถูกต้อง
- ไฟล์ถูกบันทึกเรียบร้อยแล้ว
- เซิร์ฟเวอร์ถูกรีสตาร์ทเต็มที่หลังจากเปลี่ยนแปลง

## Conclusion

ยินดีด้วย คุณได้เปลี่ยนชื่อเซิร์ฟเวอร์ Palworld ของคุณเรียบร้อยแล้ว สำหรับคำถามหรือความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂