---
id: dedicated-linux-xrdp
title: "ตั้งค่า xRDP บนเซิร์ฟเวอร์ Linux - เปิดใช้งานการเข้าถึงเดสก์ท็อประยะไกล"
description: "ค้นพบวิธีตั้งค่าการเข้าถึงเดสก์ท็อประยะไกลบนเซิร์ฟเวอร์ Ubuntu และ Debian เพื่อการจัดการและควบคุมที่ง่ายขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง xRDP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

บน Linux โดยปกติจะมีคอนโซล SSH เริ่มต้นสำหรับจัดการเซิร์ฟเวอร์ ในบางกรณีอาจสะดวกกว่าถ้าใช้การเชื่อมต่อเดสก์ท็อประยะไกล คล้ายกับ Windows  
สามารถติดตั้งหลังการติดตั้งระบบได้สำหรับดิสโทร Linux ส่วนใหญ่ คู่มือนี้จะอธิบายสำหรับ Ubuntu และ Debian  

:::info
สำคัญ: ต้องใช้ระบบปฏิบัติการอย่างน้อย Ubuntu 18.04.X LTS (Bionic Beaver) หรือ Debian 10 (Buster) แนะนำให้ใช้เวอร์ชันใหม่กว่า  
:::

## การติดตั้ง xRDP

อันดับแรก ควรอัปเดตเซิร์ฟเวอร์ก่อน: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

หลังจากอัปเดตแล้ว ให้ติดตั้งแพ็กเกจที่จำเป็น: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

จากนั้นติดตั้ง xRDP: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

หลังติดตั้ง สถานะควรแสดงว่า "active": 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

ถ้าสถานะโอเค ต้องสร้างผู้ใช้ขึ้นมาก่อน จากนั้นรีสตาร์ทบริการ xRDP: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

เมื่อเสร็จสิ้นการตั้งค่า คุณสามารถเชื่อมต่อกับ root หรือข้อมูลผู้ใช้ที่เกี่ยวข้องของเซิร์ฟเวอร์ผ่าน Remote Desktop ได้  
พอร์ตเริ่มต้นคือ: 3389

## การเชื่อมต่อ

สามารถเชื่อมต่อผ่านเครื่องมือ RDP ใดก็ได้ โดยเชื่อมต่อกับ IP:PORT  
เมื่อเชื่อมต่อจะมีการขอข้อมูลล็อกอิน: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

หลังล็อกอินสำเร็จ คุณจะเห็นเดสก์ท็อป  
บน Ubuntu จะดูแตกต่างจาก Debian เล็กน้อย:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)