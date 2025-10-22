---
id: vserver-windows-fs-22
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 2022 บน Windows"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 2022 บน VPS Windows ของคุณ เพื่อเล่นมัลติเพลเยอร์ได้ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี VPS Windows และต้องการติดตั้งเซิร์ฟเวอร์เฉพาะ Farming Simulator 2022 บนมันใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ  
<InlineVoucher />

## การเตรียมตัว
ต้องใช้เซิร์ฟเวอร์ที่รัน Windows Server 2016/2019 โดยมี CPU อย่างน้อย 4 คอร์ ที่ความเร็ว 2.4 GHz (AMD/Intel) และ RAM อย่างน้อย 2GB (DDR3/4) พร้อมพื้นที่ว่างบนดิสก์ 6GB (SSD หรือดีกว่า แนะนำ) เซิร์ฟเวอร์ต้องเป็นสถาปัตยกรรม 64 บิต  
นอกจากนี้ต้องมี GameLicense ของตัวเอง (ไม่ใช่เวอร์ชัน Steam) และที่อยู่ IPv4 สาธารณะ GPU หรือการ์ดเสียงไม่จำเป็นสำหรับเซิร์ฟเวอร์เฉพาะ  
ขึ้นอยู่กับว่าคุณติดตั้งม็อดหรือ DLC เพิ่มเติมมากแค่ไหน อาจต้องใช้ทรัพยากรมากขึ้น  

## ขั้นตอนที่ 1 ซื้อไลเซนส์ดิจิทัล

ต้องมีเวอร์ชันดิจิทัลของ Farming Simulator 2022 ซึ่งไม่สามารถใช้เวอร์ชัน Steam ได้  
สามารถซื้อเวอร์ชันดิจิทัลได้ที่ [เว็บไซต์ FarmingSimulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital)  
หลังจากซื้อเวอร์ชันดิจิทัลแล้ว สามารถดาวน์โหลด FarmingSimulator ออนไลน์ได้โดยคลิกลิงก์นี้ [Link](https://eshop.giants-software.com/downloads.php) จากอีเมลที่คุณได้รับจาก Giants  
:::info
สำคัญ: ในอีเมลจะมี GameKey ซึ่งจำเป็นสำหรับการดาวน์โหลดและการเปิดใช้งานในภายหลัง  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## ขั้นตอนที่ 2 ดาวน์โหลด Farming Simulator ลงบนเซิร์ฟเวอร์ Windows ของคุณโดยตรง

เชื่อมต่อผ่าน [Initial Access (RDP)](vserver-windows-userdp.md) ไปยังเซิร์ฟเวอร์ Windows ของคุณ หลังจากเชื่อมต่อแล้ว เปิดเบราว์เซอร์และไปที่ [ลิงก์](https://eshop.giants-software.com/downloads.php) จากอีเมลอีกครั้ง จากนั้นใส่ GameKey ของคุณและเลือกดาวน์โหลดสำหรับ Windows8/10  

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

ไฟล์จะถูกดาวน์โหลดและควรอยู่ในโฟลเดอร์ดาวน์โหลด (โฟลเดอร์ดาวน์โหลดอาจแตกต่างกันไป)

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

ดับเบิลคลิกที่ไฟล์เพื่อเปิดและรัน Setup.exe  
จากนั้นอ่านข้อกำหนดและเงื่อนไข (TOS) และยืนยัน หลังจากนั้นสามารถติดตั้งแบบ Standard หรือ Custom ได้ โดยปกติ Standard ก็เพียงพอแล้ว  
สุดท้ายคลิกติดตั้งและ FarmingSimulator 2022 จะถูกติดตั้ง ใช้เวลาสักครู่  

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

เมื่อการติดตั้งเสร็จสิ้น จะมีข้อความแจ้งเตือนขึ้นมา ให้กดยืนยันด้วย "Finish"  

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

ตอนนี้การติดตั้งพื้นฐานเสร็จสมบูรณ์แล้ว  

## ขั้นตอนที่ 3 เปิดใช้งานเกมและตั้งค่าเซิร์ฟเวอร์เฉพาะ

ตอนนี้ต้องเปิด Farming Simulator ขึ้นมา จะมีช็อตคัตบนเดสก์ท็อป ถ้าไม่มีสามารถเปิดผ่านเมนู Windows ได้  
ถ้ามีข้อผิดพลาดเกี่ยวกับ GPU หายไปหรืออื่น ๆ สามารถข้ามหรือปิดด้วย No/Cancel ได้ Farming Simulator แค่ต้องเปิดเพื่อใส่คีย์เท่านั้น  

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

ตอนนี้ต้องตั้งชื่อผู้ใช้และรหัสผ่าน หรือตรวจสอบข้อมูลใน Config ของเซิร์ฟเวอร์เฉพาะ เพื่อให้สามารถล็อกอินเข้าเว็บอินเทอร์เฟซของเซิร์ฟเวอร์เฉพาะได้  
ไฟล์ Config จะอยู่ในโฟลเดอร์ติดตั้งปกติที่  
`C:\Program Files (x86)\Farming Simulator 2022` ชื่อไฟล์ `"dedicatedServer.xml"`  
ข้อมูลล็อกอินสามารถตั้งค่าได้ตามใจชอบ  

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## ขั้นตอนที่ 4 เริ่มเซิร์ฟเวอร์เฉพาะ Farming Simulator 2022

เพื่อเริ่มเซิร์ฟเวอร์เฉพาะ ให้รัน `"dedicatedServer.exe"` ในโฟลเดอร์เดียวกับที่มี `"dedicatedServer.xml"`  

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

จากนั้นเปิดเว็บอินเทอร์เฟซผ่าน `https://SERVER-IP:8080`  

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

ล็อกอินด้วยข้อมูลที่ตั้งไว้ใน `"dedicatedServer.xml"`  
การตั้งค่าเพิ่มเติมในเว็บอินเทอร์เฟซใช้งานง่ายและทำได้ด้วยคลิกไม่กี่ครั้ง ตามความต้องการของคุณ  

## ขั้นตอนที่ 5 ปลดล็อกพอร์ตในไฟร์วอลล์

เซิร์ฟเวอร์ต้องเปิดให้เข้าถึงได้สาธารณะเพื่อเล่นกับเพื่อน ๆ ดังนั้นต้องเปิดพอร์ตในไฟร์วอลล์ Windows  
พอร์ต 10823 และ 8080 ต้องเปิดสำหรับโปรโตคอล TCP  
10823 คือพอร์ตเซิร์ฟเวอร์เกม และ 8080 คือพอร์ตเว็บสำหรับเว็บอินเทอร์เฟซ ซึ่งพอร์ตเว็บนี้เปิดเฉพาะถ้าต้องการใช้งานเท่านั้น เพราะยังสามารถจัดการผ่าน RDP บนเซิร์ฟเวอร์ Windows ได้โดยตรง  
วิธีเปิดพอร์ตบน Windows: [Port Forwarding (Firewall)](vserver-windows-port.md)  

หลังจากเปิดพอร์ต เซิร์ฟเวอร์จะเข้าถึงได้สาธารณะถ้าเซิร์ฟเวอร์ถูกสตาร์ทแล้ว  

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Farming Simulator 2022 บน VPS ของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!  

<InlineVoucher />