---
id: dedicated-linux-phpmyadmin
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง phpMyAdmin"
description: "ค้นพบวิธีจัดการฐานข้อมูล MySQL และ MariaDB ได้ง่าย ๆ ผ่านเว็บอินเทอร์เฟซของ phpMyAdmin เพื่อการบริหารฐานข้อมูลที่มีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง phpMyAdmin
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

phpMyAdmin คือเครื่องมือฟรีบนเว็บสำหรับจัดการฐานข้อมูล MySQL และ MariaDB ที่มีอินเทอร์เฟซใช้งานง่าย ช่วยให้คุณสร้าง แก้ไข จัดการ และลบฐานข้อมูลได้โดยไม่ต้องพิมพ์คำสั่ง SQL ด้วยตัวเอง

<InlineVoucher />

## การเตรียมตัว

ก่อนเริ่มติดตั้ง ให้แน่ใจว่าระบบของคุณอัปเดตล่าสุดแล้ว สามารถทำการอัปเดตและอัปเกรดที่รอดำเนินการได้ด้วยคำสั่ง:

```
sudo apt update -y
sudo apt upgrade -y
```

นอกจากนี้ คุณต้องแน่ใจว่ามีการติดตั้ง PHP บนระบบของคุณแล้ว เพราะจำเป็นสำหรับการใช้งาน phpMyAdmin หากต้องการดูวิธีติดตั้ง PHP โปรดดูที่ [คู่มือการติดตั้ง PHP](dedicated-linux-php.md)

:::warning ขาดแพ็กเกจ PHP
ถ้าแพ็กเกจ PHP ที่จำเป็นขาดหายไป ไฟล์ PHP ของ phpMyAdmin จะไม่สามารถประมวลผลและแสดงผลได้อย่างถูกต้อง
:::

## การติดตั้ง

เมื่อเตรียมตัวเรียบร้อยแล้ว ก็สามารถเริ่มติดตั้งอินเทอร์เฟซ phpMyAdmin ได้เลย โดยเริ่มจากเปิดไดเรกทอรีที่จะติดตั้ง phpMyAdmin

ใช้คำสั่ง `cd /usr/share` เพื่อไปยังไดเรกทอรีที่ต้องการ แล้วดาวน์โหลดเวอร์ชันล่าสุดของ phpMyAdmin ด้วยคำสั่ง `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
ถ้าไม่พบคำสั่ง `wget` สามารถติดตั้งได้ด้วยคำสั่ง `sudo apt install wget -y`
:::

เมื่อดาวน์โหลดเสร็จแล้ว ให้แตกไฟล์ ZIP ด้วยคำสั่ง:

```
unzip phpmyadmin.zip
```
:::warning
ถ้าไม่พบคำสั่ง `unzip` สามารถติดตั้งได้ด้วยคำสั่ง `sudo apt install unzip -y`
:::

จากนั้นเปลี่ยนชื่อโฟลเดอร์ที่แตกไฟล์ออกมาให้สั้นลง ลบไฟล์ ZIP และตั้งสิทธิ์ที่จำเป็น:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## การตั้งค่า

### ไฟล์ตั้งค่าเว็บเซิร์ฟเวอร์

ตอนนี้ต้องเพิ่ม phpMyAdmin ลงในการตั้งค่าเว็บเซิร์ฟเวอร์ โดยใช้คำสั่ง `nano /etc/apache2/conf-available/phpmyadmin.conf` เพื่อสร้างไฟล์ตั้งค่า Virtual Host ใหม่ แล้วใส่เนื้อหาดังนี้:

```
# การตั้งค่า Apache สำหรับ phpMyAdmin

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# ปิดการเข้าถึงเว็บเพื่อความปลอดภัยในไดเรกทอรีที่ไม่จำเป็นต้องเข้าถึง
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

เมื่อกรอกเนื้อหาเสร็จแล้ว ให้บันทึกและปิดไฟล์ด้วย `CTRL+X` กด `Y` แล้วกด `Enter`

จากนั้นเปิดใช้งานไฟล์ตั้งค่า Virtual Host ที่สร้างขึ้นใหม่และโหลดการตั้งค่าใหม่ด้วยคำสั่ง:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### สร้างไดเรกทอรีชั่วคราวที่จำเป็น

เพื่อให้ phpMyAdmin ทำงานได้อย่างถูกต้อง ต้องสร้างไดเรกทอรีชั่วคราวและตั้งสิทธิ์ที่จำเป็น สามารถทำได้ด้วยคำสั่ง:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่า phpMyAdmin เรียบร้อยแล้ว คุณสามารถเข้าถึงเว็บอินเทอร์เฟซได้ผ่านที่อยู่ IP และพาธของเซิร์ฟเวอร์คุณ (http://ที่อยู่-IP/phpmyadmin) หากมีคำถามหรือต้องการความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />