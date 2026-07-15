---
id: palworld-max-guild-bases
title: "Palworld: Max Guild Bases"
description: "Learn how to change the max guild bases setting in Palworld by editing the BaseCampMaxNumInGuild value on your server. -> Learn more now"
sidebar_label: "Max Guild Bases"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ให้คุณควบคุมจำนวนฐานสูงสุดที่แต่ละกิลด์สามารถวางบนเซิร์ฟเวอร์เกมของคุณได้ ในคู่มือนี้ คุณจะได้เรียนรู้วิธีแก้ไขไฟล์คอนฟิกที่ถูกต้องในแผงควบคุม ZAP-Hosting ด้วยตนเอง เปลี่ยนค่าตัวแปร `BaseCampMaxNumInGuild` และนำการเปลี่ยนแปลงไปใช้โดยการรีสตาร์ทเซิร์ฟเวอร์เกมของคุณ



## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณมีสิทธิ์เข้าถึงเซิร์ฟเวอร์เกม Palworld ของคุณในแผงควบคุม ZAP-Hosting

:::info Required Access
คุณต้องมีสิทธิ์เข้าถึงการจัดการเซิร์ฟเวอร์ Palworld และส่วน `Configs` เพื่อแก้ไขไฟล์คอนฟิก
:::

## Locate the configuration file

เพื่อเปลี่ยนการตั้งค่าจำนวนฐานสูงสุดของกิลด์ คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

ในแผงควบคุม ZAP-Hosting ให้เปิดการจัดการเซิร์ฟเวอร์เกม Palworld ของคุณ แล้วไปที่:

`Configs` → `PalWorldSettings.ini`

ไฟล์นี้เก็บค่าคอนฟิกหลักของเกมสำหรับเซิร์ฟเวอร์ Palworld ของคุณ รวมถึงข้อจำกัดของกิลด์และฐานต่างๆ

## Edit the max guild bases value

ในไฟล์ `PalWorldSettings.ini` ให้ค้นหาส่วน `OptionSettings` การตั้งค่าที่คุณต้องแก้ไขคือ:

`BaseCampMaxNumInGuild=[your_value]`

แทนที่ `[your_value]` ด้วยจำนวนฐานที่คุณต้องการให้แต่ละกิลด์สามารถวางได้

### Example configuration

ถ้าคุณต้องการอนุญาตให้กิลด์ละวางฐานได้สูงสุด `6` แถวนี้ควรเป็นแบบนี้:

```ini
BaseCampMaxNumInGuild=6
```

ถ้าการตั้งค่านี้มีอยู่แล้ว ให้เปลี่ยนแค่ค่าของมัน ถ้าไม่มี ให้เพิ่มเข้าไปในรายการพารามิเตอร์ `OptionSettings` ที่มีอยู่ในไฟล์

:::note Default and vanilla maximum
ข้อมูลอ้างอิงปัจจุบันระบุว่าค่าปกติคือ `4` และค่าจำกัดสูงสุดในเวอร์ชัน vanilla คือ `10` ค่าที่เกินกว่า `10` โดยทั่วไปจะไม่รองรับในเซิร์ฟเวอร์ Palworld ที่ไม่ได้ติดตั้งม็อด
:::

### Value reference

| Config key | Description | Default value | Vanilla maximum |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | จำนวนฐานสูงสุดที่อนุญาตต่อกิลด์ | `4` | `10` |

:::caution Use valid values
ตั้งค่า `BaseCampMaxNumInGuild` ให้เป็นค่าที่สมเหตุสมผลและรองรับได้ ค่าที่เกิน `10` มักต้องใช้การม็อดเซิร์ฟเวอร์และอาจไม่ทำงานถูกต้องบนเซิร์ฟเวอร์ Palworld ปกติ
:::

## Save the configuration

หลังจากเปลี่ยนค่าแล้ว ให้บันทึกไฟล์ `PalWorldSettings.ini` ในตัวแก้ไขคอนฟิกของ ZAP-Hosting

การบันทึกนี้จะเก็บค่าจำนวนฐานสูงสุดใหม่ไว้ แต่จะยังไม่ถูกนำไปใช้จนกว่าเซิร์ฟเวอร์จะถูกรีสตาร์ท

## Restart the server

เมื่อบันทึกไฟล์แล้ว ให้รีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณจากแผงควบคุมการจัดการเซิร์ฟเวอร์

การรีสตาร์ทจำเป็นเพราะ Palworld จะอ่านไฟล์คอนฟิก `PalWorldSettings.ini` ตอนเริ่มต้นเซิร์ฟเวอร์ หากไม่รีสตาร์ท ข้อจำกัดจำนวนฐานกิลด์ใหม่จะไม่ถูกนำไปใช้

### What you need to do afterward

โดยปกติไม่ต้องใช้คำสั่งคอนโซลเพิ่มเติมหลังจากแก้ไข `BaseCampMaxNumInGuild` เสร็จแล้ว หลังรีสตาร์ทค่าที่ตั้งใหม่จะถูกใช้งานโดยอัตโนมัติ

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional commands | No |

:::tip Test the new limit
หลังรีสตาร์ท เข้าร่วมเซิร์ฟเวอร์และทดสอบการวางฐานกับกิลด์เพื่อยืนยันว่าการตั้งค่าใหม่ถูกนำไปใช้ตามที่คาดไว้
:::

## Troubleshooting

ถ้าการตั้งค่าจำนวนฐานสูงสุดของกิลด์ดูเหมือนไม่เปลี่ยนแปลง ให้ตรวจสอบจุดต่อไปนี้

### Verify the config entry

ตรวจสอบให้แน่ใจว่า `BaseCampMaxNumInGuild` เขียนถูกต้องและใช้ค่าตัวเลข เช่น:

```ini
BaseCampMaxNumInGuild=8
```

การพิมพ์ผิดชื่อคีย์หรือค่าที่ไม่ถูกต้องอาจทำให้การตั้งค่าไม่ทำงาน

### Confirm the file was saved

ตรวจสอบว่าการเปลี่ยนแปลงของคุณถูกบันทึกใน `Configs` → `PalWorldSettings.ini` ก่อนรีสตาร์ทเซิร์ฟเวอร์

### Restart the server fully

ต้องรีสตาร์ทเซิร์ฟเวอร์อย่างสมบูรณ์หลังเปลี่ยนการตั้งค่านี้ หากแค่บันทึกไฟล์โดยไม่รีสตาร์ท ค่าเก่าอาจยังถูกใช้งานอยู่

### Stay within the vanilla limit

ถ้าคุณตั้งค่ามากกว่า `10` เซิร์ฟเวอร์อาจไม่สนใจค่าดังกล่าวหรือทำงานผิดปกติ เว้นแต่จะใช้ม็อดที่รองรับ หากคุณใช้เซิร์ฟเวอร์ปกติ ให้ตั้งค่าไม่เกิน `10`

## Conclusion

ยินดีด้วย คุณได้เปลี่ยนจำนวนฐานสูงสุดของกิลด์บนเซิร์ฟเวอร์ Palworld ของคุณเรียบร้อยแล้ว สำหรับคำถามหรือความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂