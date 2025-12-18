---
id: eco-whitelist
title: "ECO: เปิดใช้งาน Whitelist"
description: "ค้นพบวิธีปกป้องเซิร์ฟเวอร์ของคุณด้วยการจัดการการเข้าถึงผู้เล่นผ่านฟีเจอร์ whitelist ของ ECO → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## แนะนำ

Whitelist ของ ECO ช่วยให้คุณปกป้องเซิร์ฟเวอร์โดยอนุญาตให้เฉพาะผู้เล่นที่ถูกเลือกในรายชื่อเท่านั้นที่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้

<InlineVoucher />

### การเปิดใช้งาน (การตั้งค่า)

การเปิดใช้งาน whitelist จะทำงานโดยอัตโนมัติทันทีที่มีผู้เล่นอย่างน้อยหนึ่งคนถูกเพิ่มเข้าไปในรายชื่อ ผู้เล่นต้องถูกเพิ่มในไฟล์คอนฟิก **Users.eco**

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



ช่อง **$values** จะเก็บ SteamID ของผู้เล่นที่ต้องการเพิ่มใน whitelist คุณสามารถหา SteamID ได้โดยเปิดโปรไฟล์ Steam ของคุณก่อน จากนั้นคลิกขวาที่ส่วนใดส่วนหนึ่งในโปรไฟล์ แล้วคัดลอก URL ของโปรไฟล์ Steam นั้น



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


จากนั้นเปิดหนึ่งในเว็บไซต์ต่อไปนี้และวาง URL โปรไฟล์ของคุณลงไป: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

เว็บไซต์เหล่านี้จะแสดงข้อมูลทั่วไปรวมถึง Steam ID ของบัญชีคุณ ในที่นี้เราต้องใช้แค่ SteamID64 เท่านั้น SteamID64 จะถูกใส่ในช่อง **$values** ซึ่งจะมีลักษณะดังนี้:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "weitereSteamID"      
      ]
    }
```



### การเปิดใช้งาน (แชท)

อีกวิธีหนึ่งคือสามารถเพิ่มผู้เล่นเข้า whitelist ผ่านสิทธิ์ผู้ดูแลในเกมได้ การเพิ่มผู้เล่นใน whitelist ทำได้ผ่านแชท/คอนโซลด้วยคำสั่งนี้:

```
/whitelist [player]
```



## การจัดการ Whitelist

การจัดการ whitelist สามารถทำได้แค่ในไฟล์คอนฟิก **Users.eco** เท่านั้น เพราะไม่มีคำสั่งเซิร์ฟเวอร์สำหรับลบผู้เล่นออกจาก whitelist หากต้องการลบผู้เล่น ให้ลบชื่อผู้เล่นนั้นออกจากไฟล์คอนฟิก และต้องรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การเปลี่ยนแปลงมีผล

<InlineVoucher />