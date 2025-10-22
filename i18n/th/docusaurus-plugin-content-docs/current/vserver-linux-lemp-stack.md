---
id: vserver-linux-lemp-stack
title: "VPS: ตั้งค่า LEMP stack - Linux, Nginx, MySQL, PHP"
description: "ค้นพบวิธีตั้งค่า LEMP stack สำหรับโฮสต์เว็บไซต์ PHP แบบไดนามิกบน VPS Linux → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Web LEMP stack
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

**LEMP** stack คือชุดซอฟต์แวร์โอเพนซอร์สยอดนิยมที่ถูกตั้งค่าร่วมกันเพื่อให้สามารถโฮสต์เว็บไซต์ไดนามิกได้ง่าย โดยเน้นไปที่เว็บไซต์และแอป PHP โดยตัวย่อหมายถึง: **L**inux เป็นระบบปฏิบัติการ, "**E**ngine x" (nginx) เป็นเซิร์ฟเวอร์เว็บ, **M**ySQL เป็นฐานข้อมูล และสุดท้าย **P**HP สำหรับการประมวลผล ในคู่มือนี้ เราจะครอบคลุมขั้นตอนการตั้งค่า LEMP stack บน VPS Linux พร้อมตัวอย่างละเอียดของการตั้งค่าเว็บไซต์รายการสิ่งที่ต้องทำ (to-do list)

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับเซิร์ฟเวอร์ของคุณผ่าน SSH หากคุณไม่รู้วิธีทำ โปรดดูที่ [คู่มือการเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

ในคู่มือนี้ เราจะใช้ Ubuntu เป็นดิสโทร Linux คำสั่งเหมือนกันสำหรับ Debian และน่าจะคล้ายกันสำหรับดิสโทรอื่น ๆ แต่ไวยากรณ์คำสั่งอาจแตกต่างกันเล็กน้อย ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งระบบปฏิบัติการและเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน SSH แล้ว

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

การติดตั้งสามารถแบ่งออกเป็นแต่ละส่วนประกอบหลักของ LEMP เริ่มจากเซิร์ฟเวอร์เว็บ Nginx ตามด้วยฐานข้อมูล MySQL และสุดท้าย PHP ตลอดการติดตั้ง เราจะตั้งค่าเว็บไซต์ทดสอบที่เขียนด้วย PHP และเข้าถึงฐานข้อมูล MySQL สุดท้ายแต่ละคำขอเว็บจะถูกประมวลผลและให้บริการผ่านเซิร์ฟเวอร์เว็บ Nginx

### การตั้งค่า Nginx

Nginx คือเซิร์ฟเวอร์เว็บที่จะใช้ประมวลผลคำขอเว็บที่เข้ามาและให้บริการตอบกลับ ติดตั้งด้วยคำสั่งนี้
```
sudo apt install nginx
```

เมื่อติดตั้งเสร็จแล้ว คุณควรตรวจสอบให้แน่ใจว่ากฎไฟร์วอลล์ที่เหมาะสมถูกสร้างขึ้นเพื่อให้เซิร์ฟเวอร์เว็บเข้าถึงได้จากอินเทอร์เน็ต ในตัวอย่างนี้ เราจะใช้ **UFW Firewall** เพราะ Nginx มีแอปพลิเคชันที่ลงทะเบียนไว้สำหรับนี้

ถ้าคุณใช้ไฟร์วอลล์อื่น ให้แน่ใจว่าอนุญาตพอร์ต 80 (HTTP) ผ่านไฟร์วอลล์ คุณสามารถเรียนรู้เพิ่มเติมเกี่ยวกับไฟร์วอลล์ใน Linux ได้จาก [คู่มือจัดการไฟร์วอลล์](vserver-linux-firewall.md)

ตรวจสอบให้แน่ใจว่าเปิดใช้งาน UFW firewall และสร้างกฎสำหรับ SSH ด้วย
```
# สร้างกฎอนุญาต SSH
sudo ufw allow OpenSSH

# เปิดใช้งาน UFW Firewall
sudo ufw enable
```

:::caution
อย่าลืมสร้างกฎสำหรับ SSH หากคุณใช้ UFW Firewall! ถ้าไม่ทำ คุณจะ **ไม่สามารถ** SSH เข้าเซิร์ฟเวอร์ได้อีกถ้าการเชื่อมต่อปัจจุบันหลุด!
:::

ตอนนี้สร้างกฎอนุญาต Nginx และตรวจสอบว่ากฎถูกสร้างแล้ว
```
# สร้างกฎอนุญาต Nginx
sudo ufw allow in "Nginx Full"

# ตรวจสอบกฎไฟร์วอลล์ UFW
sudo ufw status
```

:::tip
คุณสามารถดูโปรไฟล์ที่มีได้โดยรันคำสั่ง `ufw app list` ในตัวอย่างข้างต้น การใช้ `Nginx Full` หมายความว่าจะสร้างกฎทั้ง HTTP (พอร์ต 80) และ HTTPS (พอร์ต 443)
:::

คุณควรเห็นกฎ `Nginx` และ `Nginx (v6)` พร้อมสถานะ `ALLOW` ซึ่งยืนยันว่าไฟร์วอลล์พร้อมใช้งานแล้ว คุณจะเห็นกฎอื่น ๆ ที่ตั้งไว้ก่อนหน้านี้รวมถึงกฎ SSH ด้วย

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

เมื่อเปิดไฟร์วอลล์สำหรับ Nginx แล้ว คุณควรตรวจสอบว่า Nginx ทำงานได้โดยลองเข้าถึงที่อยู่ IP ของคุณผ่านเบราว์เซอร์ เช่น: `http://[your_ipaddress]`

ถ้าทำงานได้ คุณจะเห็นหน้าเว็บต้อนรับเริ่มต้น ถ้าไม่ ให้ตรวจสอบสถานะบริการด้วยคำสั่ง: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### การตั้งค่า MySQL

ตอนนี้คุณจะติดตั้งและตั้งค่าเซิร์ฟเวอร์ MySQL ซึ่งจะทำหน้าที่เป็นฐานข้อมูลสำหรับเก็บข้อมูลแบบสัมพันธ์ ติดตั้งด้วยคำสั่งนี้
```
sudo apt install mysql-server
```

หลังจากเสร็จแล้ว แนะนำให้รันสคริปต์ติดตั้งแบบปลอดภัยเพื่อให้เซิร์ฟเวอร์ MySQL ของคุณปลอดภัยขึ้น เป็นตัวเลือกแต่แนะนำอย่างยิ่ง รันได้ด้วยคำสั่ง `sudo mysql_secure_installation`

ระบบจะพาคุณผ่านการตั้งค่าแบบโต้ตอบ เริ่มต้นจะถามเกี่ยวกับการตรวจสอบรหัสผ่าน เราแนะนำให้เลือก `Y` เพื่ออนุญาตเฉพาะรหัสผ่านที่ปลอดภัยในอนาคต จากนั้นเลือก `MEDIUM` โดยกด `1` หรือ `STRONG` โดยกด `2`

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

ถัดไปจะถามเกี่ยวกับการลบผู้ใช้ `anonymous` และปิดการล็อกอิน root จากระยะไกล เราแนะนำให้ตอบ `Y` ทั้งสองข้อเพื่อความปลอดภัย ซึ่งจะลบผู้ใช้ทดสอบและจำกัดให้ผู้ใช้ `root` ใช้งานได้เฉพาะผ่าน SSH บนเครื่องเท่านั้น ลดความเสี่ยง

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

สุดท้ายจะถามเกี่ยวกับการลบฐานข้อมูล `test` และโหลดตารางสิทธิ์ใหม่ เราแนะนำให้ตอบ `Y` เพราะฐานข้อมูลทดสอบไม่จำเป็นและต้องโหลดตารางสิทธิ์ใหม่เพื่อให้การเปลี่ยนแปลงมีผล

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

ตรวจสอบว่า MySQL ทำงานโดยลองล็อกอินด้วยคำสั่ง: `sudo mysql -u root` ถ้าสำเร็จจะเห็นข้อความต้อนรับ ออกจากระบบด้วยคำสั่ง `quit` เมื่อพร้อม

### การตั้งค่า PHP

ส่วนสุดท้ายของ LEMP คือ PHP สำหรับ nginx ต้องใช้โปรแกรมภายนอกชื่อ `php-fpm` (PHP fastCGI process manager) ซึ่ง Nginx จะถูกตั้งค่าให้ส่งคำขอไปยัง `php-fpm` ก่อนตอบกลับเมื่อใช้ server blocks

คำสั่งนี้ติดตั้ง php-fpm เวอร์ชันล่าสุดพร้อมปลั๊กอิน PHP สำหรับ MySQL เพื่อให้ Nginx ทำงานกับ PHP และ PHP ใช้งาน MySQL ได้
```
sudo apt install php-fpm php-mysql
```

ตรวจสอบการติดตั้งโดยดูเวอร์ชัน ถ้าแสดงเวอร์ชันแปลว่า PHP ทำงานถูกต้อง
```
php -v
```

:::tip ส่วนขยาย PHP
สำหรับการใช้งานขั้นสูง คุณอาจต้องการส่วนขยาย PHP เพิ่มเติมเพื่อฟังก์ชันเสริม ดูรายการได้ด้วยคำสั่ง `apt search php- | less`

ใช้ปุ่มลูกศรเลื่อนและกด `Q` เพื่อออก เมื่อต้องการติดตั้งส่วนขยาย ให้ใช้คำสั่ง apt install ตามนี้ สามารถใส่หลายส่วนขยายพร้อมกันโดยเว้นวรรคเพื่อความรวดเร็ว

```
sudo apt install [php_extension] [...]
```
:::

### การสร้างเว็บไซต์ทดสอบ

เมื่อติดตั้ง LEMP ครบแล้ว เราจะสร้างเว็บไซต์ทดสอบเพื่อแสดงว่า LEMP stack ทำงานร่วมกันอย่างไร นี่เป็นตัวเลือกเสริมแต่ช่วยให้เข้าใจวิธีใช้เครื่องมือเหล่านี้ตั้งค่าเว็บไซต์ของคุณเอง

ในตัวอย่างนี้ เราจะสร้างเว็บไซต์รายการสิ่งที่ต้องทำ (to-do list) ด้วย PHP ซึ่งดึงข้อมูลรายการจากฐานข้อมูล MySQL และให้บริการผ่าน Nginx

เราจะใช้โดเมนทดสอบ `zapdocs.example.com` ตลอดคู่มือ เพราะในโลกจริงคุณน่าจะใช้โดเมน คุณ **ต้อง** ตั้งค่าเรคคอร์ด DNS ประเภท `A` สำหรับโดเมนที่ชี้ไปยังที่อยู่ IP ของเซิร์ฟเวอร์ ถ้าต้องการความช่วยเหลือ ดูคู่มือ [ระเบียนโดเมน](domain-records.md#a-records)

:::note
คุณสามารถเลือกไม่ใช้โดเมนและแทนที่ `[your_domain]` ด้วยชื่อธรรมดา จากนั้นเข้าถึงเว็บไซต์ผ่านที่อยู่ IP แทน แต่เมื่อสร้างไฟล์ server block ต่อไป ควรถอดพารามิเตอร์ `server_name` ออก
:::

#### การตั้งค่า Nginx

โดยทั่วไป ไฟล์และข้อมูลเว็บไซต์จะเก็บไว้ในไดเรกทอรี `/var/www` โดยปกติ Nginx จะมีไดเรกทอรี `html` ที่มีหน้าเริ่มต้น เพื่อความเป็นระเบียบโดยเฉพาะเมื่อโฮสต์หลายเว็บไซต์บน Nginx ตัวเดียว เราแนะนำให้ตั้งแต่ละเว็บไซต์ในโฟลเดอร์แยกกัน

สร้างโฟลเดอร์ใหม่ใน `/var/www/[your_domain]` สำหรับแต่ละโดเมน ในตัวอย่างนี้คือ `/var/www/zapdocs.example.com`
```
sudo mkdir /var/www/[your_domain]
```

สร้างไฟล์คอนฟิก server block ใหม่ในไดเรกทอรี `sites-available` สำหรับโดเมนนี้
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

ใช้เทมเพลตด้านล่างและคัดลอกลงใน nano editor โดยแทนที่ `[your_domain]` ด้วยโดเมนของคุณ
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
สำคัญมากที่ต้องเปลี่ยน `[your_phpversion]` เป็นเวอร์ชัน PHP ที่ติดตั้งอยู่ ตรวจสอบด้วยคำสั่ง `php -v` ซึ่งจะแสดงเวอร์ชัน เช่น: `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`

ในตัวอย่างนี้ ให้ใส่ `8.3` เป็นเวอร์ชันหลัก เช่น: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

ไฟล์ server block นี้จัดการคำขอพอร์ต 80 (HTTP) และตรวจสอบว่าคำขอตรงกับ `server_name` ที่ระบุ ซึ่งก็คือโดเมนของคุณ นอกจากนี้ยังชี้ไปยังโฟลเดอร์ `/var/www/[your_domain]` ที่สร้างไว้เพื่อให้บริการไฟล์

บันทึกไฟล์และออกจาก nano โดยกด `CTRL + X` ตามด้วย `Y` เพื่อยืนยัน และกด `ENTER`

ขั้นตอนสุดท้ายของการตั้งค่า Nginx คือเปิดใช้งานคอนฟิกโดยลิงก์ไฟล์จากไดเรกทอรี `sites-enabled`
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note ไม่ใช้โดเมน
ถ้าคุณ **ไม่** ใช้โดเมน ให้ลบหรือคอมเมนต์บรรทัด `server_name` โดยใส่ `#` นำหน้า และปิดการใช้งาน server block เริ่มต้นด้วยคำสั่ง `sudo unlink /etc/nginx/sites-enabled/default`
:::

แนะนำให้ใช้คำสั่ง `sudo nginx -t` เพื่อตรวจสอบว่าไฟล์ไม่มีข้อผิดพลาดทางไวยากรณ์

สุดท้าย รีสตาร์ท Nginx เพื่อให้การตั้งค่าใหม่มีผลด้วยคำสั่ง: `sudo systemctl reload nginx`

#### การสร้างเว็บไซต์

เมื่อคุณตั้งค่า Nginx ผ่าน server block และโฟลเดอร์เอกสารแล้ว ถึงเวลาสร้างเว็บไซต์จริง ตอนนี้โฟลเดอร์ยังว่างเปล่า เราจะสร้างเว็บไซต์รายการสิ่งที่ต้องทำเล็ก ๆ ตามที่กล่าวไว้ก่อนหน้านี้สำหรับโดเมนนี้

##### เตรียมฐานข้อมูล

เริ่มด้วยการสร้างฐานข้อมูลและตารางเพื่อเก็บรายการแต่ละรายการ เข้าสู่ระบบ MySQL
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

สร้างรายการตัวอย่างเล็กน้อย
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

สร้างผู้ใช้เฉพาะ `todo` สำหรับเว็บไซต์นี้
```
# สร้างผู้ใช้เฉพาะ
# แทนที่ [your_password] ด้วยรหัสผ่านของคุณ
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# กำหนดสิทธิ์ให้ผู้ใช้ (คัดลอกเป็นบรรทัดเดียว)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# โหลดสิทธิ์ใหม่
FLUSH PRIVILEGES;
```

เมื่อฐานข้อมูลและผู้ใช้พร้อมแล้ว ออกจาก MySQL ด้วยคำสั่ง `quit`

##### ไฟล์เว็บไซต์ PHP

ส่วนสุดท้ายของตัวอย่างนี้คือการตั้งค่าไฟล์เว็บไซต์ PHP สำหรับหน้า to-do จะสร้างไฟล์ `index.php` ในไดเรกทอรี `/var/www/[your_domain]` ที่สร้างไว้ก่อนหน้านี้ เปิด nano เพื่อสร้างไฟล์
```
sudo nano /var/www/[your_domain]/index.php
```

ด้านล่างเป็นโค้ดง่าย ๆ ที่คุณสามารถวางลงใน nano เพื่อสร้างหน้า to-do พื้นฐานที่ดึงรายการจากฐานข้อมูล ส่วน PHP แรกเชื่อมต่อ MySQL

:::important
คุณต้องเปลี่ยน `[your_password]` เป็นรหัสผ่านที่ตั้งไว้สำหรับผู้ใช้ `todo` ก่อนหน้านี้
:::

ส่วน HTML ต่อมาเป็นหน้าเว็บหลักที่สร้างรายการแบบไม่เรียงลำดับ โดยวนลูปผ่านผลลัพธ์แต่ละรายการ

```
<?php
// เตรียมการเชื่อมต่อ MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ ถ้าไม่สำเร็จแสดงข้อผิดพลาด
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// รันคำสั่ง SQL เพื่อดึงข้อมูลจากตารางและเก็บในตัวแปรผลลัพธ์
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
      <p>สำหรับคู่มือเจ๋ง ๆ ของ ZAP-Hosting: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // ตรวจสอบว่ามีผลลัพธ์หรือไม่
          if ($result->num_rows > 0) {
              // วนลูปผ่านแต่ละรายการในผลลัพธ์
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
              // ถ้าไม่มีรายการ แสดงข้อความเริ่มต้น
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

เมื่อคัดลอกโค้ดลง nano แล้ว บันทึกไฟล์และออกด้วย `CTRL + X` ตามด้วย `Y` และกด `ENTER`

#### การทดสอบเว็บไซต์

คุณตั้งค่าเว็บไซต์ทดสอบรายการสิ่งที่ต้องทำที่ใช้ LEMP stack ครบถ้วนเรียบร้อยแล้ว!

ตอนนี้คุณควรเข้าถึงเว็บไซต์ผ่านโดเมน (ใช้ `http`/พอร์ต 80) ที่กำหนดไว้ในไฟล์ server block เช่น `zapdocs.example.com` ในตัวอย่าง ผลลัพธ์ควรเป็นแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่า LEMP stack สำเร็จแล้ว! ขั้นตอนต่อไป เรา **แนะนำอย่างยิ่ง** ให้ตั้งค่าโดเมนและ **ใบรับรอง SSL** เพื่อให้ข้อมูลส่งผ่านเว็บไซต์ของคุณอย่างปลอดภัย โปรดดู [คู่มือ Certbot](vserver-linux-certbot.md#webroot-plugin) โดยเน้นที่ **ปลั๊กอิน Nginx** และทำตามขั้นตอนโต้ตอบเพื่อสร้างใบรับรองสำหรับโดเมนที่เลือกได้อย่างรวดเร็วและง่ายดาย

ถ้ามีคำถามหรือขอความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />