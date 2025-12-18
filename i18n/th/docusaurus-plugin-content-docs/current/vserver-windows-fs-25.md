---
id: vserver-windows-fs-25
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 2025 บน Windows"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 2025 บน VPS Windows ของคุณ เพื่อเล่นมัลติเพลเยอร์ได้อย่างลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Farming Simulator 2025
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี VPS Windows และต้องการติดตั้งบริการเซิร์ฟเวอร์เฉพาะ Farming Simulator 2025 บนมันใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<InlineVoucher />

## การเตรียมตัว

เพื่อเช่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 2025 คุณต้องมีเซิร์ฟเวอร์ Windows พร้อมกับไลเซนส์เกมที่ถูกต้องเพื่อรันเซิร์ฟเวอร์เฉพาะนี้

ก่อนเริ่มติดตั้ง ให้เชื่อมต่อกับเซิร์ฟเวอร์ Windows ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการเชื่อมต่อ

### ไลเซนส์เกม

เพื่อเช่าเซิร์ฟเวอร์เฉพาะบนเซิร์ฟเวอร์ Windows ของคุณ คุณต้องมีสำเนาดิจิทัลของ Farming Simulator 2025 โดยตรงจากเว็บไซต์ [Farming Simulator](https://www.farming-simulator.com/buy-now.php)

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

คุณไม่สามารถใช้คีย์ไลเซนส์เดียวกับที่ใช้เล่นเกมได้ ดังนั้นคุณจะต้องซื้อเกม **อีกหนึ่ง** ชุดสำหรับเซิร์ฟเวอร์เฉพาะของคุณเท่านั้น

:::info ไลเซนส์เกม Steam
สามารถใช้ไลเซนส์เกม Steam เพื่อเช่าเซิร์ฟเวอร์เฉพาะได้ แต่จะไม่สะดวกมากเพราะคุณจะต้องรัน Steam client ตลอดเวลาเบื้องหลัง และจะไม่สามารถเล่นเกมอื่นบนระบบอื่นโดยใช้บัญชี Steam เดียวกันได้เนื่องจากข้อจำกัดของ Steam ดังนั้นเราขอแนะนำให้ซื้อคีย์แยกต่างหากจากเว็บไซต์โดยตรงเพื่อหลีกเลี่ยงปัญหานี้

แต่ถ้าคุณตั้งใจจะใช้ไลเซนส์ **Steam** ให้ติดตั้งไฟล์ผ่าน Steam ตามปกติแล้วข้ามไปที่ส่วน **ตั้งค่าเซิร์ฟเวอร์เฉพาะ** ของคู่มือแทน
:::

เมื่อคุณซื้อเวอร์ชันดิจิทัลจากเว็บไซต์แล้ว คุณจะได้รับรหัสผลิตภัณฑ์ทางอีเมลที่คุณให้ไว้ตอนชำระเงิน คุณจะต้องใช้คีย์ไลเซนส์นี้ในส่วนถัดไปเพื่อดาวน์โหลดเกมและยืนยันเซิร์ฟเวอร์เฉพาะในขั้นตอนการตั้งค่า

## การติดตั้ง

### การติดตั้งไฟล์

เมื่อคุณมีคีย์ไลเซนส์และเซิร์ฟเวอร์ Windows พร้อมแล้ว ให้ไปที่หน้า [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) บนเซิร์ฟเวอร์ Windows ของคุณและกรอกคีย์ไลเซนส์ที่ได้รับทางอีเมล

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

ถ้าสำเร็จ คุณจะเข้าถึงหน้าที่มีวิธีดาวน์โหลดเกมหลายแบบ ให้หาออปชันหลัก Windows **Farming Simulator 25 (Windows 10/11)** แล้วเลือกดาวน์โหลด

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

การดาวน์โหลดจะเริ่มขึ้นและอาจใช้เวลานานเพราะเป็นการดาวน์โหลดเกมทั้งหมด กรุณารออย่างใจเย็น

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

เมื่อดาวน์โหลดเสร็จ ให้ไปที่โฟลเดอร์ดาวน์โหลดและหาไฟล์ **.img** ที่ดาวน์โหลดมา เปิดโดยดับเบิลคลิกเพื่อเมานต์ไดรฟ์ใน File Explorer

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

จากนั้นรันไฟล์ **Setup.exe** และยอมรับคำเตือน UAC ตามด้วยการทำตามเมนูติดตั้ง ซึ่งรวมถึงการยอมรับเงื่อนไขและปรับเปลี่ยนเส้นทางติดตั้งถ้าต้องการ

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

รอจนกระบวนการติดตั้งเสร็จสมบูรณ์ จากนั้นออกจากเมนูติดตั้ง เราแนะนำให้คลิกขวาที่ **DVD Drive** ที่เมานต์ใน File Explorer แล้วเลือก **Eject** เพื่อถอดไดรฟ์ออกเพราะไม่จำเป็นอีกต่อไป ตอนนี้การติดตั้งเกมพื้นฐานเสร็จสมบูรณ์แล้ว

### การเปิดใช้งานเกม

หลังติดตั้งเกมแล้ว คุณต้องรันเกมอย่างน้อยหนึ่งครั้งเพื่อเปิดใช้งานเกม รันเกมจากทางลัดบนเดสก์ท็อปหรือผ่านแถบค้นหาของ Windows

เมื่อเปิดเกมครั้งแรก คุณจะเห็นหน้าต่างให้ใส่คีย์ไลเซนส์ ให้กรอกคีย์ที่ได้รับทางอีเมลแล้วกดยืนยัน ถ้าสำเร็จ เกมจะถูกเปิดใช้งานและโหลดต่อไป

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

ตอนนี้คุณสามารถปิดเกมได้เพราะไม่จำเป็นต้องใช้แล้ว และไปยังส่วนถัดไปเพื่อเซ็ตอัพเซิร์ฟเวอร์เฉพาะและเว็บอินเทอร์เฟซที่มาพร้อมกัน หากเจอข้อผิดพลาด **Video Driver** ให้เลือก **no** เพื่อยกเลิกการเริ่มต้นเกมทันที

## ตั้งค่าเซิร์ฟเวอร์เฉพาะ

เมื่อเกมพร้อมแล้ว คุณต้องปรับแต่งการตั้งค่าบางอย่างสำหรับเซิร์ฟเวอร์เฉพาะ เริ่มจากเข้าไปที่โฟลเดอร์ติดตั้งเกม โดยปกติจะอยู่ที่ `C:\Program Files (x86)\Farming Simulator 2025` แต่ถ้าคุณเปลี่ยนเส้นทางตอนติดตั้ง อาจจะอยู่ที่อื่น

เมื่อเจอโฟลเดอร์แล้ว ให้หาและเปิดไฟล์ **dedicatedServer.xml** ด้วยโปรแกรมแก้ไขข้อความ

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

เราแนะนำให้แก้ไขช่อง `username` และ `passphrase` ที่อยู่บนสุดของไฟล์เป็นของคุณเอง ซึ่งจะเป็นข้อมูลล็อกอินสำหรับเว็บอินเทอร์เฟซของเซิร์ฟเวอร์ อย่าลืมบันทึกไฟล์และปิดเมื่อเสร็จ

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### การเข้าถึงเว็บอินเทอร์เฟซ

หลังตั้งค่าข้อมูลล็อกอินแล้ว คุณสามารถเริ่มเซิร์ฟเวอร์โดยรันไฟล์ **dedicatedServer.exe** ที่อยู่ในโฟลเดอร์หลักของเกม

:::info สิทธิ์ผู้ดูแลระบบ
ต้องรันไฟล์เซิร์ฟเวอร์เฉพาะด้วยสิทธิ์ผู้ดูแลระบบ (Run as administrator) ไม่เช่นนั้นอาจเจอปัญหาเวลาเริ่มเซิร์ฟเวอร์เกม ให้คลิกขวาที่ไฟล์แล้วเลือก **Run as administrator**
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

จะมีหน้าต่าง CMD ใหม่เปิดขึ้นมา ซึ่งจะสร้างใบรับรองและติดตั้งอัปเดตหรือเครื่องมือที่จำเป็น อาจใช้เวลานานในครั้งแรก กรุณารออย่างใจเย็น

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

เมื่อพร้อมแล้ว คุณจะสามารถเข้าถึงเว็บอินเทอร์เฟซได้โดยพิมพ์ `http://[your_serverip]:8080` ในเว็บเบราว์เซอร์ ใช้ข้อมูลล็อกอินที่ตั้งไว้เพื่อเข้าสู่ระบบ

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

ในเว็บอินเทอร์เฟซนี้ คุณจะสามารถปรับแต่งเซิร์ฟเวอร์ได้หลากหลาย เช่น การตั้งค่า จัดการเซฟเกม จัดการม็อด และอื่นๆ อีกมากมาย

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์

เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องตั้งค่ากฎการส่งต่อพอร์ตสำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้ คุณสามารถทำได้ผ่านคำสั่ง PowerShell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **PowerShell** ให้คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทำงานได้ถูกต้อง

:::info
ต้องรัน PowerShell ในโหมดผู้ดูแลระบบ มิฉะนั้นการตั้งค่าอาจไม่ทำงานอย่างถูกต้อง
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ใน PowerShell:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Farming Simulator 2025 ของคุณเข้าถึงได้จากภายนอก

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ FS2025 ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามนี้และเพิ่มพอร์ตและโปรโตคอลดังนี้:
- TCP ขาเข้าและขาออก: 8080, 10823
- UDP ขาเข้าและขาออก: 8080, 10823

ถ้าต้องการความช่วยเหลือเพิ่มเติม โปรดดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md)

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้จากภายนอก ซึ่งหมายความว่าคุณจะสามารถเข้าถึงเว็บอินเทอร์เฟซจากอินเทอร์เน็ตและเชื่อมต่อเซิร์ฟเวอร์ในเกมได้

### การเริ่มเซิร์ฟเวอร์

หลังตั้งค่าทุกอย่างและตั้งค่าไฟร์วอลล์แล้ว ให้ไปที่หน้าแรกของเว็บอินเทอร์เฟซแล้วกดปุ่ม **Start** เพื่อเริ่มบูตเซิร์ฟเวอร์

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

ถ้าสำเร็จ เซิร์ฟเวอร์จะเริ่มบูตและคุณจะเห็นสถานะในอินเทอร์เฟซและหน้าต่าง CMD ใหม่ที่รันเซิร์ฟเวอร์เกม หากเจอปัญหาเวลาเริ่มเซิร์ฟเวอร์ ให้แน่ใจว่าคุณรันอินเทอร์เฟซด้วยสิทธิ์ผู้ดูแลระบบ

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 2025 บน VPS ของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />