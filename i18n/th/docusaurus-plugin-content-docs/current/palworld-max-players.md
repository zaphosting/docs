---
id: palworld-max-players
title: "Palworld: Max Players"
description: "Learn how to change the Palworld max players setting on your Palworld game server by editing the correct config file in the ZAP interface. -> Learn more now"
sidebar_label: Palworld: Max Players
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ช่วยให้คุณควบคุมจำนวนผู้เล่นที่สามารถเข้าร่วมเซิร์ฟเวอร์ได้พร้อมกัน ในคู่มือนี้ คุณจะได้เรียนรู้วิธีเปลี่ยนจำนวนผู้เล่นสูงสุดด้วยตนเองโดยการแก้ไขไฟล์คอนฟิกที่ถูกต้องในแผงควบคุมเซิร์ฟเวอร์เกมของ ZAP-Hosting

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณมีสิทธิ์เข้าถึงการจัดการเซิร์ฟเวอร์เกม Palworld ของคุณผ่านเว็บอินเทอร์เฟซของ ZAP-Hosting

:::info การเข้าถึงไฟล์คอนฟิก
คุณต้องแก้ไขการตั้งค่าเซิร์ฟเวอร์ด้วยตนเองผ่านส่วน **Configs** ในแผงควบคุมเซิร์ฟเวอร์เกมของคุณ หากคุณยังไม่ทราบวิธีเข้าถึงเซิร์ฟเวอร์เกม ให้เปิดเซิร์ฟเวอร์จากเว็บอินเทอร์เฟซของ ZAP-Hosting ก่อน
:::

## Locate the Palworld Configuration File

เพื่อเปลี่ยนจำนวนผู้เล่นสูงสุด คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

ในแผงควบคุมเซิร์ฟเวอร์เกมของ ZAP-Hosting:

1. เปิดเซิร์ฟเวอร์ **Palworld** ของคุณ
2. ไปที่ **Configs**
3. เปิดไฟล์ชื่อ `PalWorldSettings.ini`

ไฟล์นี้เก็บการตั้งค่าหลักของเกมและเซิร์ฟเวอร์ รวมถึงจำนวนผู้เล่นสูงสุดที่อนุญาต

:::note ไฟล์ที่ถูกต้อง
สำหรับการเปลี่ยนแปลงนี้ คุณควรแก้ไขเฉพาะไฟล์ `PalWorldSettings.ini` เท่านั้น หากเซิร์ฟเวอร์ของคุณมีไฟล์อื่นเพิ่มเติม อย่าเปลี่ยนค่าที่ไม่เกี่ยวข้องเว้นแต่คุณจะรู้ว่าค่าดังกล่าวทำงานอย่างไร
:::

## Change the Maximum Player Count

ในไฟล์ `PalWorldSettings.ini` ให้ค้นหาส่วน `OptionSettings` และหาคีย์ `ServerPlayerMaxNum`

การตั้งค่าที่เกี่ยวข้องคือ:

| Config key | คำอธิบาย | ค่าเริ่มต้น |
| --- | --- | --- |
| `ServerPlayerMaxNum` | กำหนดจำนวนผู้เล่นสูงสุดที่สามารถเข้าร่วมเซิร์ฟเวอร์ได้ | `32` |

ตัวอย่างการตั้งค่าจะเป็นแบบนี้:

```ini
ServerPlayerMaxNum=32
```

เปลี่ยนค่าเป็นจำนวนผู้เล่นที่คุณต้องการ เช่น หากต้องการอนุญาต 16 ผู้เล่น:

```ini
ServerPlayerMaxNum=16
```

หรือถ้าต้องการใช้ค่าเริ่มต้น 32 ผู้เล่น:

```ini
ServerPlayerMaxNum=32
```

:::caution ใช้ค่าที่รองรับ
เซิร์ฟเวอร์เฉพาะ Palworld ส่วนใหญ่ใช้ค่าเริ่มต้นที่ `32` เป็นจำนวนสูงสุด หากคุณตั้งค่าสูงกว่านี้มาก อาจส่งผลต่อความเสถียรหรือประสิทธิภาพของเซิร์ฟเวอร์ ขึ้นอยู่กับแผนของคุณและเวอร์ชันเกมปัจจุบัน หากไม่แน่ใจ ให้เริ่มจากค่าน้อยและทดสอบเซิร์ฟเวอร์ก่อน
:::

## Example Configuration

ขึ้นอยู่กับรูปแบบไฟล์ของคุณ การตั้งค่าอาจอยู่ในบรรทัด `OptionSettings` ที่ยาวกว่า ในกรณีนั้น คุณเพียงแค่เปลี่ยนค่าของ `ServerPlayerMaxNum`

ตัวอย่าง:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

ถ้าไฟล์ของคุณใช้รูปแบบนี้ อย่าลบเครื่องหมายจุลภาค วงเล็บ หรือเครื่องหมายคำพูดในรายการอื่น ๆ ให้เปลี่ยนแค่ตัวเลขหลัง `ServerPlayerMaxNum=` เท่านั้น

## Save and Apply the Changes

หลังจากเปลี่ยนค่าแล้ว:

1. บันทึกไฟล์ `PalWorldSettings.ini`
2. รีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณ

ต้องรีสตาร์ทเซิร์ฟเวอร์เพื่อให้จำนวนผู้เล่นสูงสุดใหม่มีผล

| การกระทำ | จำเป็นหรือไม่ |
| --- | --- |
| บันทึกไฟล์ `PalWorldSettings.ini` | ใช่ |
| รันคำสั่งคอนโซลเพิ่มเติม | ไม่มีคำสั่งเพิ่มเติมที่ยืนยันว่าจำเป็น |
| รีสตาร์ทเซิร์ฟเวอร์ | ใช่ |

:::tip ต้องรีสตาร์ทเซิร์ฟเวอร์
การเปลี่ยนแปลงการตั้งค่า `ServerPlayerMaxNum` จะไม่ถูกนำไปใช้ทันทีขณะที่เซิร์ฟเวอร์กำลังทำงาน คุณต้องรีสตาร์ทเซิร์ฟเวอร์เพื่อให้ Palworld โหลดการตั้งค่าใหม่
:::

## Verify the New Player Limit

หลังรีสตาร์ท เซิร์ฟเวอร์ของคุณควรใช้จำนวนผู้เล่นสูงสุดใหม่

คุณสามารถตรวจสอบได้โดย:

- ดูรายละเอียดเซิร์ฟเวอร์ในแผงควบคุมเซิร์ฟเวอร์เกมหากแสดงข้อมูลนี้
- เข้าร่วมเซิร์ฟเวอร์พร้อมผู้เล่นหลายคน
- ตรวจสอบการตั้งค่าปัจจุบันอีกครั้งในไฟล์ `PalWorldSettings.ini`

ถ้าการตั้งค่าไม่ถูกนำไปใช้ ให้เปิดไฟล์อีกครั้งและตรวจสอบว่า:

- มีบรรทัด `ServerPlayerMaxNum=[your_value]` อยู่จริง
- รูปแบบไฟล์ไม่เสียหาย
- เซิร์ฟเวอร์ถูกรีสตาร์ทอย่างสมบูรณ์หลังจากบันทึกไฟล์

:::caution ไวยากรณ์การตั้งค่า
หากคุณเผลอลบเครื่องหมายจุลภาค วงเล็บ หรือค่าตัวอื่นในบรรทัด `OptionSettings` เซิร์ฟเวอร์อาจไม่สนใจการตั้งค่านี้หรือโหลดคอนฟิกผิดพลาด แก้ไขไฟล์อย่างระมัดระวังและเปลี่ยนแค่ค่าที่จำเป็นเท่านั้น
:::

## Conclusion

ยินดีด้วย คุณได้เปลี่ยนจำนวนผู้เล่นสูงสุดบนเซิร์ฟเวอร์ Palworld ของคุณเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂