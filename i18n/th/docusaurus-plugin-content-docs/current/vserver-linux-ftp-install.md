---
id: vserver-linux-ftp-install
title: "VPS: การติดตั้งเซิร์ฟเวอร์ FTP"
description: "ค้นพบวิธีตั้งค่าและจัดการเซิร์ฟเวอร์ FTP ที่ปลอดภัยบน Linux ด้วย FileZilla Server เพื่อถ่ายโอนไฟล์อย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งเซิร์ฟเวอร์ FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

**FTP (File Transfer Protocol)** คือโปรโตคอลเครือข่ายที่ใช้สำหรับถ่ายโอนไฟล์ผ่านเครือข่าย TCP/IP โปรโตคอลนี้ถูกพัฒนาขึ้นเพื่อให้การแลกเปลี่ยนไฟล์ระหว่างระบบเป็นเรื่องง่าย ด้วย **FileZilla Server** คุณสามารถตั้งค่าเซิร์ฟเวอร์ FTP บนระบบปฏิบัติการ Linux ได้ง่าย ๆ FileZilla Server ติดตั้งและตั้งค่าได้ง่าย พร้อมฟีเจอร์มากมาย เช่น การตั้งค่าบัญชีผู้ใช้ การจัดการสิทธิ์การเข้าถึง และการถ่ายโอนไฟล์ ในคู่มือนี้เราจะพาคุณไปดูขั้นตอนการติดตั้งและตั้งค่าบริการ **FileZilla Server** บนเซิร์ฟเวอร์ Linux

<InlineVoucher />

## การติดตั้ง

ก่อนจะเพิ่มผู้ใช้ FTP คุณต้องติดตั้งเซิร์ฟเวอร์ FTP ก่อน โดยเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน SSH (Putty) ครั้งหนึ่ง

เพื่อทำการติดตั้งเซิร์ฟเวอร์ FTP ให้พิมพ์คำสั่ง **apt-get install proftpd** จากนั้นกดยืนยันด้วย **Y** และกด Enter:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

ตอนนี้เราต้องแก้ไขการตั้งค่า config โดยพิมพ์คำสั่ง **nano /etc/proftpd/proftpd.conf** แล้วกด Enter จากนั้นไฟล์ config จะถูกเปิดใน Nano editor:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

ให้เพิ่มบรรทัดต่อไปนี้ลงไป:

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

หลังจากนั้นต้องรีสตาร์ทเซิร์ฟเวอร์ FTP เพื่อให้การเปลี่ยนแปลงมีผล ใช้คำสั่งนี้: **service proftpd restart**

## การเพิ่มผู้ใช้

เพื่อสร้างผู้ใช้ FTP ใหม่ เราต้องสร้างกลุ่ม FTP ก่อน ใช้คำสั่ง **addgroup ftpuser** ผลลัพธ์จะเป็นแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

ตอนนี้เราสามารถเพิ่มผู้ใช้ FTP คนแรกได้ด้วยคำสั่ง: **adduser benutzerftp -shell /bin/false -home /var/www** แล้วตามด้วย **adduser benutzerftp ftpuser**

ระบบจะให้ตั้งรหัสผ่าน:

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

จากนั้นยืนยันข้อมูลที่กรอกถูกต้อง:

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

ขั้นตอนสุดท้ายคือเพิ่มผู้ใช้ใหม่เข้าสู่กลุ่มด้วยคำสั่ง **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

ตอนนี้คุณก็สามารถเชื่อมต่อด้วยข้อมูลที่ตั้งไว้ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)



## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่า FTP สำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />