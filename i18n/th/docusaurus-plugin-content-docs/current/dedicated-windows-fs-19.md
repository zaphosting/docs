---
id: dedicated-windows-fs-19
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Farming Simulator 2019 Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่า Farming Simulator Dedicated Server 2019 บน Windows VPS หรือเซิร์ฟเวอร์เฉพาะของคุณอย่างรวดเร็วและมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี Windows VPS หรือเซิร์ฟเวอร์เฉพาะและต้องการติดตั้งบริการ Farming Simulator Dedicated Server 2019 บนเครื่องใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณทีละขั้นตอน



## การเตรียมตัว

ต้องใช้เซิร์ฟเวอร์ที่ใช้ Windows Server 2016/2019 พร้อม CPU อย่างน้อย 4x 2.4 GHz (AMD/Intel) และ RAM อย่างน้อย 2GB (DDR3/4) และพื้นที่ว่างบนดิสก์ 6GB (SSD หรือดีกว่า แนะนำ) เซิร์ฟเวอร์ต้องรันบนสถาปัตยกรรม 64 บิต  
นอกจากนี้ต้องมี GameLicense ของตัวเอง (ไม่ใช่เวอร์ชัน Steam) และที่อยู่ IPv4 สาธารณะ GPU หรือการ์ดเสียงไม่จำเป็นสำหรับ Dedicated Server  
ขึ้นอยู่กับว่าม็อดหรือ DLC ที่ติดตั้งบนเซิร์ฟเวอร์เฉพาะมีมากแค่ไหน อาจต้องใช้ทรัพยากรมากขึ้น  


## ขั้นตอนที่ 1 ซื้อไลเซนส์ดิจิทัล

ต้องมีเวอร์ชันดิจิทัลของ Farming Simulator 2019 ซึ่งไม่สามารถใช้เวอร์ชัน Steam ได้  
เวอร์ชันดิจิทัลสามารถซื้อได้ที่ [เว็บไซต์ Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital)  
หลังจากซื้อเวอร์ชันดิจิทัลแล้ว สามารถดาวน์โหลด Farming Simulator ออนไลน์ได้โดยคลิกลิงก์นี้ [Link](https://eshop.giants-software.com/downloads.php) จากอีเมลที่คุณได้รับจาก Giants  
:::info
สำคัญ: ในอีเมลจะมี GameKey ซึ่งจำเป็นสำหรับการดาวน์โหลดและการเปิดใช้งานการติดตั้งในภายหลัง  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## ขั้นตอนที่ 2 ดาวน์โหลด Farming Simulator โดยตรงไปยังเซิร์ฟเวอร์ Windows ของคุณ

เชื่อมต่อผ่าน [Initial Access (RDP)](vserver-windows-userdp.md) ไปยังเซิร์ฟเวอร์ Windows ของคุณ หลังจากเชื่อมต่อแล้ว เปิดเบราว์เซอร์และไปที่ [ลิงก์](https://eshop.giants-software.com/downloads.php) จากอีเมลอีกครั้ง จากนั้นใส่ GameKey ของคุณและเลือกดาวน์โหลดสำหรับ Windows8/10  

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

ไฟล์จะถูกดาวน์โหลดและควรอยู่ในโฟลเดอร์ดาวน์โหลด (โฟลเดอร์ดาวน์โหลดอาจแตกต่างกัน)

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

ดับเบิลคลิกที่ไฟล์เพื่อเปิดและเรียกใช้ Setup.exe  
จากนั้นอ่านข้อกำหนดการใช้งาน (TOS) และยืนยัน หลังจากนั้นสามารถติดตั้งแบบ Standard หรือ Custom ได้ โดยปกติ Standard ก็เพียงพอ  
สุดท้ายคลิกติดตั้งและ Farming Simulator 2019 จะถูกติดตั้ง ซึ่งอาจใช้เวลาสักครู่  

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

เมื่อกระบวนการติดตั้งเสร็จสิ้น จะมีข้อความแจ้งเตือนขึ้นมา ให้กดยืนยันด้วย "Finish"  

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

การติดตั้งพื้นฐานเสร็จสมบูรณ์แล้ว  

## ขั้นตอนที่ 3 เปิดใช้งานเกมและตั้งค่าเซิร์ฟเวอร์เฉพาะ

ตอนนี้ต้องเปิด Farming Simulator ขึ้นมา จะมีช็อตคัตบนเดสก์ท็อป ถ้าไม่มีสามารถเปิดผ่านเมนู Windows ได้  
ข้อผิดพลาดเกี่ยวกับ GPU ที่ขาดหายไปหรืออื่นๆ สามารถละเลยหรือปิดด้วย No/Cancel ได้ Farming Simulator แค่ต้องเปิดเพื่อใส่คีย์เท่านั้น  

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

เมื่อระบบตรวจสอบคีย์แล้ว จะมีข้อความยืนยันขึ้นมา  

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

ตอนนี้ต้องตั้งชื่อผู้ใช้และรหัสผ่าน หรือเปลี่ยน/อ่านค่าใน Config ของ Dedicated Server เพื่อให้สามารถล็อกอินเข้าเว็บอินเทอร์เฟซของ Dedicated Server ได้  
ไฟล์ Config จะอยู่ในโฟลเดอร์ติดตั้งมาตรฐานที่  
`C:\Program Files (x86)\Farming Simulator 2019` ภายใต้ชื่อ `"dedicatedServer.xml"`  
ข้อมูลล็อกอินสามารถปรับแต่งได้ตามต้องการ  

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## ขั้นตอนที่ 4 เริ่มต้น Farming Simulator 2019 Dedicated Server

เพื่อเริ่มเซิร์ฟเวอร์เฉพาะ ให้รัน `"dedicatedServer.exe"` ในโฟลเดอร์เดียวกับที่มี `"dedicatedServer.xml"`  

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

จากนั้นสามารถเปิดเว็บอินเทอร์เฟซผ่าน `https://SERVER-IP:8080`  

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

ล็อกอินได้ด้วยข้อมูลล็อกอินที่ตั้งไว้/อ่านได้จาก `"dedicatedServer.xml"`  
การตั้งค่าเพิ่มเติมในเว็บอินเทอร์เฟซเข้าใจง่ายและทำได้ด้วยคลิกไม่กี่ครั้งตามความต้องการส่วนตัวของคุณ  

## ขั้นตอนที่ 5 ปลดล็อกพอร์ตในไฟร์วอลล์

เซิร์ฟเวอร์ควรเปิดให้เข้าถึงได้สาธารณะเพื่อเล่นกับเพื่อนๆ ดังนั้นพอร์ตของเซิร์ฟเวอร์ต้องถูกเปิดในไฟร์วอลล์ Windows  
พอร์ต 10823 และ 8080 ต้องถูกปล่อยให้ใช้โปรโตคอล TCP  
10823 คือพอร์ตเซิร์ฟเวอร์เกม และ 8080 คือพอร์ตเว็บสำหรับเว็บอินเทอร์เฟซ พอร์ตเว็บต้องปล่อยเฉพาะถ้าจำเป็นเท่านั้น เพราะการจัดการยังสามารถทำได้เฉพาะในเครื่อง Windows ผ่าน RDP  
วิธีเปิดพอร์ตบน Windows: [Port Forwarding (Firewall)](vserver-windows-port.md)  

หลังจากปล่อยพอร์ตแล้ว เซิร์ฟเวอร์จะเข้าถึงได้สาธารณะถ้าเซิร์ฟเวอร์ถูกเริ่มทำงานแล้ว  


