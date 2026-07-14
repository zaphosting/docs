---
id: palworld-enable-predator-pals
title: "Palworld: เปิดใช้งาน Predator Pals"
description: "เรียนรู้วิธีเปิดหรือปิด predator pals บนเซิร์ฟเวอร์ Palworld ของคุณ แก้ไขปัญหา predator pals ไม่เกิด และตั้งค่าที่ถูกต้องด้วยตนเอง -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld: เปิดใช้งาน Predator Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

*Predator Pals* คือ Pals แบบบอสที่ทรงพลังซึ่งสามารถเกิดขึ้นทั่วโลกในเกม Palworld ในคู่มือนี้ คุณจะได้เรียนรู้วิธีเปิดหรือปิด predator pals บนเซิร์ฟเวอร์ Palworld ของคุณที่ ZAP-Hosting โดยการแก้ไขไฟล์คอนฟิกที่ถูกต้องด้วยตนเอง

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณสามารถเข้าถึงเซิร์ฟเวอร์เกม Palworld ของคุณผ่านเว็บอินเทอร์เฟซของ ZAP-Hosting และมีสิทธิ์จัดการไฟล์คอนฟิกของเซิร์ฟเวอร์

:::info การเข้าถึงไฟล์คอนฟิก
สำหรับการตั้งค่านี้ คุณต้องแก้ไขคอนฟิกเซิร์ฟเวอร์ด้วยตนเองผ่านส่วน **Configs** ในแผงควบคุมการจัดการเซิร์ฟเวอร์เกมของคุณ
:::

## เปิดไฟล์คอนฟิก Palworld

เพื่อเปลี่ยนการเกิดของ predator pals คุณต้องแก้ไขไฟล์ `PalWorldSettings.ini`

### ค้นหาไฟล์ที่ถูกต้องในอินเทอร์เฟซ ZAP

เริ่มจากเปิดเซิร์ฟเวอร์เกม Palworld ของคุณในเว็บอินเทอร์เฟซ ZAP-Hosting จากนั้นไปที่ส่วน **Configs** ในแผงควบคุมเซิร์ฟเวอร์ และเปิดไฟล์ `PalWorldSettings.ini`

ไฟล์นี้เป็นไฟล์คอนฟิกหลักที่ใช้สำหรับตั้งค่าการเล่นเกม รวมถึงพฤติกรรมของ predator boss pal

:::note ต้องแก้ไขด้วยตนเอง
การตั้งค่านี้ต้องแก้ไขด้วยตนเองในไฟล์คอนฟิก หากอินเทอร์เฟซของคุณไม่มีสวิตช์เปิดปิดสำหรับตัวเลือกนี้ การแก้ไขไฟล์ `PalWorldSettings.ini` โดยตรงคือวิธีที่ถูกต้อง
:::

## แก้ไขการตั้งค่า Predator Pals

ในไฟล์ `PalWorldSettings.ini` ให้ค้นหาส่วน `OptionSettings` คีย์ที่เกี่ยวข้องคือ `EnablePredatorBossPal`

### ค่าการตั้งค่า

ใช้ค่าต่อไปนี้ตามผลลัพธ์ที่คุณต้องการ:

| การตั้งค่า | ค่า | ผลลัพธ์ |
| --- | --- | --- |
| เปิดใช้งาน predator pals | `True` | Predator boss Pals จะเกิดในโลกเกม |
| ปิดใช้งาน predator pals | `False` | Predator boss Pals จะไม่เกิดในโลกเกม |

### ตัวอย่างการตั้งค่า

ถ้าการตั้งค่านี้มีอยู่แล้ว ให้เปลี่ยนค่า หากไม่มี ให้เพิ่มเข้าไปในรายการคอนฟิก `OptionSettings`

```ini
EnablePredatorBossPal=True
```

ถ้าต้องการปิด predator pals ให้ใช้:

```ini
EnablePredatorBossPal=False
```

:::tip ตรวจสอบไวยากรณ์ก่อนแก้ไข
การตั้งค่าเซิร์ฟเวอร์ Palworld มักจะถูกเก็บเป็นส่วนหนึ่งของบรรทัด `OptionSettings` ที่ยาวในไฟล์ `PalWorldSettings.ini` หากไฟล์ของคุณมีโครงสร้างนี้อยู่แล้ว ให้เพิ่มหรือแก้ไข `EnablePredatorBossPal=True` หรือ `EnablePredatorBossPal=False` ภายในรายการการตั้งค้าที่มีอยู่แทนการสร้างส่วนใหม่แยกต่างหาก
:::

## บันทึกและใช้การเปลี่ยนแปลง

หลังจากแก้ไขไฟล์แล้ว ให้บันทึกการเปลี่ยนแปลงในส่วน **Configs**

### รีสตาร์ทเซิร์ฟเวอร์

เมื่อบันทึกไฟล์เรียบร้อยแล้ว ให้รีสตาร์ทเซิร์ฟเวอร์ Palworld ของคุณเพื่อให้การตั้งค่าใหม่ถูกโหลดอย่างถูกต้อง

| การกระทำ | จำเป็นหรือไม่ |
| --- | --- |
| บันทึกไฟล์ `PalWorldSettings.ini` | ใช่ |
| รีสตาร์ทเซิร์ฟเวอร์ | ใช่ |
| คำสั่งคอนโซลเพิ่มเติม | ไม่จำเป็น |

:::caution ต้องรีสตาร์ทเซิร์ฟเวอร์
การตั้งค่า predator pals ใหม่จะไม่ถูกนำไปใช้จนกว่าเซิร์ฟเวอร์จะถูกรีสตาร์ท หาก predator pals ไม่เกิดหลังจากเปลี่ยนแปลง ให้ตรวจสอบว่าไฟล์ถูกบันทึกอย่างถูกต้องและเซิร์ฟเวอร์รีสตาร์ทสำเร็จแล้ว
:::

## ตรวจสอบการตั้งค่า

หลังรีสตาร์ท ให้เข้าร่วมเซิร์ฟเวอร์และตรวจสอบว่า predator pals ทำงานตามที่คาดหวังหรือไม่

ถ้าคุณเปิดใช้งานแล้วแต่ predator pals ไม่เกิด ให้ตรวจสอบรายการในไฟล์ `PalWorldSettings.ini` อีกครั้ง และตรวจสอบให้แน่ใจว่าค่าถูกเขียนเป็น `True` หรือ `False` อย่างถูกต้อง รวมถึงการวางตำแหน่งการตั้งค่าในไวยากรณ์คอนฟิกเซิร์ฟเวอร์ที่ถูกต้อง

:::note พฤติกรรมการเกิด
การตั้งค่านี้ควบคุมว่า predator boss Pals สามารถเกิดในโลกเกมได้หรือไม่ แต่ไม่ได้ให้แผนที่ตำแหน่ง predator pals เปลี่ยนจุดเกิดแต่ละจุด หรือรับประกันว่าจะเจอ predator pals ในพื้นที่ใดพื้นที่หนึ่งทันที
:::

## อ้างอิงการตั้งค่า

| ไฟล์ | ตำแหน่งใน ZAP-Hosting | คีย์ | ค่าที่เป็นไปได้ | พฤติกรรมเริ่มต้น | ต้องรีสตาร์ท |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | การจัดการเซิร์ฟเวอร์เกม → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | ใช่ |

## Conclusion

Congratulations, you have successfully enabled or disabled predator pals on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂