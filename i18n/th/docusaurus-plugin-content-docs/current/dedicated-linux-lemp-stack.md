---
id: dedicated-linux-lemp-stack
title: "เซิร์ฟเวอร์เฉพาะ: ตั้งค่า LEMP stack - Linux, Nginx, MySQL, PHP"
description: "ค้นพบวิธีตั้งค่า LEMP stack สำหรับโฮสต์เว็บไซต์ PHP แบบไดนามิกบนเซิร์ฟเวอร์ Linux พร้อมตัวอย่างใช้งานจริง → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Web LEMP stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

**LEMP** stack คือชุดซอฟต์แวร์โอเพนซอร์สยอดนิยมที่ถูกตั้งค่าร่วมกันเพื่อให้สามารถโฮสต์เว็บไซต์ไดนามิกได้ง่าย โดยเน้นไปที่เว็บไซต์และแอป PHP ชื่อย่อมาจาก: **L**inux เป็นระบบปฏิบัติการ, "**E**ngine x" (nginx) เป็นเว็บเซิร์ฟเวอร์, **M**ySQL เป็นฐานข้อมูล และสุดท้าย **P**HP สำหรับประมวลผล ในคู่มือนี้ เราจะครอบคลุมขั้นตอนการตั้งค่า LEMP stack บนเซิร์ฟเวอร์เฉพาะ Linux พร้อมตัวอย่างละเอียดของการตั้งค่าเว็บไซต์รายการสิ่งที่ต้องทำ (to-do list)

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับเซิร์ฟเวอร์ของคุณผ่าน SSH หากคุณไม่รู้วิธีทำ โปรดดูที่ [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md) คู่มือของเรา

ในคู่มือนี้ เราจะใช้ Ubuntu เป็นดิสทริบิวชัน Linux คำสั่งจะเหมือนกันกับ Debian และน่าจะคล้ายกับดิสทริบิวชันอื่น ๆ แต่ไวยากรณ์คำสั่งอาจแตกต่างกันเล็กน้อย ตรวจสอบให้แน่ใจว่าคุณติดตั้งระบบปฏิบัติการแล้วและเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน SSH

เหมือนเดิม ก่อนดำเนินการติดตั้ง ให้แน่ใจว่าทุกแพ็กเกจเป็นเวอร์ชันล่าสุดด้วยคำสั่งต่อไปนี้:
```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## การติดตั้ง

การติดตั้งสามารถแบ่งออกเป็นแต่ละส่วนประกอบหลักของ LEMP เริ่มจากเว็บเซิร์ฟเวอร์ Nginx ตามด้วยฐานข้อมูล MySQL และสุดท้าย PHP ตลอดการติดตั้ง เราจะตั้งค่าเว็บไซต์ทดสอบที่เขียนด้วย PHP และเข้าถึงฐานข้อมูล MySQL สุดท้ายแต่ละคำขอเว็บจะถูกประมวลผลและให้บริการผ่านเว็บเซิร์ฟเวอร์ Nginx

### การตั้งค่า Nginx

Nginx คือเว็บเซิร์ฟเวอร์ที่จะใช้ประมวลผลคำขอเว็บที่เข้ามาและให้บริการตอบกลับ ติดตั้งด้วยคำสั่งนี้
```
sudo apt install nginx
```

เมื่อติดตั้งเสร็จแล้ว คุณควรตรวจสอบให้แน่ใจว่ากฎไฟร์วอลล์ที่เหมาะสมถูกสร้างขึ้นเพื่อให้เว็บเซิร์ฟเวอร์เข้าถึงได้จากอินเทอร์เน็ต ในตัวอย่างนี้ เราจะใช้ **UFW Firewall** เพราะ Nginx มีแอปพลิเคชันที่ลงทะเบียนไว้สำหรับนี้

ถ้าคุณใช้ไฟร์วอลล์อื่น ให้แน่ใจว่าอนุญาตพอร์ต 80 (HTTP) ผ่านไฟร์วอลล์ คุณสามารถเรียนรู้เพิ่มเติมเกี่ยวกับไฟร์วอลล์ใน Linux ผ่าน [จัดการไฟร์วอลล์](vserver-linux-firewall.md) คู่มือของเรา

ตรวจสอบให้แน่ใจว่าเปิดใช้งาน UFW firewall และสร้างกฎสำหรับ SSH ด้วย
```
# สร้างกฎอนุญาต SSH
sudo ufw allow OpenSSH

# เปิดใช้งาน UFW Firewall
sudo ufw enable
```

:::caution
อย่าลืมสร้างกฎสำหรับ SSH ถ้าคุณใช้ UFW Firewall! ถ้าไม่ คุณจะ **ไม่** สามารถ SSH เข้าเซิร์ฟเวอร์ได้อีกถ้าการเชื่อมต่อปัจจุบันหลุด!
:::

ตอนนี้สร้างกฎอนุญาต Nginx และตรวจสอบว่ากฎถูกสร้างแล้ว
```
# สร้างกฎอนุญาต Nginx
sudo ufw allow in "Nginx Full"

# ตรวจสอบกฎไฟร์วอลล์ UFW
sudo ufw status
```

:::tip
คุณสามารถดูโปรไฟล์ที่มีได้โดยรันคำสั่ง `ufw app list` ในตัวอย่างนี้ การใช้ `Nginx Full` หมายความว่ากฎสำหรับ HTTP (พอร์ต 80) และ HTTPS (พอร์ต 443) ถูกสร้างขึ้นทั้งคู่
:::

คุณควรเห็นกฎ `Nginx` และ `Nginx (v6)` พร้อมสถานะ `ALLOW` ซึ่งยืนยันว่าไฟร์วอลล์พร้อมใช้งานแล้ว คุณควรเห็นกฎอื่น ๆ ที่คุณตั้งไว้ก่อนหน้านี้ รวมถึงกฎ SSH ด้วย

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

เมื่อไฟร์วอลล์เปิดให้ Nginx แล้ว คุณควรตรวจสอบว่า Nginx ทำงานได้จริง โดยลองเข้าถึงที่อยู่ IP ของคุณผ่านเบราว์เซอร์ เช่น: `http://[your_ipaddress]`

ถ้าทำงานได้ คุณจะเห็นหน้าเว็บต้อนรับเริ่มต้น ถ้าไม่ ให้ตรวจสอบสถานะบริการด้วยคำสั่ง: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### การตั้งค่า MySQL

ตอนนี้คุณจะติดตั้งและตั้งค่าเซิร์ฟเวอร์ MySQL ซึ่งจะทำหน้าที่เป็นฐานข้อมูลสำหรับเก็บข้อมูลแบบสัมพันธ์ ติดตั้งด้วยคำสั่งนี้
```
sudo apt install mysql-server
```

หลังจากเสร็จสิ้น แนะนำให้รันสคริปต์ติดตั้งแบบปลอดภัยเพื่อให้เซิร์ฟเวอร์ MySQL ของคุณปลอดภัยขึ้น ตัวเลือกนี้ไม่บังคับแต่แนะนำอย่างยิ่ง รันได้ด้วยคำสั่ง `sudo mysql_secure_installation`

สคริปต์นี้จะพาคุณผ่านการตั้งค่าแบบโต้ตอบ ตอนแรกจะถามเกี่ยวกับการตรวจสอบรหัสผ่าน เราแนะนำให้เลือก `Y` เพื่ออนุญาตเฉพาะรหัสผ่านที่ปลอดภัยในอนาคต จากนั้นเลือก `MEDIUM` โดยกด `1` หรือ `STRONG` โดยกด `2`

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

ถัดไปจะถามเกี่ยวกับการลบผู้ใช้ `anonymous` และปิดการล็อกอิน root จากระยะไกล เราแนะนำให้ตอบ `Y` ทั้งสองข้อเพื่อความปลอดภัย ซึ่งจะลบผู้ใช้ทดสอบและจำกัดให้ผู้ใช้ root ใช้งานได้เฉพาะในเครื่องผ่าน SSH เท่านั้น ลดความเสี่ยงลง

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

สุดท้ายจะถามเกี่ยวกับการลบฐานข้อมูล `test` และโหลดตารางสิทธิ์ใหม่ เราแนะนำให้ตอบ `Y` เพราะฐานข้อมูลทดสอบไม่จำเป็นและต้องโหลดตารางสิทธิ์ใหม่เพื่อให้การตั้งค่ามีผล

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

ตอนนี้ตรวจสอบว่า MySQL ทำงานอยู่โดยลองล็อกอินด้วยคำสั่ง: `sudo mysql -u root` ถ้าสำเร็จ คุณจะเห็นข้อความต้อนรับ สามารถออกได้ด้วยคำสั่ง `quit`

### การตั้งค่า PHP

ส่วนสุดท้ายของ LEMP คือ PHP สำหรับ nginx ต้องใช้โปรแกรมภายนอกชื่อ `php-fpm` (PHP fastCGI process manager) ซึ่ง Nginx จะถูกตั้งค่าให้ส่งคำขอไปยัง `php-fpm` ก่อนตอบกลับเมื่อใช้ server blocks

คำสั่งนี้ติดตั้ง php-fpm เวอร์ชันล่าสุดพร้อมปลั๊กอิน PHP สำหรับ MySQL เพื่อให้ Nginx ทำงานร่วมกับ PHP และ PHP ใช้ MySQL ได้
```
sudo apt install php-fpm php-mysql
```

ตรวจสอบว่าติดตั้งสำเร็จโดยเช็คเวอร์ชัน ถ้าเห็นเวอร์ชันแสดงว่า PHP ทำงานถูกต้อง
```
php -v
```

:::tip ส่วนขยาย PHP
สำหรับกรณีใช้งานขั้นสูง คุณอาจต้องการส่วนขยาย PHP เพิ่มเติมเพื่อฟีเจอร์เสริม ดูรายการได้ด้วยคำสั่ง `apt search php- | less`

ใช้ปุ่มลูกศรเลื่อนและกด `Q` เพื่อออก เมื่อต้องการติดตั้งส่วนขยาย ให้ใช้คำสั่ง apt install ตามนี้ สามารถใส่หลายส่วนขยายพร้อมกันโดยเว้นวรรคเพื่อความรวดเร็ว

```
sudo apt install [php_extension] [...]
```
:::

### สร้างเว็บไซต์ทดสอบ

เมื่อติดตั้งส่วนประกอบ LEMP ครบแล้ว เราจะสร้างเว็บไซต์ทดสอบเพื่อแสดงว่า LEMP stack ทำงานร่วมกันอย่างไรเพื่อสร้างเว็บไซต์ไดนามิกที่ดี นี่เป็นตัวเลือกเสริม แต่ช่วยให้เข้าใจวิธีใช้เครื่องมือเหล่านี้ตั้งค่าเว็บไซต์ของคุณเองได้

ในตัวอย่างนี้ เราจะสร้างเว็บไซต์รายการสิ่งที่ต้องทำ (to-do list) เล็ก ๆ ผ่าน PHP ซึ่งจะดึงและแสดงรายการจากฐานข้อมูล MySQL และให้บริการผ่าน Nginx

เราจะใช้โดเมนทดสอบ `zapdocs.example.com` ตลอดคู่มือ เพราะในโลกจริงคุณน่าจะใช้โดเมน คุณ **ต้อง** ตั้งค่าเรคคอร์ด DNS ประเภท `A` สำหรับโดเมนที่ชี้ไปยังที่อยู่ IP ของเซิร์ฟเวอร์ ถ้าต้องการความช่วยเหลือ ดูคู่มือ [ระเบียนโดเมน](domain-records.md#a-records)

:::note
คุณสามารถเลือกไม่ใช้โดเมนและแทนที่ `[your_domain]` ด้วยชื่อธรรมดา จากนั้นเข้าถึงเว็บไซต์ผ่านที่อยู่ IP แทน แต่เมื่อสร้างไฟล์ server block ต่อไป ควรถอดพารามิเตอร์ `server_name` ออก
:::

#### ตั้งค่า Nginx

โดยทั่วไปบนเว็บเซิร์ฟเวอร์ ไฟล์และข้อมูลเว็บไซต์ทั้งหมดจะเก็บไว้ในไดเรกทอรี `/var/www` โดยปกติ Nginx จะมาพร้อมไดเรกทอรี `html` ที่มีหน้าเริ่มต้น เพื่อให้ทุกอย่างเป็นระเบียบโดยเฉพาะเมื่อโฮสต์หลายเว็บไซต์บน Nginx ตัวเดียว เราแนะนำให้ตั้งค่าแต่ละเว็บไซต์ในโฟลเดอร์แยกกัน

ทำได้โดยสร้างโฟลเดอร์ใหม่ใน `/var/www/[your_domain]` สำหรับแต่ละโดเมนเว็บไซต์ ในตัวอย่างนี้คือ `/var/www/zapdocs.example.com`
```
sudo mkdir /var/www/[your_domain]
```

ตอนนี้สร้างไฟล์คอนฟิก server block ของ Nginx ใหม่ในไดเรกทอรี `sites-available` สำหรับโดเมนและโฟลเดอร์นี้
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

ใช้เทมเพลตด้านล่างและคัดลอกลงใน nano editor โดยแทนที่ `[your_domain]` ด้วยโดเมนที่คุณใช้
```
server {
    listen 80;
    server_name [your_domain] www.[your_domain];
    root /var/www/[your_domain];

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php[your_phpversion]-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }
}
```

:::important เวอร์ชัน PHP
สำคัญมากที่ต้องเปลี่ยน `[your_phpversion]` เป็นเวอร์ชัน PHP ที่ติดตั้งอยู่ ตรวจสอบได้ด้วยคำสั่ง `php -v` ซึ่งจะแสดงเวอร์ชัน เช่น: `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`

ในตัวอย่างนี้ ให้ใส่ `8.3` เป็นเวอร์ชันหลักย่อย ดังนั้นบรรทัดจะเป็น: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

ไฟล์ server block ใหม่นี้จัดการคำขอพอร์ต 80 (HTTP) และตรวจสอบว่าคำขอตรงกับ `server_name` ที่ระบุ ซึ่งก็คือโดเมนของคุณ นอกจากนี้ยังชี้ไปที่โฟลเดอร์ `/var/www/[your_domain]` ที่คุณสร้างไว้ก่อนหน้านี้เพื่อให้บริการไฟล์

บันทึกไฟล์และออกจาก nano โดยกด `CTRL + X` ตามด้วย `Y` เพื่อยืนยัน และกด `ENTER`

ขั้นตอนสุดท้ายของการตั้งค่า Nginx คือเปิดใช้งานคอนฟิกโดยลิงก์ไฟล์จากไดเรกทอรี `sites-enabled`
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note ไม่ใช้โดเมน
ถ้าคุณ **ไม่** ใช้โดเมน ให้ลบหรือคอมเมนต์บรรทัด `server_name` โดยใส่ `#` ข้างหน้า และต้องปิดการใช้งาน server block เริ่มต้นด้วยคำสั่ง `sudo unlink /etc/nginx/sites-enabled/default`
:::

แนะนำให้ใช้คำสั่ง `sudo nginx -t` เพื่อตรวจสอบว่าไฟล์ไม่มีข้อผิดพลาดทางไวยากรณ์

สุดท้าย รีสตาร์ท Nginx เพื่อให้ virtual host ใหม่มีผลด้วยคำสั่ง: `sudo systemctl reload nginx`

#### สร้างเว็บไซต์

ตอนนี้คุณตั้งค่า Nginx ผ่าน server block และโฟลเดอร์เอกสารเรียบร้อยแล้ว ถึงเวลาสร้างเว็บไซต์จริงที่จะให้บริการ ตอนนี้โฟลเดอร์ยังว่างเปล่า จึงไม่มีอะไรให้บริการ เราจะสร้างเว็บไซต์รายการสิ่งที่ต้องทำเล็ก ๆ ตามที่กล่าวไว้ก่อนหน้านี้สำหรับโดเมนนี้

##### เตรียมฐานข้อมูล

เริ่มด้วยการสร้างฐานข้อมูลและตารางเพื่อเก็บรายการแต่ละรายการ เข้าสู่ระบบ MySQL ของคุณ
```
sudo mysql -u root
```

สร้างฐานข้อมูล `todowebsite` และตาราง `todoitems` ภายใน
```
# สร้างฐานข้อมูล
CREATE DATABASE todowebsite;

# ใช้ฐานข้อมูลใหม่
USE todowebsite;

# สร้างตารางรายการในฐานข้อมูล
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

เมื่อสร้างตารางเสร็จแล้ว ให้เพิ่มรายการตัวอย่างบางรายการ
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

สุดท้าย สร้างผู้ใช้เฉพาะ `todo` สำหรับเว็บไซต์นี้
```
# สร้างผู้ใช้เฉพาะ
# แทนที่ [your_password] ด้วยรหัสผ่านของคุณเอง
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# กำหนดสิทธิ์ให้ผู้ใช้ (คัดลอกเป็นคำสั่งเดียว)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# โหลดสิทธิ์ใหม่
FLUSH PRIVILEGES;
```

เมื่อฐานข้อมูลพร้อมและผู้ใช้ตั้งค่าเรียบร้อยแล้ว คุณสามารถออกจาก MySQL terminal ด้วยคำสั่ง `quit`

##### ไฟล์เว็บไซต์ PHP

ส่วนสุดท้ายของตัวอย่างนี้คือการตั้งค่าไฟล์เว็บไซต์ PHP สำหรับหน้า to-do จะสร้างไฟล์ `index.php` ใหม่ในไดเรกทอรี `/var/www/[your_domain]` ที่คุณสร้างไว้ก่อนหน้านี้ เปิด nano editor เพื่อสร้างไฟล์นี้
```
sudo nano /var/www/[your_domain]/index.php
```

ด้านล่างนี้เป็นโค้ดตัวอย่างง่าย ๆ ที่คุณสามารถวางลงใน nano editor สำหรับหน้า to-do พื้นฐานที่ดึงรายการจากฐานข้อมูล ส่วน PHP แรกสร้างการเชื่อมต่อ MySQL กับฐานข้อมูลของคุณ

:::important
คุณต้องเปลี่ยน `[your_password]` เป็นรหัสผ่านที่ตั้งไว้สำหรับผู้ใช้ `todo` ก่อนหน้านี้
:::

ส่วน HTML ต่อมาเป็นหน้าเว็บหลักที่สร้างรายการแบบ unordered list โดยวนลูปผ่านผลลัพธ์แต่ละรายการ

```
<?php
// เตรียมการเชื่อมต่อ MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบว่าการเชื่อมต่อสำเร็จหรือไม่ ถ้าไม่ให้แสดงข้อผิดพลาด
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// รันคำสั่ง SQL เพื่อดึงข้อมูลจากตารางและเก็บไว้ในตัวแปรผลลัพธ์
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // ตรวจสอบว่ามีผลลัพธ์หรือไม่
          if ($result->num_rows > 0) {
              // วนลูปผ่านแต่ละรายการที่ได้จากคำสั่ง SQL
              foreach ($result as $entry) {
                  echo "<li>";
                  // แสดงชื่อและใช้ htmlspecialchars ป้องกัน XSS (cross-site scripting)
                  echo htmlspecialchars($entry["name"]);

                  // แสดงสถานะการทำเสร็จ
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // แสดงวันที่สร้าง
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // ถ้าไม่มีรายการ ให้แสดงข้อความเริ่มต้น
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// ปิดการเชื่อมต่อฐานข้อมูล
$conn->close();
?>
```

เมื่อคัดลอกโค้ดนี้ลง nano editor แล้ว บันทึกไฟล์และออกจาก nano โดยกด `CTRL + X` ตามด้วย `Y` และกด `ENTER`

#### ทดสอบเว็บไซต์

คุณทำตามขั้นตอนและตั้งค่าเว็บไซต์ to-do ทดสอบที่ใช้ทุกส่วนของ LEMP stack สำเร็จแล้ว!

ตอนนี้คุณควรเข้าถึงเว็บไซต์ผ่านโดเมน (ใช้ `http`/พอร์ต 80) ที่ตั้งไว้ในไฟล์ server block ซึ่งในตัวอย่างนี้คือ `zapdocs.example.com` ผลลัพธ์สุดท้ายควรเป็นแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่า LEMP stack สำเร็จแล้ว! ขั้นตอนต่อไป เรา **แนะนำอย่างยิ่ง** ให้ตั้งค่าโดเมนและ **ใบรับรอง SSL** เพื่อให้ข้อมูลส่งผ่านอย่างปลอดภัยไปยังเว็บไซต์ของคุณ โปรดดูคู่มือ [Certbot](vserver-linux-certbot.md#webroot-plugin) โดยเน้นที่ **ปลั๊กอิน Nginx** และทำตามขั้นตอนโต้ตอบเพื่อสร้างใบรับรองสำหรับโดเมนที่เลือกอย่างรวดเร็วและง่ายดาย

ถ้ามีคำถามหรือขอความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />