---
id: eco-becomeadmin
title: "ECO: วิธีเป็นแอดมิน"
description: "ค้นพบวิธีการมอบสิทธิ์แอดมินเพื่อควบคุมเซิร์ฟเวอร์เกมอย่างเต็มที่และจัดการเกมได้อย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เป็นแอดมิน
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
การมอบสิทธิ์แอดมินช่วยให้คุณบริหารจัดการเซิร์ฟเวอร์เกมได้ง่ายและครบถ้วนด้วยการควบคุมเต็มรูปแบบในฐานะแอดมิน คุณจะสามารถใช้ฟีเจอร์และฟังก์ชันทั้งหมดที่เกมมีให้ได้โดยตรงในเกม ขั้นตอนทั้งหมดที่คุณต้องทำเพื่อมอบสิทธิ์แอดมินให้กับเซิร์ฟเวอร์เกมของคุณจะถูกอธิบายไว้ด้านล่างนี้  
<InlineVoucher />

## การตั้งค่า
การเพิ่มแอดมินทำได้ผ่านไฟล์ **Users.eco** Config ซึ่งคุณสามารถหาได้ในอินเทอร์เฟซภายใต้เมนู Configs

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)



เพื่อเพิ่มผู้เล่นใหม่เป็นแอดมิน ให้แก้ไขส่วนนี้ในไฟล์ **Users.eco** Config:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```



ผู้เล่นที่ต้องการจะเป็นแอดมินจะถูกระบุในช่อง **values** หากมีหลายแอดมิน ให้เพิ่มโดยคั่นด้วยเครื่องหมายจุลภาค (comma) โดยใช้ SteamID64 ในการระบุผู้เล่น

คุณสามารถหา SteamID64 ได้โดยเข้าไปที่โปรไฟล์ Steam ของคุณ แล้วคลิกขวาที่ส่วนใดก็ได้บนโปรไฟล์ จากนั้นก็สามารถคัดลอก URL ของโปรไฟล์คุณได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)



หลังจากนั้น ให้นำ URL ไปใส่ในเว็บไซต์เหล่านี้:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)



เว็บไซต์เหล่านี้จะแสดงข้อมูลบัญชีทั่วไปรวมถึง Steam ID ซึ่งคุณจะนำ Steam ID นี้ไปใส่ในช่อง **values** ผลลัพธ์จะเป็นแบบนี้:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```



เมื่อเซิร์ฟเวอร์เกมถูกรีสตาร์ท ผู้เล่นที่ถูกเพิ่มในนี้จะได้รับสิทธิ์แอดมินทันที หากต้องการเพิ่มแอดมินเพิ่ม คุณไม่จำเป็นต้องแก้ไข Config ทุกครั้งอีกต่อไป แต่สามารถทำได้ในเกมด้วยคำสั่งนี้:

```
/admin [player]
```



ด้านล่างนี้คือคำสั่งแอดมินที่ใช้บ่อยซึ่งคุณสามารถใช้ได้ในฐานะแอดมิน



## คำสั่งที่ใช้บ่อย

|              คำสั่ง              |                      คำอธิบาย                       |
| :------------------------------: | :-------------------------------------------------: |
|             /allblocks             |                   สปอนบล็อกทั้งหมด                   |
|          /allconstructed           |         สปอนบล็อกที่ผู้เล่นสามารถสร้างได้ทั้งหมด         |
|             /allplants             |                สปอนบล็อกพืชทั้งหมด                   |
|             /allskills             |                   ปลดล็อกสกิลทั้งหมด                   |
|            /allterrain             |               สปอนบล็อกที่ขุดได้ทั้งหมด                |
|          /allworldobjects          |                สปอนวัตถุในโลกทั้งหมด                   |
|      /kick [player],(reason)       |                      เตะผู้เล่นออก                      |
|       /ban [player],(reason)       |                      แบนผู้เล่น                       |
|     /give [itemname],(amount)      |                 มอบไอเท็มให้ตัวเอง                    |
| /giveskillpoints [player],(amount) |           มอบแต้มสกิลให้ผู้เล่นอื่น                    |
|                /fly                |                    สลับโหมดบิน                        |
|         /move [x],[y],[z]          | ย้ายตำแหน่งไปยัง x, y, z โดยที่ xyz เป็นจำนวนเต็ม     |
|       /removeadmin [player]        |               ลบผู้เล่นออกจากแอดมิน                   |

คำสั่งเพิ่มเติมสามารถดูได้ที่ [ECO Wiki อย่างเป็นทางการ](https://eco.gamepedia.com/Chat_Commands)

## สรุป

ยินดีด้วย! คุณตั้งค่าสิทธิ์แอดมินเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />