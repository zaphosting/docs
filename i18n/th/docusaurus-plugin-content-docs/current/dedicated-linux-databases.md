---
id: dedicated-linux-databases
title: "ตั้งค่าฐานข้อมูลบนเซิร์ฟเวอร์ Linux - ติดตั้งและจัดการบริการฐานข้อมูล"
description: "สำรวจวิธีการติดตั้งและตั้งค่าฐานข้อมูลต่างๆ บน Ubuntu และดิสโทร Linux อื่นๆ เพื่อประสิทธิภาพและความปลอดภัยที่ดียิ่งขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งฐานข้อมูล
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

คู่มือนี้แนะนำขั้นตอนการติดตั้งฐานข้อมูลหลายประเภท สำหรับตัวอย่างนี้ใช้ Ubuntu 20.04 เป็นระบบปฏิบัติการ แต่คำสั่งที่เทียบเท่าสำหรับดิสโทร Linux อื่นๆ ที่เรามีให้บริการบนเว็บไซต์ก็ถูกระบุไว้ด้วย คำสั่งเหล่านี้ต้องรันผ่าน SSH หากคุณไม่รู้วิธีเชื่อมต่อเซิร์ฟเวอร์ผ่าน SSH โปรดดูที่นี่: [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md).

## การเตรียมตัว

ก่อนเริ่มติดตั้งฐานข้อมูล จำเป็นต้องตรวจสอบให้แน่ใจว่าระบบของคุณอัปเดตล่าสุดแล้ว โดยอัปเดตแพ็กเกจจากตัวจัดการแพ็กเกจของระบบด้วยคำสั่งต่อไปนี้ ขึ้นอยู่กับระบบปฏิบัติการของคุณ:

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

## ประเภทฐานข้อมูล

ขึ้นอยู่กับบริการฐานข้อมูลที่คุณต้องการติดตั้ง ให้ทำตามคู่มือที่ตรงกับฐานข้อมูลนั้น:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## MariaDB คืออะไร?

MariaDB คือระบบจัดการฐานข้อมูลเชิงสัมพันธ์แบบโอเพนซอร์ส ที่แยกมาจาก MySQL โดยเน้นประสิทธิภาพ ความปลอดภัย และการพัฒนาอย่างต่อเนื่อง โดย MariaDB มีเอนจินจัดเก็บข้อมูลที่ดีกว่า และสถาปัตยกรรมที่เข้ากันได้เต็มที่กับ MySQL เราแนะนำให้ใช้ MariaDB แทน MySQL

## การติดตั้ง MariaDB

อันดับแรก คุณต้องแน่ใจว่ากำลังติดตั้ง MariaDB เวอร์ชันล่าสุด บางระบบปฏิบัติการเก่า เช่น Debian 9 หรือ Ubuntu 18.04 อาจไม่มี MariaDB เวอร์ชันล่าสุดในตัวจัดการแพ็กเกจ ดังนั้นการรันคำสั่งนี้จะช่วยให้แน่ใจว่าได้เวอร์ชันล่าสุด:

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

หลังติดตั้ง repo แล้ว ให้รีเฟรชแคชตัวจัดการแพ็กเกจตามขั้นตอนในส่วนการเตรียมตัว

:::info
การติดตั้ง repo MariaDB (ขั้นตอนข้างบน) สามารถข้ามได้ในระบบปฏิบัติการสมัยใหม่ เช่น Ubuntu 22.04 หรือ Debian 11
:::

เมื่อเตรียม repo เสร็จแล้ว ให้ติดตั้ง MariaDB โดยติดตั้งแพ็กเกจ `mariadb-server` ตามคำสั่งนี้ ขึ้นกับระบบปฏิบัติการ:

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## การตั้งค่า MariaDB

หลังติดตั้งเสร็จ ให้รันคำสั่งนี้เพื่อเริ่มตั้งค่าเซิร์ฟเวอร์:

```
mysql_secure_installation
```

ตอนนี้คุณสามารถตั้งค่า MariaDB (MySQL) เซิร์ฟเวอร์ของคุณตามคำแนะนำ และตั้งรหัสผ่านสำหรับเซิร์ฟเวอร์ได้ ในขั้นตอนถัดไป คุณสามารถข้ามการกรอกข้อมูลโดยกด **Enter** ได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
ผู้ใช้ root คือผู้ใช้หลักของ MariaDB (MySQL) เซิร์ฟเวอร์ของคุณ!
:::

ต่อไปจะถามว่าคุณต้องการตั้งรหัสผ่านสำหรับผู้ใช้ root หรือไม่ ให้ตอบ **y** เพื่อยืนยัน แล้วพิมพ์รหัสผ่านใหม่สำหรับผู้ใช้ root

:::note
ขณะพิมพ์รหัสผ่าน คุณจะไม่เห็นตัวอักษรใดๆ แต่เป็นพฤติกรรมปกติ รหัสผ่านจะถูกบันทึกไว้แน่นอน ใช้รหัสผ่านที่ปลอดภัยและเก็บไว้ในที่ปลอดภัย
:::

จากนั้นจะถามว่าต้องการลบผู้ใช้ที่ไม่ระบุชื่อ (anonymous users) ออกไหม ควรทำเพื่อความปลอดภัย ตอบ **y** เพื่อยืนยัน:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

ในขั้นตอนถัดไป คุณจะกำหนดว่าผู้ใช้ root สามารถเชื่อมต่อเซิร์ฟเวอร์จากภายนอกได้หรือไม่ เพื่อความปลอดภัยควรปิดใช้งานและตอบ **y** เพื่อยืนยัน:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

ขั้นตอนถัดไป คุณสามารถยืนยันลบฐานข้อมูลทดสอบที่ MariaDB (MySQL) สร้างไว้ได้ด้วยการตอบ **y** เพราะไม่จำเป็นและลบได้ง่าย:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

สุดท้ายจะถามว่าต้องการอัปเดตสิทธิ์ของฐานข้อมูลหรือไม่ ตอบ **y** เพื่อเปิดใช้งานรหัสผ่านที่ตั้งไว้สำหรับผู้ใช้ root:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

ตอนนี้ MariaDB (MySQL) เซิร์ฟเวอร์ของคุณพร้อมใช้งานแล้ว!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Redis คืออะไร?

Redis คือที่เก็บข้อมูลโครงสร้างข้อมูลในหน่วยความจำ (in-memory) ใช้เก็บข้อมูลแบบ key-value เป็นหลัก แต่ก็รองรับรูปแบบอื่นๆ เช่น รายการ (lists), JSON และอื่นๆ จุดเด่นคือความเร็วสูง ตอบสนองคำสั่งภายในมิลลิวินาที

## การติดตั้ง Redis

อันดับแรก คุณต้องเพิ่ม repo ที่ช่วยให้ติดตั้ง Redis ได้ ขั้นตอนนี้ไม่จำเป็นสำหรับทุกดิสโทร Linux แต่เฉพาะดิสโทรที่ระบุด้านล่างเท่านั้น รันคำสั่งที่ตรงกับระบบปฏิบัติการและเวอร์ชันของคุณ:

```
// Ubuntu (ทุกรุ่น) และ Debian (เฉพาะ Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (เฉพาะ CentOS 7)
sudo yum install epel-release

// CentOS (เฉพาะ CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

หลังติดตั้ง repo แล้ว ให้รีเฟรชแคชตัวจัดการแพ็กเกจตามขั้นตอนในส่วนการเตรียมตัว

:::info
ถ้าระบบปฏิบัติการของคุณไม่อยู่ในรายการข้างต้น คุณสามารถข้ามขั้นตอนนี้ได้เลย
:::

หลังติดตั้ง repo ที่เหมาะสมแล้ว ให้ติดตั้งแพ็กเกจ Redis Server ด้วยคำสั่งที่ตรงกับระบบปฏิบัติการของคุณ:

```
// Ubuntu และ Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

หลังติดตั้งเสร็จ Redis เซิร์ฟเวอร์ของคุณพร้อมใช้งาน! โดยค่าเริ่มต้นจะรันที่ 127.0.0.1:6379 โดยไม่มีรหัสผ่าน

:::caution 
สำหรับผู้ใช้ Debian/Ubuntu:
อย่าลืมเปิดใช้งานบริการ `redis-server` หลังติดตั้ง เพื่อให้มันเริ่มทำงานอัตโนมัติเมื่อบูตเซิร์ฟเวอร์ คุณสามารถทำได้ด้วยคำสั่งนี้:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## MongoDB คืออะไร?
MongoDB คือฐานข้อมูล NoSQL แบบเอกสาร (document-oriented) ออกแบบมาเพื่อความสามารถในการขยายและความคล่องตัวของนักพัฒนา เก็บข้อมูลในรูปแบบ BSON ที่คล้าย JSON ทำให้เก็บข้อมูลหลายประเภทได้ มีการใช้ดัชนี (indexes) เพื่อลดเวลาตอบสนอง และไม่มีสคีมาที่ตายตัวเหมือน MySQL หรือ SQLite จึงยืดหยุ่นและรวดเร็ว

## การติดตั้ง MongoDB

เลือกระบบปฏิบัติการของคุณจากแท็บด้านล่างเพื่อดูคู่มือที่ตรงกัน

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### การติดตั้งบน Ubuntu & Debian

อันดับแรก รันคำสั่งนี้เพื่อนำเข้า MongoDB public GPG Key:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

จากนั้นเพิ่มแหล่งที่มาของ MongoDB ลงในรายการแหล่งที่มาของระบบปฏิบัติการ ด้วยคำสั่งนี้:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

ตอนนี้ตัวจัดการแพ็กเกจสามารถติดตั้ง MongoDB Community Edition ได้ แต่ก่อนอื่นให้รีเฟรชรีโพสด้วยคำสั่ง `sudo apt update` สุดท้ายติดตั้ง MongoDB ด้วยคำสั่ง:

```
sudo apt install mongodb-org
```

ตอนนี้การติดตั้ง MongoDB ของคุณควรใช้งานได้แล้ว!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### การติดตั้งบน CentOS & Fedora

อันดับแรก ตั้งค่า repo MongoDB สำหรับระบบ Red Hat

สร้างไฟล์ชื่อ `/etc/yum.repos.d/mongodb-org-6.0.repo` แล้ววางเนื้อหานี้ลงไป:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

ตอนนี้คุณสามารถติดตั้ง MongoDB ได้แล้ว คำสั่งติดตั้งจะแตกต่างกันเล็กน้อยระหว่าง CentOS กับ Fedora ให้ใช้คำสั่งที่เหมาะสมด้านล่าง:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

ตอนนี้การติดตั้ง MongoDB ของคุณควรใช้งานได้แล้ว ง่ายกว่าดิสโทร Linux อื่นๆ มาก!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### การติดตั้งบน OpenSUSE

อันดับแรก นำเข้า public key ของ MongoDB สำหรับรีโพส MongoDB ด้วยคำสั่ง:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

จากนั้นเพิ่มรีโพส MongoDB ด้วยคำสั่ง:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

สุดท้ายติดตั้ง MongoDB เวอร์ชันล่าสุดด้วยคำสั่ง:

```
sudo zypper -n install mongodb-org
```

ตอนนี้การติดตั้ง MongoDB ของคุณควรใช้งานได้แล้ว!

</TabItem>
</Tabs>

</TabItem>
</Tabs>