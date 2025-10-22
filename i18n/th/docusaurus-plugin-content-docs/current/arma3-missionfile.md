---
id: arma3-missionfile
title: "Arma 3: อัปโหลดไฟล์มิชชั่นของคุณเอง"
description: "ค้นพบวิธีการอัปโหลดและโหลดไฟล์มิชชั่นที่กำหนดเองบนเซิร์ฟเวอร์เกม Arma 3 ของคุณ เพื่อประสบการณ์การเล่นเกมที่เป็นตัวคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: อัปโหลดไฟล์มิชชั่นของคุณเอง
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## อัปโหลดไฟล์มิชชั่น

ก่อนจะอัปโหลดไฟล์มิชชั่นของคุณเอง คุณต้องเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP ก่อน: [เข้าถึงผ่าน FTP](gameserver-ftpaccess.md)  
จากนั้นให้อัปโหลดไฟล์มิชชั่นไปยังโฟลเดอร์ **mpmissions** ซึ่งอยู่ที่ **/gxxxxxx/arma3/**  
ในตัวอย่างนี้ เราจะอัปโหลดไฟล์มิชชั่นชื่อ **King_of_the_hill.Altis** ไปยังเซิร์ฟเวอร์ของเรา

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## การโหลดไฟล์มิชชั่นบนเซิร์ฟเวอร์

เพื่อโหลดไฟล์มิชชั่นจากเซิร์ฟเวอร์ ให้ไปที่อินเทอร์เฟซเซิร์ฟเวอร์เกม Arma 3 ของคุณ แล้วคลิกที่แท็บ **Configs** ในเมนูด้านซ้าย:

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

ที่นั่นให้แก้ไขไฟล์ **server.cfg** และใส่ชื่อไฟล์มิชชั่นของคุณตามภาพตัวอย่าง:

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

หลังจากนั้น คลิก **บันทึก** แล้วคุณก็สามารถเริ่มเซิร์ฟเวอร์ได้เลย ไฟล์มิชชั่นใหม่จะถูกโหลดขึ้นมา

<InlineVoucher />