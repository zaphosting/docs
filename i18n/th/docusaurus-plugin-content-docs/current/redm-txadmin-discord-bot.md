---
id: redm-txadmin-discord-bot
title: "RedM: txAdmin Discord Bot"
description: "ตั้งค่าและผสานรวม Discord bot กับเซิร์ฟเวอร์ txAdmin RedM ของคุณ เพื่อเพิ่มประสิทธิภาพการจัดการและการสื่อสาร → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: txAdmin Discord Bot
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## แนะนำ
แผงควบคุม txAdmin มาพร้อมฟีเจอร์มากมายสำหรับเซิร์ฟเวอร์ RedM ของคุณ รวมถึงการผสานรวม Discord bot ด้วย
ในคู่มือนี้ เราจะแนะนำวิธีตั้งค่า Discord bot และวิธีใช้งานมัน

<InlineVoucher />

## การเตรียมตัว

เพื่อจะตั้งค่า Discord bot สำหรับเซิร์ฟเวอร์ txAdmin ของคุณ คุณต้องล็อกอินเข้าแผงควบคุม txAdmin ก่อน
ข้อมูลล็อกอินจะแสดงอยู่ในหน้าภาพรวมของเซิร์ฟเวอร์ ตามตัวอย่างนี้:

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

คู่มือนี้ต้องการให้ txAdmin ถูกตั้งค่าไว้แล้ว หากต้องการเรียนรู้วิธีตั้งค่า สามารถเข้าไปดูได้ที่คู่มือ [RedM: txAdmin Setup](redm-txadmin-setup.md)

:::

## การตั้งค่า

### การสร้างแอปพลิเคชัน Discord

เพื่อจะตั้งค่า bot กับ txAdmin คุณต้องสร้างแอปพลิเคชัน Discord ก่อน จากนั้น bot จะถูกผูกกับแอปนี้และทำงานในชื่อของมันเอง ในการสร้างแอป ให้เข้าไปที่ [Discord Developer Portal](https://discord.com/developers/applications/)

ตอนนี้ ให้สร้างแอปใหม่โดยคลิกที่ **New Application** แล้วตั้งชื่อแอปตามที่ต้องการ ดังภาพด้านล่าง:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

จากนั้นกด **Create** เพื่อสร้างแอป ในขั้นตอนถัดไป ให้จดจำรหัสแอปพลิเคชัน (Application ID) ไว้ด้วย:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### การตั้งค่า Bot และรับ Token

เมื่อสร้างแอปพลิเคชันแล้ว ระบบจะสร้าง bot ให้โดยอัตโนมัติ คุณสามารถรับ token ได้ง่ายๆ โดยคลิกที่ **Reset Token** จากนั้นจะได้รับ user token ให้จดหรือบันทึกไว้ด้วย:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
อย่าเปิดเผย token ของ bot ให้ใครรู้ เพื่อให้ bot ของคุณทำงานได้อย่างราบรื่นและไม่เกิดปัญหาด้านความปลอดภัย Token นี้เหมือนกุญแจลับที่ไม่ควรแชร์กับใคร
:::

ในหน้าดังกล่าว ให้เลื่อนลงมานิดนึงแล้วเปิดใช้งาน "Server Members Intent" แล้วบันทึกการเปลี่ยนแปลง:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### เชิญ Bot เข้าร่วม Discord ของคุณ

เพื่อเชิญ bot เข้าร่วม Discord คุณต้องนำ client ID ที่จดไว้มาใส่ในลิงก์นี้ในตำแหน่งที่เหมาะสม จากนั้นเปิดลิงก์ในเบราว์เซอร์และเพิ่ม bot เข้าเซิร์ฟเวอร์ Discord ของคุณ ตัวอย่างลิงก์จะเป็นแบบนี้:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### การรับ Server และ Channel IDs

เพื่อใช้งาน bot กับ txAdmin อย่างถูกต้อง คุณต้องได้ server ID ที่ bot จะทำงานอยู่
คุณสามารถรับได้โดยคลิกขวาที่ไอคอนเซิร์ฟเวอร์ใน Discord แล้วเลือก **Copy Server ID** จากนั้นจด ID นั้นไว้ด้วย

นี่คือตัวอย่างหน้าตาของ ID ที่ได้:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

คุณยังสามารถตั้งค่า channel สำหรับโพสต์อัปเดตสถานะ เช่น ตารางรีสตาร์ท โดยก็สามารถคัดลอก ID ของ channel ได้เหมือนกัน
อย่าลืมว่า bot ต้องมีสิทธิ์อ่านและเขียนข้อความใน channel นั้นด้วยนะ

:::info
ถ้าคุณไม่เห็นตัวเลือกให้คัดลอก server หรือ channel ID คุณต้องเปิดใช้งานโหมดนักพัฒนาซอฟต์แวร์ (Developer Mode) ในการตั้งค่าผู้ใช้ Discord ของคุณก่อน:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### การปรับแต่งการตั้งค่าใน txAdmin

ตอนนี้คุณสามารถเปิดใช้งาน Discord bot ใน txAdmin และใส่ ID และ token ที่จดไว้ก่อนหน้านี้ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### ตัวเลือกเสริม: ส่งข้อความสถานะ

คุณสามารถเลือกส่งข้อความสถานะครั้งเดียว ซึ่งจะอัปเดตสถานะเซิร์ฟเวอร์ ปริมาณผู้เล่น ฯลฯ แบบเรียลไทม์
ทำได้โดยคลิกที่ channel Discord ที่ต้องการให้แสดงข้อความ แล้วพิมพ์คำสั่ง `/status add` ให้แน่ใจว่า bot มีสิทธิ์ส่งข้อความใน channel นั้นด้วย

ข้อความจะถูกสร้างขึ้นมาแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

ทุกอย่างในข้อความนี้สามารถปรับแต่งได้ในหน้าการตั้งค่า Discord ภายใน txAdmin

## สรุป

การตั้งค่า Discord bot สำหรับ txAdmin ช่วยให้คุณแสดงสถานะเซิร์ฟเวอร์ RedM และข้อมูลอื่นๆ ได้ง่ายๆ ในเซิร์ฟเวอร์ Discord ของคุณ หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />