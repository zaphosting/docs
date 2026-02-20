---
id: dedicated-linux-webserver
title: "ตั้งค่า Nginx และ Apache บนเซิร์ฟเวอร์ Linux - คอนฟิกสภาพแวดล้อมเซิร์ฟเวอร์เว็บสุดเจ๋ง"
description: "ค้นพบวิธีการตั้งค่าและคอนฟิกเซิร์ฟเวอร์เว็บ Nginx หรือ Apache เพื่อโฮสต์เว็บไซต์ของคุณอย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งเว็บเซิร์ฟเวอร์
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Nginx และ Apache เป็นบริการเว็บยอดนิยมที่ใช้ส่งหน้าเว็บไปยังเบราว์เซอร์ของผู้ใช้ ด้านล่างนี้เราจะแสดงวิธีติดตั้งหนึ่งในบริการเหล่านี้บนระบบของคุณ



## การเตรียมตัว

ก่อนเริ่มติดตั้งเว็บเซิร์ฟเวอร์จริง ๆ จำเป็นต้องตรวจสอบให้แน่ใจว่าระบบของคุณเป็นเวอร์ชันล่าสุด โดยเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน SSH หากคุณไม่รู้ว่า SSH คืออะไรและใช้งานยังไง ลองดูคู่มือนี้: [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

เมื่อเชื่อมต่อแล้ว คุณสามารถอัปเดตระบบด้วยคำสั่งต่อไปนี้ตามระบบปฏิบัติการของคุณ:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper update

// Fedora
sudo dnf upgrade --refresh
```



## การติดตั้ง

เมื่อเตรียมระบบเสร็จแล้ว ก็สามารถเริ่มติดตั้งเว็บเซิร์ฟเวอร์ได้เลย ขึ้นอยู่กับระบบปฏิบัติการและเว็บเซิร์ฟเวอร์ที่เลือก ให้รันคำสั่งดังนี้:



### Apache

```
// Debian
sudo apt install apache2

// Ubuntu
sudo apt install apache2

// CentOS
sudo yum install httpd

// OpenSUSE
sudo zypper install httpd

// Fedora
sudo dnf install httpd
```

หลังติดตั้งเว็บเซิร์ฟเวอร์แล้ว คุณสามารถอัปโหลดไฟล์เว็บไซต์ของคุณได้ โดยเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP/SFTP แล้วไปที่โฟลเดอร์นี้เพื่ออัปโหลดไฟล์

```
/var/www/html/
```



### Nginx

```
// Debian
sudo apt install nginx

// Ubuntu
sudo apt install nginx

// CentOS
sudo yum install nginx

// OpenSUSE
sudo zypper install nginx

// Fedora
sudo dnf install nginx
```

หลังติดตั้งเว็บเซิร์ฟเวอร์แล้ว คุณสามารถอัปโหลดไฟล์เว็บไซต์ของคุณได้ โดยเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP/SFTP แล้วไปที่โฟลเดอร์นี้เพื่ออัปโหลดไฟล์

```
/usr/share/nginx/html
```



## ตรวจสอบเวอร์ชัน

เมื่อการติดตั้งเสร็จสมบูรณ์แล้ว คุณสามารถใช้คำสั่ง `apache2 -v` (สำหรับ Apache) และ `nginx -v` (สำหรับ Nginx) เพื่อตรวจสอบว่าการติดตั้งสำเร็จหรือไม่ ผลลัพธ์ควรจะคล้ายกับตัวอย่างนี้:



### Apache

```
apache2 -v
Server version: Apache/2.4.41 (Ubuntu)
Server built:   XXXX-XX-XXTXX:XX:XX
```



### Nginx

```
nginx -V
nginx version: nginx/1.2.3
...
```

ถ้าเจอผลลัพธ์แบบใดแบบหนึ่งนี้ แสดงว่าเว็บเซิร์ฟเวอร์ของคุณติดตั้งเรียบร้อยแล้ว