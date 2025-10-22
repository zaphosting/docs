---
id: dedicated-windows-fs-22
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Farming Simulator 2022 Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่า Farming Simulator Dedicated Server 2022 บน VPS หรือเซิร์ฟเวอร์เฉพาะ Windows ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Farming Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี VPS หรือเซิร์ฟเวอร์เฉพาะ Windows และต้องการติดตั้งบริการ Farming Simulator Dedicated Server 2022 บนเครื่องไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<InlineVoucher />

## การเตรียมตัว
ต้องใช้เซิร์ฟเวอร์ที่ใช้ Windows Server 2016/2019 พร้อม CPU อย่างน้อย 4 คอร์ ที่ความเร็ว 2.4 GHz (AMD/Intel) และ RAM อย่างน้อย 2GB (DDR3/4) รวมถึงพื้นที่ว่างบนดิสก์ 6GB (SSD หรือดีกว่า แนะนำ) เซิร์ฟเวอร์ต้องรันบนสถาปัตยกรรม 64 บิต  
นอกจากนี้ต้องมี GameLicense ของตัวเอง (ไม่ใช่เวอร์ชัน Steam) และที่อยู่ IPv4 สาธารณะ GPU หรือการ์ดเสียงไม่จำเป็นสำหรับ Dedicated Server  
ขึ้นอยู่กับว่าคุณปรับแต่งเซิร์ฟเวอร์เฉพาะมากแค่ไหน เช่น เพิ่มม็อดหรือ DLC อาจต้องใช้ทรัพยากรมากขึ้น  

## ขั้นตอนที่ 1 ซื้อไลเซนส์ดิจิทัล

ต้องมีเวอร์ชันดิจิทัลของ Farming Simulator 2022 ซึ่งไม่สามารถใช้เวอร์ชัน Steam ได้  
เวอร์ชันดิจิทัลสามารถซื้อได้ที่ [เว็บไซต์ FarmingSimulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital)  
หลังจากซื้อเวอร์ชันดิจิทัลแล้ว สามารถดาวน์โหลด FarmingSimulator ออนไลน์ได้โดยคลิกที่ลิงก์นี้ [Link](https://eshop.giants-software.com/downloads.php) จากอีเมลที่คุณได้รับจาก Giants  
:::info
สำคัญ: ในอีเมลจะมี GameKey ซึ่งจำเป็นสำหรับการดาวน์โหลดและการเปิดใช้งานในภายหลัง  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/MXkbf8pNSYJAmGt/preview)

## ขั้นตอนที่ 2 ดาวน์โหลด Farming Simulator โดยตรงไปยังเซิร์ฟเวอร์ Windows ของคุณ

เชื่อมต่อผ่าน [Initial Access (RDP)](vserver-windows-userdp.md) ไปยังเซิร์ฟเวอร์ Windows ของคุณ เมื่อเชื่อมต่อแล้ว เปิดเบราว์เซอร์และไปที่ [ลิงก์](https://eshop.giants-software.com/downloads.php) จากอีเมลอีกครั้ง จากนั้นกรอก GameKey ของคุณและเลือกดาวน์โหลดสำหรับ Windows8/10  

![](https://screensaver01.zap-hosting.com/index.php/s/wDa758WS8aKDBwE/preview)

ไฟล์จะถูกดาวน์โหลดและควรอยู่ในโฟลเดอร์ดาวน์โหลด (โฟลเดอร์ดาวน์โหลดอาจแตกต่างกัน)

![](https://screensaver01.zap-hosting.com/index.php/s/3KZ9wstGSz6JTke/preview)

ดับเบิลคลิกที่ไฟล์เพื่อเปิดและรัน Setup.exe  
จากนั้นอ่านข้อกำหนดการใช้งาน (TOS) และยืนยัน หลังจากนั้นสามารถติดตั้งแบบ Standard หรือ Custom ได้ โดยปกติ Standard ก็เพียงพอแล้ว  
สุดท้ายคลิกติดตั้งและ FarmingSimulator 2022 จะถูกติดตั้ง ซึ่งอาจใช้เวลาสักครู่  

![](https://screensaver01.zap-hosting.com/index.php/s/A4daMGF35a6aCj4/preview)

เมื่อกระบวนการติดตั้งเสร็จสิ้น จะมีข้อความแจ้งเตือนขึ้นมา ให้คลิก "Finish" เพื่อยืนยัน  

![](https://screensaver01.zap-hosting.com/index.php/s/EWcaeSD8HacP8je/preview)

การติดตั้งพื้นฐานเสร็จสมบูรณ์แล้ว  

## ขั้นตอนที่ 3 เปิดใช้งานเกมและตั้งค่าเซิร์ฟเวอร์เฉพาะ

ตอนนี้ต้องเปิด Farming Simulator ขึ้นมา จะมีช็อตคัตบนเดสก์ท็อป ถ้าไม่มีสามารถเปิดผ่านเมนู Windows ได้  
ถ้ามีข้อผิดพลาดเกี่ยวกับ GPU หายไปหรืออื่นๆ สามารถมองข้ามหรือปิดด้วย No/Cancel ได้ Farming Simulator แค่ต้องเปิดเพื่อใส่คีย์เท่านั้น  

![](https://screensaver01.zap-hosting.com/index.php/s/5FcRkkxajWFN6D5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/FXzNNeaBzAP794w/preview)

ตอนนี้ต้องตั้งชื่อผู้ใช้และรหัสผ่าน หรือเปลี่ยน/อ่านค่าใน Config ของ Dedicated Server เพื่อให้สามารถล็อกอินเข้าเว็บอินเทอร์เฟซของ Dedicated Server ได้  
ไฟล์ Config จะอยู่ในโฟลเดอร์ติดตั้งมาตรฐานที่  
`C:\Program Files (x86)\Farming Simulator 2022` ชื่อไฟล์ `"dedicatedServer.xml"`  
ข้อมูลล็อกอินสามารถตั้งค่าได้ตามใจชอบ  

![](https://screensaver01.zap-hosting.com/index.php/s/LHkeCNSnEtE5Rd8/preview)

## ขั้นตอนที่ 4 เริ่มต้น Farming Simulator 2022 Dedicated Server

เพื่อเริ่มเซิร์ฟเวอร์เฉพาะ ให้รัน `"dedicatedServer.exe"` ในโฟลเดอร์เดียวกับที่มี `"dedicatedServer.xml"`  

![](https://screensaver01.zap-hosting.com/index.php/s/43ZYGoNiE7npxDz/preview)

จากนั้นสามารถเปิดเว็บอินเทอร์เฟซได้ที่ `https://SERVER-IP:8080`  

![](https://screensaver01.zap-hosting.com/index.php/s/RbfZFQZkRSX4okr/preview)

ล็อกอินด้วยข้อมูลที่ตั้งไว้ใน `"dedicatedServer.xml"`  
การตั้งค่าเพิ่มเติมในเว็บอินเทอร์เฟซเข้าใจง่ายและทำได้ด้วยคลิกไม่กี่ครั้งตามความต้องการของคุณ  

## ขั้นตอนที่ 5 ปลดล็อกพอร์ตในไฟร์วอลล์

เซิร์ฟเวอร์ต้องเปิดให้เข้าถึงได้สาธารณะเพื่อเล่นกับเพื่อนๆ ดังนั้นพอร์ตของเซิร์ฟเวอร์ต้องถูกเปิดในไฟร์วอลล์ Windows  
พอร์ต 10823 และ 8080 ต้องเปิดสำหรับโปรโตคอล TCP  
10823 คือพอร์ตเซิร์ฟเวอร์เกม และ 8080 คือพอร์ตเว็บสำหรับเว็บอินเทอร์เฟซ ซึ่งพอร์ตเว็บต้องเปิดเฉพาะถ้าจำเป็น เพราะการจัดการยังสามารถทำได้เฉพาะในเครื่อง Windows ผ่าน RDP  
วิธีเปิดพอร์ตบน Windows: [Port Forwarding (Firewall)](vserver-windows-port.md)  

หลังจากเปิดพอร์ตแล้ว เซิร์ฟเวอร์จะเข้าถึงได้สาธารณะถ้าเซิร์ฟเวอร์ถูกสตาร์ทแล้ว  

<InlineVoucher />