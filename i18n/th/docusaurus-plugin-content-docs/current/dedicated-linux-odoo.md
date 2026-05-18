---
id: dedicated-linux-odoo
title: "ตั้งค่า Odoo บนเซิร์ฟเวอร์ Linux - รัน ERP และ CRM โอเพ่นซอร์สของคุณเอง"
description: "ค้นพบวิธีจัดการและอัตโนมัติกระบวนการธุรกิจด้วยแพลตฟอร์ม ERP และ CRM แบบบูรณาการของ Odoo เพื่อการดำเนินงานบริษัทที่ราบรื่น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Odoo
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

Odoo คือแพลตฟอร์มโอเพ่นซอร์สแบบโมดูลาร์ที่รวมฟีเจอร์ Enterprise Resource Planning (ERP) และ Customer Relationship Management (CRM) ไว้ด้วยกัน ช่วยให้ธุรกิจจัดการและอัตโนมัติกระบวนการต่างๆ เช่น การบัญชี สต็อก การจัดการโปรเจกต์ และการขายได้จากระบบเดียว

ด้วยการขยายฟีเจอร์ที่ยืดหยุ่น Odoo สามารถปรับแต่งให้ตรงกับความต้องการเฉพาะ และมอบโซลูชันแบบบูรณาการสำหรับการจัดการทุกส่วนของบริษัท

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

กำลังคิดจะเช่าเซิร์ฟเวอร์เกมนี้เองใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการตั้งค่าและคอนฟิก พร้อมทุกสิ่งที่ต้องรู้ก่อนเริ่มใช้งาน



## ติดตั้ง Odoo ด้วย One Click Apps Installer

คุณสามารถติดตั้ง **Odoo** ได้โดยตรงผ่าน **One Click Apps Installer** ในเว็บอินเทอร์เฟซของ VPS หลังจากตั้งค่าแอปเริ่มต้นเสร็จ เปิดแคตตาล็อกแอป ค้นหา **Odoo** และเริ่มดีพลอยด้วยโปรเจกต์ สภาพแวดล้อม และการตั้งค่าโดเมนที่คุณต้องการ วิธีนี้ช่วยให้คุณติดตั้งและจัดการ **Odoo** ได้อย่างรวดเร็วและง่ายดายโดยไม่ต้องใช้คำสั่งในเทอร์มินัล พร้อมทั้งได้ประโยชน์จากการจัดการผ่านเว็บ การรองรับโดเมนแบบกำหนดเอง และการจัดเตรียม SSL เมื่อมีให้บริการ



## ข้อกำหนดเบื้องต้น

ก่อนติดตั้ง **Odoo** ให้ตรวจสอบว่าสภาพแวดล้อมเช่าเซิร์ฟเวอร์เกมของคุณตรงตามข้อกำหนดต่อไปนี้ เพื่อให้การติดตั้งราบรื่นและประสิทธิภาพดีที่สุด

| ฮาร์ดแวร์   | ขั้นต่ำ       | แนะนำ        |
| ---------- | ------------ | ------------ |
| CPU        | 1 คอร์ vCPU  | 4 คอร์ vCPU  |
| RAM        | 1 GB         | 4 GB         |
| พื้นที่ดิสก์ | 15 GB        | 25 GB        |

ซอฟต์แวร์ต้องการให้ติดตั้ง dependencies ที่จำเป็นทั้งหมด และรันบนระบบปฏิบัติการที่รองรับ ตรวจสอบให้แน่ใจว่าเซิร์ฟเวอร์ของคุณตรงตามข้อกำหนดเหล่านี้ก่อนเริ่มติดตั้ง:

**Dependencies:** `Docker`

**ระบบปฏิบัติการ:** เวอร์ชันล่าสุดของ Ubuntu/Debian ที่รองรับ Docker 26+

ตรวจสอบให้แน่ใจว่าติดตั้ง dependencies ครบถ้วนและใช้ระบบปฏิบัติการเวอร์ชันที่ถูกต้อง เพื่อหลีกเลี่ยงปัญหาความเข้ากันได้ระหว่างการติดตั้ง Odoo



## การเตรียมตัว

ก่อนตั้งค่า **Odoo** คุณต้องเตรียมระบบของคุณก่อน ซึ่งรวมถึงการอัปเดตระบบปฏิบัติการเป็นเวอร์ชันล่าสุดและติดตั้ง dependencies ที่จำเป็นทั้งหมด การเตรียมตัวเหล่านี้ช่วยให้สภาพแวดล้อมมีความเสถียรและลดปัญหาระหว่างหรือต่อหลังการติดตั้ง


### อัปเดตระบบ
เพื่อให้ระบบของคุณรันด้วยซอฟต์แวร์และแพตช์ความปลอดภัยล่าสุด ควรอัปเดตระบบก่อนเสมอ ใช้คำสั่งนี้:

```
sudo apt update && sudo apt upgrade -y
```
คำสั่งนี้จะทำให้ระบบของคุณมีแพตช์ความปลอดภัยและเวอร์ชันซอฟต์แวร์ล่าสุดก่อนดำเนินการต่อ



### ติดตั้ง dependencies
เมื่ออัปเดตเสร็จแล้ว ให้ติดตั้ง dependencies ต่อไป Bitwarden จะถูกดีพลอยและรันบนเครื่องของคุณโดยใช้ Docker containers หลายตัว ซึ่งต้องติดตั้ง Docker ก่อน ใช้คำสั่งนี้:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

คู่มือการติดตั้งและใช้งาน Docker แบบละเอียดมีให้ใน [คู่มือ Docker](dedicated-linux-docker.md)



### ตั้งค่าโดเมนของคุณ

โดยปกติ Odoo จะรันบนโฮสต์ผ่านพอร์ต 80 (HTTP) และ 443 (HTTPS) ตั้งค่าโดเมนพร้อมระเบียน DNS ชี้ไปยังโฮสต์ หากโดเมนของคุณจัดการโดยเรา คุณสามารถตั้งค่าได้ง่ายๆ ผ่านตัวเลือก [EasyDNS](domain-easydns.md)



## การติดตั้ง
เมื่อผ่านข้อกำหนดและเตรียมระบบเรียบร้อยแล้ว คุณก็พร้อมติดตั้งแอป Odoo

เมื่อทำงานกับ Docker หลายชุด ควรสร้างโครงสร้างไดเรกทอรีที่ชัดเจนเพื่อแยกโปรเจกต์ออกจากกัน วิธีที่นิยมคือสร้างโฟลเดอร์ *docker* ในโฮมไดเรกทอรีของผู้ใช้ และสร้างซับโฟลเดอร์แยกสำหรับแต่ละโดเมน เพื่อให้โฮสต์โปรเจกต์หลายตัวบนเซิร์ฟเวอร์เดียวโดยไม่เกิดปัญหาคอนฟิก

ตัวอย่างการเตรียมโครงสร้างสำหรับโดเมน `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

ในไดเรกทอรีโปรเจกต์นี้ แนะนำให้สร้างซับโฟลเดอร์ที่จะถูกแมปเป็นโวลุ่มโดยคอนเทนเนอร์ โวลุ่มเหล่านี้ช่วยแชร์ข้อมูลระหว่างเซอร์วิสหรือเก็บข้อมูลถาวร กรณีสำคัญคือ webroot ที่ nginx และ certbot ต้องเข้าถึงเพื่อสร้างและต่ออายุใบรับรอง SSL โครงสร้างที่เหมาะสมสร้างได้ดังนี้:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

โครงสร้างนี้แยกไดเรกทอรีสำหรับคอนฟิก nginx, ใบรับรอง SSL, ไฟล์ include และเนื้อหาเฉพาะของ Odoo เช่น configs และ addons



### สร้าง Docker Compose

ในโปรเจกต์ docker ของคุณ สร้างไฟล์ compose.yml โดยใช้ `nano compose.yml` แล้วใส่โค้ดนี้ลงไป:

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```



### ไฟร์วอลล์

เพื่อให้ nginx และ certbot ทำงานได้ถูกต้อง คุณต้องเปิดพอร์ต TCP 80 (HTTP) และ 443 (HTTPS) ในไฟร์วอลล์ พอร์ตเหล่านี้จำเป็นเพราะ certbot ใช้พอร์ต 80 สำหรับการตรวจสอบ HTTP และพอร์ต 443 สำหรับให้บริการทราฟฟิก HTTPS แบบเข้ารหัส หากเปิดใช้งาน UFW (Uncomplicated Firewall) ให้เพิ่มกฎด้วยคำสั่ง:

```
sudo ufw allow http
sudo ufw allow https
```

จากนั้นตรวจสอบกฎด้วยคำสั่ง `sudo ufw status` เพื่อยืนยันว่าพอร์ตเปิดอยู่ ตรวจสอบให้แน่ใจว่าไม่มีการตั้งค่าไฟร์วอลล์อื่นบล็อกพอร์ตเหล่านี้ มิฉะนั้นการสร้างใบรับรองหรือการใช้งาน HTTPS อาจล้มเหลว



### ตั้งค่า Nginx

เริ่มต้นตั้งค่า nginx โดยสร้างไฟล์คอนฟิกสำหรับโดเมนของคุณ ในไดเรกทอรี `nginx/conf` สร้างไฟล์ใหม่ชื่อโดเมนของคุณ ใช้คำสั่ง `nano nginx/conf/example.com.conf` แล้วเพิ่มคำสั่งพื้นฐานนี้โดยแทนที่ example.com ด้วยโดเมนจริงของคุณ:

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

คอนฟิกนี้ช่วยให้ certbot ผ่านการทดสอบ ACME และออกใบรับรอง SSL ที่ถูกต้อง รวมถึงเปลี่ยนเส้นทาง HTTP ทั้งหมดไปยัง HTTPS

บันทึกไฟล์แล้วเริ่มคอนเทนเนอร์ที่จำเป็น ได้แก่ ฐานข้อมูล Odoo และ nginx ด้วยคำสั่ง:

```
sudo docker compose up -d db odoo nginx
```

คอนเทนเนอร์จะรันในแบ็กกราวด์ และ nginx จะใช้คอนฟิกใหม่ ทำให้ certbot สามารถสร้างใบรับรองในขั้นตอนถัดไป



### สร้างใบรับรอง SSL

รันคำสั่งนี้เพื่อสร้างใบรับรอง SSL ด้วย certbot อย่าลืมเปลี่ยนโดเมนหลัง `-d` และแทนที่ user@mail.com ด้วยอีเมลจริงของคุณ

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

จากนั้นสร้างไฟล์ DH parameter เพื่อเพิ่มความปลอดภัยของการแลกเปลี่ยนกุญแจเข้ารหัส

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

สร้างไฟล์ `ssl.conf` โดยใช้ `nano nginx/ssl/ssl.conf` แล้วเพิ่มเนื้อหานี้ โดยเปลี่ยน example.com เป็นโดเมนของคุณ:

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```



## การตั้งค่า



### คอนฟิก Nginx

แก้ไขไฟล์คอนฟิก nginx ที่สร้างไว้ก่อนหน้า แล้วแทนที่เนื้อหาด้วยคอนฟิกนี้ เพื่อให้เว็บไซต์ของคุณให้บริการผ่าน HTTPS เท่านั้น

อย่าลืมใส่โดเมนจริงใน `server_name` และระบุเส้นทางไฟล์ใบรับรองใน `ssl_certificate` และ `ssl_certificate_key` ให้ถูกต้อง

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # รวมการตั้งค่า SSL ของ Mozilla
    include /etc/nginx/ssl/ssl.conf;

    # เส้นทางใบรับรอง (ตรวจสอบให้ตรงกับโวลุ่มที่แมปไว้)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # หัวข้อความปลอดภัย
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    #Gzip
    include /etc/nginx/inc/gzip.conf;

    # การตั้งค่า proxy สำหรับ Odoo
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # เวลา timeout ที่แนะนำสำหรับคำขอทั่วไป
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # แคชไฟล์สแตติก
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # เพิ่มเวลา timeout สำหรับ long polling
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # อนุญาตให้ Certbot เข้าถึง URL ทดสอบ
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```



เมื่อบันทึกการเปลี่ยนแปลงในคอนฟิก nginx แล้ว ให้รีสตาร์ทคอนเทนเนอร์ nginx เพื่อใช้การตั้งค่าใหม่:

```
sudo docker compose restart nginx
```

การรีสตาร์ทจะทำให้ nginx โหลดคอนฟิกใหม่และเริ่มให้บริการด้วยพารามิเตอร์ใหม่ทันที หากมีข้อผิดพลาดเกิดขึ้น ให้ตรวจสอบล็อกคอนเทนเนอร์ด้วยคำสั่ง `sudo docker compose logs nginx` เพื่อแก้ไขปัญหา เมื่อคอนเทนเนอร์รันไม่มีข้อผิดพลาด ให้เปิดเว็บไซต์ของคุณเพื่อตรวจสอบว่า HTTPS ทำงานและเว็บไซต์แสดงผลตามที่คาดไว้



### ตัวเลือกคอนฟิก Odoo

หากต้องการตั้งค่าปรับแต่ง คุณสามารถสร้างไฟล์คอนฟิกเฉพาะสำหรับ Odoo ได้ สร้างไฟล์ใหม่ที่ `config/odoo.conf` แล้วเพิ่มตัวเลือกที่ต้องการ

ในไฟล์นี้คุณสามารถกำหนดพารามิเตอร์ที่มีประโยชน์หลายอย่าง เช่น `list_db = False` เพื่อซ่อนการเลือกฐานข้อมูลจากหน้าเข้าสู่ระบบ, `proxy_mode = True` เพื่อแจ้งว่า Odoo รันอยู่หลัง reverse proxy และถ้าต้องการใช้ addons แบบกำหนดเอง ให้ยกเลิกคอมเมนต์บรรทัด `addons_path` และชี้ไปยังไดเรกทอรี addons ที่สร้างไว้ก่อนหน้า ตัวอย่างคอนฟิก:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### ลบ -i base flag

ต้องลบ `-i base` ออกจากไฟล์ `compose.yml` เพราะถ้าไม่ลบจะทำให้ฐานข้อมูลถูกสร้างใหม่ทุกครั้งที่สร้างคอนเทนเนอร์ odoo ใหม่ เปิดไฟล์ compose ด้วย `nano compose.yml` แล้วแก้ไขบรรทัดคำสั่งเป็นแบบนี้:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## การเข้าถึงเว็บไซต์

เมื่อการติดตั้งและคอนฟิกเสร็จสมบูรณ์และเซอร์วิสทั้งหมดรันอยู่ คุณสามารถเข้าถึงเว็บไซต์ของคุณได้อย่างปลอดภัยโดยพิมพ์โดเมนของคุณในแถบที่อยู่ของเบราว์เซอร์



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

หน้านี้จะแสดงหน้าเริ่มต้นของการติดตั้งใหม่ สำหรับการเข้าสู่ระบบครั้งแรก จะมีบัญชีเริ่มต้นให้ใช้ชื่อผู้ใช้ `admin` และรหัสผ่าน `admin` แนะนำให้เปลี่ยนรหัสผ่านนี้ทันทีเพื่อความปลอดภัย



## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! คุณได้ติดตั้งและคอนฟิก Odoo บน VPS/เซิร์ฟเวอร์เฉพาะของคุณสำเร็จแล้ว เรายังแนะนำให้ดูแหล่งข้อมูลต่อไปนี้เพื่อช่วยและแนะนำเพิ่มเติมในกระบวนการตั้งค่าเซิร์ฟเวอร์ของคุณ

- [Odoo.com](https://odoo.com) - เว็บไซต์ทางการ
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - เอกสาร Odoo

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงในนี้ไหม? หากต้องการความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวันเพื่อช่วยคุณ! 🙂



