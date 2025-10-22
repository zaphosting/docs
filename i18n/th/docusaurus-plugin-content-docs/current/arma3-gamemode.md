---
id: arma3-gamemode
title: "Arma 3: เปลี่ยนโหมดเกม"
description: "ค้นพบวิธีตั้งค่าและโหลดโหมดเกมบนเซิร์ฟเวอร์เกม Arma 3 ของคุณเพื่อประสบการณ์การเล่นที่ปรับแต่งได้ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เปลี่ยนโหมดเกม
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ตั้งค่าโหมดเกม

ถ้าคุณอยากเปลี่ยนโหมดเกมบนเซิร์ฟเวอร์เกม Arma 3 ของคุณ คุณต้องอัปโหลดไฟล์มิชชั่นที่เหมาะสมกับโหมดเกมนั้นไปยังเซิร์ฟเวอร์ของคุณก่อน

ตอนนี้เรามีไฟล์มิชชั่นต่อไปนี้ให้โดยไม่ต้องอัปโหลดเอง:

- Arma 3 Wasteland

ไฟล์เหล่านี้จะอยู่ในโฟลเดอร์ **mpmissions** ของคุณแล้ว

<InlineVoucher />

## อัปโหลดไฟล์มิชชั่น

ก่อนจะอัปโหลดไฟล์มิชชั่น คุณต้องเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP ก่อน: [เข้าถึงผ่าน FTP](gameserver-ftpaccess.md)  
จากนั้นให้อัปโหลดไฟล์มิชชั่นที่ตรงกับโหมดเกมไปยังโฟลเดอร์ **mpmissions** ซึ่งอยู่ที่ **/gxxxxxx/arma3/**  
ในตัวอย่างนี้ เราจะอัปโหลดโหมดเกม **King of the Hill** ไปยังเซิร์ฟเวอร์ของเรา

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## โหลดไฟล์มิชชั่นบนเซิร์ฟเวอร์

เพื่อโหลดไฟล์มิชชั่นจากเซิร์ฟเวอร์ ให้ไปที่อินเทอร์เฟซเซิร์ฟเวอร์เกม Arma 3 ของคุณ แล้วคลิกที่แท็บ **Configs** ในเมนูด้านซ้าย:

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

จากนั้นแก้ไขไฟล์ **server.cfg** และใส่ชื่อไฟล์มิชชั่นของคุณตามภาพตัวอย่าง:

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

หลังจากนั้นกด **บันทึก** แล้วคุณก็สามารถสตาร์ทเซิร์ฟเวอร์ได้เลย ไฟล์มิชชั่นใหม่จะถูกโหลดทันที

<InlineVoucher />