---
id: vserver-windows-fs-19
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 2019 บน Windows"
description: "เรียนรู้วิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 2019 บน Windows VPS เพื่อเล่นมัลติเพลเยอร์ได้ลื่นไหล → เริ่มเรียนรู้เลย"
sidebar_label: Farming Simulator 2019
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี Windows VPS และอยากติดตั้งเซิร์ฟเวอร์เฉพาะ Farming Simulator 2019 ไว้ใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณแบบทีละขั้นตอน  
<InlineVoucher />

## การเตรียมตัว

ต้องใช้เซิร์ฟเวอร์ที่รัน Windows Server 2016/2019 ที่มี CPU อย่างน้อย 4 คอร์ ความเร็ว 2.4 GHz (AMD/Intel) และ RAM อย่างน้อย 2GB (DDR3/4) พร้อมพื้นที่ว่างบนดิสก์ 6GB (SSD หรือดีกว่า แนะนำให้ใช้ SSD) เซิร์ฟเวอร์ต้องเป็นสถาปัตยกรรม 64 บิต  
นอกจากนี้ต้องมี GameLicense ของตัวเอง (ไม่ใช่เวอร์ชัน Steam) และที่อยู่ IPv4 สาธารณะ GPU หรือการ์ดเสียงไม่จำเป็นสำหรับเซิร์ฟเวอร์เฉพาะนี้  
ขึ้นอยู่กับว่าคุณติดตั้งม็อดหรือ DLC เพิ่มเติมมากแค่ไหน อาจต้องใช้ทรัพยากรมากขึ้นตามไปด้วย  

## ขั้นตอนที่ 1 ซื้อไลเซนส์ดิจิทัล

ต้องมีเวอร์ชันดิจิทัลของ Farming Simulator 2019 เท่านั้น ห้ามใช้เวอร์ชัน Steam  
สามารถซื้อเวอร์ชันดิจิทัลได้ที่ [เว็บไซต์ Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital)  
หลังจากซื้อแล้ว สามารถดาวน์โหลด Farming Simulator ออนไลน์ได้จากลิงก์ในอีเมลที่ได้รับจาก Giants [ลิงก์ดาวน์โหลด](https://eshop.giants-software.com/downloads.php)  
:::info  
สำคัญ: ในอีเมลจะมี GameKey ซึ่งจำเป็นสำหรับดาวน์โหลดและเปิดใช้งานการติดตั้งในภายหลัง  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## ขั้นตอนที่ 2 ดาวน์โหลด Farming Simulator ลงบน Windows เซิร์ฟเวอร์ของคุณโดยตรง

เชื่อมต่อผ่าน [Initial Access (RDP)](vserver-windows-userdp.md) ไปยัง Windows เซิร์ฟเวอร์ของคุณ เมื่อเชื่อมต่อแล้ว เปิดเบราว์เซอร์และไปที่ [ลิงก์](https://eshop.giants-software.com/downloads.php) จากอีเมลอีกครั้ง จากนั้นใส่ GameKey และเลือกดาวน์โหลดสำหรับ Windows 8/10  

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

ไฟล์จะถูกดาวน์โหลดและควรอยู่ในโฟลเดอร์ดาวน์โหลด (โฟลเดอร์นี้อาจแตกต่างกันไป)

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

ดับเบิลคลิกที่ไฟล์เพื่อเปิดและรัน Setup.exe  
อ่านข้อตกลงการใช้งาน (TOS) และยืนยัน หลังจากนั้นเลือกติดตั้งแบบ Standard หรือ Custom โดยปกติ Standard ก็เพียงพอแล้ว  
สุดท้ายคลิกติดตั้ง Farming Simulator 2019 จะเริ่มติดตั้ง ใช้เวลาสักครู่  

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

เมื่อการติดตั้งเสร็จสิ้น จะมีข้อความแจ้งเตือนขึ้นมา ให้กด "Finish" เพื่อยืนยัน  

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

ตอนนี้การติดตั้งพื้นฐานเสร็จเรียบร้อยแล้ว  

## ขั้นตอนที่ 3 เปิดใช้งานเกมและตั้งค่าเซิร์ฟเวอร์เฉพาะ

ตอนนี้ให้เปิด Farming Simulator ขึ้นมา จะมีชอร์ตคัตบนเดสก์ท็อป ถ้าไม่มีสามารถเปิดผ่านเมนู Windows ได้  
ถ้ามีข้อผิดพลาดเกี่ยวกับ GPU หายไปหรืออื่น ๆ ให้กด No/Cancel ปิดไปได้เลย Farming Simulator แค่ต้องเปิดเพื่อใส่คีย์เท่านั้น  

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

เมื่อระบบตรวจสอบคีย์เรียบร้อย จะมีข้อความยืนยันขึ้นมา  

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

ตอนนี้ต้องตั้งชื่อผู้ใช้และรหัสผ่าน หรือแก้ไข/อ่านข้อมูลใน Config ของเซิร์ฟเวอร์เฉพาะ เพื่อให้สามารถล็อกอินเข้าเว็บอินเทอร์เฟซของเซิร์ฟเวอร์เฉพาะได้  
ไฟล์ Config จะอยู่ในโฟลเดอร์ติดตั้งปกติที่  
`C:\Program Files (x86)\Farming Simulator 2019` ชื่อไฟล์ `"dedicatedServer.xml"`  
ข้อมูลล็อกอินสามารถตั้งค่าได้ตามใจชอบ  

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## ขั้นตอนที่ 4 เริ่มเซิร์ฟเวอร์เฉพาะ Farming Simulator 2019

เพื่อเริ่มเซิร์ฟเวอร์เฉพาะ ให้รัน `"dedicatedServer.exe"` ในโฟลเดอร์เดียวกับที่มี `"dedicatedServer.xml"`  

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

จากนั้นเปิดเว็บอินเทอร์เฟซผ่าน `https://SERVER-IP:8080`  

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

ล็อกอินด้วยข้อมูลที่ตั้งไว้ใน `"dedicatedServer.xml"`  
การตั้งค่าเพิ่มเติมในเว็บอินเทอร์เฟซใช้งานง่าย ทำได้ด้วยคลิกไม่กี่ครั้งตามความต้องการของคุณ  

## ขั้นตอนที่ 5 ปลดล็อกพอร์ตในไฟร์วอลล์

เซิร์ฟเวอร์ต้องเปิดให้เข้าถึงได้สาธารณะเพื่อเล่นกับเพื่อน ๆ ดังนั้นต้องเปิดพอร์ตในไฟร์วอลล์ Windows  
พอร์ต 10823 และ 8080 ต้องเปิดสำหรับโปรโตคอล TCP  
10823 คือพอร์ตเซิร์ฟเวอร์เกม ส่วน 8080 คือพอร์ตเว็บสำหรับเว็บอินเทอร์เฟซ ซึ่งพอร์ตเว็บเปิดเฉพาะเมื่อจำเป็นเท่านั้น เพราะยังสามารถจัดการผ่าน RDP บน Windows เซิร์ฟเวอร์ได้  
วิธีเปิดพอร์ตบน Windows: [Port Forwarding (Firewall)](vserver-windows-port.md)  

หลังจากเปิดพอร์ตแล้ว เซิร์ฟเวอร์จะเข้าถึงได้สาธารณะถ้าเซิร์ฟเวอร์ถูกสตาร์ทแล้ว  

## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Farming Simulator 2019 บน VPS ของคุณสำเร็จแล้ว! ถ้ามีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!  

<InlineVoucher />