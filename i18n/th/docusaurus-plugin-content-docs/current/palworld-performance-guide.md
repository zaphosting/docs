---
id: palworld-performance-guide
title: "Palworld: คู่มือปรับแต่งประสิทธิภาพ"
description: "ปรับปรุงประสิทธิภาพเซิร์ฟเวอร์ Palworld ลดการตกของประสิทธิภาพ และลดภาระเซิร์ฟเวอร์ด้วยการแก้ไขการตั้งค่าแบบแมนนวล -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld: คู่มือปรับแต่งประสิทธิภาพ
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

ประสิทธิภาพเซิร์ฟเวอร์ Palworld อาจลดลงเมื่อเวลาผ่านไป โดยเฉพาะเซิร์ฟเวอร์ที่มีฐานจำนวนมาก, ผู้ช่วยงาน, ไอเท็มที่หล่น และ Pals ป่า ในคู่มือนี้ คุณจะได้เรียนรู้วิธีปรับแต่งไฟล์ `PalWorldSettings.ini` ในเว็บอินเทอร์เฟซของ ZAP-Hosting เพื่อลดภาระเซิร์ฟเวอร์และเพิ่มประสิทธิภาพโดยรวม

## Preparation

ก่อนเริ่ม คุณต้องมีสิทธิ์เข้าถึงการจัดการเซิร์ฟเวอร์เกม Palworld ของคุณและสิทธิ์แก้ไขไฟล์การตั้งค่า

:::info สิทธิ์ที่ต้องมี
คุณต้องเข้าถึงเซิร์ฟเวอร์ Palworld ของคุณผ่านแผงจัดการเซิร์ฟเวอร์เกมของ ZAP-Hosting ไฟล์การตั้งค่าที่ต้องแก้ไขจะอยู่ในเมนู `Configs`
:::

:::caution สำรองข้อมูลก่อนแก้ไข
การปรับแต่งประสิทธิภาพอาจเปลี่ยนแปลงพฤติกรรมการเล่นเกมอย่างมาก ก่อนแก้ไขไฟล์การตั้งค่า แนะนำให้สำรองข้อมูลไว้ก่อน เพื่อให้สามารถกู้คืนการตั้งค่าเดิมได้หากจำเป็น
:::

## เปิดไฟล์การตั้งค่า Palworld

เพื่อปรับแต่งเซิร์ฟเวอร์ คุณต้องแก้ไขไฟล์การตั้งค่าเซิร์ฟเวอร์หลักของ Palworld

1. เข้าสู่ระบบเว็บอินเทอร์เฟซของ ZAP-Hosting
2. เปิดการจัดการเซิร์ฟเวอร์เกม **Palworld** ของคุณ
3. ไปที่เมนู **Configs**
4. เปิดไฟล์ `PalWorldSettings.ini`



:::note ตำแหน่งแก้ไข
การตั้งค่าที่เกี่ยวข้องกับประสิทธิภาพจะอยู่ในไฟล์ `PalWorldSettings.ini` คุณต้องแก้ไขค่าตัวเลือกที่มีอยู่ในไฟล์นี้ด้วยตนเอง
:::

## เข้าใจการตั้งค่าที่เกี่ยวข้อง

มีการตั้งค่าหลายอย่างใน Palworld ที่ส่งผลโดยตรงต่อประสิทธิภาพเซิร์ฟเวอร์ บางค่าช่วยลดภาระ CPU, หน่วยความจำ และการจำลองโลก ในขณะที่บางค่าช่วยจำกัดการสะสมของผู้เล่นที่ไม่ใช้งานหรือสิ่งของในโลกที่มากเกินไป

### การตั้งค่าหลักสำหรับประสิทธิภาพ

การตั้งค่าต่อไปนี้สำคัญที่สุดถ้าคุณต้องการลดการตกของประสิทธิภาพบนเซิร์ฟเวอร์ที่มีผู้เล่นเยอะ

| การตั้งค่า | ค่าเริ่มต้น | การเปลี่ยนแปลงที่แนะนำ | ผลลัพธ์ |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | ตั้งค่าเป็น `0.1` หรือสูงกว่า | การเสื่อมสภาพสูงช่วยลบโครงสร้างที่ถูกทิ้งเร็วขึ้น |
| `bAutoResetGuildNoOnlinePlayers` | `False` | ตั้งเป็น `True` หากเหมาะสม | ลบฐานกิลด์ที่ไม่มีผู้เล่นออนไลน์หลังช่วงเวลาที่กำหนด |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | ปรับตามต้องการ | กำหนดเวลาที่ไม่มีผู้เล่นออนไลน์ (ชั่วโมง) ก่อนรีเซ็ตกิลด์ |
| `PalSpawnNumRate` | `1.0` | ลดลง | ลดจำนวน Pal ป่าที่เกิดและลดภาระการจำลอง |
| `DropItemMaxNum` | `3000` | ลดลง | จำกัดจำนวนไอเท็มที่หล่นในโลก |
| `DropItemAliveMaxHours` | `1.0` | ลดลง | ลบไอเท็มที่หล่นเร็วขึ้น |
| `BaseCampMaxNumInGuild` | `4` | ลดลง | ลดจำนวนฐานกิลด์ |
| `ServerReplicatePawnCullDistance` | `15000.0` | ลดลง | ลดระยะการซิงค์ Pal และลดภาระเครือข่าย/เซิร์ฟเวอร์ |
| `BaseCampWorkerMaxNum` | `15` | ลดลง | จำกัดจำนวน Pal ผู้ช่วยงานต่อฐาน |
| `MaxBuildingLimitNum` | `0` | ตั้งค่า | จำกัดจำนวนอาคารรวมต่อผู้เล่น |
| `bEnableInvaderEnemy` | `True` | ตั้งเป็น `False` | ปิดศัตรูบุกแบบเรด ลดภาระเซิร์ฟเวอร์ |
| `bEnableFastTravel` | `True` | ตั้งเป็น `False` หากจำเป็น | ลดอาการแล็กจากเหตุการณ์เดินทางเร็ว |
| `bIsPvP` | `False` | คงค่า `False` เว้นแต่จำเป็น | PvP อาจเพิ่มภาระเซิร์ฟเวอร์ในสภาพแวดล้อมที่มีผู้เล่นเยอะ |

### การตั้งค่ารองสำหรับประสิทธิภาพ

การตั้งค่าเหล่านี้ช่วยได้โดยเฉพาะบนเซิร์ฟเวอร์สาธารณะขนาดใหญ่

| การตั้งค่า | ค่าเริ่มต้น | การเปลี่ยนแปลงที่แนะนำ | ผลลัพธ์ |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | ลดลง | ลดจำนวนฐานทั้งหมดที่อนุญาตบนเซิร์ฟเวอร์ |
| `AutoSaveSpan` | `240` | เพิ่มขึ้น | ลดความถี่การบันทึกอัตโนมัติของเซิร์ฟเวอร์ |

:::tip เริ่มจากการเปลี่ยนแปลงแบบระมัดระวัง
แนะนำให้เปลี่ยนแค่ไม่กี่ค่าในแต่ละครั้ง แล้วทดสอบพฤติกรรมเซิร์ฟเวอร์ เพื่อให้ระบุได้ง่ายว่าค่าตัวไหนช่วยปรับปรุงประสิทธิภาพ และค่าตัวไหนส่งผลต่อการเล่นเกมมากเกินไป
:::

## แก้ไขการตั้งค่า

Palworld เก็บตัวเลือกเซิร์ฟเวอร์ไว้ในส่วน `OptionSettings` ภายในไฟล์ `PalWorldSettings.ini` คุณต้องปรับแต่งรายการที่เกี่ยวข้องด้วยตนเอง

### ตัวอย่างการตั้งค่าที่ปรับแต่งแล้ว

ตัวอย่างนี้แสดงการตั้งค่าที่เน้นประสิทธิภาพแบบระมัดระวัง แทนที่เฉพาะค่าที่คุณต้องการใช้จริงสำหรับเซิร์ฟเวอร์ของคุณ

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution ตรวจสอบรายการที่มีอยู่ก่อน
รูปแบบการตั้งค่าของ Palworld อาจเปลี่ยนแปลงระหว่างอัปเดต ก่อนบันทึก ให้แน่ใจว่าคุณแก้ไขบรรทัด `OptionSettings` ที่มีอยู่แล้วในไฟล์ แทนการสร้างรายการซ้ำหรือขัดแย้งกัน
:::

### การปรับค่าที่แนะนำ

ถ้าคุณไม่ต้องการแทนที่ทั้งบรรทัด คุณสามารถแก้ไขเฉพาะค่าที่เกี่ยวข้องในไฟล์การตั้งค่าที่มีอยู่ได้

| รายการ | ตัวอย่างค่า | เหตุผลที่ควรเปลี่ยน |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | ลดจำนวน Pal ป่าเกิด |
| `DropItemMaxNum` | `2000` | ลดความรกของไอเท็มที่หล่น |
| `DropItemAliveMaxHours` | `0.5` | ลบไอเท็มที่หล่นเร็วขึ้น |
| `BaseCampMaxNum` | `64` | ลดจำนวนฐานรวม |
| `BaseCampMaxNumInGuild` | `3` | จำกัดการขยายฐานกิลด์ |
| `BaseCampWorkerMaxNum` | `10` | ลดภาระ AI ผู้ช่วยงาน |
| `ServerReplicatePawnCullDistance` | `10000.0` | ลดระยะการซิงค์ |
| `bEnableInvaderEnemy` | `False` | ปิดการโหลดจากศัตรูบุก |
| `bEnableFastTravel` | `False` | หลีกเลี่ยงอาการแล็กจากการเดินทางเร็ว |
| `bAutoResetGuildNoOnlinePlayers` | `True` | ล้างฐานกิลด์ที่ไม่ใช้งาน |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | กำหนดช่วงเวลาที่ไม่มีผู้เล่นออนไลน์ |
| `MaxBuildingLimitNum` | `[your_limit]` | จำกัดการสร้างอาคารเกินจำเป็น |
| `bIsPvP` | `False` | ป้องกันภาระ PvP เพิ่มเติม |
| `AutoSaveSpan` | `[your_value]` | ลดความถี่การบันทึกอัตโนมัติถ้าระบบรองรับ |

:::danger การรีเซ็ตกิลด์ที่ไม่ใช้งานจะลบฐาน
ถ้าคุณเปิดใช้งาน `bAutoResetGuildNoOnlinePlayers=True` กิลด์ที่ไม่มีผู้เล่นออนไลน์จะถูกยุบอัตโนมัติหลังเวลาที่ตั้งไว้ใน `AutoResetGuildTimeNoOnlinePlayers` ซึ่งอาจลบฐานและโครงสร้างของผู้เล่นที่ไม่ใช้งานอย่างถาวร
:::

## บันทึกและใช้การเปลี่ยนแปลง

หลังแก้ไขไฟล์แล้ว คุณต้องบันทึกการตั้งค่าและรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การตั้งค่าใหม่ทำงาน

1. บันทึกการเปลี่ยนแปลงในไฟล์ `PalWorldSettings.ini`
2. กลับไปที่แผงจัดการเซิร์ฟเวอร์เกมของคุณ
3. รีสตาร์ทเซิร์ฟเวอร์ Palworld



:::info ต้องรีสตาร์ทเซิร์ฟเวอร์
หลังเปลี่ยนแปลงไฟล์ `PalWorldSettings.ini` จำเป็นต้องรีสตาร์ทเซิร์ฟเวอร์ หากไม่รีสตาร์ท เซิร์ฟเวอร์จะยังใช้การตั้งค่าเดิมอยู่
:::

## แนวทางปฏิบัติที่ดีที่สุดสำหรับประสิทธิภาพระยะยาว

การแก้ไขการตั้งค่าแบบแมนนวลช่วยได้ แต่เป็นเพียงส่วนหนึ่งของการปรับแต่งเซิร์ฟเวอร์โดยรวม

### ใช้การรีสตาร์ทอัตโนมัติรายวัน

การรีสตาร์ทเซิร์ฟเวอร์รายวันเป็นแนวทางปฏิบัติที่ดีสำหรับเซิร์ฟเวอร์ Palworld เพราะการใช้ทรัพยากรจะสะสมเมื่อเวลาผ่านไป

- ตั้งเวลาการรีสตาร์ทอัตโนมัติในแผงจัดการเซิร์ฟเวอร์ของ ZAP-Hosting
- เลือกเวลาที่มีผู้เล่นน้อย
- แจ้งผู้เล่นล่วงหน้าหากชุมชนของคุณมีความเคลื่อนไหวสูง

### จำกัดการเติบโตของโลก

สาเหตุหลักของการลดประสิทธิภาพบนเซิร์ฟเวอร์ Palworld ที่เปิดใช้งานนานคือความซับซ้อนของโลก

เพื่อแก้ไข:

- ลดขีดจำกัดฐาน
- ลดจำนวนผู้ช่วยงาน
- ลดการสะสมไอเท็มที่หล่น
- ลดจำนวน Pal ป่าเกิด
- ล้างกิลด์ที่ไม่ใช้งานอย่างระมัดระวัง
- พิจารณาตั้งค่าจำกัดการสร้างอาคารด้วย `MaxBuildingLimitNum`

### ทดสอบการเปลี่ยนแปลงทีละน้อย

อย่าปรับลดค่ามากเกินไปทันที เว้นแต่เซิร์ฟเวอร์ของคุณจะไม่เสถียรอยู่แล้ว

ขั้นตอนที่ดีคือ:

1. ลดค่าการเกิด Pal และไอเท็มก่อน
2. ลดขีดจำกัดฐานและผู้ช่วยงานถัดไป
3. ปิดฟีเจอร์ที่ใช้ทรัพยากรสูงถ้าจำเป็น
4. รีสตาร์ทและตรวจสอบประสิทธิภาพหลังแต่ละรอบการเปลี่ยนแปลง

:::tip สมดุลระหว่างประสิทธิภาพกับการเล่นเกม
การตั้งค่าที่ดีที่สุดขึ้นอยู่กับประเภทเซิร์ฟเวอร์ เซิร์ฟเวอร์ส่วนตัวขนาดเล็กมักจะใช้ค่าที่สูงกว่าได้ ในขณะที่เซิร์ฟเวอร์สาธารณะขนาดใหญ่ต้องจำกัดเข้มงวดเพื่อป้องกันการตกของประสิทธิภาพ
:::

## Conclusion

ยินดีด้วย คุณได้ปรับแต่งประสิทธิภาพเซิร์ฟเวอร์ Palworld ของคุณเรียบร้อยแล้ว สำหรับคำถามหรือความช่วยเหลือเพิ่มเติม กรุณาติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂