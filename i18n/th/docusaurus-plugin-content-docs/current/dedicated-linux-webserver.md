---
id: dedicated-linux-webserver
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง Nginx และ Apache เซิร์ฟเวอร์เว็บ"
description: "ค้นพบวิธีตั้งค่าและกำหนดค่า Nginx หรือ Apache เซิร์ฟเวอร์เว็บเพื่อโฮสต์เว็บไซต์ของคุณอย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งเซิร์ฟเวอร์เว็บ
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Nginx และ Apache เป็นบริการเว็บยอดนิยมที่ใช้ส่งหน้าเว็บไปยังเบราว์เซอร์ของผู้ใช้ ด้านล่างนี้เราจะแสดงวิธีติดตั้งบริการหนึ่งในระบบของคุณ



## การเตรียมตัว

ก่อนเริ่มการติดตั้งเซิร์ฟเวอร์เว็บจริง จำเป็นต้องตรวจสอบให้แน่ใจว่าระบบของคุณเป็นเวอร์ชันล่าสุด โดยเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน SSH หากคุณไม่รู้ว่า SSH คืออะไรและใช้งานอย่างไร ลองดูในคู่มือ: [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

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

เมื่อเตรียมระบบเสร็จแล้ว ก็สามารถเริ่มติดตั้งเซิร์ฟเวอร์เว็บได้เลย ขึ้นอยู่กับระบบปฏิบัติการและเซิร์ฟเวอร์เว็บ ให้รันคำสั่งดังนี้:



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

หลังติดตั้งเซิร์ฟเวอร์เว็บแล้ว คุณสามารถอัปโหลดไฟล์เว็บไซต์ของคุณได้ โดยเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP/SFTP แล้วไปที่โฟลเดอร์นี้เพื่ออัปโหลดไฟล์

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

หลังติดตั้งเซิร์ฟเวอร์เว็บแล้ว คุณสามารถอัปโหลดไฟล์เว็บไซต์ของคุณได้ โดยเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP/SFTP แล้วไปที่โฟลเดอร์นี้เพื่ออัปโหลดไฟล์

```
/usr/share/nginx/html
```



## ตรวจสอบเวอร์ชัน

เมื่อการติดตั้งเสร็จสมบูรณ์ คุณสามารถใช้คำสั่ง `apache2 -v` (Apache) และ `nginx -v` (Nginx) เพื่อตรวจสอบว่าการติดตั้งสำเร็จหรือไม่ ผลลัพธ์ควรจะคล้ายกับตัวอย่างด้านล่างนี้:



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

ถ้าเจอผลลัพธ์แบบใดแบบหนึ่งนี้ แสดงว่าเซิร์ฟเวอร์เว็บของคุณติดตั้งสำเร็จแล้ว