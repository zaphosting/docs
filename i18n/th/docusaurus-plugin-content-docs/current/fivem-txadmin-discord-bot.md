---
id: fivem-txadmin-discord-bot
title: "FiveM: txAdmin Discord Bot"
description: "ค้นพบวิธีการเชื่อมต่อและใช้งาน Discord bot กับเซิร์ฟเวอร์ txAdmin ของคุณ เพื่อการจัดการเซิร์ฟเวอร์ FiveM ที่ดียิ่งขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: txAdmin Discord Bot
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## แนะนำ
แผงควบคุม txAdmin มาพร้อมฟีเจอร์มากมายสำหรับเซิร์ฟเวอร์ FiveM ของคุณ รวมถึงการเชื่อมต่อ Discord bot ด้วย
ในคู่มือนี้ เราจะแนะนำวิธีตั้งค่า Discord bot และวิธีใช้งานมัน

<InlineVoucher />

## การเตรียมตัว

เพื่อจะตั้งค่า Discord bot สำหรับเซิร์ฟเวอร์ txAdmin ของคุณ คุณต้องล็อกอินเข้าแผงควบคุม txAdmin ก่อน
ข้อมูลล็อกอินจะแสดงอยู่ในหน้ารวมของเซิร์ฟเวอร์ ตามภาพนี้:

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

คู่มือนี้ต้องการให้ txAdmin ถูกตั้งค่าไว้แล้ว หากต้องการเรียนรู้วิธีตั้งค่า สามารถเข้าไปดูได้ที่คู่มือ [FiveM: txAdmin Setup](fivem-txadmin-setup.md)

:::

## การตั้งค่า

### การสร้างแอปพลิเคชัน Discord

เพื่อจะตั้งค่า bot กับ txAdmin คุณต้องสร้างแอปพลิเคชัน Discord ก่อน จากนั้น bot จะถูกผูกกับแอปนี้และทำงานในชื่อของมัน เพื่อสร้างแอป ให้เข้าไปที่ [Discord Developer Portal](https://discord.com/developers/applications/)

ตอนนี้ ให้สร้างแอปใหม่โดยคลิกที่ **New Application** แล้วตั้งชื่อแอปตามภาพด้านล่างนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

จากนั้นกด **Create** เพื่อสร้างแอป ในขั้นตอนถัดไป ให้จดจำรหัสแอป (application ID) ไว้ด้วย:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### การตั้งค่า Bot และรับ Token

เมื่อสร้างแอปแล้ว ระบบจะสร้าง bot ให้โดยอัตโนมัติ คุณสามารถรับ token ได้ง่ายๆ โดยคลิกที่ **Reset Token** จากนั้นจะได้รับ user token ให้จดหรือบันทึกไว้ด้วย:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
อย่าเปิดเผย token ของ bot ให้ใครรู้ เพื่อให้ bot ของคุณทำงานได้อย่างราบรื่นและไม่เกิดปัญหาด้านความปลอดภัย Token นี้เหมือนกุญแจลับที่ไม่ควรแชร์
:::

ในหน้านี้ ให้เลื่อนลงมานิดนึงแล้วเปิดใช้งาน "Server Members Intent" แล้วบันทึกการเปลี่ยนแปลง:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### การเชิญ Bot เข้าสู่ Discord ของคุณ

เพื่อเชิญ bot เข้าสู่ Discord คุณต้องนำ client ID ที่จดไว้ไปใส่ในลิงก์นี้ในตำแหน่งที่เหมาะสม จากนั้นเปิดลิงก์ในเบราว์เซอร์และเพิ่ม bot เข้าเซิร์ฟเวอร์ Discord ของคุณ ลิงก์จะมีลักษณะประมาณนี้:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### การรับ Server และ Channel IDs

เพื่อใช้งาน bot กับ txAdmin อย่างถูกต้อง คุณต้องรับรหัสเซิร์ฟเวอร์ (server ID) ที่ bot จะทำงานอยู่
คุณสามารถรับได้โดยคลิกขวาที่ไอคอนเซิร์ฟเวอร์ใน Discord แล้วเลือก **Copy Server ID** จากนั้นจดรหัสนี้ไว้ด้วย

ตัวอย่างหน้าตาจะเป็นแบบนี้:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

คุณยังสามารถตั้งค่าช่อง (channel) สำหรับโพสต์อัปเดตสถานะ เช่น ตารางรีสตาร์ทได้ โดยก็สามารถคัดลอกรหัสช่องได้แบบเดียวกัน
อย่าลืมว่า bot ต้องมีสิทธิ์อ่านและเขียนข้อความในช่องนั้นด้วยนะ

:::info
ถ้าคุณไม่เห็นตัวเลือกคัดลอกรหัสเซิร์ฟเวอร์หรือช่อง ให้เปิดใช้งานโหมดนักพัฒนา (developer mode) ในการตั้งค่าผู้ใช้ Discord ของคุณก่อน:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### การตั้งค่าปรับแต่งใน txAdmin

ตอนนี้คุณสามารถเปิดใช้งาน Discord bot ใน txAdmin และใส่รหัสและ token ที่จดไว้ก่อนหน้านี้ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### ตัวเลือกเสริม: ส่งข้อความสถานะ

คุณสามารถส่งข้อความสถานะได้แบบอัตโนมัติ ซึ่งจะแสดงสถานะเซิร์ฟเวอร์ ปริมาณผู้เล่น ฯลฯ แบบอัปเดตตลอดเวลา
ทำได้โดยคลิกที่ช่อง Discord ที่ต้องการให้แสดงข้อความ แล้วพิมพ์คำสั่ง `/status add` ให้แน่ใจว่า bot มีสิทธิ์ส่งข้อความในช่องนั้นด้วย

ข้อความที่สร้างขึ้นจะมีลักษณะประมาณนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

ทุกอย่างในข้อความนี้สามารถปรับแต่งได้ในหน้าการตั้งค่า Discord ภายใน txAdmin

## สรุป

การตั้งค่า Discord bot สำหรับ txAdmin ช่วยให้คุณแสดงสถานะเซิร์ฟเวอร์ FiveM และข้อมูลอื่นๆ ได้ง่ายๆ ในเซิร์ฟเวอร์ Discord ของคุณ หากมีคำถามหรือต้องการความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />