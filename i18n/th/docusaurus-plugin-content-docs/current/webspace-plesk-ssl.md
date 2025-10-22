---
id: webspace-plesk-ssl
title: "เว็บโฮสติ้ง: สร้างใบรับรอง SSL"
description: "ค้นพบวิธีการปกป้องเว็บไซต์ของคุณด้วยการเข้ารหัส SSL และเปิดใช้งาน HTTPS เพื่อการท่องเว็บที่ปลอดภัยยิ่งขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: สร้างใบรับรอง SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## เข้ารหัสเว็บไซต์ด้วย SSL

:::info
สมมติว่าโดเมนได้ชี้ไปยังที่อยู่ IP ของเว็บโฮสติ้งแล้ว
:::

ถ้าโดเมนถูกสร้างในเว็บโฮสติ้ง จะยังไม่ถูกเข้ารหัสตั้งแต่แรก ซึ่งสามารถดูได้จากแผงควบคุม Plesk:

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

และแจ้งเตือนในเบราว์เซอร์เมื่อเปิดโดเมน:

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

ด้วยใบรับรอง SSL โดเมนจะได้รับการปกป้อง/เข้ารหัสตามที่ควรจะเป็น

<InlineVoucher />

## การสร้างใบรับรอง

ขั้นตอนที่ 1️⃣: ดับเบิลคลิกที่ "SSL/TLS Certificate" จะเปิดเมนูดังนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

สามารถขอใบรับรอง Let's Encrypt ได้ฟรี

ขั้นตอนที่ 2️⃣: กรอกข้อมูลที่จำเป็น เพื่อให้สามารถขอใบรับรองได้ ต้องระบุรายละเอียดต่างๆ

ต้องระบุอีเมลและเลือกตรวจสอบว่าใบรับรองควรใช้กับอะไรบ้าง โดยปกติแต่ละโดเมนจะมีซับโดเมน "www" เปิดใช้งานด้วย จึงถูกเลือกไว้ถ้ามีการเพิ่มใน DNS ของโดเมนแล้ว

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

จากนั้นขอใบรับรองโดยคลิกที่ "Get it free"

ขั้นตอนที่ 3️⃣: ใบรับรองถูกสร้างแล้ว จะเห็นที่มุมขวาบน นอกจากนี้ต้องตั้งค่าการเปลี่ยนเส้นทางอัตโนมัติจาก HTTP เป็น HTTPS ด้วย เพราะถ้าไม่ทำจะไม่สามารถเข้ารหัสได้:

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

เมื่อทำเสร็จแล้ว การเปลี่ยนเส้นทางจะทำงาน ไม่ว่าจะเปิดเว็บด้วย http หรือ https ในเบราว์เซอร์ก็จะถูกเปลี่ยนไปที่ https เสมอ

ขั้นตอนที่ 4️⃣: ตอนนี้คุณสามารถตรวจสอบในเบราว์เซอร์ว่าใบรับรองถูกยอมรับหรือไม่:

ต้องมีไอคอนกุญแจล็อก:

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

ข้อมูลใบรับรองที่เปิดได้โดยคลิกที่กุญแจล็อก ควรแสดงโดเมนด้วย:

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

เว็บไซต์ของคุณตอนนี้ได้รับการปกป้อง/เข้ารหัสอย่างถูกต้องแล้ว

## ใบรับรองสำหรับซับโดเมน

ขั้นตอนเดียวกันนี้สามารถทำได้กับซับโดเมน แต่ยังมีวิธีที่ง่ายกว่าคือเข้ารหัสซับโดเมนทั้งหมดพร้อมกัน ไม่ว่าจะมีอยู่แล้วหรือสร้างใหม่ก็ได้ โดยใช้ "wildcard certificate" ซึ่งต้องมีการเพิ่ม TXT ระเบียนพิเศษใน DNS ของโดเมน เมื่อเพิ่มแล้วจะสามารถออกใบรับรอง SSL สำหรับซับโดเมนทั้งหมดได้

ขั้นตอนที่ 1️⃣: เปิดเมนู SSL/TLS certificate อีกครั้ง

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

จากนั้นคลิกที่ "Renew Certificate" ที่มุมซ้ายบน
จะเปิดหน้าต่างขอใบรับรอง Let's Encrypt:

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

เลือก "Secure the wildcard domain":

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

ซับโดเมน "www" และ "webmail" จะถูกเพิ่มให้อัตโนมัติ
จากนั้นคลิกที่ปุ่ม "Get it free" อีกครั้ง

ขั้นตอนที่ 2️⃣: จะมีกรอบสีน้ำเงินแสดงข้อมูลสำคัญ:

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

จะมีชื่อโดเมนและค่าหนึ่งค่า ซึ่งต้องถูกเพิ่มเป็น TXT ระเบียนใน DNS ของโดเมนอย่างถาวร เพื่อให้ Let's Encrypt ยืนยันว่าโดเมนนั้นเป็นของจริงและตรวจสอบได้

ระเบียน DNS ควรมีลักษณะดังนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
ระเบียน DNS อาจใช้เวลาถึง 24 ชั่วโมงกว่าจะเข้าถึงได้จากทั่วโลก
:::

เพื่อเช็คว่า TXT ระเบียนพร้อมใช้งานแล้วหรือยัง สามารถใช้ "TXT Lookup SuperTool" จาก mxtoolbox ได้ที่: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

ถ้าระเบียนที่กรอกแสดงขึ้นมาแล้ว ให้กดยืนยันในกรอบสีน้ำเงินใน Plesk โดยคลิกที่ "Reload" ระบบจะตรวจสอบว่ามีระเบียน DNS หรือไม่ ถ้ามีจะแสดงสถานะ "protected" สำหรับ "SSL/TLS-holder Certificate" หรือที่เรียกว่า "Wildcard Certificate":

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

ถ้าสร้างซับโดเมนใหม่ตอนนี้ จะถูกปกป้องทันที:

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

ตอนนี้ข้อมูลทั้งหมดที่ส่งผ่านจะถูกเข้ารหัสเรียบร้อย จบขั้นตอน

<InlineVoucher />