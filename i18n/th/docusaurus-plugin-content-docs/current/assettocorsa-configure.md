---
id: assettocorsa-configure
title: "Assetto Corsa: ตั้งค่าเซิร์ฟเวอร์ของคุณ"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์เกม Assetto Corsa ของคุณด้วยแผนที่และรถยนต์แบบกำหนดเองเพื่อประสบการณ์การเล่นเกมที่ดีที่สุด → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ตั้งค่าเซิร์ฟเวอร์
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## เชื่อมต่อกับ FTP

ก่อนที่เราจะตั้งค่าเซิร์ฟเวอร์ได้ ต้องตั้งค่า [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) ก่อน:

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

หลังจากตั้งค่าเสร็จแล้ว คุณก็สามารถเชื่อมต่อและเปิดโฟลเดอร์เซิร์ฟเวอร์ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## การเตรียมตัว

เริ่มแรกเราเปิดโฟลเดอร์ Assetto Corsa โดยเปิด Steam แล้วคลิกขวาที่ "Assetto Corsa" ในรายชื่อเกม

จากนั้นเปิด "Local Files" เพื่อเปิดไฟล์เกมในเครื่อง:

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

ตอนนี้เปิดโฟลเดอร์ "server" จะเจอไฟล์ "acServerManager" ให้เปิดไฟล์นี้ขึ้นมา

## ตั้งค่าแผนที่

ตอนนี้เราอยู่ในอินเทอร์เฟซ "AC Server Manager" ที่นี่เราสามารถสร้างและจัดการ config เซิร์ฟเวอร์ได้ ก่อนอื่นสร้าง config ใหม่

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

ตอนนี้เราสามารถตั้งค่าเซิร์ฟเวอร์ของเราได้ ในกรณีนี้เราจะปรับแต่งเฉพาะแทร็กและรถยนต์ โดยเปิดแท็บ "Tracks"

ที่นี่เราสามารถคลิกเลือกแผนที่ที่ต้องการได้ และด้านบนสามารถปรับจำนวนรถยนต์บนแทร็กได้

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
อย่าลืมว่าจำนวนรถยนต์ที่ตั้งไว้ต้องไม่เกินจำนวนช่องผู้เล่นบนเซิร์ฟเวอร์ มิฉะนั้นเซิร์ฟเวอร์จะไม่สามารถเริ่มทำงานได้
:::

## ตั้งค่ารถยนต์

ตอนนี้เปลี่ยนไปที่แท็บ "Cars / Entry List" ที่นี่เราสามารถเพิ่มรถยนต์ใหม่ได้:


เพื่อเปิดใช้งานรถยนต์ ต้องติ๊กถูกที่ช่องทางซ้าย

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

ตรงกลางจะแสดงรถยนต์ที่สามารถวางบนกริดได้ ที่นี่เราสามารถเลือกสีรถที่ต้องการให้ปรากฏบนกริดได้:

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
ถ้าต้องการเลือกหลายคัน สามารถติ๊กถูกหลายช่องเพื่อเพิ่มรถยนต์หลายคันในส่วนกลางได้

อย่าลืมว่าช่องรถทั้งหมดต้องเต็มและไม่เกินจำนวนช่องที่มีอยู่

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## อัปโหลด Config

ตอนนี้เราสามารถบันทึก Config ด้วยปุ่ม "Save" และส่งออกด้วยปุ่ม "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

เลือกโฟลเดอร์ว่างสำหรับเก็บข้อมูล config

ตอนนี้ปิด AC Server Manager แล้วเปิดโฟลเดอร์ที่ส่งออก Config ไว้

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

Config เหล่านี้สามารถลากแล้ววาง (Drag&Drop) เข้าไปในโฟลเดอร์ "cfg" ของเซิร์ฟเวอร์เกมของคุณได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

ตอนนี้เซิร์ฟเวอร์เกมสามารถเริ่มต้นด้วย Config ใหม่ได้เลย

<InlineVoucher />