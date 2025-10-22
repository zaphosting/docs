---
id: dedicated-linux-nextcloud
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง Nextcloud"
description: "ค้นพบวิธีเพิ่มประสิทธิภาพการตั้งค่าเซิร์ฟเวอร์ Nextcloud ของคุณเพื่อประสิทธิภาพและความเสถียรสูงสุดบนระบบ Linux → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Nextcloud
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Nextcloud คือโซลูชันคลาวด์แบบโอเพนซอร์สและเป็นฟอร์กของ Owncloud ก่อตั้งขึ้นในปี 2016 โดย Frank Kalitschek ผู้ก่อตั้ง Owncloud คนก่อนหน้า

![](https://screensaver01.zap-hosting.com/index.php/s/n2PbXo94RGNdPzt/preview)

เพื่อให้ได้ประสิทธิภาพ ความเสถียร และฟังก์ชันการทำงานที่ดีที่สุด ขอแนะนำการตั้งค่าดังต่อไปนี้สำหรับการโฮสต์เซิร์ฟเวอร์ Nextcloud เซิร์ฟเวอร์ Nextcloud ไม่รองรับ Windows และ MacOS อย่างน้อยก็ไม่ใช่โดยไม่ใช้การจำลองเสมือนหรือวิธีแก้ไขอื่นๆ<br/>

<InlineVoucher />

## การเตรียมตัว

ข้อกำหนดต่อไปนี้ได้รับการแนะนำโดยนักพัฒนาและอิงจากประสบการณ์ของเราเอง หากคุณไม่ตรงตามข้อกำหนดเหล่านี้ อาจเจอปัญหาได้

#### ฮาร์ดแวร์

| อุปกรณ์       | ขั้นต่ำ                 | แนะนำ                      |
| -------------- | ---------------------- | --------------------------- |
| CPU            | 2x 1 GHz               | 4x 2+ GHz                   |
| RAM            | 512 MB                 | 4+ GB                       |
| พื้นที่จัดเก็บ | 10 GB                  | 50+ GB                      |
| แบนด์วิดท์    | 100 mbit/s (อัปโหลด & ดาวน์โหลด) | 500mbit/s (อัปโหลด & ดาวน์โหลด) แนะนำถ้าผู้ใช้หลายคนจะใช้คลาวด์ |

#### ซอฟต์แวร์

| แพลตฟอร์ม       | ตัวเลือก                                                      |
| ---------------- | ------------------------------------------------------------ |
| ระบบปฏิบัติการ   | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7   |
| ฐานข้อมูล        | MySQL หรือ MariaDB 5.5+ (แนะนำ), SQLite (แนะนำเฉพาะสำหรับทดสอบและใช้งานน้อย) |
| เว็บเซิร์ฟเวอร์  | Apache 2.4 พร้อม `mod_php` หรือ `php-fpm` (แนะนำ)             |
| PHP              | 5.6, 7.0 (แนะนำ), 7.1 (แนะนำ), 7.2                           |

## การเตรียมตัว

ต้องเชื่อมต่อผ่านไคลเอนต์ SSH เพื่อทำการติดตั้งคลาวด์บนเซิร์ฟเวอร์ Linux หากคุณไม่แน่ใจว่าจะใช้ SSH อย่างไร นี่คือคู่มือสำหรับการใช้งาน: [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

เมื่อเชื่อมต่อแล้ว คุณสามารถเริ่มติดตั้งแพ็กเกจที่จำเป็นสำหรับการติดตั้ง Nextcloud จริง ซึ่งรวมถึงการติดตั้งเว็บเซิร์ฟเวอร์และ PHP

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

ระหว่างการติดตั้งจะมีการถามให้ตั้งรหัสผ่าน root หากไม่มีการถามรหัสผ่าน รหัสผ่านเริ่มต้นจะเป็นค่าว่าง ซึ่งไม่ปลอดภัยและควรเปลี่ยนทันทีหลังจากนั้น!

ขั้นตอนถัดไปคือเชื่อมต่อกับเซิร์ฟเวอร์ฐานข้อมูลและสร้างฐานข้อมูลที่ต้องการ:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

หลังจากนั้นต้องสร้างผู้ใช้ที่จะได้รับสิทธิ์เข้าถึงฐานข้อมูล Nextcloud

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
อย่าข้ามขั้นตอนนี้โดยใช้ผู้ใช้ root เพราะไม่ปลอดภัยและอาจทำให้ข้อมูลของคุณเสี่ยง!
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

ระหว่างการติดตั้งจะมีการถามให้ตั้งรหัสผ่าน root หากไม่มีการถามรหัสผ่าน รหัสผ่านเริ่มต้นจะเป็นค่าว่าง ซึ่งไม่ปลอดภัยและควรเปลี่ยนทันทีหลังจากนั้น!

ขั้นตอนถัดไปคือเชื่อมต่อกับเซิร์ฟเวอร์ฐานข้อมูลและสร้างฐานข้อมูลที่ต้องการ:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

หลังจากนั้นต้องสร้างผู้ใช้ที่จะได้รับสิทธิ์เข้าถึงฐานข้อมูล Nextcloud

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
อย่าข้ามขั้นตอนนี้โดยใช้ผู้ใช้ root เพราะไม่ปลอดภัยและอาจทำให้ข้อมูลของคุณเสี่ยง!
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

ระหว่างการติดตั้งจะมีการถามให้ตั้งรหัสผ่าน root หากไม่มีการถามรหัสผ่าน รหัสผ่านเริ่มต้นจะเป็นค่าว่าง ซึ่งไม่ปลอดภัยและควรเปลี่ยนทันทีหลังจากนั้น!

ขั้นตอนถัดไปคือเชื่อมต่อกับเซิร์ฟเวอร์ฐานข้อมูลและสร้างฐานข้อมูลที่ต้องการ:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

หลังจากนั้นต้องสร้างผู้ใช้ที่จะได้รับสิทธิ์เข้าถึงฐานข้อมูล Nextcloud

```sql
CREATE USER nextcloud with encrypted password 'YOUR_PASSWORD_HERE';
```

:::info
อย่าข้ามขั้นตอนนี้โดยใช้ผู้ใช้ root เพราะไม่ปลอดภัยและอาจทำให้ข้อมูลของคุณเสี่ยง!
:::

ขั้นตอนสุดท้ายคือมอบสิทธิ์ให้ผู้ใช้ใหม่:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

เมื่อเสร็จแล้ว กด Ctrl-D เพื่อออกจากฐานข้อมูล หลังจากนั้นคุณสามารถแก้ไขฐานข้อมูล PostgreSQL ผ่านตัวติดตั้งเว็บหรือผ่านไฟล์ **config.php** ได้

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

หลังจากนั้นฐานข้อมูล SQLite 3 สามารถแก้ไขได้ผ่านตัวติดตั้งเว็บหรือผ่านไฟล์ **config.php** ได้
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

ตอนนี้สามารถเริ่มการติดตั้ง Nextcloud จริงได้แล้ว ซอฟต์แวร์ต้องดาวน์โหลดและแตกไฟล์:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

เมื่อเสร็จขั้นตอนนี้ ก็ถึงเวลารันสคริปต์ติดตั้ง สามารถเข้าถึงได้ผ่านเบราว์เซอร์โดยใช้ URL ดังนี้:

:::info
**http://domain.tld/nextcloud/** 
:::

หน้าการตั้งค่าสคริปต์ติดตั้งจะปรากฏขึ้น ซึ่งจะสร้างผู้ใช้ root และกำหนดข้อมูลฐานข้อมูล:

![](https://screensaver01.zap-hosting.com/index.php/s/BdLXfzQwpRPbL9E/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/BNcyjRJNeT9dcZj/preview)


## ความปลอดภัยและความมั่นคง

**คำเตือนการตั้งค่า**

![](https://screensaver01.zap-hosting.com/index.php/s/PdzHSP5WaPEcQqH/preview)



**ไดเรกทอรีข้อมูล**

แนะนำอย่างยิ่งให้วางไดเรกทอรีข้อมูลนอกโฟลเดอร์ root ของเว็บ (เช่น นอก /var/www) วิธีที่ง่ายที่สุดคือทำตอนติดตั้งใหม่ ไดเรกทอรีนี้สามารถกำหนดได้ในระหว่างการตั้งค่า แต่ต้องสร้างไดเรกทอรีและตั้งสิทธิ์ให้เรียบร้อยก่อน ข้อมูลอาจเก็บไว้ในไดเรกทอรีชื่อ Cloud ในโฮมไดเรกทอรีก็ได้


```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS ผ่านใบรับรอง SSL (Let's Encrypt)** 

โซลูชันคลาวด์ที่ดีควรเข้าถึงได้เฉพาะผ่านการเชื่อมต่อ SSL เท่านั้น หากไม่มีการเข้ารหัส SSL ข้อมูลและข้อมูลต่างๆ จะถูกส่งในรูปแบบข้อความธรรมดา ซึ่งสามารถถูกดักจับและอ่านได้ง่ายและรวดเร็วโดยไม่มีการเข้ารหัส

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



นอกจากนี้ ทราฟฟิก HTTP ทั้งหมดควรถูกเปลี่ยนเส้นทางไปยัง HTTPS โดยใช้การเปลี่ยนเส้นทางถาวรด้วยรหัสสถานะ 301 ซึ่งสามารถทำได้โดยใช้ Apache กับการตั้งค่าคล้ายกับการตั้งค่า Apache VirtualHosts ดังนี้:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## การจัดการ Nextcloud

สามารถเข้าถึง Nextcloud ได้ผ่านเบราว์เซอร์ รวมถึงผ่านสมาร์ทโฟนและคอมพิวเตอร์โดยใช้แอป ดาวน์โหลดได้ที่นี่: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/5ay4YtgM8szkrxM/preview)

ในเมนูตั้งค่าคุณสามารถปรับแต่งตัวเลือกเพิ่มเติมหลังการตั้งค่าและดูข้อมูลสำคัญ เช่น บันทึกกิจกรรม รวมถึงการตั้งค่าความปลอดภัยเพิ่มเติม (การยืนยันตัวตนสองขั้นตอน, การเข้ารหัส, ... ), การตั้งค่าด้านดีไซน์ (โลโก้, สี, สโลแกน, เฮดเดอร์), การตั้งค่าการเข้าถึง และอื่นๆ อีกมากมาย

**แอป**

นอกจากนี้ยังสามารถติดตั้งแอปเพิ่มเติมนอกเหนือจากแอปเริ่มต้นได้ โดยเข้าถึงผ่านเมนู **Apps**

![](https://screensaver01.zap-hosting.com/index.php/s/AG8PCQwDfsKGQXS/preview)

ด้วย **แอป** เหล่านี้ คุณสามารถปรับแต่ง Nextcloud ให้ตรงกับความต้องการของคุณได้มากขึ้น

<InlineVoucher />