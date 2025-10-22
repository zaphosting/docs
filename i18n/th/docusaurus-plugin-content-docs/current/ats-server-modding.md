---
id: ats-server-modding
title: "ATS: การติดตั้ง Mods/DLCs บนเซิร์ฟเวอร์เกม ATS ของคุณ"
description: "ค้นพบวิธีเพิ่มประสบการณ์ American Truck Simulator ของคุณด้วย mods และ DLCs สำหรับการเล่นทั้งฝั่งไคลเอนต์และเซิร์ฟเวอร์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Mods/DLCs
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

American Truck Simulator รองรับการม็อดแบบเนทีฟผ่าน Steam Workshop ที่ฝังมาในเกม ทำให้คุณสามารถเพิ่ม mods หลากหลายแบบทั้งในเกมและเซิร์ฟเวอร์ของคุณ รวมถึง DLCs ที่ซื้อไว้ ในคู่มือนี้เราจะครอบคลุมขั้นตอนการติดตั้ง mods บนไคลเอนต์ของคุณและต่อด้วยเซิร์ฟเวอร์ ATS ของคุณ

<InlineVoucher />

## การเพิ่ม Mods & DLCs

เริ่มต้นด้วยการค้นหาและเลือก mods กับ DLCs ที่คุณต้องการใช้ คุณสามารถทำได้ในเกมโดยเข้าไปที่ตัวเลือก **Mod Manager** และ **DLC Browser** ในเมนูหลัก

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

คุณสามารถเข้าถึง Mods ผ่านตัวเลือก **Mod Manager** ในเมนูหลัก ซึ่งช่วยให้คุณค้นหา mods ได้ง่ายผ่าน Steam Workshop

เมื่อคุณติดตั้ง mods แล้ว อย่าลืมย้าย mods เหล่านั้นไปยังรายการ **Active Mods** โดยใช้ลูกศรข้างๆ แต่ละ mod

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

สุดท้าย ยืนยันการเปลี่ยนแปลงและเข้าเกมในโหมดเล่นคนเดียว

### DLCs

คุณสามารถเข้าถึง DLCs ที่คุณซื้อไว้ในบัญชีของคุณผ่านตัวเลือก **DLC Browser** ในเมนูหลัก

ในหน้านี้ คุณจะเห็น DLCs ทั้งหมดที่คุณเป็นเจ้าของและติดตั้งไว้บนไคลเอนต์ของคุณ

## การส่งออกแพ็กเกจเซิร์ฟเวอร์

เมื่อคุณเปิดใช้งาน mods และพร้อมในเกมแล้ว คุณจะต้องส่งออก mods ของคุณเป็นแพ็กเกจเซิร์ฟเวอร์ โดยต้องเปิดคอนโซลในเกมซึ่งโดยค่าเริ่มต้นจะปิดอยู่

เพื่อเปิดใช้งาน ให้ไปที่โฟลเดอร์นี้แล้วเปิดไฟล์ `config.cfg`:
```
C:/Users/[your_user]/Documents/American Truck Simulator
```

ในไฟล์นี้ ให้หาแถวที่เขียนว่า `uset g_developer "0"` แล้วเปลี่ยนเป็น `uset g_developer "1"` เพื่อเปิดใช้งาน เช่นเดียวกัน ให้หาแถว `uset g_console "0"` แล้วเปลี่ยนเป็น `uset g_console "1"`

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

รีสตาร์ทเกมของคุณ แล้วคุณจะสามารถเปิดคอนโซลได้โดยกดปุ่มใดปุ่มหนึ่งต่อไปนี้ ขึ้นอยู่กับแป้นพิมพ์:
```
` OR ~ OR \
```

เมื่อพร้อมแล้ว ให้พิมพ์คำสั่งนี้ในคอนโซลเพื่อส่งออกแพ็กเกจเซิร์ฟเวอร์:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

ไฟล์สองไฟล์จะถูกส่งออกไปยังโฟลเดอร์ `Documents/American Truck Simulator` ของคุณ คือ `server_packages.dat` และ `server_packages.sii` ซึ่งเก็บข้อมูลเกี่ยวกับ DLCs/mods และจะใช้ในขั้นตอนถัดไป

## การอัปโหลดแพ็กเกจเซิร์ฟเวอร์

เมื่อคุณส่งออกแพ็กเกจเซิร์ฟเวอร์สำหรับ mods เรียบร้อยแล้ว คุณจะต้องอัปโหลดไฟล์เหล่านี้ไปยังเซิร์ฟเวอร์เกม ATS ของคุณผ่าน FTP ใช้ [คู่มือการเข้าถึง FTP](gameserver-ftpaccess.md) ของเราเพื่อช่วยเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

เมื่อพร้อมแล้ว ให้เข้าไปที่โฟลเดอร์หลัก **American Truck Simulator** แล้วอัปโหลดไฟล์แพ็กเกจเซิร์ฟเวอร์ทั้งสองไฟล์เข้าไปในโฟลเดอร์นี้ หากไฟล์เหล่านี้มีอยู่แล้ว ให้แทนที่ไฟล์เดิมได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
เวลาม็อด ต้องซิงค์ mods ระหว่างไคลเอนต์กับเซิร์ฟเวอร์ด้วยนะ หมายความว่าถ้าคุณเชื่อมต่อกับเซิร์ฟเวอร์ที่มี mods ที่คุณไม่มี คุณจะถูกบังคับให้ดาวน์โหลด mods ที่ขาดหายไป
:::

สุดท้าย รีสตาร์ทเซิร์ฟเวอร์ของคุณเพื่อเปิดใช้งานและติดตั้ง mods อัตโนมัติ คุณก็จะติดตั้ง mods บนเซิร์ฟเวอร์เกม ATS ของคุณสำเร็จแล้ว

<InlineVoucher />