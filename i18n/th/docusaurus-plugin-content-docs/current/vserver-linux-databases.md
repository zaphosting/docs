---
id: vserver-linux-databases
title: "VPS: การติดตั้งฐานข้อมูล"
description: "ค้นพบวิธีการติดตั้งและตั้งค่าฐานข้อมูลต่าง ๆ บน Linux เพื่อประสิทธิภาพและความปลอดภัยที่ดียิ่งขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งฐานข้อมูล
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

คู่มือนี้จะให้ขั้นตอนสำหรับการติดตั้งฐานข้อมูลประเภทต่าง ๆ สำหรับตัวอย่างนี้ใช้ Ubuntu 20.04 เป็นระบบปฏิบัติการ แต่คำสั่งที่เทียบเท่าสำหรับดิสโทร Linux อื่น ๆ ที่เรามีให้บริการบนเว็บไซต์ก็ระบุไว้ด้วยเช่นกัน คำสั่งเหล่านี้ต้องรันผ่าน SSH หากคุณไม่รู้วิธีเชื่อมต่อเซิร์ฟเวอร์ผ่าน SSH โปรดดูที่นี่: [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

<InlineVoucher />

## การเตรียมตัว

ก่อนเริ่มติดตั้งฐานข้อมูล จำเป็นต้องตรวจสอบให้แน่ใจว่าระบบของคุณเป็นเวอร์ชันล่าสุด โดยอัปเดตแพ็กเกจจากตัวจัดการแพ็กเกจของระบบด้วยคำสั่งต่อไปนี้ ขึ้นอยู่กับระบบปฏิบัติการของคุณ:

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

ขึ้นอยู่กับว่าคุณต้องการติดตั้งบริการฐานข้อมูลแบบไหน ให้ทำตามคู่มือที่ตรงกับประเภทนั้น:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## MariaDB คืออะไร?

MariaDB คือระบบจัดการฐานข้อมูลเชิงสัมพันธ์แบบโอเพนซอร์ส ซึ่งแยกมาจาก MySQL โดยเน้นประสิทธิภาพ ความปลอดภัย และการพัฒนาอย่างต่อเนื่อง MariaDB มีเอนจินจัดเก็บข้อมูลที่ดีกว่า และสถาปัตยกรรมที่เข้ากันได้เต็มที่กับ MySQL เราแนะนำให้ใช้ MariaDB แทน MySQL

## การติดตั้ง MariaDB

อันดับแรก คุณต้องแน่ใจว่ากำลังติดตั้ง MariaDB เวอร์ชันล่าสุด บางระบบปฏิบัติการเก่า เช่น Debian 9 หรือ Ubuntu 18.04 ไม่มี MariaDB เวอร์ชันล่าสุดในตัวจัดการแพ็กเกจ ดังนั้นการรันคำสั่งนี้จะช่วยให้ได้เวอร์ชันล่าสุด

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

หลังติดตั้ง repo แล้ว ให้รีเฟรชแคชตัวจัดการแพ็กเกจตามขั้นตอนในส่วน [การเตรียมตัว](#การเตรียมตัว)

:::info
การติดตั้ง repo ของ MariaDB (ขั้นตอนข้างบน) สามารถข้ามได้ในระบบปฏิบัติการสมัยใหม่ เช่น Ubuntu 22.04 หรือ Debian 11
:::

เมื่อเตรียม repo เสร็จแล้ว ให้ติดตั้ง MariaDB โดยติดตั้งแพ็กเกจ `mariadb-server` ตามคำสั่งนี้ ขึ้นอยู่กับระบบปฏิบัติการ:

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

เมื่อติดตั้งเสร็จ ให้พิมพ์คำสั่งนี้เพื่อเริ่มการตั้งค่าเซิร์ฟเวอร์:

```
mysql_secure_installation
```

ตอนนี้คุณสามารถตั้งค่า MariaDB (MySQL) เซิร์ฟเวอร์ของคุณตามคำแนะนำ และตั้งรหัสผ่านสำหรับเซิร์ฟเวอร์ ในขั้นตอนถัดไป คุณสามารถข้ามการกรอกข้อมูลได้โดยกด **Enter**

![](https://screensaver01.zap-hosting.com/index.php/s/S8mibcHmaAcetqJ/preview)

:::info
ผู้ใช้ root คือผู้ใช้หลักของ MariaDB (MySQL) เซิร์ฟเวอร์ของคุณ!
:::

ต่อไปจะถามว่าคุณต้องการตั้งรหัสผ่านสำหรับผู้ใช้ root หรือไม่ ให้ตอบ **y** เพื่อยืนยัน แล้วพิมพ์รหัสผ่านใหม่สำหรับผู้ใช้ root

:::note
ขณะพิมพ์รหัสผ่าน คุณจะไม่เห็นตัวอักษรใด ๆ ซึ่งเป็นพฤติกรรมปกติ รหัสผ่านของคุณจะถูกบันทึกไว้แน่นอน โปรดใช้รหัสผ่านที่ปลอดภัยและเก็บไว้ในที่ปลอดภัย
:::

จากนั้นจะถามว่าคุณต้องการลบผู้ใช้ที่ไม่ระบุชื่อ (anonymous users) ออกหรือไม่ ควรทำเพื่อความปลอดภัย ตอบ **y** เพื่อยืนยัน:

![](https://screensaver01.zap-hosting.com/index.php/s/7q2kGxDXTfWg36m/preview)

ในขั้นตอนถัดไป คุณจะกำหนดว่าผู้ใช้ root สามารถเชื่อมต่อจากภายนอกเซิร์ฟเวอร์ได้หรือไม่ เพื่อความปลอดภัย ควรปิดใช้งานและตอบ **y** เพื่อยืนยัน:

![](https://screensaver01.zap-hosting.com/index.php/s/PcpJ6boNspf2fPo/preview)

ในขั้นตอนถัดไป คุณสามารถยืนยันเพื่อลบฐานข้อมูลทดสอบที่ MariaDB (MySQL) มีให้ด้วย **y** เพราะไม่จำเป็นและลบได้ง่าย:

![](https://screensaver01.zap-hosting.com/index.php/s/9HfkcaLjGXjEwK7/preview)

สุดท้าย จะถามว่าคุณต้องการอัปเดตสิทธิ์ของฐานข้อมูลหรือไม่ ตอบ **y** เพื่อเปิดใช้งานรหัสผ่านที่ตั้งไว้สำหรับผู้ใช้ root:

![](https://screensaver01.zap-hosting.com/index.php/s/QiBNQYFiwJM4CcA/preview)

ตอนนี้ MariaDB (MySQL) เซิร์ฟเวอร์ของคุณพร้อมใช้งานแล้ว!

![](https://screensaver01.zap-hosting.com/index.php/s/zkKoTX7GbbKgj2M/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Redis คืออะไร?

Redis คือที่เก็บข้อมูลโครงสร้างข้อมูลในหน่วยความจำ (in-memory) ใช้เก็บข้อมูลแบบ key-value เป็นหลัก แต่ก็รองรับรูปแบบอื่น ๆ เช่น รายการ JSON และอื่น ๆ จุดเด่นคือความเร็วสูง ตอบสนองคำสั่งภายในมิลลิวินาที

## การติดตั้ง Redis

อันดับแรก คุณต้องเพิ่ม repo ที่ช่วยให้ติดตั้ง Redis ได้ ขั้นตอนนี้ไม่จำเป็นสำหรับทุกดิสโทร Linux มีเฉพาะดิสโทรที่ระบุด้านล่างเท่านั้น ให้รันคำสั่งที่ตรงกับระบบปฏิบัติการและเวอร์ชันของคุณ:

```
// Ubuntu (ทุกรุ่น) และ Debian (เฉพาะ Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (เฉพาะ CentOS 7)
sudo yum install epel-release

// CentOS (เฉพาะ CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

หลังติดตั้ง repo แล้ว ให้รีเฟรชแคชตัวจัดการแพ็กเกจตามขั้นตอนในส่วน [การเตรียมตัว](#การเตรียมตัว)

:::info
ถ้าระบบปฏิบัติการของคุณไม่อยู่ในรายการข้างต้น คุณสามารถข้ามขั้นตอนนี้ได้เลย
:::

หลังติดตั้ง repo ที่เหมาะสมแล้ว ให้ติดตั้งแพ็กเกจ Redis Server โดยรันคำสั่งที่ตรงกับระบบปฏิบัติการของคุณ:

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

หลังติดตั้ง Redis เซิร์ฟเวอร์ของคุณพร้อมใช้งานแล้ว! โดยค่าเริ่มต้นจะรันที่ 127.0.0.1:6379 โดยไม่มีรหัสผ่าน

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
MongoDB คือฐานข้อมูล NoSQL แบบเอกสาร (document-oriented) ออกแบบมาเพื่อความสามารถในการขยายและความคล่องตัวของนักพัฒนา เก็บข้อมูลในรูปแบบ BSON ที่คล้าย JSON ทำให้เก็บข้อมูลหลายประเภทได้ มีการใช้ดัชนี (indexes) เพื่อลดเวลาตอบสนอง และไม่มีโครงสร้างตายตัวเหมือน MySQL หรือ SQLite ทำให้ยืดหยุ่นและรวดเร็ว

## การติดตั้ง MongoDB

เลือกระบบปฏิบัติการของคุณจากแท็บด้านล่างเพื่อดูคู่มือที่ตรงกัน

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### การติดตั้งบน Ubuntu & Debian

อันดับแรก ให้รันคำสั่งนี้เพื่อนำเข้า MongoDB public GPG Key:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

จากนั้นเพิ่มแหล่งที่มาของ MongoDB ลงในรายการแหล่งที่มาของระบบปฏิบัติการ ด้วยคำสั่งนี้:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

ตอนนี้ตัวจัดการแพ็กเกจสามารถติดตั้ง MongoDB Community Edition ได้ แต่ก่อนอื่นให้รันคำสั่ง `sudo apt update` เพื่ออัปเดตรายการแพ็กเกจ สุดท้ายติดตั้ง MongoDB ด้วยคำสั่ง:

```
sudo apt install mongodb-org
```

ตอนนี้การติดตั้ง MongoDB ของคุณควรใช้งานได้แล้ว!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### การติดตั้งบน CentOS & Fedora

อันดับแรก ให้ตั้งค่า repo ของ MongoDB สำหรับระบบ Red Hat

สร้างไฟล์ชื่อ `/etc/yum.repos.d/mongodb-org-6.0.repo` แล้ววางเนื้อหาต่อไปนี้ลงไป:

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

ตอนนี้การติดตั้ง MongoDB ของคุณควรใช้งานได้แล้ว ง่ายกว่าดิสโทร Linux อื่น ๆ มาก!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### การติดตั้งบน OpenSUSE

อันดับแรก ให้รันคำสั่งนี้เพื่อนำเข้า public key ของ MongoDB สำหรับ repo:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

จากนั้นเพิ่ม repo ของ MongoDB ด้วยคำสั่งนี้:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

สุดท้าย ติดตั้ง MongoDB เวอร์ชันล่าสุดด้วยคำสั่ง:

```
sudo zypper -n install mongodb-org
```

ตอนนี้การติดตั้ง MongoDB ของคุณควรใช้งานได้แล้ว!

</TabItem>
</Tabs>

</TabItem>
</Tabs>


## สรุป

ยินดีด้วย คุณได้ติดตั้งและตั้งค่าฐานข้อมูลเรียบร้อยแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />