---
id: palworld-faster-egg-hatching
title: "Palworld: เร่งเวลาฟักไข่"
description: "เรียนรู้วิธีลดเวลาฟักไข่ใน Palworld โดยแก้ไขการตั้งค่าเซิร์ฟเวอร์ Palworld เพื่อให้ฟักไข่ได้เร็วขึ้น -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld: เร่งเวลาฟักไข่
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

ใน Palworld เวลาฟักไข่จะถูกควบคุมผ่านค่าการตั้งค่าเซิร์ฟเวอร์ ในคู่มือนี้ คุณจะได้เรียนรู้วิธีลดเวลาฟักไข่บนเซิร์ฟเวอร์เกม Palworld ของคุณที่ ZAP-Hosting โดยการแก้ไขไฟล์คอนฟิกที่ถูกต้องและใช้การเปลี่ยนแปลงอย่างถูกวิธี



## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่า:

- คุณสามารถเข้าถึงเว็บอินเทอร์เฟซของเซิร์ฟเวอร์เกม ZAP-Hosting ของคุณได้
- เซิร์ฟเวอร์ Palworld ของคุณพร้อมใช้งานในระบบจัดการเซิร์ฟเวอร์เกม
- คุณสามารถแก้ไขไฟล์ในส่วน **Configs** ได้

:::info การเข้าถึงไฟล์คอนฟิก
สำหรับ Palworld บน ZAP-Hosting การตั้งค่าเซิร์ฟเวอร์ที่เกี่ยวข้องสามารถแก้ไขได้ผ่านระบบจัดการเซิร์ฟเวอร์เกมในส่วน **Configs** สำหรับงานนี้ คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`
:::

## Understanding the Egg Hatching Setting

Palworld ใช้การตั้งค่า `PalEggDefaultHatchingTime` เพื่อกำหนดเวลาฟักไข่พื้นฐานเป็นชั่วโมง ค่ายิ่งต่ำหมายความว่าไข่จะฟักได้เร็วขึ้น

ตามการอ้างอิงการตั้งค่าเซิร์ฟเวอร์ Palworld ปัจจุบัน ค่าเริ่มต้นคือ `72` ซึ่งหมายถึง 72 ชั่วโมงสำหรับไข่ขนาดใหญ่ (Huge Egg) ไข่ประเภทอื่นจะปรับสเกลตามค่านี้

| Config key | ค่าเริ่มต้น | คำอธิบาย |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | เวลาฟักไข่พื้นฐานเป็นชั่วโมง |

:::note วิธีการทำงานของการตั้งค่า
ค่านี้จะส่งผลต่อกระบวนการฟักไข่ทั่วไปบนเซิร์ฟเวอร์ของคุณ หากลดค่านี้ ไข่จะฟักได้เร็วขึ้นสำหรับผู้เล่นทุกคนที่ใช้เครื่องฟักไข่
:::

## Open the Palworld Configuration File

ก่อนอื่น คุณต้องเข้าถึงไฟล์คอนฟิกที่ถูกต้องในอินเทอร์เฟซ ZAP-Hosting

### Navigate to the Configs Section

เปิดระบบจัดการเซิร์ฟเวอร์เกม Palworld ของคุณและไปที่ส่วน **Configs** จากนั้นค้นหาและเปิดไฟล์ชื่อ:

```ini
PalWorldSettings.ini
```

ไฟล์นี้เป็นไฟล์ที่เก็บการตั้งค่าเกมเพลย์สำหรับเซิร์ฟเวอร์ Palworld ของคุณ รวมถึงการตั้งค่าเวลาฟักไข่ด้วย



## Edit the Egg Hatching Time

เมื่อเปิดไฟล์ `PalWorldSettings.ini` แล้ว ให้ค้นหาบรรทัด `OptionSettings` Palworld จะเก็บการตั้งค่าเกมเพลย์หลายอย่างไว้ในส่วนนี้

### Change the Required Config Key

ค้นหาค่าดังนี้:

```ini
PalEggDefaultHatchingTime=72.000000
```

เปลี่ยนค่าเป็นตัวเลขที่ต่ำกว่าเพื่อให้ไข่ฟักได้เร็วขึ้น

ตัวอย่างเช่น:

```ini
PalEggDefaultHatchingTime=24.000000
```

จะลดเวลาฟักไข่พื้นฐานจาก 72 ชั่วโมงเหลือ 24 ชั่วโมง

### Example Values

คุณสามารถใช้ค่าต่าง ๆ ตามความเร็วที่ต้องการให้ไข่ฟักบนเซิร์ฟเวอร์ของคุณ

| ค่า | ผลลัพธ์ |
| --- | --- |
| `72.000000` | เวลาฟักไข่เริ่มต้น |
| `48.000000` | ลดเวลาช้า ๆ เพื่อความสมดุลของเกม |
| `24.000000` | ฟักไข่เร็วขึ้นมาก |
| `12.000000` | ฟักไข่เร็วมาก |
| `1.000000` | ฟักไข่เร็วสุด ๆ |

:::caution ใช้ค่าให้สมเหตุสมผล
ค่าต่ำมากอาจเปลี่ยนสมดุลเกมอย่างมาก หากต้องการความก้าวหน้าที่เป็นธรรมชาติ แนะนำเริ่มต้นที่ค่า 24.000000 หรือ 48.000000
:::

### Example Configuration Snippet

ขึ้นอยู่กับการตั้งค่าปัจจุบันของคุณ การตั้งค่านี้จะอยู่ในบล็อก `OptionSettings` ตัวอย่างทั่วไปจะมีลักษณะดังนี้:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip แก้ไขค่าให้ถูกต้อง
ถ้าคีย์ `PalEggDefaultHatchingTime` มีอยู่แล้ว ให้แก้ไขค่าเดิมแทนการเพิ่มค่าใหม่ การมีค่าซ้ำในบล็อก `OptionSettings` เดียวกันอาจทำให้การตั้งค่าถูกละเลยหรือถูกเขียนทับ
:::

## Save and Apply the Changes

หลังจากแก้ไขค่าแล้ว ให้บันทึกไฟล์ `PalWorldSettings.ini` ในอินเทอร์เฟซ ZAP-Hosting

### Restart the Server

เมื่อบันทึกไฟล์เสร็จแล้ว ให้รีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณเพื่อให้เวลาฟักไข่ใหม่ถูกโหลด

:::info ต้องรีสตาร์ทเซิร์ฟเวอร์
การตั้งค่าใหม่จะไม่ถูกนำไปใช้จนกว่าเซิร์ฟเวอร์จะถูกรีสตาร์ท
:::

## Important Behavior for Existing Eggs

ถ้ามีไข่ที่กำลังฟักอยู่แล้ว ค่าเวลาฟักไข่ใหม่จะไม่อัปเดตอย่างน่าเชื่อถือสำหรับไข่ที่กำลังฟักอยู่จริง ในทางปฏิบัติ คุณควรถอดและเริ่มกระบวนการฟักไข่ใหม่สำหรับไข่ที่ได้รับผลกระทบเพื่อให้ค่าใหม่ถูกนำไปใช้

| สถานการณ์ | การดำเนินการที่ต้องทำ |
| --- | --- |
| ไข่ใหม่ที่วางหลังจากเปลี่ยนค่า | ไม่ต้องทำอะไรเพิ่มเติมหลังรีสตาร์ท |
| ไข่ที่กำลังฟักก่อนเปลี่ยนค่า | ต้องเริ่มฟักไข่ใหม่สำหรับไข่เหล่านั้น |

:::note ตัวจับเวลาฟักไข่ที่มีอยู่
ถ้าคุณเปลี่ยนเวลาฟักไข่แล้วไม่เห็นผลลัพธ์ตามคาด ให้ตรวจสอบว่าไข่ถูกฟักอยู่ก่อนเปลี่ยนการตั้งค่าหรือไม่
:::

## Conclusion

ยินดีด้วย คุณได้ลดเวลาฟักไข่บนเซิร์ฟเวอร์ Palworld ของคุณเรียบร้อยแล้ว สำหรับคำถามหรือความช่วยเหลือเพิ่มเติม กรุณาติดต่อทีมซัพพอร์ตของเราได้เลย ทีมงานพร้อมช่วยเหลือคุณทุกวัน! 🙂