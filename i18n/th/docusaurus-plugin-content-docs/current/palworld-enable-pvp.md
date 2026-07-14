---
id: palworld-enable-pvp
title: "Palworld: เปิดใช้งาน PvP"
description: "เรียนรู้วิธีเปิดใช้งาน PvP ใน Palworld ตั้งค่าพฤติกรรมการต่อสู้ฐาน และใช้การตั้งค่า PvP ที่แนะนำบนเซิร์ฟเวอร์ของคุณ -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld: เปิดใช้งาน PvP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld มีโหมด PvP ที่ให้ผู้เล่นต่อสู้กันเองและเปลี่ยนแปลงวิธีการทำงานของการต่อสู้ฐานและการโต้ตอบของกิลด์บนเซิร์ฟเวอร์ของคุณ ในคู่มือนี้ คุณจะได้เรียนรู้วิธีเปิดใช้งาน PvP ด้วยตนเองโดยแก้ไขไฟล์คอนฟิกที่ถูกต้องในแผงควบคุมเซิร์ฟเวอร์เกม ZAP-Hosting และตั้งค่าที่จำเป็น

:::caution Trial Feature Notice
PvP ใน Palworld ถือเป็นฟีเจอร์ทดลองโดยผู้พัฒนาเกม ตัวเลือกการตั้งค่าและพฤติกรรมการเล่นอาจเปลี่ยนแปลงได้ในการอัปเดตเกมในอนาคต
:::

## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่า:

- คุณสามารถเข้าถึงเซิร์ฟเวอร์เกม Palworld ของคุณผ่านเว็บอินเทอร์เฟซ ZAP-Hosting
- เซิร์ฟเวอร์ของคุณถูกหยุดทำงานอยู่หรือสามารถรีสตาร์ทได้หลังจากเปลี่ยนแปลง
- คุณเข้าใจว่า PvP จะเปลี่ยนแปลงการเล่นเกมอย่างมาก โดยเฉพาะเรื่องการต่อสู้ระหว่างผู้เล่น การป้องกันฐาน และการสูญเสียไอเท็มเมื่อเสียชีวิต

:::info Configuration Access
สำหรับเซิร์ฟเวอร์ Palworld ของ ZAP-Hosting ไฟล์คอนฟิกที่เกี่ยวข้องสามารถเข้าถึงได้ผ่านแผงควบคุมเซิร์ฟเวอร์เกมในเมนู `Configs`
:::

## เปิดไฟล์คอนฟิก Palworld

เพื่อเปิดใช้งาน PvP คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

### ค้นหาไฟล์ในอินเทอร์เฟซ ZAP-Hosting

1. เข้าสู่ระบบเว็บอินเทอร์เฟซ ZAP-Hosting
2. เปิดเซิร์ฟเวอร์เกม Palworld ของคุณ
3. ไปที่เมนู `Configs` ในแผงควบคุมเซิร์ฟเวอร์เกม
4. เปิดไฟล์ `PalWorldSettings.ini`

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note รูปแบบการตั้งค่า
การตั้งค่าเซิร์ฟเวอร์ Palworld มักจะเก็บไว้ในส่วน `OptionSettings=(...)` ของไฟล์ `PalWorldSettings.ini` คุณต้องเพิ่มหรือปรับแต่งคีย์ที่จำเป็นภายในบล็อกการตั้งค่านี้
:::

## เปิดใช้งานการตั้งค่า PvP ที่จำเป็น

เพื่อเปิดใช้งาน PvP คุณต้องแน่ใจว่าการตั้งค่าต่อไปนี้ใน `PalWorldSettings.ini` ถูกตั้งค่าเป็น `True` ทั้งสามรายการ

### คีย์ PvP ที่จำเป็น

| การตั้งค่า | ค่าที่ต้องการ | คำอธิบาย |
|---|---|---|
| `bIsPvP` | `True` | เปิดโหมด PvP บนเซิร์ฟเวอร์ |
| `bEnablePlayerToPlayerDamage` | `True` | อนุญาตให้ผู้เล่นทำความเสียหายต่อกันโดยตรง |
| `bEnableDefenseOtherGuildPlayer` | `True` | อนุญาตการป้องกันที่เกี่ยวข้องกับผู้เล่นกิลด์อื่น |

### ตัวอย่างการตั้งค่า

เพิ่มค่าต่อไปนี้ในบรรทัด `OptionSettings=(...)` หรือแก้ไขค่าที่มีอยู่แล้วถ้ามี:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip หลีกเลี่ยงคีย์ซ้ำ
ถ้ามีการตั้งค่าอยู่แล้วใน `PalWorldSettings.ini` ให้แก้ไขค่าที่มีอยู่แทนการเพิ่มคีย์เดียวกันซ้ำ การมีรายการซ้ำอาจทำให้เกิดพฤติกรรมที่ไม่คาดคิดหรือทำให้การแก้ไขปัญหาทำได้ยากขึ้น
:::

## การตั้งค่า PvP ที่แนะนำ

เมื่อเปิดใช้งาน PvP แล้ว คุณยังสามารถปรับแต่งการตั้งค่าเพิ่มเติมเพื่อประสบการณ์ PvP ที่สมดุลมากขึ้น ค่าต่อไปนี้เป็นค่าที่แนะนำสำหรับเซิร์ฟเวอร์ที่เน้น PvP

### ค่าที่แนะนำ

| การตั้งค่า | ค่าที่แนะนำ | คำอธิบาย |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | ป้องกันการเพิ่มค่าสถานะ HP |
| `bAllowEnhanceStat_Attack` | `False` | ป้องกันการเพิ่มค่าสถานะโจมตี |
| `bEnableFastTravel` | `True` | เปิดใช้งานการเดินทางเร็ว |
| `bEnableFastTravelOnlyBaseCamp` | `True` | จำกัดการเดินทางเร็วเฉพาะฐานหลัก |
| `bExistPlayerAfterLogout` | `True` | ให้ผู้เล่นยังคงอยู่ในโลกหลังออกจากระบบ |
| `bEnableAimAssistPad` | `False` | ปิดการช่วยเล็งสำหรับคอนโทรลเลอร์ |
| `DeathPenalty` | `All` | ทิ้งไอเท็มและ Pals ทั้งหมดเมื่อเสียชีวิต |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | อนุญาตเก็บไอเท็มที่ผู้เล่นกิลด์อื่นทิ้ง |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | แสดงพื้นที่ฐานของกิลด์อื่น |
| `bBuildAreaLimit` | `True` | ช่วยป้องกันการสร้างในพื้นที่จำกัด |
| `GuildPlayerMaxNum` | `4` | จำกัดขนาดกิลด์ |
| `BaseCampMaxNumInGuild` | `2` | จำกัดจำนวนฐานต่อกิลด์ |
| `MaxBuildingLimitNum` | `1000` | จำกัดจำนวนโครงสร้างต่อผู้เล่น |
| `GuildRejoinCooldownMinutes` | `60` | ตั้งเวลาคูลดาวน์การเข้าร่วมกิลด์ใหม่ |
| `BlockRespawnTime` | `5.0` | ตั้งเวลาหน่วงก่อนเกิดใหม่ที่ฐาน |
| `RespawnPenaltyDurationThreshold` | `1800.0` | เวลาก่อนรีเซ็ตโทษการเกิดใหม่ |
| `RespawnPenaltyTimeScale` | `2.0` | คูณโทษการเกิดใหม่หลังตายซ้ำ |

### ตัวอย่างบล็อกการตั้งค่า PvP

ถ้าคุณต้องการใช้ค่าที่แนะนำ ให้เพิ่มรายการต่อไปนี้ในส่วน `OptionSettings=(...)` ของคุณ:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## การจำกัดและรางวัล PvP ที่เลือกได้

ขึ้นอยู่กับว่าคุณต้องการให้เซิร์ฟเวอร์ PvP แข่งขันแค่ไหน คุณยังสามารถตั้งค่าการจำกัดเทคโนโลยีและรางวัล PvP ได้

### จำกัดเทคโนโลยีเคลื่อนที่เร็ว

คุณสามารถจำกัดเทคโนโลยีที่เกี่ยวกับการเคลื่อนที่บางอย่างโดยตั้งค่า `DenyTechnologyList`

| การตั้งค่า | ตัวอย่างค่า |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

ตัวอย่างรายการ:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note ตรวจสอบรูปแบบที่มีอยู่
รูปแบบการตั้งค่า Palworld อาจแตกต่างกันตามเวอร์ชันเซิร์ฟเวอร์ปัจจุบันและวิธีการจัดรูปแบบบรรทัด `OptionSettings=(...)` ที่มีอยู่ ก่อนบันทึก ให้แน่ใจว่ารายการของคุณตรงกับรูปแบบที่ใช้ในไฟล์ของคุณแล้ว
:::

### ตั้งค่าการดรอปรางวัล PvP

Palworld ยังมีตัวเลือกของรางวัลที่เกี่ยวข้องกับการฆ่าผู้เล่นในโหมด PvP

| การตั้งค่า | คำอธิบาย |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | เปิดใช้งานการดรอปไอเท็มเพิ่มเติมเมื่อฆ่าในโหมด PvP |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | กำหนด ID ไอเท็มที่จะดรอป |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | กำหนดจำนวนไอเท็มที่จะดรอป |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | แสดงจำนวนไอเท็ม PvP บนแผนที่โลกสำหรับฐาน |
| `bDisplayPvPItemNumOnWorldMap_Player` | แสดงจำนวนไอเท็ม PvP บนแผนที่โลกสำหรับผู้เล่น |

ตัวอย่างการตั้งค่า:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution ความเข้ากันได้ของ ID ไอเท็ม
ถ้าคุณใช้ค่าที่กำหนดเองสำหรับ `AdditionalDropItemWhenPlayerKillingInPvPMode` ให้แน่ใจว่า ID ไอเท็มนั้นถูกต้องสำหรับเวอร์ชัน Palworld ปัจจุบันของคุณ ไอดีไอเท็มที่ไม่ถูกต้องอาจทำให้การตั้งค่าไม่ทำงานหรือถูกละเลย
:::

## สิ่งที่เปลี่ยนแปลงเมื่อเปิดใช้งาน PvP

หลังจากเปิดใช้งาน PvP การเล่นเกมบนเซิร์ฟเวอร์ของคุณจะเปลี่ยนแปลงในหลายๆ ด้านสำคัญ ตามคำแนะนำ PvP ของ Palworld ที่เผยแพร่สาธารณะในปัจจุบัน คุณสามารถคาดหวังพฤติกรรมดังนี้:

- ผู้เล่นสามารถทำความเสียหายต่อกันได้
- การเข้าไปในฐานของผู้เล่นอื่นอาจทำให้ Pals ในฐานนั้นกลายเป็นศัตรู
- ผู้เล่นที่บินและ Pals ที่ขี่อาจได้รับความเสียหายเพิ่มขึ้น
- Pals ที่ถูกเรียกและ Pals ในฐานอาจได้รับความเสียหายน้อยลง
- ผู้เล่นอาจเข้าถึงหีบที่เป็นของกิลด์อื่นได้
- ความเสียหายจากอาวุธประชิดต่อโครงสร้างของผู้เล่นอื่นอาจลดลง
- Pals ในฐานอาจป้องกันในพื้นที่กว้างขึ้น
- ระยะห่างที่อนุญาตระหว่างฐานเพื่อนบ้านอาจเพิ่มขึ้น
- ผู้เล่นอาจได้รับการแจ้งเตือนเมื่อฐานถูกโจมตี
- การสร้างและซ่อมแซมอาจถูกจำกัดในช่วงที่ฐานถูกโจมตี
- อาวุธบางชนิดอาจมีระยะหรือความเสียหายที่เปลี่ยนแปลงในโหมด PvP

:::danger เตือนผลกระทบต่อการเล่นเกม
การเปิดใช้งาน PvP อาจเปลี่ยนแปลงการพัฒนาเกม ความปลอดภัยของฐาน และการรักษาผู้เล่นบนเซิร์ฟเวอร์ของคุณอย่างมาก หากคุณเปิดเซิร์ฟเวอร์สาธารณะ แนะนำให้แจ้งผู้เล่นก่อนทำการเปลี่ยนแปลงเหล่านี้
:::

## บันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์

หลังจากแก้ไขไฟล์ `PalWorldSettings.ini` เสร็จแล้ว ให้บันทึกไฟล์ในเมนู `Configs` ของ ZAP-Hosting

### ใช้การเปลี่ยนแปลง

เพื่อเปิดใช้งานการตั้งค่า PvP ใหม่:

1. บันทึกการเปลี่ยนแปลงใน `PalWorldSettings.ini`
2. รีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณจากแผงควบคุมเซิร์ฟเวอร์เกม ZAP-Hosting

การรีสตาร์ทจำเป็นเพื่อให้การตั้งค่ามีผล

:::info ไม่ต้องใช้คำสั่งเพิ่มเติม
โดยปกติไม่ต้องใช้คำสั่งในเกมหรือคอนโซลเพิ่มเติมหลังจากแก้ไข `PalWorldSettings.ini` ขั้นตอนที่จำเป็นคือการรีสตาร์ทเซิร์ฟเวอร์ทั้งหมดเพื่อใช้การตั้งค่า PvP ใหม่
:::

## ตรวจสอบว่า PvP เปิดใช้งานแล้ว

หลังจากเซิร์ฟเวอร์รีสตาร์ท ให้เข้าร่วมเซิร์ฟเวอร์และทดสอบพฤติกรรมในเกม

### การตรวจสอบพื้นฐาน

คุณสามารถตรวจสอบการตั้งค่าโดยดูว่า:

- ผู้เล่นสามารถทำความเสียหายต่อกันได้หรือไม่
- พฤติกรรมฐานที่เกี่ยวข้องกับ PvP ทำงานหรือไม่
- โทษการตายและกฎการเก็บของตรงกับค่าที่ตั้งไว้หรือไม่
- การจำกัดเสริม เช่น `DenyTechnologyList` ทำงานตามที่คาดไว้หรือไม่

ถ้าการเปลี่ยนแปลงไม่ถูกนำไปใช้ ให้เปิดไฟล์ `PalWorldSettings.ini` อีกครั้งและตรวจสอบว่า:

- ชื่อการตั้งค่าไม่มีการสะกดผิด
- ไม่มีคีย์ซ้ำ
- ไม่มีเครื่องหมายจุลภาคหรือรูปแบบผิดใน `OptionSettings=(...)`
- ค่าถูกบันทึกอย่างถูกต้องก่อนรีสตาร์ท

## Conclusion

Congratulations, you have successfully enabled PvP on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂