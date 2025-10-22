---
id: discordbot-setup
title: ตั้งค่า Discord Bot ของคุณ
description: "ค้นพบวิธีการรันและจัดการ Discord bot สำหรับการม็อด, เพลง, แจกของรางวัล และอื่นๆ ด้วยการเช่าเซิร์ฟเวอร์ที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ตั้งค่า
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## แนะนำ

**เซิร์ฟเวอร์ Discord bot** ช่วยให้คุณรัน Discord bot ได้อย่างลื่นไหลและต่อเนื่อง บอทเหล่านี้สามารถทำงานหลากหลาย เช่น การม็อดช่อง Discord อัตโนมัติ, เล่นเพลง, จัดกิจกรรมแจกของรางวัลและโพลล์ และอีกมากมาย

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="วิธีตั้งค่าเซิร์ฟเวอร์ Discord bot และอัปโหลดไฟล์บอท!" description="รู้สึกเข้าใจมากขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำน้ำดูวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุกๆ!"/>

<InlineVoucher />



## ภาษาที่รองรับ

Discord bot สามารถเขียนได้หลายภาษา สินค้าของเรารองรับ Discord Bot ที่เขียนด้วยภาษาการเขียนโปรแกรมต่อไปนี้:

- Java
- Python
- NodeJS

  
  

## การเตรียมตัว



### รับบอท

เพื่อเริ่มต้น คุณต้องมี Discord bot ที่ใช้งานได้เต็มรูปแบบ คุณสามารถสร้างเองหรือดาวน์โหลดบอทสำเร็จรูปจากอินเทอร์เน็ต แล้วบันทึกไว้ในคอมพิวเตอร์เพื่อให้อัปโหลดไปยังบริการของคุณได้ง่ายๆ

### อัปโหลดไฟล์

ไฟล์ของ Discord bot ต้องถูกอัปโหลด ซึ่งทำได้ผ่าน FTP หากคุณไม่แน่ใจวิธีใช้ FTP เราแนะนำให้ดู [คู่มือการเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) สำหรับคำแนะนำละเอียด

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


เมื่อเปิดโฟลเดอร์แล้ว คุณก็แค่ลากไฟล์บอทเข้าไปในโฟลเดอร์ว่างๆ ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## การตั้งค่า

เพื่อให้รันบอทผ่านแดชบอร์ดได้ บอทต้องถูกตั้งค่าใน Discord Bot Dashboard ภายใต้หน้า **Settings**

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

ตรงนี้คุณต้องตั้งค่าภาษาการเขียนโปรแกรมที่บอทใช้ และชื่อไฟล์หลักที่บอทจะรัน ในตัวอย่างนี้ใช้ Python 3 และระบุชื่อไฟล์ของ Discord bot ที่จะรันคือ `main.py`

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Dependencies
Discord bot มักจะมี dependencies เพิ่มเติมสำหรับฟังก์ชันการทำงานของมัน ตรวจสอบให้แน่ใจว่าทุกอย่างถูกติดตั้งและตั้งค่าอย่างถูกต้องใน Discord bot ของคุณ โดย dependencies เหล่านี้จะถูกกำหนดไว้ในไฟล์ต่อไปนี้:

- Python: Dependencies ใน `requirements.txt`
- Node.js: Dependencies ใน `package.json`
- Java: Dependencies ใน `pom.xml` (Maven) หรือ `build.gradle` (Gradle)

:::



## ทดสอบการทำงาน

หลังจากบันทึกการตั้งค่าแล้ว คุณสามารถเริ่มบอทได้ง่ายๆ ด้วยการกดปุ่มเริ่มสีเขียวที่ด้านบนของหน้า ในคอนโซลสดคุณจะเห็นว่าบอทเริ่มทำงานสำเร็จหรือไม่



## สรุป

ยินดีด้วย คุณได้ติดตั้งและตั้งค่า Discord Bot เรียบร้อยแล้ว หากมีคำถามหรืออยากได้ความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂






<InlineVoucher />