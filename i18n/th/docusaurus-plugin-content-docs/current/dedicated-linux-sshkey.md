---
id: dedicated-linux-sshkey
title: "เซิร์ฟเวอร์เฉพาะ: การสร้างและใช้งาน SSH key สำหรับเซิร์ฟเวอร์ Linux"
description: "ค้นพบวิธีสร้างและจัดการ SSH key อย่างปลอดภัยสำหรับเซิร์ฟเวอร์ Linux ของคุณเพื่อเพิ่มความปลอดภัยในการเชื่อมต่อ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: SSH Key
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## สร้าง SSH Key

เพื่อการเชื่อมต่อที่ปลอดภัยกว่าแบบปกติที่ใช้รหัสผ่าน SSH แนะนำให้ใช้ SSH key ในการทำเช่นนี้ ให้เปิดแท็บ "**Access & Security**" ในแดชบอร์ดของเซิร์ฟเวอร์ Linux ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

ใน "**Access & Security**" คุณสามารถสร้าง key ได้โดยกดปุ่ม "**Generate SSH Key**" 
เมื่อกดแล้ว จะมีป๊อปอัพเปิดขึ้นและดาวน์โหลด key ที่สร้างแบบสุ่มลงใน PC ของคุณโดยตรง
เพื่อเพิ่ม key ลงในเซิร์ฟเวอร์ ให้กดปุ่ม "**Add Key**"

:::info
สำหรับ Linux VPS key จะถูกเพิ่มโดยตรง ส่วนสำหรับ Linux Root Server ต้องรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การเปลี่ยนแปลงมีผล
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

ถ้าต้องการ key เพิ่มเติม สามารถกดปุ่ม "**Generate Key**" ในหน้าต่างเดียวกันได้
ที่ "**Key name**" คุณสามารถตั้งชื่อให้กับ key เพื่อแสดงในแผงควบคุม ZAP-Hosting ซึ่งแนะนำเพื่อความเข้าใจที่ดีกว่า

เมื่อสร้างและเพิ่ม key ที่ต้องการครบแล้ว จะมีการแสดงรายการ key เหล่านี้ในส่วน "**Access & Security**"

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

ถ้าคุณมี public key ของตัวเองที่สร้างจากภายนอก ไม่ใช่ผ่านแผงของเรา สามารถเพิ่มได้โดยคลิกที่ไอคอน "**+**"

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

จะมีแผงว่างเปิดขึ้นให้คุณวาง public key ของคุณ จากนั้นกด "**Add Key**" เพื่อเพิ่ม key ลงเซิร์ฟเวอร์และแสดงในแผงของเรา

## แปลง OpenSSH เป็น PuTTY Private Key ด้วย PuTTYGen

SSH key ที่สร้างจากแผงของเราเป็นฟอร์แมต OpenSSH เพื่อใช้งานกับ PuTTY ต้องแปลงเป็นฟอร์แมต private key ของ PuTTY ก่อน คุณสามารถใช้โปรแกรม "**PuTTYGen**" ซึ่งติดตั้งมาพร้อมกับ PuTTY

แอป PuTTYGen จะอยู่ในโฟลเดอร์หลักของ PuTTY โดยปกติจะอยู่ที่ " **C:>Program Files>PuTTY**" ตามภาพตัวอย่าง

เปิดแอป PuTTYGen แล้วคลิก "**File**" -> "**Load private key**"

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

ตอนนี้ให้เปิดไฟล์ที่สร้างโดย ZAP-Hosting โดยไปที่โฟลเดอร์ดาวน์โหลดมาตรฐานของคุณ

:::info
**สำคัญ:** ให้ตั้งค่าตัวกรองเป็น "**ALL Files**" ตามภาพ เพราะไฟล์ .pri ที่ระบบสร้างจะไม่แสดงถ้าใช้ตัวกรองอื่น
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

เมื่อโหลดไฟล์แล้ว คุณสามารถใส่คอมเมนต์และรหัสผ่านสำหรับ key ได้ ในการตั้งรหัสผ่าน ให้กรอกรหัสเดียวกันในช่อง "**Key passphrase**" และ "**Confirm passphrase**"
*หมายเหตุ:* คุณสามารถปล่อยช่องว่างไว้และสร้าง key โดยไม่มีรหัสผ่านได้ แต่จะปลอดภัยน้อยลงและไม่แนะนำ เมื่อกรอกข้อมูลครบแล้ว ให้กดปุ่ม "**Save private key**" เพื่อบันทึก key ที่ใช้งานกับ PuTTY ได้

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

ตั้งชื่อไฟล์ .ppk และบันทึกไว้เพื่อใช้งานในภายหลัง


## การเชื่อมต่อด้วย SSH Key

เพื่อใช้ key ในการเชื่อมต่อ ต้องเชื่อมโยงกับ PuTTY ก่อน โดยคลิก "**SSH**" - "**Auth**" - "**Browse...**"

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

หา key ที่สร้างด้วย PuTTYGen แล้วกด "**Open**"

เพื่อไม่ต้องทำซ้ำทุกครั้ง แนะนำให้บันทึกการตั้งค่านี้ใน session โดยคลิก "**Session**" - "**Default Settings**" - "**Save**" ตามภาพ

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

ตอนนี้คุณสามารถล็อกอินเข้าเซิร์ฟเวอร์ด้วย PuTTY ได้ โดยจะเห็น "**Key comment**" ที่ตั้งไว้ใน PuTTYGen ด้วย

## ปิดการล็อกอินด้วยรหัสผ่าน

SSH key ถูกสร้างขึ้นเพื่อเพิ่มความปลอดภัย ถ้าการล็อกอินด้วยรหัสผ่าน SSH ยังเปิดอยู่ ความปลอดภัยของเซิร์ฟเวอร์ก็ยังไม่เปลี่ยนแปลง ดังนั้นต้องปิดการล็อกอินด้วยรหัสผ่าน SSH ตอนนี้ วิธีปิดจะแตกต่างกันระหว่าง Linux VPS กับ Linux root server ถ้าปิดล็อกอินถูกต้อง การเชื่อมต่อจะทำได้เฉพาะผู้ใช้ที่มี SSH key ที่คุณสร้างไว้เท่านั้น

### Linux VPS

คุณสามารถปิดล็อกอินด้วยรหัสผ่านได้ง่ายๆ ในแท็บ Access & Security
กดปุ่ม **Deactivate Password Login** ที่อยู่ข้างปุ่ม Generate SSH Key
เมื่อปิดแล้ว จะไม่สามารถล็อกอินเซิร์ฟเวอร์ด้วยรหัสผ่านได้อีก

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

สถานะ "**SSH login via password**" จะเปลี่ยนเป็น "**Inactive**" ด้วย

