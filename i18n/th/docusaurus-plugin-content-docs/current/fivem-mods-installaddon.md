---
id: fivem-mods-installaddon
title: "FiveM: ติดตั้ง Addon Carmods บนเซิร์ฟเวอร์"
description: "ค้นพบวิธีดาวน์โหลดและแปลงม็อดรถสำหรับ FiveM ง่ายๆ เพื่อเพิ่มประสบการณ์การเล่นเกมของคุณด้วยคู่มือทีละขั้นตอน → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Addon Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## เชื่อมต่อกับ FTP

ก่อนอื่นคุณควรเชื่อมต่อกับเซิร์ฟเวอร์เกมของคุณผ่าน FTP คุณสามารถใช้ [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) ของเราได้เลย

## การเตรียมตัว

สำหรับคู่มือนี้เราจะใช้เครื่องมือ [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest) ซึ่งช่วยให้งานนี้ง่ายขึ้นมาก โดยให้ดาวน์โหลดโฟลเดอร์ "NConvert.zip" และ "rpf2fivem.zip" จากส่วน "Releases":

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

ตอนนี้ให้แตกไฟล์ rpf2fivem ลงในโฟลเดอร์เปล่า:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

จากนั้นเปิดไฟล์ zip ของ NConvert แล้วก็อปปี้โฟลเดอร์ "NConvert" ไปไว้ในโฟลเดอร์เดียวกัน:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

ตอนนี้เราสามารถเปิด `rpf2fivem.exe` ได้เลย!


## ดาวน์โหลดม็อด

เพื่อจะติดตั้งม็อดผ่าน rpf2fivem เราต้องเพิ่มลิงก์ตรงเข้าไป เช่น จาก gta5-mods.com ที่นี่เราแค่เลือก Carmod ที่ต้องการแล้วคลิก "Download"

จากนั้นคลิกขวาที่ปุ่มดาวน์โหลดแล้วเลือก "Copy link address" แล้วนำไปวางที่มุมบนซ้ายของ rpf2fivem:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

ที่นี่เราสามารถพิมพ์ชื่อ resource ของเราเองแล้วกด "Add to queue"

ถ้าม็อดอื่นๆ ต้องการดาวน์โหลดเพิ่ม ก็สามารถเพิ่มได้แบบเดียวกัน หลาย Carmods สามารถติดตั้งพร้อมกันได้เลย:

## แปลงม็อด

ตอนนี้ที่เรามีรายชื่อม็อดแล้ว เราก็กดปุ่ม "Start" ได้เลย

:::info
หมายเหตุ: ควรติ๊กเลือก 'compress/downsize textures' เสมอเพื่อป้องกัน Carmods เกิดปัญหาข้อผิดพลาดของเท็กซ์เจอร์ใน FiveM
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

ตอนนี้ Carmods ถูกดาวน์โหลดและเตรียมพร้อมสำหรับ FiveM เรียบร้อยแล้ว

## อัปโหลด resources

หลังจาก rpf2fivem ทำงานเสร็จแล้ว Carmods จะอยู่ในโฟลเดอร์ "rpf2fivem":

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

เราสามารถอัปโหลดไฟล์เหล่านี้ผ่าน [ติดตั้ง resources](fivem-installresources.md) ได้เลย นอกจากนี้ยังมีไฟล์ `servercfg.txt` ถูกสร้างในโฟลเดอร์ rpf2fivem ซึ่งมีรายการสำหรับใส่ Carmods ลงใน server.cfg โดยตรง เราสามารถก็อปปี้รายการเหล่านี้ไปใส่ใน server.cfg ได้เลย


เสร็จแล้ว! Carmods ถูกติดตั้งบนเซิร์ฟเวอร์เกมของคุณแล้ว หลังจากรีสตาร์ทเซิร์ฟเวอร์ก็สามารถใช้งานได้ทันที

<InlineVoucher />