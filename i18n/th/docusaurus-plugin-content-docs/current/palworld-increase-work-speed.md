---
id: palworld-increase-work-speed
title: "Palworld: เพิ่มความเร็วในการทำงาน"
description: "เรียนรู้วิธีเพิ่มความเร็วในการทำงานของ Palworld โดยการแก้ไขการตั้งค่า WorkSpeedRate เพื่อให้ผู้เล่นและ Pal ทำงานได้เร็วขึ้นบนเซิร์ฟเวอร์ของคุณ -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld: เพิ่มความเร็วในการทำงาน
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ให้คุณปรับความเร็วที่ผู้เล่นและ Pal ทำงานที่ฐานได้โดยการเปลี่ยนค่าการตั้งค่าเซิร์ฟเวอร์ ในคู่มือนี้ คุณจะได้เรียนรู้วิธีเพิ่มความเร็วในการทำงานบนเซิร์ฟเวอร์ Palworld ของคุณที่ ZAP-Hosting โดยการแก้ไขไฟล์คอนฟิกที่ถูกต้องและนำการเปลี่ยนแปลงไปใช้ให้ถูกต้อง

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณสามารถเข้าถึงการจัดการเซิร์ฟเวอร์เกม Palworld ของคุณผ่านเว็บอินเทอร์เฟซของ ZAP-Hosting ได้

:::info ต้องตั้งค่าด้วยตนเอง
การตั้งค่านี้ต้องทำด้วยตนเองผ่านตัวแก้ไขคอนฟิก คุณต้องแก้ไขไฟล์คอนฟิกเซิร์ฟเวอร์ Palworld ด้วยตัวเองในส่วน `Configs` ของการจัดการเซิร์ฟเวอร์เกมของคุณ
:::

## เปิดไฟล์คอนฟิก Palworld

เพื่อเปลี่ยนความเร็วในการทำงาน คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

### ไฟล์นี้อยู่ที่ไหน

1. เข้าสู่ระบบที่เว็บไซต์ ZAP-Hosting
2. เปิดการจัดการเซิร์ฟเวอร์เกม **Palworld** ของคุณ
3. ไปที่เมนู **Configs**
4. เปิดไฟล์ชื่อ `PalWorldSettings.ini`

ไฟล์นี้เก็บการตั้งค่าเกมเพลย์ที่ควบคุมอัตราและตัวคูณสำหรับเซิร์ฟเวอร์ Palworld ของคุณ

:::note ตำแหน่งไฟล์คอนฟิก
ใน ZAP-Hosting ไฟล์ที่เกี่ยวข้องกับการเปลี่ยนแปลงนี้จะอยู่ในส่วนการจัดการเซิร์ฟเวอร์เกมของคุณภายใต้ `Configs` หากเซิร์ฟเวอร์ของคุณมีหลายไฟล์คอนฟิก ให้แน่ใจว่าได้แก้ไขไฟล์ `PalWorldSettings.ini`
:::

## เปลี่ยนการตั้งค่าความเร็วในการทำงาน

การตั้งค่าที่ใช้เพิ่มความเร็วในการทำงานคือ `WorkSpeedRate`

### การตั้งค่านี้ทำอะไร

`WorkSpeedRate` ควบคุมความเร็วที่ผู้เล่นและ Pal ทำงานที่ฐาน ค่าเริ่มต้นมักจะเป็น `1.0` ซึ่งหมายถึงความเร็วปกติ

ค่ายิ่งสูงจะเพิ่มตัวคูณความเร็ว:

| คีย์คอนฟิก | ค่าเริ่มต้น | ตัวอย่างค่า | ผลลัพธ์ |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | ความเร็วงานเพิ่มเป็นสองเท่า |
| `WorkSpeedRate` | `1.0` | `10.0` | ความเร็วงานเร็วมาก |

### แก้ไขค่า

ค้นหาบรรทัด `OptionSettings` ในไฟล์ `PalWorldSettings.ini` รายการ `WorkSpeedRate` จะอยู่ในบล็อกการตั้งค่านี้

ถ้ารายการนี้มีอยู่แล้ว ให้เปลี่ยนค่า เช่น:

```ini
WorkSpeedRate=1.000000
```

เปลี่ยนเป็นค่าสูงขึ้น เช่น:

```ini
WorkSpeedRate=2.000000
```

ถ้าต้องการผลลัพธ์ที่เร็วมากขึ้น คุณสามารถใช้ตัวคูณสูงกว่า เช่น:

```ini
WorkSpeedRate=10.000000
```

### ตัวอย่างโค้ดคอนฟิก

ขึ้นอยู่กับเนื้อหาไฟล์ของคุณ การตั้งค่านี้อาจปรากฏเป็นส่วนหนึ่งของบรรทัด `OptionSettings` ที่ยาวแบบนี้:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution แก้ไขไวยากรณ์อย่างระมัดระวัง
ไฟล์ `PalWorldSettings.ini` ใช้รูปแบบที่เข้มงวด ให้แน่ใจว่าคุณเปลี่ยนแค่ค่า `WorkSpeedRate` เท่านั้น และอย่าลบเครื่องหมายจุลภาค วงเล็บ หรือเครื่องหมายคำพูดในบรรทัด `OptionSettings` รอบๆ
:::

## บันทึกและรีสตาร์ทเซิร์ฟเวอร์

หลังจากแก้ไขไฟล์แล้ว คุณต้องบันทึกการเปลี่ยนแปลงและรีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณ

### นำการเปลี่ยนแปลงไปใช้

1. บันทึกไฟล์ `PalWorldSettings.ini` ที่แก้ไขแล้ว
2. รีสตาร์ทเซิร์ฟเวอร์เกม Palworld ของคุณจากการจัดการเซิร์ฟเวอร์ ZAP-Hosting

ต้องรีสตาร์ทเพราะ Palworld จะอ่านการตั้งค่าเกมเพลย์เหล่านี้ตอนเซิร์ฟเวอร์เริ่มทำงาน ค่าใหม่ของความเร็วในการทำงานจะไม่ถูกนำไปใช้จนกว่าเซิร์ฟเวอร์จะรีสตาร์ทเสร็จ

| การกระทำ | จำเป็นหรือไม่ |
| --- | --- |
| บันทึกไฟล์ `PalWorldSettings.ini` | ใช่ |
| รีสตาร์ทเซิร์ฟเวอร์ | ใช่ |
| คำสั่งคอนโซลเพิ่มเติม | ไม่จำเป็น |

:::tip แนะนำให้ทดสอบ
เริ่มต้นด้วยค่ากลางๆ เช่น `2.0` แล้วทดสอบผลลัพธ์ในเกม ค่าที่สูงเกินไปอาจทำให้การพัฒนาเร็วเกินไป ซึ่งส่งผลต่อสมดุลเกมโดยรวมของคุณ
:::

## ตรวจสอบความเร็วในการทำงานใหม่

เมื่อเซิร์ฟเวอร์ออนไลน์อีกครั้ง ให้เข้าร่วมเซิร์ฟเวอร์ Palworld ของคุณและทดสอบกิจกรรมที่เกี่ยวกับการทำงานที่ฐาน

คุณควรสังเกตเห็นว่าผู้เล่นและ Pal ทำงานเสร็จเร็วขึ้น หากไม่เห็นการเปลี่ยนแปลง ให้เปิดไฟล์ `PalWorldSettings.ini` อีกครั้งและตรวจสอบว่า:

- มีรายการ `WorkSpeedRate`
- ค่าถูกตั้งไว้อย่างถูกต้อง
- ไฟล์ถูกบันทึกเรียบร้อยแล้ว
- เซิร์ฟเวอร์ถูกรีสตาร์ทเต็มที่หลังแก้ไข

:::note สมดุลเกมเพลย์
การเพิ่มความเร็วในการทำงานอาจเปลี่ยนแปลงความเร็วในการพัฒนาฐานของคุณอย่างมาก หากต้องการประสบการณ์ที่สมดุล ควรเพิ่มค่าทีละน้อยแทนการตั้งค่าสูงสุดทันที
:::

## Conclusion

Congratulations, you have successfully increased work speed on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂