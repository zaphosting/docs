---
id: voiceserver-voicebot-connection
title: "Voiceserver: การเชื่อมต่อ Voice Bot กับเซิร์ฟเวอร์เสียงของคุณ"
description: "ค้นพบวิธีเชื่อมต่อ Voice Bot ของคุณกับเซิร์ฟเวอร์ TeamSpeak และ Discord เพื่อการสื่อสารและควบคุมที่ไร้รอยต่อ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เชื่อมต่อกับเซิร์ฟเวอร์เสียง
services:
  - voiceserver
  - voicebot
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## แนะนำ

อยากเชื่อมต่อ Voice Bot ของคุณกับเซิร์ฟเวอร์ TeamSpeak แต่ยังไม่รู้จะเริ่มยังไงใช่ไหม? ไม่ต้องห่วง เดี๋ยวเราจะอธิบายให้ละเอียดเลย!



## การเชื่อมต่อบอทกับ TeamSpeak ของคุณ

ถ้าจะเชื่อมต่อ Voice Bot กับเซิร์ฟเวอร์ TeamSpeak 3 ของคุณ ให้เข้าไปที่แผงควบคุม จากนั้นไปที่ **Server** ทางซ้ายมือตามภาพด้านล่างนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

ตอนนี้คุณสามารถเลือก TeamSpeak ภายใต้ **Server** ได้เลย ถ้าเซิร์ฟเวอร์นั้นถูกจองไว้กับบัญชีของคุณแล้ว ถ้าเซิร์ฟเวอร์โฮสต์ภายนอก คุณก็สามารถเลือก **Custom Teamspeak Server** ได้เช่นกัน

จากนั้นกรอกข้อมูลด้านล่าง แล้วกดบันทึก เท่านี้ Voice Bot ก็จะเชื่อมต่อกับเซิร์ฟเวอร์ TeamSpeak 3 ของคุณ ตัวอย่างเช่นนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## การเชื่อมต่อบอทกับ Discord ของคุณ

ถ้าจะเชื่อมต่อ Voice Bot กับ Discord ให้ไปที่ **Server** แล้วเลือก **Discord**

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

จากนั้นกรอก **Discord Bot Token** และ **Discord Bot Client ID** ลงไป Voice Bot ก็จะเชื่อมต่อกับเซิร์ฟเวอร์ Discord ของคุณ


## วิธีหาค่า Discord Bot Token และ Client ID

เพราะเซิร์ฟเวอร์ Discord ไม่มีที่อยู่ IP หรือพอร์ตตรง ๆ จึงต้องเตรียมขั้นตอนเล็กน้อยก่อนจะใช้บอทบนเซิร์ฟเวอร์ Discord ได้


### การสร้างแอปพลิเคชัน Discord

สิ่งแรกที่ต้องทำคือสร้างแอปพลิเคชัน Discord บอทของคุณจะถูกผูกกับแอปนี้และทำงานในชื่อของมัน เพื่อสร้างแอป ให้เข้าไปที่ [Discord Developer Portal](https://discord.com/developers/applications/)

ตอนนี้ให้สร้างแอปใหม่โดยคลิกที่ **New Application** แล้วตั้งชื่อแอปตามภาพนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

จากนั้นกด **Create** เพื่อสร้างแอป สำหรับขั้นตอนต่อไป ให้จดจำรหัสแอป (Application ID) ไว้ด้วย:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### ตั้งค่าบอทและรับ Token

ตอนสร้างแอป ระบบจะสร้างบอทให้อัตโนมัติ คุณสามารถรับ token ได้ง่าย ๆ โดยกด **Reset Token** จากนั้นจะได้ user token ที่ควรจดไว้หรือเก็บไว้ที่ปลอดภัย:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
อย่าเปิดเผย token ของบอทให้ใครรู้เด็ดขาด เพื่อให้บอทของคุณทำงานได้อย่างราบรื่นและปลอดภัย Token นี้เหมือนกุญแจลับที่ไม่ควรแชร์
:::

ในหน้าเดียวกัน เลื่อนลงมาเล็กน้อยแล้วเปิดใช้งาน **Presence Intent**, **Server Members Intent** และ **Message Content Intent** จากนั้นบันทึกการเปลี่ยนแปลง:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### เชิญบอทเข้าร่วม Discord ของคุณ

เพื่อเชิญบอท ให้เอา client ID ที่จดไว้ใส่ในลิงก์นี้ตรงส่วน client_id แล้วเปิดลิงก์ในเบราว์เซอร์ จากนั้นเพิ่มบอทเข้าเซิร์ฟเวอร์ Discord ของคุณ ตัวอย่างลิงก์จะเป็นแบบนี้:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### ตั้งค่าแผงควบคุมบอท

ตอนนี้ให้ใส่ token และ client ID ที่จดไว้ลงในช่องที่แผงควบคุม ZAP-Hosting เตรียมไว้ แล้วกด **Save** ด้านล่าง:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

จากนั้นก็เริ่มบอทได้เลย บอทจะเชื่อมต่อกับเซิร์ฟเวอร์ Discord ของคุณภายในประมาณ 10 วินาที


## สรุป

Voice Bot เป็นผลิตภัณฑ์ที่มีประโยชน์และสนุกสำหรับหลาย ๆ คน คุณสามารถใช้ได้ทั้งบนเซิร์ฟเวอร์ TeamSpeak หรือ Discord ถ้ามีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />