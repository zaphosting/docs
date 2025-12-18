---
id: minecraft-whitelist
title: "Minecraft: การเปิดใช้งานและแก้ไข whitelist เซิร์ฟเวอร์"
description: "เรียนรู้วิธีปกป้องเซิร์ฟเวอร์เกม Minecraft ของคุณด้วยการจัดการการเข้าถึงผู้เล่นผ่านฟีเจอร์ whitelist เพื่อรักษาความปลอดภัยการเล่น → เริ่มต้นเรียนรู้เลย"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
**Minecraft Whitelist** คือฟีเจอร์ที่ช่วยปกป้องเซิร์ฟเวอร์เกมของคุณโดยอนุญาตให้เฉพาะผู้เล่นที่ถูกเพิ่มในรายชื่อเท่านั้นที่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ โดยปกติ Minecraft ไม่มีตัวเลือกตั้งรหัสผ่านเซิร์ฟเวอร์เหมือนเกมอื่นๆ

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="วิธีเปิดใช้งาน WHITELIST บนเซิร์ฟเวอร์ Minecraft ของคุณ" description="ชอบเรียนรู้แบบเห็นของจริง? เราจัดให้! ดำดิ่งไปกับวิดีโอที่อธิบายทุกอย่างให้คุณเข้าใจง่าย ไม่ว่าจะรีบหรือชอบเรียนรู้แบบสนุกๆ ก็เหมาะสุดๆ!"/>

<InlineVoucher />

## การเปิดใช้งาน whitelist



### การเปิดใช้งาน (Config)

เพื่อเปิดใช้งาน whitelist ให้ตั้งค่าคำสั่งในไฟล์ **server.properties** เป็น **true** จากนั้นต้องรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การเปลี่ยนแปลงมีผล

```
white-list=true
```



### การเปิดใช้งาน (แชท)

อีกวิธีคือเปิดใช้งาน whitelist ผ่านในเกมหรือผ่านคอนโซลสด:

```
/whitelist on			(เปิดใช้งาน whitelist)
/whitelist off			(ปิดใช้งาน whitelist)
```



การเปิดใช้งาน whitelist ผ่านในเกมต้องมีสิทธิ์ผู้ดูแลระบบ (operator) เท่านั้น! แต่ถ้าไม่มีสิทธิ์ก็สามารถทำผ่านคอนโซลสดได้เช่นกัน โดยคำสั่งต้องพิมพ์โดยไม่ต้องใส่เครื่องหมาย **/**



![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## การจัดการ Whitelist



### เพิ่ม / ลบผู้เล่น



**แชท**

คุณสามารถเพิ่มหรือลบผู้เล่นจาก whitelist ได้ด้วยคำสั่งต่อไปนี้:

```
/whitelist add SpielerName
/whitelist remove SpielerName
```



**white-list.json**

ถ้าคุณรู้ UUID ของผู้เล่น ก็สามารถเพิ่มผู้เล่นได้โดยตรงผ่านไฟล์ **white-list.json** ซึ่งเข้าถึงและแก้ไขได้ผ่าน FTP ดูคู่มือการเชื่อมต่อ FTP ได้ที่นี่: [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler3"
  }
]
```



### อัปเดตรายการ

ถ้าคุณเพิ่มผู้เล่นด้วยตนเอง ต้องโหลด whitelist ใหม่ในเกมอีกครั้ง ซึ่งทำได้ด้วยคำสั่งนี้โดยไม่ต้องรีสตาร์ทเซิร์ฟเวอร์:

```
 /whitelist reload
```



### ดูรายชื่อ

ถ้าไม่อยากเปิดไฟล์ whitelist ผ่าน FTP ทุกครั้ง คุณสามารถแสดงรายชื่อผู้เล่นทั้งหมดใน whitelist ได้ด้วยคำสั่งนี้:

```
/whitelist list
```


<InlineVoucher />