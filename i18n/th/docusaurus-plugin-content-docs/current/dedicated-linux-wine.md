---
id: dedicated-linux-wine
title: "เซิร์ฟเวอร์เฉพาะ: ตั้งค่า Wine Compatibility Layer บน Linux"
description: "ค้นหาวิธีตั้งค่า Wine บน Linux เพื่อรันเซิร์ฟเวอร์เกม Windows ได้ลื่นไหลบน Ubuntu และระบบที่คล้ายกัน → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ตั้งค่า Wine Compatibility Layer
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Wine คือเลเยอร์ความเข้ากันได้แบบโอเพนซอร์สสำหรับ Linux ที่ช่วยให้ซอฟต์แวร์ที่พัฒนาสำหรับ Windows สามารถรันบนระบบ Linux ได้ ซึ่งสำคัญมากสำหรับเซิร์ฟเวอร์เกมเฉพาะที่มีไฟล์เซิร์ฟเวอร์สำหรับ Windows เท่านั้น และอาจจำเป็นเป็นข้อกำหนดเบื้องต้นสำหรับคู่มือเซิร์ฟเวอร์เกมเฉพาะ Linux อื่น ๆ ในคู่มือนี้ เราจะพาไปดูขั้นตอนการตั้งค่า Wine ครั้งแรกบนเซิร์ฟเวอร์ Linux ของคุณ โดยใช้ Ubuntu เป็นตัวอย่าง แต่ขั้นตอนนี้ก็คล้ายกันกับดิสโทรอื่น ๆ

## เตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับเซิร์ฟเวอร์เฉพาะของคุณผ่าน SSH ใช้ [คู่มือ SSH Initial Access](vserver-linux-ssh.md) ของเรา ถ้าคุณต้องการความช่วยเหลือในการเชื่อมต่อ

## การติดตั้ง Wine

เริ่มต้นการติดตั้งโดยตรวจสอบให้แน่ใจว่าไดเรกทอรี `/etc/apt/keyrings/` มีอยู่แล้ว เพราะจำเป็นสำหรับ Wine
```
sudo mkdir -pm755 /etc/apt/keyrings
```

จากนั้นดาวน์โหลดและเก็บกุญแจ GPG ของ Wine ลงในไดเรกทอรีนี้ เพื่อยืนยันว่าแพ็กเกจเป็นของแท้
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

คุณจะต้องบันทึกรายการแหล่งที่มาของ WineHQ ด้วย ซึ่งสามารถทำได้ด้วยคำสั่งที่เตรียมไว้แล้วนี้:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

รันคำสั่งอัปเดตเพื่อให้ระบบอ่านและติดตั้งการเปลี่ยนแปลงแพ็กเกจ
```
sudo apt update
```

ตอนนี้คุณสามารถดำเนินการดาวน์โหลดเวอร์ชันล่าสุดของ Wine ได้เลย ซึ่งอาจใช้เวลาสักครู่
```
sudo apt install --install-recommends winehq-staging
```

สุดท้าย คุณต้องติดตั้งแพ็กเกจเสริมบางตัวเพื่อให้ Wine ทำงานได้ดีบนเซิร์ฟเวอร์เกมเฉพาะ โดยรันคำสั่งนี้
```
sudo apt install cabextract winbind screen xvfb
```

## สรุป

ตอนนี้คุณได้ตั้งค่าเลเยอร์ความเข้ากันได้ Wine เรียบร้อยแล้ว ซึ่งจะช่วยให้คุณรันโปรแกรม Windows บนเซิร์ฟเวอร์ Linux ได้ ด้วยข้อกำหนดสำคัญนี้ติดตั้งเสร็จแล้ว คุณก็พร้อมที่จะติดตั้งเซิร์ฟเวอร์เกมเฉพาะ แม้จะเป็นไฟล์สำหรับ Windows ก็ตาม

เราแนะนำให้ดูคู่มืออื่น ๆ ในส่วนนี้ที่ครอบคลุมการติดตั้งเกมเฉพาะผ่าน SteamCMD และอาจใช้ Wine สำหรับไฟล์เซิร์ฟเวอร์เฉพาะที่เป็น Windows ด้วยเช่นกัน