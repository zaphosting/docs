---
id: fivem-mods-installreplace
title: "FiveM: ติดตั้ง Replacement Carmods บนเซิร์ฟเวอร์"
description: "ค้นหาวิธีตั้งค่าและอัปโหลดม็อดไปยังเซิร์ฟเวอร์ FiveM ของคุณเพื่อประสบการณ์การเล่นเกมที่ปรับแต่งได้ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Replacement Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## เชื่อมต่อกับ FTP
ก่อนอื่นคุณควรเชื่อมต่อกับเซิร์ฟเวอร์ของคุณผ่าน FTP คุณสามารถใช้ [คู่มือการเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) ของเราได้เลย

## การเตรียมตัว

ตอนนี้สร้างโฟลเดอร์สำหรับม็อดของคุณในโฟลเดอร์ "resources"

:::info
คุณสามารถตั้งชื่อโฟลเดอร์อะไรก็ได้ ตราบใดที่ไม่มีอักขระพิเศษ ในตัวอย่างของเราใช้ชื่อว่า "assets"
:::

ตอนนี้สร้างไฟล์ fxmanifest.lua ในโฟลเดอร์ "assets" ที่เพิ่งสร้างขึ้น

ใส่ข้อความต่อไปนี้ในไฟล์นี้:

```
fx_version 'cerulean'
games { 'gta5' }

```

จากนั้นบันทึกและปิดไฟล์ fxmanifest.lua เราไม่ต้องใช้มันอีกต่อไป

ในโฟลเดอร์ assets ของคุณ ให้สร้างโฟลเดอร์ชื่อ "stream"

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## อัปโหลดม็อด

ตอนนี้เปิดโฟลเดอร์ stream นี้ ที่นี่คุณสามารถอัปโหลดไฟล์ ytd และ yft ทั้งหมดโดยการลากแล้ววาง:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

หลังจากอัปโหลดม็อดทั้งหมดแล้ว สิ่งที่คุณต้องทำคือเพิ่ม resource ของคุณในไฟล์ server.cfg ซึ่งจะอยู่ในโฟลเดอร์ "server-data" ของเซิร์ฟเวอร์ FiveM ของคุณ

คุณสามารถเปิดไฟล์นี้ด้วยโปรแกรมแก้ไขข้อความใดก็ได้ ภายใต้รายการ "start" ให้เพิ่ม resource ของคุณดังนี้:

```
start assets
```

เสร็จเรียบร้อย! หลังจากรีสตาร์ทเซิร์ฟเวอร์ Carmod จะพร้อมใช้งานบนเซิร์ฟเวอร์แล้ว!

<InlineVoucher />