---
id: source-custom-content
title: การติดตั้งคอนเทนต์และม็อดแบบกำหนดเองบนเซิร์ฟเวอร์เกม
description: "ค้นพบวิธีที่คอนเทนต์แบบกำหนดเองช่วยเพิ่มประสบการณ์การเล่นเกมในเกม Source อย่าง Counter-Strike และ Garry's Mod ด้วยแมพ สกิน และเสียง → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: คอนเทนต์แบบกำหนดเอง
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## คอนเทนต์แบบกำหนดเองคืออะไร?

เกม Source บางเกมอย่าง Counter-Strike หรือ Garry's Mod มีชื่อเสียงเรื่องความหลากหลาย ทั้งหมดนี้เป็นไปได้เพราะการสนับสนุนปลั๊กอินและ **คอนเทนต์แบบกำหนดเอง** โหมดเกมต่างๆ ถูกพัฒนาขึ้นตลอดหลายปี เช่น Zombie Mod, Hide and Seek, Minigames, Jailbreak และอื่นๆ อีกมากมาย

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

เซิร์ฟเวอร์เหล่านี้มักจะใช้แมพ สกินผู้เล่น และเสียงที่สร้างโดยชุมชน เพื่อให้ผู้เล่นสามารถใช้หรือดูคอนเทนต์แบบกำหนดเองของเซิร์ฟเวอร์ได้ คอนเทนต์ต้องถูกดาวน์โหลดจากเซิร์ฟเวอร์ก่อน ในกรณีนี้มีสองวิธี:

- FastDL
- Steam Workshop

ขึ้นอยู่กับขอบเขตการใช้งาน ตัวเลือกหนึ่งอาจเหมาะสมกว่าตัวเลือกอื่น ด้านล่างนี้เป็นภาพรวมความแตกต่างระหว่าง FastDL กับ Workshop:

|  คอนเทนต์แบบกำหนดเอง  | FastDL | Steam Workshop |
| :---------------------: | :----: | :------------: |
|          แมพ            |   ✓    |       ✓        |
| วัสดุ/โมเดล             |   ✓    |       ✗        |
|          เสียง           |   ✓    |       ✗        |



## การตั้งค่าคอนเทนต์แบบกำหนดเอง



### FastDL

ต่อไปนี้จะอธิบายการตั้งค่าเซิร์ฟเวอร์ FastDL โดยใช้หนึ่งใน [ผลิตภัณฑ์เว็บโฮสติ้ง](https://zap-hosting.com/en/shop/product/webspace/) ของเรา แต่คุณก็สามารถใช้ตัวเลือกอื่นที่มีเว็บเซิร์ฟเวอร์สาธารณะได้เช่นกัน เริ่มต้นด้วยการเปิดผลิตภัณฑ์เว็บโฮสติ้งและเปิดแผงจัดการ:

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



เมื่อเข้าไปแล้ว ให้เปิดตัวจัดการไฟล์และสร้างโฟลเดอร์ดังนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



จากนั้นต้องกำหนดสิทธิ์เว็บโฮสติ้งเพื่อให้การดาวน์โหลดคอนเทนต์ในเกมทำงานได้อย่างถูกต้อง:

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
ต้องตั้งค่าสิทธิ์สำหรับทุกโฟลเดอร์นะ!
:::

ตอนนี้สามารถอัปโหลดคอนเทนต์แบบกำหนดเองได้แล้ว โดยไฟล์ต้องมีทั้งบนเซิร์ฟเวอร์เกมและบน FastDL (เว็บโฮสติ้ง) บนเซิร์ฟเวอร์เกมไฟล์จะถูกอัปโหลดแบบแตกไฟล์แล้ว ส่วนบน FastDL ควรอัปโหลดแบบบีบอัดเป็น bzip2 โปรแกรม 7Zip แนะนำสำหรับงานนี้

สุดท้าย ต้องระบุเซิร์ฟเวอร์ FastDL ให้กับเซิร์ฟเวอร์เกม การตั้งค่าทำผ่านไฟล์ **server.cfg** โดยเพิ่มคำสั่งเหล่านี้ใน Config:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // แทนที่ URL ด้วย URL เว็บโฮสติ้ง ZAP ของคุณ
```

หลังจากรีสตาร์ทและเชื่อมต่อกับเซิร์ฟเวอร์ คอนเทนต์ที่เกี่ยวข้องควรถูกดาวน์โหลด ซึ่งสามารถตรวจสอบได้ในคอนโซลของเกม:

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

ต่อไปนี้จะอธิบายการตั้งค่า Steam Workshop ก่อนอื่นต้องเปิดหน้า Steam Workshop โดยเลือกเกมที่ต้องการใน Steam แล้วเปิด Workshop ของเกมนั้น ในตัวอย่างนี้ใช้ [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections) เมื่อเข้าไปแล้ว คลิกเมนู Browse แล้วเลือก Collection:

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

จากนั้นคลิกขวาที่ Collection แล้วสร้างคอลเลกชันสำหรับเซิร์ฟเวอร์เกม:

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

คอลเลกชันถูกสร้างเรียบร้อยแล้ว แต่ยังว่างเปล่าโดยดีฟอลต์ ดังนั้นให้กลับไปที่ Workshop ของเกมและเลือกไอเท็มที่ต้องการเพิ่ม:

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

เมื่อเลือกเสร็จแล้ว ให้กลับไปที่คอลเลกชัน คลิกขวาแล้วเลือก Copy Page URL เอา ID ของคอลเลกชันจาก URL ซึ่งจะมีลักษณะแบบนี้:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

สุดท้าย นำ ID นี้ไปเพิ่มใน Steam Workshop ในแผงจัดการเซิร์ฟเวอร์เกมของคุณ:

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />