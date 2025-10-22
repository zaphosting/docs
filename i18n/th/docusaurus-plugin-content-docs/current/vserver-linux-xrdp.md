---
id: vserver-linux-xrdp
title: "VPS: การติดตั้ง xRDP (รีโมตเดสก์ท็อป)"
description: "เรียนรู้วิธีตั้งค่าการเข้าถึงรีโมตเดสก์ท็อปบนเซิร์ฟเวอร์ Ubuntu และ Debian เพื่อการจัดการและควบคุมที่ง่ายขึ้น → เริ่มเรียนรู้เลย"
sidebar_label: ติดตั้ง xRDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

บน Linux ปกติจะมีคอนโซล SSH มาให้เพื่อจัดการเซิร์ฟเวอร์ แต่บางครั้งการใช้การเชื่อมต่อรีโมตเดสก์ท็อปก็ง่ายกว่า เหมือนกับ Windows  
การติดตั้งหลังจากเซ็ตอัพระบบสามารถทำได้กับลินุกซ์ดิสโทรส่วนใหญ่ คู่มือนี้จะอธิบายสำหรับ Ubuntu และ Debian  
<InlineVoucher />

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
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

ถ้าสถานะโอเค ให้สร้างผู้ใช้ใหม่ จากนั้นรีสตาร์ทบริการ xRDP: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

เมื่อเสร็จสิ้นการตั้งค่า คุณสามารถเชื่อมต่อกับ root หรือผู้ใช้ที่ต้องการผ่านรีโมตเดสก์ท็อปได้  
พอร์ตดีฟอลต์คือ: 3389

## การเชื่อมต่อ

สามารถเชื่อมต่อผ่านเครื่องมือ RDP ใดก็ได้ โดยใช้ IP:PORT  
เมื่อเชื่อมต่อจะมีหน้าต่างให้กรอกข้อมูลล็อกอิน: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

หลังล็อกอินสำเร็จ คุณจะเห็นเดสก์ท็อป  
บน Ubuntu จะดูต่างจาก Debian เล็กน้อย:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## สรุป

ยินดีด้วย คุณติดตั้ง XRDP สำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือทุกวัน! 

<InlineVoucher />