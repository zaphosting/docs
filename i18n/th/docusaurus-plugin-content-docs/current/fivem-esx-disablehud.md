---
id: fivem-esx-disablehud
title: "FiveM: ปิด/เปิด HUD"
description: "เข้าใจวิธีอัปเดตการตั้งค่าเซิร์ฟเวอร์ ESX ของคุณเพื่อจัดการ HUD ได้ดีขึ้นและเพิ่มประสิทธิภาพเซิร์ฟเวอร์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ปิด HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archived Guide
เอกสารนี้ถูกเก็บถาวรแล้ว เอกสารจะถูกเก็บถาวรเมื่อไม่เกี่ยวข้อง, ไม่ถูกต้อง หรือไม่ทันสมัยอีกต่อไป สาเหตุที่เก็บถาวรมีดังนี้:

**เหตุผล**: วิธีการนี้ใช้กับเวอร์ชัน ESX ที่ล้าสมัย วิธีนี้ไม่สามารถใช้กับเวอร์ชัน ESX ปัจจุบันได้เพราะโครงสร้างเปลี่ยนไปแล้ว
::::



<InlineVoucher />

## 📑 หาและแก้ไข Config

เมื่อทำเสร็จแล้ว ให้เราเปิดหน้า Config ขึ้นมาแล้วค้นหา es_extended  
กด CTRL + F แล้วพิมพ์ es_extended  
คุณจะเจอมันเร็วแน่นอน  
เราจะทำงานกับส่วนนี้

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

ตอนนี้มาดูที่ Config.EnableHUD กัน

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

จากนั้นตั้งค่านี้เป็น false แล้วบันทึกไฟล์

ต่อไปไปที่ Server.cfg  
ไฟล์นี้ก็หาได้ในหน้า Config เหมือนกัน  
จากนั้นค้นหาอีกครั้งด้วย STR + F สำหรับ es_  
เราจะค้นหา es_ui แล้วลบบรรทัดนี้ออกให้หมด  
แล้วบันทึกอีกครั้ง

เมื่อทำเสร็จแล้ว แค่รีสตาร์ทเซิร์ฟเวอร์ก็เรียบร้อยแล้ว

<InlineVoucher />