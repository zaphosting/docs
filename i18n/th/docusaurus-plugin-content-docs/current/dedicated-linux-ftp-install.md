---
id: dedicated-linux-ftp-install
title: "ตั้งค่า ProFTPD บนเซิร์ฟเวอร์ Linux - โฮสต์บริการ FTP ที่ปลอดภัย"
description: "ค้นพบวิธีตั้งค่าและจัดการเซิร์ฟเวอร์ FTP ที่ปลอดภัยบน Linux ด้วย FileZilla Server เพื่อให้การโอนถ่ายไฟล์และการเข้าถึงของผู้ใช้เป็นเรื่องง่าย → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งเซิร์ฟเวอร์ FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

**FTP (File Transfer Protocol)** คือโปรโตคอลเครือข่ายที่ใช้สำหรับโอนถ่ายไฟล์ผ่านเครือข่าย TCP/IP โปรโตคอลนี้ถูกพัฒนาขึ้นเพื่อให้การแลกเปลี่ยนไฟล์ระหว่างระบบเป็นเรื่องง่าย ด้วย **FileZilla Server** คุณสามารถตั้งค่าเซิร์ฟเวอร์ FTP บนระบบปฏิบัติการ Linux ได้อย่างง่ายดาย FileZilla Server ติดตั้งและตั้งค่าได้ง่าย พร้อมฟีเจอร์มากมาย เช่น การตั้งค่าบัญชีผู้ใช้ การจัดการสิทธิ์การเข้าถึง และการโอนถ่ายไฟล์ ในคู่มือนี้เราจะพาคุณไปดูขั้นตอนการติดตั้งและตั้งค่าบริการ **FileZilla Server** บนเซิร์ฟเวอร์ Linux

## วิธีติดตั้งเซิร์ฟเวอร์ FTP เพื่อเพิ่มผู้ใช้?

ก่อนจะเพิ่มผู้ใช้ FTP คุณต้องติดตั้งเซิร์ฟเวอร์ FTP ก่อน โดยเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน SSH (Putty) ครั้งหนึ่ง

เพื่อเริ่มติดตั้งเซิร์ฟเวอร์ FTP ให้พิมพ์คำสั่ง **apt-get install proftpd** จากนั้นกดยืนยันด้วย **Y** และกด Enter:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

ตอนนี้เราต้องแก้ไขการตั้งค่า config โดยพิมพ์คำสั่ง **nano /etc/proftpd/proftpd.conf** แล้วกด Enter จากนั้นไฟล์ config จะเปิดขึ้นใน Nano editor:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

ให้เพิ่มบรรทัดต่อไปนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

หลังจากนั้นต้องรีสตาร์ทเซิร์ฟเวอร์ FTP เพื่อให้การเปลี่ยนแปลงมีผล ใช้คำสั่งนี้: **service proftpd restart**

## วิธีเพิ่มผู้ใช้ FTP?

ก่อนจะสร้างผู้ใช้ FTP ใหม่ เราต้องสร้างกลุ่ม FTP ก่อน ใช้คำสั่ง **addgroup ftpuser** ผลลัพธ์จะเป็นแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

ตอนนี้เราสามารถเพิ่มผู้ใช้ FTP คนแรกได้ด้วยคำสั่ง: **adduser benutzerftp -shell /bin/false -home /var/www** แล้วตามด้วย **adduser benutzerftp ftpuser**

ระบบจะให้ตั้งรหัสผ่าน:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

จากนั้นยืนยันว่าข้อมูลถูกต้อง:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

ขั้นตอนสุดท้ายคือเพิ่มผู้ใช้ใหม่เข้าในกลุ่มด้วยคำสั่ง **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

ตอนนี้คุณก็สามารถเชื่อมต่อด้วยข้อมูลที่ตั้งไว้ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)