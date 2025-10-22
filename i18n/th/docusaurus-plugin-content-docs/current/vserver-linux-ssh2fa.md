---
id: vserver-linux-ssh2fa
title: "VPS: การยืนยันตัวตนสองขั้นตอน SSH"
description: "ค้นพบวิธีเพิ่มความปลอดภัย SSH ด้วย Google Authenticator 2FA เพื่อการเข้าถึงเซิร์ฟเวอร์ที่ปลอดภัยยิ่งขึ้นและปกป้องสภาพแวดล้อม Linux ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

บริการยืนยันตัวตนสองขั้นตอน (2FA) ของ Google สำหรับ SSH ที่เรียกว่า **Google Authenticator SSH** ช่วยเพิ่มความปลอดภัยในการเข้าถึง SSH (Secure Shell) ด้วยการเพิ่มชั้นการยืนยันตัวตนที่สอง แม้ว่า SSH จะเป็นวิธีที่ปลอดภัยในการสร้างการเชื่อมต่อแบบเข้ารหัสไปยังเซิร์ฟเวอร์ระยะไกลอยู่แล้ว แต่การผสานรวม 2FA จะเพิ่มระดับความปลอดภัยโดยให้ผู้ใช้ต้องใส่ไม่เพียงแค่รหัสผ่านเท่านั้น แต่ยังต้องใส่รหัสยืนยันตัวตนแบบใช้ครั้งเดียวที่สร้างโดย Google Authenticator ด้วย ในคู่มือนี้เราจะพาคุณไปดูขั้นตอนการติดตั้งและตั้งค่า **Google Authenticator SSH** บนเซิร์ฟเวอร์ Linux

<InlineVoucher />

## การติดตั้ง

อันดับแรกคุณต้องติดตั้ง Google Authenticator บน VPS Linux ของคุณ รันคำสั่งนี้:

```
sudo apt install libpam-google-authenticator
```

จากนั้นระบบจะถามให้คุณพิมพ์ "Y" เพื่อยืนยันการติดตั้ง พิมพ์แล้วกด Enter จากนั้น Google Authenticator จะถูกติดตั้ง!

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

เริ่ม Google Authenticator โดยพิมพ์คำสั่ง 'google-authenticator' ตรวจสอบให้แน่ใจว่าขนาดหน้าต่างของคุณเพียงพอสำหรับแสดง QR Code ถ้าไม่พอให้กด "CTRL+C" แล้วพิมพ์คำสั่งใหม่อีกครั้ง

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

ระบบจะถามอีกครั้งว่าคุณต้องการดำเนินการต่อหรือไม่ ให้พิมพ์ "Y" เพื่อยอมรับ คุณจะเห็น QR Code เปิดแอป Authenticator บนสมาร์ทโฟนของคุณแล้วสแกน QR Code นี้ สำหรับตัวอย่างนี้เราใช้ Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

อย่าลืมคัดลอกโค้ดสำรองไว้ด้วย โค้ดเหล่านี้ใช้ได้ครั้งละหนึ่งครั้งในกรณีที่คุณทำแอป Authenticator หาย

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

ตอนนี้แอปจะแสดงโค้ดที่คุณต้องใช้ล็อกอินในภายหลัง ตัวอย่างจะเป็นแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

ระบบจะถามคำถามต่อไปนี้:

1. คุณต้องการบันทึกการตั้งค่า Google Authenticator หรือไม่?
2. คุณต้องการให้ล็อกอินได้แค่ครั้งเดียวทุก 30 วินาทีหรือไม่?
3. ต้องการเพิ่มเวลาที่โค้ดใช้งานได้หรือไม่?
4. ต้องการจำกัดล็อกอินแค่ 3 ครั้งทุก 30 วินาทีเพื่อป้องกัน Brute Force หรือไม่?

เพื่อความปลอดภัย เราแนะนำให้ตอบ Yes ทุกข้อ

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## การตั้งค่า

ตอนนี้เราต้องปรับ Google Authenticator ให้ถูกใช้งานจริง ซึ่งต้องแก้ไขสองส่วน

### /etc/ssh/sshd_config

เปิดใช้งานโมดูลที่จำเป็นในไฟล์ `/etc/ssh/sshd_config` เปิดไฟล์นี้ด้วยคำสั่ง
```
sudo nano /etc/ssh/sshd_config
```

คุณจะเข้าสู่โปรแกรมแก้ไขข้อความ ใช้ปุ่มลูกศรเลื่อน เคลียร์ข้อความได้ตามต้องการ แล้วกด 'CTRL + X' ตามด้วย 'Y' และกด 'Enter' เพื่อบันทึกไฟล์

ตรวจสอบให้แน่ใจว่าบรรทัด 'UsePAM' และ 'ChallengeResponseAuthentication' ตั้งค่าเป็น 'yes' แบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

บันทึกไฟล์ด้วย 'CTRL + X' ตามด้วย 'Y' และกด 'Enter' จากนั้นรีสตาร์ท SSH ด้วยคำสั่งนี้:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

ตอนนี้เพิ่ม Google Authenticator เข้าไปในขั้นตอนล็อกอินที่ไฟล์ `/etc/pam.d/sshd` เปิดไฟล์นี้ด้วยคำสั่ง `sudo nano /etc/pam.d/sshd` เลื่อนลงไปท้ายไฟล์แล้วเพิ่มบรรทัดนี้:
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

บันทึกไฟล์ด้วย 'CTRL + X' ตามด้วย 'Y' และกด 'Enter'

## ทดสอบการเข้าถึง

ถึงเวลาล็อกอินครั้งแรกด้วย 2FA แล้ว หลังจากทำตามขั้นตอนข้างต้นเสร็จ ให้รีสตาร์ทการเชื่อมต่อ SSH ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

ใส่รหัสผ่านตามปกติ จากนั้นระบบจะถามรหัส ให้ใส่โค้ด 2FA ล่าสุดที่แอปของคุณแสดง

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

เท่านี้ก็ล็อกอินสำเร็จแล้ว!

## สรุป

ยินดีด้วย คุณได้เปิดใช้งานและตั้งค่า 2FA สำหรับ SSH เรียบร้อยแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />