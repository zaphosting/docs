---
id: vserver-linux-nextcloud
title: "ตั้งค่า Nextcloud บนเซิร์ฟเวอร์ Linux - สร้างคลาวด์ส่วนตัวของคุณเอง"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์ Nextcloud ประสิทธิภาพสูงบน Linux เพื่อโฮสต์คลาวด์ที่ดีที่สุด → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Nextcloud
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Nextcloud คือโซลูชันคลาวด์แบบโอเพนซอร์สและเป็นฟอร์กของ Owncloud ก่อตั้งขึ้นในปี 2016 โดย Frank Kalitschek ผู้ก่อตั้ง Owncloud คนก่อน

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

เพื่อให้ได้ประสิทธิภาพ ความเสถียร และฟังก์ชันการทำงานที่ดีที่สุด ขอแนะนำการตั้งค่าดังต่อไปนี้สำหรับการโฮสต์เซิร์ฟเวอร์ Nextcloud เซิร์ฟเวอร์ Nextcloud ไม่รองรับ Windows และ MacOS อย่างน้อยก็ไม่ใช่โดยไม่ใช้การจำลองเสมือนหรือวิธีแก้ไขอื่นๆ

## ติดตั้ง Nextcloud ด้วย One Click Apps Installer

คุณสามารถติดตั้ง **Nextcloud** ได้โดยตรงผ่าน **One Click Apps Installer** ในเว็บอินเทอร์เฟซของ VPS หลังจากตั้งค่าแอปเริ่มต้นเสร็จแล้ว ให้เปิดแคตตาล็อกแอป ค้นหา **Nextcloud** และเริ่มการติดตั้งด้วยโปรเจกต์ สภาพแวดล้อม และการตั้งค่าโดเมนที่คุณต้องการ วิธีนี้ช่วยให้คุณติดตั้งและจัดการ **Nextcloud** ได้อย่างรวดเร็วและง่ายดายโดยไม่ต้องตั้งค่าด้วยคำสั่งในเทอร์มินัลเอง พร้อมทั้งได้ประโยชน์จากการจัดการผ่านเว็บ การรองรับโดเมนที่กำหนดเอง และการจัดเตรียม SSL เมื่อมีให้ใช้งาน

<InlineVoucher />

## การเตรียมตัว

ข้อกำหนดต่อไปนี้เป็นคำแนะนำจากนักพัฒนาและอิงจากประสบการณ์ของเราเอง หากไม่ตรงตามข้อกำหนดเหล่านี้ อาจเจอปัญหาได้

#### ฮาร์ดแวร์

| อุปกรณ์       | ขั้นต่ำ                 | แนะนำ                      |
| -------------- | ---------------------- | --------------------------- |
| CPU            | 2x 1 GHz               | 4x 2+ GHz                   |
| RAM            | 512 MB                 | 4+ GB                       |
| พื้นที่จัดเก็บ | 10 GB                  | 50+ GB                      |
| แบนด์วิดท์    | 100 mbit/s (อัปโหลด & ดาวน์โหลด) | 500mbit/s (อัปโหลด & ดาวน์โหลด) แนะนำถ้ามีผู้ใช้หลายคนในคลาวด์ |

#### ซอฟต์แวร์

| แพลตฟอร์ม       | ตัวเลือก                                                      |
| ---------------- | ------------------------------------------------------------ |
| ระบบปฏิบัติการ  | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7   |
| ฐานข้อมูล        | MySQL หรือ MariaDB 5.5+ (แนะนำ), SQLite (แนะนำเฉพาะสำหรับทดสอบและใช้งานน้อย) |
| เว็บเซิร์ฟเวอร์  | Apache 2.4 พร้อม `mod_php` หรือ `php-fpm` (แนะนำ)             |
| PHP              | 5.6, 7.0 (แนะนำ), 7.1 (แนะนำ), 7.2                           |

ต้องเชื่อมต่อผ่าน SSH client เพื่อทำการติดตั้งคลาวด์บนเซิร์ฟเวอร์ Linux หากคุณไม่แน่ใจวิธีใช้ SSH ดูได้ที่คู่มือนี้: [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

เมื่อเชื่อมต่อแล้ว คุณสามารถเริ่มติดตั้งแพ็กเกจที่จำเป็นสำหรับการติดตั้ง Nextcloud ซึ่งรวมถึงการติดตั้งเว็บเซิร์ฟเวอร์และ PHP

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (เว็บเซิร์ฟเวอร์)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Debian 8:
```
# ขั้นตอนที่ 1: เพิ่ม PHP 7.3 PPA repository
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# ขั้นตอนที่ 2: ติดตั้ง PHP 7.3
sudo apt -y install php7.3

# ขั้นตอนที่ 3: ติดตั้งส่วนขยาย PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# ขั้นตอนที่ 1: เพิ่ม PHP 7.3 PPA repository
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# ขั้นตอนที่ 2: ติดตั้ง PHP 7.3
sudo apt -y install php7.3

# ขั้นตอนที่ 3: ติดตั้งส่วนขยาย PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# ขั้นตอนที่ 1: ติดตั้ง PHP 7.3
sudo apt -y install php php-common

# ขั้นตอนที่ 2: ติดตั้งส่วนขยาย PHP 7.3
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

ตรวจสอบเวอร์ชัน PHP เพื่อความถูกต้อง
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (เว็บเซิร์ฟเวอร์)**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Ubuntu 16.X:
```
# ขั้นตอนที่ 1: เพิ่ม PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# ขั้นตอนที่ 2: ติดตั้ง PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# ขั้นตอนที่ 3: ติดตั้งส่วนขยาย PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# ขั้นตอนที่ 1: เพิ่ม PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# ขั้นตอนที่ 2: ติดตั้ง PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# ขั้นตอนที่ 3: ติดตั้งส่วนขยาย PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# ขั้นตอนที่ 1: เพิ่ม PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# ขั้นตอนที่ 2: ติดตั้ง PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# ขั้นตอนที่ 3: ติดตั้งส่วนขยาย PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

ตรวจสอบเวอร์ชัน PHP เพื่อความถูกต้อง
```
php -v
```


</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (เว็บเซิร์ฟเวอร์)**

🗄️ CentOS 6:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

**PHP (Hypertext Preprocessor)**

🗄️ CentOS 6:
```
# ขั้นตอนที่ 1: ตั้งค่า Yum repository
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# ขั้นตอนที่ 2: ติดตั้ง PHP 7.3
yum --enablerepo=remi-php73 install php

# ขั้นตอนที่ 3: ติดตั้งส่วนขยาย PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# ขั้นตอนที่ 1: ตั้งค่า Yum repository
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# ขั้นตอนที่ 2: ติดตั้ง PHP 7.3
yum --enablerepo=remi-php73 install php

# ขั้นตอนที่ 3: ติดตั้งส่วนขยาย PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# ขั้นตอนที่ 1: ตั้งค่า Yum repository
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# ขั้นตอนที่ 2: ติดตั้ง PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

ตรวจสอบเวอร์ชัน PHP เพื่อความถูกต้อง
```
php -v
```

</TabItem>
</Tabs>

ขั้นตอนถัดไปคือการกำหนดประเภทฐานข้อมูลเพื่อเก็บข้อมูลที่เกี่ยวข้อง มีตัวเลือกหลายแบบ:


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
ถ้าคุณเลือกใช้ฐานข้อมูลประเภทนี้ ให้ทำตามขั้นตอนดังนี้:

ติดตั้งแพ็กเกจ:
```
sudo apt-get install mariadb-server php-mysql
```

ระหว่างการติดตั้งจะมีการขอรหัสผ่าน root หากไม่มีการขอรหัสผ่าน รหัสผ่านเริ่มต้นจะเป็นค่าว่าง ซึ่งไม่ปลอดภัยและควรเปลี่ยนทันทีหลังติดตั้ง!

ขั้นตอนถัดไปคือเชื่อมต่อกับเซิร์ฟเวอร์ฐานข้อมูลและสร้างฐานข้อมูลที่ต้องการ:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

จากนั้นต้องสร้างผู้ใช้ที่มีสิทธิ์เข้าถึงฐานข้อมูล Nextcloud

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
อย่าข้ามขั้นตอนนี้โดยใช้ root user เพราะไม่ปลอดภัยและอาจทำให้ข้อมูลของคุณเสี่ยง!
:::

ขั้นตอนสุดท้ายคือมอบสิทธิ์ให้ผู้ใช้ใหม่:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

เมื่อเสร็จแล้ว กด Ctrl-D เพื่อออกจากฐานข้อมูลและดำเนินการขั้นตอนถัดไป

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
ถ้าคุณเลือกใช้ฐานข้อมูลประเภทนี้ ให้ทำตามขั้นตอนดังนี้:

ติดตั้งแพ็กเกจ:
```
sudo apt-get install mysql-server php-mysql
```

ระหว่างการติดตั้งจะมีการขอรหัสผ่าน root หากไม่มีการขอรหัสผ่าน รหัสผ่านเริ่มต้นจะเป็นค่าว่าง ซึ่งไม่ปลอดภัยและควรเปลี่ยนทันทีหลังติดตั้ง!

ขั้นตอนถัดไปคือเชื่อมต่อกับเซิร์ฟเวอร์ฐานข้อมูลและสร้างฐานข้อมูลที่ต้องการ:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

จากนั้นต้องสร้างผู้ใช้ที่มีสิทธิ์เข้าถึงฐานข้อมูล Nextcloud

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
อย่าข้ามขั้นตอนนี้โดยใช้ root user เพราะไม่ปลอดภัยและอาจทำให้ข้อมูลของคุณเสี่ยง!
:::


ขั้นตอนสุดท้ายคือมอบสิทธิ์ให้ผู้ใช้ใหม่:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

เมื่อเสร็จแล้ว กด Ctrl-D เพื่อออกจากฐานข้อมูลและดำเนินการขั้นตอนถัดไป

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
ถ้าคุณเลือกใช้ฐานข้อมูลประเภทนี้ ให้ทำตามขั้นตอนดังนี้:

ติดตั้งแพ็กเกจ:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

ระหว่างการติดตั้งจะมีการขอรหัสผ่าน root หากไม่มีการขอรหัสผ่าน รหัสผ่านเริ่มต้นจะเป็นค่าว่าง ซึ่งไม่ปลอดภัยและควรเปลี่ยนทันทีหลังติดตั้ง!

ขั้นตอนถัดไปคือเชื่อมต่อกับเซิร์ฟเวอร์ฐานข้อมูลและสร้างฐานข้อมูลที่ต้องการ:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

จากนั้นต้องสร้างผู้ใช้ที่มีสิทธิ์เข้าถึงฐานข้อมูล Nextcloud

```sql
CREATE USER nextcloud with encrypted password 'YOUR_PASSWORD_HERE';
```

:::info
อย่าข้ามขั้นตอนนี้โดยใช้ root user เพราะไม่ปลอดภัยและอาจทำให้ข้อมูลของคุณเสี่ยง!
:::

ขั้นตอนสุดท้ายคือมอบสิทธิ์ให้ผู้ใช้ใหม่:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

เมื่อเสร็จแล้ว กด Ctrl-D เพื่อออกจากฐานข้อมูล จากนั้นคุณสามารถแก้ไขฐานข้อมูล PostgreSQL ผ่านเว็บอินสตอลเลอร์หรือไฟล์ **config.php** ได้

```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "pgsql",
  "dbname"        => "nextcloud",
  "dbuser"        => "username",
  "dbpass"        => "password",
  "dbhost"        => "localhost",
  "dbtableprefix" => "",
);
```

</TabItem>
<TabItem value="SQLite" label="SQLite">

<br/>
ถ้าคุณเลือกใช้ฐานข้อมูลประเภทนี้ ให้ทำตามขั้นตอนดังนี้:

ติดตั้งแพ็กเกจ:
```
apt-get install sqlite3 php-sqlite3
```

สร้างฐานข้อมูล SQLite 3 ใหม่
```
sqlite3 DatabaseName.db
```

หลังจากนั้นสามารถแก้ไขฐานข้อมูล SQLite 3 ผ่านเว็บอินสตอลเลอร์หรือไฟล์ **config.php** ได้
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
</TabItem>
</Tabs>

## การติดตั้ง

ตอนนี้สามารถเริ่มติดตั้ง Nextcloud ได้เลย ดาวน์โหลดและแตกไฟล์ซอฟต์แวร์:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

เมื่อเสร็จแล้ว ให้รันสคริปต์ติดตั้ง เข้าถึงได้ผ่านเบราว์เซอร์ที่ URL ดังนี้:

:::info
**http://domain.tld/nextcloud/** 
:::

หน้าการตั้งค่าสคริปต์ติดตั้งจะปรากฏขึ้น ให้สร้างผู้ใช้ root และกำหนดข้อมูลฐานข้อมูล:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## ความปลอดภัยและความมั่นคง

**คำเตือนการตั้งค่า**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**ไดเรกทอรีข้อมูล**

แนะนำอย่างยิ่งให้วางไดเรกทอรีข้อมูลนอกเว็บรูทไดเรกทอรี (เช่น นอก /var/www) วิธีที่ง่ายที่สุดคือทำตอนติดตั้งใหม่ โดยกำหนดไดเรกทอรีในขั้นตอนตั้งค่า แต่ต้องสร้างไดเรกทอรีและตั้งสิทธิ์ให้เรียบร้อยก่อน ไดเรกทอรีข้อมูลอาจเก็บไว้ในโฟลเดอร์ชื่อ Cloud ในโฮมไดเรกทอรี เช่น

```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS ผ่านใบรับรอง SSL (Let's Encrypt)** 

โซลูชันคลาวด์ที่ดีควรเข้าถึงได้เฉพาะผ่านการเชื่อมต่อ SSL เท่านั้น หากไม่มีการเข้ารหัส SSL ข้อมูลและข้อมูลต่างๆ จะถูกส่งแบบข้อความธรรมดา ซึ่งสามารถถูกดักจับและอ่านได้ง่าย

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName domain.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/nextcloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/nextcloud
 SetEnv HTTP_HOME /var/www/nextcloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/domain.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domain.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



นอกจากนี้ ควรเปลี่ยนเส้นทางทราฟฟิก HTTP ทั้งหมดไปยัง HTTPS ด้วยการเปลี่ยนเส้นทางถาวรโดยใช้รหัสสถานะ 301 ซึ่งสามารถทำได้โดยใช้ Apache ด้วยการตั้งค่าดังนี้:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## การจัดการ Nextcloud

สามารถเข้าถึง Nextcloud ได้ผ่านเบราว์เซอร์ รวมถึงผ่านสมาร์ทโฟนและคอมพิวเตอร์ด้วยแอป ดาวน์โหลดได้ที่นี่: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

ในเมนูตั้งค่าคุณสามารถปรับแต่งตัวเลือกเพิ่มเติมหลังติดตั้ง และดูข้อมูลสำคัญ เช่น บันทึกกิจกรรม รวมถึงตั้งค่าความปลอดภัยเพิ่มเติม (เช่น การยืนยันตัวตนสองชั้น, การเข้ารหัส), การตั้งค่าดีไซน์ (โลโก้, สี, สโลแกน, เฮดเดอร์), การตั้งค่าการเข้าถึง และอื่นๆ อีกมากมาย

**แอป**

นอกจากนี้ยังสามารถติดตั้งแอปเพิ่มเติมนอกเหนือจากแอปเริ่มต้นได้ โดยเข้าได้จากเมนู **แอป**

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

ด้วย **แอป** เหล่านี้ คุณสามารถปรับแต่ง Nextcloud ให้ตรงกับความต้องการของคุณได้มากขึ้น


## สรุป

ยินดีด้วย คุณติดตั้ง Nextcloud สำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />