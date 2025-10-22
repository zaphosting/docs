---
id: assettocorsa-mods
title: "Assetto Corsa: การติดตั้งม็อดบนเซิร์ฟเวอร์"
description: "ค้นพบวิธีตั้งค่าและปรับแต่งเซิร์ฟเวอร์เกม Assetto Corsa ของคุณเพื่อประสบการณ์การเล่นเกมที่ดีที่สุด → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งม็อด
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## เชื่อมต่อกับ FTP

ก่อนที่เราจะตั้งค่าเซิร์ฟเวอร์ ต้องตั้งค่า [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) ก่อน:

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

หลังจากตั้งค่าเสร็จแล้ว คุณก็สามารถเชื่อมต่อและเปิดโฟลเดอร์เซิร์ฟเวอร์ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## การเตรียมตัว

เริ่มแรกให้เราเปิดโฟลเดอร์ Assetto Corsa โดยเปิด Steam แล้วคลิกขวาที่ "Assetto Corsa" ในรายการเกม

จากนั้นเปิด "Local Files" เพื่อเปิดไฟล์เกมในเครื่อง:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

ตอนนี้เปิดโฟลเดอร์ "server" จะเจอไฟล์ "acServerManager" ให้เปิดไฟล์นี้



## ตั้งค่ารถ

ตอนนี้เราจะไปที่แท็บ "Cars / Entry List" ที่นี่เราสามารถเพิ่มรถใหม่ได้:


เพื่อเปิดใช้งานรถ ต้องติ๊กถูกที่ช่องทางซ้าย

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

ตรงกลางจะแสดงรถที่สามารถวางบนกริดได้ ที่นี่เราสามารถเลือกสีรถที่ต้องการให้แสดงบนกริดได้:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
ถ้าต้องการเลือกหลายคัน สามารถติ๊กถูกหลายช่องเพื่อเพิ่มรถหลายคันในช่องกลางได้


อย่าลืมว่าต้องเติมช่องรถให้เต็ม และไม่เกินจำนวนช่องที่มีอยู่

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## อัปโหลดการตั้งค่า

ตอนนี้เราสามารถบันทึกการตั้งค่าด้วยปุ่ม "Save" และส่งออกด้วยปุ่ม "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

เลือกโฟลเดอร์ว่างสำหรับเก็บข้อมูลการตั้งค่า

หลังจากนั้นปิด AC Server Manager แล้วเปิดโฟลเดอร์ที่บันทึกการตั้งค่าไว้

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

ไฟล์การตั้งค่าเหล่านี้สามารถลากแล้ววาง (Drag&Drop) เข้าไปในโฟลเดอร์ "cfg" ของเซิร์ฟเวอร์เกมของคุณได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## อัปโหลดเนื้อหาเซิร์ฟเวอร์

ตอนนี้เราต้องสร้างเนื้อหาสำหรับเซิร์ฟเวอร์ เพื่อให้ม็อดรถและแผนที่ถูกโหลดบนเซิร์ฟเวอร์ โดยคลิกที่ "Update Server Content" ด้านล่าง

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

กระบวนการนี้อาจใช้เวลาสักครู่ แผนที่และรถทั้งหมดจะถูกแปลงเป็นไฟล์สำหรับเซิร์ฟเวอร์

:::info
หลังจากกระบวนการเสร็จ อาจมีข้อความ "Could not update" ขึ้นมา ไม่ต้องตกใจ นี่ไม่ใช่ปัญหา
:::

ตอนนี้เปิดโฟลเดอร์ "Server" ที่มีไฟล์ AcServerManager อยู่ จะเจอโฟลเดอร์ "Content" ให้เราอัปโหลดโฟลเดอร์นี้ไปยังเซิร์ฟเวอร์ Assetto Corsa ของเราโดยลากแล้ววาง (Drag&Drop) และเขียนทับโฟลเดอร์ "Content" เก่า

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

หลังจากอัปโหลดเนื้อหาเสร็จ ม็อดรถจะถูกติดตั้งและพร้อมใช้งานหลังจากรีสตาร์ทเซิร์ฟเวอร์

<InlineVoucher />