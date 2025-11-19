---
id: dedicated-linux-xrdp
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง xRDP (รีโมตเดสก์ท็อป)"
description: "เรียนรู้วิธีตั้งค่ารีโมตเดสก์ท็อปบนเซิร์ฟเวอร์ Ubuntu และ Debian เพื่อการจัดการและควบคุมที่ง่ายขึ้น → เริ่มเรียนรู้เลย"
sidebar_label: ติดตั้ง xRDP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

บน Linux ปกติจะมีคอนโซล SSH มาให้เพื่อจัดการเซิร์ฟเวอร์ แต่บางครั้งการใช้การเชื่อมต่อรีโมตเดสก์ท็อปแบบเดียวกับ Windows อาจจะง่ายกว่า  
การติดตั้งหลังจากเซิร์ฟเวอร์พร้อมใช้งานสามารถทำได้กับหลายดิสโทร Linux คู่มือนี้จะอธิบายสำหรับ Ubuntu และ Debian  

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

หลังติดตั้ง ตรวจสอบสถานะให้แสดงว่า "active": 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

ถ้าสถานะโอเค ให้สร้างผู้ใช้ใหม่ จากนั้นรีสตาร์ทบริการ xRDP: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

เมื่อเสร็จสิ้นการตั้งค่า คุณสามารถเชื่อมต่อไปยัง root หรือผู้ใช้ที่ต้องการบนเซิร์ฟเวอร์ผ่านรีโมตเดสก์ท็อปได้  
พอร์ตดีฟอลต์คือ: 3389

## การเชื่อมต่อ

การเชื่อมต่อสามารถทำได้ผ่านเครื่องมือ RDP ใดก็ได้ โดยเชื่อมต่อกับ IP:PORT  
เมื่อเชื่อมต่อจะมีการขอข้อมูลล็อกอิน: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

หลังล็อกอินสำเร็จ คุณจะเห็นเดสก์ท็อป  
บน Ubuntu จะดูต่างจาก Debian เล็กน้อย:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)