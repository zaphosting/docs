---
id: voiceserver-voicebot-connection
title: "Voiceserver: การเชื่อมต่อ Voice Bot กับเซิร์ฟเวอร์เสียงของคุณ"
description: "ค้นพบวิธีเชื่อมต่อ Voice Bot ของคุณกับเซิร์ฟเวอร์ TeamSpeak และ Discord เพื่อการสื่อสารและควบคุมที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เชื่อมต่อกับเซิร์ฟเวอร์เสียง
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## แนะนำ

อยากเชื่อมต่อ Voice Bot ของคุณกับเซิร์ฟเวอร์ TeamSpeak แต่ยังไม่รู้จะเริ่มยังไงใช่ไหม? ไม่ต้องห่วง เดี๋ยวเราจะอธิบายให้ละเอียดเลย!



## การเชื่อมต่อบอทกับ TeamSpeak ของคุณ

ถ้าจะเชื่อมต่อ Voice Bot กับเซิร์ฟเวอร์ TeamSpeak 3 ของคุณ ให้เข้าไปที่แผงควบคุมก่อน จากนั้นไปที่ **Server** ทางซ้ายตามภาพนี้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

ตอนนี้คุณสามารถเลือก TeamSpeak ภายใต้ **Server** ได้เลย ถ้าเซิร์ฟเวอร์นั้นถูกจองผ่านบัญชีของคุณ ถ้าโฮสต์ภายนอก คุณก็สามารถเลือก **Custom Teamspeak Server** ได้เช่นกัน

จากนั้นกรอกข้อมูลด้านล่าง แล้วกดบันทึก เท่านี้ Voice Bot ก็จะเชื่อมต่อกับเซิร์ฟเวอร์ TeamSpeak 3 ของคุณ ตัวอย่างเช่นนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## การเชื่อมต่อบอทกับ Discord ของคุณ

ถ้าจะเชื่อมต่อ Voice Bot กับ Discord ให้ไปที่ **Server** แล้วเลือก **Discord**

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

จากนั้นกรอก **Discord Bot Token** และ **Discord Bot Client ID** ลงไป Voice Bot ก็จะเชื่อมต่อกับเซิร์ฟเวอร์ Discord ของคุณ


## วิธีหาค่า Discord Bot Token และ Client ID

เพราะเซิร์ฟเวอร์ Discord ไม่มีที่อยู่ IP หรือพอร์ตตรงๆ จึงต้องเตรียมขั้นตอนก่อนใช้งานบอทบนเซิร์ฟเวอร์ Discord


### การสร้างแอปพลิเคชัน Discord

สิ่งแรกที่ต้องทำคือสร้างแอปพลิเคชัน Discord บอทของคุณจะถูกผูกกับแอปนี้และทำงานในชื่อของมัน เข้าไปที่ [Discord Developer Portal](https://discord.com/developers/applications/) เพื่อสร้างแอป

จากนั้นคลิก **New Application** เพื่อสร้างแอปใหม่ และตั้งชื่อแอปตามภาพนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

กด **Create** เพื่อสร้างแอป แล้วจดจำ Application ID ไว้สำหรับขั้นตอนถัดไป:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### ตั้งค่าบอทและรับ Token

ตอนสร้างแอป ระบบจะสร้างบอทให้อัตโนมัติ คุณสามารถรับ token ได้ง่ายๆ โดยกด **Reset Token** แล้วจด token นี้ไว้ให้ดี:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
อย่าเปิดเผย token ของบอทให้ใครรู้ เพื่อให้บอทของคุณทำงานได้อย่างราบรื่นและปลอดภัย Token นี้เหมือนกุญแจลับ ห้ามแชร์เด็ดขาด
:::

ในหน้านี้ เลื่อนลงมานิดนึงแล้วเปิดใช้งาน **Presence Intent**, **Server Members Intent** และ **Message Content Intent** แล้วบันทึกการเปลี่ยนแปลง:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### เชิญบอทเข้าร่วม Discord ของคุณ

เพื่อเชิญบอท ให้เอา client ID ที่จดไว้ใส่ในลิงก์นี้ตรงตำแหน่งที่เหมาะสม แล้วเปิดลิงก์ในเบราว์เซอร์เพื่อเพิ่มบอทเข้าเซิร์ฟเวอร์ Discord ของคุณ ตัวอย่างลิงก์จะเป็นแบบนี้:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### ตั้งค่าแผงควบคุมบอท

ตอนนี้ ให้นำ token และ client ID ที่จดไว้ใส่ในช่องที่กำหนดในแผงควบคุม ZAP-Hosting แล้วกด **Save** ที่ด้านล่าง:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

จากนั้นก็เริ่มบอทได้เลย บอทจะเชื่อมต่อกับเซิร์ฟเวอร์ Discord ของคุณภายในประมาณ 10 วินาที


## สรุป

Voice Bot เป็นผลิตภัณฑ์ที่มีประโยชน์และสนุกมากสำหรับหลายๆ คน คุณสามารถใช้ได้ทั้งบนเซิร์ฟเวอร์ TeamSpeak หรือ Discord ถ้ามีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />