---
id: dedicated-linux-sshkey
title: "เซิร์ฟเวอร์เฉพาะ: การสร้างและใช้งาน SSH Key สำหรับเซิร์ฟเวอร์ Linux"
description: "ค้นพบวิธีสร้างและจัดการ SSH Key อย่างปลอดภัยสำหรับเซิร์ฟเวอร์ Linux ของคุณ เพื่อเพิ่มความปลอดภัยในการเชื่อมต่อ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: SSH Key
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## สร้าง SSH Key

เพื่อการเชื่อมต่อที่ปลอดภัยกว่าแบบปกติที่ใช้รหัสผ่าน SSH แนะนำให้ใช้ SSH Key โดยให้เปิดแท็บ "**Access & Security**" ในแดชบอร์ดของเซิร์ฟเวอร์ Linux ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

ใน "**Access & Security**" คุณสามารถสร้างคีย์ได้ด้วยปุ่ม "**Generate SSH Key**"  
เมื่อกดปุ่มนี้ จะมีหน้าต่างป็อปอัปเปิดขึ้นและคีย์ที่สร้างแบบสุ่มจะถูกดาวน์โหลดลงเครื่อง PC ของคุณทันที  
เพื่อเพิ่มคีย์นี้เข้าเซิร์ฟเวอร์ ให้กดปุ่ม "**Add Key**"

:::info
สำหรับ Linux VPS คีย์จะถูกเพิ่มเข้าเซิร์ฟเวอร์โดยตรง ส่วนสำหรับ Linux Root Server จะต้องรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การเปลี่ยนแปลงมีผล
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

ถ้าต้องการคีย์เพิ่มเติม สามารถกดปุ่ม "**Generate Key**" ในหน้าต่างเดียวกันนี้ได้  
ที่ "**Key name**" คุณสามารถตั้งชื่อให้คีย์เพื่อแสดงในแผงควบคุม ZAP-Hosting ซึ่งแนะนำให้ตั้งชื่อเพื่อความง่ายในการจัดการ

เมื่อสร้างและเพิ่มคีย์ครบตามต้องการแล้ว คีย์เหล่านี้จะแสดงอยู่ใต้หัวข้อ "**Access & Security**"

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

ถ้าคุณมี public key ของตัวเองที่สร้างจากภายนอก ไม่ได้ผ่านแผงควบคุมของเรา สามารถเพิ่มได้โดยคลิกที่ไอคอน "**+**"

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

จะมีแผงว่างเปิดขึ้นให้คุณวาง public key ของคุณ จากนั้นกด "**Add Key**" เพื่อเพิ่มคีย์เข้าเซิร์ฟเวอร์และแสดงในแผงควบคุมของเรา

## แปลง OpenSSH เป็น PuTTY Private Key ด้วย PuTTYGen

SSH Key ที่สร้างจากแผงของเราเป็นฟอร์แมต OpenSSH  
ถ้าต้องการใช้กับ PuTTY ต้องแปลงคีย์เหล่านี้เป็นฟอร์แมต private key ของ PuTTY ก่อน  
คุณสามารถใช้โปรแกรม "**PuTTYGen**" ซึ่งจะติดตั้งมาพร้อมกับ PuTTY อัตโนมัติ

โปรแกรม PuTTYGen จะอยู่ในโฟลเดอร์หลักของ PuTTY  
โดยปกติโฟลเดอร์ PuTTY จะอยู่ที่ " **C:>Program Files>PuTTY**" ตามตัวอย่างในภาพ

เปิดโปรแกรม PuTTYGen แล้วคลิก "**File**" -> "**Load private key**"

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

จากนั้นเปิดไฟล์ที่ดาวน์โหลดจาก ZAP-Hosting  
โดยไปที่โฟลเดอร์ดาวน์โหลดปกติของคุณ

:::info
**สำคัญ:** ให้ตั้งค่าตัวกรองเป็น "**ALL Files**" ตามภาพ เพราะไฟล์ .pri ที่ระบบสร้างจะไม่แสดงถ้าใช้ตัวกรองอื่น
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

เมื่อโหลดไฟล์แล้ว คุณสามารถใส่คอมเมนต์และรหัสผ่านสำหรับคีย์ได้  
ถ้าต้องการตั้งรหัสผ่าน ให้กรอกรหัสเดียวกันในช่อง "**Key passphrase**" และ "**Confirm passphrase**"  
*หมายเหตุ:* คุณสามารถปล่อยช่องว่างไว้เพื่อสร้างคีย์โดยไม่มีรหัสผ่านได้ แต่จะปลอดภัยน้อยกว่าและไม่แนะนำ  
เมื่อกรอกข้อมูลครบแล้ว ให้กดปุ่ม "**Save private key**" เพื่อบันทึกคีย์ที่รองรับ PuTTY

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

ตั้งชื่อไฟล์ .ppk และบันทึกไว้เพื่อใช้งานในภายหลัง

## การเชื่อมต่อด้วย SSH Key

เพื่อใช้คีย์สำหรับเชื่อมต่อ ต้องเชื่อมโยงกับ PuTTY ก่อน  
ให้คลิก "**SSH**" - "**Auth**" - "**Browse...**"

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

หาไฟล์คีย์ที่สร้างด้วย PuTTYGen แล้วกด "**Open**"

เพื่อไม่ต้องทำขั้นตอนนี้ซ้ำทุกครั้ง แนะนำให้บันทึกการตั้งค่าในเซสชัน  
โดยคลิก "**Session**" - "**Default Settings**" - "**Save**" ตามภาพ

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

ตอนนี้คุณสามารถล็อกอินเข้าเซิร์ฟเวอร์ด้วย PuTTY ได้  
และจะเห็น "**Key comment**" ที่ตั้งไว้ใน PuTTYGen แสดงขึ้นมา

## ปิดการล็อกอินด้วยรหัสผ่าน

SSH Key ถูกสร้างขึ้นเพื่อเพิ่มความปลอดภัย  
ถ้ายังล็อกอินด้วยรหัสผ่าน SSH ได้อยู่ ความปลอดภัยของเซิร์ฟเวอร์ก็ยังไม่เปลี่ยนแปลง  
ดังนั้นต้องปิดการล็อกอินด้วยรหัสผ่านผ่าน SSH  
วิธีปิดล็อกอินจะแตกต่างกันระหว่าง Linux VPS กับ Linux Root Server  
ถ้าปิดล็อกอินถูกต้อง การเชื่อมต่อจะทำได้เฉพาะผู้ใช้ที่มี SSH Key ที่คุณสร้างไว้เท่านั้น

### Linux VPS

คุณสามารถปิดล็อกอินด้วยรหัสผ่านได้ง่ายๆ ในแท็บ Access & Security  
กดปุ่ม **Deactivate Password Login** ที่อยู่ข้างปุ่ม Generate SSH Key  
เมื่อปิดแล้ว จะไม่สามารถล็อกอินเซิร์ฟเวอร์ด้วยรหัสผ่านได้อีก

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

สถานะ "**SSH login via password**" จะแสดงเป็น "**Inactive**" ด้วย


<InlineVoucher />