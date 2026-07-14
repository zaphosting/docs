---
id: palworld-supply-drop-settings
title: "Palworld: การตั้งค่า Supply Drop"
description: "เรียนรู้วิธีเปลี่ยนความถี่ของ Supply Drop ในเซิร์ฟเวอร์เกม Palworld ของคุณโดยการแก้ไขการตั้งค่า SupplyDropSpan ด้วยตนเอง -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld: การตั้งค่า Supply Drop
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld มีระบบ supply drops ที่จะปรากฏตามช่วงเวลาที่กำหนดและสามารถให้ทรัพยากรที่มีประโยชน์ระหว่างการเล่นเกม ในคู่มือนี้ คุณจะได้เรียนรู้วิธีเปลี่ยนความถี่ของ supply drop ด้วยตนเองบนเซิร์ฟเวอร์เกม Palworld ของคุณที่ ZAP-Hosting โดยการแก้ไขไฟล์คอนฟิกที่ถูกต้อง

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณมีสิทธิ์เข้าถึงเซิร์ฟเวอร์เกม Palworld ของคุณผ่านเว็บอินเทอร์เฟซของ ZAP-Hosting และมีสิทธิ์แก้ไขไฟล์คอนฟิกของเซิร์ฟเวอร์

:::info การตั้งค่าด้วยตนเองจำเป็น
การตั้งค่านี้ต้องทำด้วยตนเองผ่านการจัดการเซิร์ฟเวอร์ของคุณในเมนู **Configs** หลังจากเปลี่ยนแปลงค่าแล้ว คุณต้องรีสตาร์ทเซิร์ฟเวอร์เพื่อให้ Palworld โหลดการตั้งค่าใหม่
:::

## Locate the correct configuration file

เพื่อเปลี่ยนช่วงเวลาของ supply drop คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

ในเว็บอินเทอร์เฟซของ ZAP-Hosting:

1. เปิดการจัดการเซิร์ฟเวอร์เกม Palworld ของคุณ
2. ไปที่เมนู **Configs**
3. เปิดไฟล์ `PalWorldSettings.ini`

ไฟล์นี้ประกอบด้วยค่าการตั้งค่าหลักของเกมเพลย์สำหรับเซิร์ฟเวอร์ Palworld ของคุณ รวมถึงการตั้งค่าเวลาของ supply drop

## Edit the supply drop setting

ในไฟล์ `PalWorldSettings.ini` ให้ค้นหาส่วน `OptionSettings` และหาคีย์ `SupplyDropSpan`

คีย์การตั้งค่าที่เกี่ยวข้องมีดังนี้:

| การตั้งค่า | คำอธิบาย | ตัวอย่าง |
| --- | --- | --- |
| `SupplyDropSpan` | กำหนดช่วงเวลาระหว่าง supply drops เป็นนาที | `180` |

ถ้าคีย์นี้มีอยู่แล้ว ให้เปลี่ยนค่าเป็นช่วงเวลาที่คุณต้องการ

### Example values

คุณสามารถใช้ค่าต่อไปนี้เป็นแนวทาง:

| ค่า | ผลลัพธ์ |
| --- | --- |
| `30` | supply drops บ่อยมาก |
| `60` | supply drops ทุก 1 ชั่วโมง |
| `180` | การตั้งค่าเริ่มต้น ทุก 3 ชั่วโมง |
| `360` | supply drops ทุก 6 ชั่วโมง |

### Example configuration

ขึ้นอยู่กับเนื้อหาไฟล์ปัจจุบัน การตั้งค่านี้จะอยู่ในบรรทัด `OptionSettings` ตัวอย่างเช่น:

```ini
OptionSettings=(SupplyDropSpan=180)
```

ถ้าไฟล์ของคุณมีการตั้งค่าหลายรายการในบล็อก `OptionSettings=(...)` ให้เปลี่ยนแค่ค่า `SupplyDropSpan` และปล่อยค่าที่เหลือไว้เหมือนเดิม

ตัวอย่างเช่น:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution ระวังอย่าแก้ไขค่าที่มีอยู่
อย่าลบค่าหรือเครื่องหมายใดๆ ในบล็อก `OptionSettings` ขณะแก้ไข `SupplyDropSpan` หากเผลอลบเครื่องหมายจุลภาค วงเล็บ หรือค่าต่างๆ อาจทำให้การตั้งค่า Palworld ของคุณไม่สามารถโหลดได้ถูกต้อง
:::

## Save and apply the changes

เมื่อคุณแก้ไขค่า `SupplyDropSpan` เสร็จแล้ว:

1. บันทึกการเปลี่ยนแปลงในไฟล์ `PalWorldSettings.ini`
2. รีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณผ่านการจัดการเซิร์ฟเวอร์ของ ZAP-Hosting

การรีสตาร์ทจำเป็นเพราะ Palworld จะไม่โหลดการตั้งค่านี้แบบสดๆ ขณะเซิร์ฟเวอร์กำลังทำงานอยู่

:::note ไม่ต้องใช้คำสั่งเพิ่มเติม
โดยปกติไม่ต้องใช้คำสั่งในเกมหรือคอนโซลเพิ่มเติมสำหรับการเปลี่ยนแปลงนี้ การรีสตาร์ทเซิร์ฟเวอร์คือขั้นตอนที่จำเป็นเพื่อให้การตั้งค่า supply drop ใหม่มีผล
:::

## Verify the new supply drop interval

หลังรีสตาร์ท เซิร์ฟเวอร์ของคุณจะใช้ค่า `SupplyDropSpan` ใหม่ คุณสามารถตรวจสอบการเปลี่ยนแปลงได้โดยสังเกตเวลาระหว่างเหตุการณ์ supply drop ในเกม

ถ้าการเปลี่ยนแปลงไม่เกิดขึ้น ให้ตรวจสอบดังนี้:

| ตรวจสอบ | สิ่งที่ต้องยืนยัน |
| --- | --- |
| ไฟล์ถูกต้อง | คุณแก้ไขไฟล์ `PalWorldSettings.ini` |
| ตำแหน่งถูกต้อง | เปิดไฟล์ผ่านเมนู **Configs** ในการจัดการเซิร์ฟเวอร์ |
| ไวยากรณ์ถูกต้อง | `SupplyDropSpan` เขียนถูกต้องและอยู่ในบล็อก `OptionSettings` |
| รีสตาร์ทเซิร์ฟเวอร์ | เซิร์ฟเวอร์ถูกรีสตาร์ทหลังบันทึกไฟล์ |

:::tip เลือกค่าที่สมดุล
ค่าต่ำมากจะทำให้ supply drops ปรากฏบ่อยเกินไปในเกม Palworld ปกติ ถ้าคุณต้องการให้เกิดบ่อยขึ้นแต่ไม่มากเกินไป ค่า `60` มักเป็นจุดเริ่มต้นที่ดี
:::

## Conclusion

Congratulations, you have successfully changed the supply drop frequency on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂