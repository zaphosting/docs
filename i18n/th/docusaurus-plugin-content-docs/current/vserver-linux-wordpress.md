---
id: vserver-linux-wordpress
title: "VPS: การติดตั้ง WordPress"
description: "ค้นพบวิธีการตั้งค่า WordPress บนเซิร์ฟเวอร์ Linux โดยใช้ LAMP stack เพื่อสร้างเว็บไซต์ที่ทรงพลังและยืดหยุ่น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง WordPress
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

WordPress คือระบบจัดการเนื้อหาเว็บยอดนิยมที่ใช้สำหรับจัดการและเผยแพร่เว็บไซต์ ในยุคปัจจุบัน WordPress ได้พัฒนาไปสู่หลากหลายด้าน เช่น เมล ฟอรัม ร้านค้า และอื่น ๆ อีกมากมาย ซึ่งได้รับการสนับสนุนจากชุมชนที่แข็งแกร่งที่สร้างระบบปลั๊กอินและเทมเพลตที่ช่วยให้ผู้ใช้ทั่วไปสามารถตั้งค่าได้ง่าย ในคู่มือนี้ เราจะครอบคลุมขั้นตอนการติดตั้ง WordPress CMS บนเซิร์ฟเวอร์ Linux

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับเซิร์ฟเวอร์ของคุณผ่าน SSH หากคุณไม่รู้วิธีทำ โปรดดูที่ [คู่มือการเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

:::info
ในคู่มือนี้ เราจะใช้ดิสโทร Ubuntu คู่กับ Apache เป็นเว็บเซิร์ฟเวอร์, MySQL สำหรับฐานข้อมูล และ PHP เป็นตัวหลัก ซึ่งเรียกกันว่า LAMP stack: Linux, Apache, MySQL และ PHP
:::

เมื่อคุณล็อกอินแล้ว ให้เริ่มด้วยการรันคำสั่งอัปเดต
```
sudo apt update
```

จากนั้นคุณสามารถติดตั้ง dependencies ที่จำเป็นทั้งหมดได้เลย คัดลอกคำสั่งด้านล่างทั้งหมดแล้ววางเพื่อทำการติดตั้งพร้อมกันทั้งหมด รอสักครู่เพราะอาจใช้เวลาติดตั้งนาน
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

หลังจากติดตั้ง dependencies แล้ว มีขั้นตอนแนะนำเล็กน้อยที่ควรทำเพื่อให้แน่ใจว่า dependencies หลักของ LAMP stack ทำงานได้อย่างสมบูรณ์

### Apache & ไฟร์วอลล์

เริ่มต้นด้วยการตั้งค่าไฟร์วอลล์เพื่อให้เว็บเซิร์ฟเวอร์ Apache สามารถสื่อสารกับอินเทอร์เน็ตได้และทำงานได้อย่างถูกต้อง สำคัญมากที่ต้องสร้างกฎไฟร์วอลล์ที่เหมาะสมเพื่อให้เว็บเซิร์ฟเวอร์เข้าถึงได้จากอินเทอร์เน็ต

ในตัวอย่างนี้ เราจะใช้ **UFW Firewall** เพราะ Apache มีแอปพลิเคชันที่ลงทะเบียนไว้สำหรับนี้ หากคุณใช้ไฟร์วอลล์อื่น ให้แน่ใจว่าอนุญาตพอร์ต 80 (HTTP) ผ่านไฟร์วอลล์ คุณสามารถเรียนรู้เพิ่มเติมเกี่ยวกับไฟร์วอลล์ใน Linux ได้จาก [คู่มือการจัดการไฟร์วอลล์](vserver-linux-firewall.md)

ตรวจสอบให้แน่ใจว่าเปิดใช้งาน UFW firewall และสร้างกฎสำหรับ SSH ด้วย
```
# สร้างกฎอนุญาต SSH
sudo ufw allow OpenSSH

# เปิดใช้งาน UFW Firewall
sudo ufw enable
```

:::caution
อย่าลืมสร้างกฎสำหรับ SSH หากคุณใช้ UFW Firewall! หากไม่ทำ คุณจะ **ไม่สามารถ** SSH เข้าเซิร์ฟเวอร์ได้อีกหากการเชื่อมต่อปัจจุบันหลุด!
:::

ตอนนี้สร้างกฎอนุญาต Apache และตรวจสอบว่ากฎถูกสร้างแล้ว
```
# สร้างกฎอนุญาต Apache
sudo ufw allow in "Apache Full"

# ตรวจสอบกฎไฟร์วอลล์ UFW
sudo ufw status
```

:::tip
คุณสามารถดูโปรไฟล์ที่มีได้โดยรันคำสั่ง `ufw app list` ในตัวอย่างนี้ การใช้ `Apache Full` หมายถึงสร้างกฎสำหรับ HTTP (พอร์ต 80) และ HTTPS (พอร์ต 443) ทั้งสองอย่าง
:::

คุณควรเห็นกฎ `Apache` และ `Apache (v6)` พร้อมสถานะ `ALLOW` ซึ่งยืนยันว่าไฟร์วอลล์พร้อมใช้งานแล้ว คุณจะเห็นกฎอื่น ๆ ที่ตั้งไว้ก่อนหน้านี้รวมถึงกฎ SSH ด้วย

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

เมื่อไฟร์วอลล์เปิดให้ Apache แล้ว ให้ตรวจสอบว่า Apache ทำงานได้โดยลองเข้าถึงที่อยู่ IP ของคุณผ่านเบราว์เซอร์ เช่น: `http://[your_ipaddress]`

ถ้าทำงานได้ คุณจะเห็นหน้าเว็บต้อนรับเริ่มต้น หากไม่สามารถเข้าถึงได้ ให้ตรวจสอบสถานะบริการด้วยคำสั่ง: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### การตั้งค่า MySQL

ขั้นตอนถัดไปคือการตั้งค่า MySQL ครั้งแรก แนะนำให้รันสคริปต์ติดตั้งแบบปลอดภัยเพื่อให้เซิร์ฟเวอร์ MySQL ของคุณปลอดภัยมากขึ้น ซึ่งเป็นทางเลือกแต่แนะนำอย่างยิ่ง รันคำสั่ง `sudo mysql_secure_installation`

ระบบจะพาคุณผ่านการตั้งค่าแบบโต้ตอบ เริ่มต้นจะถามเกี่ยวกับการตรวจสอบรหัสผ่าน เราแนะนำให้เลือก `Y` เพื่ออนุญาตเฉพาะรหัสผ่านที่ปลอดภัยในอนาคต จากนั้นเลือกระดับความปลอดภัยเป็น `MEDIUM` โดยกด `1` หรือ `STRONG` โดยกด `2`

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

ถัดไปจะถามเกี่ยวกับการลบผู้ใช้ `anonymous` และปิดการล็อกอิน root จากระยะไกล เราแนะนำให้ตอบ `Y` ทั้งสองข้อเพื่อความปลอดภัย ซึ่งจะลบผู้ใช้ทดสอบและจำกัดให้ผู้ใช้ root ใช้งานได้เฉพาะในเครื่องผ่าน SSH เท่านั้น ลดความเสี่ยงลง

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

สุดท้ายจะถามเกี่ยวกับการลบฐานข้อมูล `test` และโหลดตารางสิทธิ์ใหม่ เราแนะนำให้ตอบ `Y` เพราะฐานข้อมูลทดสอบไม่จำเป็น และต้องโหลดตารางสิทธิ์ใหม่เพื่อให้การตั้งค่ามีผล

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

ตอนนี้ตรวจสอบว่า MySQL ทำงานอยู่หรือไม่โดยลองล็อกอินด้วยคำสั่ง: `sudo mysql -u root` หากสำเร็จ คุณจะเห็นข้อความต้อนรับ สามารถออกได้ด้วยคำสั่ง `quit`

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### ทดสอบ PHP

สุดท้ายให้ตรวจสอบว่า PHP ทำงานได้ตามคาด โดยสร้างไฟล์ `info.php` ในไดเรกทอรี Apache `/var/www/html/` ที่มีคำสั่ง `phpinfo()`
```
# เปิด nano editor ที่ไฟล์ใหม่
nano /var/www/html/info.php

# วางโค้ดนี้ลงใน editor
<?php
phpinfo();
?>
```

เมื่อเสร็จแล้ว บันทึกไฟล์โดยกด `CTRL+X` ตามด้วย `Y` และกด `Enter` เพื่อยืนยันการเปลี่ยนแปลง

จากนั้นเข้าถึง URL นี้ซึ่งควรแสดงหน้าข้อมูล PHP หากทำงานถูกต้อง
```
http://[your_ipaddress]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

เมื่อทดสอบ dependencies หลักของ LAMP แล้วว่าทำงานได้ คุณก็พร้อมที่จะติดตั้ง WordPress CMS ต่อได้เลย

## การติดตั้ง

การติดตั้ง WordPress แบ่งออกเป็นสามส่วน เริ่มจากเตรียมฐานข้อมูล MySQL, ติดตั้ง WordPress และสุดท้ายตั้งค่าผ่านตัวช่วยตั้งค่า WordPress

### ฐานข้อมูล MySQL

เริ่มต้นด้วยการตั้งค่าฐานข้อมูล MySQL ใหม่ จำเป็นต้องจำข้อมูลนี้ไว้เพราะจะใช้ในตัวช่วยตั้งค่า WordPress ต่อไป เราแนะนำให้ใช้ตัวอย่างของเรา

คัดลอกคำสั่งด้านล่างเพื่อสร้างฐานข้อมูล ตาราง และผู้ใช้ที่จำเป็น
```
# เข้าสู่ระบบ MySQL
sudo mysql -u root

# สร้างฐานข้อมูล
CREATE DATABASE wordpress;

# สร้างผู้ใช้ wordpress เฉพาะ
# แทนที่ [your_password] ด้วยรหัสผ่านของคุณเอง
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# กำหนดสิทธิ์ให้ผู้ใช้ (คัดลอกเป็นคำสั่งเดียว)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# โหลดตารางสิทธิ์ใหม่
FLUSH PRIVILEGES;
```

เมื่อสร้างฐานข้อมูลและผู้ใช้เสร็จแล้ว ออกจาก MySQL ด้วยคำสั่ง `quit` ตอนนี้คุณพร้อมติดตั้ง WordPress แล้ว

### การติดตั้ง WordPress

สำหรับการติดตั้ง WordPress หลัก เราแนะนำและจะใช้ไฟล์ release จาก **wordpress.org** โดยตรงแทนที่จะใช้แพ็กเกจ APT เพราะ WordPress แนะนำวิธีนี้เพื่อหลีกเลี่ยงปัญหาที่อาจเกิดขึ้น

ดาวน์โหลดไฟล์ล่าสุดด้วยคำสั่งนี้ ซึ่งจะดาวน์โหลดไฟล์ release ล่าสุดไปยังไดเรกทอรีชั่วคราว
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

จากนั้นแตกไฟล์ archive ซึ่งจะได้โฟลเดอร์ `wordpress` ที่มีไฟล์ทั้งหมดที่จำเป็น
```
tar -xvf latest.tar.gz
```

เมื่อแตกไฟล์แล้ว ให้คัดลอกโฟลเดอร์ไปยังไดเรกทอรี Apache `/var/www/html/` เพื่อให้เข้าถึงผ่านเว็บได้ รันคำสั่งด้านล่างเพื่อคัดลอกโฟลเดอร์ สร้างไดเรกทอรี `uploads` และปรับสิทธิ์ให้กลุ่ม `www-data` ของเว็บเซิร์ฟเวอร์เข้าถึงได้
```
# คัดลอกโฟลเดอร์ wordpress และอัปเดตเจ้าของไฟล์
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# สร้างไดเรกทอรี uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# ปรับสิทธิ์ไฟล์
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

เมื่อเสร็จแล้ว WordPress ควรติดตั้งเรียบร้อย เข้าถึงตัวช่วยตั้งค่า WordPress ได้ที่: `http://[your_ipaddress]/wordpress`

### ตัวช่วยตั้งค่า

ผ่านตัวช่วยตั้งค่า คุณสามารถกำหนดค่า WordPress ซึ่งเป็นขั้นตอนสุดท้ายของการติดตั้ง เริ่มต้นจะให้เลือกภาษา

จากนั้นคุณต้องตั้งค่าฐานข้อมูล คุณได้เตรียมไว้แล้วในส่วน MySQL ของการติดตั้ง ดังนั้นให้ใช้ข้อมูลเดียวกัน หากทำตามตัวอย่างของเรา ให้กรอกข้อมูลดังนี้ โดยแทนที่ `[your_password]` ด้วยรหัสผ่านที่คุณตั้งไว้ก่อนหน้า

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

เมื่อขั้นตอนนี้เสร็จ คุณจะถูกขอให้รันการติดตั้ง ซึ่งเป็นขั้นตอนสุดท้ายของการตั้งค่า

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

ในหน้าถัดไป คุณจะต้องกรอกข้อมูลต่าง ๆ เช่น ชื่อเว็บไซต์ อีเมล และชื่อผู้ใช้กับรหัสผ่านสำหรับบัญชี root ของ WordPress เพื่อเข้าแดชบอร์ด คุณยังสามารถเลือกว่าจะให้เว็บไซต์ของคุณถูกค้นหาโดยเครื่องมือค้นหาหรือไม่

:::tip
อย่าลืมเลือกใช้รหัสผ่านที่แข็งแรงและเก็บข้อมูลล็อกอินไว้ให้ดี เพื่อไม่ให้เสียการเข้าถึงแดชบอร์ด WordPress!
:::

เมื่อพร้อมแล้ว ให้กดปุ่ม **Install WordPress** เพื่อเสร็จสิ้นการติดตั้ง

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

คุณจะถูกพาไปยังหน้าสำเร็จที่เปลี่ยนเส้นทางไปยังหน้า **Log In** กดที่นี่แล้วใช้ข้อมูลล็อกอินเพื่อเข้าสู่แดชบอร์ด WordPress ครั้งแรก!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

และแค่นั้นแหละ เมื่อเข้าสู่ระบบสำเร็จ คุณจะอยู่ในแดชบอร์ด WordPress ของคุณ พร้อมการติดตั้งสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## สรุป

ยินดีด้วย คุณได้ติดตั้งและตั้งค่า WordPress สำเร็จแล้ว! ขั้นตอนถัดไป เรา **แนะนำอย่างยิ่ง** ให้ตั้งค่าโดเมนและ **ใบรับรอง SSL** เพื่อให้ข้อมูลถูกส่งอย่างปลอดภัยและทำให้แดชบอร์ด WordPress เข้าถึงง่ายขึ้น โปรดดู [คู่มือ Certbot](vserver-linux-certbot.md#webroot-plugin) โดยเน้นที่ **Apache Plugin** และทำตามขั้นตอนแบบโต้ตอบเพื่อสร้างใบรับรองสำหรับโดเมนที่คุณเลือกได้อย่างรวดเร็วและง่ายดาย

สำหรับการอ่านเพิ่มเติมและการตั้งค่าเพิ่มเติม เราแนะนำให้ดูคู่มือ [ปลั๊กอิน WordPress](webspace-wordpress-plugins.md) และ [WordPress Elementor](webspace-wordpress-elementor.md) ซึ่งอธิบายการติดตั้งปลั๊กอินและการใช้ตัวสร้างหน้าเว็บยอดนิยมที่ใช้งานง่ายชื่อ Elementor

หากมีคำถามหรือขอความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂

<InlineVoucher />