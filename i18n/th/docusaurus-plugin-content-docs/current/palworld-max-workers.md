---
id: palworld-max-workers
title: "Palworld: Max Workers"
description: "Learn how to change the Palworld max workers setting by editing BaseCampWorkerMaxNum, including the default max and safe vanilla limits for workers per base. -> Learn more now"
sidebar_label: "Max Workers"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ให้คุณปรับจำนวนสูงสุดของ Pals ที่ทำงานในแต่ละฐานบนเซิร์ฟเวอร์ของคุณได้ ในคู่มือนี้ คุณจะได้เรียนรู้วิธีแก้ไขไฟล์คอนฟิกที่ถูกต้องผ่านแผงควบคุม ZAP-Hosting ปรับค่า `BaseCampWorkerMaxNum` และนำการเปลี่ยนแปลงไปใช้ให้ถูกต้อง



## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณสามารถเข้าถึงเซิร์ฟเวอร์เกม Palworld ของคุณผ่านแผงควบคุมเซิร์ฟเวอร์เกมของ ZAP-Hosting ได้

:::info Configuration Access Requirement
คุณต้องมีสิทธิ์เข้าถึงแผงควบคุมเว็บของเซิร์ฟเวอร์เพื่อเปิดส่วน **Configs** และแก้ไขไฟล์คอนฟิกของ Palworld ด้วยตนเอง
:::

## Understanding the Max Workers Setting

การตั้งค่าใน Palworld ที่ควบคุมจำนวนสูงสุดของ workers คือ `BaseCampWorkerMaxNum` ตัวเลือกนี้กำหนดจำนวน Pals ที่สามารถทำงานในแต่ละฐานได้

| Setting | Configuration file | Purpose | Default value | Vanilla maximum |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | กำหนดจำนวนสูงสุดของ worker Pals ต่อฐาน | `15` | `50` |

:::note Vanilla Limit Information
เอกสารสาธารณะปัจจุบันระบุว่าจำนวนสูงสุดในเกมปกติคือ `50` ค่าที่เกินกว่า `50` มักต้องใช้การม็อดและไม่ใช่การตั้งค่ามาตรฐานของเซิร์ฟเวอร์ vanilla
:::

:::caution Performance Impact
การเพิ่มจำนวน workers จะเพิ่มการใช้ CPU และ RAM เพราะจะมี Pals ทำงานมากขึ้น หากตั้งค่าสูง ควรตรวจสอบประสิทธิภาพเซิร์ฟเวอร์หลังเปลี่ยนแปลง
:::

## Open the Palworld Configuration File

เพื่อเปลี่ยนการตั้งค่า max workers คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

### Find the file in the ZAP-Hosting interface

เปิดแผงควบคุมเซิร์ฟเวอร์เกม Palworld ของคุณ แล้วไปที่:

- `Configs`
- `PalWorldSettings.ini`

นี่คือไฟล์คอนฟิกที่เก็บการตั้งค่าเกมเพลย์ของเซิร์ฟเวอร์ Palworld ของคุณ



## Edit the BaseCampWorkerMaxNum Value

เมื่อเปิดไฟล์ `PalWorldSettings.ini` แล้ว ให้ค้นหาบรรทัด `OptionSettings` การตั้งค่าเซิร์ฟเวอร์ Palworld มักจะเก็บเป็นคู่คีย์-ค่า คั่นด้วยเครื่องหมายจุลภาคในส่วนนี้

### Change the configuration entry

ค้นหาคีย์นี้:

```ini
BaseCampWorkerMaxNum=15
```

เปลี่ยนค่าเป็นจำนวนที่คุณต้องการ เช่น หากต้องการให้มี worker Pals ต่อฐานเป็น `20` ให้ใช้:

```ini
BaseCampWorkerMaxNum=20
```

### Example configuration

ขึ้นอยู่กับไฟล์ของคุณ การตั้งค่านี้มักจะอยู่ในบรรทัด `OptionSettings` ที่ยาวกว่าประมาณนี้:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Edit Only the Required Value
แก้ไขเฉพาะค่า `BaseCampWorkerMaxNum` เท่านั้น เว้นแต่คุณต้องการเปลี่ยนการตั้งค่าเกมเพลย์อื่น ๆ เพื่อป้องกันความผิดพลาดในการตั้งค่า
:::

## Recommended Values

คุณสามารถเลือกค่าที่เหมาะกับสไตล์การเล่นของคุณได้ ตราบใดที่ยังอยู่ในขอบเขต vanilla ที่รองรับ

| Value | Result | Recommendation |
| --- | --- | --- |
| `15` | จำนวน worker Palworld เริ่มต้น | เหมาะสำหรับการเล่นมาตรฐาน |
| `20` to `30` | เพิ่มการทำงานอัตโนมัติของฐาน | สมดุลดีสำหรับเซิร์ฟเวอร์ส่วนตัวส่วนใหญ่ |
| `40` to `50` | จำนวน worker สูงมาก | ใช้เฉพาะถ้าเซิร์ฟเวอร์คุณมีทรัพยากรเพียงพอ |
| Above `50` | ไม่ใช่พฤติกรรม vanilla มาตรฐาน | มักต้องใช้ม็อดและไม่แนะนำถ้าไม่ได้ทดสอบก่อน |

## Save and Apply the Changes

หลังแก้ไขค่าแล้ว ให้บันทึกไฟล์ `PalWorldSettings.ini` ในตัวแก้ไขคอนฟิกของ ZAP-Hosting

### Restart the server

เมื่อบันทึกไฟล์แล้ว ให้รีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณเพื่อให้การตั้งค่า max workers ใหม่ถูกโหลด

:::info Restart Required
การเปลี่ยนแปลงใน `PalWorldSettings.ini` จะไม่ถูกนำไปใช้ทันทีขณะที่เซิร์ฟเวอร์กำลังทำงาน คุณต้องรีสตาร์ทเซิร์ฟเวอร์หลังบันทึกไฟล์
:::

## Verify the New Worker Limit

หลังรีสตาร์ทเซิร์ฟเวอร์แล้ว เข้าร่วมเซิร์ฟเวอร์ Palworld ของคุณและตรวจสอบฐานใดฐานหนึ่ง คุณควรจะสามารถกำหนด worker Pals ได้ถึงจำนวนที่ตั้งค่าใหม่

ถ้าการเปลี่ยนแปลงไม่ทำงาน ให้ตรวจสอบดังนี้:

| Check | What to verify |
| --- | --- |
| Correct file | คุณแก้ไขไฟล์ `PalWorldSettings.ini` |
| Correct key | มีคีย์ `BaseCampWorkerMaxNum` และสะกดถูกต้อง |
| Valid syntax | บรรทัด `OptionSettings` รอบ ๆ ไม่เสียหาย |
| Restart completed | เซิร์ฟเวอร์ถูกรีสตาร์ทเต็มที่หลังบันทึก |
| Value range | ค่าที่ตั้งอยู่ในขอบเขต vanilla ปกติคือ `50` |

:::caution Configuration Syntax
การตั้งค่า Palworld ค่อนข้างละเอียดอ่อนกับรูปแบบ ถ้าคุณเผลอลบเครื่องหมายจุลภาค, วงเล็บ หรือส่วนอื่น ๆ ของบรรทัด `OptionSettings` เซิร์ฟเวอร์อาจไม่อ่านค่าหรือโหลดผิดพลาดได้
:::

## Conclusion

ยินดีด้วย คุณเปลี่ยนจำนวนสูงสุดของ workers ต่อฐานในเซิร์ฟเวอร์ Palworld ของคุณสำเร็จแล้ว สำหรับคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂