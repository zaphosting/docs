---
id: dedicated-linux-ssh2fa
title: "เซิร์ฟเวอร์เฉพาะ: การยืนยันตัวตนสองขั้นตอน SSH"
description: "ค้นพบวิธีเพิ่มความปลอดภัย SSH ด้วย Google Authenticator 2FA เพื่อการเข้าถึงเซิร์ฟเวอร์ที่ปลอดภัยยิ่งขึ้นและปกป้อง Linux VPS ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

บริการยืนยันตัวตนสองขั้นตอน (2FA) ของ Google สำหรับ SSH ที่เรียกว่า **Google Authenticator SSH** ช่วยเพิ่มความปลอดภัยในการเข้าถึง SSH (Secure Shell) ด้วยการเพิ่มชั้นการยืนยันตัวตนที่สอง แม้ว่า SSH จะเป็นวิธีที่ปลอดภัยในการสร้างการเชื่อมต่อแบบเข้ารหัสไปยังเซิร์ฟเวอร์ระยะไกลอยู่แล้ว แต่การผสานรวม 2FA จะเพิ่มระดับความปลอดภัยโดยให้ผู้ใช้ต้องกรอกรหัสผ่านพร้อมกับรหัสยืนยันตัวตนครั้งเดียวที่สร้างโดย Google Authenticator ในคู่มือนี้ เราจะพาคุณผ่านขั้นตอนการติดตั้งและตั้งค่า **Google Authenticator SSH** บนเซิร์ฟเวอร์ Linux

<InlineVoucher />

## การติดตั้ง

อันดับแรกคุณต้องติดตั้ง Google Authenticator บน Linux VPS ของคุณ รันคำสั่งนี้:

```
sudo apt install libpam-google-authenticator
```

จากนั้นระบบจะถามให้พิมพ์ "Y" เพื่อยืนยันการติดตั้ง พิมพ์แล้วกด Enter จากนั้น Google Authenticator จะถูกติดตั้ง!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

เริ่ม Google Authenticator โดยพิมพ์คำสั่ง 'google-authenticator' ตรวจสอบให้แน่ใจว่าขนาดหน้าต่างของคุณเพียงพอสำหรับแสดง QR Code ถ้าไม่พอให้กด "CTRL+C" แล้วพิมพ์คำสั่งใหม่อีกครั้ง

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

ระบบจะถามอีกครั้งว่าคุณต้องการดำเนินการต่อหรือไม่ ให้พิมพ์ "Y" เพื่อยอมรับ จากนั้นคุณจะเห็น QR Code เปิดแอป Authenticator บนสมาร์ทโฟนของคุณแล้วสแกน QR Code สำหรับตัวอย่างนี้เราใช้ Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

อย่าลืมคัดลอกโค้ดสำรองไว้ด้วย โค้ดเหล่านี้ใช้ได้ครั้งละหนึ่งครั้งในกรณีที่คุณสูญเสียแอป Authenticator

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

ตอนนี้แอปจะแสดงรหัสที่คุณต้องใช้ล็อกอินในภายหลัง ตัวอย่างเช่นจะเป็นแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

ระบบจะถามคำถามต่อไปนี้:

1. คุณต้องการบันทึกการตั้งค่า Google Authenticator หรือไม่?
2. คุณต้องการให้ล็อกอินได้แค่ครั้งเดียวทุก 30 วินาทีหรือไม่?
3. ต้องการเพิ่มเวลาที่รหัสใช้งานได้หรือไม่?
4. ต้องการจำกัดล็อกอินได้แค่ 3 ครั้งทุก 30 วินาทีเพื่อป้องกัน Brute Force หรือไม่?

เพื่อความปลอดภัย เราแนะนำให้ตอบ Yes ทุกข้อ

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## การตั้งค่า

ตอนนี้เราต้องปรับ Google Authenticator ให้ถูกใช้งานจริง ซึ่งต้องแก้ไขสองส่วน

### /etc/ssh/sshd_config

เปิดใช้งานโมดูลที่จำเป็นในไฟล์ `/etc/ssh/sshd_config` เปิดไฟล์นี้ด้วยคำสั่ง
```
sudo nano /etc/ssh/sshd_config
```

คุณจะเข้าสู่โปรแกรมแก้ไขข้อความ ใช้ปุ่มลูกศรเลื่อน เคลียร์ข้อความ หรือพิมพ์ใหม่ได้ตามต้องการ จากนั้นกด 'CTRL + X' ตามด้วย 'Y' และกด 'Enter' เพื่อบันทึกไฟล์

ตรวจสอบให้แน่ใจว่าบรรทัด 'UsePAM' และ 'ChallengeResponseAuthentication' ตั้งค่าเป็น 'yes' ดังนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

บันทึกไฟล์ด้วย 'CTRL + X' ตามด้วย 'Y' และกด 'Enter' แล้วรีสตาร์ท SSH ด้วยคำสั่งนี้:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

ตอนนี้เพิ่ม Google Authenticator ในขั้นตอนล็อกอินที่ไฟล์ `/etc/pam.d/sshd` เปิดไฟล์นี้ด้วยคำสั่ง `sudo nano /etc/pam.d/sshd` เลื่อนลงไปท้ายไฟล์แล้วเพิ่มบรรทัดนี้:
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

บันทึกไฟล์ด้วย 'CTRL + X' ตามด้วย 'Y' และกด 'Enter'

## ทดสอบการเข้าถึง

ถึงเวลาล็อกอินครั้งแรกด้วย 2FA หลังจากทำตามขั้นตอนข้างต้นแล้ว ให้รีสตาร์ทการเชื่อมต่อ SSH ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

ใส่รหัสผ่านตามปกติ จากนั้นระบบจะถามรหัส ให้กรอกรหัส 2FA ล่าสุดจากแอป

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

เท่านี้ก็ล็อกอินสำเร็จแล้ว!

## สรุป

ยินดีด้วย คุณตั้งค่า 2FA สำหรับการเข้าถึง SSH ได้เรียบร้อยแล้ว หากมีคำถามหรือขอความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂 

<InlineVoucher />