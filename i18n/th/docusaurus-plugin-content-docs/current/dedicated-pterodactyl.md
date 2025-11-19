---
id: dedicated-pterodactyl
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง Pterodactyl"
description: "ค้นพบวิธีตั้งค่าและจัดการแผงเซิร์ฟเวอร์เกม Pterodactyl ของคุณเองอย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

Pterodactyl Panel คือแผงควบคุมแบบโอเพ่นซอร์สที่ออกแบบมาเพื่อจัดการและเช่าเซิร์ฟเวอร์เกมได้ง่าย ๆ มันมีอินเทอร์เฟซที่ช่วยให้แอดมินสามารถตั้งค่าและจัดการเซิร์ฟเวอร์เกมหลายตัวได้จากที่เดียว

ในคู่มือนี้ เราจะพาไปดูขั้นตอนที่จำเป็นในการตั้งค่า Pterodactyl บนเซิร์ฟเวอร์ของคุณเอง



## การเตรียมตัว

คุณจะต้องมีเซิร์ฟเวอร์เฉพาะที่รัน Linux เพื่อทำการติดตั้ง Pterodactyl Panel โดยควรใช้ระบบปฏิบัติการที่รองรับตามตารางด้านล่างนี้

| ระบบปฏิบัติการ | เวอร์ชันที่รองรับ |
| -------------- | ----------------- |
| Ubuntu         | 20.04, 22.04      |
| CentOS         | 7, 8              |
| Debian         | 11, 12            |

## สิ่งที่ต้องติดตั้งเพิ่มเติม

Pterodactyl ต้องการการติดตั้งแพ็กเกจเสริมหลายตัวเพื่อให้ติดตั้งและทำงานได้อย่างราบรื่น นอกจากนี้ยังต้องใช้ Composer ซึ่งเป็นตัวจัดการแพ็กเกจยอดนิยมสำหรับ PHP

### รายการแพ็กเกจเสริม

นี่คือรายการแพ็กเกจเสริมที่คุณจะต้องใช้ในคู่มือนี้ ไปดูส่วนถัดไปเพื่อเรียนรู้วิธีติดตั้งแพ็กเกจเหล่านี้

- PHP 8.1 พร้อมส่วนขยาย: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml หรือ dom, curl, zip, และ fpm
- MariaDB
- เว็บเซิร์ฟเวอร์ - ในคู่มือนี้เราใช้ Nginx
- curl
- tar
- unzip
- git
- composer v2

### การติดตั้งแพ็กเกจเสริม

เริ่มต้นด้วยการรันคำสั่งนี้เพื่อเปิดใช้งานการเพิ่มแพ็กเกจที่ไม่ได้ติดตั้งมาเป็นค่าเริ่มต้นของระบบปฏิบัติการ

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

จากนั้นติดตั้งรีโพสิตอรีเพิ่มเติมสำหรับ PHP, Redis และ MariaDB (MySQL)

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

คุณจะต้องติดตั้ง Redis สำหรับเก็บข้อมูลชั่วคราว

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

สำหรับเว็บเซิร์ฟเวอร์ เราเลือกใช้ Nginx เพราะน่าเชื่อถือและเป็นโอเพ่นซอร์ส คุณควรติดตั้งตัวนี้ หรือจะใช้เว็บเซิร์ฟเวอร์อื่นเช่น Apache หรือ Caddy ก็ได้ แต่จะไม่ตรงกับคู่มือนี้

```bash
sudo apt install nginx # ดาวน์โหลดและติดตั้ง Nginx
sudo ufw allow 'Nginx Full' # ปรับไฟร์วอลล์
```

แนะนำให้เข้าไปที่ `http://[your_serverip]/` โดยแทนที่ `[your_serverip]` ด้วยที่อยู่ IP เซิร์ฟเวอร์ของคุณเพื่อตรวจสอบว่า Nginx ทำงานอยู่ คุณควรเห็นหน้าเว็บต้อนรับเริ่มต้น

ต่อไปให้ติดตั้ง MariaDB ซึ่งจะใช้เป็นฐานข้อมูล MySQL ของคุณ
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

สุดท้าย อัปเดตรายการรีโพสิตอรีและติดตั้งแพ็กเกจที่เหลือ
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

ตอนนี้คุณควรมีแพ็กเกจเสริมทั้งหมดพร้อมใช้งานแล้ว และสามารถไปติดตั้ง Composer ต่อได้

### การติดตั้ง Composer

เมื่อแพ็กเกจหลักติดตั้งเสร็จแล้ว คุณต้องติดตั้ง Composer ซึ่งเป็นตัวจัดการแพ็กเกจ PHP ที่ช่วยให้ดาวน์โหลดและติดตั้งบริการ Pterodactyl ได้ง่ายขึ้น

รันคำสั่งนี้เลย:
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## ดาวน์โหลดแผงควบคุม

เมื่อเตรียมทุกอย่างพร้อมแล้ว คุณต้องติดตั้ง Pterodactyl Panel

สร้างโฟลเดอร์สำหรับเก็บแผงควบคุมด้วยคำสั่งนี้
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

จากนั้นโคลนรีโพสิตอรี GitHub อย่างเป็นทางการของ Pterodactyl เพื่อดาวน์โหลดไฟล์ที่จำเป็น
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

เมื่อโคลนเสร็จ คุณจะได้แผงควบคุมมาเรียบร้อย ในส่วนถัดไปจะเป็นการตั้งค่าต่าง ๆ เพื่อให้แผงควบคุมทำงานได้อย่างถูกต้องและเต็มประสิทธิภาพ

## การติดตั้ง

ขั้นตอนแรกของการติดตั้งคือการตั้งค่าฐานข้อมูล MySQL ซึ่งจะเก็บข้อมูลทั้งหมดของแผง Pterodactyl ของคุณ หากคุณมีฐานข้อมูล MySQL พร้อมใช้งานและมีผู้ใช้ที่เหมาะสมแล้ว สามารถข้ามส่วนนี้ไปได้เลย

### การตั้งค่าฐานข้อมูล

เข้าสู่ระบบฐานข้อมูล MySQL ของคุณก่อน หากเป็น MySQL ใหม่ ให้รันคำสั่งนี้ได้เลย:
```
mysql -u root -p
```

ถ้ามี MySQL อยู่แล้ว ให้ใช้ชื่อผู้ใช้กับรหัสผ่านของคุณแทน `-u` และ `-p`

เมื่อเข้าสู่ระบบแล้ว คุณต้องสร้างผู้ใช้ใหม่สำหรับ Pterodactyl โดยแทนที่ `[your_password]` ด้วยรหัสผ่านที่คุณต้องการ
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[your_password]';
```

จากนั้นสร้างฐานข้อมูลสำหรับ Pterodactyl และมอบสิทธิ์ให้ผู้ใช้ที่สร้างไว้
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

คุณได้ตั้งค่าผู้ใช้และฐานข้อมูล MySQL สำหรับ Pterodactyl เรียบร้อยแล้ว สามารถออกจาก MySQL ด้วยคำสั่ง `exit`

### ดำเนินการติดตั้งต่อ

ตอนนี้ให้คัดลอกไฟล์ environment ตัวอย่างไปเป็นไฟล์ .env เพื่อเก็บโทเค็นลับของคุณ
```bash
cp .env.example .env
```

จากนั้นใช้ Composer เพื่อติดตั้งแพ็กเกจทั้งหมดโดยอัตโนมัติ
```bash
composer install --no-dev --optimize-autoloader
```

คุณต้องสร้างกุญแจเข้ารหัสสำหรับแอปพลิเคชันด้วยคำสั่งนี้
```bash
php artisan key:generate --force
```

### การตั้งค่า Environment

ตั้งค่า Pterodactyl ของคุณด้วยคำสั่งต่อไปนี้ แต่ละคำสั่งจะมีการตั้งค่าแบบอินเทอร์แอคทีฟครอบคลุมหลายอย่าง เช่น เซสชัน อีเมล แคช และอื่น ๆ

```bash
php artisan p:environment:setup # คำสั่งแรก
php artisan p:environment:database # คำสั่งที่สอง
```

### การตั้งค่าฐานข้อมูล

ขั้นตอนถัดไปคือการตั้งค่าข้อมูลพื้นฐานที่จำเป็นสำหรับแผงควบคุมโดยใช้ฐานข้อมูลที่สร้างไว้ก่อนหน้านี้

:::info
โปรดทราบว่าอาจใช้เวลาหลายนาที อย่าออกจากกระบวนการนี้เพื่อป้องกันปัญหา รออย่างใจเย็น :)
:::

```bash
php artisan migrate --seed --force
```

### การสร้างผู้ดูแลระบบ

เมื่อฐานข้อมูลพร้อมแล้ว คุณต้องสร้างผู้ใช้แอดมินคนแรกเพื่อเข้าสู่ระบบแผง Pterodactyl

```bash
php artisan p:user:make
```

### การตั้งค่าสิทธิ์

ขั้นตอนต่อไปคือการตั้งค่าสิทธิ์ไฟล์ในแผง Pterodactyl เพื่อให้แผงสามารถอ่านและเขียนไฟล์ได้อย่างไม่มีปัญหา

รันคำสั่งนี้เพื่อกำหนดสิทธิ์
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

เมื่อเสร็จแล้ว คุณควรจะเข้าถึงแผง Pterodactyl ได้โดยไปที่ลิงก์นี้ โดยแทนที่ `your_ipaddress` ด้วย IP ของเซิร์ฟเวอร์คุณ
```
http://[your_ipaddress]/
```

### Queue Workers

ขั้นตอนสุดท้ายของการติดตั้งคือการตั้งค่า cronjob ที่ทำงานเป็นระยะ ๆ พร้อมกับ queue worker ที่ดูแลงานเบื้องหลังหลายอย่าง

เปิด crontab ด้วยคำสั่ง `sudo crontab -e` แล้วเพิ่มบรรทัดนี้เพื่อให้ cronjob รันทุกนาทีสำหรับ Pterodactyl
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

จากนั้นสร้าง queue worker ด้วย `systemd` เพื่อให้กระบวนการคิวทำงานต่อเนื่องในแบ็กกราวด์

สร้างไฟล์ใหม่สำหรับ worker ด้วย nano editor
```
nano /etc/systemd/system/pteroq.service
```

คัดลอกเนื้อหานี้ลงไปในไฟล์
```
# Pterodactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# บางระบบอาจใช้ user และ group ต่างกัน
# บางระบบใช้ `apache` หรือ `nginx` เป็น user และ group
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

:::note
ถ้าใช้ CentOS ให้เปลี่ยน `redis-server.service` เป็น `redis.service` ในไฟล์นี้
:::

บันทึกไฟล์โดยกด `CTRL + X` แล้วกด `Y` เพื่อยืนยัน

สุดท้าย เปิดใช้งานบริการ redis และบริการที่สร้างขึ้นให้รันตอนบูตระบบ
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

คุณติดตั้ง Pterodactyl บนเซิร์ฟเวอร์สำเร็จแล้ว สามารถเข้าถึงแผงได้ที่ URL นี้ โดยแทนที่ `[your_serverip]` ด้วย IP เซิร์ฟเวอร์ของคุณ
```
http://[your_serverip]
```

## ตัวเลือกเสริม: การตั้งค่าเว็บเซิร์ฟเวอร์

คุณอาจต้องการตั้งค่าเว็บเซิร์ฟเวอร์เพิ่มเติม ในคู่มือนี้เราใช้ Nginx ดังนั้นส่วนนี้จะอธิบายวิธีปรับแต่งการตั้งค่าสำหรับ Nginx

ข้อดีของการตั้งค่าเว็บเซิร์ฟเวอร์เพิ่มเติมคือคุณจะสามารถตั้งค่าแผงบนโดเมนของคุณเอง และติดตั้งใบรับรอง SSL สำหรับเว็บไซต์แผงได้

### ระเบียน DNS ของโดเมน
เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้ผ่านโดเมน คุณต้องตั้งค่า `A` ระเบียน DNS สำหรับโดเมนนั้น ขึ้นอยู่กับผู้ให้บริการโดเมนของคุณ แต่โดยทั่วไปจะมีแผงควบคุม DNS ให้จัดการ ระเบียนนี้ควรชี้ไปที่ที่อยู่ IP เซิร์ฟเวอร์ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### ลบการตั้งค่าเริ่มต้น
เริ่มต้นด้วยการลบการตั้งค่าเริ่มต้นของ Nginx โดยลบไฟล์นี้ออก
```bash
rm /etc/nginx/sites-enabled/default
```
ตอนนี้ให้ใช้เนื้อหาด้านล่างเพื่อสร้างไฟล์การตั้งค่าใหม่สำหรับเว็บไซต์แผง Pterodactyl ของคุณ คุณต้องตัดสินใจว่าจะใช้ SSL หรือไม่ เพราะเนื้อหาและขั้นตอนจะต่างกันเล็กน้อยตามตัวเลือกนี้

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx With SSL" default>

### การตั้งค่า Certbot
เพื่อให้เว็บไซต์ของคุณมีใบรับรอง SSL คุณต้องตั้งค่าระบบจัดการและต่ออายุใบรับรองอัตโนมัติ ในที่นี้จะใช้ Certbot ซึ่งเป็นโอเพ่นซอร์ส

ติดตั้ง Certbot บนเซิร์ฟเวอร์ก่อน สำหรับ Nginx ต้องติดตั้งแพ็กเกจ python3-certbot-nginx ด้วย
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

ต่อไปต้องตั้งค่าการยืนยันตัวตนเพื่อสร้างใบรับรอง ในที่นี้จะใช้ DNS challenge เพราะปลอดภัยกว่า HTTP challenge

คุณต้องสร้างระเบียน `TXT` DNS สำหรับโดเมนที่ต้องการใช้ ขึ้นอยู่กับผู้ให้บริการโดเมนของคุณ แต่โดยทั่วไปจะมีแผงควบคุม DNS ให้จัดการ

รันคำสั่งนี้เพื่อรับข้อมูลสำหรับระเบียน `TXT` DNS แทนที่ `[your_domain]` ด้วยโดเมนที่ต้องการใช้
```bash
certbot -d [your_domain] --manual --preferred-challenges dns certonly
```

เมื่อสร้างระเบียน DNS เสร็จแล้ว ให้ตั้งค่า auto renewal ด้วย cronjob เปิด crontab ด้วย `sudo crontab -e` แล้วเพิ่มคำสั่งนี้เพื่อให้ใบรับรองต่ออายุทุกวันเวลา 23:00 ตามเวลาระบบ

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### สร้างไฟล์การตั้งค่า

เมื่อมีใบรับรอง SSL แล้ว ให้สร้างไฟล์การตั้งค่าเว็บเซิร์ฟเวอร์

รันคำสั่งนี้เพื่อเปิด nano editor ที่โฟลเดอร์เป้าหมายและชื่อไฟล์ที่กำหนด
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

คัดลอกเนื้อหาการตั้งค่าด้านล่างลงใน editor อย่าลืมแทนที่ `[your_domain]` ด้วยโดเมนที่ตั้งค่า DNS ไว้ก่อนหน้านี้

:::warning
ตรวจสอบให้แน่ใจว่าคุณตั้งค่าใบรับรอง SSL เรียบร้อยแล้ว ไม่เช่นนั้นเว็บเซิร์ฟเวอร์จะไม่สามารถเริ่มทำงานได้
:::

```
server_tokens off;

server {
    listen 80;
    server_name [your_domain];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [your_domain];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[your_domain]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[your_domain]/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
<TabItem value="Nginx Without SSL" label="Nginx Without SSL">

#### สร้างไฟล์การตั้งค่า

รันคำสั่งนี้เพื่อเปิด nano editor ที่โฟลเดอร์เป้าหมายและชื่อไฟล์ที่กำหนด
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

คัดลอกเนื้อหาการตั้งค่าด้านล่างลงใน editor อย่าลืมแทนที่ `[your_domain]` ด้วยโดเมนที่ตั้งค่า DNS ชี้ไปยัง IP เซิร์ฟเวอร์ของคุณ

:::warning
ตรวจสอบให้แน่ใจว่าคุณตั้งค่าใบรับรอง SSL เรียบร้อยแล้ว ไม่เช่นนั้นเว็บเซิร์ฟเวอร์จะไม่สามารถเริ่มทำงานได้
:::

```
server {
    listen 80;
    server_name [your_domain];

    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
</TabItem>
</Tabs>

### ใช้การตั้งค่า

เมื่อแก้ไขการตั้งค่าเสร็จแล้ว ให้เปิดใช้งานด้วยคำสั่งนี้
```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # ไม่จำเป็นสำหรับ CentOS

sudo systemctl restart nginx # รีสตาร์ท Nginx
```

เมื่อทุกอย่างเรียบร้อย คุณจะสามารถเข้าถึงแผง Pterodactyl ได้ง่าย ๆ ผ่านโดเมนที่ตั้งค่าไว้ในส่วนนี้

คุณตั้งค่าเว็บเซิร์ฟเวอร์สำเร็จเพื่อใช้โดเมนของคุณและเพิ่มใบรับรอง SSL ให้เว็บไซต์เรียบร้อยแล้ว