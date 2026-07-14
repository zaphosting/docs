---
id: palworld-randomized-pals
title: "Palworld: Randomized Pals"
description: "Learn how to enable randomized Pals in Palworld by editing your server configuration, including randomizer type and seed settings for the Palworld game world. -> Learn more now"
sidebar_label: Palworld: Randomized Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld มีการตั้งค่า randomizer ที่ช่วยเปลี่ยนวิธีการเกิดของ Pals ทั่วโลกเกม ในคู่มือนี้ คุณจะได้เรียนรู้วิธีเปิดใช้งานและตั้งค่า randomized Pals บนเซิร์ฟเวอร์ Palworld ของคุณที่ ZAP-Hosting โดยการแก้ไขไฟล์คอนฟิกที่ถูกต้อง

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณสามารถเข้าถึงเซิร์ฟเวอร์เกม Palworld ของคุณผ่านเว็บอินเทอร์เฟซของ ZAP-Hosting และมีสิทธิ์แก้ไขไฟล์คอนฟิกเซิร์ฟเวอร์

:::info การเข้าถึงการตั้งค่า
คุณต้องเข้าถึงแผงควบคุมเว็บของเซิร์ฟเวอร์เพื่อเปิดส่วน `Configs` และแก้ไขไฟล์คอนฟิกของ Palworld
:::

## เปิดไฟล์คอนฟิกที่ถูกต้อง

เพื่อกำหนดค่า randomized Pals คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

ในแผงควบคุมเซิร์ฟเวอร์เกม ZAP-Hosting:

1. เปิดเซิร์ฟเวอร์ **Palworld** ของคุณ
2. ไปที่เมนู **Configs**
3. เปิดไฟล์ชื่อ `PalWorldSettings.ini`

ไฟล์นี้เก็บค่าการตั้งค่าหลักของเกมเพลย์สำหรับเซิร์ฟเวอร์ Palworld ของคุณ รวมถึงตัวเลือก randomizer

## ตั้งค่า randomized Pals

การตั้งค่า randomizer จะถูกเก็บเป็นคีย์ในไฟล์ `PalWorldSettings.ini` คุณต้องค้นหาบล็อกการตั้งค่าที่มีอยู่แล้วและปรับค่าที่เกี่ยวข้องด้วยตนเอง

### ภาพรวมการตั้งค่า randomizer

ใช้คีย์คอนฟิกเหล่านี้สำหรับการเกิด Pal แบบสุ่ม:

| คีย์คอนฟิก | ค่าที่อนุญาต | ค่าเริ่มต้น | จุดประสงค์ |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | ควบคุมว่าจะปิดหรือเปิดการเกิด Pal แบบสุ่มตามภูมิภาค |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | เปิดใช้งานระดับ Pal ป่าแบบสุ่มเต็มที่เมื่อเป็น `True` |
| `RandomizerSeed` | `[your_seed_value]` หรือเว้นว่าง | `""` | กำหนด seed ที่ใช้ตอนสร้างโลกเกม |

:::caution ความเข้ากันได้กับเซิร์ฟเวอร์เฉพาะ
ค่า `All` รายงานว่าไม่รองรับกับเซิร์ฟเวอร์เฉพาะ Palworld คุณควรใช้ค่า `None` หรือ `Region` ที่รองรับเท่านั้น
:::

### ตัวอย่างการตั้งค่า

เพิ่มหรือแก้ไขค่าต่อไปนี้ในไฟล์ `PalWorldSettings.ini` ของคุณตามต้องการ:

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

แทนที่ `zaphosting` ด้วยค่า seed ของคุณเองหากต้องการตั้งค่าการสุ่มเฉพาะ seed จะช่วยให้รูปแบบการสุ่มเหมือนเดิมทุกครั้งที่สร้างโลกใหม่

### ความหมายของแต่ละการตั้งค่า

#### `RandomizerType`

การตั้งค่านี้ควบคุมว่าการเกิด Pal จะสุ่มหรือไม่

- `None` ปิดการสุ่ม
- `Region` เปิดการสุ่มตามภูมิภาคสำหรับการเกิด Pal

ถ้าคุณต้องการให้ Pals เกิดแบบสุ่มในแผนที่โลก Palworld ให้ตั้งค่านี้เป็น `Region`

#### `bIsRandomizerPalLevelRandom`

การตั้งค่านี้ควบคุมระดับของ Pal ป่า

- `False` รักษาพฤติกรรมระดับปกติ
- `True` เปิดใช้งานระดับ Pal ป่าแบบสุ่มเต็มที่

จะทำให้เกม Palworld มีความไม่แน่นอนมากขึ้น โดยเฉพาะช่วงเริ่มต้นเกม

#### `RandomizerSeed`

การตั้งค่านี้เป็นทางเลือก กำหนด seed สำหรับการสุ่มตอนสร้างโลก

ตัวอย่าง:

```ini
RandomizerSeed="[your_seed_value]"
```

แทนที่ `[your_seed_value]` ด้วยข้อความหรือเลขที่คุณต้องการใช้เป็น seed

:::note พฤติกรรมของ seed
Seed ของ randomizer จะถูกใช้ตอนสร้างโลกใหม่ หากคุณเปลี่ยน `RandomizerSeed` ในโลกที่มีอยู่แล้ว การเปลี่ยนแปลงจะไม่ถูกนำไปใช้จนกว่าจะรีเซ็ตโลกหรือสร้างโลกใหม่
:::

## บันทึกและใช้การเปลี่ยนแปลง

หลังแก้ไขไฟล์แล้ว ให้บันทึกการเปลี่ยนแปลงในส่วน `Configs` ของ ZAP-Hosting

เมื่อบันทึกไฟล์เสร็จแล้ว ให้รีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณเพื่อโหลดการตั้งค่าใหม่

| การกระทำ | จำเป็นหรือไม่ |
| --- | --- |
| บันทึกไฟล์ `PalWorldSettings.ini` | จำเป็น |
| รีสตาร์ทเซิร์ฟเวอร์ | จำเป็น |
| รันคำสั่งคอนโซลเพิ่มเติม | ไม่จำเป็น |
| รีเซ็ตโลกเพื่อใช้ seed ใหม่ในเซฟที่มีอยู่ | หากเปลี่ยน `RandomizerSeed` |

:::tip ควรเริ่มโลกใหม่เมื่อไร
ถ้าคุณเปิดใช้งานการสุ่มครั้งแรก โดยเฉพาะกับ `RandomizerSeed` ที่กำหนดเอง ควรใช้โลกใหม่เพื่อให้การตั้งค่าทำงานตามที่ตั้งใจไว้
:::

## ตรวจสอบผลลัพธ์

หลังรีสตาร์ท เข้าร่วมเซิร์ฟเวอร์และตรวจสอบว่า Pal เกิดตามการตั้งค่า randomizer ที่เลือกไว้หรือไม่

คุณควรตรวจสอบว่า:

- การเกิดแบบสุ่มตามภูมิภาคทำงานหรือไม่
- ระดับ Pal ป่าสุ่มหรือไม่ถ้าเปิดใช้งาน
- พฤติกรรมโลกตรงกับ seed ที่ตั้งไว้ในโลกใหม่หรือไม่

ถ้าการเปลี่ยนแปลงไม่ทำงาน ให้เปิดไฟล์ `PalWorldSettings.ini` อีกครั้งและตรวจสอบว่า:

- คีย์ถูกพิมพ์ถูกต้อง
- ค่าใช้ตัวพิมพ์ใหญ่เล็กถูกต้อง เช่น `True` และ `False`
- เซิร์ฟเวอร์ถูกรีสตาร์ทหลังบันทึก
- สร้างโลกใหม่ถ้าเปลี่ยน seed

## Troubleshooting

### Pals แบบสุ่มไม่เกิด

ตรวจสอบว่าในไฟล์ `PalWorldSettings.ini` มีค่า `RandomizerType=Region` หรือไม่ ถ้ายังเป็น `None` แสดงว่าการสุ่มถูกปิดอยู่

### การเปลี่ยน seed ไม่ทำงาน

ปกติหมายความว่าโลกถูกสร้างก่อนเพิ่ม seed ใหม่ ในกรณีนี้คุณต้องรีเซ็ตโลกหรือสร้างโลกใหม่เพื่อให้ seed มีผล

### เซิร์ฟเวอร์มีปัญหาหลังเปลี่ยนการตั้งค่า randomizer

ถ้าใช้ค่าที่ไม่รองรับ เช่น `All` ให้เปลี่ยนกลับเป็นค่าที่รองรับ เช่น `None` หรือ `Region` บันทึกไฟล์แล้วรีสตาร์ทเซิร์ฟเวอร์อีกครั้ง

:::danger หลีกเลี่ยงค่าการตั้งค่า randomizer ที่ไม่รองรับ
อย่าใช้ `RandomizerType=All` บนเซิร์ฟเวอร์เฉพาะเว้นแต่เอกสารทางการของ Palworld จะยืนยันว่ารองรับ ค่านี้ปัจจุบันทราบว่าไม่เข้ากันกับเซิร์ฟเวอร์เฉพาะ
:::

## Conclusion

Congratulations, you have successfully configured randomized Pals on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂