---
id: palworld-set-a-password
title: "Palworld: ตั้งรหัสผ่าน"
description: "เรียนรู้วิธีตั้งรหัสผ่านเซิร์ฟเวอร์ Palworld โดยแก้ไขการตั้งค่าเกม Palworld ด้วยตนเองและใช้การเปลี่ยนรหัสผ่านอย่างถูกต้อง -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld: ตั้งรหัสผ่าน
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ให้คุณปกป้องเซิร์ฟเวอร์ด้วยรหัสผ่านเพื่อให้เฉพาะผู้เล่นที่ได้รับอนุญาตเท่านั้นที่สามารถเข้าร่วมได้ ในคู่มือนี้ คุณจะได้เรียนรู้วิธีตั้งหรือเปลี่ยนรหัสผ่านเซิร์ฟเวอร์ด้วยตนเองในไฟล์การตั้งค่าเซิร์ฟเวอร์เกม Palworld ของคุณบน ZAP-Hosting และใช้รหัสผ่านอย่างถูกต้อง



## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่า:

- เซิร์ฟเวอร์เกม Palworld ของคุณออนไลน์ในเว็บอินเทอร์เฟซของ ZAP-Hosting
- คุณมีสิทธิ์เข้าถึงการจัดการเซิร์ฟเวอร์เกม
- คุณทราบรหัสผ่านที่ต้องการใช้สำหรับการเข้าถึงเซิร์ฟเวอร์

:::info ต้องตั้งค่าด้วยตนเอง
สำหรับ Palworld รหัสผ่านสามารถตั้งค่าได้ด้วยตนเองผ่านไฟล์การตั้งค่าเซิร์ฟเวอร์ ในอินเทอร์เฟซของ ZAP-Hosting คุณสามารถเข้าถึงไฟล์เหล่านี้ได้ผ่านการจัดการเซิร์ฟเวอร์เกมของคุณในเมนู `Configs`
:::

## เปิดไฟล์การตั้งค่า Palworld

เพื่อกำหนดรหัสผ่านสำหรับเซิร์ฟเวอร์ Palworld ของคุณ คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

### ค้นหาไฟล์ในอินเทอร์เฟซ ZAP-Hosting

1. เข้าสู่ระบบเว็บอินเทอร์เฟซของ ZAP-Hosting
2. เปิดการจัดการเซิร์ฟเวอร์เกม **Palworld** ของคุณ
3. ไปที่เมนู **Configs**
4. เปิดไฟล์ `PalWorldSettings.ini`

ไฟล์นี้เก็บการตั้งค่าเซิร์ฟเวอร์หลักของ Palworld รวมถึงรายการที่ควบคุมว่าต้องใช้รหัสผ่านก่อนเข้าร่วมเซิร์ฟเวอร์หรือไม่

:::note จุดประสงค์ของไฟล์การตั้งค่า
ไฟล์ `PalWorldSettings.ini` จะเก็บตัวเลือกเซิร์ฟเวอร์ในบรรทัดการตั้งค่าเดียว โดยปกติจะอยู่ในส่วน `OptionSettings=(...)` คุณต้องแก้ไขค่าของ `ServerPassword` ที่นั่น
:::

## แก้ไขรหัสผ่านเซิร์ฟเวอร์

เมื่อเปิดไฟล์ `PalWorldSettings.ini` แล้ว ให้ค้นหารายการ `ServerPassword`

### รายการการตั้งค่าที่ต้องใช้

ใช้ค่าดังนี้:

```ini
ServerPassword="[your_password]"
```

แทนที่ `[your_password]` ด้วยรหัสผ่านที่คุณต้องการให้ผู้เล่นกรอกเมื่อเข้าร่วมเซิร์ฟเวอร์ของคุณ

ถ้ารหัสผ่านยังไม่ถูกเปิดใช้งาน ค่าจะเป็นแบบนี้:

```ini
ServerPassword=""
```

ค่าว่างหมายความว่าไม่มีการตั้งรหัสผ่านสำหรับเข้าร่วมเซิร์ฟเวอร์

### ตัวอย่างการตั้งค่า

ใน Palworld การตั้งค่านี้มักจะเป็นส่วนหนึ่งของบล็อก `OptionSettings=(...)` ซึ่งอาจมีลักษณะคล้ายกับนี้:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution อย่าลบหรือแก้ไขรูปแบบเดิม
เปลี่ยนแค่ค่าภายใน `ServerPassword="..."` เท่านั้น ห้ามลบเครื่องหมายจุลภาค เครื่องหมายคำพูด วงเล็บ หรือรายการอื่นในบรรทัด `OptionSettings=(...)` เพราะจะทำให้เซิร์ฟเวอร์โหลดการตั้งค่าไม่ถูกต้อง
:::

## อ้างอิงการตั้งค่า

ตารางต่อไปนี้แสดงการตั้งค่าที่เกี่ยวข้องกับการเปลี่ยนรหัสผ่านนี้:

| การตั้งค่า | ตัวอย่างค่า | จุดประสงค์ |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | บังคับให้ผู้เล่นกรอกรหัสผ่านก่อนเข้าร่วมเซิร์ฟเวอร์ |

### คำแนะนำเกี่ยวกับรหัสผ่าน

เมื่อเลือกใช้รหัสผ่าน ให้คำนึงถึงข้อแนะนำเหล่านี้:

| คำแนะนำ | คำอธิบาย |
| --- | --- |
| ใช้รหัสผ่านที่ไม่ซ้ำใคร | หลีกเลี่ยงการใช้รหัสผ่านเดียวกับบัญชีบริการอื่น |
| หลีกเลี่ยงคำง่ายๆ | รหัสผ่านง่ายจะถูกเดาได้ง่ายกว่า |
| แชร์กับผู้เล่นที่ไว้ใจได้เท่านั้น | ใครก็ตามที่มีรหัสผ่านสามารถพยายามเข้าร่วมได้ |
| เก็บรหัสผ่านอย่างปลอดภัย | ใช้ตัวจัดการรหัสผ่านช่วยเก็บรักษาอย่างปลอดภัย |

:::tip เลือกรหัสผ่านที่แข็งแรง
ถ้าคุณวางแผนจะเปิดเซิร์ฟเวอร์ Palworld ส่วนตัวสำหรับเพื่อนหรือกลุ่มจำกัด ให้ใช้รหัสผ่านที่แข็งแรงแทนคำง่ายหรือชื่อเซิร์ฟเวอร์ เพื่อช่วยลดการพยายามเข้าร่วมที่ไม่ต้องการ
:::

## บันทึกการเปลี่ยนแปลงและรีสตาร์ทเซิร์ฟเวอร์

หลังจากแก้ไขรหัสผ่านแล้ว ให้บันทึกไฟล์ในเมนู `Configs`

### ใช้รหัสผ่านใหม่

เพื่อให้การเปลี่ยนรหัสผ่านมีผล:

1. บันทึกการเปลี่ยนแปลงในไฟล์ `PalWorldSettings.ini`
2. รีสตาร์ทเซิร์ฟเวอร์เกม Palworld ของคุณ

ต้องรีสตาร์ทเพราะ Palworld จะอ่านการตั้งค่าเซิร์ฟเวอร์จากไฟล์การตั้งค่าตอนเริ่มต้น หากไม่รีสตาร์ท รหัสผ่านใหม่อาจไม่ถูกนำไปใช้

:::info ต้องรีสตาร์ทเซิร์ฟเวอร์
หลังจากเปลี่ยนค่า `ServerPassword` คุณต้องรีสตาร์ทเซิร์ฟเวอร์ด้วยตนเองผ่านการจัดการเซิร์ฟเวอร์เกมของ ZAP-Hosting เพื่อให้การตั้งค่าใหม่ถูกโหลด
:::

## ตรวจสอบรหัสผ่าน

หลังจากรีสตาร์ทเสร็จแล้ว ให้ทดสอบการตั้งค่าโดยเข้าร่วมเซิร์ฟเวอร์จากเกม Palworld

### สิ่งที่ต้องตรวจสอบ

เมื่อเชื่อมต่อ ให้ยืนยันว่า:

- เซิร์ฟเวอร์ขอรหัสผ่านก่อนเข้าร่วม
- รหัสผ่านที่ตั้งไว้ใช้งานได้ถูกต้อง
- ผู้เล่นที่ไม่มีรหัสผ่านไม่สามารถเข้าถึงเซิร์ฟเวอร์ได้

ถ้าเซิร์ฟเวอร์ไม่ขอรหัสผ่าน ให้เปิดไฟล์ `PalWorldSettings.ini` อีกครั้งและตรวจสอบว่า:

- มีรายการ `ServerPassword` ในส่วน `OptionSettings=(...)`
- ค่ารหัสผ่านไม่ว่างเปล่า
- ไฟล์ถูกบันทึกเรียบร้อยแล้ว
- เซิร์ฟเวอร์ถูกรีสตาร์ทหลังจากเปลี่ยนแปลง

:::note รหัสผ่านแสดงเป็นข้อความธรรมดา
รหัสผ่านจะถูกเก็บในไฟล์การตั้งค่าเป็นข้อความธรรมดา โปรดแชร์สิทธิ์เข้าถึงการจัดการเซิร์ฟเวอร์กับผู้ใช้ที่ไว้ใจได้เท่านั้น
:::

## Conclusion

Congratulations, you have successfully set a password for your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂