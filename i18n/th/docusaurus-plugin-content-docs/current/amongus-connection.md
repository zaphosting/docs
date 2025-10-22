---
id: amongus-connection
title: "Among Us: การเชื่อมต่อกับเซิร์ฟเวอร์"
description: "ค้นหาวิธีตั้งค่าและเชื่อมต่อกับเซิร์ฟเวอร์ Among Us ของคุณเพื่อเล่นมัลติเพลเยอร์ได้อย่างลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การเชื่อมต่อกับเซิร์ฟเวอร์
services:
  - gameserver-amongus
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## เตรียมตัว - การดาวน์โหลด

เพื่อให้คุณเข้าร่วมเซิร์ฟเวอร์ของคุณได้ เราต้องมีไฟล์ที่ช่วยให้เชื่อมต่อได้
เริ่มแรกเปิด [Impostor](https://impostor.github.io/Impostor/) ซึ่งเราต้องกรอกข้อมูลของเรา

ในการสร้างไฟล์ เราต้องใช้ข้อมูลเช่น ที่อยู่ IP, พอร์ต และชื่อเซิร์ฟเวอร์
![](https://screensaver01.zap-hosting.com/index.php/s/bQ7KzTAJcbAsLJd/preview)

กรอกข้อมูลจากแผงควบคุม ZAP-Hosting ของคุณที่นี่ ตัวอย่างเช่น:

![](https://screensaver01.zap-hosting.com/index.php/s/7scfddD5WPFr25b/preview)

โดยที่ 31.214.245.215 คือที่อยู่ IP ของคุณ และ 2000 คือพอร์ต

ชื่อเซิร์ฟเวอร์สามารถตั้งได้ตามใจ เมื่อกรอกข้อมูลครบแล้วให้คลิกที่ "Download Server File"
ไฟล์ชื่อ "regioninfo.json" จะถูกดาวน์โหลดลงเครื่องของคุณ

ถัดไปกด `Win` + `R` แล้วพิมพ์

```
%APPDATA%\..\LocalLow\Innersloth\Among Us
```

แล้วกด Enter โฟลเดอร์จะเปิดขึ้น ให้ย้ายไฟล์ regioninfo.json เข้าไปแทนที่ไฟล์เดิม

![](https://screensaver01.zap-hosting.com/index.php/s/KTrfij6ww64DPCq/preview)


## สร้างเซิร์ฟเวอร์ "ในเกม"

เปิด Among Us บน PC ของคุณ
คลิกที่ "online" ในเมนูหลัก แล้วคลิกที่ "Create Game"

![](https://screensaver01.zap-hosting.com/index.php/s/SfMwr82R9BbDK2P/preview)

ที่นี่คุณสามารถตั้งค่าต่างๆ สำหรับเซิร์ฟเวอร์ของคุณได้ตามต้องการ:

![](https://screensaver01.zap-hosting.com/index.php/s/imzCR9WZenyrTSX/preview)

เมื่อเสร็จแล้วให้คลิกที่ "confirm"
ตอนนี้คุณเชื่อมต่อกับเซิร์ฟเวอร์ของคุณเรียบร้อยแล้ว!

ในล็อบบี้คุณสามารถตั้งได้ว่าเซิร์ฟเวอร์จะเป็นแบบสาธารณะหรือส่วนตัว
ถ้าต้องการเปลี่ยน ให้คลิกที่ไอคอน "Private" หรือ "Public":

ถ้าเซิร์ฟเวอร์ตั้งเป็น "Public" ผู้เล่นคนอื่นก็สามารถเชื่อมต่อเซิร์ฟเวอร์ได้เหมือนกัน
ผู้เล่นเหล่านี้ไม่ต้องคลิก "Create Game" ในเมนูหลักของเกม แต่ให้คลิกที่ "Find Game"
ตรงนี้สำคัญที่ต้องตั้งแชทเป็น "others" และตัวกรองต้องตรงกับการตั้งค่าของเซิร์ฟเวอร์เป๊ะๆ
ถ้าไม่ตรง เซิร์ฟเวอร์จะไม่แสดงขึ้นมา

ถ้าเป็นเซิร์ฟเวอร์ "Private" ต้องคลิกที่ "Enter Code" ในเมนูหลัก
แล้วกรอกรหัสที่ผู้สร้างเซิร์ฟเวอร์เห็นในล็อบบี้


<InlineVoucher />