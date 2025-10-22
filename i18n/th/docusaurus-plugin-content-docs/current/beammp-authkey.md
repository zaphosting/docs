---
id: beammp-authkey
title: "BeamMP: สร้าง Auth Key"
description: "เรียนรู้วิธีสร้างและใช้งาน Auth Key เพื่อแสดงเซิร์ฟเวอร์ของคุณในรายชื่อสาธารณะและจัดการการเข้าถึงได้อย่างมีประสิทธิภาพ → เริ่มเรียนรู้เลย"
sidebar_label: สร้าง Auth Key
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ทำไมต้องใช้คีย์?

Auth Key จำเป็นถ้าอยากให้เซิร์ฟเวอร์ของคุณแสดงในรายชื่อเซิร์ฟเวอร์ ถ้าไม่มีจะเชื่อมต่อได้แค่แบบตรงๆ เท่านั้น

<InlineVoucher />

## เตรียมตัว
ก่อนอื่นเพื่อสร้าง authkey ของเราเอง ให้ล็อกอินที่ https://beammp.com/keymaster โดยต้องใช้บัญชี Discord
หลังจากล็อกอินแล้ว ให้คลิกที่ "Keys" ทางซ้าย จะพาไปที่หน้ารวม Licensekey:

![](https://screensaver01.zap-hosting.com/index.php/s/Zp72q2WR85pxJgq/preview)

ตรงนี้ให้คลิกที่คำว่า "here" สีฟ้าเพื่อสร้างคีย์ใหม่:

![](https://screensaver01.zap-hosting.com/index.php/s/ARqCQyEbF6BYnH4/preview)


## กรอกข้อมูล

ตอนนี้เราสามารถกรอกข้อมูลได้ดังนี้:

- **ชื่อเซิร์ฟเวอร์:** ตั้งชื่อเซิร์ฟเวอร์ของคุณ ชื่อนี้ไม่จำเป็นต้องเหมือนกับชื่อในตั้งค่า
- **IP เซิร์ฟเวอร์:** ใส่ IP ของเซิร์ฟเวอร์คุณ โดยไม่ต้องใส่พอร์ต


### กรอก IP

IP ต้องใส่โดยไม่รวมพอร์ต เราสามารถดูได้จากด้านบนของแผงควบคุมเรา:

![](https://screensaver01.zap-hosting.com/index.php/s/8MJeXxm87EdLykg/preview)

## สร้างคีย์

กดที่ "Create" เพื่อสร้างคีย์ใหม่

![](https://screensaver01.zap-hosting.com/index.php/s/Ebyk5tPCHnppcWC/preview)

## ตั้งค่าคีย์

เปิดตั้งค่าของเซิร์ฟเวอร์เกมเรา เลื่อนลงมาด้านล่าง จะเจอช่องให้ใส่คีย์ของเราในส่วน "Auth Key" ผลลัพธ์สุดท้ายควรจะเป็นแบบนี้

![](https://screensaver01.zap-hosting.com/index.php/s/5p7LdSDCJzrxKDy/preview)

บันทึกการตั้งค่าแล้วรีสตาร์ทเซิร์ฟเวอร์

เสร็จแล้ว! คีย์ถูกใช้งานแล้ว เซิร์ฟเวอร์จะเริ่มแสดงในรายชื่อเร็วๆ นี้

<InlineVoucher />